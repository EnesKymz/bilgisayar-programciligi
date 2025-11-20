"use client"
import React, { useState, useRef, useEffect } from "react";
import { listFiles } from "./server/getData";

export default function CoursesWebsite() {

  const [courses, setCourses] = useState({
    dijitaldonusum: { 
      id: "dijitaldonusum",
      title: "Dijital Dönüşüm",
      description: "Dijital Dönüşüm",
      pdfs: [],
    },
    ingilizce: {
      id: "ingilizce",
      title: "İngilizce - I",
      description: "İngilizce",
      pdfs: [],
    },
    bilisimteknolojileri: {
      id: "bilisimteknolojileri",
      title: "Bilişim Teknolojileri",
      description: "Programlama, Veri Yapıları",
      pdfs: [],
    },
    islemtablosuprogramlama: {
      id: "islemtablosuprogramlama",
      title: "İşlem Tablosu Programlama",
      description: "Programlama, Veri Yapıları",
      pdfs: [],
    },
    kullanicideneyimtasarimi: {
      id: "kullanicideneyimtasarimi",
      title: "Kullanıcı Deneyimi Tasarımı",
      description: "Programlama, Veri Yapıları",
      pdfs: [],
    },
    webtabanlikodlama: {
      id: "webtabanlikodlama",
      title: "Web Tabanlı Kodlama",
      description: "Kodlamanın Temelleri",
      pdfs: [],
    },
  });

  const [query, setQuery] = useState("");
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [loading,setLoading] = useState(false);
  const fileInputRef = useRef(null); 
useEffect(() => {
  if(courses.dijitaldonusum.pdfs.length >0) return;
  const getData=async()=>{
    try{
    setLoading(true)
    const data = await listFiles(); 
     if (!data) return;
    
    setCourses(prev =>{
      const updatedCourses = {...prev};
      for (const [key, pdfList] of Object.entries(data)) {
        if (updatedCourses[key]) {
          updatedCourses[key] = {
          ...updatedCourses[key],
          pdfs: [
            ...updatedCourses[key].pdfs,
            ...pdfList.filter(newPdf => 
              !updatedCourses[key].pdfs.some(oldPdf => oldPdf.id === newPdf.id)
            )
          ]
        };
        }
      }
return updatedCourses;
});
  
}catch(error) {
  console.error(error)
}finally{
  setLoading(false)
}
  }
  getData()
  
 
}, []); 
  function openCourse(course) {
    setSelectedCourse(course);
  }

  function closeCourse() {
    setSelectedCourse(null);
  }

  // PDF indirme için doğrudan <a> kullanıyoruz (download) — cross-origin durumunda sunucuda doğru headers gerekir

  function handleAddPdf(courseId, file) {
    if (!file) return;
    const url = URL.createObjectURL(file); // tarayıcıda geçici link
    setCourses((prev) =>
      prev.map((c) =>
        c.id === courseId
          ? {
              ...c,
              pdfs: [
                ...c.pdfs,
                { id: Date.now(), name: file.name, url },
              ],
            }
          : c
      )
    );
  }

  // Admin görünümünde 'upload' butonu tıklandığında
  function handleUploadClick(courseId) {
    if (!fileInputRef.current) return;
    fileInputRef.current.dataset.course = courseId;
    fileInputRef.current.click();
  }

  function onFileChange(e) {
    const file = e.target.files && e.target.files[0];
    const courseId = e.target.dataset.course;
    if (file && courseId) {
      handleAddPdf(courseId, file);
      e.target.value = null; // temizle
    }
  }

  function handleRemovePdf(courseId, pdfId) {
    if (!confirm("Bu PDF'i silmek istediğinizden emin misiniz?")) return;
    setCourses((prev) =>
      prev.map((c) => (c.id === courseId ? { ...c, pdfs: c.pdfs.filter((p) => p.id !== pdfId) } : c))
    );
  }

  // Arama + filtreleme
 /* const filtered = courses.filter(
    (c) =>
      c.title.toLowerCase().includes(query.toLowerCase()) ||
      c.description.toLowerCase().includes(query.toLowerCase())
  );
*/
  return (
    <div className="min-h-screen bg-gray-50 p-6 md:p-12 font-sans">
      <header className="max-w-6xl mx-auto mb-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900">Dersler & PDF Arşivi</h1>
          </div>
          <div className="hidden md:block">
            <input
              aria-label="Ders ara"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Ders, konu veya açıklama ara..."
              className="border rounded-lg px-3 py-2 w-72 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        <section className="md:col-span-2">
          <div className="grid gap-4">
            {!loading ?(
            Object.values(courses).map((course) => (
  <article key={course.id} className="bg-white rounded-2xl p-6 shadow">
    <div className="flex items-start justify-between">
      <div>
        <h2 className="text-xl font-semibold">{course.title}</h2>
        <div className="mt-3 flex flex-wrap gap-2">
          <span className="text-sm bg-indigo-50 text-indigo-600 px-2 py-1 rounded">{course.pdfs.length} PDF</span>
          <button
            onClick={() => openCourse(course)}
            className="ml-2 text-sm bg-indigo-600 text-white px-3 py-1 rounded hover:opacity-95"
          >
            Görüntüle / İndir
          </button>
        </div>
      </div>
    </div>
  </article>
            ))):(<div>Dosyalar yükleniyor lütfen bekleyiniz...</div>)}
          </div>
        </section>

        <aside className="space-y-4">
          <div className="bg-white p-4 rounded-2xl shadow">
            <h3 className="font-semibold">Hızlı Ara</h3>
            <input
              aria-label="Mobil arama"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Ders adı girin..."
              className="mt-3 border rounded-lg px-3 py-2 w-full shadow-sm"
            />
          </div>

          <div className="bg-white p-4 rounded-2xl shadow">
            <h3 className="font-semibold">Yardımcı Bilgiler</h3>
            <ul className="text-sm text-gray-600 mt-2 space-y-2">
              <li>- PDF&apos;leri indirmek için &apos;İndir&apos; butonuna tıklayın.</li>
            </ul>
          </div>
        </aside>
      </main>

      {/* Modal: Seçili dersin PDF listesi */}
      {selectedCourse && (
        <div className="fixed inset-0 z-40 flex items-center justify-center">
          <div className="absolute inset-0 bg-black/40" onClick={closeCourse}></div>
          <div className="relative bg-white w-full max-w-3xl mx-4 rounded-2xl p-6 shadow-xl z-50">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-2xl font-semibold">{selectedCourse.title}</h3>
                <p className="text-gray-500 mt-1">{selectedCourse.description}</p>
              </div>
              <div className="space-x-2">
                <button onClick={closeCourse} className="text-gray-500 hover:text-gray-800">Kapat</button>
              </div>
            </div>

            <div className="mt-6">
              {selectedCourse.pdfs.length === 0 && (
                <div className="text-center text-gray-600">Bu derse ait PDF bulunmuyor.</div>
              )}

              <ul className="space-y-3">
                {selectedCourse.pdfs.map((pdf) => (
                  <li key={pdf.id} className="flex items-center justify-between bg-gray-50 p-3 rounded-lg">
                    <div>
                      <div className="font-medium">{pdf.name}</div>
                      <div className="text-xs text-gray-500">{Math.round((pdf.size || 0) / 1024)} KB</div>
                    </div>

                    <div className="flex items-center gap-2">
                      <a href={pdf.url} target="_blank" rel="noreferrer" download={pdf.name} className="text-sm bg-indigo-600 text-white px-3 py-1 rounded">
                        İndir
                      </a>
                    </div>
                  </li>
                ))}
              </ul>

              <div className="mt-6">
                <div className="mt-3 flex items-center gap-3">
                  <span className="text-sm text-gray-500">Seçilen dosya tarayıcıda geçici olarak kaydedilir. Gerçek kullanım için sunucu depolama kullanın.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Gizli file input - admin için */}
      <input ref={fileInputRef} type="file" accept="application/pdf" className="hidden" onChange={onFileChange} />

      <footer className="max-w-6xl mx-auto mt-12 text-center text-gray-500 text-sm">© {new Date().getFullYear()} Dersler - Eğitim Portalı</footer>
    </div>
  );
}
