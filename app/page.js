"use client"
import React, { useState, useRef, useEffect } from "react";
import { listFiles } from "./server/getData";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export default function CoursesWebsite() {

  const [courses, setCourses] = useState({
    dijitaldonusum: { 
      id: "dijitaldonusum",
      title: "Dijital Dönüşüm",
      description: "Dijital Dönüşüm",
      pdfs: [],
      finalnotlar:[],
      cikmissorular:[],
      onemli:(
    <div className="max-w-3xl mx-auto py-12 px-6 font-sans text-slate-800 bg-white min-h-screen">
    <section className="mb-12">
        <h2 className="text-2xl font-bold text-blue-700 mb-4">1. Ünite: Dijital Dönüşümün Temelleri</h2>
        <p className="text-slate-600 mb-6 italic text-sm bg-slate-50 p-3 rounded-md border-l-4 border-blue-700">Bu üniteden genellikle 2-3 soru gelmektedir.</p>
        
        <div className="space-y-4">
            <div>
                <h3 className="font-bold text-slate-900">Toplum 5.0 (Süper Akıllı Toplum)</h3>
                <p className="text-slate-700">Siber alan + fiziksel alan entegrasyonu, insan odaklılık.</p>
            </div>
            
            <div>
                <h3 className="font-bold text-slate-900">Endüstri Evreleri</h3>
                <ul className="list-disc pl-5 text-slate-700 mt-1">
                    <li><strong>1.0:</strong> Buhar Gücü</li>
                    <li><strong>2.0:</strong> Elektrik</li>
                    <li><strong>3.0:</strong> Otomasyon</li>
                    <li><strong>4.0:</strong> Siber-Fiziksel Sistemler, IoT, Büyük Veri.</li>
                </ul>
            </div>

            <div>
                <h3 className="font-bold text-slate-900">Bilgi Toplumu Özellikleri</h3>
                <p className="text-slate-700">Yenilikçi, işbirlikçi birey.</p>
            </div>

            <div>
                <h3 className="font-bold text-slate-900">Tarihsel İlkler</h3>
                <p className="text-slate-700">ENIAC (İlk bilgisayar), Odyssey (İlk oyun konsolu) vb.</p>
            </div>
        </div>
    </section>

    <section className="mb-12">
        <h2 className="text-2xl font-bold text-blue-700 mb-4">2. Ünite: Eğitimin Dönüşümü</h2>
        
        <div className="space-y-6">
            <div>
                <h3 className="font-bold text-slate-900 mb-2">Web Evreleri</h3>
                <div className="bg-slate-50 p-4 rounded border border-slate-100">
                    <ul className="space-y-2 text-slate-700">
                        <li className="flex gap-2">
                            <span className="font-semibold text-slate-900 min-w-[80px]">Web 1.0:</span>
                            <span>Statik, tek yönlü (Sadece oku).</span>
                        </li>
                        <li className="flex gap-2">
                            <span className="font-semibold text-slate-900 min-w-[80px]">Web 2.0:</span>
                            <span>Etkileşimli, kullanıcı içerik üretebilir (Sosyal Medya).</span>
                        </li>
                        <li className="flex gap-2">
                            <span className="font-semibold text-slate-900 min-w-[80px]">Web 3.0:</span>
                            <span>Semantik Web, yapay zekâ, makine okunabilirliği.</span>
                        </li>
                    </ul>
                </div>
            </div>

            <div>
                <h3 className="font-bold text-slate-900">Eğitim Kuşakları</h3>
                <p className="text-slate-700 mt-1">Eğitim 1.0 (pasif öğrenci) → Eğitim 2.0 (işbirliği) → 3.0–4.0.</p>
            </div>

            <div>
                <h3 className="font-bold text-slate-900">Dijital Yerli & Dijital Göçmen</h3>
                <p className="text-slate-700 mt-1">Teknolojiye doğanlar vs. sonradan uyum sağlayanlar.</p>
            </div>
        </div>
    </section>

    <section className="mb-12">
        <h2 className="text-2xl font-bold text-blue-700 mb-4">3. Ünite: Devletin Dönüşümü</h2>
        
        <ul className="list-disc pl-5 space-y-3 text-slate-700">
            <li>
                <strong className="text-slate-900">Dijital Vatandaşlık (9 Boyut):</strong> 
                Dijital erişim, dijital ticaret, dijital okuryazarlık, dijital etik vb.
            </li>
            <li>
                <strong className="text-slate-900">E-Devlet Modelleri:</strong> 
                G2C (Devletten Vatandaşa), G2B (Devletten İşletmeye).
            </li>
            <li>
                <strong className="text-slate-900">Şeffaflık Kanunları:</strong> 
                Bilgi Edinme Hakkı, Kamu Mali Yönetimi.
            </li>
        </ul>
    </section>

    <section className="mb-12">
        <h2 className="text-2xl font-bold text-blue-700 mb-4">4. Ünite: Kültür, Sanat ve Eğlencenin Dönüşümü</h2>
        
        <div className="grid md:grid-cols-2 gap-4 text-slate-700">
            <div className="border border-slate-200 p-3 rounded">
                <strong className="block text-slate-900 mb-1">Dijital Retorik</strong>
                Dijital ortamda ikna edici söylem.
            </div>
            <div className="border border-slate-200 p-3 rounded">
                <strong className="block text-slate-900 mb-1">NFT</strong>
                Dijital varlıkların benzersiz sahipliği (Değiştirilemez Token).
            </div>
            <div className="border border-slate-200 p-3 rounded">
                <strong className="block text-slate-900 mb-1">Dijital Obezite</strong>
                Aşırı dijital tüketim ve teknoloji bağımlılığı.
            </div>
            <div className="border border-slate-200 p-3 rounded">
                <strong className="block text-slate-900 mb-1">E-Spor Bileşenleri</strong>
                Yönetim, analitik, medya, oyuncular.
            </div>
        </div>
    </section>

    <section className="bg-slate-50 p-6 rounded-lg border border-slate-200 mt-8">
        <h2 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
            🎯 Sınava Girmeden Kesin Bilmen Gerekenler
        </h2>
        <ul className="grid md:grid-cols-2 gap-x-8 gap-y-3 text-slate-700">
            <li className="flex gap-2"><span className="text-green-600 font-bold">✓</span> <strong>Toplum 5.0</strong> (İnsan odaklılık)</li>
            <li className="flex gap-2"><span className="text-green-600 font-bold">✓</span> <strong>Web 1.0 vs Web 2.0</strong> (Statik vs Etkileşim)</li>
            <li className="flex gap-2"><span className="text-green-600 font-bold">✓</span> <strong>Eğitim 1.0</strong> (Pasif öğrenci)</li>
            <li className="flex gap-2"><span className="text-green-600 font-bold">✓</span> <strong>Dijital Retorik</strong> (İkna)</li>
            <li className="flex gap-2"><span className="text-green-600 font-bold">✓</span> <strong>Dijital Erişim</strong> (Vatandaşlık boyutu)</li>
            <li className="flex gap-2"><span className="text-green-600 font-bold">✓</span> <strong>NFT</strong> (Mülkiyet)</li>
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
      finalnotlar:[],
      cikmissorular:[]
    },
    bilisimteknolojileri: {
      id: "bilisimteknolojileri",
      title: "Bilişim Teknolojileri",
      description: "Programlama, Veri Yapıları",
      pdfs: [],
      cikmissorular:[],
      finalnotlar:[],
      onemli:(
       <div className="max-w-3xl mx-auto py-12 px-6 font-sans text-slate-800 bg-white min-h-screen">
          <section className="mb-12">
              <h2 className="text-2xl font-bold text-blue-700 mb-4">1. Ünite: Bilişim Teknolojilerinin Gelişimi</h2>
              <p className="text-slate-600 mb-6 italic text-sm bg-slate-50 p-3 rounded-md border-l-4 border-blue-700">Bu üniteden genellikle tarihsel kişiler ve teknolojik dönüm noktaları sorulur.</p>
              
              <div className="space-y-6">
                  <div className="bg-blue-50 p-4 rounded border border-blue-100 relative overflow-hidden">
                      <div className="absolute top-0 right-0 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded-bl">BANKO SORU</div>
                      <h3 className="text-lg font-bold text-blue-900 mb-1">Lee de Forest</h3>
                      <p className="text-blue-800">
                          Radyo ve televizyonun yolunu açan <strong>&quot;Elektron Tüpü&quot;nü (Vakum Tüpü/Audion)</strong> bulan kişidir.
                          <span className="text-xs text-blue-600 mt-1 block">(2022, 2023, 2024 sınavlarının hepsinde soruldu!)</span>
                      </p>
                  </div>

                  <div>
                      <h3 className="text-lg font-bold text-slate-900 mb-2">Teknolojik Dönüm Noktaları</h3>
                      <ul className="list-disc pl-5 space-y-2 text-slate-700">
                          <li><strong>Transistör:</strong> Bilgisayarları küçülttü, enerji tasarrufu sağladı, ucuzlattı ve hızlandırdı. <span className="text-red-600 text-sm">(Dikkat: &quot;Maliyetleri artırır&quot; şıkkı yanlıştır.)</span></li>
                          <li><strong>ENIAC:</strong> İlk genel amaçlı elektronik bilgisayar.</li>
                          <li><strong>UNIVAC:</strong> İlk ticari bilgisayar.</li>
                          <li><strong>Turing Makinesi:</strong> Alan Turing&apos;in soyut hesaplama modeli.</li>
                          <li><strong>Herman Hollerith:</strong> Delikli kart sistemi (ABD Nüfus sayımı).</li>
                      </ul>
                  </div>
              </div>
          </section>

          <section className="mb-12">
              <h2 className="text-2xl font-bold text-blue-700 mb-4">2. Ünite: Bilgisayar Donanımı</h2>
              <p className="text-slate-600 mb-6 italic text-sm">Sınavın en kolay puan toplanacak kısmıdır. Giriş/Çıkış birimlerini ezberlemelisin.</p>

              <div className="space-y-6">
                  <div className="grid md:grid-cols-3 gap-4 text-sm">
                      <div className="border border-slate-200 rounded p-3">
                          <h4 className="font-bold text-green-700 mb-2 border-b border-green-100 pb-1">GİRİŞ (Input)</h4>
                          <ul className="text-slate-600 space-y-1">
                              <li>• Klavye</li>
                              <li>• Fare</li>
                              <li>• Tarayıcı</li>
                              <li>• Web Kamerası</li>
                              <li>• Mikrofon</li>
                          </ul>
                      </div>
                      <div className="border border-slate-200 rounded p-3">
                          <h4 className="font-bold text-red-700 mb-2 border-b border-red-100 pb-1">ÇIKIŞ (Output)</h4>
                          <ul className="text-slate-600 space-y-1">
                              <li>• Ekran (Monitör)</li>
                              <li>• Yazıcı</li>
                              <li>• Hoparlör</li>
                              <li>• Projeksiyon</li>
                          </ul>
                      </div>
                      <div className="border border-slate-200 rounded p-3 bg-slate-50">
                          <h4 className="font-bold text-purple-700 mb-2 border-b border-purple-100 pb-1">HEM GİRİŞ HEM ÇIKIŞ</h4>
                          <ul className="text-slate-600 space-y-1">
                              <li>• Dokunmatik Ekran</li>
                              <li>• Modem</li>
                              <li>• Harddisk</li>
                          </ul>
                      </div>
                  </div>

                  <div>
                      <h3 className="text-lg font-bold text-slate-900 mb-2">Bellek ve Terimler</h3>
                      <ul className="list-disc pl-5 space-y-2 text-slate-700">
                          <li><strong>Bellenim (Firmware):</strong> Donanımın içine gömülü yazılım (Örn: BIOS). ROM&apos;da tutulur. <span className="text-xs border border-slate-300 px-1 rounded ml-1">2024 Sorusu</span></li>
                          <li><strong>RAM:</strong> Geçici bellek (Elektrik gidince silinir).</li>
                          <li><strong>ROM:</strong> Kalıcı bellek (Sadece okunur).</li>
                      </ul>
                  </div>
              </div>
          </section>

          <section className="mb-12">
              <h2 className="text-2xl font-bold text-blue-700 mb-4">3. Ünite: İşletim Sistemleri</h2>
              
              <div className="space-y-6">
                  <div className="bg-slate-50 p-4 rounded border border-slate-100">
                      <h3 className="text-lg font-bold text-slate-900 mb-3 text-center">Açık Kaynak vs. Kapalı Kaynak</h3>
                      <div className="grid grid-cols-2 gap-8">
                          <div className="text-center">
                              <div className="font-bold text-green-600 mb-1">Açık Kaynak</div>
                              <div className="text-xs text-slate-500 mb-2">(Ücretsiz / Değiştirilebilir)</div>
                              <ul className="text-slate-700 text-sm font-medium">
                                  <li>Linux</li>
                                  <li>Android</li>
                                  <li>Pardus</li>
                                  <li>Ubuntu</li>
                              </ul>
                          </div>
                          <div className="text-center border-l border-slate-200">
                              <div className="font-bold text-red-600 mb-1">Kapalı Kaynak</div>
                              <div className="text-xs text-slate-500 mb-2">(Ticari)</div>
                              <ul className="text-slate-700 text-sm font-medium">
                                  <li>Windows</li>
                                  <li>MacOS</li>
                                  <li>iOS</li>
                              </ul>
                          </div>
                      </div>
                  </div>

                  <div>
                      <h3 className="text-lg font-bold text-slate-900 mb-2">Diğer Türler</h3>
                      <p className="text-slate-700">
                          <strong>Sunucu (Server) İS:</strong> Büyük şirketlerde, bankalarda kullanılan çoklu kullanıcı yöneten sistemler. <span className="text-xs border border-slate-300 px-1 rounded ml-1">2024 Sorusu</span>
                      </p>
                  </div>
              </div>
          </section>

          <section className="mb-12">
              <h2 className="text-2xl font-bold text-blue-700 mb-4">4. Ünite: Uygulama Yazılımları</h2>
              
              <div className="space-y-4">
                  <div>
                      <div className="flex items-center gap-3 mb-2">
                          <h3 className="text-lg font-bold text-slate-900">Lisans Türleri</h3>
                          <span className="text-xs font-bold text-red-600 bg-red-50 px-2 py-1 rounded border border-red-100">Banko Soru</span>
                      </div>
                      <ul className="list-disc pl-5 space-y-2 text-slate-700">
                          <li><strong>Shareware:</strong> Belirli bir süre ücretsiz (deneme sürümü), sonra ücretli.</li>
                          <li><strong>Freeware:</strong> Tamamen ücretsiz.</li>
                          <li><strong>Beta:</strong> Test aşamasındaki yazılım.</li>
                      </ul>
                  </div>
                  
                  <div>
                      <h3 className="font-bold text-slate-900">Bulut Bilişim (SaaS)</h3>
                      <p className="text-slate-700">Hizmet Olarak Yazılım (Google Docs, Office 365 gibi internetten çalışanlar).</p>
                  </div>
                  
                  <div>
                      <h3 className="font-bold text-slate-900">VBA</h3>
                      <p className="text-slate-700">Office içinde makro yazmaya yarayan dil. <span className="text-xs border border-slate-300 px-1 rounded ml-1">2024 Sorusu</span></p>
                  </div>
              </div>
          </section>

          <section className="bg-slate-900 text-slate-300 p-6 rounded-lg shadow-lg mt-8">
              <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  🎯 Sınav İçin &quot;Hızlı Tekrar&quot; Listesi
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm">
                  <div className="border border-slate-700 p-3 rounded bg-slate-800">
                      <div className="text-slate-400 text-xs uppercase">Lee de Forest</div>
                      <div className="text-white font-bold">Elektron Tüpü</div>
                  </div>
                  <div className="border border-slate-700 p-3 rounded bg-slate-800">
                      <div className="text-slate-400 text-xs uppercase">Transistör</div>
                      <div className="text-white font-bold">Küçülttü & Hızlandırdı</div>
                  </div>
                  <div className="border border-slate-700 p-3 rounded bg-slate-800">
                      <div className="text-slate-400 text-xs uppercase">Giriş Birimi</div>
                      <div className="text-white font-bold">Klavye, Fare</div>
                  </div>
                  <div className="border border-slate-700 p-3 rounded bg-slate-800">
                      <div className="text-slate-400 text-xs uppercase">RAM</div>
                      <div className="text-white font-bold">Geçici Bellek</div>
                  </div>
                  <div className="border border-slate-700 p-3 rounded bg-slate-800">
                      <div className="text-slate-400 text-xs uppercase">Linux</div>
                      <div className="text-green-400 font-bold">Açık Kaynak</div>
                  </div>
                  <div className="border border-slate-700 p-3 rounded bg-slate-800">
                      <div className="text-slate-400 text-xs uppercase">Shareware</div>
                      <div className="text-white font-bold">Süreli/Deneme</div>
                  </div>
              </div>
          </section>
      </div>
      )
    },
    islemtablosuprogramlama: {
      id: "islemtablosuprogramlama",
      title: "İşlem Tablosu Programlama",
      description: "Programlama, Veri Yapıları",
      pdfs: [],
      cikmissorular:[],
      finalnotlar:[],
      onemli:(
        <div className="max-w-3xl mx-auto py-12 px-6 font-sans text-slate-800 bg-white min-h-screen">
    <section className="mb-12">
        <h2 className="text-2xl font-bold text-blue-700 mb-4">1. Ünite: VBA&apos;ya Giriş</h2>
        <p className="text-slate-600 mb-6 italic text-sm bg-slate-50 p-3 rounded-md border-l-4 border-blue-700">Bu üniteden genellikle 3-4 soru gelir.</p>
        
        <div className="space-y-6">
            <div>
                <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-lg font-bold text-slate-900">Dosya Uzantıları</h3>
                    <span className="text-xs font-bold text-red-600 bg-red-50 px-2 py-1 rounded border border-red-100">Banko Soru</span>
                </div>
                <ul className="list-disc pl-5 space-y-2 text-slate-700">
                    <li><code className="font-bold text-pink-600">.xlsm</code>: Makro içeren Excel dosyasıdır. <span className="text-xs border border-slate-300 px-1 rounded ml-1">2024 Sorusu</span></li>
                    <li><code className="font-bold text-slate-600">.xlsx</code>: Standart Excel dosyasıdır, makro barındırmaz.</li>
                </ul>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-slate-50 p-4 rounded border border-slate-100">
                    <h3 className="font-bold text-slate-900 mb-2">Kısayollar</h3>
                    <ul className="space-y-3 text-sm">
                        <li className="flex justify-between items-center">
                            <span>VBE&apos;yi Açma</span>
                            <span className="font-mono bg-white border border-slate-300 px-2 rounded shadow-sm">Alt + F11</span>
                        </li>
                        <li className="flex justify-between items-center">
                            <span>Makroları Görme</span>
                            <span className="font-mono bg-white border border-slate-300 px-2 rounded shadow-sm">Alt + F8</span>
                        </li>
                    </ul>
                </div>
                <div>
                    <h3 className="font-bold text-slate-900 mb-2">VBE Ayarları</h3>
                    <p className="text-sm text-slate-700 mb-2">Değişken tanımlamayı zorunlu kılan ayar: <strong>&quot;Require Variable Declaration&quot;</strong></p>
                    <p className="text-sm text-slate-700">Bu ayar kodun başına şunu ekler: <code className="font-mono text-blue-600 bg-blue-50 px-1">Option Explicit</code></p>
                </div>
            </div>
        </div>
    </section>

    <section className="mb-12">
        <h2 className="text-2xl font-bold text-blue-700 mb-4">2. Ünite: Visual Basic&apos;in Temelleri</h2>
        
        <div className="space-y-6">
            <div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">Veri Türleri</h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-slate-700">
                    <li className="border border-slate-100 p-2 rounded"><strong className="text-purple-700">Boolean:</strong> Sadece True/False. <span className="text-xs text-slate-400">(2024 Sorusu)</span></li>
                    <li className="border border-slate-100 p-2 rounded"><strong className="text-purple-700">Integer / Long:</strong> Tam sayılar.</li>
                    <li className="border border-slate-100 p-2 rounded"><strong className="text-purple-700">String:</strong> Metin ifadeleri.</li>
                    <li className="border border-slate-100 p-2 rounded"><strong className="text-purple-700">Variant:</strong> Türü belli olmayan, her şeyi tutan.</li>
                </ul>
            </div>

            <div className="space-y-4">
                <div>
                    <h3 className="font-bold text-slate-900">Operatörler</h3>
                    <p className="text-slate-700 mt-1"><code className="font-mono font-bold text-pink-600">Mod</code>: Bölme işleminden kalanı verir. (Örn: 10 Mod 3 = 1).</p>
                </div>
                <div>
                    <h3 className="font-bold text-slate-900">Diziler (Arrays)</h3>
                    <ul className="list-disc pl-5 text-slate-700 mt-1">
                        <li><strong>ReDim:</strong> Boyutu değiştirir (veri silinir).</li>
                        <li><strong>ReDim Preserve:</strong> Verileri koruyarak boyutu değiştirir. <span className="text-xs font-bold text-red-600 bg-red-50 px-1 rounded">2024</span></li>
                    </ul>
                </div>
            </div>
        </div>
    </section>

    <section className="mb-12">
        <h2 className="text-2xl font-bold text-blue-700 mb-4">3. Ünite: Program Akışını Yönetmek</h2>
        <p className="text-slate-600 mb-6 italic text-sm bg-slate-50 p-3 rounded-md border-l-4 border-blue-700">Sınavın en teknik kısmı burasıdır.</p>

        <div className="space-y-6">
            <div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">Karar Yapıları</h3>
                <ul className="space-y-2 text-slate-700">
                    <li><code className="font-mono font-bold text-blue-600">If-Then-Else</code>: Klasik &quot;Eğer&quot; koşulu.</li>
                    <li><code className="font-mono font-bold text-blue-600">Select Case</code>: Bir değişkenin birçok değerine göre işlem yapar. (If-Else alternatifi).</li>
                </ul>
            </div>

            <div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">Döngüler</h3>
                <ul className="space-y-2 text-slate-700">
                    <li><code className="font-mono font-bold text-green-600">For...Next</code>: Belirli sayı kadar döner.</li>
                    <li><code className="font-mono font-bold text-green-600">For Each...Next</code>: Bir <strong>koleksiyonun</strong> içinde dolaşır. <span className="text-xs border border-slate-300 px-1 rounded ml-1">2024 Sorusu</span></li>
                    <li><code className="font-mono font-bold text-green-600">Do While / Loop</code>: Koşul doğru olduğu sürece.</li>
                    <li><span className="text-red-600 font-medium">Çıkış Komutları:</span> Exit For veya Exit Do.</li>
                </ul>
            </div>
        </div>
    </section>

    <section className="mb-12">
        <h2 className="text-2xl font-bold text-blue-700 mb-4">4. Ünite: Nesneler (Application & Workbooks)</h2>
        
        <div className="space-y-6">
            <div className="bg-yellow-50 p-4 rounded border border-yellow-100">
                <h3 className="text-lg font-bold text-yellow-900 mb-2">Application Nesnesi (Çok Önemli)</h3>
                <ul className="space-y-3 text-yellow-900">
                    <li>
                        <code className="font-mono font-bold">ScreenUpdating = False</code>
                        <span className="text-sm opacity-80">Kod çalışırken ekran titremesini önler (hızlandırır).</span>
                    </li>
                    <li>
                        <code className="font-mono font-bold">DisplayAlerts = False</code>
                        <span className="text-sm opacity-80">Uyarı mesajlarını (Silme onayı vb.) kapatır.</span>
                    </li>
                </ul>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
                <div>
                    <h3 className="font-bold text-slate-900 mb-2">Worksheet (Sayfa)</h3>
                    <ul className="text-slate-700 space-y-1 text-sm">
                        <li>• İsim Değiştirme: <code className="bg-slate-100 px-1">.Name = &quot;Yeni&quot;</code></li>
                        <li>• Ekleme: <code className="bg-slate-100 px-1">Worksheets.Add</code></li>
                    </ul>
                </div>
                <div>
                    <h3 className="font-bold text-slate-900 mb-2">Workbook (Kitap)</h3>
                    <ul className="text-slate-700 space-y-1 text-sm">
                        <li>• Yeni Kitap: <code className="bg-slate-100 px-1">Workbooks.Add</code></li>
                        <li>• Açma: <code className="bg-slate-100 px-1">Workbooks.Open</code></li>
                    </ul>
                </div>
            </div>
        </div>
    </section>

    <section className="bg-slate-900 text-slate-300 p-6 rounded-lg shadow-lg mt-8">
        <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
            🎯 Sınav İçin &quot;Hızlı Tekrar&ldquo; Listesi
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3 text-sm">
            <div className="flex justify-between border-b border-slate-700 pb-1">
                <span>Değişken Zorunluluğu</span>
                <code className="text-pink-400 font-mono">Option Explicit</code>
            </div>
            <div className="flex justify-between border-b border-slate-700 pb-1">
                <span>Kod Editörü</span>
                <code className="text-pink-400 font-mono">Alt + F11</code>
            </div>
            <div className="flex justify-between border-b border-slate-700 pb-1">
                <span>Kalan Bulma</span>
                <code className="text-pink-400 font-mono">Mod</code>
            </div>
            <div className="flex justify-between border-b border-slate-700 pb-1">
                <span>Veri Korumalı Boyutlandırma</span>
                <code className="text-pink-400 font-mono">ReDim Preserve</code>
            </div>
            <div className="flex justify-between border-b border-slate-700 pb-1">
                <span>Ekran Tazelemeyi Kapat</span>
                <code className="text-pink-400 font-mono">ScreenUpdating = False</code>
            </div>
            <div className="flex justify-between border-b border-slate-700 pb-1">
                <span>Koleksiyon Döngüsü</span>
                <code className="text-pink-400 font-mono">For Each</code>
            </div>
            <div className="flex justify-between border-b border-slate-700 pb-1">
                <span>Makrolu Dosya</span>
                <code className="text-pink-400 font-mono">.xlsm</code>
            </div>
             <div className="flex justify-between border-b border-slate-700 pb-1">
                <span>Döngüden Çıkış</span>
                <code className="text-pink-400 font-mono">Exit Do / For</code>
            </div>
        </div>
    </section>
    <span>Sorular genellikle &quot;Aşağıdakilerden hangisi ... yapar?&quot; şeklinde kodun işlevini sormaya yöneliktir. Kod parçalarını okuyup ne işe yaradığını anlamaya çalışman yeterlidir. Başarılar!</span>
</div>
      )
    },
    kullanicideneyimtasarimi: {
      id: "kullanicideneyimtasarimi",
      title: "Kullanıcı Deneyimi Tasarımı",
      description: "Programlama, Veri Yapıları",
      pdfs: [],
      cikmissorular:[],
      finalnotlar:[],
      onemli:(
      <div className="max-w-3xl mx-auto py-12 px-6 font-sans text-slate-800 bg-white min-h-screen">

    <section className="mb-12">
        <h2 className="text-2xl font-bold text-blue-700 mb-4">1. Ünite: Temel Kavramlar ve Tarihçe</h2>
        <p className="text-slate-600 mb-6 italic text-sm bg-slate-50 p-3 rounded-md border-l-4 border-blue-700">Bu üniteden genellikle tanımlar ve tarihsel figürler sorulur.</p>
        
        <div className="space-y-6">
            <div>
                <h3 className="text-lg font-semibold text-slate-900 mb-1">Kullanıcı Deneyimi (UX) Tanımı</h3>
                <p className="leading-relaxed">ISO tanımı veya Jesse James Garrett&apos;ın tanımı. <span className="font-medium text-red-600 bg-red-50 px-1 rounded">Sınavda UX&apos;in çok disiplinli yapısı ve bilgi mimarisi sorulmuş.</span></p>
            </div>

            <div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">Tarihsel Figürler</h3>
                <ul className="list-disc pl-5 space-y-2 text-slate-700">
                    <li><strong>Henry Dreyfuss:</strong> &quot;Designing for People&quot; kitabının yazarı. Tasarımda ergonomi ve kullanıcı psikolojisini vurgular.</li>
                    <li><strong>Don Norman:</strong> &quot;Kullanıcı Deneyimi&quot; terimini ilk kullanan kişi (Apple).</li>
                    <li><strong>Frederick Winslow Taylor:</strong> Bilimsel yönetim ve verimlilik.</li>
                </ul>
            </div>

            <div>
                <h3 className="text-lg font-semibold text-slate-900 mb-1">Disiplinler</h3>
                <p className="text-slate-700">UX&apos;in beslendiği alanlar: İnsan-Bilgisayar Etkileşimi, Psikoloji, Endüstriyel Tasarım vb.</p>
            </div>
        </div>
    </section>

    <section className="mb-12">
        <h2 className="text-2xl font-bold text-blue-700 mb-4">2. Ünite: Tasarım Süreci ve Bileşenleri</h2>
        <p className="text-slate-600 mb-6 italic text-sm bg-slate-50 p-3 rounded-md border-l-4 border-blue-700">Sınavın en teknik ve bilgi gerektiren soruları buradan gelir. Özellikle Jesse James Garrett&apos;ın 5 Katman Modeli mutlaka sorulur.</p>
        
        <div className="space-y-6">
            <div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">Garrett&apos;ın 5 Katmanı</h3>
                <ol className="list-decimal pl-5 space-y-2 text-slate-700">
                    <li><strong>Strateji (Strategy):</strong> &quot;Ne elde etmek istiyoruz?&quot; ve &quot;Kullanıcı ne istiyor?&quot; soruları. <span className="text-xs text-slate-500 font-medium border border-slate-200 px-1.5 py-0.5 rounded ml-2">(2024 sınavı 9. soru)</span></li>
                    <li><strong>Kapsam (Scope):</strong> Özellikler ve içerik gereksinimleri.</li>
                    <li><strong>Yapı (Structure):</strong> Etkileşim tasarımı ve bilgi mimarisi. <span className="text-xs text-slate-500 font-medium border border-slate-200 px-1.5 py-0.5 rounded ml-2">(2024 sınavı 10. soru)</span></li>
                    <li><strong>İskelet (Skeleton):</strong> Arayüz, gezinme ve bilgi tasarımı.</li>
                    <li><strong>Yüzey (Surface):</strong> Görsel tasarım.</li>
                </ol>
            </div>

            <div>
                <h3 className="text-lg font-semibold text-slate-900 mb-1">Tasarım Süreci Adımları</h3>
                <p className="text-slate-700">Araştırma → Tasarım → Değerlendirme döngüsü. <span className="text-xs text-slate-500 font-medium border border-slate-200 px-1.5 py-0.5 rounded ml-2">(2024 sınavı 3. soru)</span></p>
            </div>

            <div>
                <h3 className="text-lg font-semibold text-slate-900 mb-1">Site Haritaları ve Akışlar</h3>
                <p className="text-slate-700">Web sitesinin yapısını kuş bakışı gösteren görsel yapı. <span className="text-xs text-slate-500 font-medium border border-slate-200 px-1.5 py-0.5 rounded ml-2">(2024 sınavı 6. soru)</span></p>
            </div>
        </div>
    </section>

    <section className="mb-12">
        <h2 className="text-2xl font-bold text-blue-700 mb-4">3. Ünite: Kullanıcı Özellikleri ve Analizi</h2>
        <p className="text-slate-600 mb-6 italic text-sm bg-slate-50 p-3 rounded-md border-l-4 border-blue-700">Kullanıcıyı tanıma yöntemleri ve psikolojik faktörler bu ünitenin konusudur.</p>
        
        <div className="space-y-6">
            <div>
                <h3 className="text-lg font-semibold text-slate-900 mb-1">Persona (Kullanıcı Karakterleri)</h3>
                <p className="text-slate-700">Kurgusal karakterler, hedef kitleyi temsil eder ve empati kurmayı sağlar. <span className="text-xs text-slate-500 font-medium border border-slate-200 px-1.5 py-0.5 rounded ml-2">(2024 sınavı 7. ve 14. soru)</span></p>
            </div>

            <div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">Veri Türleri</h3>
                <ul className="list-disc pl-5 space-y-2 text-slate-700">
                    <li><strong>Nitel Veri:</strong> &quot;Neden ve Nasıl&quot; sorularına cevap verir (Görüşmeler, gözlemler).</li>
                    <li><strong>Nicel Veri:</strong> &quot;Ne kadar, Ne sıklıkla&quot; sorularına cevap verir (Anketler, tıklama sayıları). <span className="text-xs text-slate-500 font-medium border border-slate-200 px-1.5 py-0.5 rounded ml-2">(2024 sınavı 15. soru)</span></li>
                </ul>
            </div>

            <div>
                <h3 className="text-lg font-semibold text-slate-900 mb-1">Erişilebilirlik (Accessibility)</h3>
                <p className="text-slate-700">İşitme veya görme engelli kullanıcılar için tasarım. (Altyazı, alt metin vb.) <span className="text-xs text-slate-500 font-medium border border-slate-200 px-1.5 py-0.5 rounded ml-2">(2024 sınavı 11. soru)</span></p>
            </div>

            <div>
                <h3 className="text-lg font-semibold text-slate-900 mb-1">Bilişsel Ön Yargılar</h3>
                <p className="text-slate-700">Kullanıcıların markalara olan güveni veya alışveriş alışkanlıklarını etkileyen psikolojik durumlar. <span className="text-xs text-slate-500 font-medium border border-slate-200 px-1.5 py-0.5 rounded ml-2">(2024 sınavı 12. soru)</span></p>
            </div>
        </div>
    </section>

    <section className="mb-12">
        <h2 className="text-2xl font-bold text-blue-700 mb-4">4. Ünite: Veri Gizliliği ve Güvenliği</h2>
        <p className="text-slate-600 mb-6 italic text-sm bg-slate-50 p-3 rounded-md border-l-4 border-blue-700">Son yıllarda KVKK ve GDPR nedeniyle bu üniteden gelen soru sayısı artmıştır.</p>
        
        <div className="space-y-6">
            <div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">Tasarım Yoluyla Gizlilik (Privacy by Design) İlkeleri</h3>
                <ul className="list-disc pl-5 space-y-2 text-slate-700">
                    <li><strong>Varsayılan Olarak Gizlilik (Privacy by Default):</strong> Kullanıcının ekstra bir şey yapmasına gerek kalmadan veriler korunur. <span className="font-medium text-red-600 bg-red-50 px-1 rounded">(2024 sınavı 18. soru)</span></li>
                    <li><strong>Reaktif değil Proaktif:</strong> Olay olmadan önlem almak.</li>
                    <li><strong>Uçtan Uca Güvenlik:</strong> Verinin tüm yaşam döngüsü boyunca korunması.</li>
                </ul>
            </div>

            <div>
                <h3 className="text-lg font-semibold text-slate-900 mb-1">Adil Bilişim Uygulamaları</h3>
                <p className="text-slate-700">Kullanıcının verisinin neden toplandığını bilmesi ve izin vermesi. <span className="text-xs text-slate-500 font-medium border border-slate-200 px-1.5 py-0.5 rounded ml-2">(2024 sınavı 16. soru)</span></p>
            </div>

            <div>
                <h3 className="text-lg font-semibold text-slate-900 mb-1">Güvenlik Tehditleri</h3>
                <p className="text-slate-700">Veri ihlalleri, oltalama (phishing) vb.</p>
            </div>
        </div>
    </section>

    <section className="bg-slate-50 p-6 rounded-lg border border-slate-200 mt-8">
        <h2 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
            🎯 Sınav Taktikleri ve Özet
        </h2>
        <ul className="grid md:grid-cols-2 gap-x-8 gap-y-3 text-slate-700">
            <li className="flex gap-2"><span className="text-green-600 font-bold">✓</span> <span><strong>Strateji Katmanı:</strong> Hedefler ve ihtiyaçlar.</span></li>
            <li className="flex gap-2"><span className="text-green-600 font-bold">✓</span> <span><strong>Bilgi Mimarisi:</strong> &quot;Bulunabilirlik&quot;.</span></li>
            <li className="flex gap-2"><span className="text-green-600 font-bold">✓</span> <span><strong>Persona:</strong> Kurgusal profil.</span></li>
            <li className="flex gap-2"><span className="text-green-600 font-bold">✓</span> <span><strong>Privacy by Default:</strong> Varsayılan gizlilik.</span></li>
            <li className="flex gap-2"><span className="text-green-600 font-bold">✓</span> <span><strong>Kullanılabilirlik Testi:</strong> Gerçek kullanıcı.</span></li>
            <li className="flex gap-2"><span className="text-green-600 font-bold">✓</span> <span><strong>Henry Dreyfuss:</strong> Designing for People.</span></li>
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
      finalnotlar:[],
      onemli:(
        <div className="max-w-3xl mx-auto py-12 px-6 font-sans text-slate-800 bg-white min-h-screen">
    <section className="mb-12">
        <h2 className="text-2xl font-bold text-blue-700 mb-4">1. Ünite: Web Teknolojisinin Doğuşu</h2>
        <p className="text-slate-600 mb-6 italic text-sm bg-slate-50 p-3 rounded-md border-l-4 border-blue-700">Bu üniteden genellikle Protokoller ve Tanımlar sorulur.</p>
        
        <div className="space-y-6">
            <div>
                <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-lg font-bold text-slate-900">Protokoller</h3>
                    <span className="text-xs font-bold text-red-600 bg-red-50 px-2 py-1 rounded border border-red-100">Banko Soru (1-2 Adet)</span>
                </div>
                <ul className="list-disc pl-5 space-y-2 text-slate-700">
                    <li><strong>HTTP:</strong> Web sayfalarının iletimi için kullanılır.</li>
                    <li><strong>FTP:</strong> Dosya transferi için kullanılır.</li>
                    <li><strong>SMTP:</strong> E-posta gönderimi için kullanılır.</li>
                    <li><strong>DNS:</strong> Alan adlarını (www.google.com) IP adresine çevirir.</li>
                    <li><strong>Proxy Sunucusu:</strong> İnternet trafiğini verimli kullanmak ve önbellekleme yapmak için kullanılan sunucu.</li>
                </ul>
            </div>

            <div className="bg-slate-50 p-4 rounded border border-slate-100">
                <h3 className="text-lg font-bold text-slate-900 mb-2">IP Adres Sınıfları</h3>
                <p className="text-sm text-slate-500 mb-3">2024&apos;te C sınıfı soruldu. Bu yıl A veya B sorulabilir.</p>
                <div className="grid grid-cols-3 gap-4 text-center">
                    <div className="bg-white p-2 rounded shadow-sm border border-slate-200">
                        <div className="font-bold text-blue-600">A Sınıfı</div>
                        <div className="text-slate-700">1 - 126</div>
                    </div>
                    <div className="bg-white p-2 rounded shadow-sm border border-slate-200">
                        <div className="font-bold text-blue-600">B Sınıfı</div>
                        <div className="text-slate-700">128 - 191</div>
                    </div>
                    <div className="bg-white p-2 rounded shadow-sm border border-slate-200">
                        <div className="font-bold text-blue-600">C Sınıfı</div>
                        <div className="text-slate-700">192 - 223</div>
                    </div>
                </div>
            </div>
            
            <div>
                <h3 className="text-lg font-bold text-slate-900 mb-1">Tarihçe</h3>
                <p className="text-slate-700"><strong>ARPANET</strong> (İnternetin atası) ve <strong>1969</strong> yılı sıkça sorulur.</p>
            </div>
        </div>
    </section>

    <section className="mb-12">
        <h2 className="text-2xl font-bold text-blue-700 mb-4">2. Ünite: Metin Biçimlendirme (HTML/CSS)</h2>
        
        <div className="space-y-6">
            <div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">CSS Seçicileri (Kesin Çıkar)</h3>
                <ul className="space-y-2 text-slate-700">
                    <li className="flex items-center gap-2">
                        <span className="font-mono bg-yellow-100 text-yellow-800 px-2 rounded">#</span>
                        <span><strong>ID Seçicisi:</strong> Diyez işareti ile tanımlanır.</span>
                    </li>
                    <li className="flex items-center gap-2">
                        <span className="font-mono bg-yellow-100 text-yellow-800 px-2 rounded">.</span>
                        <span><strong>Class (Sınıf) Seçicisi:</strong> Nokta işareti ile tanımlanır.</span>
                    </li>
                    <li className="flex items-center gap-2">
                        <span className="font-mono bg-slate-200 text-slate-700 px-2 rounded">&lt;link&gt;</span>
                        <span>Dışarıdan CSS çağırma yapısı sorulur.</span>
                    </li>
                </ul>
            </div>

            <div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">Kritik HTML Etiketleri</h3>
                <ul className="list-disc pl-5 space-y-2 text-slate-700">
                    <li><code className="text-pink-600 bg-slate-100 px-1 rounded">&amp;nbsp;</code> : Fazladan boşluk bırakmak için kullanılır. <span className="text-xs text-red-600 font-bold ml-1">(Son 3 sınavın 2&apos;sinde soruldu!)</span></li>
                    <li><code className="text-pink-600 bg-slate-100 px-1 rounded">&lt;b&gt;</code>, <code className="text-pink-600 bg-slate-100 px-1 rounded">&lt;i&gt;</code>, <code className="text-pink-600 bg-slate-100 px-1 rounded">&lt;u&gt;</code> : Koyu, İtalik, Altı çizili.</li>
                    <li><code className="text-pink-600 bg-slate-100 px-1 rounded">&lt;br&gt;</code> : Alt satıra geçme.</li>
                    <li><code className="text-pink-600 bg-slate-100 px-1 rounded">&lt;font&gt;</code> : Eski ama AÖF sever. Özellikle <strong>face</strong> ve <strong>color</strong> parametreleri.</li>
                </ul>
            </div>
        </div>
    </section>

    <section className="mb-12">
        <h2 className="text-2xl font-bold text-blue-700 mb-4">3. Ünite: Çoklu Ortam</h2>
        
        <div className="space-y-6">
            <div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">Video ve Ses Kontrolleri</h3>
                <ul className="list-disc pl-5 space-y-2 text-slate-700">
                    <li><code className="text-pink-600 font-bold">controls</code>: Oynat/Durdur panelini açar.</li>
                    <li><code className="text-pink-600 font-bold">autoplay</code>: Otomatik başlatır.</li>
                    <li><code className="text-pink-600 font-bold">loop</code>: Sürekli başa dönüp oynatır (Döngü).</li>
                    <li><code className="text-pink-600 font-bold">&lt;iframe&gt;</code>: Youtube videolarını eklemek için kullanılır. <span className="text-xs text-slate-500 border border-slate-200 px-1 rounded ml-1">(2024 Sorusu)</span></li>
                </ul>
            </div>

            <div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">Resim (img) ve Haritalar</h3>
                <ul className="list-disc pl-5 space-y-2 text-slate-700">
                    <li><strong>Parametreler:</strong> src (yol), alt (alternatif metin), width (genişlik).</li>
                    <li><strong>Image Maps:</strong> Resim üzerinde tıklanabilir alanlar için <code className="text-pink-600 bg-slate-100 px-1 rounded">usemap</code> ve <code className="text-pink-600 bg-slate-100 px-1 rounded">&lt;area&gt;</code> kullanılır. Şekil olarak <em>rect</em> veya <em>circle</em> sorulabilir.</li>
                </ul>
            </div>
        </div>
    </section>

    <section className="mb-12">
        <h2 className="text-2xl font-bold text-blue-700 mb-4">4. Ünite: Tablolar</h2>
        <p className="text-slate-600 mb-6 italic text-sm bg-slate-50 p-3 rounded-md border-l-4 border-blue-700">Bu üniteden en karmaşık sorular gelir ancak mantığı basittir.</p>

        <div className="space-y-6">
            <div>
                <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-lg font-bold text-slate-900">Hücre Birleştirme</h3>
                    <span className="text-xs font-bold text-red-600 bg-red-50 px-2 py-1 rounded border border-red-100">Banko Soru</span>
                </div>
                <ul className="list-disc pl-5 space-y-2 text-slate-700">
                    <li><code className="text-pink-600 font-bold">colspan</code>: Sütunları (yan yana) birleştirir.</li>
                    <li><code className="text-pink-600 font-bold">rowspan</code>: Satırları (alt alta) birleştirir. <span className="text-sm text-slate-500 italic">(İpucu: Row = Satır)</span></li>
                </ul>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
                <div>
                    <h3 className="text-lg font-bold text-slate-900 mb-2">Etiketler</h3>
                    <ul className="space-y-1 text-slate-700">
                        <li><code className="text-pink-600 bg-slate-100 px-1 rounded">&lt;tr&gt;</code> : Satır (Table Row)</li>
                        <li><code className="text-pink-600 bg-slate-100 px-1 rounded">&lt;td&gt;</code> : Veri Hücresi (Table Data)</li>
                        <li><code className="text-pink-600 bg-slate-100 px-1 rounded">&lt;th&gt;</code> : Başlık Hücresi (Header)</li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-lg font-bold text-slate-900 mb-2">CSS Özellikleri</h3>
                    <ul className="space-y-1 text-slate-700">
                        <li><strong>border-collapse:</strong> Kenarlıkları tek çizgi yapar.</li>
                        <li><strong>border-spacing:</strong> Hücre boşluğunu ayarlar.</li>
                    </ul>
                </div>
            </div>
        </div>
    </section>

    <section className="bg-slate-900 text-slate-300 p-6 rounded-lg shadow-lg mt-8">
        <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
            🎯 Sınav İçin &quot;Hızlı Tekrar&quot; Listesi
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
            <div className="border border-slate-700 p-3 rounded bg-slate-800">
                <div className="text-slate-400 text-xs uppercase">Boşluk Karakteri</div>
                <div className="text-pink-400 font-mono font-bold">&amp;nbsp;</div>
            </div>
            <div className="border border-slate-700 p-3 rounded bg-slate-800">
                <div className="text-slate-400 text-xs uppercase">Dosya Transfer</div>
                <div className="text-white font-bold">FTP</div>
            </div>
            <div className="border border-slate-700 p-3 rounded bg-slate-800">
                <div className="text-slate-400 text-xs uppercase">ID Seçicisi</div>
                <div className="text-white font-bold"># (Diyez)</div>
            </div>
            <div className="border border-slate-700 p-3 rounded bg-slate-800">
                <div className="text-slate-400 text-xs uppercase">Sütun Birleştirme</div>
                <div className="text-pink-400 font-mono font-bold">colspan</div>
            </div>
            <div className="border border-slate-700 p-3 rounded bg-slate-800">
                <div className="text-slate-400 text-xs uppercase">Youtube Ekleme</div>
                <div className="text-pink-400 font-mono font-bold">&lt;iframe&gt;</div>
            </div>
            <div className="border border-slate-700 p-3 rounded bg-slate-800">
                <div className="text-slate-400 text-xs uppercase">Döngüsel Oynatma</div>
                <div className="text-pink-400 font-mono font-bold">loop</div>
            </div>
            <div className="border border-slate-700 p-3 rounded bg-slate-800">
                <div className="text-slate-400 text-xs uppercase">CSS Çağırma</div>
                <div className="text-pink-400 font-mono font-bold">&lt;link&gt;</div>
            </div>
            <div className="border border-slate-700 p-3 rounded bg-slate-800">
                <div className="text-slate-400 text-xs uppercase">Resim Haritası</div>
                <div className="text-pink-400 font-mono font-bold">usemap</div>
            </div>
        </div>
    </section>

</div>
      )
    },
  });

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

          // Güncellenmiş objeyi oluştur
          updated[key] = {
            ...prev[key],
            pdfs: uniquePdfs,
            cikmissorular: uniqueQuestions,
            finalnotlar: uniqueFinal,
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
            
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value={`course-${index}`} className="border-none">
                
                {/* --- ANA BAŞLIK (TRIGGER) --- */}
                <AccordionTrigger className="px-6 py-4 hover:bg-gray-50 hover:no-underline">
                  <div className="flex flex-col md:flex-row md:items-center justify-between w-full pr-4 gap-2 text-left">
                    
                    {/* Ders Başlığı */}
                    <span className="text-xl font-bold text-gray-800">
                      {course.title}
                    </span>

                    {/* Özet Rozet */}
                    <span className="text-xs font-medium bg-indigo-50 text-indigo-700 px-3 py-1 rounded-full whitespace-nowrap">
                      {course.pdfs.length} Vize • {course.finalnotlar.length} Final • {course.cikmissorular.length} Soru Dosyası
                    </span>
                    
                  </div>
                </AccordionTrigger>

                {/* --- ANA İÇERİK (CONTENT) --- */}
                <AccordionContent className="bg-gray-50/50 px-6 pb-6 pt-2">
                  
                  {/* İç İçe Accordion Başlıyor */}
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

                    {/* 2. Final Notları */}
                    <AccordionItem value="final-files" className="border bg-white rounded-lg px-0 overflow-hidden">
                      <AccordionTrigger className="px-4 py-3 font-semibold text-indigo-700 hover:bg-indigo-50 hover:no-underline">
                         <span>🎓 Final Notları</span>
                         <span className="text-xs text-gray-500 bg-gray-100 px-2 py-0.5 rounded ml-2">{course.finalnotlar.length} Dosya</span>
                      </AccordionTrigger>
                      <AccordionContent className="px-4 py-2 border-t">
                        <div className="mt-6">
                        {course.finalnotlar.length === 0 && (
                            <div className="text-center text-gray-600">Bu derse ait PDF bulunmuyor.</div>
                        )}
                            {course.finalnotlar.map((pdf) => (
                            <div key={pdf.id} className="flex items-center justify-between bg-gray-50 p-3 rounded-lg">
                                <div>
                                <div className="font-medium text-black">{pdf.name}</div>
                                <div className="text-xs text-gray-500">{pdf.size}</div>
                                </div>

                                <div className="flex items-center gap-2">
                                <div className="flex items-center gap-2">
                                 <a href={`https://drive.google.com/file/d/${pdf.id}/preview`} target="_blank" rel="noreferrer" download={pdf.name} className="text-sm bg-indigo-600 text-white px-3 py-1 rounded">
                                    Görüntüle
                                 </a>
                                </div>
                                <a href={pdf.url} target="_blank" rel="noreferrer" download={pdf.name} className="text-sm bg-indigo-600 text-white px-3 py-1 rounded">
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
                                    <div className="text-xs text-gray-500">{pdf.size} KB</div>
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
                            <div className="mt-6">
                                <div className="mt-3 flex items-center gap-3">
                                <span className="text-sm text-gray-500">Seçilen dosya tarayıcıda geçici olarak kaydedilir. Gerçek kullanım için sunucu depolama kullanın.</span>
                                </div>
                            </div>
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

      {/* Gizli file input - admin için */}
      <input ref={fileInputRef} type="file" accept="application/pdf" className="hidden" onChange={onFileChange} />

      <footer className="max-w-6xl mx-auto mt-12 text-center text-gray-500 text-sm">© {new Date().getFullYear()} Dersler - Eğitim Portalı</footer>
    </div>
  );
}
