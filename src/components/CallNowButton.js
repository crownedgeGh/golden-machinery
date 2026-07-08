'use client';
import { useState } from 'react';
import { FaPhone, FaCheck } from 'react-icons/fa';

const PHONE = '7078677963';

/**
 * CallNowButton — acts as a link on mobile and copies number on desktop.
 * Shows a ✓ tick and "Number Copied!" after copying.
 */
export default function CallNowButton({ className = '' }) {
  const [copied, setCopied] = useState(false);

  const handleClick = async (e) => {
    // Prevent default tel behavior on non-mobile devices
    if (window.innerWidth >= 768) {
      e.preventDefault();
    }
    
    try {
      await navigator.clipboard.writeText(PHONE);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (_) {
      // Fallback for older browsers
      const el = document.createElement('input');
      el.value = PHONE;
      document.body.appendChild(el);
      el.select();
      document.execCommand('copy');
      document.body.removeChild(el);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <a
      href={`tel:+91${PHONE}`}
      onClick={handleClick}
      className={`call-now-btn ${className}`}
      aria-label="Call Now"
    >
      {copied ? <FaCheck className="call-icon" /> : <FaPhone className="call-icon" />}
      {copied ? 'Number Copied!' : 'Call Now'}
    </a>
  );
}
