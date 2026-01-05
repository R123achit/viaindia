'use client';
import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { FaRocket, FaChartLine, FaUsers, FaArrowRight, FaPlay } from 'react-icons/fa';

export default function HeroSection() {
  const heroRef = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  // Mouse parallax effect
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

  // Apply parallax to floating elements
  useEffect(() => {
    if (heroRef.current) {
      const floatingElements = heroRef.current.querySelectorAll('.floating-element');
      floatingElements.forEach((element, index) => {
        const depth = (index + 1) * 10;
        gsap.to(element, {
          x: mousePosition.x * depth,
          y: mousePosition.y * depth,
          duration: 0.5,
          ease: 'power2.out'
        });
      });
    }
  }, [mousePosition]);

  // Initial animations
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate hero content
      gsap.from('.hero-badge', {
        y: -50,
        opacity: 0,
        duration: 0.8,
        ease: 'back.out(1.7)'
      });

      gsap.from('.hero-title', {
        y: 100,
        opacity: 0,
        duration: 1,
        delay: 0.2,
        ease: 'power3.out'
      });

      gsap.from('.hero-subtitle', {
        y: 50,
        opacity: 0,
        duration: 0.8,
        delay: 0.4,
        ease: 'power2.out'
      });

      gsap.from('.hero-stats', {
        y: 30,
        opacity: 0,
        duration: 0.8,
        delay: 0.6,
        stagger: 0.1,
        ease: 'power2.out'
      });

      gsap.from('.hero-cta', {
        scale: 0,
        opacity: 0,
        duration: 0.8,
        delay: 0.8,
        stagger: 0.1,
        ease: 'back.out(1.7)'
      });

      // Animate floating cards
      gsap.from('.floating-card', {
        scale: 0,
        opacity: 0,
        duration: 1,
        delay: 1,
        stagger: 0.15,
        ease: 'back.out(1.7)'
      });

      // Continuous floating animation
      gsap.to('.floating-card', {
        y: -20,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        stagger: {
          each: 0.2,
          repeat: -1
        }
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  // 3D tilt effect for cards
  const handleCardMouseMove = (e, cardRef) => {
    const card = cardRef;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = (y - centerY) / 15;
    const rotateY = (centerX - x) / 15;
    
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
    <section 
      ref={heroRef} 
      className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50"
      style={{ perspective: '1000px' }}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="floating-element absolute top-20 left-10 w-72 h-72 bg-blue-200 rounded-full filter blur-3xl opacity-30 animate-pulse"></div>
        <div className="floating-element absolute bottom-20 right-10 w-96 h-96 bg-indigo-200 rounded-full filter blur-3xl opacity-30 animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="floating-element absolute top-1/2 left-1/3 w-64 h-64 bg-cyan-200 rounded-full filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: 'linear-gradient(rgba(0,0,0,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.05) 1px, transparent 1px)',
        backgroundSize: '50px 50px'
      }}></div>

      <div className="container-custom relative z-10 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="hero-badge inline-block">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-30 animate-shimmer"></div>
                <span className="relative inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full border border-blue-200 shadow-lg">
                  <FaRocket className="text-blue-600 animate-bounce" />
                  <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">
                    #1 IT Solutions Provider
                  </span>
                </span>
              </div>
            </div>

            {/* Title */}
            <h1 className="hero-title text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              <span className="bg-gradient-to-r from-gray-900 via-blue-800 to-indigo-900 bg-clip-text text-transparent">
                Building The
              </span>
              <br />
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Smart World
              </span>
              <br />
              <span className="bg-gradient-to-r from-gray-900 via-blue-800 to-indigo-900 bg-clip-text text-transparent">
                Of Tomorrow
              </span>
            </h1>

            {/* Subtitle */}
            <p className="hero-subtitle text-lg md:text-xl text-gray-600 leading-relaxed max-w-xl">
              Transform your business with cutting-edge IT solutions. We deliver innovation, 
              excellence, and results that drive your digital transformation forward.
            </p>

            {/* Stats */}
            <div className="flex flex-wrap gap-6">
              <div className="hero-stats group">
                <div className="flex items-center gap-3 bg-white/60 backdrop-blur-sm px-5 py-3 rounded-xl border border-white shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                    <FaUsers className="text-white text-xl" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-900">650+</div>
                    <div className="text-xs text-gray-600 font-medium">Clients</div>
                  </div>
                </div>
              </div>

              <div className="hero-stats group">
                <div className="flex items-center gap-3 bg-white/60 backdrop-blur-sm px-5 py-3 rounded-xl border border-white shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-lg flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                    <FaChartLine className="text-white text-xl" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-900">750+</div>
                    <div className="text-xs text-gray-600 font-medium">Projects</div>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <button className="hero-cta group bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 inline-flex items-center gap-3">
                Get Started
                <FaArrowRight className="group-hover:translate-x-2 transition-transform duration-300" />
              </button>

              <button 
                className="hero-cta group bg-white/80 backdrop-blur-sm text-gray-900 px-8 py-4 rounded-xl font-semibold text-lg shadow-md hover:shadow-xl border border-gray-200 transform hover:-translate-y-1 transition-all duration-300 inline-flex items-center gap-3"
                onClick={() => setIsVideoPlaying(true)}
              >
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <FaPlay className="text-white text-sm ml-0.5" />
                </div>
                Watch Demo
              </button>
            </div>
          </div>

          {/* Right Content - 3D Floating Cards */}
          <div className="relative h-[600px] hidden lg:block">
            {/* Card 1 - Top Left */}
            <div 
              className="floating-card absolute top-0 left-0 w-64 bg-white/80 backdrop-blur-md rounded-2xl p-6 shadow-xl border border-white cursor-pointer"
              style={{ transformStyle: 'preserve-3d' }}
              onMouseMove={(e) => handleCardMouseMove(e, e.currentTarget)}
              onMouseLeave={(e) => handleCardMouseLeave(e.currentTarget)}
            >
              <div className="relative z-10" style={{ transform: 'translateZ(30px)' }}>
                <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-4 shadow-lg">
                  <FaRocket className="text-white text-2xl" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Fast Delivery</h3>
                <p className="text-sm text-gray-600">Lightning-fast project completion with quality</p>
              </div>
            </div>

            {/* Card 2 - Top Right */}
            <div 
              className="floating-card absolute top-20 right-0 w-72 bg-white/80 backdrop-blur-md rounded-2xl p-6 shadow-xl border border-white cursor-pointer"
              style={{ transformStyle: 'preserve-3d' }}
              onMouseMove={(e) => handleCardMouseMove(e, e.currentTarget)}
              onMouseLeave={(e) => handleCardMouseLeave(e.currentTarget)}
            >
              <div className="relative z-10" style={{ transform: 'translateZ(30px)' }}>
                <div className="w-14 h-14 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-xl flex items-center justify-center mb-4 shadow-lg">
                  <FaChartLine className="text-white text-2xl" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Proven Results</h3>
                <p className="text-sm text-gray-600">98% client satisfaction rate across all projects</p>
              </div>
            </div>

            {/* Card 3 - Middle Left */}
            <div 
              className="floating-card absolute top-1/2 left-10 w-64 bg-white/80 backdrop-blur-md rounded-2xl p-6 shadow-xl border border-white cursor-pointer"
              style={{ transformStyle: 'preserve-3d' }}
              onMouseMove={(e) => handleCardMouseMove(e, e.currentTarget)}
              onMouseLeave={(e) => handleCardMouseLeave(e.currentTarget)}
            >
              <div className="relative z-10" style={{ transform: 'translateZ(30px)' }}>
                <div className="w-14 h-14 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-xl flex items-center justify-center mb-4 shadow-lg">
                  <FaUsers className="text-white text-2xl" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Expert Team</h3>
                <p className="text-sm text-gray-600">50+ certified professionals ready to help</p>
              </div>
            </div>

            {/* Card 4 - Bottom Right */}
            <div 
              className="floating-card absolute bottom-10 right-10 w-72 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl p-6 shadow-2xl border border-white/20 cursor-pointer text-white"
              style={{ transformStyle: 'preserve-3d' }}
              onMouseMove={(e) => handleCardMouseMove(e, e.currentTarget)}
              onMouseLeave={(e) => handleCardMouseLeave(e.currentTarget)}
            >
              <div className="relative z-10" style={{ transform: 'translateZ(30px)' }}>
                <div className="text-4xl font-bold mb-2">24/7</div>
                <h3 className="text-xl font-bold mb-2">Support Available</h3>
                <p className="text-sm text-blue-100">Round-the-clock assistance for your peace of mind</p>
              </div>
            </div>

            {/* Connecting lines animation */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20">
              <line x1="30%" y1="20%" x2="70%" y2="30%" stroke="url(#gradient1)" strokeWidth="2" strokeDasharray="5,5">
                <animate attributeName="stroke-dashoffset" from="0" to="10" dur="1s" repeatCount="indefinite" />
              </line>
              <line x1="20%" y1="50%" x2="60%" y2="80%" stroke="url(#gradient2)" strokeWidth="2" strokeDasharray="5,5">
                <animate attributeName="stroke-dashoffset" from="0" to="10" dur="1.5s" repeatCount="indefinite" />
              </line>
              <defs>
                <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#3B82F6" />
                  <stop offset="100%" stopColor="#6366F1" />
                </linearGradient>
                <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#6366F1" />
                  <stop offset="100%" stopColor="#8B5CF6" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}
