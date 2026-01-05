'use client';

import { useState } from 'react';

export default function Logo({ className = "", variant = "default" }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className={`flex items-center gap-3 ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Premium Icon - Hexagonal Tech Symbol */}
      <div className="relative w-12 h-12 lg:w-14 lg:h-14">
        <svg viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            {/* Premium Gradient */}
            <linearGradient id="premiumGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#0066FF" />
              <stop offset="50%" stopColor="#0099FF" />
              <stop offset="100%" stopColor="#00CCFF" />
            </linearGradient>
            
            {/* Glow Gradient */}
            <radialGradient id="glowGradient" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#00AAFF" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#0066FF" stopOpacity="0" />
            </radialGradient>
            
            {/* Metallic Shine */}
            <linearGradient id="shineGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.3" />
              <stop offset="50%" stopColor="#FFFFFF" stopOpacity="0.1" />
              <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
            </linearGradient>
          </defs>
          
          {/* Glow Effect Background */}
          <circle cx="28" cy="28" r="24" fill="url(#glowGradient)" 
            className={`transition-all duration-500 ${isHovered ? 'opacity-100' : 'opacity-0'}`} />
          
          {/* Outer Hexagon Frame */}
          <path
            d="M28 4 L46 14 L46 34 L28 44 L10 34 L10 14 Z"
            stroke="url(#premiumGradient)"
            strokeWidth="2.5"
            fill="none"
            className={`transition-all duration-500 ${isHovered ? 'stroke-[3]' : ''}`}
          />
          
          {/* Inner Hexagon - Solid */}
          <path
            d="M28 10 L40 17 L40 31 L28 38 L16 31 L16 17 Z"
            fill="url(#premiumGradient)"
            className="drop-shadow-lg"
          />
          
          {/* Metallic Shine Overlay */}
          <path
            d="M28 10 L40 17 L40 31 L28 38 L16 31 L16 17 Z"
            fill="url(#shineGradient)"
            opacity="0.6"
          />
          
          {/* V Letter - Modern Design */}
          <path
            d="M22 19 L28 31 L34 19"
            stroke="#FFFFFF"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
            className="drop-shadow-md"
          />
          
          {/* Tech Circuit Lines */}
          <g opacity="0.8">
            {/* Top Circuit */}
            <path d="M28 10 L28 14" stroke="#00CCFF" strokeWidth="1.5" strokeLinecap="round" />
            <circle cx="28" cy="15" r="1.5" fill="#00CCFF" />
            
            {/* Bottom Circuit */}
            <path d="M28 38 L28 34" stroke="#00CCFF" strokeWidth="1.5" strokeLinecap="round" />
            <circle cx="28" cy="33" r="1.5" fill="#00CCFF" />
            
            {/* Left Circuit */}
            <path d="M16 24 L19 24" stroke="#00CCFF" strokeWidth="1.5" strokeLinecap="round" />
            <circle cx="20" cy="24" r="1.5" fill="#00CCFF" />
            
            {/* Right Circuit */}
            <path d="M40 24 L37 24" stroke="#00CCFF" strokeWidth="1.5" strokeLinecap="round" />
            <circle cx="36" cy="24" r="1.5" fill="#00CCFF" />
          </g>
          
          {/* Corner Accents */}
          <g opacity="0.6">
            <path d="M46 14 L48 12" stroke="#0066FF" strokeWidth="2" strokeLinecap="round" />
            <path d="M46 34 L48 36" stroke="#0066FF" strokeWidth="2" strokeLinecap="round" />
            <path d="M10 14 L8 12" stroke="#0066FF" strokeWidth="2" strokeLinecap="round" />
            <path d="M10 34 L8 36" stroke="#0066FF" strokeWidth="2" strokeLinecap="round" />
          </g>
        </svg>
        
        {/* Animated Pulse Ring */}
        <div 
          className={`absolute inset-0 rounded-full border-2 border-blue-400 transition-all duration-700 ${
            isHovered ? 'scale-125 opacity-0' : 'scale-100 opacity-0'
          }`}
        />
      </div>
      
      {/* Premium Text */}
      <div className="flex flex-col leading-none">
        {/* Main Brand Name */}
        <div className="flex items-baseline gap-1.5">
          <h1 className="text-[30px] lg:text-[36px] font-black tracking-tight">
            {/* Highly visible solid text */}
            <span className="text-[#0066FF] drop-shadow-[0_2px_4px_rgba(0,102,255,0.3)]">
              VIAHIND
            </span>
          </h1>
          
          {/* Premium Badge */}
          <div className="flex flex-col items-center">
            <span className="text-[9px] lg:text-[10px] font-black text-blue-600 leading-none">®</span>
            <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-0.5" />
          </div>
        </div>
        
        {/* Tagline with separator */}
        <div className="flex items-center gap-2 mt-1">
          <div className="h-[2px] w-7 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full" />
          <span className="text-[12px] lg:text-[14px] font-bold tracking-[0.2em] text-gray-700 uppercase">
            IT Solutions
          </span>
        </div>
        
        {/* Subtle Tech Line */}
        <div className="flex items-center gap-1 mt-1.5 opacity-60">
          <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse" />
          <div className="h-[1px] flex-1 bg-gradient-to-r from-blue-500 to-transparent max-w-[60px]" />
        </div>
      </div>
    </div>
  );
}
