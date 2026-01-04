'use client';
import { useState, useRef, useEffect } from 'react';
import { FaHotel, FaShoppingBag, FaHeartbeat, FaPhone, FaShoppingCart, FaIndustry, FaUtensils, FaLaptop, FaHardHat, FaChartLine, FaFilm, FaTruck, FaChevronLeft, FaChevronRight, FaArrowRight } from 'react-icons/fa';

export default function IndustriesSlider() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const scrollContainerRef = useRef(null);

  const industries = [
    { 
      icon: <FaHotel />, 
      name: 'Hospitality', 
      id: 'hospitality',
      gradient: 'from-amber-500 to-orange-500',
      bgGradient: 'from-amber-50 to-orange-50',
      description: 'Hotels & Resorts'
    },
    { 
      icon: <FaShoppingBag />, 
      name: 'Retail', 
      id: 'retail',
      gradient: 'from-pink-500 to-rose-500',
      bgGradient: 'from-pink-50 to-rose-50',
      description: 'Stores & Outlets'
    },
    { 
      icon: <FaHeartbeat />, 
      name: 'Healthcare', 
      id: 'health',
      gradient: 'from-red-500 to-pink-500',
      bgGradient: 'from-red-50 to-pink-50',
      description: 'Medical Services'
    },
    { 
      icon: <FaPhone />, 
      name: 'Telecom', 
      id: 'telecom',
      gradient: 'from-blue-500 to-cyan-500',
      bgGradient: 'from-blue-50 to-cyan-50',
      description: 'Communication'
    },
    { 
      icon: <FaShoppingCart />, 
      name: 'E-commerce', 
      id: 'ecommerce',
      gradient: 'from-purple-500 to-indigo-500',
      bgGradient: 'from-purple-50 to-indigo-50',
      description: 'Online Business'
    },
    { 
      icon: <FaIndustry />, 
      name: 'Manufacturing', 
      id: 'manufacturing',
      gradient: 'from-gray-600 to-gray-800',
      bgGradient: 'from-gray-50 to-gray-100',
      description: 'Production'
    },
    { 
      icon: <FaUtensils />, 
      name: 'Food & Beverage', 
      id: 'food',
      gradient: 'from-green-500 to-emerald-500',
      bgGradient: 'from-green-50 to-emerald-50',
      description: 'Restaurants'
    },
    { 
      icon: <FaLaptop />, 
      name: 'Technology', 
      id: 'it',
      gradient: 'from-indigo-500 to-blue-500',
      bgGradient: 'from-indigo-50 to-blue-50',
      description: 'IT Services'
    },
    { 
      icon: <FaHardHat />, 
      name: 'Construction', 
      id: 'mining',
      gradient: 'from-yellow-600 to-orange-600',
      bgGradient: 'from-yellow-50 to-orange-50',
      description: 'Building'
    },
    { 
      icon: <FaChartLine />, 
      name: 'Fintech', 
      id: 'fintech',
      gradient: 'from-teal-500 to-cyan-500',
      bgGradient: 'from-teal-50 to-cyan-50',
      description: 'Finance'
    },
    { 
      icon: <FaFilm />, 
      name: 'Media & Entertainment', 
      id: 'media',
      gradient: 'from-violet-500 to-purple-500',
      bgGradient: 'from-violet-50 to-purple-50',
      description: 'Content'
    },
    { 
      icon: <FaTruck />, 
      name: 'Logistics', 
      id: 'supply',
      gradient: 'from-orange-500 to-red-500',
      bgGradient: 'from-orange-50 to-red-50',
      description: 'Supply Chain'
    }
  ];

  const scroll = (direction) => {
    const container = scrollContainerRef.current;
    if (container) {
      const scrollAmount = 400;
      const newPosition = direction === 'left' 
        ? container.scrollLeft - scrollAmount 
        : container.scrollLeft + scrollAmount;
      
      container.scrollTo({
        left: newPosition,
        behavior: 'smooth'
      });
    }
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      const handleScroll = () => {
        setScrollPosition(container.scrollLeft);
      };
      container.addEventListener('scroll', handleScroll);
      return () => container.removeEventListener('scroll', handleScroll);
    }
  }, []);

  return (
    <section className="section-spacing bg-gradient-to-br from-slate-50 via-blue-50 to-slate-50 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-br from-blue-200 to-purple-200 rounded-full filter blur-3xl opacity-20"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-cyan-200 to-blue-200 rounded-full filter blur-3xl opacity-20"></div>
      
      <div className="container-custom relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider bg-white px-6 py-2 rounded-full shadow-md">
              Global Reach
            </span>
          </div>
          <h2 className="mb-6 bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900 bg-clip-text text-transparent">
            Industries We Serve
          </h2>
          <p className="text-gray-600 text-xl max-w-2xl mx-auto mb-4">
            Custom IT solutions for <span className="text-primary font-bold">70+ industries</span> worldwide
          </p>
          <p className="text-gray-500 text-base max-w-xl mx-auto">
            Delivering cutting-edge technology solutions tailored to your industry's unique challenges
          </p>
        </div>

        {/* Slider Container */}
        <div className="relative px-12 lg:px-16">
          {/* Navigation Buttons */}
          <button
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-white hover:bg-gray-50 text-gray-800 w-12 h-12 rounded-full shadow-xl flex items-center justify-center transition-all duration-300 hover:scale-110 hidden lg:flex"
            aria-label="Scroll left"
          >
            <FaChevronLeft />
          </button>
          
          <button
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-white hover:bg-gray-50 text-gray-800 w-12 h-12 rounded-full shadow-xl flex items-center justify-center transition-all duration-300 hover:scale-110 hidden lg:flex"
            aria-label="Scroll right"
          >
            <FaChevronRight />
          </button>

          {/* Gradient Overlays */}
          <div className="absolute left-12 lg:left-16 top-0 bottom-0 w-20 bg-gradient-to-r from-slate-50 to-transparent z-10 pointer-events-none hidden lg:block"></div>
          <div className="absolute right-12 lg:right-16 top-0 bottom-0 w-20 bg-gradient-to-l from-slate-50 to-transparent z-10 pointer-events-none hidden lg:block"></div>

          {/* Scrollable Container */}
          <div 
            ref={scrollContainerRef}
            className="overflow-x-auto scrollbar-hide pb-8"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            <div className="flex gap-6 px-4 lg:px-0">
              {industries.map((industry, index) => (
                <a 
                  key={index} 
                  href={`/industries#${industry.id}`}
                  className="group relative min-w-[280px] bg-white rounded-3xl overflow-hidden transition-all duration-500 hover:shadow-2xl hover:-translate-y-3 border border-gray-100"
                >
                  {/* Gradient Background on Hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${industry.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                  
                  {/* Content */}
                  <div className="relative z-10 p-8 flex flex-col items-center text-center">
                    {/* Icon Container */}
                    <div className="relative mb-6">
                      <div className={`w-20 h-20 bg-gradient-to-br ${industry.gradient} rounded-2xl flex items-center justify-center text-3xl text-white shadow-lg transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                        {industry.icon}
                      </div>
                      {/* Decorative ring */}
                      <div className={`absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-current transition-all duration-500 scale-110 opacity-0 group-hover:opacity-30`}
                        style={{ borderImage: `linear-gradient(135deg, ${industry.gradient}) 1` }}
                      ></div>
                    </div>
                    
                    {/* Title */}
                    <h4 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-gray-900 transition-colors">
                      {industry.name}
                    </h4>
                    
                    {/* Description */}
                    <p className="text-sm text-gray-500 mb-4 group-hover:text-gray-600 transition-colors">
                      {industry.description}
                    </p>
                    
                    {/* Arrow Icon */}
                    <div className="flex items-center gap-2 text-primary opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                      <span className="text-sm font-semibold">Explore</span>
                      <FaArrowRight className="text-xs" />
                    </div>
                  </div>
                  
                  {/* Bottom Accent */}
                  <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${industry.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}></div>
                </a>
              ))}
            </div>
          </div>

          {/* Scroll Indicator Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {[...Array(Math.ceil(industries.length / 3))].map((_, index) => (
              <div
                key={index}
                className={`h-2 rounded-full transition-all duration-300 ${
                  Math.floor(scrollPosition / 400) === index 
                    ? 'w-8 bg-primary' 
                    : 'w-2 bg-gray-300'
                }`}
              ></div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <a 
            href="/industries"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-primary to-blue-600 text-white px-10 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
          >
            View All Industries
            <FaArrowRight className="text-sm" />
          </a>
          <p className="text-gray-500 text-sm mt-4">
            Serving businesses across the globe with innovative solutions
          </p>
        </div>
      </div>

      {/* Custom scrollbar hide styles */}
      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}
