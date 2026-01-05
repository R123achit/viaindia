'use client';
import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { FaCheckCircle, FaStar, FaAward, FaGlobe } from 'react-icons/fa';

export default function ClientCarousel() {
  const row1Ref = useRef(null);
  const row2Ref = useRef(null);
  const statsRef = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Client data with logo placeholders and industry info
  const clients = [
    { name: 'Acme Corp', industry: 'Technology', logo: 'AC', color: 'from-blue-400 to-blue-500' },
    { name: 'TechVision', industry: 'Software', logo: 'TV', color: 'from-indigo-400 to-indigo-500' },
    { name: 'GlobalSoft', industry: 'Enterprise', logo: 'GS', color: 'from-cyan-400 to-cyan-500' },
    { name: 'InnovateLabs', industry: 'Innovation', logo: 'IL', color: 'from-teal-400 to-teal-500' },
    { name: 'DataFlow', industry: 'Analytics', logo: 'DF', color: 'from-sky-400 to-sky-500' },
    { name: 'CloudNine', industry: 'Cloud', logo: 'C9', color: 'from-blue-400 to-blue-500' },
    { name: 'SmartSys', industry: 'Systems', logo: 'SS', color: 'from-indigo-400 to-indigo-500' },
    { name: 'NextGen', industry: 'Digital', logo: 'NG', color: 'from-cyan-400 to-cyan-500' },
    { name: 'FutureTech', industry: 'AI/ML', logo: 'FT', color: 'from-teal-400 to-teal-500' },
    { name: 'DigiCore', industry: 'Digital', logo: 'DC', color: 'from-sky-400 to-sky-500' },
    { name: 'WebMasters', industry: 'Web', logo: 'WM', color: 'from-blue-400 to-blue-500' },
    { name: 'CodeCraft', industry: 'Development', logo: 'CC', color: 'from-indigo-400 to-indigo-500' },
    { name: 'SysIntegrate', industry: 'Integration', logo: 'SI', color: 'from-cyan-400 to-cyan-500' },
    { name: 'AppDev Pro', industry: 'Mobile', logo: 'AP', color: 'from-teal-400 to-teal-500' },
    { name: 'NetSolutions', industry: 'Network', logo: 'NS', color: 'from-sky-400 to-sky-500' }
  ];

  // Mouse move handler for parallax effect
  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      const x = (clientX / innerWidth - 0.5) * 2;
      const y = (clientY / innerHeight - 0.5) * 2;
      setMousePosition({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Apply parallax to stats cards
  useEffect(() => {
    if (statsRef.current) {
      const cards = statsRef.current.querySelectorAll('.stat-card');
      cards.forEach((card, index) => {
        const depth = (index + 1) * 5;
        gsap.to(card, {
          x: mousePosition.x * depth,
          y: mousePosition.y * depth,
          duration: 0.5,
          ease: 'power2.out'
        });
      });
    }
  }, [mousePosition]);

  useEffect(() => {
    const row1 = row1Ref.current;
    const row2 = row2Ref.current;

    gsap.to(row1, {
      x: '-50%',
      duration: 50,
      ease: 'none',
      repeat: -1
    });

    gsap.to(row2, {
      x: '0%',
      duration: 50,
      ease: 'none',
      repeat: -1,
      from: { x: '-50%' }
    });
  }, []);

  // 3D tilt effect handler
  const handleCardMouseMove = (e, cardRef) => {
    const card = cardRef;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = (y - centerY) / 10;
    const rotateY = (centerX - x) / 10;
    
    gsap.to(card, {
      rotateX: rotateX,
      rotateY: rotateY,
      duration: 0.3,
      ease: 'power2.out',
      transformPerspective: 1000
    });
  };

  const handleCardMouseLeave = (cardRef) => {
    gsap.to(cardRef, {
      rotateX: 0,
      rotateY: 0,
      duration: 0.5,
      ease: 'power2.out'
    });
  };

  return (
    <section className="bg-gradient-to-b from-gray-50 to-white py-24 overflow-hidden relative">
      {/* Animated background elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-100 rounded-full filter blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-100 rounded-full filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '1s' }}></div>
      
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: 'linear-gradient(rgba(0,0,0,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.05) 1px, transparent 1px)',
        backgroundSize: '50px 50px'
      }}></div>
      
      <div className="container-custom relative z-10">
        {/* Header Section with fade-in animation */}
        <div className="text-center mb-20 max-w-4xl mx-auto animate-fade-in">
          {/* Badge with shimmer effect */}
          <div className="inline-block mb-6 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-30 animate-shimmer"></div>
            <span className="relative inline-flex items-center gap-2 text-blue-600 font-semibold text-sm uppercase tracking-wider bg-white/80 backdrop-blur-sm px-6 py-2.5 rounded-full border border-blue-200 shadow-sm">
              <FaGlobe className="text-blue-600 animate-spin-slow" />
              Trusted Worldwide
            </span>
          </div>
          
          {/* Title with gradient */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-blue-800 to-gray-900 bg-clip-text text-transparent leading-tight">
            Trusted by Industry Leaders
          </h2>
          
          {/* Subtitle */}
          <p className="text-gray-600 text-lg md:text-xl leading-relaxed">
            Partnering with forward-thinking companies across the globe to deliver exceptional digital solutions
          </p>
        </div>

        {/* Stats Section with glass morphism and 3D tilt */}
        <div ref={statsRef} className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-20 max-w-6xl mx-auto" style={{ perspective: '1000px' }}>
          <div 
            className="stat-card group bg-white/60 backdrop-blur-md p-8 rounded-2xl border border-white shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 relative overflow-hidden cursor-pointer"
            style={{ transformStyle: 'preserve-3d' }}
            onMouseMove={(e) => handleCardMouseMove(e, e.currentTarget)}
            onMouseLeave={(e) => handleCardMouseLeave(e.currentTarget)}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10" style={{ transform: 'translateZ(50px)' }}>
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
                <FaCheckCircle className="text-white text-2xl" />
              </div>
              <div className="text-4xl font-bold text-gray-900 mb-2">650+</div>
              <div className="text-sm text-gray-600 font-medium uppercase tracking-wide">Happy Clients</div>
            </div>
          </div>
          
          <div 
            className="stat-card group bg-white/60 backdrop-blur-md p-8 rounded-2xl border border-white shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 relative overflow-hidden cursor-pointer"
            style={{ transformStyle: 'preserve-3d' }}
            onMouseMove={(e) => handleCardMouseMove(e, e.currentTarget)}
            onMouseLeave={(e) => handleCardMouseLeave(e.currentTarget)}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10" style={{ transform: 'translateZ(50px)' }}>
              <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
                <FaGlobe className="text-white text-2xl" />
              </div>
              <div className="text-4xl font-bold text-gray-900 mb-2">50+</div>
              <div className="text-sm text-gray-600 font-medium uppercase tracking-wide">Countries</div>
            </div>
          </div>
          
          <div 
            className="stat-card group bg-white/60 backdrop-blur-md p-8 rounded-2xl border border-white shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 relative overflow-hidden cursor-pointer"
            style={{ transformStyle: 'preserve-3d' }}
            onMouseMove={(e) => handleCardMouseMove(e, e.currentTarget)}
            onMouseLeave={(e) => handleCardMouseLeave(e.currentTarget)}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10" style={{ transform: 'translateZ(50px)' }}>
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
                <FaStar className="text-white text-2xl" />
              </div>
              <div className="text-4xl font-bold text-gray-900 mb-2">4.9/5</div>
              <div className="text-sm text-gray-600 font-medium uppercase tracking-wide">Client Rating</div>
            </div>
          </div>
          
          <div 
            className="stat-card group bg-white/60 backdrop-blur-md p-8 rounded-2xl border border-white shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 relative overflow-hidden cursor-pointer"
            style={{ transformStyle: 'preserve-3d' }}
            onMouseMove={(e) => handleCardMouseMove(e, e.currentTarget)}
            onMouseLeave={(e) => handleCardMouseLeave(e.currentTarget)}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-teal-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10" style={{ transform: 'translateZ(50px)' }}>
              <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-teal-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
                <FaAward className="text-white text-2xl" />
              </div>
              <div className="text-4xl font-bold text-gray-900 mb-2">98%</div>
              <div className="text-sm text-gray-600 font-medium uppercase tracking-wide">Retention Rate</div>
            </div>
          </div>
        </div>

        {/* Client Logos Carousel */}
        <div className="space-y-8 overflow-hidden">
          {/* Row 1 - Moving Left */}
          <div className="relative overflow-hidden">
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-gray-50 to-transparent z-10 pointer-events-none"></div>
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-gray-50 to-transparent z-10 pointer-events-none"></div>
            
            <div ref={row1Ref} className="flex gap-6 will-change-transform">
              {[...clients, ...clients].map((client, index) => (
                <div 
                  key={index} 
                  className="group min-w-[200px] flex-shrink-0 bg-white/80 backdrop-blur-sm rounded-xl p-5 transition-all duration-300 hover:shadow-xl border border-gray-200 cursor-pointer relative overflow-hidden"
                  style={{ transformStyle: 'preserve-3d' }}
                  onMouseMove={(e) => handleCardMouseMove(e, e.currentTarget)}
                  onMouseLeave={(e) => handleCardMouseLeave(e.currentTarget)}
                >
                  {/* Hover gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Logo Container */}
                  <div className="flex items-center justify-center mb-3 relative z-10" style={{ transform: 'translateZ(30px)' }}>
                    <div className={`w-16 h-16 bg-gradient-to-br ${client.color} rounded-lg flex items-center justify-center text-white font-bold text-xl shadow-md group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                      {client.logo}
                    </div>
                  </div>
                  
                  {/* Client Info */}
                  <div className="text-center relative z-10" style={{ transform: 'translateZ(20px)' }}>
                    <h4 className="font-semibold text-gray-900 mb-1 text-sm group-hover:text-blue-600 transition-colors">
                      {client.name}
                    </h4>
                    <p className="text-xs text-gray-500">
                      {client.industry}
                    </p>
                  </div>
                  
                  {/* Bottom accent line */}
                  <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${client.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left`}></div>
                </div>
              ))}
            </div>
          </div>

          {/* Row 2 - Moving Right */}
          <div className="relative overflow-hidden">
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-gray-50 to-transparent z-10 pointer-events-none"></div>
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-gray-50 to-transparent z-10 pointer-events-none"></div>
            
            <div ref={row2Ref} className="flex gap-6 will-change-transform">
              {[...clients.reverse(), ...clients].map((client, index) => (
                <div 
                  key={index} 
                  className="group min-w-[200px] flex-shrink-0 bg-white/80 backdrop-blur-sm rounded-xl p-5 transition-all duration-300 hover:shadow-xl border border-gray-200 cursor-pointer relative overflow-hidden"
                  style={{ transformStyle: 'preserve-3d' }}
                  onMouseMove={(e) => handleCardMouseMove(e, e.currentTarget)}
                  onMouseLeave={(e) => handleCardMouseLeave(e.currentTarget)}
                >
                  {/* Hover gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Logo Container */}
                  <div className="flex items-center justify-center mb-3 relative z-10" style={{ transform: 'translateZ(30px)' }}>
                    <div className={`w-16 h-16 bg-gradient-to-br ${client.color} rounded-lg flex items-center justify-center text-white font-bold text-xl shadow-md group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                      {client.logo}
                    </div>
                  </div>
                  
                  {/* Client Info */}
                  <div className="text-center relative z-10" style={{ transform: 'translateZ(20px)' }}>
                    <h4 className="font-semibold text-gray-900 mb-1 text-sm group-hover:text-indigo-600 transition-colors">
                      {client.name}
                    </h4>
                    <p className="text-xs text-gray-500">
                      {client.industry}
                    </p>
                  </div>
                  
                  {/* Bottom accent line */}
                  <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${client.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left`}></div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-gray-600 mb-6 text-lg">
            Ready to join our growing list of satisfied clients?
          </p>
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transform hover:-translate-y-0.5 transition-all duration-300 inline-flex items-center gap-2 shadow-sm hover:shadow-md">
            Start Your Project
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
