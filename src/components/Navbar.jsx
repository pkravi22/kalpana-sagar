
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

  const isActive = (href) =>
    href === '/' ? pathname === '/' : pathname.startsWith(href);

  const closeMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* =====================================================
          TRICOLOR TOP BORDER
      ====================================================== */}
      <div className="fixed top-0 left-0 right-0 z-[60] h-1 bg-gradient-to-r from-orange-500 via-white to-green-600" />

      {/* =====================================================
          TOP INFORMATION BAR
          JITENDRA STYLE
      ====================================================== */}
      <div className="hidden lg:flex bg-gradient-to-r from-[#0b1f3a] via-slate-900 to-[#0b1f3a] text-slate-200 text-xs sm:text-sm py-2 px-4 border-b border-amber-500/30 sticky top-1 z-50 shadow-sm">

        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2 w-full">

          {/* LEFT SIDE */}
          <div className="flex items-center space-x-3 font-medium">

            {/* BJP Badge */}
            <span className="inline-flex items-center gap-1.5 bg-orange-500 text-white px-2.5 py-1 rounded-full text-[11px] font-bold tracking-wide shadow-sm">

              <Image
                src="/logo.webp"
                width={24}
                height={24}
                alt="BJP logo"
                className="w-6 h-6 rounded-full object-cover"
                priority
              />

              भाजपा कौशाम्बी
            </span>

            {/* Slogan */}
            <span className="text-amber-300 font-semibold tracking-wide">
              || राष्ट्र प्रथम, सेवा ही संकल्प ||
            </span>

          </div>

          {/* RIGHT SIDE */}
          <div className="flex items-center gap-4 text-xs font-semibold">

            {/* Phone */}
            <a
              href="tel:+918299223340"
              className="hover:text-amber-300 transition-colors flex items-center gap-1.5"
            >
              <i className="fa-solid fa-phone-volume text-orange-500" />
              <span>+91 82992 23340</span>
            </a>

            <span className="text-slate-600">|</span>

            {/* Email */}
            <a
              href="mailto:kalpanajitendrasonkarbjp@gmail.com"
              className="hidden md:flex items-center gap-1.5 hover:text-amber-300 transition-colors"
            >
              <i className="fa-solid fa-envelope text-orange-500" />
              <span>
                kalpanajitendrasonkarbjp@gmail.com
              </span>
            </a>

            {/* Social Icons */}
            <div className="flex items-center gap-2 pl-2">

              {/* Facebook */}
              <a
                href="https://facebook.com/kalpanajitendrasonkar"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="w-7 h-7 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-600 transition-colors text-white text-[11px]"
              >
                <i className="fa-brands fa-facebook-f" />
              </a>

              {/* Instagram */}
              <a
                href="https://instagram.com/kalpanajitendrasonkar"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="w-7 h-7 rounded-full bg-slate-800 flex items-center justify-center hover:bg-pink-600 transition-colors text-white text-[11px]"
              >
                <i className="fa-brands fa-instagram" />
              </a>

              {/* WhatsApp */}
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

      {/* =====================================================
          MAIN NAVBAR
      ====================================================== */}
      <header className="bg-white/95 backdrop-blur-md sticky top-0 lg:top-[41px] z-40 shadow-md border-b border-orange-100">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="flex items-center justify-between h-20">

            {/* =================================================
                BRAND
            ================================================== */}
            <Link
              href="/"
              onClick={closeMenu}
              className="flex items-center gap-3.5 group"
            >

              {/* Profile Image */}
              <div className="relative">

                {/* Orange Circular Border */}
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gradient-to-tr from-orange-500 to-amber-400 p-0.5 shadow-md group-hover:scale-105 transition-transform">

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

                {/* BJP Badge */}
                <span className="absolute -bottom-1 -right-1 bg-green-600 text-white text-[9px] font-extrabold px-1.5 py-0.5 rounded-full border-2 border-white">
                  BJP
                </span>

              </div>

              {/* NAME + ROLE */}
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
            <nav className="hidden lg:flex items-center space-x-1">

              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`
                    px-3.5 py-2
                    text-sm
                    transition-all
                    rounded-lg
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

            </nav>

            {/* =================================================
                JAN SUNWAI CTA
            ================================================== */}
            <div className="hidden sm:flex items-center gap-3">

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
            <div className="lg:hidden flex items-center">

              <button
                onClick={() =>
                  setIsMobileMenuOpen(!isMobileMenuOpen)
                }
                className="text-slate-800 hover:text-orange-500 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                aria-label="Toggle Menu"
                aria-expanded={isMobileMenuOpen}
              >

                <i
                  className={`fa-solid ${
                    isMobileMenuOpen
                      ? 'fa-xmark'
                      : 'fa-bars-staggered'
                  } text-2xl`}
                />

              </button>

            </div>

          </div>
        </div>

        {/* =====================================================
            MOBILE MENU
        ====================================================== */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-orange-100 shadow-xl px-4 pt-3 pb-6 space-y-2">

            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                className={`
                  block px-4 py-2.5 rounded-lg font-semibold
                  ${
                    isActive(link.href)
                      ? 'text-orange-500 bg-orange-50 font-bold'
                      : 'text-slate-700 hover:bg-orange-50 hover:text-orange-500'
                  }
                `}
              >
                {link.label}
              </Link>
            ))}

            {/* Mobile Jan Sunwai */}
            <div className="pt-2">

              <Link
                href="/jan-sunwai"
                onClick={closeMenu}
                className="block w-full text-center py-3 rounded-xl bg-gradient-to-r from-orange-500 to-amber-600 text-white font-bold shadow-md"
              >

                <i className="fa-solid fa-handshake-angle mr-2" />

                जनसुनवाई में भाग लें

              </Link>

            </div>

          </div>
        )}

      </header>
    </>
  );
}
