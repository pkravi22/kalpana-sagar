
'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const navLinks = [
  { href: '/', label: 'होम' },
  { href: '/about', label: 'परिचय' },
  { href: '/vision', label: 'जीवन दर्शन' },
  { href: '/achievements', label: 'उपलब्धियाँ' },
  { href: '/gallery', label: 'फोटो गैलरी' },
  { href: '/contact', label: 'संपर्क' },
];

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href) => {
    if (href === '/') {
      return pathname === '/';
    }

    return pathname.startsWith(href);
  };

  const closeMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* =====================================================
          TRICOLOR TOP BORDER
      ====================================================== */}
      <div className="fixed top-0 left-0 right-0 z-[70] h-1 bg-gradient-to-r from-orange-500 via-white to-green-600" />

      {/* =====================================================
          TOP INFORMATION BAR
      ====================================================== */}
      <div className="hidden lg:block sticky top-1 z-[60] bg-gradient-to-r from-[#0b1f3a] via-slate-900 to-[#0b1f3a] text-slate-200 border-b border-amber-500/30 shadow-sm">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="h-10 flex items-center justify-between gap-4">

            {/* LEFT */}
            <div className="flex items-center gap-3 min-w-0">

              {/* BJP BADGE */}
              <span className="inline-flex items-center gap-1.5 bg-orange-500 text-white px-2.5 py-1 rounded-full text-[11px] font-bold tracking-wide shadow-sm shrink-0">

                <Image
                  src="/logo.webp"
                  width={20}
                  height={20}
                  alt="BJP logo"
                  className="w-5 h-5 rounded-full object-cover"
                  priority
                />

                भाजपा कौशाम्बी

              </span>

              {/* SLOGAN */}
              <span className="text-amber-300 font-semibold text-xs tracking-wide truncate">
                || राष्ट्र प्रथम, सेवा ही संकल्प ||
              </span>

            </div>

            {/* RIGHT */}
            <div className="flex items-center gap-3 xl:gap-4 text-xs font-semibold shrink-0">

              {/* PHONE */}
              <a
                href="tel:+918299223340"
                className="flex items-center gap-1.5 hover:text-amber-300 transition-colors"
              >
                <i className="fa-solid fa-phone-volume text-orange-500" />
                <span>+91 82992 23340</span>
              </a>

              <span className="text-slate-600">|</span>

              {/* EMAIL */}
              <a
                href="mailto:kalpanajitendrasonkarbjp@gmail.com"
                className="hidden xl:flex items-center gap-1.5 hover:text-amber-300 transition-colors"
              >
                <i className="fa-solid fa-envelope text-orange-500" />
                <span>
                  kalpanajitendrasonkarbjp@gmail.com
                </span>
              </a>

              {/* SOCIAL */}
              <div className="flex items-center gap-1.5 pl-1">

                {/* FACEBOOK */}
                <a
                  href="https://facebook.com/kalpanajitendrasonkar"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Facebook"
                  className="w-7 h-7 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-600 transition-colors text-white text-[11px]"
                >
                  <i className="fa-brands fa-facebook-f" />
                </a>

                {/* INSTAGRAM */}
                <a
                  href="https://instagram.com/kalpanajitendrasonkar"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Instagram"
                  className="w-7 h-7 rounded-full bg-slate-800 flex items-center justify-center hover:bg-pink-600 transition-colors text-white text-[11px]"
                >
                  <i className="fa-brands fa-instagram" />
                </a>

                {/* WHATSAPP */}
                <a
                  href="https://wa.me/918299223340"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="WhatsApp"
                  className="w-7 h-7 rounded-full bg-slate-800 flex items-center justify-center hover:bg-emerald-600 transition-colors text-white text-[11px]"
                >
                  <i className="fa-brands fa-whatsapp" />
                </a>

              </div>

            </div>

          </div>

        </div>

      </div>

      {/* =====================================================
          MAIN NAVBAR
      ====================================================== */}
      <header className="sticky top-0 lg:top-[41px] z-50 bg-white/95 backdrop-blur-md shadow-md border-b border-orange-100">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="flex items-center justify-between h-20 gap-4">

            {/* =================================================
                BRAND
            ================================================== */}
            <Link
              href="/"
              onClick={closeMenu}
              className="flex items-center gap-3.5 group shrink-0"
            >

              {/* PROFILE IMAGE */}
              <div className="relative">

                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gradient-to-tr from-orange-500 to-amber-400 p-0.5 shadow-md group-hover:scale-105 transition-transform duration-200">

                  <div className="w-full h-full bg-white rounded-full flex items-center justify-center overflow-hidden">

                    <Image
                      src="/Kalpana.jpeg"
                      width={56}
                      height={56}
                      alt="Kalpana Sonkar"
                      className="w-full h-full object-cover object-top"
                      priority
                    />

                  </div>

                </div>

                {/* BJP BADGE */}
                <span className="absolute -bottom-1 -right-1 bg-green-600 text-white text-[9px] font-extrabold px-1.5 py-0.5 rounded-full border-2 border-white shadow-sm">
                  BJP
                </span>

              </div>

              {/* BRAND TEXT */}
              <div>

                <h1 className="text-xl sm:text-2xl font-black tracking-wide text-[#0b1f3a] group-hover:text-orange-500 transition-colors">
                  कल्पना सोनकर
                </h1>

                <p className="text-xs sm:text-sm font-semibold text-orange-500 flex items-center gap-1.5">

                  <span className="w-2 h-2 rounded-full bg-green-600 animate-pulse" />

                  जिला पंचायत अध्यक्ष

                </p>

              </div>

            </Link>

            {/* =================================================
                DESKTOP NAVIGATION
            ================================================== */}
            <nav className="hidden lg:flex items-center flex-1 justify-center">

              <div className="flex items-center space-x-1">

                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`
                      px-3.5 py-2
                      text-sm
                      rounded-lg
                      transition-all
                      duration-200
                      whitespace-nowrap
                      ${
                        isActive(link.href)
                          ? 'font-bold text-orange-500 border-b-2 border-orange-500'
                          : 'font-semibold text-slate-700 hover:text-orange-500 hover:bg-orange-50/80'
                      }
                    `}
                  >
                    {link.label}
                  </Link>
                ))}

              </div>

            </nav>

            {/* =================================================
                JAN SUNWAI DESKTOP CTA
            ================================================== */}
            <div className="hidden lg:flex items-center shrink-0">

              <Link
                href="/jan-sunwai"
                className="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-bold rounded-xl bg-gradient-to-br from-orange-500 to-amber-600 text-white shadow-md shadow-orange-500/20 hover:shadow-lg hover:shadow-orange-500/30 transition-all active:scale-95"
              >

                <span className="relative px-4 py-2 rounded-[10px] flex items-center gap-2">

                  <i className="fa-solid fa-handshake-angle text-amber-200" />

                  <span>
                    जनसुनवाई पोर्टल
                  </span>

                </span>

              </Link>

            </div>

            {/* =================================================
                MOBILE MENU BUTTON
            ================================================== */}
            <button
              type="button"
              onClick={() =>
                setIsMobileMenuOpen(!isMobileMenuOpen)
              }
              className="lg:hidden w-11 h-11 flex items-center justify-center rounded-xl text-slate-800 bg-slate-50 border border-slate-200 hover:text-orange-500 hover:border-orange-300 transition-all focus:outline-none focus:ring-2 focus:ring-orange-400"
              aria-label={
                isMobileMenuOpen
                  ? 'मेनू बंद करें'
                  : 'मेनू खोलें'
              }
              aria-expanded={isMobileMenuOpen}
            >

              <i
                className={`fa-solid ${
                  isMobileMenuOpen
                    ? 'fa-xmark'
                    : 'fa-bars-staggered'
                } text-xl`}
              />

            </button>

          </div>

        </div>

      </header>

      {/* =====================================================
          MOBILE MENU
          RIGHT → LEFT
      ====================================================== */}

      {isMobileMenuOpen && (
        <>

          {/* OVERLAY */}
          <div
            className="lg:hidden fixed inset-0 top-[81px] bg-black/40 backdrop-blur-[2px] z-[55]"
            onClick={closeMenu}
          />

          {/* SIDE MENU */}
          <aside
            className="
              lg:hidden
              fixed
              right-0
              top-[81px]
              w-1/2
              min-w-[280px]
              max-w-[380px]
              h-[calc(100vh-81px)]
              bg-white
              z-[60]
              shadow-[-12px_0_35px_rgba(0,0,0,0.15)]
              overflow-y-auto
              animate-slide-in-right
            "
          >

            <div className="p-4">

              {/* =============================================
                  MOBILE PROFILE HEADER
              ============================================== */}
              <div className="flex items-center gap-3 pb-4 mb-3 border-b border-orange-100">

                <div className="relative shrink-0">

                  <div className="w-11 h-11 rounded-full bg-gradient-to-tr from-orange-500 to-green-600 p-0.5">

                    <Image
                      src="/Kalpana.jpeg"
                      width={44}
                      height={44}
                      alt="Kalpana Sonkar"
                      className="w-full h-full rounded-full object-cover object-top"
                    />

                  </div>

                  <span className="absolute -bottom-1 -right-1 bg-green-600 text-white text-[7px] font-bold px-1 rounded-full border border-white">
                    BJP
                  </span>

                </div>

                <div className="min-w-0">

                  <p className="font-bold text-slate-800 truncate">
                    कल्पना सोनकर
                  </p>

                  <p className="text-xs text-orange-600 font-semibold truncate">
                    जिला पंचायत अध्यक्ष
                  </p>

                </div>

              </div>

              {/* =============================================
                  MOBILE NAVIGATION
              ============================================== */}
              <div className="space-y-1">

                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={closeMenu}
                    className={`
                      flex items-center justify-between
                      px-4 py-3
                      rounded-xl
                      text-sm
                      transition-all
                      duration-200
                      ${
                        isActive(link.href)
                          ? 'bg-orange-50 text-orange-600 font-bold translate-x-1'
                          : 'text-slate-700 font-semibold hover:bg-orange-50 hover:text-orange-600'
                      }
                    `}
                  >

                    <span>
                      {link.label}
                    </span>

                    <i className="fa-solid fa-chevron-right text-[10px] opacity-40" />

                  </Link>
                ))}

              </div>

              {/* =============================================
                  JAN SUNWAI MOBILE
              ============================================== */}
              <Link
                href="/jan-sunwai"
                onClick={closeMenu}
                className="mt-4 flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-gradient-to-r from-orange-500 to-amber-600 text-white text-sm font-bold shadow-md hover:shadow-lg transition-all active:scale-95"
              >

                <i className="fa-solid fa-handshake-angle" />

                जनसुनवाई में भाग लें

              </Link>

            </div>

          </aside>

        </>
      )}

    </>
  );
}
