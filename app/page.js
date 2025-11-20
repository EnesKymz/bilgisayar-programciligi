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
      cikmissorular:[],
      onemli:(
        <div class="p-4 space-y-4">
  <div>
    <h2 class="text-xl font-bold mb-2">1. Ünite: Dijital Dönüşümün Temelleri</h2>
    <p>Bu üniteden genellikle 2-3 soru gelmektedir. Odaklanman gerekenler:</p>
    <ul class="list-disc pl-6 mt-2 space-y-1">
      <li><b>Toplum 5.0 (Süper Akıllı Toplum):</b> Siber alan + fiziksel alan entegrasyonu, insan odaklılık.</li>
      <li><b>Endüstri Evreleri:</b> 1.0 (Buhar), 2.0 (Elektrik), 3.0 (Otomasyon), 4.0 (Siber-Fiziksel Sistemler, IoT, Büyük Veri).</li>
      <li><b>Bilgi Toplumu Özellikleri:</b> Yenilikçi, işbirlikçi birey.</li>
      <li><b>Tarihsel İlkler:</b> ENIAC, Odyssey vb.</li>
    </ul>
  </div>

  <div>
    <h2 class="text-xl font-bold mb-2">2. Ünite: Eğitimin Dönüşümü</h2>
    <ul class="list-disc pl-6 space-y-1">
      <li>
        <b>Web Evreleri:</b>
        <ul class="list-circle pl-6 mt-1">
          <li><b>Web 1.0:</b> Statik, tek yönlü.</li>
          <li><b>Web 2.0:</b> Etkileşimli, kullanıcı içerik üretebilir.</li>
          <li><b>Web 3.0:</b> Semantik Web, yapay zekâ.</li>
        </ul>
      </li>
      <li><b>Eğitim Kuşakları:</b> Eğitim 1.0 (pasif öğrenci), 2.0 (işbirliği), 3.0–4.0.</li>
      <li><b>Dijital Yerli & Dijital Göçmen:</b> Teknolojiye doğan vs. sonradan uyum sağlayan.</li>
    </ul>
  </div>

  <div>
    <h2 class="text-xl font-bold mb-2">3. Ünite: Devletin Dönüşümü</h2>
    <ul class="list-disc pl-6 space-y-1">
      <li><b>Dijital Vatandaşlık (9 Boyut):</b> Dijital erişim, dijital ticaret, dijital okuryazarlık, dijital etik vb.</li>
      <li><b>E-Devlet Modelleri:</b> G2C (vatandaşa), G2B (işletmeye).</li>
      <li><b>Şeffaflık Kanunları:</b> Bilgi Edinme Hakkı, Kamu Mali Yönetimi.</li>
    </ul>
  </div>

  <div>
    <h2 class="text-xl font-bold mb-2">4. Ünite: Kültür, Sanat ve Eğlencenin Dönüşümü</h2>
    <ul class="list-disc pl-6 space-y-1">
      <li><b>Dijital Retorik:</b> Dijital ortamda ikna edici söylem.</li>
      <li><b>NFT:</b> Dijital varlıkların benzersiz sahipliği.</li>
      <li><b>Dijital Obezite:</b> Aşırı dijital tüketim.</li>
      <li><b>E-Spor Bileşenleri:</b> Yönetim, analitik, medya.</li>
    </ul>
  </div>

  <div>
    <h2 class="text-xl font-bold">Sınava Girmeden Kesin Bilmen Gerekenler</h2>
    <ul class="list-disc pl-6 mt-1 space-y-1">
      <li>Toplum 5.0</li>
      <li>Web 1.0 vs Web 2.0</li>
      <li>Eğitim 1.0</li>
      <li>Dijital Retorik</li>
      <li>Dijital Erişim</li>
      <li>NFT</li>
    </ul>
  </div>
</div>

      )
    },
    ingilizce: {
      id: "ingilizce",
      title: "İngilizce - I",
      description: "İngilizce",
      pdfs: [],
      cikmissorular:[]
    },
    bilisimteknolojileri: {
      id: "bilisimteknolojileri",
      title: "Bilişim Teknolojileri",
      description: "Programlama, Veri Yapıları",
      pdfs: [],
      cikmissorular:[]
    },
    islemtablosuprogramlama: {
      id: "islemtablosuprogramlama",
      title: "İşlem Tablosu Programlama",
      description: "Programlama, Veri Yapıları",
      pdfs: [],
      cikmissorular:[]
    },
    kullanicideneyimtasarimi: {
      id: "kullanicideneyimtasarimi",
      title: "Kullanıcı Deneyimi Tasarımı",
      description: "Programlama, Veri Yapıları",
      pdfs: [],
      cikmissorular:[]
    },
    webtabanlikodlama: {
      id: "webtabanlikodlama",
      title: "Web Tabanlı Kodlama",
      description: "Kodlamanın Temelleri",
      pdfs: [],
      cikmissorular:[]
    },
  });

  const [query, setQuery] = useState("");
  const [selectedCourse, setSelectedCourse] = useState({value:"",course:[]});
  const [loading,setLoading] = useState(false);
  const fileInputRef = useRef(null); 
useEffect(() => {
  const getData = async () => {
    try {
      setLoading(true);
      const data = await listFiles();
      if (!data) return;

      setCourses(prev => {
        const updated = { ...prev };

        for (const key of Object.keys(prev)) {
          // API'den gelen veriyi al (Artık data[key] bir obje: { pdfs: [], cikmissorular: [] })
          const courseData = data[key] || {};

          // --- 1. PDF'leri İşle (Mevcut Mantık) ---
          const incomingPdfs = courseData.pdfs || [];
          const currentPdfs = prev[key].pdfs || [];
          const combinedPdfs = [...currentPdfs, ...incomingPdfs];

          const uniquePdfs = combinedPdfs.filter((pdf, index, self) =>
            index === self.findIndex((t) => t.name === pdf.name)
          );

          // --- 2. ÇIKMIŞ SORULARI İşle (Yeni Eklenen Kısım - Aynı Mantık) ---
          const incomingQuestions = courseData.cikmissorular || [];
          // State'te henüz bu alan yoksa boş dizi kabul et
          const currentQuestions = prev[key].cikmissorular || [];
          const combinedQuestions = [...currentQuestions, ...incomingQuestions];

          const uniqueQuestions = combinedQuestions.filter((q, index, self) =>
            index === self.findIndex((t) => t.name === q.name)
          );

          // Güncellenmiş objeyi oluştur
          updated[key] = {
            ...prev[key],
            pdfs: uniquePdfs,
            cikmissorular: uniqueQuestions // Yeni temizlenmiş listeyi buraya atıyoruz
          };
        }

        return updated;
      });
    } catch (error) {
      console.error("Veri hatası:", error);
    } finally {
      setLoading(false);
    }
  };

  getData();
}, []);
  function openCourse(value,course) {
    setSelectedCourse(value,course);
  }

  function closeCourse() {
    setSelectedCourse({value:"",course:[]});
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

  function onFileChange(e) {
    const file = e.target.files && e.target.files[0];
    const courseId = e.target.dataset.course;
    if (file && courseId) {
      handleAddPdf(courseId, file);
      e.target.value = null; // temizle
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6 md:p-12 font-sans">
      <header className="max-w-6xl mx-auto mb-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900">Dersler & PDF Arşivi</h1>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        <section className="md:col-span-2">
          <div className="grid gap-4">
            {!loading && Object.values(courses).length > 0 ? (
            Object.values(courses).map((course) => (
              <article
                key={course.id}
                className="bg-white rounded-2xl p-6 shadow border border-gray-100 hover:shadow-lg transition"
              >
                <div className="flex items-start justify-between">
                  {/* Başlık alanı */}
                  <div className="flex items-center gap-3">
                    <span className="text-xl font-bold text-gray-800">{course.title}</span>

                    <button
                      onClick={() => setSelectedCourse({ value: "onemli", course })}
                      className="w-7 h-7 flex items-center justify-center bg-gray-300 text-white rounded-full text-sm hover:bg-gray-800"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 16 16">
                      <rect width="16" height="16" fill="none" />
                      <path fill="#448aff" d="M15 8.014A7.457 7.457 0 0 0 8.014 15h-.028A7.456 7.456 0 0 0 1 8.014v-.028A7.456 7.456 0 0 0 7.986 1h.028A7.457 7.457 0 0 0 15 7.986z" />
                    </svg>
                    </button>
                  </div>
                </div>

                {/* Etiketler + Butonlar */}
                <div className="mt-4 flex flex-wrap items-center gap-3">
                  {/* Sayaçlar */}
                  <span className="text-sm bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full">
                    {course.pdfs.length} Not • {course.cikmissorular.length} Çıkmış Soru
                  </span>

                  {/* Notları görüntüle */}
                  <button
                    onClick={() => openCourse({ value: "notlar", course })}
                    className="text-sm bg-indigo-600 text-white px-4 py-1.5 rounded-md hover:bg-indigo-700 transition"
                  >
                    Görüntüle / İndir
                  </button>

                  {/* Çıkmış sorular */}
                  <button
                    onClick={() => openCourse({ value: "cikmissorular", course })}
                    className="text-sm bg-red-600 text-white px-4 py-1.5 rounded-md hover:bg-red-700 transition"
                  >
                    Çıkmış Sorular
                  </button>
                </div>
              </article>
            ))
            ) : (
              <div className="text-center text-gray-600">Dosyalar yükleniyor lütfen bekleyiniz...</div>
            )}

          </div>
        </section>

        <aside className="space-y-4">
          <div className="bg-white p-4 rounded-2xl shadow">
            <h3 className="font-semibold">Yardımcı Bilgiler</h3>
            <ul className="text-sm text-gray-600 mt-2 space-y-2">
              <li>- PDF&apos;leri indirmek için &apos;İndir&apos; butonuna tıklayın.</li>
            </ul>
          </div>
        </aside>
      </main>

      {/* Modal: Seçili dersin PDF listesi */}
      {selectedCourse.value==="notlar" ? (
        <div className="fixed inset-0 z-40 flex items-center justify-center">
          <div className="absolute inset-0 bg-black/40" onClick={closeCourse}></div>
          <div className="relative bg-white w-full max-w-3xl mx-4 rounded-2xl p-6 shadow-xl z-50">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-2xl font-semibold text-black">{selectedCourse.course.title}</h3>
                <p className="text-gray-500 mt-1">{selectedCourse.course.description}</p>
              </div>
              <div className="space-x-2">
                <button onClick={closeCourse} className="text-gray-500 hover:text-gray-800">Kapat</button>
              </div>
            </div>

            <div className="mt-6">
              {selectedCourse.course.pdfs.length === 0 && (
                <div className="text-center text-gray-600">Bu derse ait PDF bulunmuyor.</div>
              )}

                  <ul className="space-y-3 overflow-auto max-h-[400px] pr-2">
                  {selectedCourse.course.pdfs.map((pdf) => (
                  <li key={pdf.id} className="flex items-center justify-between bg-gray-50 p-3 rounded-lg">
                    <div>
                      <div className="font-medium text-black">{pdf.name}</div>
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
      ) 
      : selectedCourse.value==="cikmissorular" ? (
        <div className="fixed inset-0 z-40 flex items-center justify-center">
          <div className="absolute inset-0 bg-black/40" onClick={closeCourse}></div>
          <div className="relative bg-white w-full max-w-3xl mx-4 rounded-2xl p-6 shadow-xl z-50">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-2xl font-semibold text-black">{selectedCourse.course.title}</h3>
                <p className="text-gray-500 mt-1">{selectedCourse.course.description}</p>
              </div>
              <div className="space-x-2">
                <button onClick={closeCourse} className="text-gray-500 hover:text-gray-800">Kapat</button>
              </div>
            </div>

            <div className="mt-6">
              {selectedCourse.course.cikmissorular.length === 0 && (
                <div className="text-center text-gray-600">Bu derse ait PDF bulunmuyor.</div>
              )}

                  <ul className="space-y-3 overflow-auto max-h-[400px] pr-2">
                  {selectedCourse.course.cikmissorular.map((pdf) => (
                  <li key={pdf.id} className="flex items-center justify-between bg-gray-50 p-3 rounded-lg">
                    <div>
                      <div className="font-medium text-black">{pdf.name}</div>
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
      )
      : selectedCourse.value==="onemli" ?(
         
  <div className="fixed inset-0 z-40 flex items-center justify-center">
          <div className="absolute inset-0 bg-black/40" onClick={closeCourse}></div>
          <div className="relative bg-white w-full max-w-3xl mx-4 rounded-2xl p-6 shadow-xl z-50">
            <div className="flex items-start justify-between">
              <div className="space-y-3 overflow-auto max-h-[400px] pr-2">
                <h3 className="text-2xl font-semibold text-black">{selectedCourse.course.title} </h3>
                <p className="text-gray-500 mt-1">{selectedCourse.course.onemli}</p>
              </div>
              <div className="space-x-2">
                <button onClick={closeCourse} className="text-gray-500 hover:text-gray-800">Kapat</button>
              </div>
            </div>

            <div className="mt-6">
              {selectedCourse.course.pdfs.length === 0 && (
                <div className="text-center text-gray-600">Bu derse ait AI özet bulunmuyor.</div>
              )}

                  <ul className="space-y-3 overflow-auto max-h-[400px] pr-2">
              </ul>

              <div className="mt-6">
                <div className="mt-3 flex items-center gap-3">
                  <span className="text-sm text-gray-500">Bu içerik yapay zekâ tarafından üretilmiştir. Bilgilendirme amaçlıdır; kesinlik içermez.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
      :(<div></div>)}

      {/* Gizli file input - admin için */}
      <input ref={fileInputRef} type="file" accept="application/pdf" className="hidden" onChange={onFileChange} />

      <footer className="max-w-6xl mx-auto mt-12 text-center text-gray-500 text-sm">© {new Date().getFullYear()} Dersler - Eğitim Portalı</footer>
    </div>
  );
}
