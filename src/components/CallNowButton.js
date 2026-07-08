import { FaPhone } from 'react-icons/fa';

const PHONE = '7078677963';

/**
 * CallNowButton — always an <a href="tel:..."> link.
 * • On mobile: opens the native dialer immediately.
 * • On desktop: browser/OS handles it (Skype, FaceTime, etc.)
 * No JS detection needed — the tel: protocol is universally correct.
 */
export default function CallNowButton({ className = '' }) {
  return (
    <a
      href={`tel:+91${PHONE}`}
      className={`call-now-btn ${className}`}
      aria-label="Call Now"
    >
      <FaPhone className="call-icon" />
      Call Now
    </a>
  );
}
