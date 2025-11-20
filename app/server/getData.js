"use server"
const { google } = require("googleapis");

const auth = new google.auth.GoogleAuth({
  keyFile: "service-account.json",
  scopes: ["https://www.googleapis.com/auth/drive"],
});

const drive = google.drive({ version: "v3", auth });
const folderId = "1QYL6n2BvQAaEEbth1Bu1ZUyP6vDPu78X";
const folderPdfs = {};
export async function listFiles() {

  // Bu fonksiyon hem PDF hem klasörleri listeler
  async function traverseFolder(folderId) {
  const res = await drive.files.list({
    q: `'${folderId}' in parents and trashed=false`,
    fields: "files(id, name, mimeType)",
    pageSize: 1000,
  });
  for (const file of res.data.files) {
    if (file.mimeType === "application/pdf") {
      const parentRes = await drive.files.get({ fileId: file.id, fields: "parents" });
      const folderNameRes = await drive.files.get({ fileId: parentRes.data.parents[0], fields: "name" });
      const folderName = folderNameRes.data.name;
      if (!folderPdfs[folderName]) folderPdfs[folderName] = [];
      folderPdfs[folderName].push({
        id: file.id,
        name: file.name,
        url: `https://drive.google.com/uc?id=${file.id}&export=download`,
      });
    } else if (file.mimeType === "application/vnd.google-apps.folder") {
      await traverseFolder(file.id); 
    }
  }
}

  await traverseFolder(folderId);
  console.log(folderPdfs)
  return folderPdfs;
}