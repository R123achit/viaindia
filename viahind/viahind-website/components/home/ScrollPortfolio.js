'use client';
import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { portfolioServices, animationConfig, layoutConfig } from '@/config/scrollPortfolioData';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

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

    // Small delay to ensure DOM is ready
    const timer = setTimeout(() => {
      try {
        // Create scroll trigger for the entire section
        const scrollTrigger = ScrollTrigger.create({
          trigger: container,
          start: 'top top',
          end: `+=${totalSections * 100}%`,
          pin: true,
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
          }
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
    // Smooth transition even without scroll
    if (containerRef.current) {
      containerRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const currentService = portfolioServices[activeIndex];

  return (
    <section
      ref={containerRef}
      className="relative w-full h-screen overflow-hidden bg-gray-50"
    >
      {/* Main Content Grid */}
      <div className="relative z-10 h-full grid grid-cols-1 lg:grid-cols-12 gap-0">
        
        {/* Left Sidebar - Service Navigation with Gradient Background */}
        <div className="lg:col-span-3 relative">
          {/* Animated Background for Left Panel Only */}
          <div
            className={`absolute inset-0 bg-gradient-to-br ${currentService.color} transition-all ease-in-out`}
            style={{ transitionDuration: `${animationConfig.transitionDuration}ms` }}
          />
          
          {/* Left Panel Content */}
          <div className="relative z-10 h-full flex flex-col justify-center space-y-4 lg:space-y-6 px-6 lg:px-8 py-8 lg:py-0">
            <h2 className="text-white text-xl lg:text-2xl xl:text-3xl font-bold mb-2 lg:mb-4">
              Our Strategic IT Solutions Deliver -
            </h2>
            
            <nav className="space-y-2 lg:space-y-3">
              {portfolioServices.map((service, index) => (
                <button
                  key={service.id}
                  onClick={() => handleServiceClick(index)}
                  className={`block text-left text-white text-xs lg:text-sm xl:text-base font-medium transition-all duration-300 pb-1 lg:pb-2 ${
                    activeIndex === index
                      ? 'border-b-2 border-white opacity-100 scale-105'
                      : 'opacity-70 hover:opacity-100'
                  }`}
                >
                  {service.title.toUpperCase()}
                </button>
              ))}
            </nav>
          </div>
        </div>

        {/* Center - Device Mockups (White/Gray Background) */}
        <div className="lg:col-span-5 flex items-center justify-center relative min-h-[300px] lg:min-h-0 bg-gray-100 px-4 lg:px-8">
          <DeviceMockups screens={currentService.deviceScreens} />
        </div>

        {/* Right Sidebar - Service Details (White Background) */}
        <div className="lg:col-span-4 flex flex-col justify-center space-y-4 lg:space-y-6 bg-white px-6 lg:px-8 py-8 lg:py-0 text-gray-900">
          <div className="space-y-3 lg:space-y-4">
            <h3 className="text-2xl lg:text-3xl xl:text-4xl font-bold text-gray-900">
              {currentService.title}
            </h3>
            <p className="text-sm lg:text-base xl:text-lg text-gray-700">
              {currentService.description}
            </p>
          </div>

          <ul className="space-y-2 lg:space-y-3">
            {currentService.features.map((feature, index) => (
              <li key={index} className="flex items-start space-x-2 lg:space-x-3">
                <span className="text-blue-600 text-lg lg:text-xl">■</span>
                <span className="text-xs lg:text-sm xl:text-base text-gray-800">{feature}</span>
              </li>
            ))}
          </ul>

          <div className="space-y-3 lg:space-y-4">
            <h4 className="text-lg lg:text-xl font-semibold text-gray-900">Clients</h4>
            <div className="flex flex-wrap gap-2 lg:gap-4">
              {currentService.clients.slice(0, layoutConfig.maxClientsVisible).map((client, index) => (
                <div
                  key={index}
                  className="bg-gray-100 border border-gray-200 px-3 lg:px-4 py-1.5 lg:py-2 rounded-lg text-xs lg:text-sm font-medium text-gray-700"
                >
                  {client}
                </div>
              ))}
            </div>
            <button className="text-xs lg:text-sm text-blue-600 underline hover:no-underline transition-all">
              View All →
            </button>
          </div>
        </div>
      </div>

      {/* Skip Button */}
      {layoutConfig.showSkipButton && (
        <button
          onClick={handleSkip}
          className="absolute top-4 lg:top-8 right-4 lg:right-8 bg-gray-800 text-white px-4 lg:px-6 py-1.5 lg:py-2 rounded-full text-sm lg:text-base font-medium hover:bg-gray-700 transition-all duration-300 z-20"
        >
          SKIP
        </button>
      )}

      {/* Progress Indicator */}
      {layoutConfig.showProgressIndicator && (
        <div className="absolute bottom-4 lg:bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
          {portfolioServices.map((_, index) => (
            <div
              key={index}
              className={`h-1.5 lg:h-2 rounded-full transition-all duration-300 ${
                activeIndex === index ? 'w-6 lg:w-8 bg-blue-600' : 'w-1.5 lg:w-2 bg-gray-400'
              }`}
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
