```jsx
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import styles from './Navbar.module.css';

const navLinks = [
  { href: '/', label: 'होम' },
  { href: '/about', label: 'परिचय' },
  { href: '/vision', label: 'जीवन दर्शन' },
  { href: '/achievements', label: 'उपलब्धियाँ' },
  { href: '/gallery', label: 'फोटो गैलरी' },
  { href: '/contact', label: 'संपर्क' },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const isActive = (href) => {
    if (href === '/') {
      return pathname === '/';
    }

    return pathname.startsWith(href);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <>
      {/* Top Tricolor Border */}
      <div className={styles.tricolor} />

      {/* Top Information Bar */}
      <div className={styles.topbar}>
        <div className={styles.topbarInner}>

          {/* Left */}
          <div className={styles.topbarLeft}>
            <span className={styles.topBadge}>
              <Image
                src="/logo.webp"
                alt="BJP logo"
                width={20}
                height={20}
                className={styles.topBadgeLogo}
                priority
              />
              भाजपा कौशाम्बी
            </span>

            <span className={styles.topSlogan}>
              || राष्ट्र प्रथम, सेवा ही संकल्प ||
            </span>
          </div>

          {/* Right */}
          <div className={styles.topbarRight}>

            <a
              href="tel:+918299223340"
              className={styles.topLink}
            >
              <i className="fa-solid fa-phone-volume" />
              <span>+91 82992 23340</span>
            </a>

            <span className={styles.separator}>|</span>

            <a
              href="mailto:kalpanajitendrasonkarbjp@gmail.com"
              className={styles.topLink}
            >
              <i className="fa-solid fa-envelope" />
              <span>kalpanajitendrasonkarbjp@gmail.com</span>
            </a>

            {/* Social Icons */}
            <div className={styles.topSocials}>

              <a
                href="https://facebook.com/kalpanajitendrasonkar"
                target="_blank"
                rel="noreferrer"
                className={styles.topSocialLink}
                aria-label="Facebook"
              >
                <i className="fa-brands fa-facebook-f" />
              </a>

              <a
                href="https://instagram.com/kalpanajitendrasonkar"
                target="_blank"
                rel="noreferrer"
                className={styles.topSocialLink}
                aria-label="Instagram"
              >
                <i className="fa-brands fa-instagram" />
              </a>

              <a
                href="https://wa.me/918299223340"
                target="_blank"
                rel="noreferrer"
                className={styles.topSocialLink}
                aria-label="WhatsApp"
              >
                <i className="fa-brands fa-whatsapp" />
              </a>

            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <header
        className={`${styles.header} ${
          scrolled ? styles.scrolled : ''
        }`}
        id="top-nav"
      >
        <nav className={styles.nav}>
          <div className={styles.container}>

            {/* Brand */}
            <Link
              href="/"
              className={styles.brand}
              onClick={closeMenu}
              aria-label="कल्पना सोनकर – होम"
            >
              <div className={styles.brandImageWrapper}>
                <Image
                  src="/Kalpana.jpeg"
                  alt="Kalpana Sonkar"
                  width={56}
                  height={56}
                  className={styles.brandImage}
                  priority
                />

                <span className={styles.bjpBadge}>
                  BJP
                </span>
              </div>

              <div className={styles.brandText}>
                <span className={styles.brandName}>
                  कल्पना सोनकर
                </span>

                <span className={styles.brandRole}>
                  जिला पंचायत अध्यक्ष
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <ul
              className={`${styles.navList} ${
                menuOpen ? styles.navOpen : ''
              }`}
              role="list"
            >
              {navLinks.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    onClick={closeMenu}
                    className={`${styles.navLink} ${
                      isActive(href) ? styles.active : ''
                    }`}
                  >
                    {label}
                  </Link>
                </li>
              ))}

              {/* Jan Sunwai CTA */}
              <li>
                <Link
                  href="/jan-sunwai"
                  onClick={closeMenu}
                  className={styles.navCta}
                >
                  <i className="fa-solid fa-handshake-angle" />
                  <span>जनसुनवाई पोर्टल</span>
                </Link>
              </li>
            </ul>

            {/* Mobile Hamburger */}
            <button
              className={`${styles.hamburger} ${
                menuOpen ? styles.open : ''
              }`}
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="मेनू खोलें/बंद करें"
              aria-expanded={menuOpen}
            >
              <span />
              <span />
              <span />
            </button>

          </div>
        </nav>
      </header>
    </>
  );
}
```
