'use client';

// Icon-only version for favicons, app icons, etc.
export default function LogoIcon({ size = 64, className = "" }) {
  return (
    <div className={className} style={{ width: size, height: size }}>
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          {/* Premium Gradient */}
          <linearGradient id="iconGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0066FF" />
            <stop offset="50%" stopColor="#0099FF" />
            <stop offset="100%" stopColor="#00CCFF" />
          </linearGradient>
          
          {/* Glow */}
          <filter id="glow">
            <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
        
        {/* Background Circle */}
        <circle cx="32" cy="32" r="30" fill="#FFFFFF" />
        
        {/* Hexagon with Glow */}
        <g filter="url(#glow)">
          <path
            d="M32 8 L52 20 L52 44 L32 56 L12 44 L12 20 Z"
            fill="url(#iconGradient)"
          />
        </g>
        
        {/* V Letter - Bold */}
        <path
          d="M24 22 L32 42 L40 22"
          stroke="#FFFFFF"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        
        {/* Tech Dots */}
        <circle cx="32" cy="18" r="2" fill="#00CCFF" />
        <circle cx="32" cy="46" r="2" fill="#00CCFF" />
        <circle cx="18" cy="32" r="2" fill="#00CCFF" />
        <circle cx="46" cy="32" r="2" fill="#00CCFF" />
      </svg>
    </div>
  );
}
