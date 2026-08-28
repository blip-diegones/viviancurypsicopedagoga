import React from 'react';

export default function Logo({ size = 'default', showText = true, className = '' }) {
  const iconSize = size === 'small' ? 34 : size === 'large' ? 52 : 42;

  return (
    <div className={`brand-logo-wrap ${className}`} style={{ display: 'inline-flex', alignItems: 'center', gap: '0.75rem' }}>
      <svg
        width={iconSize}
        height={iconSize}
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ flexShrink: 0 }}
      >
        {/* Background circle */}
        <circle cx="32" cy="32" r="30" fill="#FDF0F5" stroke="#EDD8E4" strokeWidth="1.2"/>

        {/* Open book base */}
        <path d="M12 42 Q12 38 16 37 L30 34 L30 22 L16 25 Q12 26 12 30 Z" fill="#C2476B" opacity="0.85"/>
        <path d="M52 42 Q52 38 48 37 L34 34 L34 22 L48 25 Q52 26 52 30 Z" fill="#7B2D6A" opacity="0.85"/>

        {/* Book spine */}
        <rect x="30" y="21" width="4" height="22" rx="2" fill="#5C1A4A"/>

        {/* Star / sparkle above book */}
        <circle cx="32" cy="15" r="3.5" fill="#E0873A"/>
        <line x1="32" y1="10" x2="32" y2="20" stroke="#E0873A" strokeWidth="1.5" strokeLinecap="round"/>
        <line x1="27" y1="15" x2="37" y2="15" stroke="#E0873A" strokeWidth="1.5" strokeLinecap="round"/>
        <line x1="28.5" y1="11.5" x2="35.5" y2="18.5" stroke="#E0873A" strokeWidth="1" strokeLinecap="round" opacity="0.6"/>
        <line x1="35.5" y1="11.5" x2="28.5" y2="18.5" stroke="#E0873A" strokeWidth="1" strokeLinecap="round" opacity="0.6"/>

        {/* Small heart on book */}
        <path d="M30 28.5 C30 27 28 26 27 27.5 C26 29 28 31 30 32.5 C32 31 34 29 33 27.5 C32 26 30 27 30 28.5Z" fill="#FFFFFF" opacity="0.9"/>
      </svg>

      {showText && (
        <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.15 }}>
          <span style={{
            fontFamily: 'var(--font-title)',
            fontWeight: 700,
            fontSize: size === 'large' ? '1.5rem' : '1.22rem',
            color: 'var(--primary-deep)',
            letterSpacing: '-0.02em'
          }}>
            Vivian Cury
          </span>
          <span style={{
            fontFamily: 'var(--font-body)',
            fontSize: '0.72rem',
            fontWeight: 600,
            textTransform: 'uppercase',
            letterSpacing: '0.08em',
            color: 'var(--text-muted)'
          }}>
            Psicopedagoga
          </span>
        </div>
      )}
    </div>
  );
}
