'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import styles from './Navbar.module.css';

const navLinks = [
  { href: '/', label: 'होम' },
  { href: '/about', label: 'परिचय' },
  { href: '/achievements', label: 'उपलब्धियाँ' },
  { href: '/jan-sunwai', label: 'जनसुनवाई', cta: true },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => { setMenuOpen(false); }, [pathname]);

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`} id="top-nav">
      <div className={styles.tricolor} />
      <nav className={styles.nav}>
        <div className={styles.container}>
          <Link href="/" className={styles.brand} aria-label="कल्पना सोनकर – होम">
            <Image src="/Kalpana.jpeg" alt="Kalpana Sonkar" width={36} height={36} style={{ objectFit: 'cover', borderRadius: '50%' }} priority />
            <div className={styles.brandText}>
              <span className={styles.brandName}>कल्पना सोनकर</span>
              <span className={styles.brandRole}>जिला पंचायत अध्यक्ष</span>
            </div>
          </Link>

          <button
            className={`${styles.hamburger} ${menuOpen ? styles.open : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="मेनू खोलें/बंद करें"
            aria-expanded={menuOpen}
          >
            <span /><span /><span />
          </button>

          <ul className={`${styles.navList} ${menuOpen ? styles.navOpen : ''}`} role="list">
            {navLinks.map(({ href, label, cta }) => (
              <li key={href}>
                {cta ? (
                  <Link href={href} className={styles.navCta}>{label}</Link>
                ) : (
                  <Link
                    href={href}
                    className={`${styles.navLink} ${pathname === href ? styles.active : ''}`}
                  >
                    {label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
}
