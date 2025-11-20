"use server"
const { google } = require("googleapis");

const credentials = JSON.parse(process.env.GOOGLE_SERVICE_ACCOUNT);
const auth = new google.auth.GoogleAuth({
  credentials,
  scopes: ["https://www.googleapis.com/auth/drive"],
});

const drive = google.drive({ version: "v3", auth });
const folderId = "1QYL6n2BvQAaEEbth1Bu1ZUyP6vDPu78X";
const folderPdfs = {};
export async function listFiles() {
  const folderPdfs = {};

  // 1. Yardımcı: Belirli bir klasördeki tüm PDF'leri getir (Çıkmış sorular klasörünün içi için)
  async function getPdfsInFolder(folderId) {
    const files = [];
    const res = await drive.files.list({
      q: `'${folderId}' in parents and mimeType = 'application/pdf' and trashed=false`,
      fields: "files(id, name)",
      pageSize: 1000,
    });
    
    if (res.data.files) {
      for (const file of res.data.files) {
        files.push({
          id: file.id,
          name: file.name,
          url: `https://drive.google.com/uc?id=${file.id}&export=download`
        });
      }
    }
    return files;
  }

  // 2. Ana Fonksiyon: Kök klasördeki dersleri gez
  async function traverseCourses(rootId) {
    // Önce kök dizindeki Ders Klasörlerini bul (örn: dijitaldonusum, bilisimteknolojileri)
    const res = await drive.files.list({
      q: `'${rootId}' in parents and mimeType = 'application/vnd.google-apps.folder' and trashed=false`,
      fields: "files(id, name)",
      pageSize: 100,
    });

    for (const courseFolder of res.data.files) {
      const courseName = courseFolder.name; // örn: 'dijitaldonusum'
      
      // Yapıyı oluştur: Hem notlar hem sorular için boş diziler hazırla
      folderPdfs[courseName] = {
        pdfs: [],           // Ders notları buraya
        cikmissorular: []   // Çıkmış sorular buraya
      };

      // Bu dersin içine bak (Dosyalar ve Alt Klasörler)
      const contentsRes = await drive.files.list({
        q: `'${courseFolder.id}' in parents and trashed=false`,
        fields: "files(id, name, mimeType)",
        pageSize: 1000,
      });

      for (const file of contentsRes.data.files) {
        
        // A) Eğer dosya PDF ise -> Ders Notudur
        if (file.mimeType === "application/pdf") {
          folderPdfs[courseName].pdfs.push({
            id: file.id,
            name: file.name,
            url: `https://drive.google.com/uc?id=${file.id}&export=download`
          });
        }
        
        // B) Eğer dosya Klasör ise ve adı "cikmis" veya "sorular" içeriyorsa -> Çıkmış Sorulardır
        else if (file.mimeType === "application/vnd.google-apps.folder") {
          const folderNameLower = file.name.toLowerCase();
          // Klasör isminde 'cikmis' veya 'soru' geçiyorsa içine gir
          if (folderNameLower.includes("cikmis") || folderNameLower.includes("soru")) {
            const questions = await getPdfsInFolder(file.id);
            folderPdfs[courseName].cikmissorular.push(...questions);
          }
        }
      }
    }
  }

  // folderId değişkeninin kapsamda (scope) tanımlı olduğundan emin olun veya parametre olarak alın.
  // Eğer folderId dışarıdan gelmiyorsa buraya hardcode yazın: const folderId = "DRIVE_KLASOR_ID";
  await traverseCourses(folderId);
  
  return folderPdfs;
}