'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useReveal } from '@/hooks/useReveal';

const profileDetails = [
  { label: 'नाम', value: 'कल्पना सोनकर', sub: 'अध्यक्ष, जिला पंचायत कौशाम्बी', icon: 'fa-user' },
  { label: 'पति का नाम', value: 'श्री जितेन्द्र कुमार सोनकर', sub: 'पूर्व ब्लाक प्रमुख, सिराथू कौशाम्बी', icon: 'fa-user-tie' },
  { label: 'जन्मतिथि', value: '15 अक्टूबर 1994', icon: 'fa-calendar-days' },
  { label: 'शैक्षिक योग्यता', value: 'एम.ए. (राजनीति शास्त्र), डी.एल.एड.', icon: 'fa-graduation-cap' },
  { label: 'जाति / वर्ग', value: 'खटीक (सोनकर), अनुसूचित जाति', icon: 'fa-users' },
  { label: 'वर्तमान पता', value: 'वार्ड नं. 10, अशोक नगर, ओसा चौराहा, नगर पालिका परिषद, मंझनपुर, कौशाम्बी', icon: 'fa-location-dot' },
  { label: 'बूथ संख्या', value: '35 (दुर्गादेवी इण्टर कॉलेज, ओसा चौराहा)', icon: 'fa-box-archive' },
  { label: 'विधान सभा क्षेत्र', value: '252 मंझनपुर (सुरक्षित)', icon: 'fa-landmark' },
  { label: 'लोक सभा क्षेत्र', value: '50 कौशाम्बी (सुरक्षित)', icon: 'fa-building-columns' },
  { label: 'मोबाइल नं.', value: '+91 82992 23340', icon: 'fa-phone' },
  { label: 'ईमेल', value: 'kalpanajitendrasonkarbjp@gmail.com', icon: 'fa-envelope' },
];

const timeline = [
  {
    year: '2010',
    tag: 'अ.भा.वि.प. (ABVP)',
    title: 'संगठनात्मक जीवन का प्रारंभ',
    desc: 'अखिल भारतीय विद्यार्थी परिषद (ABVP) के कार्यकर्ता के रूप में छात्र राजनीति एवं सामाजिक सेवा की यात्रा शुरू की।'
  },
  {
    year: '2013-14',
    tag: 'ABVP नेतृत्व',
    title: 'तहसील छात्रा प्रमुख',
    desc: 'अ.भा.वि.प. में तहसील छात्रा प्रमुख के दायित्व का सफलता पूर्वक निर्वहन किया तथा छात्रा शक्ति को संगठित किया।'
  },
  {
    year: '2014',
    tag: 'लोकसभा चुनाव',
    title: 'भाजपा सदस्यता एवं चुनावी अभियान',
    desc: 'लोकसभा चुनाव 2014 में संगठन द्वारा सौंपी गई जिम्मेदारियों का निर्वहन किया और भाजपा की प्राथमिक सदस्यता ग्रहण की।'
  },
  {
    year: '2016',
    tag: 'महिला मोर्चा',
    title: 'जिला मंत्री, भाजपा महिला मोर्चा',
    desc: 'भाजपा महिला मोर्चा कौशाम्बी की जिला मंत्री का दायित्व संभाला। परिवर्तन यात्रा के दौरान महिला टोली का नेतृत्व और महिला सम्मेलनों का सफल आयोजन किया।'
  },
  {
    year: '2017',
    tag: 'विधानसभा चुनाव',
    title: 'सम्पर्क अभियान प्रमुख',
    desc: '252 मंझनपुर विधानसभा चुनाव में महिला टोली का नेतृत्व किया तथा सम्पर्क अभियान प्रमुख के रूप में दायित्व निभाया। पंडित दीनदयाल उपाध्याय जन्म शताब्दी वर्ष में महिला मोर्चा की जिला संयोजक बनीं।'
  },
  {
    year: '2018',
    tag: 'संगठन विस्तार',
    title: 'जिला उपाध्यक्ष, भाजपा महिला मोर्चा',
    desc: 'भाजपा महिला मोर्चा कौशाम्बी की जिला उपाध्यक्ष (District Vice President) के रूप में जिले की महिलाओं के उत्थान हेतु कार्य किया।'
  },
  {
    year: '2019',
    tag: 'जन जागरूकता',
    title: 'सी.ए.ए. (CAA) अभियान प्रभारी',
    desc: 'कौशाम्बी मंडल में सी.ए.ए. (CAA) जन जागरूकता अभियान की मंडल प्रभारी के रूप में भूमिका निभाई।'
  },
  {
    year: '2021',
    tag: 'ऐतिहासिक विजय',
    title: 'सर्वसम्मति / निर्विरोध अध्यक्ष जिला पंचायत',
    desc: 'वार्ड नं. 14 से जिला पंचायत सदस्य निर्वाचित होने के उपरांत प्रदेश नेतृत्व के निर्देश पर भाजपा प्रत्याशी के रूप में सर्वसम्मति / निर्विरोध (Unopposed) अध्यक्ष, जिला पंचायत कौशाम्बी के पद पर ऐतिहासिक विजय प्राप्त की।'
  },
  {
    year: '2023',
    tag: 'निकाय चुनाव',
    title: 'नगरीय निकाय चुनाव प्रबंधन',
    desc: 'नगरीय निकाय चुनावों में पार्टी प्रत्याशियों को आर्थिक व चुनावी संसाधनों से पूर्ण सहयोग देकर पार्टी समर्थित अध्यक्ष एवं वार्ड सदस्यों की जीत में महत्वपूर्ण भूमिका निभाई।'
  },
  {
    year: '2024-25',
    tag: 'ऐतिहासिक कीर्तिमान',
    title: '15,836+ ऑनलाइन सदस्य बनाकर जिले में प्रथम स्थान',
    desc: 'भाजपा के सदस्यता अभियान 2024-25 में कौशाम्बी जिले में सर्वाधिक 15,836 ऑनलाइन सदस्य बनाकर ऐतिहासिक कीर्तिमान स्थापित किया, जिसके लिए पार्टी शीर्ष नेतृत्व द्वारा सम्मानित किया गया।'
  }
];

const roles = [
  { icon: '🌸', title: 'जिला पंचायत अध्यक्ष', org: 'कौशाम्बी जिला', desc: 'जिले में त्रिस्तरीय पंचायती राज का नेतृत्व एवं 411+ विकास व निर्माण कार्यों का सफल क्रियान्वयन।' },
  { icon: '👑', title: 'पूर्व जिला उपाध्यक्ष', org: 'BJP महिला मोर्चा कौशाम्बी', desc: 'कौशाम्बी की महिलाओं को आत्मनिर्भर बनाने और महिला शक्ति के सशक्तिकरण का काम।' },
  { icon: '📋', title: 'सदस्यता अभियान रिकॉर्ड', org: 'भाजपा कौशाम्बी', desc: 'जिले में सर्वाधिक 15,836 ऑनलाइन सदस्य बनाकर पार्टी विस्तार में ऐतिहासिक योगदान।' },
  { icon: '🏥', title: 'स्वास्थ्य एवं महिला कल्याण', org: 'जिला पंचायत कौशाम्बी', desc: 'निःशुल्क चिकित्सा शिविरों, मातृ-शिशु स्वास्थ्य और पोषण कार्यक्रमों का संचालन।' },
  { icon: '💧', title: 'स्वच्छ जल एवं पर्यावरण', org: 'जल जीवन मिशन', desc: 'ग्रामीण क्षेत्रों में शुद्ध पेयजल आपूर्ति एवं जल संरक्षण योजनाओं का विकास।' },
  { icon: '🎓', title: 'बालिका शिक्षा प्रोत्साहन', org: 'बेटी बचाओ, बेटी पढ़ाओ', desc: 'मेधावी छात्राओं के सम्मान, बाल विवाह निषेध एवं बालिका शिक्षा के लिए निरंतर प्रयास।' },
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
    <div className="bg-[#FCFBF7] text-slate-800 font-hindi">
      {/* PAGE HERO */}
      <section className="relative hero-gradient text-white pt-20 pb-16 md:pt-24 md:pb-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-block px-3.5 py-1.5 rounded-full bg-white/15 border border-white/25 text-xs font-bold uppercase tracking-wider text-pink-100 mb-3">
              विस्तृत जीवन वृत्त / Bio Data
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black font-yatra leading-tight drop-shadow-md">
              कल्पना सोनकर — जीवन परिचय
            </h1>
            <p className="mt-4 text-lg md:text-xl text-pink-50 max-w-2xl mx-auto leading-relaxed">
              अध्यक्ष जिला पंचायत कौशाम्बी | नारी शक्ति, जनसेवा, संगठन निष्ठा और सर्वांगीण ग्रामीण विकास को समर्पित जीवन यात्रा।
            </p>
          </div>
        </div>
      </section>

      {/* BIO SECTION & PROFILE CARD */}
      <section className="py-12 md:py-16 -mt-8 relative z-20" aria-label="जीवन परिचय">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl shadow-2xl border border-pink-100 p-6 sm:p-10">
            <div className="flex flex-col md:flex-row items-center gap-8 pb-8 border-b border-pink-100">
              <div className="relative w-40 h-48 sm:w-48 sm:h-56 rounded-2xl overflow-hidden border-4 border-pink-600 shadow-lg flex-shrink-0">
                <Image src="/Kalpana.jpeg" alt="कल्पना सोनकर" fill className="object-cover object-top" />
              </div>
              <div className="text-center md:text-left space-y-2">
                <span className="px-3 py-1 bg-pink-100 text-pink-700 text-xs font-bold rounded-full uppercase border border-pink-200">
                  संक्षिप्त बायोडाटा
                </span>
                <h2 className="text-3xl sm:text-4xl font-black text-slate-900 font-yatra">
                  कल्पना सोनकर
                </h2>
                <p className="text-base text-pink-700 font-bold">
                  अध्यक्ष जिला पंचायत कौशाम्बी | एम.ए. (राजनीति शास्त्र), डी.एल.एड.
                </p>
                <p className="text-slate-600 text-sm max-w-2xl leading-relaxed">
                  "लक्ष्य अंत्योदय, प्रण अंत्योदय, पथ अंत्योदय। समाज के अंतिम व्यक्ति तक विकास का लाभ पहुँचाना और कौशाम्बी को आदर्श जिला बनाना ही मेरा संकल्प है।"
                </p>
              </div>
            </div>

            {/* Profile Grid */}
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {profileDetails.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3.5 p-4 rounded-2xl bg-[#FFFBF8] border border-pink-100/80 hover:border-pink-300 transition-colors">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-pink-600 to-rose-500 text-white flex items-center justify-center flex-shrink-0 shadow-sm text-sm">
                    <i className={`fa-solid ${item.icon}`}></i>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">{item.label}</p>
                    <p className="text-sm font-black text-slate-800 mt-0.5">{item.value}</p>
                    {item.sub && <p className="text-xs text-pink-600 font-semibold mt-0.5">{item.sub}</p>}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* COMPLETE POLITICAL TIMELINE SECTION */}
      <section className="py-16 md:py-20 bg-gradient-to-b from-white via-[#FCFBF7] to-pink-50/30" aria-label="राजनीतिक यात्रा">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-4 py-1 rounded-full bg-pink-100 text-pink-700 text-xs font-bold uppercase tracking-wider border border-pink-200">
              संगठनात्मक एवं प्रशासनिक यात्रा
            </span>
            <h2 className="mt-3 text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 font-yatra">
              संगठन में योगदान (2010 से अब तक)
            </h2>
            <div className="mt-4 w-24 h-1 bg-gradient-to-r from-pink-600 to-rose-400 mx-auto rounded-full"></div>
            <p className="text-slate-600 text-sm sm:text-base mt-3">
              ABVP छात्र राजनीति से प्रारंभ होकर जिला पंचायत अध्यक्ष के गरिमामयी पद तक का 15 वर्षों का गौरवशाली सफर।
            </p>
          </div>

          <div className="relative border-l-4 border-pink-300 ml-4 md:ml-32 space-y-10">
            {timeline.map((item, idx) => (
              <div key={idx} className="relative pl-6 md:pl-10 group">
                <div className="absolute -left-[1.35rem] md:-left-[2.1rem] top-1 w-10 h-10 rounded-full bg-pink-600 text-white font-black text-xs flex items-center justify-center border-4 border-white shadow-md group-hover:scale-110 transition-transform">
                  {item.year.split('-')[0].slice(2)}
                </div>

                <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-md border border-pink-100 hover:shadow-xl transition-all hover:border-pink-300">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                    <span className="px-3.5 py-1 rounded-full bg-pink-600 text-white text-xs font-black shadow-sm">
                      वर्ष {item.year} — {item.tag}
                    </span>
                    <span className="text-xs font-bold text-pink-700">
                      <i className="fa-solid fa-star mr-1"></i> भाजपा कौशाम्बी
                    </span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-black text-slate-900 font-yatra leading-snug">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm sm:text-base text-slate-700 leading-relaxed font-hindi">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LEADERSHIP ROLES */}
      <section className="py-16 md:py-20 bg-white" aria-label="नेतृत्व भूमिकाएँ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <span className="inline-block px-3.5 py-1.5 rounded-full bg-pink-100 border border-pink-200 text-pink-700 text-xs font-bold uppercase tracking-wider">
              दायित्व एवं भूमिकाएँ
            </span>
            <h2 className="mt-4 text-3xl md:text-4xl md:text-5xl font-black text-slate-900 font-yatra leading-tight">
              नेतृत्व के प्रमुख क्षेत्र
            </h2>
            <p className="mt-4 text-base sm:text-lg text-slate-600">
              महिला सशक्तिकरण, पंचायती राज एवं जनकल्याणकारी नीतियों का सफल संचालन।
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {roles.map((r, i) => (
              <div key={i} className="rounded-3xl border border-pink-100 bg-[#fffaf8] p-6 shadow-sm hover:shadow-lg transition-all">
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
      <section className="py-16 md:py-20 bg-[#FCFBF7]" aria-label="फोटो गैलरी">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <span className="inline-block px-3.5 py-1.5 rounded-full bg-pink-100 border border-pink-200 text-pink-700 text-xs font-bold uppercase tracking-wider">
              स्मृतियाँ
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 font-yatra leading-tight">
              झलकियाँ और कार्य स्मृतियाँ
            </h2>
            <p className="mt-4 text-base sm:text-lg text-slate-600">
              जनता के बीच कार्यक्रमों, सम्मेलनों और विकास कार्यों का सचित्र विवरण।
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
            "अतएव आप की सेवा में संक्षिप्त कार्य विवरण/बायोडाटा सादर प्रेषित है, पार्टी जो भी दायित्व सौंपेगी उसका पूर्ण निष्ठा एवं समर्पण के साथ निर्वहन करूंगी।"
          </p>
          <footer className="text-lg font-bold text-pink-100 pt-2">— कल्पना सोनकर (अध्यक्ष, जिला पंचायत कौशाम्बी)</footer>

          <div className="mt-8 flex justify-center gap-4 pt-4">
            <Link href="/jan-sunwai" className="px-6 py-3 rounded-xl bg-white text-pink-700 font-bold text-sm hover:bg-pink-50 transition-colors shadow-lg">
              जनसुनवाई पोर्टल पर समस्या दर्ज करें
            </Link>
            <Link href="/achievements" className="px-6 py-3 rounded-xl bg-black/25 text-white font-bold text-sm border border-white/20 hover:bg-black/40 transition-colors">
              प्रमुख विकास कार्य देखें
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
