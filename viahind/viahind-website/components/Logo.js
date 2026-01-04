export default function Logo({ className = "" }) {
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      {/* Icon/Symbol - Connected V design */}
      <div className="relative w-11 h-11">
        <svg viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Gradient Definitions */}
          <defs>
            <linearGradient id="mainGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#2563EB" />
              <stop offset="50%" stopColor="#3B82F6" />
              <stop offset="100%" stopColor="#60A5FA" />
            </linearGradient>
          </defs>
          
          {/* Unified V shape with smooth connection */}
          <path
            d="M6 4 C6 4 8 4 10 4 L20 32 L22 36 L24 32 L34 4 C36 4 38 4 38 4 L26 40 C25 42 23 44 22 44 C21 44 19 42 18 40 L6 4 Z"
            fill="url(#mainGradient)"
            className="drop-shadow-md"
          />
          
          {/* Inner highlight for depth */}
          <path
            d="M12 8 L20 30 L22 34 L24 30 L32 8"
            stroke="#60A5FA"
            strokeWidth="1.5"
            strokeLinecap="round"
            opacity="0.4"
          />
        </svg>
      </div>
      
      {/* Text - Unified styling */}
      <div className="flex flex-col leading-tight">
        <div className="flex items-center gap-1">
          <span className="text-[26px] lg:text-[30px] font-bold tracking-tight bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400 bg-clip-text text-transparent">
            VIAHIND
          </span>
          <span className="text-[10px] text-gray-400 font-medium -ml-0.5">®</span>
        </div>
        <span className="text-[11px] lg:text-[13px] font-bold tracking-[0.15em] bg-gradient-to-r from-cyan-600 to-blue-500 bg-clip-text text-transparent uppercase -mt-0.5">
          IT Solutions
        </span>
      </div>
    </div>
  );
}
