'use client';

// Minimal version for smaller spaces (mobile menu, footer, etc.)
export default function LogoMinimal({ className = "" }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      {/* Compact Icon */}
      <div className="relative w-9 h-9">
        <svg viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="miniGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#0066FF" />
              <stop offset="100%" stopColor="#00CCFF" />
            </linearGradient>
          </defs>
          
          {/* Hexagon */}
          <path
            d="M18 3 L30 10 L30 26 L18 33 L6 26 L6 10 Z"
            fill="url(#miniGradient)"
            className="drop-shadow-md"
          />
          
          {/* V Letter */}
          <path
            d="M14 12 L18 22 L22 12"
            stroke="#FFFFFF"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
        </svg>
      </div>
      
      {/* Compact Text */}
      <div className="flex flex-col leading-none">
        <span className="text-[20px] font-black tracking-tight bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
          VIAHIND
        </span>
        <span className="text-[9px] font-bold tracking-wider text-gray-600 uppercase -mt-0.5">
          IT Solutions
        </span>
      </div>
    </div>
  );
}
