import Link from 'next/link';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import CopyButton from './CopyButton';
import './Footer.css';

const PHONE = '7078677963';
const EMAIL = 'goldenmachineryrajim@gmail.com';

const Footer = () => {
  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/products', label: 'Products' },
    { href: '/services', label: 'Services' },
    { href: '/contact', label: 'Contact Us' },
  ];

  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="container">
          <div className="footer-content">
            {/* Brand */}
            <div className="footer-brand">
              <div className="logo-mark">GOLDEN <span>MACHINERY</span></div>
              <p className="tagline">Innovative · Qualitative · Superior</p>
              <p className="brand-desc">
                Leading manufacturer of high-quality rice, pulse, and wheat refinery machines. Based in Raipur, Chhattisgarh — serving India since 2010.
              </p>
            </div>

            {/* Quick Links */}
            <div className="footer-col">
              <h4>Quick Links</h4>
              <nav className="footer-nav">
                {navLinks.map(({ href, label }) => (
                  <Link key={href} href={href} className="footer-nav-link">
                    {label}
                  </Link>
                ))}
              </nav>
            </div>

            {/* Contact */}
            <div className="footer-col">
              <h4>Contact Us</h4>
              <div className="contact-items">
                <div className="contact-item">
                  <div className="contact-icon-wrap">
                    <FaMapMarkerAlt className="contact-icon" />
                  </div>
                  <span>Champaran Road, Near Hanuman Agro Ghont, Distt. Raipur, CG — 493885</span>
                </div>
                <div className="contact-item">
                  <div className="contact-icon-wrap">
                    <FaPhoneAlt className="contact-icon" />
                  </div>
                  <div className="contact-copy-row">
                    <a href={`tel:+91${PHONE}`}>+91 {PHONE}</a>
                    <CopyButton text={PHONE} />
                  </div>
                </div>
                <div className="contact-item">
                  <div className="contact-icon-wrap">
                    <FaEnvelope className="contact-icon" />
                  </div>
                  <div className="contact-copy-row">
                    <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
                    <CopyButton text={EMAIL} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="footer-bottom">
        <div className="container">
          <div className="footer-bottom-inner">
            <p>© {new Date().getFullYear()} Golden Machinery. All Rights Reserved.</p>
            <div className="footer-bottom-links">
              <Link href="/contact">Contact Us</Link>
              <Link href="/products">Our Products</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
