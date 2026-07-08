'use client';

import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import CopyButton from '@/components/CopyButton';
import CallNowButton from '@/components/CallNowButton';
import styles from './contact.module.css';

const PHONE = '7078677963';
const EMAIL = 'goldenmachineryrajim@gmail.com';

export default function Contact() {
  return (
    <>
      <section className={styles.contactHeader}>
        <div className="container animate-fade-in">
          <h1>Contact <span>Us</span></h1>
          <p>We're here to help and answer any question you might have. We look forward to hearing from you.</p>
          <div className={styles.headerCta}>
            <CallNowButton />
          </div>
        </div>
      </section>

      <section className={styles.contactContainer}>
        <div className={styles.contactGrid}>

          <div className={styles.contactInfo}>
            <h2>Get In Touch</h2>

            <div className={styles.infoItem}>
              <FaMapMarkerAlt className={styles.infoIcon} />
              <div className={styles.infoText}>
                <h3>Our Location</h3>
                <p>Champaran Road,<br />Near Hanuman Agro Ghont,<br />Distt. Raipur, (CG) — 493885</p>
              </div>
            </div>

            <div className={styles.infoItem}>
              <FaPhoneAlt className={styles.infoIcon} />
              <div className={styles.infoText}>
                <h3>Phone Number</h3>
                <div className={styles.copyRow}>
                  <a href={`tel:+91${PHONE}`} className={styles.contactLink}>+91 {PHONE}</a>
                  <CopyButton text={PHONE} />
                </div>
              </div>
            </div>

            <div className={styles.infoItem}>
              <FaEnvelope className={styles.infoIcon} />
              <div className={styles.infoText}>
                <h3>Email Address</h3>
                <div className={styles.copyRow}>
                  <a href={`mailto:${EMAIL}`} className={styles.contactLink}>{EMAIL}</a>
                  <CopyButton text={EMAIL} />
                </div>
              </div>
            </div>
          </div>

          <div className={styles.contactForm}>
            <h2>Send us a Message</h2>
            <form action="#" method="POST">
              <div className={styles.formGroup}>
                <label htmlFor="name">Full Name</label>
                <input type="text" id="name" name="name" required placeholder="Your full name" />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="email">Email Address</label>
                <input type="email" id="email" name="email" required placeholder="you@example.com" />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="phone">Phone Number</label>
                <input type="tel" id="phone" name="phone" placeholder="Your contact number" />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="message">Your Message</label>
                <textarea id="message" name="message" rows="5" required placeholder="How can we help you?" />
              </div>
              <button type="submit" className={`btn btn-primary ${styles.submitBtn}`}>Send Message</button>
            </form>
          </div>

        </div>
      </section>
    </>
  );
}
