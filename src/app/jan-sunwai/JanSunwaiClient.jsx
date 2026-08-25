'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useReveal } from '@/hooks/useReveal';
import styles from './jan-sunwai.module.css';

const faqs = [
  { q: 'जनसुनवाई क्या है?', a: 'जनसुनवाई एक ऐसी व्यवस्था है जिसके माध्यम से आप अपनी समस्याएँ, शिकायतें या सुझाव सीधे कल्पना सोनकर जी तक पहुँचा सकते हैं। महिलाओं की समस्याओं को विशेष प्राथमिकता दी जाती है।' },
  { q: 'मेरी समस्या का समाधान कब तक होगा?', a: 'आपकी समस्या दर्ज होने के बाद 7 कार्य दिवसों के भीतर आपसे संपर्क किया जाएगा। जटिल मामलों में यह समय सीमा थोड़ी अधिक हो सकती है।' },
  { q: 'क्या महिलाएँ सीधे मिल सकती हैं?', a: 'हाँ, महिलाएँ हमारे कौशाम्बी कार्यालय में मंगलवार और गुरुवार को विशेष महिला जनसुनवाई के लिए आ सकती हैं। इसके अलावा सोमवार–शनिवार 10 AM–5 PM भी उपलब्ध रहती हैं।' },
];

const MapPinIcon = ({ className }) => <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>;
const PhoneIcon = ({ className }) => <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>;
const MailIcon = ({ className }) => <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>;
const ClockIcon = ({ className }) => <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>;

const contacts = [
  { icon: <MapPinIcon className={styles.svgContactIcon} />, label: 'कार्यालय', value: 'जिला पंचायत कार्यालय, कौशाम्बी, उत्तर प्रदेश' },
  { icon: <PhoneIcon className={styles.svgContactIcon} />, label: 'दूरभाष', value: '+91 82992 23340', href: 'tel:+918299223340' },
  { icon: <MailIcon className={styles.svgContactIcon} />, label: 'ईमेल', value: 'kalpanajitendrasonkarbjp@gmail.com', href: 'mailto:kalpanajitendrasonkarbjp@gmail.com' },
  { icon: <ClockIcon className={styles.svgContactIcon} />, label: 'समय', value: 'सोमवार–शनिवार, 10:00 AM – 5:00 PM' },
];

export default function JanSunwaiClient() {
  useReveal();

  const [form, setForm] = useState({ name: '', mobile: '', village: '', subject: '', message: '' });
  const [publicFeed, setPublicFeed] = useState([]);
  
  useEffect(() => {
    fetch('/api/jan-sunwai')
      .then(res => res.json())
      .then(data => {
        if(Array.isArray(data)) setPublicFeed(data);
      })
      .catch(console.error);
  }, []);
  const [status, setStatus] = useState('idle');
  const [openFaq, setOpenFaq] = useState(null);

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
    <>
      {/* PAGE HERO */}
      <section
        className="page-hero"
        aria-label="जनसुनवाई"
        style={{ position: 'relative', padding: 0 }}
      >
        <Image
          src="/kalpanaJi.jpg"
          alt="कल्पना सोनकर"
          width={1920}
          height={200}
          style={{ width: '100%', height: '300px', marginTop: "80px", display: 'block' }}
          priority
        />
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(255,255,255,0.3)', zIndex: 1 }} />
        <div className="container" style={{ position: 'absolute', top: '65%', left: '25%', transform: 'translate(-50%, -50%)', zIndex: 2, width: '100%', textAlign: 'center' }}>
          <h1 className="h1 hindi reveal" style={{ color: '#3E2723' }}>जनसुनवाई</h1>
          <p className="hindi reveal reveal-delay-1" style={{ color: '#4e342e', marginTop: '0.75rem', fontSize: '1.05rem', fontWeight: 600 }}>
            कल्पना सोनकर जी से अपनी समस्या साझा करें
          </p>
          <nav className="breadcrumb" aria-label="ब्रेडक्रम्ब" style={{ justifyContent: 'center', marginTop: '1rem' }}>
            <Link href="/" style={{ color: '#4e342e', fontWeight: 500 }}>होम</Link>
            <span style={{ color: '#4e342e' }}>›</span>
            <span style={{ color: '#4e342e', fontWeight: 500 }}>जनसुनवाई</span>
          </nav>
        </div>
      </section>

      {/* JAN SUNWAI GRID */}
      <section className={`section ${styles.formSection}`} aria-label="जनसुनवाई फ़ॉर्म">
        <div className="container">
          <div className={styles.formGrid}>
            {/* Intro */}
            <div className={`${styles.formIntro} reveal`}>
              <span className="label">महिला नेतृत्व</span>
              <h2 className="h2 hindi mt-2">अपनी बात हम तक<br />पहुँचाएँ</h2>
              <div className={styles.divider} />
              <p className="body-lg hindi" style={{ color: '#4b5563', marginBottom: '1.25rem' }}>
                कल्पना सोनकर जी का संकल्प है कि जिले की कोई भी महिला
                अपनी समस्या के साथ अकेली न रहे। जनसुनवाई फ़ॉर्म भरकर
                आप सीधे उनके कार्यालय तक अपनी बात पहुँचा सकती हैं।
              </p>
              <ul className={styles.introList}>
                <li className="hindi">✅ हर शिकायत को गंभीरता से लिया जाएगा</li>
                <li className="hindi">✅ 7 दिनों के भीतर प्रतिक्रिया</li>
                <li className="hindi">✅ महिलाओं की समस्याओं को विशेष प्राथमिकता</li>
                <li className="hindi">✅ नि:शुल्क सेवा – कोई शुल्क नहीं</li>
              </ul>
            </div>

            {/* Form */}
            <div className={`${styles.formCard} reveal reveal-delay-2`}>
              {status === 'success' ? (
                <div className={styles.successMsg}>
                  <span className={styles.successIcon}>✅</span>
                  <h3 className="hindi h3">आपकी समस्या दर्ज हो गई!</h3>
                  <p className="hindi" style={{ color: '#4b5563', marginTop: '0.5rem' }}>
                    हम शीघ्र ही आपसे संपर्क करेंगे। आपका धन्यवाद।
                  </p>
                  <button className="btn btn-secondary" style={{ marginTop: '1.5rem' }} onClick={() => setStatus('idle')}>
                    नई समस्या दर्ज करें
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate aria-label="जनसुनवाई फ़ॉर्म">
                  <h3 className={`h3 hindi ${styles.formTitle}`}>जनसुनवाई फ़ॉर्म</h3>

                  <div className={styles.formRow}>
                    <div className={styles.field}>
                      <label htmlFor="js-name" className={`${styles.label} hindi`}>पूरा नाम *</label>
                      <input id="js-name" name="name" type="text" required value={form.name} onChange={handleChange} className={styles.input} placeholder="आपका नाम" />
                    </div>
                    <div className={styles.field}>
                      <label htmlFor="js-mobile" className={`${styles.label} hindi`}>मोबाइल नंबर *</label>
                      <input id="js-mobile" name="mobile" type="tel" required value={form.mobile} onChange={handleChange} className={styles.input} placeholder="10 अंकों का नंबर" pattern="[0-9]{10}" />
                    </div>
                  </div>

                  <div className={styles.field}>
                    <label htmlFor="js-village" className={`${styles.label} hindi`}>गाँव / शहर *</label>
                    <input id="js-village" name="village" type="text" required value={form.village} onChange={handleChange} className={styles.input} placeholder="आपका गाँव या शहर" />
                  </div>

                  <div className={styles.field}>
                    <label htmlFor="js-subject" className={`${styles.label} hindi`}>समस्या का विषय *</label>
                    <select id="js-subject" name="subject" required value={form.subject} onChange={handleChange} className={styles.input}>
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

                  <div className={styles.field}>
                    <label htmlFor="js-message" className={`${styles.label} hindi`}>समस्या का विवरण *</label>
                    <textarea id="js-message" name="message" required rows={5} value={form.message} onChange={handleChange} className={`${styles.input} ${styles.textarea}`} placeholder="अपनी समस्या विस्तार से लिखें..." />
                  </div>

                  {status === 'error' && (
                    <p className="hindi" style={{ color: '#dc2626', marginBottom: '1rem', fontSize: '0.9rem' }}>
                      ❌ कुछ त्रुटि हुई। कृपया पुनः प्रयास करें।
                    </p>
                  )}

                  <button type="submit" className={`btn btn-primary ${styles.submitBtn}`} disabled={status === 'loading'}>
                    {status === 'loading' ? '⏳ प्रेषित हो रहा है...' : 'समस्या दर्ज करें →'}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      
      {/* PUBLIC FEED */}
      <section className={`section ${styles.feedSection}`} aria-label="जनसुनवाई फ़ीड">
        <div className="container">
          <header className="section-header reveal">
            <span className="label">पारदर्शिता और जनसेवा</span>
            <h2 className="h2 hindi">सफलतापूर्वक सुलझाई गई समस्याएँ</h2>
            <div className="divider"><span className="divider-dot" /></div>
            <p className="hindi" style={{ textAlign: 'center', color: '#6b7280', marginTop: '1rem', maxWidth: '600px', margin: '1rem auto 0' }}>
              यह सूची उन जनसमस्याओं को दर्शाती है जिन पर हमारे कार्यालय द्वारा त्वरित कार्यवाही की गई है और जिनका समाधान हो चुका है।
            </p>
          </header>
          
          <div className={styles.feedGrid}>
            {publicFeed.length === 0 ? (
              <div className={styles.noData}>
                <span style={{ fontSize: '2rem', display: 'block', marginBottom: '0.5rem' }}>📋</span>
                <h3 className="hindi h3" style={{ color: '#4b5563', marginBottom: '0.5rem' }}>अभी कोई सार्वजनिक डेटा उपलब्ध नहीं है</h3>
                <p className="hindi">जैसे ही समस्याओं का समाधान होगा, उन्हें यहाँ प्रदर्शित किया जाएगा।</p>
              </div>
            ) : (
              publicFeed.map((item, idx) => (
                <div key={item.id || idx} className={`${styles.feedCard} reveal reveal-delay-${(idx % 3) + 1}`}>
                  <div className={styles.feedHeader}>
                    <span className={`hindi ${styles.feedName}`}>{item.name} <span style={{color: '#9ca3af', fontWeight: 'normal', fontSize: '0.9rem'}}>({item.village})</span></span>
                    <span className={styles.feedDate}>{new Date(item.date).toLocaleDateString('hi-IN')}</span>
                  </div>
                  
                  <span className={`hindi ${styles.feedSubject}`}>{item.subject}</span>
                  
                  <div className={styles.feedProblemBox}>
                    <div className={`hindi ${styles.feedProblemLabel}`}>
                      <span aria-hidden="true">🔴</span> समस्या:
                    </div>
                    <p className={`hindi ${styles.feedProblemText}`}>"{item.message}"</p>
                  </div>
                  
                  {item.response && (
                    <div className={styles.feedSolutionBox}>
                      <div className={`hindi ${styles.feedSolutionLabel}`}>
                        <span aria-hidden="true">✅</span> समाधान / कार्यवाही:
                      </div>
                      <p className={`hindi ${styles.feedSolutionText}`}>{item.response}</p>
                    </div>
                  )}
                </div>
              ))
            )}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className={`section ${styles.faqSection}`} aria-label="सामान्य प्रश्न">
        <div className="container">
          <header className="section-header reveal">
            <span className="label">सामान्य प्रश्न</span>
            <h2 className="h2 hindi">अक्सर पूछे जाने वाले प्रश्न</h2>
            <div className="divider"><span className="divider-dot" /></div>
          </header>

          <div className={styles.faqs}>
            {faqs.map((faq, i) => (
              <div key={i} className={`${styles.faqItem} reveal reveal-delay-${i + 1}`}>
                <button className={`${styles.faqQ} hindi`} onClick={() => setOpenFaq(openFaq === i ? null : i)} aria-expanded={openFaq === i}>
                  <span>{faq.q}</span>
                  <span className={`${styles.faqToggle} ${openFaq === i ? styles.open : ''}`}>▼</span>
                </button>
                {openFaq === i && (
                  <div className={`${styles.faqA} hindi`}>{faq.a}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className={`section ${styles.contactSection}`} aria-label="संपर्क">
        <div className="container">
          <header className="section-header reveal">
            <span className="label">संपर्क जानकारी</span>
            <h2 className="h2 hindi">हमसे मिलें</h2>
            <div className="divider"><span className="divider-dot" /></div>
          </header>

          <div className="grid-4">
            {contacts.map((c, i) => (
              <div key={i} className={`${styles.contactCard} reveal reveal-delay-${i + 1}`}>
                <span className={styles.contactIcon}>{c.icon}</span>
                <p className={`${styles.contactLabel}`}>{c.label}</p>
                {c.href ? (
                  <a href={c.href} className={`hindi ${styles.contactValue}`}>{c.value}</a>
                ) : (
                  <p className={`hindi ${styles.contactValue}`}>{c.value}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
