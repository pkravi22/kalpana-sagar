'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useReveal, useCounter } from '@/hooks/useReveal';

const impactBlocks = [
  { icon: '🌸', title: 'महिला सशक्तिकरण', metric: '200+', metricLabel: 'स्वयं सहायता समूह', desc: 'जिले में महिला स्वयं सहायता समूहों का गठन, जिससे हजारों महिलाएँ आर्थिक रूप से स्वावलंबी बनीं।' },
  { icon: '📚', title: 'बालिका शिक्षा', metric: '3000+', metricLabel: 'छात्राएँ लाभान्वित', desc: 'बेटी बचाओ बेटी पढ़ाओ अभियान के तहत छात्रवृत्ति और निःशुल्क शिक्षा सामग्री वितरण।' },
  { icon: '🌾', title: 'ग्रामीण विकास', metric: '60+', metricLabel: 'गाँव विकसित', desc: 'पंचायत स्तर पर सड़क, जल आपूर्ति और स्वच्छता परियोजनाओं का सफल क्रियान्वयन।' },
  { icon: '🏥', title: 'स्वास्थ्य अभियान', metric: '40+', metricLabel: 'स्वास्थ्य शिविर', desc: 'महिला एवं बाल पोषण शिविर, प्रसवपूर्व देखभाल और टीकाकरण अभियानों का संचालन।' },
  { icon: '⚖️', title: 'सामाजिक न्याय', metric: '1500+', metricLabel: 'मामले', desc: 'वंचित वर्गों को सरकारी योजनाओं से जोड़ना और उनके अधिकारों की सुरक्षा सुनिश्चित करना।' },
  { icon: '💧', title: 'स्वच्छ जल', metric: '30+', metricLabel: 'गाँव', desc: 'जल जीवन मिशन के तहत ग्रामीण क्षेत्रों में शुद्ध पेयजल की पाइपलाइन का विस्तार।' },
];
const developmentWorks = [
  {
    title: 'सड़क एवं संपर्क मार्ग',
    desc: 'गांवों और प्रमुख मार्गों को जोड़ने के लिए सड़क एवं संपर्क मार्गों का निर्माण व मरम्मत।',
    stat: '411 कार्य',
    image: '/Kalpana3.jpeg',
  },
  {
    title: 'लेपन एवं सड़क सुधार',
    desc: 'ग्रामीण क्षेत्रों में सड़कों का लेपन, नवीनीकरण एवं सुदृढ़ीकरण।',
    image: '/Kalpana.jpeg',
  },
  {
    title: 'सीसी रोड एवं खड़ंजा',
    desc: 'गांवों में सीसी रोड एवं खड़ंजा निर्माण से बेहतर आवागमन की सुविधा।',
    image: '/Kalpana1.jpeg',
  },
  {
    title: 'पुलिया एवं जल निकासी',
    desc: 'स्थानीय आवागमन और जल निकासी से जुड़े निर्माण कार्य।',
    image: '/Kalpana2.jpeg',
  },
  {
    title: 'ग्रामीण आधारभूत विकास',
    desc: 'गांवों में आवश्यक आधारभूत सुविधाओं से जुड़े विभिन्न विकास कार्य।',
    image: '/Kalpana3.jpeg',
  },
  {
    title: 'जनपद स्तरीय विकास',
    desc: 'कौशाम्बी के विभिन्न विकासखंडों में आवश्यकता आधारित विकास कार्य।',
    image: '/DSC_0783.JPG.webp',
  },
];

const districtStats = [
  { count: 200, suffix: '+', label: 'स्वयं सहायता समूह' },
  { count: 3000, suffix: '+', label: 'महिलाएँ सशक्त' },
  { count: 60, suffix: '+', label: 'गाँव लाभान्वित' },
  { count: 100, suffix: '%', label: 'आवास लक्ष्य' },
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

export default function AchievementsClient() {
  useReveal();
  useCounter();

  return (
    <div className="bg-[#FCFBF7] text-slate-800">
      {/* PAGE HERO */}
      <section className="relative hero-gradient text-white pt-20 pb-16 md:pt-24 md:pb-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-block px-3.5 py-1.5 rounded-full bg-white/15 border border-white/25 text-xs font-bold uppercase tracking-wider text-pink-100">
              प्रमुख उपलब्धियाँ
            </span>
            <h1 className="mt-4 text-4xl md:text-5xl font-black font-yatra leading-tight">
              विकास और जनसेवा की प्रमुख उपलब्धियाँ
            </h1>
            <p className="mt-4 text-lg text-pink-50 max-w-2xl mx-auto">
              महिला सशक्तिकरण, ग्रामीण विकास और जनकल्याण के क्षेत्र में किए गए समर्पित प्रयास।
            </p>
          </div>
          <div className="text-center">
            <p className="text-4xl md:text-5xl font-medium text-white">
              411+
            </p>
            <p className="mt-1 text-sm text-white font-semibold">
              विकास एवं निर्माण कार्य
            </p>
            <p className="text-xs text-white">
              2021–22 से 2024–25
            </p>
          </div>
        </div>
      </section>

      {/* IMPACT BLOCKS */}
      <section className="py-16 md:py-20" aria-label="प्रमुख उपलब्धियाँ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <span className="inline-block px-3.5 py-1.5 rounded-full bg-pink-100 border border-pink-200 text-pink-700 text-xs font-bold uppercase tracking-wider">
              विकास के क्षेत्र
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 font-yatra leading-tight">
              कौशाम्बी की प्रगति के स्तम्भ
            </h2>
            <p className="mt-4 text-base sm:text-lg text-slate-600">
              विभिन्न जनहितकारी योजनाओं और पहलों का विस्तृत विवरण।
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {impactBlocks.map((block, i) => (
              <article key={i} className="rounded-3xl border border-pink-100 bg-white p-6 shadow-sm hover:shadow-xl transition-all flex flex-col justify-between">
                <div>
                  <div className="flex items-start justify-between mb-4">
                    <span className="text-3xl">{block.icon}</span>
                    <div className="text-right">
                      <span className="text-2xl font-black text-pink-600 block leading-tight">{block.metric}</span>
                      <span className="text-xs font-semibold text-slate-500">{block.metricLabel}</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-black text-slate-900 font-yatra mb-2">{block.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{block.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* DISTRICT METRICS */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-[#1a0533] to-[#4a1068] text-white" aria-label="जिला प्रभाव">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <span className="inline-block px-3.5 py-1.5 rounded-full bg-white/15 border border-white/25 text-xs font-bold uppercase tracking-wider text-pink-200">
              जिले का प्रभाव
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-black font-yatra leading-tight">
              कौशाम्बी में बदलाव
            </h2>
            <p className="mt-4 text-base sm:text-lg text-pink-100/90">
              जमीनी स्तर पर सकारात्मक परिवर्तन के सांख्यिकीय प्रमाण।
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {districtStats.map((s, i) => (
              <div key={i} className="rounded-3xl bg-white/10 backdrop-blur-md border border-pink-200/20 p-6 text-center shadow-lg">
                <div className="text-4xl sm:text-5xl font-black text-pink-200 flex justify-center items-baseline gap-1">
                  <span data-count={s.count}>0</span>
                  <span>{s.suffix}</span>
                </div>
                <p className="mt-3 text-sm sm:text-base font-semibold text-slate-200">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-16 md:py-20 bg-[#f7f5ee]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-block px-4 py-2 rounded-full bg-orange-100 text-orange-700 text-xs sm:text-sm font-bold">
              विकास कार्य
            </span>

            <h2 className="mt-4 text-3xl md:text-4xl font-black text-slate-900 font-yatra">
              क्षेत्र के विकास की दिशा में कार्य
            </h2>

            <p className="mt-4 text-slate-600">
              वित्तीय वर्ष 2021–22 से 2024–25 तक जनपद में कराए गए विभिन्न
              निर्माण एवं विकास कार्यों की संक्षिप्त झलक।
            </p>

            <div className="mt-4 mx-auto w-24 h-1 rounded-full bg-gradient-to-r from-orange-500 to-amber-400" />
          </div>

          {/* Work Cards */}
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">

            {developmentWorks.map((work) => (
              <article
                key={work.title}
                className="overflow-hidden rounded-3xl bg-white border border-orange-100 shadow-sm hover:shadow-xl transition-all"
              >

                <div className="h-48 overflow-hidden">
                  <img
                    src={work.image}
                    alt={work.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>

                <div className="p-5">
                  <h3 className="text-xl font-black text-slate-900 font-yatra">
                    {work.title}
                  </h3>

                  <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                    {work.desc}
                  </p>

                  {work.stat && (
                    <span className="inline-block mt-4 px-3 py-1 rounded-full bg-orange-50 text-orange-600 text-xs font-bold">
                      {work.stat}
                    </span>
                  )}
                </div>

              </article>
            ))}

          </div>

        </div>
      </section>

      {/* GALLERY SECTION */}
      <section className="py-16 md:py-20" aria-label="फोटो गैलरी">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <span className="inline-block px-3.5 py-1.5 rounded-full bg-pink-100 border border-pink-200 text-pink-700 text-xs font-bold uppercase tracking-wider">
              स्मृतियाँ
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 font-yatra leading-tight">
              विकास और जनसेवा की फोटो गैलरी
            </h2>
            <p className="mt-4 text-base sm:text-lg text-slate-600">
              कार्यक्रमों एवं कार्यों के कुछ अविस्मरणीय क्षण।
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

      {/* CTA */}
      <section className="py-16 md:py-20 bg-gradient-to-r from-pink-600 to-rose-700 text-white" aria-label="जनसुनवाई">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-yatra leading-tight">
            आपकी समस्या हमारी प्राथमिकता
          </h2>
          <p className="text-lg text-pink-100 max-w-2xl mx-auto leading-relaxed">
            जनसुनवाई पोर्टल के माध्यम से अपनी बात और शिकायतें सीधे हम तक पहुँचाएँ।
          </p>
          <div>
            <Link href="/jan-sunwai" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-white text-pink-700 font-black text-base hover:bg-pink-50 shadow-xl transition-all transform active:scale-95">
              <span>जनसुनवाई फ़ॉर्म भरें</span>
              <i className="fa-solid fa-arrow-right text-sm" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
