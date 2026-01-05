'use client';

// Ultra-visible simple version - maximum readability
export default function LogoSimple({ className = "" }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* Clean Icon */}
      <div className="relative w-12 h-12 lg:w-14 lg:h-14">
        <svg viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="simpleGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#0066FF" />
              <stop offset="100%" stopColor="#00AAFF" />
            </linearGradient>
          </defs>
          
          {/* Hexagon - Solid and Bold */}
          <path
            d="M28 8 L46 18 L46 38 L28 48 L10 38 L10 18 Z"
            fill="url(#simpleGradient)"
            className="drop-shadow-lg"
          />
          
          {/* V Letter - Bold White */}
          <path
            d="M20 20 L28 36 L36 20"
            stroke="#FFFFFF"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
          
          {/* Corner Accents */}
          <circle cx="28" cy="14" r="2" fill="#00CCFF" />
          <circle cx="28" cy="42" r="2" fill="#00CCFF" />
        </svg>
      </div>
      
      {/* Bold Text - Maximum Visibility */}
      <div className="flex flex-col leading-none">
        {/* Brand Name - Solid Color */}
        <div className="flex items-baseline gap-1.5">
          <h1 className="text-[30px] lg:text-[36px] font-black tracking-tight text-blue-600">
            VIAHIND
          </h1>
          <span className="text-[9px] font-black text-blue-600">®</span>
        </div>
        
        {/* Tagline - Clear and Readable */}
        <div className="flex items-center gap-2 mt-0.5">
          <div className="h-[2px] w-6 bg-blue-500 rounded-full" />
          <span className="text-[12px] lg:text-[14px] font-bold tracking-[0.2em] text-gray-700 uppercase">
            IT Solutions
          </span>
        </div>
      </div>
    </div>
  );
}
