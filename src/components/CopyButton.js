'use client';
import { useState } from 'react';
import { FaCopy, FaCheck } from 'react-icons/fa';

/**
 * CopyButton — small inline icon button that copies `text` to clipboard.
 * Shows a ✓ tick for 2 s after copying.
 */
export default function CopyButton({ text }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (_) {
      // Fallback for older browsers
      const el = document.createElement('input');
      el.value = text;
      document.body.appendChild(el);
      el.select();
      document.execCommand('copy');
      document.body.removeChild(el);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <button
      onClick={handleCopy}
      className="copy-btn"
      title={`Copy ${text}`}
      aria-label={copied ? 'Copied!' : `Copy ${text}`}
    >
      {copied ? <FaCheck /> : <FaCopy />}
      {copied && <span className="copy-tooltip">Copied!</span>}
    </button>
  );
}
