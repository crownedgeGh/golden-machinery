'use client';

import { createPortal } from 'react-dom';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { FaPhoneAlt, FaEnvelope, FaTimes, FaBars } from 'react-icons/fa';
import CopyButton from './CopyButton';
import './Navbar.css';

const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/products', label: 'Products' },
  { href: '/services', label: 'Services' },
];

const Navbar = () => {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Allow portal rendering only client-side
  useEffect(() => { setMounted(true); }, []);

  // Auto-close on navigation
  useEffect(() => { setMenuOpen(false); }, [pathname]);

  // Lock body scroll when drawer is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const close = () => setMenuOpen(false);

  return (
    <>
      <header className="header">
        <nav className="navbar">
          {/* Logo */}
          <Link href="/" className="logo" onClick={close}>
            <span className="logo-main">GOLDEN <span>MACHINERY</span></span>
          </Link>



          {/* Right: desktop nav links */}
          <div className="nav-right">
            {NAV_LINKS.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={`nav-link${pathname === href ? ' active' : ''}`}
              >
                {label}
              </Link>
            ))}
            <Link href="/contact" className="nav-link nav-cta">
              Contact Us
            </Link>
          </div>

          {/* Hamburger (mobile only) */}
          <button
            className="hamburger"
            onClick={() => setMenuOpen(p => !p)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            {menuOpen
              ? <FaTimes className="hamburger-icon" />
              : <FaBars className="hamburger-icon" />
            }
          </button>
        </nav>
      </header>

      {/*
        Mobile drawer — rendered via portal directly into <body>.
        This avoids ALL stacking context / overflow issues from the sticky header.
      */}
      {mounted && menuOpen && createPortal(
        <>
          {/* Dimmed backdrop */}
          <div className="mobile-overlay" onClick={close} />

          {/* Slide-down drawer */}
          <div className="mobile-drawer">
            {NAV_LINKS.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={`mobile-nav-link${pathname === href ? ' active' : ''}`}
                onClick={close}
              >
                {label}
              </Link>
            ))}
            <Link href="/contact" className="mobile-nav-cta" onClick={close}>
              Contact Us
            </Link>
          </div>
        </>,
        document.body
      )}
    </>
  );
};

export default Navbar;
