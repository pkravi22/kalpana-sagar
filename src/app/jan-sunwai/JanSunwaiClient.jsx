'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';

const faqs = [
  { q: 'जनसुनवाई क्या है?', a: 'जनसुनवाई एक ऐसी व्यवस्था है जिसके माध्यम से आप अपनी समस्याएँ, शिकायतें या सुझाव सीधे कल्पना सोनकर जी तक पहुँचा सकते हैं। महिलाओं की समस्याओं को विशेष प्राथमिकता दी जाती है।' },
  { q: 'मेरी समस्या का समाधान कब तक होगा?', a: 'आपकी समस्या दर्ज होने के बाद 7 कार्य दिवसों के भीतर आपसे संपर्क किया जाएगा। जटिल मामलों में यह समय सीमा थोड़ी अधिक हो सकती है।' },
  { q: 'क्या महिलाएँ सीधे मिल सकती हैं?', a: 'हाँ, महिलाएँ हमारे कौशाम्बी कार्यालय में मंगलवार और गुरुवार को विशेष महिला जनसुनवाई के लिए आ सकती हैं। इसके अलावा सोमवार–शनिवार 10 AM–5 PM भी उपलब्ध रहती हैं।' },
];

const contacts = [
  { icon: '📍', label: 'कार्यालय', value: 'जिला पंचायत कार्यालय, कौशाम्बी, उत्तर प्रदेश', href: 'https://maps.google.com/?q=Kaushambi+UP' },
  { icon: '📞', label: 'दूरभाष', value: '+91 82992 23340', href: 'tel:+918299223340' },
  { icon: '✉️', label: 'ईमेल', value: 'kalpanajitendrasonkarbjp@gmail.com', href: 'mailto:kalpanajitendrasonkarbjp@gmail.com' },
  { icon: '🕒', label: 'समय', value: 'सोमवार–शनिवार, 10:00 AM – 5:00 PM', href: '#' },
];

export default function JanSunwaiClient() {
  const [form, setForm] = useState({ name: '', mobile: '', village: '', subject: '', message: '' });
  const [publicFeed, setPublicFeed] = useState([]);
  const [status, setStatus] = useState('idle'); // idle | loading | success | error
  const [openFaq, setOpenFaq] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    fetch('/api/jan-sunwai')
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) setPublicFeed(data);
      })
      .catch(console.error);
  }, []);

  const itemsPerPage = 5;
  const totalPages = Math.ceil(publicFeed.length / itemsPerPage);
  const currentFeed = publicFeed.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    try {
      const res = await fetch('/api/jan-sunwai', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus('success');
        setForm({ name: '', mobile: '', village: '', subject: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <div className="bg-[#FCFBF7] text-slate-800">
      {/* PAGE HERO */}
      <section className="relative hero-gradient text-white pt-20 pb-16 md:pt-24 md:pb-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-block px-3.5 py-1.5 rounded-full bg-white/15 border border-white/25 text-xs font-bold uppercase tracking-wider text-pink-100">
              जनसुनवाई
            </span>
            <h1 className="mt-4 text-4xl md:text-5xl font-black font-yatra leading-tight">
              जनसुनवाई एवं समाधान पोर्टल
            </h1>
            <p className="mt-4 text-lg text-pink-50 max-w-2xl mx-auto">
              कल्पना सोनकर जी से अपनी समस्या, सुझाव व शिकायत सीधे साझा करें। हर आवाज़ को प्राथमिकता दी जाएगी।
            </p>
          </div>
        </div>
      </section>

      {/* JAN SUNWAI SECTION */}
      <section className="py-16 md:py-20" aria-label="जनसुनवाई फ़ॉर्म">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <span className="inline-block px-3.5 py-1.5 rounded-full bg-pink-100 border border-pink-200 text-pink-700 text-xs font-bold uppercase tracking-wider">
              महिला नेतृत्व & जनसेवा
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 font-yatra leading-tight">
              अपनी बात हम तक पहुँचाएँ
            </h2>
            <p className="mt-4 text-base sm:text-lg text-slate-600">
              कौशाम्बी की हर महिला और नागरिक की सुनवाई के लिए समर्पित सेवा।
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Intro & Highlights Column */}
            <div className="lg:col-span-5 space-y-6">
              <div className="rounded-3xl border border-pink-100 bg-white p-6 sm:p-8 shadow-sm">
                <h3 className="text-2xl font-black text-slate-900 font-yatra mb-4">
                  संकल्प एवं प्राथमिकताएँ
                </h3>
                <p className="text-base text-slate-600 leading-relaxed mb-6">
                  कल्पना सोनकर जी का संकल्प है कि जिले की कोई भी महिला अपनी समस्या के साथ अकेली न रहे। जनसुनवाई फ़ॉर्म भरकर आप सीधे उनके कार्यालय तक अपनी बात पहुँचा सकती हैं।
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 bg-[#fffaf8] border border-pink-100 p-3.5 rounded-2xl">
                    <span className="w-8 h-8 rounded-full bg-pink-100 text-pink-700 flex items-center justify-center font-bold text-sm">✓</span>
                    <span className="text-sm font-semibold text-slate-800">हर शिकायत को गंभीरता से लिया जाएगा</span>
                  </div>
                  <div className="flex items-center gap-3 bg-[#fffaf8] border border-pink-100 p-3.5 rounded-2xl">
                    <span className="w-8 h-8 rounded-full bg-pink-100 text-pink-700 flex items-center justify-center font-bold text-sm">✓</span>
                    <span className="text-sm font-semibold text-slate-800">7 कार्य दिवसों के भीतर प्राथमिक प्रतिक्रिया</span>
                  </div>
                  <div className="flex items-center gap-3 bg-[#fffaf8] border border-pink-100 p-3.5 rounded-2xl">
                    <span className="w-8 h-8 rounded-full bg-pink-100 text-pink-700 flex items-center justify-center font-bold text-sm">✓</span>
                    <span className="text-sm font-semibold text-slate-800">महिलाओं की समस्याओं को विशेष प्राथमिकता</span>
                  </div>
                  <div className="flex items-center gap-3 bg-[#fffaf8] border border-pink-100 p-3.5 rounded-2xl">
                    <span className="w-8 h-8 rounded-full bg-pink-100 text-pink-700 flex items-center justify-center font-bold text-sm">✓</span>
                    <span className="text-sm font-semibold text-slate-800">निःशुल्क जनसेवा – कोई शुल्क नहीं</span>
                  </div>
                </div>
              </div>

              {/* Office Contact Info Cards */}
              <div className="rounded-3xl border border-pink-100 bg-white p-6 sm:p-8 shadow-sm">
                <h3 className="text-xl font-black text-slate-900 font-yatra mb-4">संपर्क सूत्र</h3>
                <div className="space-y-3">
                  {contacts.map((c, i) => (
                    <a
                      key={i}
                      href={c.href || '#'}
                      className="flex items-start gap-4 rounded-2xl bg-[#fffaf8] border border-pink-100 p-4 transition-colors hover:bg-pink-50"
                    >
                      <div className="w-10 h-10 rounded-xl bg-pink-100 text-xl flex items-center justify-center flex-shrink-0">
                        {c.icon}
                      </div>
                      <div>
                        <p className="text-xs font-bold uppercase tracking-wider text-slate-500">{c.label}</p>
                        <p className="mt-0.5 text-sm font-semibold text-slate-800">{c.value}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Form Card */}
            <div className="lg:col-span-7">
              <div className="rounded-3xl border border-pink-100 bg-white p-6 sm:p-8 shadow-md">
                {status === 'success' ? (
                  <div className="text-center py-10 space-y-4">
                    <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center text-3xl mx-auto">
                      ✓
                    </div>
                    <h3 className="text-2xl font-black text-slate-900 font-yatra">आपकी समस्या सफलतापूर्वक दर्ज हो गई!</h3>
                    <p className="text-slate-600 max-w-md mx-auto text-sm sm:text-base">
                      हमारी टीम शीघ्र ही आपके दिए गए मोबाइल नंबर पर संपर्क करेगी। आपका धन्यवाद।
                    </p>
                    <button
                      type="button"
                      className="mt-4 inline-flex items-center px-6 py-3 rounded-xl bg-pink-600 hover:bg-pink-700 text-white font-bold text-sm shadow-md transition-all"
                      onClick={() => setStatus('idle')}
                    >
                      नई समस्या दर्ज करें
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} noValidate className="space-y-5" aria-label="जनसुनवाई फ़ॉर्म">
                    <h3 className="text-2xl font-black text-slate-900 font-yatra border-b border-pink-100 pb-3">
                      जनसुनवाई फ़ॉर्म
                    </h3>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="js-name" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                          पूरा नाम *
                        </label>
                        <input
                          id="js-name"
                          name="name"
                          type="text"
                          required
                          value={form.name}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-slate-900 text-sm focus:bg-white focus:border-pink-600 focus:outline-none transition-all"
                          placeholder="आपका नाम"
                        />
                      </div>
                      <div>
                        <label htmlFor="js-mobile" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                          मोबाइल नंबर *
                        </label>
                        <input
                          id="js-mobile"
                          name="mobile"
                          type="tel"
                          required
                          value={form.mobile}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-slate-900 text-sm focus:bg-white focus:border-pink-600 focus:outline-none transition-all"
                          placeholder="10 अंकों का नंबर"
                          pattern="[0-9]{10}"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="js-village" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                        गाँव / वार्ड / शहर *
                      </label>
                      <input
                        id="js-village"
                        name="village"
                        type="text"
                        required
                        value={form.village}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-slate-900 text-sm focus:bg-white focus:border-pink-600 focus:outline-none transition-all"
                        placeholder="आपका गाँव या शहर"
                      />
                    </div>

                    <div>
                      <label htmlFor="js-subject" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                        समस्या का विषय *
                      </label>
                      <select
                        id="js-subject"
                        name="subject"
                        required
                        value={form.subject}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-slate-900 text-sm focus:bg-white focus:border-pink-600 focus:outline-none transition-all"
                      >
                        <option value="">विषय चुनें</option>
                        <option value="महिला सुरक्षा">महिला सुरक्षा</option>
                        <option value="सड़क / पुल">सड़क / पुल</option>
                        <option value="पेयजल">पेयजल</option>
                        <option value="बिजली">बिजली</option>
                        <option value="शिक्षा">शिक्षा</option>
                        <option value="स्वास्थ्य">स्वास्थ्य</option>
                        <option value="सरकारी योजना">सरकारी योजना</option>
                        <option value="महिला सशक्तिकरण">महिला सशक्तिकरण</option>
                        <option value="अन्य">अन्य</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="js-message" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                        समस्या का विवरण *
                      </label>
                      <textarea
                        id="js-message"
                        name="message"
                        required
                        rows={5}
                        value={form.message}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-slate-900 text-sm focus:bg-white focus:border-pink-600 focus:outline-none transition-all resize-y"
                        placeholder="अपनी समस्या विस्तार से लिखें..."
                      />
                    </div>

                    {status === 'error' && (
                      <p className="text-sm font-semibold text-rose-600 bg-rose-50 border border-rose-200 p-3 rounded-xl">
                        ❌ कुछ त्रुटि हुई। कृपया पुनः प्रयास करें।
                      </p>
                    )}

                    <button
                      type="submit"
                      disabled={status === 'loading'}
                      className="w-full py-4 rounded-xl bg-pink-600 hover:bg-pink-700 text-white font-black text-base shadow-lg hover:shadow-xl transition-all transform active:scale-98 disabled:opacity-50"
                    >
                      {status === 'loading' ? '⏳ प्रेषित हो रहा है...' : 'समस्या दर्ज करें →'}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PUBLIC FEED */}
      {publicFeed.length > 0 && (
        <section className="py-16 md:py-20 bg-white" aria-label="जनसुनवाई फ़ीड">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
              <span className="inline-block px-3.5 py-1.5 rounded-full bg-pink-100 border border-pink-200 text-pink-700 text-xs font-bold uppercase tracking-wider">
                पारदर्शिता
              </span>
              <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 font-yatra leading-tight">
                हाल की जनसुनवाई एवं शिकायत स्थिति
              </h2>
              <p className="mt-4 text-base sm:text-lg text-slate-600">
                जनता द्वारा दर्ज मामलों की वर्तमान स्थिति एवं समाधान।
              </p>
            </div>

            <div className="space-y-4">
              {currentFeed.map((item, idx) => (
                <div key={item.id || idx} className="rounded-3xl border border-pink-100 bg-[#fffaf8] p-6 shadow-sm">
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-pink-100 pb-3 mb-3">
                    <div>
                      <span className="text-base font-bold text-slate-900">{item.name}</span>
                      <span className="text-xs text-slate-500 ml-2">({item.village})</span>
                    </div>
                    <div className="flex items-center gap-3 text-xs font-semibold">
                      <span className="text-slate-500">{new Date(item.date).toLocaleDateString('hi-IN')}</span>
                      <span
                        className={`px-3 py-1 rounded-full font-bold text-xs ${
                          item.status === 'Pending'
                            ? 'bg-amber-100 text-amber-800 border border-amber-200'
                            : item.status === 'Resolved'
                            ? 'bg-emerald-100 text-emerald-800 border border-emerald-200'
                            : 'bg-indigo-100 text-indigo-800 border border-indigo-200'
                        }`}
                      >
                        {item.status === 'Pending' ? 'लंबित ⏳' : item.status === 'Resolved' ? 'निस्तारित ✅' : item.status}
                      </span>
                    </div>
                  </div>

                  <p className="text-sm font-bold text-pink-600 mb-1">{item.subject}</p>
                  <p className="text-sm text-slate-700 leading-relaxed bg-white p-3.5 rounded-2xl border border-pink-100">
                    "{item.message}"
                  </p>

                  {item.response && (
                    <div className="mt-3 bg-emerald-50 border border-emerald-100 p-3.5 rounded-2xl text-xs sm:text-sm text-emerald-900">
                      <span className="font-bold block mb-1">✅ समाधान / कार्यवाही:</span>
                      {item.response}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {totalPages > 1 && (
              <div className="flex justify-center items-center gap-4 mt-8">
                <button
                  type="button"
                  onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                  disabled={currentPage === 1}
                  className="px-4 py-2 rounded-xl border border-slate-200 text-sm font-bold text-slate-700 hover:bg-pink-50 disabled:opacity-40"
                >
                  ← पिछला
                </button>
                <span className="text-sm font-bold text-slate-600">
                  {currentPage} / {totalPages}
                </span>
                <button
                  type="button"
                  onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                  disabled={currentPage === totalPages}
                  className="px-4 py-2 rounded-xl border border-slate-200 text-sm font-bold text-slate-700 hover:bg-pink-50 disabled:opacity-40"
                >
                  अगला →
                </button>
              </div>
            )}
          </div>
        </section>
      )}

      {/* FAQ */}
      <section className="py-16 md:py-20" aria-label="सामान्य प्रश्न">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <span className="inline-block px-3.5 py-1.5 rounded-full bg-pink-100 border border-pink-200 text-pink-700 text-xs font-bold uppercase tracking-wider">
              सहायता
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 font-yatra leading-tight">
              अक्सर पूछे जाने वाले प्रश्न
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="rounded-3xl border border-pink-100 bg-white overflow-hidden shadow-sm">
                <button
                  type="button"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-6 text-left font-yatra text-lg font-black text-slate-900 hover:text-pink-600 transition-colors"
                >
                  <span>{faq.q}</span>
                  <span className={`text-sm transition-transform duration-200 ${openFaq === i ? 'rotate-180 text-pink-600' : 'text-slate-400'}`}>
                    ▼
                  </span>
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-6 text-sm text-slate-600 leading-relaxed border-t border-pink-50 pt-4">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
