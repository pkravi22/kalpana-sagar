'use client';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const stats = [
  { value: '15+', label: 'वर्षों की सेवा', icon: 'fa-calendar-check' },
  { value: '80+', label: 'विकास परियोजनाएँ', icon: 'fa-city' },
  { value: '30K+', label: 'लाभार्थी परिवार', icon: 'fa-people-roof' },
  { value: '150+', label: 'महिला कार्यक्रम', icon: 'fa-bullhorn' },
];

const features = [
  { icon: 'fa-seedling', title: 'महिला सशक्तिकरण', text: 'महिलाओं को संगठित, सक्षम और आत्मनिर्भर बनाने के लिए सेवा-आधारित योजनाओं को जन-जन तक पहुँचाना।' },
  { icon: 'fa-book-open', title: 'शिक्षा और बेटी बचाओ', text: 'बालिका शिक्षा, प्रोत्साहन योजनाओं और जागरूकता अभियानों को प्राथमिकता से आगे बढ़ाना।' },
  { icon: 'fa-heart-pulse', title: 'स्वास्थ्य और पोषण', text: 'स्वास्थ्य शिविर, बाल पोषण और महिला स्वास्थ्य सेवा को ग्रामीण स्तर तक मजबूत बनाना।' },
  { icon: 'fa-tractor', title: 'ग्रामीण विकास', text: 'सड़क, जल, बिजली, स्वच्छता और आधारभूत सुविधाओं को गांवों तक पहुँचाना।' },
];

const gallery = [
  { src: '/Kalpana.jpeg', title: 'जनसभा' },
  { src: '/Kalpana1.jpeg', title: 'महिला कार्यक्रम' },
  { src: '/Kalpana2.jpeg', title: 'जनसेवा' },
  { src: '/Kalpana3.jpeg', title: 'BJP कार्यक्रम' },
  { src: '/DSC_1042.JPG.webp', title: 'महिला सशक्तिकरण गोष्ठी' },
  { src: '/DSC_1703.JPG.webp', title: 'विकास कार्य निरीक्षण' },
  { src: '/DSC_2148 - Copy - Copy.JPG.webp', title: 'विद्यालय पुरस्कार वितरण' },
  { src: '/DSC_2830.JPG.webp', title: 'आवास योजना वितरण' },
  { src: '/DSC_3278.JPG.webp', title: 'नारी शक्ति वंदन' },
];

const socialLinks = [
  { href: 'https://facebook.com/kalpanajitendrasonkar', label: 'Facebook', icon: 'fa-facebook-f', color: 'bg-blue-600' },
  { href: 'https://instagram.com/kalpanajitendrasonkar', label: 'Instagram', icon: 'fa-instagram', color: 'bg-pink-600' },
  { href: 'https://wa.me/918299223340', label: 'WhatsApp', icon: 'fa-whatsapp', color: 'bg-emerald-500' },
];

export default function HomeClient() {
  return (
    <>
      <section id="home" className="relative hero-gradient text-white pt-4 md:pt-8 pb-16 lg:py-6 overflow-hidden">
        {/* Replace lotus pattern with logo.webp */}
        <div className="absolute inset-0 opacity-10 pointer-events-none flex justify-center items-center">
          <img src="/logo.webp" alt="Background Logo" className="w-[600px] h-[600px] rounded-full object-cover" />
        </div>
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-yellow-300/20 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#FCFBF7] to-transparent"></div>
        <div className="max-w-7xl mx-auto px-3  sm:px-6   md:pt-0 lg:px-8 relative z-10">
          <div className="flex flex-wrap items-center justify-between gap-3 mb-4 sm:mb-4 pb-2 border-b border-white/20">
            <div className="inline-flex items-center gap-[2px] md:gap-2 bg-black/25 backdrop-blur-md px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-semibold border border-white/20 shadow-inner">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
              <span>भारतीय जनता पार्टी जिंदाबाद</span>
              <span className="text-amber-300">|</span>
              <span className="text-pink-100 font-normal">कौशाम्बी (उत्तर प्रदेश)</span>
            </div>

            <div className="flex items-center gap-3 text-xs bg-white/10 backdrop-blur-md px-1 py-1 rounded-full border border-white/20">
              <span className="font-bold tracking-wide flex items-center gap-1.5 text-white">
                <i className="fa-solid fa-award text-amber-300" /> सबका साथ, सबका विकास,सबका विश्वास,सबका प्रयास
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-7 order-2 lg:order-1 space-y-6 text-center lg:text-left">
              <div className="space-y-2">
                <div className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm rounded-md text-xs font-black uppercase tracking-wider text-amber-100 mb-1">
                  महिला नेतृत्व • जन सेवा
                </div>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-yatra tracking-tight leading-tight drop-shadow-md">
                  कल्पना सोनकर
                </h1>
                <p className="text-lg sm:text-2xl font-bold text-pink-50 font-hindi drop-shadow">
                  जिला पंचायत अध्यक्ष, कौशाम्बी (उत्तर प्रदेश)
                </p>
              </div>

              <div className="p-4 sm:p-5 rounded-2xl bg-black/20 backdrop-blur-md border border-white/25 max-w-2xl mx-auto lg:mx-0 shadow-lg">
                <p className="text-base sm:text-lg font-medium text-slate-100 leading-relaxed italic">
                  “नारी शक्ति, सशक्त समाज और जनकल्याण की भावना को साथ लेकर कौशाम्बी को विकास की नई ऊँचाइयों पर ले जाना है।”
                </p>
                <div className="mt-3 flex items-center justify-between text-xs text-pink-100/90 font-semibold border-t border-white/10 pt-2">
                  <span><i className="fa-solid fa-location-dot text-pink-200 mr-1" /> कर्मभूमि: कौशाम्बी</span>
                  <span><i className="fa-solid fa-users text-pink-200 mr-1" /> जन-जन का सेवक</span>
                </div>
              </div>

              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
                <Link href="/about" className="px-6 py-3.5 rounded-xl bg-white text-[#0B1D3A] font-black text-sm hover:bg-pink-50 hover:shadow-xl transition-all flex items-center gap-2 transform active:scale-95 shadow-md">
                  <span>परिचय पढ़ें</span>
                  <i className="fa-solid fa-arrow-right text-pink-600 text-xs" />
                </Link>
                <Link href="/jan-sunwai" className="px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm hover:shadow-xl transition-all flex items-center gap-2 transform active:scale-95 shadow-md border border-emerald-400/30">
                  <i className="fa-solid fa-comments" />
                  <span>जनसुनवाई में भाग लें</span>
                </Link>
              </div>

              <div className="flex items-center justify-center lg:justify-start gap-3">
                {socialLinks.map((s) => (
                  <a key={s.label} href={s.href} target="_blank" rel="noreferrer" className={`w-10 h-10 rounded-full ${s.color} flex items-center justify-center text-white transition-colors`} title={s.label} aria-label={s.label}>
                    <i className={`fa-brands ${s.icon}`} />
                  </a>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5 order-1 lg:order-2 flex justify-center relative">
              <div className="relative w-full max-w-sm sm:max-w-md">
                <div className="absolute inset-0 bg-gradient-to-tr from-pink-400 to-rose-600 rounded-3xl blur-2xl opacity-40 transform rotate-3" />

                <div className="relative bg-gradient-to-b from-white/95 to-pink-50/95 p-3 rounded-3xl shadow-2xl border-4 border-white">
                  <div className="relative overflow-hidden rounded-2xl bg-gradient-to-b from-pink-100 to-rose-200 aspect-[4/5] shadow-inner flex items-center justify-center">
                    <Image
                      src="/Kalpana.jpeg"
                      alt="कल्पना सोनकर"
                      width={700}
                      height={900}
                      className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700"
                    />

                    <div className="absolute bottom-3 right-3 bg-white/95 backdrop-blur-md p-2 rounded-xl shadow-lg border border-pink-200 flex items-center gap-2">
                      <div className="w-7 h-7 rounded-full bg-pink-100 flex items-center justify-center">
                        <i className="fa-solid fa-certificate text-pink-600 text-sm" />
                      </div>
                      <div>
                        <p className="text-[10px] font-black uppercase text-slate-800 leading-none">BJP Kaushambi</p>
                        <p className="text-[9px] font-bold text-pink-600 leading-none mt-0.5">आधिकारिक प्रोफाइल</p>
                      </div>
                    </div>

                    <div className="absolute top-3 left-3 bg-[#0B1D3A]/90 backdrop-blur-md text-white text-[11px] font-bold px-3 py-1 rounded-full shadow-md flex items-center gap-1.5 border border-white/20">
                      <i className="fa-solid fa-shield-halved text-amber-400" />
                      <span>प्रमाणित जनसेवक</span>
                    </div>
                  </div>

                  <div className="mt-3 text-center pb-1">
                    <p className="text-sm font-black text-slate-900 font-yatra">कल्पना सोनकर</p>
                    <p className="text-xs font-semibold text-slate-600">जिला पंचायत अध्यक्ष • कौशाम्बी</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative -mt-2 z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-card rounded-2xl shadow-xl border border-pink-200/80 p-6 sm:p-8 bg-white/95">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center divide-y md:divide-y-0 md:divide-x divide-pink-100">
            {stats.map((item) => (
              <div key={item.label} className="pt-2 md:pt-0">
                <div className={`w-12 h-12 mx-auto mb-2 rounded-xl ${item.label.includes('महिला') ? 'bg-pink-100 text-pink-600' : item.label.includes('परियोजन') ? 'bg-blue-100 text-blue-700' : item.label.includes('लाभार्थी') ? 'bg-emerald-100 text-emerald-700' : 'bg-purple-100 text-purple-700'} flex items-center justify-center text-xl`}>
                  <i className={`fa-solid ${item.icon}`} />
                </div>
                <div className="text-3xl sm:text-4xl font-extrabold text-[#0B1D3A] font-poppins">{item.value}</div>
                <div className="text-xs sm:text-sm font-bold text-slate-600 mt-1 font-hindi">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-16 sm:py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none flex justify-end items-end">
          <Image src="/logo.webp" alt="Background Logo" width={800} height={800} className="w-[800px] h-[800px] rounded-full object-cover -mr-[200px] -mb-[200px]" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-2">
                <div className="inline-flex items-center gap-2 text-pink-700 font-bold text-xs uppercase tracking-widest bg-pink-100 px-3 py-1 rounded-full">
                  <i className="fa-solid fa-bullseye" /> महिला नेतृत्व • जन सेवा
                </div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 font-yatra leading-tight">
                  कौशाम्बी की विकास का <br className="hidden sm:inline" />
                  <span className="text-pink-700 underline decoration-amber-300 decoration-wavy decoration-2">संकल्प और समर्पण</span>
                </h2>
              </div>

              <div className="space-y-4 text-slate-700 text-base sm:text-lg font-hindi leading-relaxed">
                <p>
                  <strong className="text-[#0B1D3A] font-bold">कल्पना सोनकर जी</strong> कौशाम्बी जिले की एक लोकप्रिय, निष्ठावान और समर्पित महिला नेता हैं। वे अपने जीवन का आधार सेवा, अनुशासन और जनहित को मानते हुए सामाजिक परिवर्तन के लिए निरंतर प्रयासरत रही हैं।
                </p>
                <p>
                  भारतीय जनता पार्टी की विचारधारा और सामाजिक समरसता के साथ उन्होंने महिलाओं, युवाओं और ग्रामीण परिवारों के उत्थान को अपने मिशन के रूप में अपनाया है। उन्होंने नारी शक्ति को राजनीति, विकास और सामाजिक परिवर्तन की मुख्य धुरी के रूप में स्थापित किया है।
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="flex items-center gap-3 p-3 rounded-xl bg-white border border-pink-100 shadow-sm">
                  <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold"><i className="fa-solid fa-leaf" /></div>
                  <div>
                    <p className="text-[11px] uppercase text-slate-500 font-bold tracking-widest">उत्थान</p>
                    <p className="text-sm font-black text-slate-800 font-hindi">महिला सशक्तिकरण</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-xl bg-white border border-pink-100 shadow-sm">
                  <div className="w-8 h-8 rounded-lg bg-amber-100 text-amber-700 flex items-center justify-center font-bold"><i className="fa-solid fa-graduation-cap" /></div>
                  <div>
                    <p className="text-[11px] uppercase text-slate-500 font-bold tracking-widest">शिक्षा</p>
                    <p className="text-sm font-black text-slate-800 font-hindi">बालिका शिक्षा</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="grid grid-cols-2 gap-4">
                <div className="overflow-hidden rounded-[1.5rem] border-2 border-pink-100 bg-white shadow-lg">
                  <Image src="/Kalpana1.jpeg" alt="महिला कार्यक्रम" width={500} height={500} className="w-full h-52 object-cover" />
                </div>
                <div className="overflow-hidden rounded-[1.5rem] border-2 border-pink-100 bg-white shadow-lg mt-8">
                  <Image src="/Kalpana2.jpeg" alt="सामाजिक कार्य" width={500} height={500} className="w-full h-52 object-cover" />
                </div>
                <div className="overflow-hidden rounded-[1.5rem] border-2 border-pink-100 bg-white shadow-lg col-span-2">
                  <Image src="/Kalpana3.jpeg" alt="BJP कार्यक्रम" width={800} height={500} className="w-full h-56 object-cover" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-block px-3 py-1 rounded-full bg-pink-100 text-pink-700 text-xs font-bold uppercase tracking-wider">
              प्रमुख क्षेत्र
            </span>
            <h2 className="mt-4 text-3xl md:text-4xl font-black text-slate-900 font-yatra">
              सेवा, विकास और नेतृत्व
            </h2>
            <div className="mt-4 w-24 h-1 bg-gradient-to-r from-pink-500 to-amber-400 mx-auto rounded-full" />
          </div>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
            {features.map((item) => (
              <article key={item.title} className="rounded-[1.75rem] border border-pink-100 bg-[#fffaf8] p-6 shadow-sm hover:shadow-xl transition-shadow card-hover-effect">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-pink-100 to-amber-50 text-3xl flex items-center justify-center shadow-sm text-pink-700">
                  <i className={`fa-solid ${item.icon}`} />
                </div>
                <h3 className="mt-5 text-xl font-black text-slate-900 font-yatra">{item.title}</h3>
                <p className="mt-3 text-sm text-slate-600 leading-relaxed">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f7f3ee] py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-block px-3 py-1 rounded-full bg-pink-100 text-pink-700 text-xs font-bold uppercase tracking-wider">
              उपलब्धियाँ
            </span>
            <h2 className="mt-4 text-3xl md:text-4xl font-black text-slate-900 font-yatra">
              सांस्कृतिक, सामाजिक और विकासात्मक योगदान
            </h2>
            <div className="mt-4 w-24 h-1 bg-gradient-to-r from-pink-500 to-amber-400 mx-auto rounded-full" />
          </div>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            <div className="rounded-[1.75rem] border border-pink-100 bg-white p-6 shadow-sm">
              <div className="text-3xl mb-3">🌸</div>
              <h3 className="text-2xl font-black text-slate-900 font-yatra">महिला सशक्तिकरण</h3>
              <p className="mt-3 text-slate-600 leading-relaxed">स्वयं सहायता समूहों के गठन और महिलाओं को आर्थिक रूप से स्वावलंबी बनाने के लिए निरंतर प्रयास।</p>
            </div>
            <div className="rounded-[1.75rem] border border-pink-100 bg-white p-6 shadow-sm">
              <div className="text-3xl mb-3">📚</div>
              <h3 className="text-2xl font-black text-slate-900 font-yatra">बालिका शिक्षा</h3>
              <p className="mt-3 text-slate-600 leading-relaxed">बेटियों की शिक्षा, सुरक्षा और स्वर्णिम भविष्य के लिए जनजागरण और सहायता कार्यक्रमों को प्रोत्साहित किया।</p>
            </div>
            <div className="rounded-[1.75rem] border border-pink-100 bg-white p-6 shadow-sm">
              <div className="text-3xl mb-3">🏥</div>
              <h3 className="text-2xl font-black text-slate-900 font-yatra">स्वास्थ्य सेवाएँ</h3>
              <p className="mt-3 text-slate-600 leading-relaxed">निःशुल्क मेडिकल शिविर, पोषण जागरूकता और ग्रामीण स्वास्थ्य सेवा को बेहतर बनाने की निरंतर पहल।</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-block px-3 py-1 rounded-full bg-pink-100 text-pink-700 text-xs font-bold uppercase tracking-wider">
              स्मृतियाँ
            </span>
            <h2 className="mt-4 text-3xl md:text-4xl font-black text-slate-900 font-yatra">
              फोटो गैलरी
            </h2>
            <div className="mt-4 w-24 h-1 bg-gradient-to-r from-pink-500 to-amber-400 mx-auto rounded-full" />
          </div>

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {gallery.map((image, index) => (
              <div key={image.src + index} className="overflow-hidden rounded-[1.5rem] border border-pink-100 bg-white shadow-sm hover:shadow-xl transition-all">
                <Image src={image.src} alt={image.title} width={800} height={600} className="w-full h-72 object-cover hover:scale-105 transition-transform duration-500" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-[2rem] bg-gradient-to-r from-[#1d1027] via-[#6f1f4b] to-[#a93c5d] text-white p-8 md:p-12 shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <span className="inline-block px-3 py-1 rounded-full bg-white/10 border border-white/15 text-xs font-bold uppercase tracking-wider text-pink-100">
                  जनता की आवाज़
                </span>
                <h3 className="mt-4 text-3xl md:text-4xl font-black font-yatra leading-tight">
                  आपकी समस्या, हमारी प्राथमिकता
                </h3>
              </div>
              <div className="flex flex-wrap gap-4 justify-start lg:justify-end">
                <Link href="/jan-sunwai" className="inline-flex items-center gap-2 bg-white text-[#1d1027] px-6 py-3 rounded-xl font-black shadow-md hover:bg-pink-50 transition-colors">
                  जनसुनवाई फ़ॉर्म भरें <i className="fa-solid fa-arrow-right" />
                </Link>
                <Link href="/about" className="inline-flex items-center gap-2 bg-[#101827] text-white px-6 py-3 rounded-xl font-bold shadow-md hover:bg-slate-900 transition-colors">
                  अधिक जानें <i className="fa-solid fa-phone" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
