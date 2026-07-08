import Link from 'next/link';
import { FaCogs, FaCheckCircle, FaTrophy, FaIndustry, FaArrowRight, FaEye } from 'react-icons/fa';
import Image from 'next/image';
import styles from './page.module.css';
import CallNowButton from '@/components/CallNowButton';

export default function Home() {
  return (
    <>
      {/* ─── HERO ─── */}
      <section className={styles.hero}>
        <div className={styles.heroGrid} />
        <div className={`${styles.heroContent} animate-fade-in`}>
          <div className={styles.heroBadge}>
            <span className={styles.heroBadgeDot} />
            Trusted Since 2010 · Based in Raipur, CG
          </div>

          <h1 className={styles.title}>
            GOLDEN <span>MACHINERY</span>
          </h1>
          <p className={styles.subtitle}>Innovative · Qualitative · Superior</p>
          <p className={`${styles.subtitleAccent} animate-fade-in-delay`}>
            Premier manufacturer of high-capacity rice, pulse & wheat refinery machines — engineered for performance, built to last.
          </p>

          <div className={`${styles.ctaGroup} animate-fade-in-delay-2`}>
            <Link href="/products" className="btn btn-white">
              Explore Products <FaArrowRight />
            </Link>
            <CallNowButton />
          </div>

          <div className={styles.heroStats}>
            <div className={styles.statItem}>
              <span className={styles.statValue}>500+</span>
              <span className={styles.statLabel}>Machines Installed</span>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statValue}>15+</span>
              <span className={styles.statLabel}>Years Experience</span>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statValue}>12</span>
              <span className={styles.statLabel}>Product Lines</span>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statValue}>100%</span>
              <span className={styles.statLabel}>Quality Assured</span>
            </div>
          </div>
        </div>
      </section>

      {/* ─── ABOUT / WHO WE ARE ─── */}
      <section className={`section ${styles.about}`}>
        <div className="container">
          <div className={styles.aboutInner}>
            <div className={styles.aboutTextCol}>
              
              <h2 className={styles.aboutTitle} style={{marginTop: '2rem'}}>
                Powering India's <span>Grain Processing</span> Industry
              </h2>
              <p className={styles.aboutDesc}>
                Golden Machinery is a premier manufacturer and supplier of top-tier refinery machines for rice, pulses, and wheat. Based in Raipur, we pride ourselves on delivering robust, highly efficient, and innovative solutions to the agricultural processing industry.
              </p>
              <div className={styles.aboutPoints}>
                {[
                  'ISO-compliant manufacturing processes',
                  'Custom capacity configurations available',
                  'Pan-India installation & support team',
                  'Energy-efficient, low-maintenance designs',
                ].map((pt) => (
                  <div key={pt} className={styles.aboutPoint}>
                    <div className={styles.aboutPointIcon}>✓</div>
                    {pt}
                  </div>
                ))}
              </div>
            </div>

            <div className={styles.aboutCardsCol}>
              <div className={styles.featureCard}>
                <div className={styles.featureIconWrap}>
                  <FaCogs className={styles.featureIcon} />
                </div>
                <h3>Innovative Technology</h3>
                <p>State-of-the-art machinery designed for maximum efficiency and yield.</p>
              </div>
              <div className={styles.featureCard}>
                <div className={styles.featureIconWrap}>
                  <FaCheckCircle className={styles.featureIcon} />
                </div>
                <h3>Qualitative Standards</h3>
                <p>Strict quality control to ensure durable and reliable machines.</p>
              </div>
              <div className={`${styles.featureCard} ${styles.featured}`}>
                <div className={styles.featureIconWrap}>
                  <FaTrophy className={styles.featureIcon} />
                </div>
                <h3>Superior Performance</h3>
                <p>High-capacity processing with low power consumption and easy maintenance — the benchmark in the industry.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── WHY CHOOSE US STRIP ─── */}
      <section className={styles.whyStrip}>
        <div className="container">
          <div className={styles.whyGrid}>
            {[
              { num: '500+', title: 'Plants Served', desc: 'Across India' },
              { num: '15+', title: 'Years of Expertise', desc: 'Established 2010' },
              { num: '12', title: 'Machine Categories', desc: 'Complete solutions' },
              { num: '24/7', title: 'After-Sales Support', desc: 'Always available' },
            ].map(({ num, title, desc }) => (
              <div key={title} className={styles.whyItem}>
                <div className={styles.whyNumber}>{num}</div>
                <div className={styles.whyItemTitle}>{title}</div>
                <div className={styles.whyItemDesc}>{desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── MACHINERY CATALOG ─── */}
      <section className={`section ${styles.gallery}`}>
        <div className="container">
          <div className={styles.galleryHeader}>
            <h2 className="section-title">Our Machinery Catalog</h2>
            <div className="title-accent" />
            <p className="section-subtitle" style={{ marginTop: '1rem' }}>
              Browse our comprehensive range of precision-engineered grain and pulse processing equipment.
            </p>
          </div>

          <div className={styles.galleryGrid}>
            {[1, 2, 3, 4].map((pageNum) => (
              <div key={pageNum} className={styles.galleryImageWrapper}>
                <Image
                  src={`/Golden Machinery_page-000${pageNum}.jpg`}
                  alt={`Machinery Catalog Page ${pageNum}`}
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: '100%', height: 'auto', display: 'block' }}
                />
                <div className={styles.galleryOverlay}>
                  <span className={styles.galleryOverlayText}>
                    <FaEye /> View Page {pageNum}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className={styles.galleryFooter}>
            <Link href="/products" className="btn btn-primary">
              View All Machinery Specs <FaArrowRight />
            </Link>
          </div>
        </div>
      </section>

      {/* ─── CTA BANNER ─── */}
      <section className={styles.ctaBanner}>
        <div className={styles.ctaBannerInner}>
          <h2 className={styles.ctaBannerTitle}>Ready to Upgrade Your Processing Line?</h2>
          <p className={styles.ctaBannerDesc}>
            Talk to our experts and get a customised quote for your plant's specific requirements. Fast response, no obligations.
          </p>
          <div className={styles.ctaBannerBtns}>
            <Link href="/contact" className={styles.btnDark}>
              Contact Us <FaArrowRight />
            </Link>
            <Link href="/products" className={styles.btnDark} style={{ background: 'rgba(10,22,40,0.15)', color: '#0a1628' }}>
              See Products
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
