'use client';
import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { portfolioServices, animationConfig, layoutConfig } from '@/config/scrollPortfolioData';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

// Service-specific gradient configurations
const serviceGradients = {
  'Web Applications': 'from-[#0066FF] via-[#0052CC] to-[#003D99]',
  'Web Designing': 'from-[#2EAE4D] via-[#259A3F] to-[#1C7A31]',
  'E-Commerce Website': 'from-[#00B8D4] via-[#0097A7] to-[#00838F]',
  'Mobile App Development': 'from-[#6B4FBB] via-[#5A3FA0] to-[#4A3285]',
  'Desktop Applications': 'from-[#E94E3D] via-[#D43F2F] to-[#B83426]',
  'Search Engine Optimization': 'from-[#FF7A3D] via-[#F06A2E] to-[#D95A20]',
  'Social Media Marketing': 'from-[#FF7A3D] via-[#F06A2E] to-[#D95A20]'
};

export default function ScrollPortfolio() {
  const containerRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isSkipped, setIsSkipped] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    return () => {
      setIsMounted(false);
    };
  }, []);

  useEffect(() => {
    if (!isMounted || isSkipped || typeof window === 'undefined') return;

    const container = containerRef.current;
    if (!container) return;

    const totalSections = portfolioServices.length;

    const timer = setTimeout(() => {
      try {
        const scrollTrigger = ScrollTrigger.create({
          trigger: container,
          start: 'top top',
          end: `+=${totalSections * 100}%`,
          pin: true,
          pinSpacing: true,
          anticipatePin: 1,
          scrub: animationConfig.scrollSpeed,
          snap: {
            snapTo: 1 / (totalSections - 1),
            duration: animationConfig.snapDuration,
            ease: animationConfig.snapEase
          },
          onUpdate: (self) => {
            const progress = self.progress;
            const newIndex = Math.min(
              Math.floor(progress * totalSections),
              totalSections - 1
            );
            setActiveIndex(newIndex);
          },
          invalidateOnRefresh: true
        });

        return () => {
          if (scrollTrigger) {
            scrollTrigger.kill();
          }
        };
      } catch (error) {
        console.error('ScrollTrigger error:', error);
      }
    }, 100);

    return () => {
      clearTimeout(timer);
    };
  }, [isSkipped, isMounted]);

  const handleSkip = () => {
    setIsSkipped(true);
    if (typeof window !== 'undefined') {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      window.scrollBy({ top: window.innerHeight, behavior: 'smooth' });
    }
  };

  const handleServiceClick = (index) => {
    setActiveIndex(index);
    if (containerRef.current) {
      containerRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const currentService = portfolioServices[activeIndex];
  const currentGradient = serviceGradients[currentService.title] || 'from-blue-600 to-blue-800';

  return (
    <section
      ref={containerRef}
      className="relative w-full overflow-hidden"
      style={{ 
        height: 'auto',
        minHeight: '100vh',
        margin: 0, 
        padding: 0
      }}
    >
      {/* Full Background Gradient - Covers entire viewport including behind nav */}
      <div
        className={`absolute lg:fixed top-0 left-0 right-0 bottom-0 bg-gradient-to-br ${currentGradient} transition-all duration-700 ease-in-out`}
        style={{ zIndex: 0 }}
      />
      
      {/* Mobile Layout - Stack vertically */}
      <div className="lg:hidden relative z-10 flex flex-col min-h-screen">
        {/* Mobile Header */}
        <div className="relative overflow-hidden px-6 py-8 bg-black/10">
          <h2 className="text-white text-2xl font-bold leading-tight mb-6">
            Our Strategic IT solutions Deliver -
          </h2>
          
          {/* Mobile Service Selector */}
          <div className="flex overflow-x-auto gap-3 pb-2 scrollbar-hide">
            {portfolioServices.map((service, index) => (
              <button
                key={service.id}
                onClick={() => handleServiceClick(index)}
                className={`flex-shrink-0 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeIndex === index 
                    ? 'bg-white text-gray-900' 
                    : 'bg-white/20 text-white'
                }`}
              >
                {service.title}
              </button>
            ))}
          </div>
        </div>

        {/* Mobile Service Details */}
        <div className="bg-white px-6 py-8 space-y-6">
          <div className="space-y-4">
            <div className="inline-block">
              <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-gradient-to-r ${currentGradient} text-white`}>
                Featured Service
              </span>
            </div>
            <h3 className="text-3xl font-black text-gray-900 leading-tight">
              {currentService.title}
            </h3>
            <p className="text-base text-gray-600 leading-relaxed">
              {currentService.description}
            </p>
          </div>

          {/* Mobile Device Preview - Dynamic with animations */}
          <div className="relative h-80 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl overflow-hidden">
            <MobileDeviceMockups service={currentService} gradient={currentGradient} />
          </div>

          <div className="space-y-4">
            <h4 className="text-sm font-bold text-gray-500 uppercase tracking-wider">Key Features</h4>
            <ul className="space-y-3">
              {currentService.features.map((feature, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <div className={`flex-shrink-0 w-5 h-5 rounded-lg bg-gradient-to-br ${currentGradient} flex items-center justify-center mt-0.5`}>
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-sm text-gray-800 font-medium leading-relaxed">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4 pt-4 border-t border-gray-200">
            <h4 className="text-sm font-bold text-gray-500 uppercase tracking-wider">Trusted By</h4>
            <div className="flex flex-wrap gap-2">
              {currentService.clients.slice(0, layoutConfig.maxClientsVisible).map((client, index) => (
                <div
                  key={index}
                  className={`bg-gradient-to-br ${currentGradient} text-white px-4 py-2 rounded-lg text-xs font-bold`}
                >
                  {client}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile Progress Indicator */}
        <div className="bg-white px-6 py-4 flex items-center justify-center gap-2 border-t border-gray-200">
          {portfolioServices.map((_, index) => (
            <button
              key={index}
              onClick={() => handleServiceClick(index)}
              className={`transition-all duration-300 rounded-full ${
                activeIndex === index 
                  ? 'w-8 h-2 bg-gradient-to-r from-blue-600 to-blue-500' 
                  : 'w-2 h-2 bg-gray-300'
              }`}
              aria-label={`Go to ${portfolioServices[index].title}`}
            />
          ))}
        </div>
      </div>

      {/* Desktop Layout - 3-Column Grid */}
      <div className="hidden lg:grid relative z-10 grid-cols-10 gap-0 h-screen w-full">
        
        {/* COLUMN 1: LEFT SIDEBAR - Service Navigation Menu (30% width) */}
        <div className="col-span-3 relative overflow-hidden">
          {/* Sidebar Content */}
          <div className="relative z-10 h-full flex flex-col pt-[30px] px-[30px] pb-8">
            {/* Header */}
            <div className="mb-12">
              <h2 className="text-white text-[32px] font-bold leading-tight">
                Our Strategic IT solutions Deliver -
              </h2>
            </div>
            
            {/* Navigation Menu Items */}
            <nav className="flex flex-col gap-[60px]">
              {portfolioServices.map((service, index) => (
                <button
                  key={service.id}
                  onClick={() => handleServiceClick(index)}
                  className="group relative block w-full text-left transition-all duration-300"
                >
                  {/* Service Title */}
                  <div className="relative">
                    <span className={`text-white text-[18px] font-medium transition-all duration-300 ${
                      activeIndex === index 
                        ? 'opacity-100' 
                        : 'opacity-70 group-hover:opacity-85 group-hover:brightness-110'
                    }`}>
                      {service.title}
                    </span>
                    
                    {/* Active State: Underline - 3px solid white, 50px width */}
                    <div 
                      className={`absolute left-0 h-[3px] bg-white transition-all duration-300 ${
                        activeIndex === index ? 'w-[50px] opacity-100 mt-2' : 'w-0 opacity-0'
                      }`}
                      style={{ top: '100%' }}
                    />
                  </div>
                </button>
              ))}
            </nav>
          </div>
        </div>

        {/* COLUMN 2: CENTER - Device Mockups Display (40% width) */}
        <div className="col-span-4 flex items-center justify-center relative bg-white/95 backdrop-blur-sm">
          <DeviceMockups service={currentService} />
        </div>

        {/* COLUMN 3: RIGHT SIDEBAR - Service Details (30% width) */}
        <div className="col-span-3 flex flex-col justify-center space-y-8 bg-white/95 backdrop-blur-sm px-10 py-8 border-l border-white/20">
          <div className="space-y-5">
            <div className="inline-block">
              <span className={`px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-gradient-to-r ${currentGradient} text-white shadow-lg`}>
                Featured Service
              </span>
            </div>
            <h3 className="text-4xl font-black text-gray-900 leading-tight">
              {currentService.title}
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              {currentService.description}
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="text-sm font-bold text-gray-500 uppercase tracking-wider">Key Features</h4>
            <ul className="space-y-4">
              {currentService.features.map((feature, index) => (
                <li key={index} className="flex items-start space-x-4 group">
                  <div className={`flex-shrink-0 w-6 h-6 rounded-lg bg-gradient-to-br ${currentGradient} flex items-center justify-center mt-0.5 shadow-md group-hover:scale-110 transition-transform duration-300`}>
                    <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-base text-gray-800 font-medium leading-relaxed">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-5 pt-4 border-t border-gray-200">
            <h4 className="text-sm font-bold text-gray-500 uppercase tracking-wider">Trusted By</h4>
            <div className="flex flex-wrap gap-3">
              {currentService.clients.slice(0, layoutConfig.maxClientsVisible).map((client, index) => (
                <div
                  key={index}
                  className={`bg-gradient-to-br ${currentGradient} text-white px-5 py-2.5 rounded-xl text-sm font-bold shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300`}
                >
                  {client}
                </div>
              ))}
            </div>
            <button className="inline-flex items-center gap-2 text-base font-bold text-blue-600 hover:text-blue-700 transition-colors group">
              View All Clients
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Skip Button - Desktop Only */}
      {layoutConfig.showSkipButton && (
        <button
          onClick={handleSkip}
          className="hidden lg:flex absolute top-10 right-10 bg-white/95 backdrop-blur-sm text-gray-900 px-8 py-3 rounded-full text-base font-bold hover:bg-white hover:shadow-xl transition-all duration-300 z-[80] border border-gray-200 hover:scale-105 items-center gap-2"
        >
          <span>SKIP</span>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </button>
      )}

      {/* Progress Indicator - Desktop Only */}
      {layoutConfig.showProgressIndicator && (
        <div className="hidden lg:flex absolute bottom-10 left-1/2 transform -translate-x-1/2 items-center gap-3 z-[80] bg-white/90 backdrop-blur-md px-6 py-3 rounded-full shadow-lg border border-gray-200">
          {portfolioServices.map((_, index) => (
            <button
              key={index}
              onClick={() => handleServiceClick(index)}
              className={`transition-all duration-300 rounded-full ${
                activeIndex === index 
                  ? 'w-12 h-3 bg-gradient-to-r from-blue-600 to-blue-500 shadow-md' 
                  : 'w-3 h-3 bg-gray-300 hover:bg-gray-400 hover:scale-110'
              }`}
              aria-label={`Go to ${portfolioServices[index].title}`}
            />
          ))}
        </div>
      )}
    </section>
  );
}

// Device Mockups with Unique Designs per Service
function DeviceMockups({ service }) {
  // Web Applications: MacBook + iPad + iPhone
  if (service.title === 'Web Applications') {
    return (
      <div className="relative w-full h-full flex items-center justify-center py-12">
        {/* MacBook Pro - Center */}
        <div className="absolute z-30 w-[55%] max-w-[480px] transition-all duration-700">
          <div className="relative">
            <div className="bg-gray-900 rounded-t-2xl p-1 shadow-2xl border border-gray-800 relative">
              {/* Glass reflection */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-t-2xl pointer-events-none"></div>
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-gray-900 rounded-b-2xl z-10"></div>
              <div className="bg-white rounded-lg overflow-hidden aspect-video relative">
                <DeviceContent service={service} type="laptop" label="MacBook Pro" />
              </div>
            </div>
            <div className="h-1.5 bg-gradient-to-b from-gray-800 to-gray-700 rounded-b-2xl shadow-lg"></div>
            <div className="h-0.5 bg-gray-600 w-4/5 mx-auto rounded-b-xl"></div>
          </div>
        </div>
        {/* iPad - Right */}
        <div className="absolute z-20 right-[8%] top-[18%] w-[32%] max-w-[260px] transition-all duration-700">
          <div className="bg-gray-800 rounded-2xl p-1.5 shadow-xl relative">
            {/* Glass effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-2xl pointer-events-none"></div>
            <div className="bg-white rounded-xl overflow-hidden aspect-[3/4] relative">
              <DeviceContent service={service} type="tablet" label="iPad" />
            </div>
          </div>
        </div>
        {/* iPhone - Left Bottom */}
        <div className="absolute z-10 left-[12%] bottom-[12%] w-[18%] max-w-[140px] transition-all duration-700">
          <div className="bg-gray-900 rounded-[2.5rem] p-1 shadow-lg relative">
            {/* Premium glass reflection */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-[2.5rem] pointer-events-none"></div>
            {/* Dynamic Island - Pill shaped with proper styling */}
            <div className="absolute top-2.5 left-1/2 transform -translate-x-1/2 z-10 flex items-center justify-center">
              <div className="bg-black rounded-full px-4 py-1.5 shadow-inner flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-purple-600 rounded-full animate-pulse"></div>
                <div className="w-1 h-1 bg-gray-800 rounded-full"></div>
              </div>
            </div>
            <div className="bg-white rounded-[2rem] overflow-hidden aspect-[9/19] relative">
              <DeviceContent service={service} type="mobile" label="iPhone 15" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Web Designing: iMac + Surface + Pixel
  if (service.title === 'Web Designing') {
    return (
      <div className="relative w-full h-full flex items-center justify-center py-12">
        {/* iMac - Left */}
        <div className="absolute z-30 left-[5%] w-[52%] max-w-[460px] transition-all duration-700">
          <div className="relative">
            <div className="bg-gray-200 rounded-2xl p-1 shadow-2xl">
              <div className="bg-white rounded-xl overflow-hidden aspect-video relative border border-gray-300">
                <DeviceContent service={service} type="laptop" label="iMac 24&quot;" />
              </div>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-20 h-16 bg-gradient-to-b from-gray-200 to-gray-300 rounded-b-lg"></div>
              <div className="w-32 h-3 bg-gray-300 rounded-full shadow-md"></div>
            </div>
          </div>
        </div>
        {/* Surface - Right Center */}
        <div className="absolute z-30 right-[15%] top-[35%] w-[35%] max-w-[280px] transition-all duration-700 rotate-[3deg]">
          <div className="bg-gray-700 rounded-lg p-1 shadow-xl">
            <div className="bg-white rounded-md overflow-hidden aspect-[3/4] relative">
              <DeviceContent service={service} type="tablet" label="Surface Pro" />
            </div>
            <div className="absolute bottom-0 right-2 w-16 h-1 bg-gray-600 rounded-full"></div>
          </div>
        </div>
        {/* Pixel - Right Bottom */}
        <div className="absolute z-10 right-[8%] bottom-[8%] w-[20%] max-w-[150px] transition-all duration-700 rotate-[-5deg]">
          <div className="bg-gray-800 rounded-[2rem] p-1 shadow-lg">
            <div className="absolute top-2 left-0 right-0 h-8 bg-black rounded-t-[2rem]"></div>
            <div className="bg-white rounded-[1.8rem] overflow-hidden aspect-[9/19] relative">
              <DeviceContent service={service} type="mobile" label="Pixel 8 Pro" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  // E-Commerce: Windows Laptop + Android Tablet + Samsung
  if (service.title === 'E-Commerce Website') {
    return (
      <div className="relative w-full h-full flex items-center justify-center py-12">
        {/* Windows Laptop - Top Center */}
        <div className="absolute z-30 top-[8%] w-[58%] max-w-[500px] transition-all duration-700">
          <div className="relative">
            <div className="bg-gray-700 rounded-t-xl p-1 shadow-2xl">
              <div className="bg-white rounded-md overflow-hidden aspect-video relative">
                <DeviceContent service={service} type="laptop" label="Windows 11" />
              </div>
              <div className="absolute top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-gray-900 rounded-full"></div>
            </div>
            <div className="h-3 bg-gradient-to-b from-gray-700 to-gray-600 rounded-b-xl"></div>
            <div className="h-1 bg-gray-500 w-3/4 mx-auto"></div>
          </div>
        </div>
        {/* Android Tablet - Bottom Left */}
        <div className="absolute z-20 left-[8%] bottom-[8%] w-[30%] max-w-[240px] transition-all duration-700">
          <div className="bg-gray-800 rounded-xl p-1 shadow-xl">
            <div className="bg-white rounded-lg overflow-hidden aspect-[16/10] relative">
              <DeviceContent service={service} type="tablet" label="Android Tablet" />
            </div>
          </div>
        </div>
        {/* Samsung - Bottom Right */}
        <div className="absolute z-20 right-[10%] bottom-[10%] w-[22%] max-w-[160px] transition-all duration-700">
          <div className="bg-gradient-to-br from-purple-900 to-blue-900 rounded-[2rem] p-1 shadow-lg">
            <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-gray-900 rounded-full z-10"></div>
            <div className="bg-white rounded-[1.8rem] overflow-hidden aspect-[9/19] relative">
              <DeviceContent service={service} type="mobile" label="Galaxy S24" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Mobile App: iPhone Pro + iPad Pro + MacBook Air
  if (service.title === 'Mobile App Development') {
    return (
      <div className="relative w-full h-full flex items-center justify-center py-12">
        {/* iPhone Pro - Center Large */}
        <div className="absolute z-30 w-[28%] max-w-[220px] transition-all duration-700">
          <div className="bg-gradient-to-br from-gray-900 to-black rounded-[2.5rem] p-1 shadow-2xl border border-gray-700">
            {/* Dynamic Island - Larger pill shape with camera and sensors */}
            <div className="absolute top-3 left-1/2 transform -translate-x-1/2 z-10 flex items-center justify-center">
              <div className="bg-black rounded-full px-5 py-2 shadow-inner flex items-center gap-2.5">
                <div className="w-2 h-2 bg-purple-600 rounded-full animate-pulse"></div>
                <div className="w-1.5 h-1.5 bg-gray-800 rounded-full"></div>
              </div>
            </div>
            <div className="bg-white rounded-[2rem] overflow-hidden aspect-[9/19] relative">
              <DeviceContent service={service} type="mobile" label="iPhone 15 Pro Max" />
            </div>
          </div>
        </div>
        {/* iPad Pro - Left */}
        <div className="absolute z-20 left-[8%] top-[20%] w-[32%] max-w-[260px] transition-all duration-700 rotate-[-3deg]">
          <div className="bg-gray-900 rounded-2xl p-1 shadow-xl border border-gray-700">
            <div className="bg-white rounded-xl overflow-hidden aspect-[4/3] relative">
              <DeviceContent service={service} type="tablet" label="iPad Pro" />
            </div>
          </div>
        </div>
        {/* MacBook Air - Right Small */}
        <div className="absolute z-10 right-[5%] bottom-[15%] w-[42%] max-w-[360px] transition-all duration-700 rotate-[2deg]">
          <div className="relative">
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-t-xl p-1 shadow-xl">
              <div className="bg-white rounded-lg overflow-hidden aspect-video relative">
                <DeviceContent service={service} type="laptop" label="MacBook Air" />
              </div>
            </div>
            <div className="h-1.5 bg-gray-800 rounded-b-xl"></div>
          </div>
        </div>
      </div>
    );
  }

  // Desktop Apps: Gaming Monitor + iPad Mini + Pixel Fold
  if (service.title === 'Desktop Applications') {
    return (
      <div className="relative w-full h-full flex items-center justify-center py-12">
        {/* Gaming Monitor - Large Center */}
        <div className="absolute z-30 w-[65%] max-w-[550px] transition-all duration-700">
          <div className="relative">
            <div className="bg-black rounded-lg p-1 shadow-2xl border border-red-600">
              <div className="bg-white rounded-md overflow-hidden aspect-video relative">
                <DeviceContent service={service} type="laptop" label="Gaming Monitor" />
              </div>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-12 bg-gradient-to-b from-gray-900 to-black"></div>
              <div className="w-24 h-2 bg-black rounded-full"></div>
            </div>
          </div>
        </div>
        {/* iPad Mini - Top Right */}
        <div className="absolute z-20 right-[5%] top-[8%] w-[25%] max-w-[200px] transition-all duration-700 rotate-[5deg]">
          <div className="bg-purple-900 rounded-2xl p-1 shadow-lg">
            <div className="bg-white rounded-xl overflow-hidden aspect-[3/4] relative">
              <DeviceContent service={service} type="tablet" label="iPad Mini" />
            </div>
          </div>
        </div>
        {/* Pixel Fold - Bottom Left */}
        <div className="absolute z-10 left-[8%] bottom-[8%] w-[15%] max-w-[120px] transition-all duration-700">
          <div className="bg-gray-900 rounded-[1.5rem] p-1.5 shadow-lg">
            <div className="bg-white rounded-[1.2rem] overflow-hidden aspect-[9/19] relative">
              <DeviceContent service={service} type="mobile" label="Pixel Fold" />
              <div className="absolute top-0 bottom-0 left-1/2 w-0.5 bg-gray-300 opacity-30"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // SEO: iMac + Kindle + OnePlus
  if (service.title === 'Search Engine Optimization') {
    return (
      <div className="relative w-full h-full flex items-center justify-center py-12">
        {/* iMac - Left with black thin bezel */}
        <div className="absolute z-20 left-[5%] w-[48%] max-w-[420px] transition-all duration-700">
          <div className="relative">
            {/* iMac Screen with thin black bezel and glass effect */}
            <div className="bg-black rounded-2xl p-0.5 shadow-2xl relative">
              {/* Glass reflection effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-2xl pointer-events-none"></div>
              <div className="bg-white rounded-xl overflow-hidden aspect-video relative">
                <DeviceContent service={service} type="laptop" label="iMac 24&quot;" />
              </div>
              {/* Bottom chin with camera */}
              <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-gray-800 rounded-full"></div>
            </div>
            {/* iMac Stand with metallic effect */}
            <div className="flex flex-col items-center">
              <div className="w-16 h-14 bg-gradient-to-b from-gray-300 via-gray-200 to-gray-300 rounded-b-lg shadow-inner"></div>
              <div className="w-28 h-2.5 bg-gradient-to-r from-gray-300 via-gray-200 to-gray-300 rounded-full shadow-lg"></div>
            </div>
          </div>
        </div>
        {/* Kindle - Center with thin bezel and matte finish */}
        <div className="absolute z-30 w-[32%] max-w-[260px] transition-all duration-700">
          <div className="bg-gray-900 rounded-lg p-0.5 shadow-xl relative">
            {/* Subtle reflection */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-lg pointer-events-none"></div>
            <div className="bg-gray-100 rounded-md overflow-hidden aspect-[3/4] relative">
              <DeviceContent service={service} type="tablet" label="Kindle" />
            </div>
          </div>
        </div>
        {/* OnePlus - Right with premium finish */}
        <div className="absolute z-20 right-[8%] w-[20%] max-w-[160px] transition-all duration-700">
          <div className="bg-gradient-to-br from-red-900 via-red-800 to-red-900 rounded-[2rem] p-1 shadow-lg relative">
            {/* Glass reflection effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-[2rem] pointer-events-none"></div>
            {/* Dynamic Island - iPhone Style */}
            <div className="absolute top-2 left-1/2 transform -translate-x-1/2 z-10 flex items-center justify-center">
              <div className="bg-black rounded-full px-3 py-1 shadow-inner flex items-center gap-1.5">
                <div className="w-1 h-1 bg-purple-600 rounded-full animate-pulse"></div>
                <div className="w-0.5 h-0.5 bg-gray-800 rounded-full"></div>
              </div>
            </div>
            <div className="bg-white rounded-[1.8rem] overflow-hidden aspect-[9/19] relative">
              <DeviceContent service={service} type="mobile" label="OnePlus 12" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Social Media: MacBook Pro + Galaxy Tab + iPhone Mini
  if (service.title === 'Social Media Marketing') {
    return (
      <div className="relative w-full h-full flex items-center justify-center py-12">
        {/* MacBook Pro - Bottom Left */}
        <div className="absolute z-20 left-[8%] bottom-[12%] w-[48%] max-w-[400px] transition-all duration-700 rotate-[3deg]">
          <div className="relative">
            <div className="bg-gray-900 rounded-t-2xl p-1 shadow-2xl">
              <div className="bg-white rounded-lg overflow-hidden aspect-video relative">
                <DeviceContent service={service} type="laptop" label="MacBook Pro 16&quot;" />
              </div>
            </div>
            <div className="h-2.5 bg-gray-800 rounded-b-2xl"></div>
            <div className="h-1 bg-gray-700 w-4/5 mx-auto rounded-b-lg"></div>
          </div>
        </div>
        {/* Galaxy Tab - Top Right */}
        <div className="absolute z-30 right-[10%] top-[10%] w-[35%] max-w-[280px] transition-all duration-700 rotate-[-4deg]">
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-1 shadow-xl">
            <div className="bg-white rounded-xl overflow-hidden aspect-[16/10] relative">
              <DeviceContent service={service} type="tablet" label="Galaxy Tab" />
            </div>
          </div>
        </div>
        {/* iPhone Mini - Center */}
        <div className="absolute z-10 right-[25%] top-[40%] w-[22%] max-w-[170px] transition-all duration-700 rotate-[2deg]">
          <div className="bg-blue-900 rounded-[2rem] p-1 shadow-lg">
            {/* Dynamic Island - Smaller pill shape */}
            <div className="absolute top-2 left-1/2 transform -translate-x-1/2 z-10 flex items-center justify-center">
              <div className="bg-black rounded-full px-3 py-1 shadow-inner flex items-center gap-1.5">
                <div className="w-1 h-1 bg-purple-600 rounded-full animate-pulse"></div>
                <div className="w-0.5 h-0.5 bg-gray-800 rounded-full"></div>
              </div>
            </div>
            <div className="bg-white rounded-[1.5rem] overflow-hidden aspect-[9/19] relative">
              <DeviceContent service={service} type="mobile" label="iPhone 13 Mini" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Default fallback
  return null;
}

// Reusable Device Content Component
function DeviceContent({ service, type, label }) {
  const bgColors = {
    laptop: 'bg-white',
    tablet: 'bg-white',
    mobile: 'bg-white'
  };

  const sizes = {
    laptop: { icon: 'w-12 h-12', title: 'text-xs', desc: 'text-[10px]', badge: 'text-[9px] px-2 py-1' },
    tablet: { icon: 'w-10 h-10', title: 'text-[10px]', desc: 'text-[8px]', badge: 'text-[7px] px-1.5 py-0.5' },
    mobile: { icon: 'w-6 h-6', title: 'text-[8px]', desc: 'text-[6px]', badge: 'text-[6px] px-1 py-0.5' }
  };

  const size = sizes[type];

  return (
    <div className={`w-full h-full flex flex-col items-center justify-center p-3 ${bgColors[type]}`}>
      <div className={`${size.icon} rounded-xl flex items-center justify-center mb-2`} style={{ background: `linear-gradient(135deg, ${getGradientColors(service.color)})` }}>
        <ServiceIcon title={service.title} className={`${type === 'mobile' ? 'w-3 h-3' : type === 'tablet' ? 'w-5 h-5' : 'w-6 h-6'} text-white`} />
      </div>
      <h4 className={`${size.title} font-bold text-gray-900 text-center mb-1 line-clamp-1 px-1`}>{service.title}</h4>
      {type === 'laptop' && (
        <p className={`${size.desc} text-gray-600 text-center line-clamp-2 px-2 mb-2`}>{service.description}</p>
      )}
      <div className={`${size.badge} font-semibold text-white rounded-full`} style={{ background: `linear-gradient(90deg, ${getGradientColors(service.color)})` }}>
        {label}
      </div>
    </div>
  );
}

// Helper function to get solid gradient colors
function getGradientColors(colorClass) {
  const colorMap = {
    'from-[#0066FF] to-[#0047B3]': '#0066FF, #0047B3',
    'from-[#2EAE4D] to-[#1E7A33]': '#2EAE4D, #1E7A33',
    'from-[#00B8D4] to-[#008BA3]': '#00B8D4, #008BA3',
    'from-[#6B4FBB] to-[#4A3580]': '#6B4FBB, #4A3580',
    'from-[#E94E3D] to-[#B33A2C]': '#E94E3D, #B33A2C',
    'from-[#FF7A3D] to-[#CC5E2E]': '#FF7A3D, #CC5E2E'
  };
  return colorMap[colorClass] || '#0066FF, #0047B3';
}

// Service Icon Component
function ServiceIcon({ title, className }) {
  const icons = {
    'Web Applications': (
      <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    'Web Designing': (
      <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
      </svg>
    ),
    'E-Commerce Website': (
      <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    'Mobile App Development': (
      <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
    'Desktop Applications': (
      <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    'Search Engine Optimization': (
      <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
    'Social Media Marketing': (
      <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
      </svg>
    )
  };

  return icons[title] || icons['Web Applications'];
}

// Mobile Device Mockups - High-quality unique designs with advanced animations
function MobileDeviceMockups({ service, gradient }) {
  // Web Applications: MacBook Pro + iPhone 15 Pro with 3D perspective
  if (service.title === 'Web Applications') {
    return (
      <div className="relative w-full h-full flex items-center justify-center p-4" style={{ perspective: '1000px' }}>
        {/* Animated background glow */}
        <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-5 animate-pulse-slow`}></div>
        
        {/* MacBook Pro - Center with 3D tilt */}
        <div className="absolute z-20 w-[75%] max-w-[300px] top-[12%] animate-device-float" style={{ transformStyle: 'preserve-3d' }}>
          <div className="relative group">
            {/* Screen glow effect */}
            <div className={`absolute -inset-2 bg-gradient-to-r ${gradient} opacity-20 blur-xl group-hover:opacity-30 transition-opacity duration-500`}></div>
            <div className="relative bg-gradient-to-b from-gray-900 to-gray-800 rounded-t-2xl p-1 shadow-2xl border border-gray-700">
              {/* Camera notch */}
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-24 h-4 bg-gray-900 rounded-b-xl z-10 flex items-center justify-center">
                <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></div>
              </div>
              {/* Screen with gradient reflection */}
              <div className="relative bg-white rounded-t-lg overflow-hidden aspect-video">
                <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-transparent to-transparent pointer-events-none"></div>
                <DeviceContent service={service} type="laptop" label="MacBook Pro 16&quot;" />
              </div>
            </div>
            {/* Keyboard base with metallic effect */}
            <div className="h-2 bg-gradient-to-b from-gray-800 via-gray-700 to-gray-800 rounded-b-2xl shadow-xl"></div>
            <div className="h-0.5 bg-gradient-to-r from-transparent via-gray-600 to-transparent w-4/5 mx-auto"></div>
          </div>
        </div>
        
        {/* iPhone 15 Pro - Bottom Right with rotation */}
        <div className="absolute z-30 w-[38%] max-w-[130px] bottom-[5%] right-[8%] animate-device-float-delayed rotate-[8deg]" style={{ transformStyle: 'preserve-3d' }}>
          <div className="relative group">
            {/* Phone glow */}
            <div className={`absolute -inset-1 bg-gradient-to-r ${gradient} opacity-30 blur-lg group-hover:opacity-40 transition-opacity duration-500`}></div>
            <div className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-black rounded-[2.2rem] p-1 shadow-2xl border border-gray-700">
              {/* Dynamic Island with animation */}
              <div className="absolute top-3 left-1/2 transform -translate-x-1/2 z-10">
                <div className="bg-black rounded-full px-4 py-1.5 shadow-inner flex items-center gap-2 animate-pulse-subtle">
                  <div className="w-1.5 h-1.5 bg-purple-500 rounded-full animate-ping-slow"></div>
                  <div className="w-1 h-1 bg-gray-700 rounded-full"></div>
                </div>
              </div>
              {/* Screen with glass effect */}
              <div className="relative bg-white rounded-[2rem] overflow-hidden aspect-[9/19.5]">
                <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-transparent to-transparent pointer-events-none"></div>
                <DeviceContent service={service} type="mobile" label="iPhone 15 Pro" />
              </div>
              {/* Side buttons */}
              <div className="absolute left-0 top-20 w-0.5 h-8 bg-gray-700 rounded-r"></div>
              <div className="absolute right-0 top-16 w-0.5 h-12 bg-gray-700 rounded-l"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Web Designing: iMac 24" + iPad Pro with Apple Pencil
  if (service.title === 'Web Designing') {
    return (
      <div className="relative w-full h-full flex items-center justify-center p-4" style={{ perspective: '1200px' }}>
        {/* Colorful design background */}
        <div className="absolute inset-0 bg-gradient-to-br from-green-100 via-blue-50 to-purple-50 opacity-30 animate-gradient-shift"></div>
        
        {/* iMac 24" - Center with chin */}
        <div className="absolute z-20 w-[78%] max-w-[310px] top-[8%] animate-device-float-slow" style={{ transformStyle: 'preserve-3d' }}>
          <div className="relative group">
            {/* Screen glow - colorful */}
            <div className="absolute -inset-3 bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 opacity-20 blur-2xl group-hover:opacity-30 transition-opacity duration-700"></div>
            {/* iMac body with thin bezels */}
            <div className="relative bg-gradient-to-b from-gray-100 to-gray-200 rounded-2xl p-0.5 shadow-2xl">
              {/* Ultra-thin bezel */}
              <div className="bg-black rounded-2xl p-[2px]">
                <div className="relative bg-white rounded-[15px] overflow-hidden aspect-video">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/50 via-transparent to-transparent pointer-events-none"></div>
                  <DeviceContent service={service} type="laptop" label="iMac 24&quot; Design" />
                </div>
              </div>
              {/* Bottom chin with camera */}
              <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-gray-800 rounded-full"></div>
            </div>
            {/* Aluminum stand */}
            <div className="flex flex-col items-center">
              <div className="w-14 h-12 bg-gradient-to-b from-gray-200 via-gray-100 to-gray-200 rounded-b-xl shadow-inner"></div>
              <div className="w-24 h-2.5 bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 rounded-full shadow-lg"></div>
            </div>
          </div>
        </div>
        
        {/* iPad Pro with Pencil - Bottom Left */}
        <div className="absolute z-30 w-[42%] max-w-[150px] bottom-[6%] left-[6%] rotate-[-12deg] animate-device-float-delayed" style={{ transformStyle: 'preserve-3d' }}>
          <div className="relative group">
            {/* iPad glow */}
            <div className="absolute -inset-2 bg-gradient-to-r from-blue-400 to-purple-400 opacity-25 blur-lg group-hover:opacity-35 transition-opacity duration-500"></div>
            <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-1 shadow-xl border border-gray-700">
              {/* Screen */}
              <div className="relative bg-white rounded-xl overflow-hidden aspect-[4/3]">
                <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-transparent to-transparent pointer-events-none"></div>
                <DeviceContent service={service} type="tablet" label="iPad Pro" />
              </div>
              {/* Camera bump */}
              <div className="absolute top-2 right-2 w-3 h-3 bg-gray-900 rounded-full border border-gray-700"></div>
            </div>
            {/* Apple Pencil */}
            <div className="absolute -right-2 top-1/2 transform translate-x-full -translate-y-1/2 rotate-45 w-1 h-16 bg-gradient-to-b from-white via-gray-100 to-white rounded-full shadow-lg"></div>
          </div>
        </div>
      </div>
    );
  }

  // E-Commerce: Surface Laptop + Galaxy S24 Ultra with shopping cart animation
  if (service.title === 'E-Commerce Website') {
    return (
      <div className="relative w-full h-full flex items-center justify-center p-4" style={{ perspective: '1000px' }}>
        {/* Shopping theme background */}
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-50 via-blue-50 to-teal-50 opacity-40 animate-gradient-shift"></div>
        
        {/* Floating cart icon */}
        <div className="absolute top-4 right-4 z-10 animate-bounce-slow">
          <div className={`w-8 h-8 rounded-full bg-gradient-to-br ${gradient} flex items-center justify-center shadow-lg`}>
            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          </div>
        </div>
        
        {/* Surface Laptop - Top with keyboard visible */}
        <div className="absolute z-20 w-[76%] max-w-[305px] top-[8%] animate-device-float-slow" style={{ transformStyle: 'preserve-3d' }}>
          <div className="relative group">
            {/* Screen glow */}
            <div className={`absolute -inset-3 bg-gradient-to-r ${gradient} opacity-20 blur-xl group-hover:opacity-30 transition-opacity duration-500`}></div>
            <div className="relative bg-gradient-to-b from-gray-700 to-gray-800 rounded-t-xl p-1 shadow-2xl">
              {/* Webcam */}
              <div className="absolute top-1 left-1/2 transform -translate-x-1/2 w-1.5 h-1.5 bg-gray-900 rounded-full z-10"></div>
              {/* Screen */}
              <div className="relative bg-white rounded-t-md overflow-hidden aspect-video">
                <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-transparent to-transparent pointer-events-none"></div>
                <DeviceContent service={service} type="laptop" label="E-Commerce Store" />
              </div>
            </div>
            {/* Keyboard base */}
            <div className="h-2.5 bg-gradient-to-b from-gray-700 via-gray-600 to-gray-700 rounded-b-xl shadow-xl"></div>
            <div className="h-0.5 bg-gray-500 w-3/4 mx-auto"></div>
          </div>
        </div>
        
        {/* Galaxy S24 Ultra - Bottom with S Pen */}
        <div className="absolute z-30 w-[40%] max-w-[140px] bottom-[8%] right-[10%] rotate-[6deg] animate-device-float-delayed" style={{ transformStyle: 'preserve-3d' }}>
          <div className="relative group">
            {/* Phone glow */}
            <div className={`absolute -inset-2 bg-gradient-to-r ${gradient} opacity-30 blur-lg group-hover:opacity-40 transition-opacity duration-500`}></div>
            <div className="relative bg-gradient-to-br from-purple-900 via-blue-900 to-purple-900 rounded-[2rem] p-1 shadow-2xl border border-purple-700">
              {/* Punch hole camera */}
              <div className="absolute top-3 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-gray-900 rounded-full z-10 border border-gray-800"></div>
              {/* Screen */}
              <div className="relative bg-white rounded-[1.8rem] overflow-hidden aspect-[9/19.5]">
                <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent pointer-events-none"></div>
                <DeviceContent service={service} type="mobile" label="Galaxy S24 Ultra" />
              </div>
              {/* Camera module */}
              <div className="absolute top-3 left-3 w-8 h-10 bg-gray-900 rounded-2xl border border-gray-800 flex flex-col items-center justify-around py-1">
                <div className="w-3 h-3 bg-gray-700 rounded-full"></div>
                <div className="w-2.5 h-2.5 bg-gray-700 rounded-full"></div>
                <div className="w-2 h-2 bg-gray-700 rounded-full"></div>
              </div>
            </div>
            {/* S Pen */}
            <div className="absolute -left-1 bottom-4 w-0.5 h-12 bg-gradient-to-b from-purple-400 to-purple-600 rounded-full shadow-lg transform -rotate-12"></div>
          </div>
        </div>
      </div>
    );
  }

  // Mobile App: iPhone 15 Pro Max + iPad Pro + Pixel 8 Pro - Triple device showcase
  if (service.title === 'Mobile App Development') {
    return (
      <div className="relative w-full h-full flex items-center justify-center p-4" style={{ perspective: '1500px' }}>
        {/* Code-themed background */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50 opacity-40 animate-gradient-shift"></div>
        
        {/* Floating code brackets */}
        <div className="absolute top-6 left-6 text-purple-300 text-2xl font-mono animate-pulse-slow opacity-30">&lt;/&gt;</div>
        <div className="absolute bottom-6 right-6 text-blue-300 text-xl font-mono animate-pulse-slow opacity-30">{ }</div>
        
        {/* iPhone 15 Pro Max - Center Large with Dynamic Island */}
        <div className="absolute z-40 w-[48%] max-w-[170px] animate-device-float-center" style={{ transformStyle: 'preserve-3d' }}>
          <div className="relative group">
            {/* Premium glow */}
            <div className="absolute -inset-3 bg-gradient-to-r from-purple-500 via-blue-500 to-purple-500 opacity-30 blur-xl group-hover:opacity-40 transition-opacity duration-700 animate-pulse-slow"></div>
            <div className="relative bg-gradient-to-br from-gray-900 via-black to-gray-900 rounded-[2.5rem] p-1 shadow-2xl border border-gray-700">
              {/* Dynamic Island - Premium animation */}
              <div className="absolute top-3 left-1/2 transform -translate-x-1/2 z-10">
                <div className="bg-black rounded-full px-5 py-2 shadow-inner flex items-center gap-2.5 animate-pulse-subtle">
                  <div className="w-2 h-2 bg-purple-500 rounded-full animate-ping-slow"></div>
                  <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse"></div>
                  <div className="w-1 h-1 bg-gray-700 rounded-full"></div>
                </div>
              </div>
              {/* Screen with premium glass effect */}
              <div className="relative bg-white rounded-[2.2rem] overflow-hidden aspect-[9/19.5]">
                <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-transparent to-transparent pointer-events-none"></div>
                <div className="absolute inset-0 bg-gradient-to-tl from-purple-100/20 via-transparent to-blue-100/20 pointer-events-none"></div>
                <DeviceContent service={service} type="mobile" label="iPhone 15 Pro Max" />
              </div>
              {/* Action button */}
              <div className="absolute left-0 top-24 w-0.5 h-6 bg-orange-500 rounded-r shadow-lg"></div>
              {/* Volume buttons */}
              <div className="absolute left-0 top-16 w-0.5 h-4 bg-gray-700 rounded-r"></div>
              <div className="absolute left-0 top-20 w-0.5 h-4 bg-gray-700 rounded-r"></div>
              {/* Power button */}
              <div className="absolute right-0 top-20 w-0.5 h-8 bg-gray-700 rounded-l"></div>
            </div>
          </div>
        </div>
        
        {/* iPad Pro - Left with Magic Keyboard */}
        <div className="absolute z-30 w-[44%] max-w-[155px] left-[4%] top-[18%] rotate-[-8deg] animate-device-float-delayed" style={{ transformStyle: 'preserve-3d' }}>
          <div className="relative group">
            {/* iPad glow */}
            <div className="absolute -inset-2 bg-gradient-to-r from-blue-400 to-cyan-400 opacity-25 blur-lg group-hover:opacity-35 transition-opacity duration-500"></div>
            <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-1 shadow-xl border border-gray-700">
              {/* Screen */}
              <div className="relative bg-white rounded-xl overflow-hidden aspect-[4/3]">
                <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-transparent to-transparent pointer-events-none"></div>
                <DeviceContent service={service} type="tablet" label="iPad Pro 12.9&quot;" />
              </div>
              {/* Camera module */}
              <div className="absolute top-2 right-2 w-4 h-4 bg-gray-900 rounded-lg border border-gray-700 flex items-center justify-center">
                <div className="w-2 h-2 bg-gray-700 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Pixel 8 Pro - Right with Material You design */}
        <div className="absolute z-30 w-[38%] max-w-[130px] right-[6%] bottom-[12%] rotate-[10deg] animate-device-float-slow" style={{ transformStyle: 'preserve-3d' }}>
          <div className="relative group">
            {/* Pixel glow */}
            <div className="absolute -inset-2 bg-gradient-to-r from-green-400 to-blue-400 opacity-25 blur-lg group-hover:opacity-35 transition-opacity duration-500"></div>
            <div className="relative bg-gradient-to-br from-gray-800 via-gray-900 to-black rounded-[2rem] p-1 shadow-xl border border-gray-700">
              {/* Punch hole camera */}
              <div className="absolute top-3 left-1/2 transform -translate-x-1/2 w-2.5 h-2.5 bg-gray-900 rounded-full z-10 border border-gray-800"></div>
              {/* Screen */}
              <div className="relative bg-white rounded-[1.8rem] overflow-hidden aspect-[9/20]">
                <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent pointer-events-none"></div>
                <DeviceContent service={service} type="mobile" label="Pixel 8 Pro" />
              </div>
              {/* Camera bar - Pixel signature */}
              <div className="absolute top-2 left-2 right-2 h-8 bg-gray-900 rounded-full border border-gray-800 flex items-center justify-around px-2">
                <div className="w-4 h-4 bg-gray-700 rounded-full"></div>
                <div className="w-3.5 h-3.5 bg-gray-700 rounded-full"></div>
                <div className="w-2.5 h-2.5 bg-blue-500 rounded-full animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Desktop Applications: Curved Gaming Monitor + Mechanical Keyboard aesthetic
  if (service.title === 'Desktop Applications') {
    return (
      <div className="relative w-full h-full flex items-center justify-center p-4" style={{ perspective: '1200px' }}>
        {/* Tech background */}
        <div className="absolute inset-0 bg-gradient-to-br from-red-50 via-orange-50 to-yellow-50 opacity-30 animate-gradient-shift"></div>
        
        {/* RGB lighting effect */}
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-red-500/20 via-purple-500/10 to-transparent animate-pulse-slow"></div>
        
        {/* Curved Gaming Monitor - Center Large */}
        <div className="absolute z-30 w-[82%] max-w-[330px] top-[10%] animate-device-float-slow" style={{ transformStyle: 'preserve-3d' }}>
          <div className="relative group">
            {/* RGB glow */}
            <div className="absolute -inset-3 bg-gradient-to-r from-red-500 via-purple-500 to-blue-500 opacity-25 blur-xl group-hover:opacity-35 transition-opacity duration-700 animate-pulse-slow"></div>
            {/* Monitor with RGB trim */}
            <div className="relative bg-black rounded-2xl p-1 shadow-2xl border-2 border-red-600">
              {/* Screen */}
              <div className="relative bg-white rounded-xl overflow-hidden aspect-[21/9]">
                <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent pointer-events-none"></div>
                <DeviceContent service={service} type="laptop" label="Gaming Monitor 34&quot;" />
              </div>
              {/* RGB LED strip bottom */}
              <div className="absolute -bottom-1 left-0 right-0 h-1 bg-gradient-to-r from-red-500 via-purple-500 to-blue-500 rounded-b-xl animate-pulse-slow"></div>
            </div>
            {/* Monitor stand with RGB */}
            <div className="flex flex-col items-center">
              <div className="w-12 h-10 bg-gradient-to-b from-gray-900 via-black to-gray-900 rounded-b-lg shadow-xl border-x-2 border-red-600"></div>
              <div className="w-20 h-2.5 bg-gradient-to-r from-gray-900 via-black to-gray-900 rounded-full shadow-lg border border-red-600"></div>
            </div>
          </div>
        </div>
        
        {/* iPad Mini - Bottom Right for companion app */}
        <div className="absolute z-20 w-[34%] max-w-[115px] bottom-[6%] right-[6%] rotate-[12deg] animate-device-float-delayed" style={{ transformStyle: 'preserve-3d' }}>
          <div className="relative group">
            {/* Tablet glow */}
            <div className="absolute -inset-2 bg-gradient-to-r from-purple-400 to-red-400 opacity-25 blur-lg group-hover:opacity-35 transition-opacity duration-500"></div>
            <div className="relative bg-gradient-to-br from-purple-900 to-red-900 rounded-2xl p-1 shadow-xl border border-purple-700">
              {/* Screen */}
              <div className="relative bg-white rounded-xl overflow-hidden aspect-[3/4]">
                <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent pointer-events-none"></div>
                <DeviceContent service={service} type="tablet" label="Control Panel" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // SEO: iMac 24" + OnePlus with search theme
  if (service.title === 'Search Engine Optimization') {
    return (
      <div className="relative w-full h-full flex items-center justify-center p-4" style={{ perspective: '1100px' }}>
        {/* Search-themed background */}
        <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-yellow-50 to-amber-50 opacity-35 animate-gradient-shift"></div>
        
        {/* Floating search icon */}
        <div className="absolute top-5 right-5 animate-bounce-slow opacity-30">
          <svg className="w-10 h-10 text-orange-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
        
        {/* iMac 24" - Left with SEO dashboard */}
        <div className="absolute z-20 w-[68%] max-w-[275px] left-[4%] top-[10%] animate-device-float" style={{ transformStyle: 'preserve-3d' }}>
          <div className="relative group">
            {/* Screen glow */}
            <div className="absolute -inset-3 bg-gradient-to-r from-orange-400 to-yellow-400 opacity-20 blur-xl group-hover:opacity-30 transition-opacity duration-700"></div>
            {/* iMac body */}
            <div className="relative bg-gradient-to-b from-gray-100 to-gray-200 rounded-2xl p-0.5 shadow-2xl">
              {/* Ultra-thin bezel */}
              <div className="bg-black rounded-2xl p-[2px]">
                <div className="relative bg-white rounded-[15px] overflow-hidden aspect-video">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-transparent to-transparent pointer-events-none"></div>
                  <DeviceContent service={service} type="laptop" label="SEO Analytics" />
                </div>
              </div>
              {/* Camera */}
              <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-gray-800 rounded-full"></div>
            </div>
            {/* Aluminum stand */}
            <div className="flex flex-col items-center">
              <div className="w-12 h-10 bg-gradient-to-b from-gray-200 via-gray-100 to-gray-200 rounded-b-xl shadow-inner"></div>
              <div className="w-22 h-2 bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 rounded-full shadow-lg"></div>
            </div>
          </div>
        </div>
        
        {/* OnePlus 12 - Right with search results */}
        <div className="absolute z-30 w-[38%] max-w-[130px] right-[8%] bottom-[10%] rotate-[-8deg] animate-device-float-delayed" style={{ transformStyle: 'preserve-3d' }}>
          <div className="relative group">
            {/* Phone glow */}
            <div className="absolute -inset-2 bg-gradient-to-r from-red-400 to-orange-400 opacity-30 blur-lg group-hover:opacity-40 transition-opacity duration-500"></div>
            <div className="relative bg-gradient-to-br from-red-900 via-red-800 to-orange-900 rounded-[2rem] p-1 shadow-2xl border border-red-700">
              {/* Punch hole camera */}
              <div className="absolute top-3 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-gray-900 rounded-full z-10 border border-gray-800"></div>
              {/* Screen */}
              <div className="relative bg-white rounded-[1.8rem] overflow-hidden aspect-[9/20]">
                <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent pointer-events-none"></div>
                <DeviceContent service={service} type="mobile" label="Mobile Search" />
              </div>
              {/* Alert slider - OnePlus signature */}
              <div className="absolute right-0 top-12 w-0.5 h-6 bg-red-500 rounded-l shadow-lg"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Social Media: MacBook Air + iPhone 13 Mini with social theme
  if (service.title === 'Social Media Marketing') {
    return (
      <div className="relative w-full h-full flex items-center justify-center p-4" style={{ perspective: '1000px' }}>
        {/* Social media themed background */}
        <div className="absolute inset-0 bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50 opacity-35 animate-gradient-shift"></div>
        
        {/* Floating social icons */}
        <div className="absolute top-4 left-4 animate-pulse-slow opacity-20">
          <div className="flex gap-2">
            <div className="w-6 h-6 rounded-full bg-blue-400"></div>
            <div className="w-6 h-6 rounded-full bg-pink-400"></div>
          </div>
        </div>
        
        {/* MacBook Air - Bottom with social dashboard */}
        <div className="absolute z-20 w-[72%] max-w-[290px] bottom-[8%] rotate-[3deg] animate-device-float" style={{ transformStyle: 'preserve-3d' }}>
          <div className="relative group">
            {/* Screen glow */}
            <div className="absolute -inset-2 bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 opacity-20 blur-xl group-hover:opacity-30 transition-opacity duration-700"></div>
            <div className="relative bg-gradient-to-b from-gray-900 to-gray-800 rounded-t-2xl p-1 shadow-2xl border border-gray-700">
              {/* Screen */}
              <div className="relative bg-white rounded-t-lg overflow-hidden aspect-video">
                <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-transparent to-transparent pointer-events-none"></div>
                <DeviceContent service={service} type="laptop" label="Social Hub" />
              </div>
            </div>
            {/* Keyboard */}
            <div className="h-2 bg-gradient-to-b from-gray-800 to-gray-700 rounded-b-2xl shadow-xl"></div>
            <div className="h-0.5 bg-gray-600 w-4/5 mx-auto"></div>
          </div>
        </div>
        
        {/* iPhone 13 Mini - Top Right with social app */}
        <div className="absolute z-30 w-[40%] max-w-[135px] top-[6%] right-[10%] rotate-[-10deg] animate-device-float-delayed" style={{ transformStyle: 'preserve-3d' }}>
          <div className="relative group">
            {/* Phone glow */}
            <div className="absolute -inset-2 bg-gradient-to-r from-pink-400 to-purple-400 opacity-30 blur-lg group-hover:opacity-40 transition-opacity duration-500"></div>
            <div className="relative bg-gradient-to-br from-blue-900 via-purple-900 to-pink-900 rounded-[2rem] p-1 shadow-2xl border border-purple-700">
              {/* Notch */}
              <div className="absolute top-1 left-1/2 transform -translate-x-1/2 w-16 h-4 bg-black rounded-b-2xl z-10 flex items-center justify-center">
                <div className="w-1 h-1 bg-gray-800 rounded-full"></div>
              </div>
              {/* Screen */}
              <div className="relative bg-white rounded-[1.8rem] overflow-hidden aspect-[9/19.5]">
                <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent pointer-events-none"></div>
                <DeviceContent service={service} type="mobile" label="Social App" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return null;
}
