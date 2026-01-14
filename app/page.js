"use client"
import React, { useState, useRef, useEffect } from "react";
import { listFiles } from "./server/getData";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { lessonData } from "@/lessonData/lesson";

export default function CoursesWebsite() {

  const [courses,setCourses] = useState(lessonData);

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

        for (const key of Object.keys(courses)) {
          // API'den gelen veriler (Artık data[key] bir obje: { pdfs: [], cikmissorular: [] })
          const courseData = data[key] || {};

          // --- 1. Vize Notları ---
          const incomingPdfs = courseData.pdfs || [];
          const currentPdfs = prev[key].pdfs || [];
          const combinedPdfs = [...currentPdfs, ...incomingPdfs];

          const uniquePdfs = combinedPdfs.filter((pdf, index, self) =>
            index === self.findIndex((t) => t.name === pdf.name)
          );

          // --- 2. ÇIKMIŞ SORULAR ---
          const incomingQuestions = courseData.cikmissorular || [];
          // State'te henüz bu alan yoksa boş dizi kabul et
          const currentQuestions = prev[key].cikmissorular || [];
          const combinedQuestions = [...currentQuestions, ...incomingQuestions];

          const uniqueQuestions = combinedQuestions.filter((q, index, self) =>
            index === self.findIndex((t) => t.name === q.name)
          );
          // ---3. Final Notlar ---
          const incomingFinal = courseData.finalnotlar || [];
          const currentFinal = prev[key].finalnotlar || [];
          const combinedFinal = [...currentFinal, ...incomingFinal];

          const uniqueFinal = combinedFinal.filter((q, index, self) =>
            index === self.findIndex((t) => t.name === q.name)
          );
          // ---4. Kitaplar ---
          const incomingKitap = courseData.kitap || [];
          const currentKitap = prev[key].kitap || [];
          const combinedKitap = [...currentKitap, ...incomingKitap];

          const uniqueKitap = combinedKitap.filter((q, index, self) =>
            index === self.findIndex((t) => t.name === q.name)
          );
          // Güncellenmiş objeyi oluştur
          updated[key] = {
            ...prev[key],
            pdfs: uniquePdfs,
            cikmissorular: uniqueQuestions,
            finalnotlar: uniqueFinal,
            kitap: uniqueKitap
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
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900">Bilgisayar Programcılığı</h1>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
  <section className="md:col-span-2">
    <div className="grid gap-4">
      {!loading && Object.values(courses).length > 0 ? (
        Object.values(courses).map((course, index) => (
          <div key={course.id} className="border rounded-xl bg-white shadow-sm overflow-hidden">
            {/* --- ANA Accordion --- */}
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value={`course-${index}`} className="border-none">
                <AccordionTrigger className="px-6 py-4 hover:bg-gray-50 hover:no-underline">
                  <div className="flex flex-col md:flex-row md:items-center justify-between w-full pr-4 gap-2 text-left">  
                    <span className="text-xl font-bold text-gray-800">
                      {course.title}
                    </span>
                    <span className="text-xs font-medium bg-indigo-50 text-indigo-700 px-3 py-1 rounded-full whitespace-nowrap">
                      {course.pdfs.length} Vize • {course.finalnotlar.length} Final • {course.cikmissorular.length} Soru Dosyası • {course.kitap.length} Kitap
                    </span>  
                  </div>
                </AccordionTrigger>
                <AccordionContent className="bg-gray-50/50 px-6 pb-6 pt-2"> 
                  {/* 2. Accordion İç İçe Accordion  */}
                  <Accordion type="single" collapsible className="w-full flex flex-col gap-y-3">
                    {/* 1. Vize Notları */}
                    <AccordionItem value="vize-files" className="border bg-white rounded-lg px-0 overflow-hidden">
                      <AccordionTrigger className="px-4 py-3 font-semibold text-indigo-700 hover:bg-indigo-50 hover:no-underline">
                        <span>📄 Vize Notları</span>
                        <span className="text-xs text-gray-500 bg-gray-100 px-2 py-0.5 rounded ml-2">{course.pdfs.length} Dosya</span>
                      </AccordionTrigger>
                      <AccordionContent className="px-4 py-2 border-t">
                        <div className="mt-6">
                        {course.pdfs.length === 0 && (
                            <div className="text-center text-gray-600">Bu derse ait PDF bulunmuyor.</div>
                        )}
                            {course.pdfs.map((pdf) => (
                              <div key={pdf.id} className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-gray-50 p-3 rounded-lg mb-2">
                                
                                <div className="flex-1 min-w-0">
                                  <div className="font-medium text-black break-words">
                                    {pdf.name}
                                  </div>
                                  <div className="text-xs text-gray-500 mt-1">{pdf.size}</div>
                                </div>

                                <div className="flex items-center gap-2 flex-shrink-0 w-full sm:w-auto mt-2 sm:mt-0">
                                  <a 
                                    href={`https://drive.google.com/file/d/${pdf.id}/preview`} 
                                    target="_blank" 
                                    rel="noreferrer" 
                                    className="text-sm bg-indigo-600 text-white px-3 py-2 rounded text-center flex-1 sm:flex-none"
                                  >
                                    Görüntüle
                                  </a>
                                  
                                  <a 
                                    href={pdf.url} 
                                    target="_blank" 
                                    rel="noreferrer" 
                                    download={pdf.name} 
                                    className="text-sm bg-indigo-600 text-white px-3 py-2 rounded text-center flex-1 sm:flex-none"
                                  >
                                    İndir
                                  </a>
                                </div>
                              </div>
                            ))}
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                    {/* 2. Final Notları */}
                    <AccordionItem value="finalnotlari" className="border bg-white rounded-lg px-0 overflow-hidden">
                      <AccordionTrigger className="px-4 py-3 font-semibold text-indigo-700 hover:bg-indigo-50 hover:no-underline">
                        <span>🎓 Final Notları</span>
                        <span className="text-xs text-gray-500 bg-gray-100 px-2 py-0.5 rounded ml-2">{course.finalnotlar.length} Dosya</span>
                      </AccordionTrigger>
                      <AccordionContent className="px-4 py-2 border-t">
                        <div className="mt-6">
                        {course.pdfs.length === 0 && (
                            <div className="text-center text-gray-600">Bu derse ait PDF bulunmuyor.</div>
                        )}
                            {course.finalnotlar.map((pdf) => (
                              <div key={pdf.id} className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-gray-50 p-3 rounded-lg mb-2">
                                
                                <div className="flex-1 min-w-0">
                                  <div className="font-medium text-black break-words">
                                    {pdf.name}
                                  </div>
                                  <div className="text-xs text-gray-500 mt-1">{pdf.size}</div>
                                </div>

                                <div className="flex items-center gap-2 flex-shrink-0 w-full sm:w-auto mt-2 sm:mt-0">
                                  <a 
                                    href={`https://drive.google.com/file/d/${pdf.id}/preview`} 
                                    target="_blank" 
                                    rel="noreferrer" 
                                    className="text-sm bg-indigo-600 text-white px-3 py-2 rounded text-center flex-1 sm:flex-none"
                                  >
                                    Görüntüle
                                  </a>
                                  
                                  <a 
                                    href={pdf.url} 
                                    target="_blank" 
                                    rel="noreferrer" 
                                    download={pdf.name} 
                                    className="text-sm bg-indigo-600 text-white px-3 py-2 rounded text-center flex-1 sm:flex-none"
                                  >
                                    İndir
                                  </a>
                                </div>
                              </div>
                            ))}
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                    {/* 3. Çıkmış Sorular */}
                    <AccordionItem value="cikmis-files" className="border bg-white rounded-lg px-0 overflow-hidden">
                      <AccordionTrigger className="px-4 py-3 font-semibold text-indigo-700 hover:bg-indigo-50 hover:no-underline">
                         <span>❓ Çıkmış Sorular</span>
                         <span className="text-xs text-gray-500 bg-gray-100 px-2 py-0.5 rounded ml-2">{course.cikmissorular.length} Dosya</span>
                      </AccordionTrigger>
                      <AccordionContent className="px-4 py-2 border-t">
                        <div className="mt-6">
                            {course.cikmissorular.length === 0 && (
                                <div className="text-center text-gray-600">Bu derse ait PDF bulunmuyor.</div>
                            )} 
                                {course.cikmissorular.map((pdf) => (
                                <div key={pdf.id} className="flex items-center justify-between bg-gray-50 p-3 rounded-lg">
                                    <div>
                                    <div className="font-medium text-black">{pdf.name}</div>
                                    <div className="text-xs text-gray-500">{pdf.size}</div>
                                    </div>

                                    <div className="flex items-center gap-2">
                                    <a href={`https://drive.google.com/file/d/${pdf.id}/preview`} target="_blank" rel="noreferrer" download={pdf.name} className="text-sm bg-indigo-600 text-white px-3 py-1 rounded">
                                        Görüntüle
                                    </a>
                                    <a href={pdf.url} target="_blank" rel="noreferrer" download={pdf.name} className="text-sm bg-indigo-600 text-white px-3 py-1 rounded">
                                        İndir
                                    </a>
                                    </div>
                                </div>
                                ))}
                            </div>
                      </AccordionContent>
                    </AccordionItem>
                    {/* Kitap */}
                    <AccordionItem value="kitap" className="border bg-white rounded-lg px-0 overflow-hidden">
                      <AccordionTrigger className="px-4 py-3 font-semibold text-indigo-700 hover:bg-indigo-50 hover:no-underline">
                         <span>📚 Kitap</span>
                         <span className="text-xs text-gray-500 bg-gray-100 px-2 py-0.5 rounded ml-2">{course.kitap.length} Dosya</span>
                      </AccordionTrigger>
                      <AccordionContent className="px-4 py-2 border-t">
                        <div className="mt-6">
                            {course.kitap.length === 0 && (
                                <div className="text-center text-gray-600">Bu derse ait PDF bulunmuyor.</div>
                            )} 
                                {course.kitap.map((pdf) => (
                                <div key={pdf.id} className="flex items-center justify-between bg-gray-50 p-3 rounded-lg">
                                    <div>
                                    <div className="font-medium text-black">{pdf.name}</div>
                                    <div className="text-xs text-gray-500">{pdf.size}</div>
                                    </div>

                                    <div className="flex items-center gap-2">
                                    <a href={`https://drive.google.com/file/d/${pdf.id}/preview`} target="_blank" rel="noreferrer" download={pdf.name} className="text-sm bg-indigo-600 text-white px-3 py-1 rounded">
                                        Görüntüle
                                    </a>
                                    <a href={pdf.url} target="_blank" rel="noreferrer" download={pdf.name} className="text-sm bg-indigo-600 text-white px-3 py-1 rounded">
                                        İndir
                                    </a>
                                    </div>
                                </div>
                                ))}
                            </div>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        ))
      ) : (
        <div className="text-center py-10">
          <div className="text-gray-500 animate-pulse">Dosyalar yükleniyor...</div>
        </div>
      )}
    </div>
  </section>
</main>
    </div>
  );
}
