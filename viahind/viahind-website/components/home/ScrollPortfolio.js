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
        const header = document.querySelector('.sticky');
        const headerHeight = header ? header.offsetHeight : 0;
        
        const scrollTrigger = ScrollTrigger.create({
          trigger: container,
          start: `top ${headerHeight}px`,
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
      className="relative w-full min-h-screen overflow-hidden"
    >
      {/* 3-Column Grid Structure */}
      <div className="relative h-screen grid grid-cols-1 lg:grid-cols-10 gap-0">
        
        {/* COLUMN 1: LEFT SIDEBAR - Service Navigation Menu (30% width) */}
        <div className="lg:col-span-3 relative overflow-hidden">
          {/* Dynamic Gradient Background - Changes based on active service */}
          <div
            className={`absolute inset-0 bg-gradient-to-br ${currentGradient} transition-all duration-700 ease-in-out`}
          />
          
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
        <div className="lg:col-span-4 flex items-center justify-center relative bg-white">
          <DeviceMockups screens={currentService.deviceScreens} />
        </div>

        {/* COLUMN 3: RIGHT SIDEBAR - Service Details (30% width) */}
        <div className="lg:col-span-3 flex flex-col justify-center space-y-8 bg-white px-10 py-8 border-l border-gray-200">
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

      {/* Skip Button */}
      {layoutConfig.showSkipButton && (
        <button
          onClick={handleSkip}
          className="absolute top-10 right-10 bg-white/95 backdrop-blur-sm text-gray-900 px-8 py-3 rounded-full text-base font-bold hover:bg-white hover:shadow-xl transition-all duration-300 z-[80] border border-gray-200 hover:scale-105 flex items-center gap-2"
        >
          <span>SKIP</span>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </button>
      )}

      {/* Progress Indicator */}
      {layoutConfig.showProgressIndicator && (
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex items-center gap-3 z-[80] bg-white/90 backdrop-blur-md px-6 py-3 rounded-full shadow-lg border border-gray-200">
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

// Device Mockups Component
function DeviceMockups({ screens }) {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* Laptop */}
      <div className="absolute z-30 w-[60%] max-w-[500px] transition-all duration-700">
        <div className="relative bg-gray-900 rounded-t-xl p-2 shadow-2xl">
          <div className="bg-gray-800 rounded-lg overflow-hidden aspect-video">
            <img
              src={screens.laptop || '/api/placeholder/800/500'}
              alt="Laptop screen"
              className="w-full h-full object-cover transition-opacity duration-700"
            />
          </div>
        </div>
        <div className="h-2 bg-gray-800 rounded-b-xl"></div>
        <div className="h-1 bg-gray-700 w-3/4 mx-auto rounded-b-lg"></div>
      </div>

      {/* Tablet */}
      <div className="absolute z-20 right-[10%] top-[20%] w-[35%] max-w-[280px] transition-all duration-700">
        <div className="bg-gray-900 rounded-xl p-3 shadow-xl">
          <div className="bg-gray-800 rounded-lg overflow-hidden aspect-[3/4]">
            <img
              src={screens.tablet || '/api/placeholder/600/800'}
              alt="Tablet screen"
              className="w-full h-full object-cover transition-opacity duration-700"
            />
          </div>
        </div>
      </div>

      {/* Mobile */}
      <div className="absolute z-10 left-[15%] bottom-[15%] w-[20%] max-w-[150px] transition-all duration-700">
        <div className="bg-gray-900 rounded-2xl p-2 shadow-lg">
          <div className="bg-gray-800 rounded-xl overflow-hidden aspect-[9/19]">
            <img
              src={screens.mobile || '/api/placeholder/400/800'}
              alt="Mobile screen"
              className="w-full h-full object-cover transition-opacity duration-700"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
