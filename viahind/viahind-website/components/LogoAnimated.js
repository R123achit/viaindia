'use client';

import { useEffect, useState } from 'react';

// Animated version for hero sections and special placements
export default function LogoAnimated({ className = "", autoPlay = true }) {
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (autoPlay) {
      setIsAnimating(true);
      const timer = setTimeout(() => setIsAnimating(false), 2000);
      return () => clearTimeout(timer);
    }
  }, [autoPlay]);

  return (
    <div className={`flex items-center gap-4 ${className}`}>
      {/* Animated Icon */}
      <div className="relative w-16 h-16 lg:w-20 lg:h-20">
        <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            {/* Animated Gradient */}
            <linearGradient id="animGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#0066FF">
                <animate 
                  attributeName="stop-color" 
                  values="#0066FF; #00CCFF; #0066FF" 
                  dur="3s" 
                  repeatCount="indefinite" 
                />
              </stop>
              <stop offset="50%" stopColor="#0099FF">
                <animate 
                  attributeName="stop-color" 
                  values="#0099FF; #0066FF; #0099FF" 
                  dur="3s" 
                  repeatCount="indefinite" 
                />
              </stop>
              <stop offset="100%" stopColor="#00CCFF">
                <animate 
                  attributeName="stop-color" 
                  values="#00CCFF; #0066FF; #00CCFF" 
                  dur="3s" 
                  repeatCount="indefinite" 
                />
              </stop>
            </linearGradient>
            
            {/* Glow Filter */}
            <filter id="animGlow">
              <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>
          
          {/* Rotating Outer Ring */}
          <g className={isAnimating ? 'animate-spin' : ''} style={{ transformOrigin: '40px 40px', animationDuration: '3s' }}>
            <path
              d="M40 5 L65 20 L65 60 L40 75 L15 60 L15 20 Z"
              stroke="url(#animGradient)"
              strokeWidth="2"
              fill="none"
              opacity="0.5"
            />
          </g>
          
          {/* Main Hexagon */}
          <g filter="url(#animGlow)">
            <path
              d="M40 12 L60 24 L60 56 L40 68 L20 56 L20 24 Z"
              fill="url(#animGradient)"
              className={`transition-all duration-1000 ${isAnimating ? 'scale-110' : 'scale-100'}`}
              style={{ transformOrigin: '40px 40px' }}
            />
          </g>
          
          {/* V Letter with Animation */}
          <path
            d="M28 26 L40 54 L52 26"
            stroke="#FFFFFF"
            strokeWidth="5"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
            className={`transition-all duration-1000 ${isAnimating ? 'opacity-100' : 'opacity-90'}`}
          >
            {isAnimating && (
              <animate
                attributeName="stroke-dasharray"
                from="0 100"
                to="100 0"
                dur="1s"
                fill="freeze"
              />
            )}
          </path>
          
          {/* Orbiting Particles */}
          <g className={isAnimating ? 'animate-spin' : ''} style={{ transformOrigin: '40px 40px', animationDuration: '4s' }}>
            <circle cx="40" cy="10" r="2" fill="#00CCFF" opacity="0.8" />
            <circle cx="65" cy="40" r="2" fill="#00CCFF" opacity="0.8" />
            <circle cx="40" cy="70" r="2" fill="#00CCFF" opacity="0.8" />
            <circle cx="15" cy="40" r="2" fill="#00CCFF" opacity="0.8" />
          </g>
          
          {/* Corner Tech Elements */}
          <g opacity="0.6">
            <path d="M65 20 L68 17" stroke="#0066FF" strokeWidth="2" strokeLinecap="round" />
            <path d="M65 60 L68 63" stroke="#0066FF" strokeWidth="2" strokeLinecap="round" />
            <path d="M15 20 L12 17" stroke="#0066FF" strokeWidth="2" strokeLinecap="round" />
            <path d="M15 60 L12 63" stroke="#0066FF" strokeWidth="2" strokeLinecap="round" />
          </g>
        </svg>
        
        {/* Pulse Rings */}
        {isAnimating && (
          <>
            <div className="absolute inset-0 rounded-full border-2 border-blue-400 animate-ping opacity-75" />
            <div className="absolute inset-0 rounded-full border-2 border-cyan-400 animate-ping opacity-50" style={{ animationDelay: '0.5s' }} />
          </>
        )}
      </div>
      
      {/* Animated Text */}
      <div className="flex flex-col leading-none">
        {/* Main Brand */}
        <div className="flex items-baseline gap-2">
          <h1 className="text-[36px] lg:text-[44px] font-black tracking-tight relative overflow-hidden">
            {/* Shimmer Effect */}
            <span className="relative inline-block">
              <span className="absolute inset-0 bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 bg-clip-text text-transparent blur-sm opacity-50">
                VIAHIND
              </span>
              <span className="relative bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 bg-clip-text text-transparent">
                VIAHIND
              </span>
              {isAnimating && (
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent bg-clip-text text-transparent animate-shimmer" />
              )}
            </span>
          </h1>
          
          {/* Premium Badge */}
          <div className="flex flex-col items-center">
            <span className="text-[10px] font-black text-blue-600">®</span>
            <div className={`w-1.5 h-1.5 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mt-0.5 ${isAnimating ? 'animate-pulse' : ''}`} />
          </div>
        </div>
        
        {/* Tagline */}
        <div className="flex items-center gap-2 mt-1">
          <div className={`h-[2px] w-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full transition-all duration-1000 ${isAnimating ? 'w-12' : 'w-8'}`} />
          <span className="text-[13px] lg:text-[15px] font-bold tracking-[0.25em] bg-gradient-to-r from-gray-700 via-blue-600 to-cyan-600 bg-clip-text text-transparent uppercase">
            IT Solutions
          </span>
        </div>
        
        {/* Tech Elements */}
        <div className="flex items-center gap-1.5 mt-2 opacity-70">
          <div className={`w-1.5 h-1.5 bg-blue-500 rounded-full ${isAnimating ? 'animate-pulse' : ''}`} />
          <div className="h-[1px] w-16 bg-gradient-to-r from-blue-500 via-cyan-500 to-transparent" />
          <div className={`w-1 h-1 bg-cyan-500 rounded-full ${isAnimating ? 'animate-pulse' : ''}`} style={{ animationDelay: '0.2s' }} />
        </div>
      </div>
    </div>
  );
}
