'use client';
import Image from 'next/image';
import Link from 'next/link';

const priorities = [
  {
    icon: '👩‍🤝‍👩',
    title: 'महिला सशक्तिकरण',
    desc: 'महिलाओं को रोजगार, शिक्षा, आरोग्य और निर्णय लेने की क्षमता देने के लिए निरंतर प्रयास करना।',
  },
  {
    icon: '💧',
    title: 'पेयजल और स्वच्छता',
    desc: 'हर घर तक स्वच्छ जल, सुरक्षित सफाई और स्वस्थ वातावरण उपलब्ध कराने की दिशा में काम करना।',
  },
  {
    icon: '🎓',
    title: 'शिक्षा और कौशल',
    desc: 'बालिका शिक्षा, कौशल विकास और रोजगार से जुड़ी योजना को प्राथमिकता देकर भविष्य सुरक्षित बनाना।',
  },
  {
    icon: '🌾',
    title: 'कृषि और ग्रामीण विकास',
    desc: 'किसानों की आय, सिंचाई व कृषि आधारित योजनाओं को बढ़ावा देकर ग्रामीण अर्थव्यवस्था को मजबूत बनाना।',
  },
  {
    icon: '🏥',
    title: 'स्वास्थ्य और पोषण',
    desc: 'शिविर, टीकाकरण और मातृ-शिशु स्वास्थ्य सेवाओं को सुदृढ़ बनाकर जीवन गुणवत्ता बेहतर बनाना।',
  },
  {
    icon: '🤝',
    title: 'पारदर्शी प्रशासन',
    desc: 'लोकतांत्रिक मूल्यों, निष्पक्षता और जनसंवाद के साथ सर्वजन की समस्याओं का समाधान करना।',
  },
];

const roadmap = [
  { step: '01', title: 'जन-सम्पर्क', desc: 'जनता के बीच सीधे संवाद, समस्याओं को समझना और उनकी आवाज़ को प्राथमिकता देना।' },
  { step: '02', title: 'कार्य योजना', desc: 'समस्याओं के आधार पर सामुदायिक, स्वास्थ्य, शिक्षा और विकास से जुड़े कदम तय करना।' },
  { step: '03', title: 'जमीनी التنفيذ', desc: 'पारदर्शी मॉनिटरिंग और त्वरित निर्णयों के साथ योजनाओं को धरातल पर साकार करना।' },
  { step: '04', title: 'सतत विकास', desc: 'महिला उत्थान, समृद्धि और सामाजिक समरसता के साथ दशकों तक टिकाऊ परिवर्तन बनाना।' },
];

const stats = [
  { value: '15+', label: 'वर्ष सेवा' },
  { value: '200+', label: 'जनसुनवाई' },
  { value: '50K+', label: 'लाभार्थी' },
  { value: '100%', label: 'जनकेंद्रित काम' },
];

export default function VisionClient() {
  return (
    <div className="bg-[#FCFBF7] text-slate-800">
      <section className="relative hero-gradient text-white pt-20 pb-16 md:pt-24 md:pb-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none flex justify-center items-center">
          <Image src="/logo.webp" alt="Background Logo" width={650} height={650} className="w-[650px] h-[650px] rounded-full object-cover" />
        </div>
        <div className="absolute -top-20 -right-20 w-80 h-80 bg-pink-300/20 rounded-full blur-3xl" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <span className="inline-block px-3.5 py-1.5 rounded-full bg-white/15 border border-white/25 text-xs font-bold uppercase tracking-wider text-pink-100">
              जीवन दर्शन
            </span>
            <h1 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-black font-yatra leading-tight">
              सेवा, विकास और विश्वास
            </h1>
            <p className="mt-4 text-lg md:text-xl text-pink-50 max-w-2xl">
              कौशाम्बी की महिलाओं, युवाओं और परिवारों के कल्याण को सर्वोच्च प्राथमिकता देते हुए एक सशक्त, समृद्ध और समावेशी विकास की नींव रखना।
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/about" className="inline-flex items-center gap-2 bg-white text-[#0B1D3A] px-6 py-3 rounded-xl font-bold shadow-md hover:bg-pink-50 transition-colors">
                परिचय पढ़ें <i className="fa-solid fa-arrow-right text-xs" />
              </Link>
              <Link href="/jan-sunwai" className="inline-flex items-center gap-2 bg-emerald-600 text-white px-6 py-3 rounded-xl font-bold shadow-md hover:bg-emerald-700 transition-colors">
                जनसुनवाई में भाग लें <i className="fa-solid fa-comments" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7">
              <span className="inline-block px-3 py-1 rounded-full bg-pink-100 text-pink-700 text-xs font-bold uppercase tracking-wider">
                राजनीतिक दृष्टि
              </span>
              <h2 className="mt-4 text-3xl md:text-4xl font-black text-slate-900 font-yatra leading-tight">
                कौशाम्बी को हर मोर्चे पर मजबूत बनाना
              </h2>
              <div className="mt-4 w-20 h-1 bg-gradient-to-r from-pink-600 to-rose-400 rounded-full" />
              <p className="mt-6 text-lg text-slate-700 leading-relaxed">
                कल्पना सोनकर जी का मानना है कि विकास तभी सार्थक है जब हर व्यक्ति के जीवन में शिक्षा, सम्मान, सुरक्षा और अवसर का संतुलन हो। उन्होंने सामाजिक न्याय, महिला सशक्तिकरण और जनकल्याण को अपनी राजनीति का आधार बनाया है।
              </p>
              <p className="mt-4 text-lg text-slate-700 leading-relaxed">
                उनका लक्ष्य एक ऐसा कौशाम्बी बनाना है जहाँ पंचायतों, ग्रामीणों, युवाओं और महिलाओं के लिए समान अवसर, अवसरों की पहुँच और पारदर्शी प्रशासन सुनिश्चित हो।
              </p>
            </div>

            <div className="lg:col-span-5">
              <div className="glass-card rounded-3xl border-2 border-white shadow-xl p-6 md:p-8 bg-white/90">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-black text-slate-900 font-yatra">मिशन</h3>
                  <span className="w-12 h-12 rounded-full bg-pink-100 text-pink-700 flex items-center justify-center text-xl">
                    <i className="fa-solid fa-bullseye" />
                  </span>
                </div>
                <ul className="space-y-4 text-slate-700">
                  <li className="flex items-start gap-3"><span className="mt-1 text-pink-600"><i className="fa-solid fa-check-circle" /></span><span>हर परिवार तक विकास योजनाओं की सुगम पहुँच</span></li>
                  <li className="flex items-start gap-3"><span className="mt-1 text-pink-600"><i className="fa-solid fa-check-circle" /></span><span>महिलाओं, युवाओं और किसानों के लिए अवसरों का विस्तार</span></li>
                  <li className="flex items-start gap-3"><span className="mt-1 text-pink-600"><i className="fa-solid fa-check-circle" /></span><span>शिक्षा, स्वास्थ्य, स्वच्छता और जल की समृद्धि</span></li>
                  <li className="flex items-start gap-3"><span className="mt-1 text-pink-600"><i className="fa-solid fa-check-circle" /></span><span>लोकतांत्रिक पारदर्शिता और त्वरित प्रशासनिक समाधान</span></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-block px-3 py-1 rounded-full bg-pink-100 text-pink-700 text-xs font-bold uppercase tracking-wider">
              मुख्य प्राथमिकताएँ
            </span>
            <h2 className="mt-4 text-3xl md:text-4xl font-black text-slate-900 font-yatra">प्रति क्षेत्र के लिए लीक से हटकर कार्य</h2>
            <div className="mt-4 w-24 h-1 bg-gradient-to-r from-pink-600 to-rose-400 mx-auto rounded-full" />
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {priorities.map((item) => (
              <article key={item.title} className="group rounded-3xl border border-pink-100 bg-[#fffaf8] p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-pink-100 to-rose-50 text-2xl flex items-center justify-center shadow-sm mb-5">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-black text-slate-900 font-yatra mb-3">{item.title}</h3>
                <p className="text-base text-slate-600 leading-relaxed">{item.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-[#0B1D3A] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-block px-3 py-1 rounded-full bg-white/10 text-pink-200 text-xs font-bold uppercase tracking-wider">
              नतीजे और प्रभाव
            </span>
            <h2 className="mt-4 text-3xl md:text-4xl font-black font-yatra">स्थानीय विकास की दिशा</h2>
          </div>
          <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat) => (
              <div key={stat.label} className="rounded-2xl bg-white/5 border border-white/10 p-6 text-center">
                <div className="text-3xl md:text-4xl font-black text-pink-300">{stat.value}</div>
                <div className="mt-2 text-sm font-semibold text-slate-200">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-block px-3 py-1 rounded-full bg-pink-100 text-pink-700 text-xs font-bold uppercase tracking-wider">
              कार्य पद्धति
            </span>
            <h2 className="mt-4 text-3xl md:text-4xl font-black font-yatra text-slate-900">परियोजनाओं का निरंतर और टिकाऊ रास्ता</h2>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
            {roadmap.map((item) => (
              <div key={item.step} className="relative rounded-3xl border border-pink-100 bg-white p-6 shadow-sm">
                <div className="absolute -top-3 left-6 inline-flex items-center justify-center w-12 h-12 rounded-full bg-pink-600 text-white font-black shadow-md">
                  {item.step}
                </div>
                <h3 className="mt-10 text-xl font-black text-slate-900 font-yatra">{item.title}</h3>
                <p className="mt-3 text-slate-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-[2rem] bg-gradient-to-r from-pink-600 via-rose-500 to-pink-500 text-white p-8 md:p-12 shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <span className="inline-block px-3 py-1 rounded-full bg-white/10 border border-white/20 text-xs font-bold uppercase tracking-wider text-pink-100">
                  आपके लिए संकल्प
                </span>
                <h3 className="mt-4 text-3xl md:text-4xl font-black font-yatra leading-tight">जनता की सेवा हर समय, हर जगह</h3>
              </div>
              <div className="flex flex-wrap gap-4 justify-start lg:justify-end">
                <Link href="/contact" className="inline-flex items-center gap-2 bg-white text-[#0B1D3A] px-6 py-3 rounded-xl font-bold shadow-md hover:bg-slate-100 transition-colors">
                  संपर्क करें <i className="fa-solid fa-phone" />
                </Link>
                <Link href="/jan-sunwai" className="inline-flex items-center gap-2 bg-[#0B1D3A] text-white px-6 py-3 rounded-xl font-bold shadow-md hover:bg-slate-900 transition-colors">
                  जनसुनवाई <i className="fa-solid fa-arrow-right" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
