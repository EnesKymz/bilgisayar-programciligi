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
    <div class="max-w-3xl mx-auto py-12 px-6 font-sans text-slate-800 bg-white min-h-screen">
    <section class="mb-12">
        <h2 class="text-2xl font-bold text-blue-700 mb-4">1. Ünite: Dijital Dönüşümün Temelleri</h2>
        <p class="text-slate-600 mb-6 italic text-sm bg-slate-50 p-3 rounded-md border-l-4 border-blue-700">Bu üniteden genellikle 2-3 soru gelmektedir.</p>
        
        <div class="space-y-4">
            <div>
                <h3 class="font-bold text-slate-900">Toplum 5.0 (Süper Akıllı Toplum)</h3>
                <p class="text-slate-700">Siber alan + fiziksel alan entegrasyonu, insan odaklılık.</p>
            </div>
            
            <div>
                <h3 class="font-bold text-slate-900">Endüstri Evreleri</h3>
                <ul class="list-disc pl-5 text-slate-700 mt-1">
                    <li><strong>1.0:</strong> Buhar Gücü</li>
                    <li><strong>2.0:</strong> Elektrik</li>
                    <li><strong>3.0:</strong> Otomasyon</li>
                    <li><strong>4.0:</strong> Siber-Fiziksel Sistemler, IoT, Büyük Veri.</li>
                </ul>
            </div>

            <div>
                <h3 class="font-bold text-slate-900">Bilgi Toplumu Özellikleri</h3>
                <p class="text-slate-700">Yenilikçi, işbirlikçi birey.</p>
            </div>

            <div>
                <h3 class="font-bold text-slate-900">Tarihsel İlkler</h3>
                <p class="text-slate-700">ENIAC (İlk bilgisayar), Odyssey (İlk oyun konsolu) vb.</p>
            </div>
        </div>
    </section>

    <section class="mb-12">
        <h2 class="text-2xl font-bold text-blue-700 mb-4">2. Ünite: Eğitimin Dönüşümü</h2>
        
        <div class="space-y-6">
            <div>
                <h3 class="font-bold text-slate-900 mb-2">Web Evreleri</h3>
                <div class="bg-slate-50 p-4 rounded border border-slate-100">
                    <ul class="space-y-2 text-slate-700">
                        <li class="flex gap-2">
                            <span class="font-semibold text-slate-900 min-w-[80px]">Web 1.0:</span>
                            <span>Statik, tek yönlü (Sadece oku).</span>
                        </li>
                        <li class="flex gap-2">
                            <span class="font-semibold text-slate-900 min-w-[80px]">Web 2.0:</span>
                            <span>Etkileşimli, kullanıcı içerik üretebilir (Sosyal Medya).</span>
                        </li>
                        <li class="flex gap-2">
                            <span class="font-semibold text-slate-900 min-w-[80px]">Web 3.0:</span>
                            <span>Semantik Web, yapay zekâ, makine okunabilirliği.</span>
                        </li>
                    </ul>
                </div>
            </div>

            <div>
                <h3 class="font-bold text-slate-900">Eğitim Kuşakları</h3>
                <p class="text-slate-700 mt-1">Eğitim 1.0 (pasif öğrenci) → Eğitim 2.0 (işbirliği) → 3.0–4.0.</p>
            </div>

            <div>
                <h3 class="font-bold text-slate-900">Dijital Yerli & Dijital Göçmen</h3>
                <p class="text-slate-700 mt-1">Teknolojiye doğanlar vs. sonradan uyum sağlayanlar.</p>
            </div>
        </div>
    </section>

    <section class="mb-12">
        <h2 class="text-2xl font-bold text-blue-700 mb-4">3. Ünite: Devletin Dönüşümü</h2>
        
        <ul class="list-disc pl-5 space-y-3 text-slate-700">
            <li>
                <strong class="text-slate-900">Dijital Vatandaşlık (9 Boyut):</strong> 
                Dijital erişim, dijital ticaret, dijital okuryazarlık, dijital etik vb.
            </li>
            <li>
                <strong class="text-slate-900">E-Devlet Modelleri:</strong> 
                G2C (Devletten Vatandaşa), G2B (Devletten İşletmeye).
            </li>
            <li>
                <strong class="text-slate-900">Şeffaflık Kanunları:</strong> 
                Bilgi Edinme Hakkı, Kamu Mali Yönetimi.
            </li>
        </ul>
    </section>

    <section class="mb-12">
        <h2 class="text-2xl font-bold text-blue-700 mb-4">4. Ünite: Kültür, Sanat ve Eğlencenin Dönüşümü</h2>
        
        <div class="grid md:grid-cols-2 gap-4 text-slate-700">
            <div class="border border-slate-200 p-3 rounded">
                <strong class="block text-slate-900 mb-1">Dijital Retorik</strong>
                Dijital ortamda ikna edici söylem.
            </div>
            <div class="border border-slate-200 p-3 rounded">
                <strong class="block text-slate-900 mb-1">NFT</strong>
                Dijital varlıkların benzersiz sahipliği (Değiştirilemez Token).
            </div>
            <div class="border border-slate-200 p-3 rounded">
                <strong class="block text-slate-900 mb-1">Dijital Obezite</strong>
                Aşırı dijital tüketim ve teknoloji bağımlılığı.
            </div>
            <div class="border border-slate-200 p-3 rounded">
                <strong class="block text-slate-900 mb-1">E-Spor Bileşenleri</strong>
                Yönetim, analitik, medya, oyuncular.
            </div>
        </div>
    </section>

    <section class="bg-slate-50 p-6 rounded-lg border border-slate-200 mt-8">
        <h2 class="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
            🎯 Sınava Girmeden Kesin Bilmen Gerekenler
        </h2>
        <ul class="grid md:grid-cols-2 gap-x-8 gap-y-3 text-slate-700">
            <li class="flex gap-2"><span class="text-green-600 font-bold">✓</span> <strong>Toplum 5.0</strong> (İnsan odaklılık)</li>
            <li class="flex gap-2"><span class="text-green-600 font-bold">✓</span> <strong>Web 1.0 vs Web 2.0</strong> (Statik vs Etkileşim)</li>
            <li class="flex gap-2"><span class="text-green-600 font-bold">✓</span> <strong>Eğitim 1.0</strong> (Pasif öğrenci)</li>
            <li class="flex gap-2"><span class="text-green-600 font-bold">✓</span> <strong>Dijital Retorik</strong> (İkna)</li>
            <li class="flex gap-2"><span class="text-green-600 font-bold">✓</span> <strong>Dijital Erişim</strong> (Vatandaşlık boyutu)</li>
            <li class="flex gap-2"><span class="text-green-600 font-bold">✓</span> <strong>NFT</strong> (Mülkiyet)</li>
        </ul>
    </section>
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
      cikmissorular:[],
      onemli:(
      <div class="max-w-3xl mx-auto py-12 px-6 font-sans text-slate-800 bg-white min-h-screen">

    <section class="mb-12">
        <h2 class="text-2xl font-bold text-blue-700 mb-4">1. Ünite: Temel Kavramlar ve Tarihçe</h2>
        <p class="text-slate-600 mb-6 italic text-sm bg-slate-50 p-3 rounded-md border-l-4 border-blue-700">Bu üniteden genellikle tanımlar ve tarihsel figürler sorulur.</p>
        
        <div class="space-y-6">
            <div>
                <h3 class="text-lg font-semibold text-slate-900 mb-1">Kullanıcı Deneyimi (UX) Tanımı</h3>
                <p class="leading-relaxed">ISO tanımı veya Jesse James Garrett&apos;ın tanımı. <span class="font-medium text-red-600 bg-red-50 px-1 rounded">Sınavda UX&apos;in çok disiplinli yapısı ve bilgi mimarisi sorulmuş.</span></p>
            </div>

            <div>
                <h3 class="text-lg font-semibold text-slate-900 mb-2">Tarihsel Figürler</h3>
                <ul class="list-disc pl-5 space-y-2 text-slate-700">
                    <li><strong>Henry Dreyfuss:</strong> &quot;Designing for People&quot; kitabının yazarı. Tasarımda ergonomi ve kullanıcı psikolojisini vurgular.</li>
                    <li><strong>Don Norman:</strong> &quot;Kullanıcı Deneyimi&quot; terimini ilk kullanan kişi (Apple).</li>
                    <li><strong>Frederick Winslow Taylor:</strong> Bilimsel yönetim ve verimlilik.</li>
                </ul>
            </div>

            <div>
                <h3 class="text-lg font-semibold text-slate-900 mb-1">Disiplinler</h3>
                <p class="text-slate-700">UX&apos;in beslendiği alanlar: İnsan-Bilgisayar Etkileşimi, Psikoloji, Endüstriyel Tasarım vb.</p>
            </div>
        </div>
    </section>

    <section class="mb-12">
        <h2 class="text-2xl font-bold text-blue-700 mb-4">2. Ünite: Tasarım Süreci ve Bileşenleri</h2>
        <p class="text-slate-600 mb-6 italic text-sm bg-slate-50 p-3 rounded-md border-l-4 border-blue-700">Sınavın en teknik ve bilgi gerektiren soruları buradan gelir. Özellikle Jesse James Garrett&apos;ın 5 Katman Modeli mutlaka sorulur.</p>
        
        <div class="space-y-6">
            <div>
                <h3 class="text-lg font-semibold text-slate-900 mb-2">Garrett&apos;ın 5 Katmanı</h3>
                <ol class="list-decimal pl-5 space-y-2 text-slate-700">
                    <li><strong>Strateji (Strategy):</strong> &quot;Ne elde etmek istiyoruz?&quot; ve &quot;Kullanıcı ne istiyor?&quot; soruları. <span class="text-xs text-slate-500 font-medium border border-slate-200 px-1.5 py-0.5 rounded ml-2">(2024 sınavı 9. soru)</span></li>
                    <li><strong>Kapsam (Scope):</strong> Özellikler ve içerik gereksinimleri.</li>
                    <li><strong>Yapı (Structure):</strong> Etkileşim tasarımı ve bilgi mimarisi. <span class="text-xs text-slate-500 font-medium border border-slate-200 px-1.5 py-0.5 rounded ml-2">(2024 sınavı 10. soru)</span></li>
                    <li><strong>İskelet (Skeleton):</strong> Arayüz, gezinme ve bilgi tasarımı.</li>
                    <li><strong>Yüzey (Surface):</strong> Görsel tasarım.</li>
                </ol>
            </div>

            <div>
                <h3 class="text-lg font-semibold text-slate-900 mb-1">Tasarım Süreci Adımları</h3>
                <p class="text-slate-700">Araştırma → Tasarım → Değerlendirme döngüsü. <span class="text-xs text-slate-500 font-medium border border-slate-200 px-1.5 py-0.5 rounded ml-2">(2024 sınavı 3. soru)</span></p>
            </div>

            <div>
                <h3 class="text-lg font-semibold text-slate-900 mb-1">Site Haritaları ve Akışlar</h3>
                <p class="text-slate-700">Web sitesinin yapısını kuş bakışı gösteren görsel yapı. <span class="text-xs text-slate-500 font-medium border border-slate-200 px-1.5 py-0.5 rounded ml-2">(2024 sınavı 6. soru)</span></p>
            </div>
        </div>
    </section>

    <section class="mb-12">
        <h2 class="text-2xl font-bold text-blue-700 mb-4">3. Ünite: Kullanıcı Özellikleri ve Analizi</h2>
        <p class="text-slate-600 mb-6 italic text-sm bg-slate-50 p-3 rounded-md border-l-4 border-blue-700">Kullanıcıyı tanıma yöntemleri ve psikolojik faktörler bu ünitenin konusudur.</p>
        
        <div class="space-y-6">
            <div>
                <h3 class="text-lg font-semibold text-slate-900 mb-1">Persona (Kullanıcı Karakterleri)</h3>
                <p class="text-slate-700">Kurgusal karakterler, hedef kitleyi temsil eder ve empati kurmayı sağlar. <span class="text-xs text-slate-500 font-medium border border-slate-200 px-1.5 py-0.5 rounded ml-2">(2024 sınavı 7. ve 14. soru)</span></p>
            </div>

            <div>
                <h3 class="text-lg font-semibold text-slate-900 mb-2">Veri Türleri</h3>
                <ul class="list-disc pl-5 space-y-2 text-slate-700">
                    <li><strong>Nitel Veri:</strong> &quot;Neden ve Nasıl&quot; sorularına cevap verir (Görüşmeler, gözlemler).</li>
                    <li><strong>Nicel Veri:</strong> &quot;Ne kadar, Ne sıklıkla&quot; sorularına cevap verir (Anketler, tıklama sayıları). <span class="text-xs text-slate-500 font-medium border border-slate-200 px-1.5 py-0.5 rounded ml-2">(2024 sınavı 15. soru)</span></li>
                </ul>
            </div>

            <div>
                <h3 class="text-lg font-semibold text-slate-900 mb-1">Erişilebilirlik (Accessibility)</h3>
                <p class="text-slate-700">İşitme veya görme engelli kullanıcılar için tasarım. (Altyazı, alt metin vb.) <span class="text-xs text-slate-500 font-medium border border-slate-200 px-1.5 py-0.5 rounded ml-2">(2024 sınavı 11. soru)</span></p>
            </div>

            <div>
                <h3 class="text-lg font-semibold text-slate-900 mb-1">Bilişsel Ön Yargılar</h3>
                <p class="text-slate-700">Kullanıcıların markalara olan güveni veya alışveriş alışkanlıklarını etkileyen psikolojik durumlar. <span class="text-xs text-slate-500 font-medium border border-slate-200 px-1.5 py-0.5 rounded ml-2">(2024 sınavı 12. soru)</span></p>
            </div>
        </div>
    </section>

    <section class="mb-12">
        <h2 class="text-2xl font-bold text-blue-700 mb-4">4. Ünite: Veri Gizliliği ve Güvenliği</h2>
        <p class="text-slate-600 mb-6 italic text-sm bg-slate-50 p-3 rounded-md border-l-4 border-blue-700">Son yıllarda KVKK ve GDPR nedeniyle bu üniteden gelen soru sayısı artmıştır.</p>
        
        <div class="space-y-6">
            <div>
                <h3 class="text-lg font-semibold text-slate-900 mb-2">Tasarım Yoluyla Gizlilik (Privacy by Design) İlkeleri</h3>
                <ul class="list-disc pl-5 space-y-2 text-slate-700">
                    <li><strong>Varsayılan Olarak Gizlilik (Privacy by Default):</strong> Kullanıcının ekstra bir şey yapmasına gerek kalmadan veriler korunur. <span class="font-medium text-red-600 bg-red-50 px-1 rounded">(2024 sınavı 18. soru)</span></li>
                    <li><strong>Reaktif değil Proaktif:</strong> Olay olmadan önlem almak.</li>
                    <li><strong>Uçtan Uca Güvenlik:</strong> Verinin tüm yaşam döngüsü boyunca korunması.</li>
                </ul>
            </div>

            <div>
                <h3 class="text-lg font-semibold text-slate-900 mb-1">Adil Bilişim Uygulamaları</h3>
                <p class="text-slate-700">Kullanıcının verisinin neden toplandığını bilmesi ve izin vermesi. <span class="text-xs text-slate-500 font-medium border border-slate-200 px-1.5 py-0.5 rounded ml-2">(2024 sınavı 16. soru)</span></p>
            </div>

            <div>
                <h3 class="text-lg font-semibold text-slate-900 mb-1">Güvenlik Tehditleri</h3>
                <p class="text-slate-700">Veri ihlalleri, oltalama (phishing) vb.</p>
            </div>
        </div>
    </section>

    <section class="bg-slate-50 p-6 rounded-lg border border-slate-200 mt-8">
        <h2 class="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
            🎯 Sınav Taktikleri ve Özet
        </h2>
        <ul class="grid md:grid-cols-2 gap-x-8 gap-y-3 text-slate-700">
            <li class="flex gap-2"><span class="text-green-600 font-bold">✓</span> <span><strong>Strateji Katmanı:</strong> Hedefler ve ihtiyaçlar.</span></li>
            <li class="flex gap-2"><span class="text-green-600 font-bold">✓</span> <span><strong>Bilgi Mimarisi:</strong> &quot;Bulunabilirlik&quot;.</span></li>
            <li class="flex gap-2"><span class="text-green-600 font-bold">✓</span> <span><strong>Persona:</strong> Kurgusal profil.</span></li>
            <li class="flex gap-2"><span class="text-green-600 font-bold">✓</span> <span><strong>Privacy by Default:</strong> Varsayılan gizlilik.</span></li>
            <li class="flex gap-2"><span class="text-green-600 font-bold">✓</span> <span><strong>Kullanılabilirlik Testi:</strong> Gerçek kullanıcı.</span></li>
            <li class="flex gap-2"><span class="text-green-600 font-bold">✓</span> <span><strong>Henry Dreyfuss:</strong> Designing for People.</span></li>
        </ul>
    </section>
</div>
      )
    },
    webtabanlikodlama: {
      id: "webtabanlikodlama",
      title: "Web Tabanlı Kodlama",
      description: "Kodlamanın Temelleri",
      pdfs: [],
      cikmissorular:[],
      onemli:(
        <div class="max-w-3xl mx-auto py-12 px-6 font-sans text-slate-800 bg-white min-h-screen">
    <section class="mb-12">
        <h2 class="text-2xl font-bold text-blue-700 mb-4">1. Ünite: Web Teknolojisinin Doğuşu</h2>
        <p class="text-slate-600 mb-6 italic text-sm bg-slate-50 p-3 rounded-md border-l-4 border-blue-700">Bu üniteden genellikle Protokoller ve Tanımlar sorulur.</p>
        
        <div class="space-y-6">
            <div>
                <div class="flex items-center gap-3 mb-2">
                    <h3 class="text-lg font-bold text-slate-900">Protokoller</h3>
                    <span class="text-xs font-bold text-red-600 bg-red-50 px-2 py-1 rounded border border-red-100">Banko Soru (1-2 Adet)</span>
                </div>
                <ul class="list-disc pl-5 space-y-2 text-slate-700">
                    <li><strong>HTTP:</strong> Web sayfalarının iletimi için kullanılır.</li>
                    <li><strong>FTP:</strong> Dosya transferi için kullanılır.</li>
                    <li><strong>SMTP:</strong> E-posta gönderimi için kullanılır.</li>
                    <li><strong>DNS:</strong> Alan adlarını (www.google.com) IP adresine çevirir.</li>
                    <li><strong>Proxy Sunucusu:</strong> İnternet trafiğini verimli kullanmak ve önbellekleme yapmak için kullanılan sunucu.</li>
                </ul>
            </div>

            <div class="bg-slate-50 p-4 rounded border border-slate-100">
                <h3 class="text-lg font-bold text-slate-900 mb-2">IP Adres Sınıfları</h3>
                <p class="text-sm text-slate-500 mb-3">2024&apos;te C sınıfı soruldu. Bu yıl A veya B sorulabilir.</p>
                <div class="grid grid-cols-3 gap-4 text-center">
                    <div class="bg-white p-2 rounded shadow-sm border border-slate-200">
                        <div class="font-bold text-blue-600">A Sınıfı</div>
                        <div class="text-slate-700">1 - 126</div>
                    </div>
                    <div class="bg-white p-2 rounded shadow-sm border border-slate-200">
                        <div class="font-bold text-blue-600">B Sınıfı</div>
                        <div class="text-slate-700">128 - 191</div>
                    </div>
                    <div class="bg-white p-2 rounded shadow-sm border border-slate-200">
                        <div class="font-bold text-blue-600">C Sınıfı</div>
                        <div class="text-slate-700">192 - 223</div>
                    </div>
                </div>
            </div>
            
            <div>
                <h3 class="text-lg font-bold text-slate-900 mb-1">Tarihçe</h3>
                <p class="text-slate-700"><strong>ARPANET</strong> (İnternetin atası) ve <strong>1969</strong> yılı sıkça sorulur.</p>
            </div>
        </div>
    </section>

    <section class="mb-12">
        <h2 class="text-2xl font-bold text-blue-700 mb-4">2. Ünite: Metin Biçimlendirme (HTML/CSS)</h2>
        
        <div class="space-y-6">
            <div>
                <h3 class="text-lg font-bold text-slate-900 mb-2">CSS Seçicileri (Kesin Çıkar)</h3>
                <ul class="space-y-2 text-slate-700">
                    <li class="flex items-center gap-2">
                        <span class="font-mono bg-yellow-100 text-yellow-800 px-2 rounded">#</span>
                        <span><strong>ID Seçicisi:</strong> Diyez işareti ile tanımlanır.</span>
                    </li>
                    <li class="flex items-center gap-2">
                        <span class="font-mono bg-yellow-100 text-yellow-800 px-2 rounded">.</span>
                        <span><strong>Class (Sınıf) Seçicisi:</strong> Nokta işareti ile tanımlanır.</span>
                    </li>
                    <li class="flex items-center gap-2">
                        <span class="font-mono bg-slate-200 text-slate-700 px-2 rounded">&lt;link&gt;</span>
                        <span>Dışarıdan CSS çağırma yapısı sorulur.</span>
                    </li>
                </ul>
            </div>

            <div>
                <h3 class="text-lg font-bold text-slate-900 mb-2">Kritik HTML Etiketleri</h3>
                <ul class="list-disc pl-5 space-y-2 text-slate-700">
                    <li><code class="text-pink-600 bg-slate-100 px-1 rounded">&amp;nbsp;</code> : Fazladan boşluk bırakmak için kullanılır. <span class="text-xs text-red-600 font-bold ml-1">(Son 3 sınavın 2&apos;sinde soruldu!)</span></li>
                    <li><code class="text-pink-600 bg-slate-100 px-1 rounded">&lt;b&gt;</code>, <code class="text-pink-600 bg-slate-100 px-1 rounded">&lt;i&gt;</code>, <code class="text-pink-600 bg-slate-100 px-1 rounded">&lt;u&gt;</code> : Koyu, İtalik, Altı çizili.</li>
                    <li><code class="text-pink-600 bg-slate-100 px-1 rounded">&lt;br&gt;</code> : Alt satıra geçme.</li>
                    <li><code class="text-pink-600 bg-slate-100 px-1 rounded">&lt;font&gt;</code> : Eski ama AÖF sever. Özellikle <strong>face</strong> ve <strong>color</strong> parametreleri.</li>
                </ul>
            </div>
        </div>
    </section>

    <section class="mb-12">
        <h2 class="text-2xl font-bold text-blue-700 mb-4">3. Ünite: Çoklu Ortam</h2>
        
        <div class="space-y-6">
            <div>
                <h3 class="text-lg font-bold text-slate-900 mb-2">Video ve Ses Kontrolleri</h3>
                <ul class="list-disc pl-5 space-y-2 text-slate-700">
                    <li><code class="text-pink-600 font-bold">controls</code>: Oynat/Durdur panelini açar.</li>
                    <li><code class="text-pink-600 font-bold">autoplay</code>: Otomatik başlatır.</li>
                    <li><code class="text-pink-600 font-bold">loop</code>: Sürekli başa dönüp oynatır (Döngü).</li>
                    <li><code class="text-pink-600 font-bold">&lt;iframe&gt;</code>: Youtube videolarını eklemek için kullanılır. <span class="text-xs text-slate-500 border border-slate-200 px-1 rounded ml-1">(2024 Sorusu)</span></li>
                </ul>
            </div>

            <div>
                <h3 class="text-lg font-bold text-slate-900 mb-2">Resim (img) ve Haritalar</h3>
                <ul class="list-disc pl-5 space-y-2 text-slate-700">
                    <li><strong>Parametreler:</strong> src (yol), alt (alternatif metin), width (genişlik).</li>
                    <li><strong>Image Maps:</strong> Resim üzerinde tıklanabilir alanlar için <code class="text-pink-600 bg-slate-100 px-1 rounded">usemap</code> ve <code class="text-pink-600 bg-slate-100 px-1 rounded">&lt;area&gt;</code> kullanılır. Şekil olarak <em>rect</em> veya <em>circle</em> sorulabilir.</li>
                </ul>
            </div>
        </div>
    </section>

    <section class="mb-12">
        <h2 class="text-2xl font-bold text-blue-700 mb-4">4. Ünite: Tablolar</h2>
        <p class="text-slate-600 mb-6 italic text-sm bg-slate-50 p-3 rounded-md border-l-4 border-blue-700">Bu üniteden en karmaşık sorular gelir ancak mantığı basittir.</p>

        <div class="space-y-6">
            <div>
                <div class="flex items-center gap-3 mb-2">
                    <h3 class="text-lg font-bold text-slate-900">Hücre Birleştirme</h3>
                    <span class="text-xs font-bold text-red-600 bg-red-50 px-2 py-1 rounded border border-red-100">Banko Soru</span>
                </div>
                <ul class="list-disc pl-5 space-y-2 text-slate-700">
                    <li><code class="text-pink-600 font-bold">colspan</code>: Sütunları (yan yana) birleştirir.</li>
                    <li><code class="text-pink-600 font-bold">rowspan</code>: Satırları (alt alta) birleştirir. <span class="text-sm text-slate-500 italic">(İpucu: Row = Satır)</span></li>
                </ul>
            </div>

            <div class="grid md:grid-cols-2 gap-6">
                <div>
                    <h3 class="text-lg font-bold text-slate-900 mb-2">Etiketler</h3>
                    <ul class="space-y-1 text-slate-700">
                        <li><code class="text-pink-600 bg-slate-100 px-1 rounded">&lt;tr&gt;</code> : Satır (Table Row)</li>
                        <li><code class="text-pink-600 bg-slate-100 px-1 rounded">&lt;td&gt;</code> : Veri Hücresi (Table Data)</li>
                        <li><code class="text-pink-600 bg-slate-100 px-1 rounded">&lt;th&gt;</code> : Başlık Hücresi (Header)</li>
                    </ul>
                </div>
                <div>
                    <h3 class="text-lg font-bold text-slate-900 mb-2">CSS Özellikleri</h3>
                    <ul class="space-y-1 text-slate-700">
                        <li><strong>border-collapse:</strong> Kenarlıkları tek çizgi yapar.</li>
                        <li><strong>border-spacing:</strong> Hücre boşluğunu ayarlar.</li>
                    </ul>
                </div>
            </div>
        </div>
    </section>

    <section class="bg-slate-900 text-slate-300 p-6 rounded-lg shadow-lg mt-8">
        <h2 class="text-xl font-bold text-white mb-4 flex items-center gap-2">
            🎯 Sınav İçin &quot;Hızlı Tekrar&quot; Listesi
        </h2>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
            <div class="border border-slate-700 p-3 rounded bg-slate-800">
                <div class="text-slate-400 text-xs uppercase">Boşluk Karakteri</div>
                <div class="text-pink-400 font-mono font-bold">&amp;nbsp;</div>
            </div>
            <div class="border border-slate-700 p-3 rounded bg-slate-800">
                <div class="text-slate-400 text-xs uppercase">Dosya Transfer</div>
                <div class="text-white font-bold">FTP</div>
            </div>
            <div class="border border-slate-700 p-3 rounded bg-slate-800">
                <div class="text-slate-400 text-xs uppercase">ID Seçicisi</div>
                <div class="text-white font-bold"># (Diyez)</div>
            </div>
            <div class="border border-slate-700 p-3 rounded bg-slate-800">
                <div class="text-slate-400 text-xs uppercase">Sütun Birleştirme</div>
                <div class="text-pink-400 font-mono font-bold">colspan</div>
            </div>
            <div class="border border-slate-700 p-3 rounded bg-slate-800">
                <div class="text-slate-400 text-xs uppercase">Youtube Ekleme</div>
                <div class="text-pink-400 font-mono font-bold">&lt;iframe&gt;</div>
            </div>
            <div class="border border-slate-700 p-3 rounded bg-slate-800">
                <div class="text-slate-400 text-xs uppercase">Döngüsel Oynatma</div>
                <div class="text-pink-400 font-mono font-bold">loop</div>
            </div>
            <div class="border border-slate-700 p-3 rounded bg-slate-800">
                <div class="text-slate-400 text-xs uppercase">CSS Çağırma</div>
                <div class="text-pink-400 font-mono font-bold">&lt;link&gt;</div>
            </div>
            <div class="border border-slate-700 p-3 rounded bg-slate-800">
                <div class="text-slate-400 text-xs uppercase">Resim Haritası</div>
                <div class="text-pink-400 font-mono font-bold">usemap</div>
            </div>
        </div>
    </section>

</div>
      )
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
                <div className="text-gray-500 mt-1">{selectedCourse.course.onemli}</div>
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
