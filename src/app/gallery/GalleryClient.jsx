'use client';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const images = [
  { type: 'sangathan', src: '/Kalpana.jpeg', title: 'जनसभा', desc: 'कौशाम्बी की जनता के बीच जनसंपर्क और विश्वास का अनुभव।' },
  { type: 'vikas', src: '/Kalpana1.jpeg', title: 'महिला कार्यक्रम', desc: 'महिला सशक्तिकरण और सामाजिक न्याय की दिशा में समर्पित प्रयास।' },
  { type: 'janseva', src: '/Kalpana2.jpeg', title: 'जनसेवा', desc: 'दूरदराज क्षेत्रों में सेवा, सहायता और सहयोग का भाव।' },
  { type: 'sangathan', src: '/Kalpana3.jpeg', title: 'BJP कार्यक्रम', desc: 'संगठन, विचार और कार्य की एकजुटता का प्रेरक दृश्य।' },
  { type: 'janseva', src: '/DSC_1042.JPG.webp', title: 'महिला सशक्तिकरण गोष्ठी', desc: 'महिलाओं के लिए नेतृत्व, मानसिकता और अवसरों का विस्तार।' },
  { type: 'vikas', src: '/DSC_1703.JPG.webp', title: 'विकास कार्य निरीक्षण', desc: 'बुनियादी सुविधाओं और जन कल्याण के लिए सतत प्रयास।' },
  { type: 'janseva', src: '/DSC_2148 - Copy - Copy.JPG.webp', title: 'विद्यालय पुरस्कार वितरण', desc: 'बेटी बचाओ, बेटी पढ़ाओ और शिक्षा के प्रति संकल्प।' },
  { type: 'janseva', src: '/DSC_2830.JPG.webp', title: 'आवास योजना वितरण', desc: 'सामाजिक सुरक्षा और जीवन की गुणवत्ता में सुधार।' },
  { type: 'sangathan', src: '/DSC_3278.JPG.webp', title: 'नारी शक्ति वंदन', desc: 'महिलाओं की क्षमता, सम्मान और समर्थन का संदेश।' },
  { type: 'vikas', src: '/DSC_1042.JPG.webp', title: 'ग्रामीण विकास', desc: 'कौशाम्बी में विकास और बेहतर जीवन की दिशा में कदम।' },
  { type: 'sangathan', src: '/DSC_1819.JPG.webp', title: 'कार्यकर्ता सम्मेलन', desc: 'संगठन की ऊर्जा, समर्पण और सेवा भावना का मंच।' },
  { type: 'janseva', src: '/DSC_2855.JPG.webp', title: 'स्वास्थ्य शिविर', desc: 'आमजन तक स्वास्थ्य, जागरूकता और सहयोग की पहुँच।' },
];

const filters = [
  { id: 'all', label: 'सभी' },
  { id: 'sangathan', label: 'संगठन' },
  { id: 'vikas', label: 'विकास' },
  { id: 'janseva', label: 'जन सेवा' },
];

export default function GalleryClient() {
  const [activeFilter, setActiveFilter] = useState('all');

  return (
    <div className="bg-[#FCFBF7]">
      <section className="relative hero-gradient text-white pt-6 pb-16 md:pt-8 md:pb-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none flex justify-center items-center">
          <Image src="/logo.webp" alt="Background Logo" width={650} height={650} className="w-[650px] h-[650px] rounded-full object-cover" />
        </div>
        <div className="max-w-7xl mx-auto px-4  sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-block px-3 py-1 rounded-full bg-white/15 border border-white/25 text-xs font-bold uppercase tracking-wider text-pink-100">
              स्मृतियाँ
            </span>
            <h1 className="mt-4 text-4xl md:text-5xl font-black font-yatra leading-tight">फोटो गैलरी</h1>
            <p className="mt-4 text-lg text-pink-50">
              संगठन, सेवा और विकास की यात्रा की झलकियाँ — हर तस्वीर में लोगों की उम्मीदें, सेवा भाव और समर्पण झलकता है।
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {filters.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => setActiveFilter(item.id)}
                className={`px-5 py-2.5 rounded-xl text-sm font-bold transition-all ${activeFilter === item.id
                  ? 'bg-pink-600 text-white shadow-md'
                  : 'bg-white text-slate-700 border border-slate-200 hover:bg-pink-50'
                  }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {images
              .filter((img) => activeFilter === 'all' || img.type === activeFilter)
              .map((image) => (
                <article key={image.title} className="group overflow-hidden rounded-3xl border border-pink-100 bg-white shadow-sm hover:shadow-xl transition-all">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image src={image.src} alt={image.title} width={800} height={600} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="p-5">
                    <h3 className="text-xl font-black text-slate-900 font-yatra">{image.title}</h3>
                    <p className="mt-2 text-sm text-slate-600 leading-relaxed">{image.desc}</p>
                  </div>
                </article>
              ))}
          </div>
        </div>
      </section>

      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-[2rem] bg-gradient-to-r from-emerald-600 to-green-700 text-white p-8 shadow-2xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <span className="inline-block px-3 py-1 rounded-full bg-white/10 border border-white/20 text-xs font-bold uppercase tracking-wider text-emerald-100">
                  सेवा का भाव
                </span>
                <h3 className="mt-4 text-3xl md:text-4xl font-black font-yatra leading-tight">आपकी आवाज़ हमारे साथ है</h3>
              </div>
              <div className="flex flex-wrap gap-4 md:justify-end">
                <Link href="/jan-sunwai" className="inline-flex items-center gap-2 bg-white text-[#0B1D3A] px-6 py-3 rounded-xl font-bold shadow-md hover:bg-slate-100 transition-colors">
                  जनसुनवाई <i className="fa-solid fa-arrow-right" />
                </Link>
                <Link href="/contact" className="inline-flex items-center gap-2 bg-[#0B1D3A] text-white px-6 py-3 rounded-xl font-bold shadow-md hover:bg-slate-900 transition-colors">
                  संपर्क करें <i className="fa-solid fa-phone" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
