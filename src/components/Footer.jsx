import Image from 'next/image';
import Link from 'next/link';
import styles from './Footer.module.css';

const FacebookIcon = ({ className }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
  </svg>
);

const InstagramIcon = ({ className }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.09.074 2.46.34 0 2.8 0 7.4v9.2c0 4.6 2.46 7.06 7.09 7.326 1.243.06 1.651.074 4.91.074s3.667-.014 4.91-.074c4.63-.266 7.09-2.726 7.09-7.326V7.4c0-4.6-2.46-7.06-7.09-7.326C15.667.014 15.259 0 12 0zm0 5.838A6.162 6.162 0 0118.162 12 6.162 6.162 0 0112 18.162 6.162 6.162 0 015.838 12 6.162 6.162 0 0112 5.838zm0 10.2A4.038 4.038 0 0016.038 12 4.038 4.038 0 0012 7.962 4.038 4.038 0 007.962 12 4.038 4.038 0 0012 16.038zm6.406-10.878a1.44 1.44 0 110 2.88 1.44 1.44 0 010-2.88z" />
  </svg>
);

const WhatsAppIcon = ({ className }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M20.52 3.449C18.24 1.245 15.24 0 12.045 0 5.463 0 .104 5.335.101 11.895c-.002 2.086.547 4.116 1.593 5.92L0 24l6.398-1.666a11.96 11.96 0 005.642 1.411h.005c6.58 0 11.939-5.337 11.942-11.9.003-3.172-1.233-6.155-3.467-8.396zM12.046 21.724c-1.758 0-3.486-.468-4.997-1.352l-.358-.21-3.712.964.99-3.593-.232-.365a9.927 9.927 0 01-1.505-5.263C2.234 6.452 6.643 2.062 12.052 2.062c2.65 0 5.14 1.026 7.009 2.885a9.9 9.9 0 012.897 7.106c-.003 5.504-4.477 9.671-9.912 9.671zm5.44-7.218c-.298-.149-1.76-.867-2.033-.964-.273-.097-.471-.149-.669.149-.198.298-.767.964-.939 1.163-.173.198-.346.223-.644.074-.298-.149-1.257-.463-2.393-1.474-.885-.789-1.484-1.76-1.657-2.056-.173-.297-.018-.459.13-.606.133-.133.298-.346.447-.518.149-.173.198-.298.298-.497.099-.198.05-.373-.024-.523-.074-.149-.669-1.609-.916-2.204-.242-.58-.486-.5-.669-.51l-.571-.009c-.198 0-.521.074-.793.373-.272.299-1.04 1.016-1.04 2.477 0 1.46 1.065 2.877 1.214 3.076.149.198 2.095 3.201 5.075 4.49.709.307 1.261.492 1.692.631.708.225 1.35.194 1.859.118.568-.085 1.759-.718 2.008-1.41.248-.692.248-1.286.173-1.409-.074-.123-.273-.198-.571-.347z" />
  </svg>
);

export default function Footer() {
  return (
    <footer className={styles.footer} role="contentinfo" style={{ position: 'relative', overflow: 'hidden' }}>
      <div className={styles.tricolor} />

      {/* Background Large Logo with 40% Opacity */}
      <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', opacity: 0.4, zIndex: 0, pointerEvents: 'none' }}>
        <Image src="/logo.webp" alt="BJP Background" width={600} height={600} style={{ objectFit: 'contain', filter: 'grayscale(0%)', borderRadius: "50%" }} />
      </div>

      <div className={styles.container} style={{ position: 'relative', zIndex: 1 }}>
        <div className={styles.grid}>
          <div className={styles.brand}>
            <div className={styles.logo}>
              <span className={styles.bjpBadge}>BJP</span>
              <span className={styles.name}>कल्पना सोनकर</span>
            </div>
            <p className={styles.tagline}>महिला नेतृत्व – जनसेवा और विकास</p>
            <p className={styles.bio}>
              जिला पंचायत अध्यक्ष, कौशाम्बी (उत्तर प्रदेश)।
              भारतीय जनता पार्टी। महिला सशक्तिकरण और सामाजिक विकास के लिए समर्पित।
            </p>
          </div>

          <div className={styles.col}>
            <h3 className={styles.colTitle}>त्वरित लिंक</h3>
            <ul className={styles.links}>
              <li><Link href="/">होम</Link></li>
              <li><Link href="/about">परिचय</Link></li>
              <li><Link href="/vision">जीवन दर्शन</Link></li>
              <li><Link href="/achievements">उपलब्धियाँ</Link></li>
              <li><Link href="/gallery">फोटो गैलरी</Link></li>
              <li><Link href="/contact">संपर्क</Link></li>
              <li><Link href="/jan-sunwai">जनसुनवाई</Link></li>
            </ul>
          </div>

          <div className={styles.col}>
            <h3 className={styles.colTitle}>संपर्क करें</h3>
            <address className={styles.address}>
              <p className={styles.contactRow}>
                <span className={styles.contactIcon} aria-hidden="true">📍</span>
                <span>कौशाम्बी, उत्तर प्रदेश</span>
              </p>
              <p className={styles.contactRow}>
                <span className={styles.contactIcon} aria-hidden="true">📞</span>
                <a href="tel:+918299223340">+91 82992 23340</a>
              </p>
              <p className={styles.contactRow}>
                <span className={styles.contactIcon} aria-hidden="true">✉️</span>
                <a href="mailto:kalpanajitendrasonkarbjp@gmail.com">kalpanajitendrasonkarbjp@gmail.com</a>
              </p>
            </address>
            <div className={styles.socials}>
              <a href="https://facebook.com/kalpanajitendrasonkar" target="_blank" rel="noreferrer" title="Facebook" className={styles.socialLink} style={{ color: '#1877F2' }}><FacebookIcon className={styles.svgIconLg} /></a>
              <a href="https://instagram.com/kalpanajitendrasonkar" target="_blank" rel="noreferrer" title="Instagram" className={styles.socialLink} style={{ color: '#E4405F' }}><InstagramIcon className={styles.svgIconLg} /></a>
              <a href="https://wa.me/918299223340" target="_blank" rel="noreferrer" title="WhatsApp" className={styles.socialLink} style={{ color: '#25D366' }}><WhatsAppIcon className={styles.svgIconLg} /></a>
            </div>
          </div>
        </div>

        <div className={styles.bottom}>
          <div style={{ marginBottom: '10px' }}>
            <Link href="/admin" style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.85rem', textDecoration: 'none' }}>Admin Login</Link>
          </div>
          <p>© {new Date().getFullYear()} कल्पना सोनकर। सर्वाधिकार सुरक्षित।</p>
          <p className={styles.slogan}>🇮🇳 बेटी बचाओ, बेटी पढ़ाओ – नारी शक्ति वंदन</p>
        </div>
      </div>
    </footer>
  );
}
