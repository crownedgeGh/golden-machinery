import Image from 'next/image';
import { productsData } from './data';
import styles from './products.module.css';
import CopyButton from '@/components/CopyButton';
import CallNowButton from '@/components/CallNowButton';

export const metadata = {
  title: "Products | Golden Machinery",
  description: "Browse our comprehensive range of rice, pulse, and wheat refinery machines including Pre-Cleaners, Vibro-Cleaners, Destoners, Whitening machines, and Conveyors."
};

export default function Products() {
  return (
    <>
      <section className={styles.productsHeader}>
        <div className="container animate-fade-in">
          <h1>Our Machinery</h1>
          <p>We offer a diverse range of high-quality, high-capacity machinery designed to meet the rigorous demands of modern grain and pulse processing.</p>
        </div>
      </section>

      {/* ── Digital Brochure ── */}
      <section className={styles.brochureSection}>
        <div className="container">
          <h2 className="section-title">Digital Brochure</h2>
          <div className="title-accent" />
          <div className={styles.brochureGrid}>
            {[2, 3, 4].map((pageNum) => (
              <div key={pageNum} className={styles.brochureImageWrapper}>
                <Image
                  src={`/Golden Machinery_page-000${pageNum}.jpg`}
                  alt={`Machinery Catalog Page ${pageNum}`}
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: '100%', height: 'auto', display: 'block' }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Machine Specifications ── */}
      <section className={styles.productsContainer}>
        <div className="container">
          <h2 className="section-title">Machine Specifications</h2>
          <div className="title-accent" />

          <div className={styles.productGrid}>
            {productsData.map((product) => (
              <div key={product.id} className={styles.productCard}>
                <div className={styles.productInfo}>
                  <div className={styles.cardHeader}>
                    <h3>{product.name}</h3>
                    <span className="badge">Premium</span>
                  </div>
                  <p className={styles.productDesc}>{product.description}</p>

                  {product.features && product.features.length > 0 && (
                    <>
                      <h4 className={styles.featuresTitle}>Features</h4>
                      <ul className={styles.featuresList}>
                        {product.features.map((feature, idx) => (
                          <li key={idx}>{feature}</li>
                        ))}
                      </ul>
                    </>
                  )}

                  {product.models && product.models.length > 0 && (
                    <div className={styles.tableScroll}>
                      <table className={styles.specTable}>
                        <thead>
                          <tr>
                            <th>Model</th>
                            <th>Capacity (Tph)</th>
                            <th>Power (Hp)</th>
                          </tr>
                        </thead>
                        <tbody>
                          {product.models.map((model, idx) => (
                            <tr key={idx}>
                              <td>{model.model}</td>
                              <td>{model.capacity}</td>
                              <td>{model.power}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Strip ── */}
      <section className={styles.productsCta}>
        <div className="container">
          <div className={styles.ctaInner}>
            <div>
              <h3>Need a custom specification?</h3>
              <p>Call us or drop a message — we respond fast.</p>
            </div>
            <div className={styles.ctaActions}>
              <CallNowButton />
              <div className={styles.ctaContact}>
                <span>8897219093</span>
                <CopyButton text="8897219093" />
              </div>
              <div className={styles.ctaContact}>
                <a href="mailto:goldenmachineryrajim@gmail.com">goldenmachineryrajim@gmail.com</a>
                <CopyButton text="goldenmachineryrajim@gmail.com" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
