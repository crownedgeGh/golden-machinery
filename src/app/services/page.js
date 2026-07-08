import Link from 'next/link';
import { FaWrench, FaTruck, FaHardHat, FaHandsHelping } from 'react-icons/fa';
import styles from './services.module.css';

export const metadata = {
  title: "Services | Golden Machinery",
  description: "Golden Machinery provides end-to-end services including custom manufacturing, installation, and maintenance of refinery machines."
};

export default function Services() {
  return (
    <>
      <section className={styles.servicesHeader}>
        <div className="container animate-fade-in">
          <h1>Our <span>Services</span></h1>
          <p>Delivering comprehensive support from manufacturing to maintenance, ensuring your operations run smoothly and efficiently.</p>
        </div>
      </section>

      <section className={styles.servicesContainer}>
        <div className={`container ${styles.serviceGrid}`}>
          
          <div className={styles.serviceCard}>
            <FaWrench className={styles.serviceIcon} />
            <h2>Custom Manufacturing</h2>
            <p>We design and manufacture high-capacity Pre-Cleaners, Destoners, and Polishers tailored to the specific requirements of your processing plant. Our modular and compact designs ensure maximum space efficiency.</p>
          </div>

          <div className={styles.serviceCard}>
            <FaTruck className={styles.serviceIcon} />
            <h2>Equipment Supply & Logistics</h2>
            <p>Golden Machinery ensures timely delivery of complete processing lines. We supply all necessary components, from Bucket Elevators to Belt Conveyors, facilitating a seamless setup of your facility.</p>
          </div>

          <div className={styles.serviceCard}>
            <FaHardHat className={styles.serviceIcon} />
            <h2>Installation & Setup</h2>
            <p>Our team of experts will assist with the installation of your machinery. We ensure that components like Cyclone, Divider & Ducting, and Silky systems are perfectly integrated for optimal performance and low power consumption.</p>
          </div>

          <div className={styles.serviceCard}>
            <FaHandsHelping className={styles.serviceIcon} />
            <h2>Maintenance & Support</h2>
            <p>We stand by our products with comprehensive after-sales support. Designed for easy maintenance, our machines guarantee longevity, but our support team is always ready to assist you with spare parts and technical advice.</p>
          </div>
          
        </div>
      </section>

      <section className={styles.ctaSection}>
        <div className="container">
          <h2>Ready to upgrade your processing line?</h2>
          <p style={{ marginBottom: '2rem', fontSize: '1.1rem' }}>Contact our team today to discuss your machinery requirements.</p>
          <Link href="/contact" className="btn btn-secondary">Get in Touch</Link>
        </div>
      </section>
    </>
  );
}
