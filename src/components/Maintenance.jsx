'use client';
import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function Maintenance() {
  const [timeLeft, setTimeLeft] = useState({ hours: 47, minutes: 59, seconds: 59 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { ...prev, minutes: 59, seconds: 59 };
        if (prev.hours > 0) return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-[#FCFBF7] text-slate-800 flex flex-col justify-between selection:bg-pink-600 selection:text-white">
      {/* Top Banner Strip */}
      <div className="bg-gradient-to-r from-pink-600 via-rose-600 to-amber-600 text-white py-2 px-4 text-center text-xs font-bold tracking-wider">
        <span>🇮🇳 भारतीय जनता पार्टी — कौशाम्बी (उत्तर प्रदेश) 🇮🇳</span>
      </div>

      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl w-full text-center space-y-8">
          {/* Header & Candidate Profile */}
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-pink-100 border border-pink-200 text-pink-700 text-xs font-extrabold uppercase tracking-wider">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
              <span>डिजिटल मंच — निर्माण कार्य प्रगति पर है</span>
            </div>

            <div className="relative w-32 h-32 sm:w-40 sm:h-40 mx-auto rounded-full p-1.5 bg-gradient-to-r from-pink-600 via-amber-500 to-emerald-600 shadow-xl overflow-hidden">
              <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-white">
                <Image
                  src="/Kalpana.jpeg"
                  alt="कल्पना सोनकर"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>

            <div>
              <h1 className="text-3xl sm:text-5xl font-black font-yatra text-slate-900 tracking-tight leading-tight">
                कल्पना सोनकर
              </h1>
              <p className="text-base sm:text-xl font-bold text-pink-600 mt-1">
                जिला पंचायत अध्यक्ष, कौशाम्बी (उत्तर प्रदेश)
              </p>
            </div>
          </div>

          {/* Main Live Announcement Card */}
          <div className="rounded-3xl border border-pink-200/80 bg-white p-8 sm:p-10 shadow-xl space-y-6">
            <div className="space-y-3">
              <span className="inline-block px-4 py-1 rounded-full bg-amber-100 text-amber-800 text-xs sm:text-sm font-black border border-amber-200">
                🚀 WE WILL BE LIVE IN 2 DAYS
              </span>
              <h2 className="text-2xl sm:text-4xl font-black font-yatra text-slate-900 leading-snug">
                आधिकारिक वेबसाइट जल्द ही आपके बीच होगी!
              </h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-xl mx-auto">
                हम कौशाम्बी की जनता के लिए एक सुगम, पारदर्शी और सशक्त डिजिटल मंच तैयार कर रहे हैं। अगले 2 दिनों में जनसुनवाई, विकास कार्यों एवं उपलब्धियों का पूरा ब्यौरा यहाँ उपलब्ध रहेगा।
              </p>
            </div>

            {/* Countdown Box */}
            <div className="grid grid-cols-3 gap-3 max-w-md mx-auto pt-2">
              <div className="bg-[#fffaf8] border border-pink-100 p-4 rounded-2xl">
                <span className="text-2xl sm:text-4xl font-black text-pink-600 block">
                  {String(timeLeft.hours).padStart(2, '0')}
                </span>
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">घंटे (Hours)</span>
              </div>
              <div className="bg-[#fffaf8] border border-pink-100 p-4 rounded-2xl">
                <span className="text-2xl sm:text-4xl font-black text-pink-600 block">
                  {String(timeLeft.minutes).padStart(2, '0')}
                </span>
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">मिनट (Mins)</span>
              </div>
              <div className="bg-[#fffaf8] border border-pink-100 p-4 rounded-2xl">
                <span className="text-2xl sm:text-4xl font-black text-pink-600 block">
                  {String(timeLeft.seconds).padStart(2, '0')}
                </span>
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">सेकंड (Secs)</span>
              </div>
            </div>

            {/* Direct Contact Buttons */}
            <div className="pt-4 border-t border-pink-100 space-y-3">
              <p className="text-xs font-bold uppercase tracking-wider text-slate-500">
                आपातकालीन सहायता एवं संपर्क के लिए:
              </p>
              <div className="flex flex-wrap items-center justify-center gap-3">
                <a
                  href="tel:+918299223340"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-pink-600 text-white font-bold text-xs sm:text-sm hover:bg-pink-700 transition-colors shadow-md"
                >
                  <i className="fa-solid fa-phone" />
                  <span>+91 82992 23340</span>
                </a>
                <a
                  href="mailto:kalpanajitendrasonkarbjp@gmail.com"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-900 text-white font-bold text-xs sm:text-sm hover:bg-slate-800 transition-colors shadow-md"
                >
                  <i className="fa-solid fa-envelope" />
                  <span>ईमेल भेजें</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-6 border-t border-pink-100 bg-white text-center text-xs text-slate-500">
        <p className="font-semibold">
          © {new Date().getFullYear()} कल्पना सोनकर — अध्यक्ष जिला पंचायत कौशाम्बी। सर्वाधिकार सुरक्षित।
        </p>
      </footer>
    </div>
  );
}
