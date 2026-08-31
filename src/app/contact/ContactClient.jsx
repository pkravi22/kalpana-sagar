'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const contactCards = [
  { icon: '📍', label: 'कार्यालय पता', value: 'कौशाम्बी, उत्तर प्रदेश', href: 'https://maps.google.com/?q=Kaushambi+UP' },
  { icon: '📞', label: 'फोन', value: '+91 82992 23340', href: 'tel:+918299223340' },
  { icon: '✉️', label: 'ईमेल', value: 'kalpanajitendrasonkarbjp@gmail.com', href: 'mailto:kalpanajitendrasonkarbjp@gmail.com' },
  { icon: '🕒', label: 'कार्य समय', value: 'सोमवार–शनिवार, 10:00 AM – 5:00 PM', href: '#' },
];

export default function ContactClient() {
  const [form, setForm] = useState({ name: '', phone: '', subject: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setForm({ name: '', phone: '', subject: '', message: '' });
  };

  return (
    <div className="bg-[#FCFBF7]">
      <section className="relative hero-gradient text-white pt-20 pb-16 md:pt-24 md:pb-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none flex justify-center items-center">
          <Image src="/logo.webp" alt="Background Logo" width={650} height={650} className="w-[650px] h-[650px] rounded-full object-cover" />
        </div>
        <div className="max-w-7xl mx-auto px-4 md:pt-12 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <span className="inline-block px-3 py-1 rounded-full bg-white/15 border border-white/25 text-xs font-bold uppercase tracking-wider text-pink-100">
              संपर्क
            </span>
            <h1 className="mt-4 text-4xl md:text-5xl font-black font-yatra leading-tight">संपर्क करें और संवाद बनाएं</h1>
            <p className="mt-4 text-lg text-pink-50 max-w-2xl">
              आपकी बात, आपके सुझाव और आपके सहयोग का हमेशा स्वागत है। हर आवाज़ को सम्मान और सुनवाई का अवसर दिया जाता है।
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            <div className="lg:col-span-5 space-y-5">
              <div className="rounded-3xl border border-pink-100 bg-white p-6 shadow-sm">
                <span className="inline-block px-3 py-1 rounded-full bg-pink-100 text-pink-700 text-xs font-bold uppercase tracking-wider">
                  कार्यालय
                </span>
                <h2 className="mt-4 text-3xl font-black text-slate-900 font-yatra">संपर्क सूचना</h2>
                <div className="mt-6 space-y-4">
                  {contactCards.map((item) => (
                    <a key={item.label} href={item.href || '#'} className="flex items-start gap-4 rounded-2xl bg-[#fffaf8] border border-pink-100 p-4 transition-colors hover:bg-pink-50">
                      <div className="w-12 h-12 rounded-2xl bg-pink-100 text-xl flex items-center justify-center">{item.icon}</div>
                      <div>
                        <p className="text-xs font-bold uppercase tracking-wider text-slate-500">{item.label}</p>
                        <p className="mt-1 text-base font-semibold text-slate-800">{item.value}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              <div className="rounded-3xl bg-[#0B1D3A] text-white p-6 shadow-xl">
                <h3 className="text-2xl font-black font-yatra">सामाजिक संपर्क</h3>
                <div className="mt-5 flex flex-wrap gap-3">
                  <a href="https://facebook.com/kalpanajitendrasonkar" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-white text-xl hover:scale-105 transition-transform"><i className="fa-brands fa-facebook-f" /></a>
                  <a href="https://instagram.com/kalpanajitendrasonkar" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full bg-gradient-to-tr from-yellow-500 via-pink-600 to-purple-600 flex items-center justify-center text-white text-xl hover:scale-105 transition-transform"><i className="fa-brands fa-instagram" /></a>
                  <a href="https://wa.me/918299223340" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full bg-emerald-600 flex items-center justify-center text-white text-xl hover:scale-105 transition-transform"><i className="fa-brands fa-whatsapp" /></a>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="glass-card p-6 md:p-8 rounded-[2rem] shadow-xl border-2 border-white bg-white/90">
                {sent ? (
                  <div className="text-center py-10">
                    <div className="w-20 h-20 mx-auto rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center text-4xl">
                      <i className="fa-solid fa-check-circle" />
                    </div>
                    <h3 className="mt-6 text-3xl font-black font-yatra text-slate-900">संदेश सफलतापूर्वक भेजा गया</h3>
                    <p className="mt-3 text-slate-600">हम शीघ्र ही आपसे संपर्क करेंगे। धन्यवाद।</p>
                    <button type="button" onClick={() => setSent(false)} className="mt-6 inline-flex items-center gap-2 bg-pink-600 text-white px-6 py-3 rounded-xl font-bold shadow-md hover:bg-pink-700 transition-colors">
                      नया संदेश लिखें <i className="fa-solid fa-arrow-right" />
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="flex items-center justify-between border-b border-slate-200 pb-4">
                      <h2 className="text-3xl font-black font-yatra text-slate-900">संदेश भेजें</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-2">पूरा नाम <span className="text-red-500">*</span></label>
                        <input name="name" value={form.name} onChange={handleChange} required className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 outline-none focus:border-pink-600 focus:ring-2 focus:ring-pink-100" placeholder="आपका नाम" />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-2">मोबाइल नंबर <span className="text-red-500">*</span></label>
                        <input name="phone" value={form.phone} onChange={handleChange} required className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 outline-none focus:border-pink-600 focus:ring-2 focus:ring-pink-100" placeholder="मोबाइल नंबर" />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2">विषय <span className="text-red-500">*</span></label>
                      <input name="subject" value={form.subject} onChange={handleChange} required className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 outline-none focus:border-pink-600 focus:ring-2 focus:ring-pink-100" placeholder="जैसे: विकास, समस्या, सहयोग" />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2">संदेश <span className="text-red-500">*</span></label>
                      <textarea name="message" value={form.message} onChange={handleChange} required rows={6} className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 outline-none focus:border-pink-600 focus:ring-2 focus:ring-pink-100 resize-y" placeholder="अपनी बात लिखें..." />
                    </div>

                    <button type="submit" className="inline-flex items-center gap-2 bg-pink-600 text-white px-6 py-3 rounded-xl font-bold shadow-md hover:bg-pink-700 transition-colors">
                      संदेश भेजें <i className="fa-solid fa-paper-plane" />
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-[2rem] bg-gradient-to-r from-pink-500 to-rose-600 text-white p-8 md:p-12 shadow-2xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <span className="inline-block px-3 py-1 rounded-full bg-white/10 border border-white/20 text-xs font-bold uppercase tracking-wider text-pink-100">
                  तुरंत संपर्क
                </span>
                <h3 className="mt-4 text-3xl md:text-4xl font-black font-yatra">तुरंत सहायता के लिए फोन करें</h3>
              </div>
              <div className="flex flex-wrap justify-start md:justify-end gap-4">
                <a href="tel:+918299223340" className="inline-flex items-center gap-2 bg-white text-[#0B1D3A] px-6 py-3 rounded-xl font-bold shadow-md hover:bg-slate-100 transition-colors">
                  <i className="fa-solid fa-phone" /> +91 82992 23340
                </a>
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
