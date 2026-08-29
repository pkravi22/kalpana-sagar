'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useReveal } from '@/hooks/useReveal';

const profileDetails = [
  { label: 'नाम', value: 'कल्पना सोनकर', sub: 'अध्यक्ष, जिला पंचायत कौशाम्बी' },
  { label: 'पति का नाम', value: 'श्री जितेन्द्र कुमार सोनकर', sub: 'पुत्र ब्लॉक प्रमुख, सिराथू, कौशाम्बी' },
  { label: 'जन्मतिथि', value: '15 अक्टूबर 1994' },
  { label: 'वर्तमान पता', value: 'वार्ड नं. 10, अशोक नगर, ओसा चौहा, नगर पालिका परिषद, मझनपुर, कौशाम्बी' },
  { label: 'बूथ संख्या', value: '35 (दुग्गांधी इंटर कॉलेज, ओसा चौहा)' },
  { label: 'विधान सभा क्षेत्र', value: '252 मझनपुर (सुरक्षित)' },
  { label: 'लोक सभा क्षेत्र', value: '50 कौशाम्बी (सुरक्षित)' },
  { label: 'शैक्षिक योग्यता', value: 'एम.ए. (राजनीति शास्त्र), डी.एल.एड.' },
  { label: 'मोबाइल नं.', value: '+91 82992 23340' },
  { label: 'जाति / वर्ग', value: 'क्षत्रिय (सोनकर), अनुसूचित जाति' },
];

const timeline = [
  { year: '2015', title: 'BJP में सक्रियता', desc: 'भारतीय जनता पार्टी की महिला मोर्चा में सक्रिय भागीदारी की शुरुआत।' },
  { year: '2018', title: 'महिला मोर्चा जिला सचिव', desc: 'BJP महिला मोर्चा, जिला कौशाम्बी की महासचिव पद पर नियुक्ति।' },
  { year: '2020', title: 'महिला मोर्चा जिला अध्यक्ष', desc: 'भाजपा महिला मोर्चा, कौशाम्बी की जिला अध्यक्ष बनीं।' },
  { year: '2022', title: 'जिला पंचायत सदस्य', desc: 'जिला पंचायत सदस्य के रूप में निर्वाचित और सामाजिक कार्यों में वृद्धि।' },
  { year: '2023', title: 'जिला पंचायत अध्यक्ष', desc: 'जिला पंचायत अध्यक्ष, कौशाम्बी के ऐतिहासिक पद पर आसीन।' },
];

const roles = [
  { icon: '🌸', title: 'जिला पंचायत अध्यक्ष', org: 'कौशाम्बी जिला', desc: 'जिला पंचायत का नेतृत्व और विकास योजनाओं का क्रियान्वयन।' },
  { icon: '👑', title: 'महिला मोर्चा अध्यक्ष', org: 'BJP कौशाम्बी', desc: 'महिला सशक्तिकरण के लिए जमीनी स्तर पर काम।' },
  { icon: '📋', title: 'वित्त एवं विकास समिति', org: 'जिला पंचायत', desc: 'जिले की विकास परियोजनाओं में वित्तीय निगरानी।' },
  { icon: '🏥', title: 'स्वास्थ्य एवं शिक्षा समिति', org: 'जिला पंचायत', desc: 'महिला और बाल स्वास्थ्य पर विशेष ध्यान।' },
  { icon: '💧', title: 'जल एवं स्वच्छता समिति', org: 'जिला पंचायत', desc: 'ग्रामीण क्षेत्रों में स्वच्छ पेयजल की उपलब्धता।' },
  { icon: '🎓', title: 'शिक्षा प्रसार', org: 'बेटी बचाओ अभियान', desc: 'बालिका शिक्षा और बाल विवाह रोकने की दिशा में काम।' },
];

const galleryImages = [
  { src: '/Kalpana.jpeg', alt: 'कल्पना सोनकर – जनसभा' },
  { src: '/Kalpana1.jpeg', alt: 'कल्पना सोनकर – महिला कार्यक्रम' },
  { src: '/Kalpana2.jpeg', alt: 'कल्पना सोनकर – सामाजिक सेवा' },
  { src: '/Kalpana3.jpeg', alt: 'कल्पना सोनकर – BJP कार्यक्रम' },
  { src: '/DSC_0783.JPG.webp', alt: 'जनसंपर्क अभियान' },
  { src: '/DSC_0784.JPG.webp', alt: 'ग्रामीण विकास चौपाल' },
  { src: '/DSC_1042.JPG.webp', alt: 'महिला सशक्तिकरण गोष्ठी' },
  { src: '/DSC_1703.JPG.webp', alt: 'विकास कार्यों का निरीक्षण' },
  { src: '/DSC_1712.JPG.webp', alt: 'पार्टी कार्यकर्ताओं संग बैठक' },
];

export default function AboutClient() {
  useReveal();

  return (
    <div className="bg-[#FCFBF7] text-slate-800">
      {/* PAGE HERO */}
      <section className="relative hero-gradient text-white pt-20 pb-16 md:pt-24 md:pb-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-block px-3.5 py-1.5 rounded-full bg-white/15 border border-white/25 text-xs font-bold uppercase tracking-wider text-pink-100">
              जीवन परिचय
            </span>
            <h1 className="mt-4 text-4xl md:text-5xl font-black font-yatra leading-tight">
              कल्पना सोनकर – परिचय एवं जीवन यात्रा
            </h1>
            <p className="mt-4 text-lg text-pink-50 max-w-2xl mx-auto">
              कौशाम्बी जिला पंचायत अध्यक्ष के रूप में जनसेवा, महिला सशक्तिकरण और समर्पित विकास यात्रा।
            </p>
          </div>
        </div>
      </section>

      {/* BIO SECTION */}
      <section className="py-16 md:py-20" aria-label="जीवन परिचय">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <span className="inline-block px-3.5 py-1.5 rounded-full bg-pink-100 border border-pink-200 text-pink-700 text-xs font-bold uppercase tracking-wider">
              व्यक्तिगत परिचय
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 font-yatra leading-tight">
              महिला नेतृत्व की प्रेरणादायक कहानी
            </h2>
            <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
              संघर्ष से सफलता तक की यात्रा, समाज सेवा और कौशाम्बी के सर्वांगीण विकास का अटूट संकल्प।
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Bio Narrative & Profile Table */}
            <div className="lg:col-span-7 space-y-6">
              <div className="rounded-3xl border border-pink-100 bg-white p-6 sm:p-8 shadow-sm space-y-4">
                <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
                  कल्पना सोनकर जी का जन्म कौशाम्बी जिले में एक साधारण परिवार में हुआ। उनका जीवन स्वयं एक संघर्ष से सफलता की प्रेरणादायक कहानी है। बचपन से ही उनमें सामाजिक न्याय और महिला सशक्तिकरण की गहरी चाह थी।
                </p>
                <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
                  भारतीय जनता पार्टी की महिला मोर्चा से जुड़ने के बाद उन्होंने कौशाम्बी की महिलाओं को संगठित किया और उनके अधिकारों के लिए अथक परिश्रम किया। उनकी लोकप्रियता और कार्यक्षमता ने उन्हें जिला पंचायत अध्यक्ष के पद तक पहुँचाया।
                </p>
                <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
                  अनुसूचित जाति वर्ग से आने के बावजूद उन्होंने समाज की सभी महिलाओं के उत्थान के लिए काम किया। उनके नेतृत्व में जिले में महिला स्वयं सहायता समूहों का विस्तार हुआ और हजारों महिलाएँ आर्थिक रूप से स्वावलंबी बनीं।
                </p>
              </div>

              {/* Profile Details Card */}
              <div className="rounded-3xl border border-pink-100 bg-white p-6 sm:p-8 shadow-sm">
                <h3 className="text-2xl font-black text-slate-900 font-yatra mb-6 border-b border-pink-100 pb-3">
                  प्रमुख विवरण
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {profileDetails.map((item, idx) => (
                    <div key={idx} className="bg-[#fffaf8] border border-pink-100/80 rounded-2xl p-4">
                      <span className="text-xs font-bold uppercase tracking-wider text-pink-600 block mb-1">
                        {item.label}
                      </span>
                      <p className="text-sm sm:text-base font-bold text-slate-800 leading-snug">
                        {item.value}
                      </p>
                      {item.sub && (
                        <p className="text-xs text-slate-500 mt-0.5">{item.sub}</p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Photo & Quick Actions */}
            <div className="lg:col-span-5 space-y-6">
              <div className="rounded-3xl border border-pink-100 bg-white p-4 shadow-sm overflow-hidden text-center">
                <div className="relative aspect-[3/4] w-full overflow-hidden rounded-2xl">
                  <Image
                    src="/Kalpana.jpeg"
                    alt="कल्पना सोनकर"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="mt-4 p-2">
                  <h3 className="text-2xl font-black text-slate-900 font-yatra">कल्पना सोनकर</h3>
                  <p className="text-sm font-semibold text-slate-600 mt-1">अध्यक्ष जिला पंचायत, कौशाम्बी</p>
                  <div className="mt-3 flex justify-center gap-2">
                    <span className="px-3 py-1 bg-pink-100 text-pink-700 text-xs font-bold rounded-full border border-pink-200">BJP</span>
                    <span className="px-3 py-1 bg-amber-100 text-amber-800 text-xs font-bold rounded-full border border-amber-200">कौशाम्बी</span>
                  </div>
                </div>
              </div>

              <div className="rounded-3xl bg-gradient-to-r from-pink-600 to-rose-700 text-white p-6 shadow-lg flex flex-col gap-3">
                <h4 className="text-xl font-black font-yatra">त्वरित संपर्क एवं जानकारी</h4>
                <p className="text-xs sm:text-sm text-pink-100 leading-relaxed">
                  उपलब्धियों के बारे में विस्तार से जानें या जनसुनवाई पोर्टल के माध्यम से अपनी समस्या साझा करें।
                </p>
                <div className="flex flex-wrap gap-3 mt-2">
                  <Link href="/achievements" className="px-4 py-2.5 rounded-xl bg-white text-pink-700 font-bold text-xs sm:text-sm hover:bg-pink-50 transition-colors shadow-md">
                    उपलब्धियाँ देखें →
                  </Link>
                  <Link href="/jan-sunwai" className="px-4 py-2.5 rounded-xl bg-black/25 text-white font-bold text-xs sm:text-sm hover:bg-black/40 transition-colors border border-white/20">
                    जनसुनवाई में भाग लें
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="py-16 md:py-20 bg-white" aria-label="राजनीतिक यात्रा">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <span className="inline-block px-3.5 py-1.5 rounded-full bg-pink-100 border border-pink-200 text-pink-700 text-xs font-bold uppercase tracking-wider">
              राजनीतिक यात्रा
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 font-yatra leading-tight">
              संकल्प से सिद्धि तक
            </h2>
            <p className="mt-4 text-base sm:text-lg text-slate-600">
              वर्ष दर वर्ष जनसेवा और संगठन में दिए गए महत्वपूर्ण योगदान की समयरेखा।
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {timeline.map((item, i) => (
              <div key={i} className="rounded-3xl border border-pink-100 bg-[#fffaf8] p-6 shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
                <div>
                  <span className="inline-block px-3 py-1 rounded-full bg-pink-600 text-white text-xs font-black">
                    {item.year}
                  </span>
                  <h3 className="mt-4 text-xl font-black text-slate-900 font-yatra">{item.title}</h3>
                  <p className="mt-2 text-sm text-slate-600 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LEADERSHIP ROLES */}
      <section className="py-16 md:py-20" aria-label="नेतृत्व भूमिकाएँ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <span className="inline-block px-3.5 py-1.5 rounded-full bg-pink-100 border border-pink-200 text-pink-700 text-xs font-bold uppercase tracking-wider">
              दायित्व एवं भूमिकाएँ
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 font-yatra leading-tight">
              नेतृत्व के प्रमुख क्षेत्र
            </h2>
            <p className="mt-4 text-base sm:text-lg text-slate-600">
              विभिन्न समितियों और सामाजिक अभियानों के माध्यम से विकास का संचालन।
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {roles.map((r, i) => (
              <div key={i} className="rounded-3xl border border-pink-100 bg-white p-6 shadow-sm hover:shadow-lg transition-all">
                <span className="text-3xl block mb-3">{r.icon}</span>
                <h3 className="text-xl font-black text-slate-900 font-yatra">{r.title}</h3>
                <p className="text-xs font-bold uppercase tracking-wider text-pink-600 mt-1">{r.org}</p>
                <p className="mt-3 text-sm text-slate-600 leading-relaxed">{r.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY PREVIEW */}
      <section className="py-16 md:py-20 bg-white" aria-label="फोटो गैलरी">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <span className="inline-block px-3.5 py-1.5 rounded-full bg-pink-100 border border-pink-200 text-pink-700 text-xs font-bold uppercase tracking-wider">
              स्मृतियाँ
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 font-yatra leading-tight">
              झलकियाँ और स्मृतियाँ
            </h2>
            <p className="mt-4 text-base sm:text-lg text-slate-600">
              जनता के बीच कार्यक्रमों, सम्मेलनों और विकास कार्यों की तस्वीरें।
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((img, i) => (
              <div key={i} className="group overflow-hidden rounded-3xl border border-pink-100 bg-white shadow-sm hover:shadow-xl transition-all">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image src={img.src} alt={img.alt} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-4 text-center">
                  <h4 className="text-base font-bold text-slate-800 font-yatra">{img.alt}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* QUOTE SECTION */}
      <section className="py-16 md:py-20 bg-gradient-to-r from-pink-600 to-rose-700 text-white" aria-label="प्रेरणादायक उद्धरण">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="text-5xl opacity-50 block font-serif">“</span>
          <p className="text-2xl sm:text-3xl md:text-4xl font-black font-yatra leading-snug">
            एक महिला जब जागती है, तो पूरा परिवार जागता है। जब परिवार जागता है, तो समाज बदलता है और देश आगे बढ़ता है।
          </p>
          <footer className="text-lg font-bold text-pink-100 pt-2">— कल्पना सोनकर</footer>
        </div>
      </section>
    </div>
  );
}
