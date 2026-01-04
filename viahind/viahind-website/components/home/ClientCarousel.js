'use client';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { FaCheckCircle, FaStar, FaAward } from 'react-icons/fa';

export default function ClientCarousel() {
  const row1Ref = useRef(null);
  const row2Ref = useRef(null);

  // Client data with logo placeholders and industry info
  const clients = [
    { name: 'Acme Corp', industry: 'Technology', logo: 'AC' },
    { name: 'TechVision', industry: 'Software', logo: 'TV' },
    { name: 'GlobalSoft', industry: 'Enterprise', logo: 'GS' },
    { name: 'InnovateLabs', industry: 'Innovation', logo: 'IL' },
    { name: 'DataFlow', industry: 'Analytics', logo: 'DF' },
    { name: 'CloudNine', industry: 'Cloud', logo: 'C9' },
    { name: 'SmartSys', industry: 'Systems', logo: 'SS' },
    { name: 'NextGen', industry: 'Digital', logo: 'NG' },
    { name: 'FutureTech', industry: 'AI/ML', logo: 'FT' },
    { name: 'DigiCore', industry: 'Digital', logo: 'DC' },
    { name: 'WebMasters', industry: 'Web', logo: 'WM' },
    { name: 'CodeCraft', industry: 'Development', logo: 'CC' },
    { name: 'SysIntegrate', industry: 'Integration', logo: 'SI' },
    { name: 'AppDev Pro', industry: 'Mobile', logo: 'AP' },
    { name: 'NetSolutions', industry: 'Network', logo: 'NS' }
  ];

  useEffect(() => {
    const row1 = row1Ref.current;
    const row2 = row2Ref.current;

    gsap.to(row1, {
      x: '-50%',
      duration: 40,
      ease: 'none',
      repeat: -1
    });

    gsap.to(row2, {
      x: '0%',
      duration: 40,
      ease: 'none',
      repeat: -1,
      from: { x: '-50%' }
    });
  }, []);

  return (
    <section className="bg-gradient-to-br from-gray-50 via-white to-gray-50 py-24 overflow-hidden relative">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-100 rounded-full filter blur-3xl opacity-20"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-100 rounded-full filter blur-3xl opacity-20"></div>
      
      <div className="container-custom relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16">
          {/* Badge */}
          <div className="inline-block mb-4">
            <span className="inline-flex items-center gap-2 text-primary font-semibold text-sm uppercase tracking-wider bg-blue-50 px-6 py-2 rounded-full border border-blue-100">
              <FaAward className="text-primary" />
              Client Success Stories
            </span>
          </div>
          
          {/* Title */}
          <h2 className="mb-6 bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900 bg-clip-text text-transparent">
            Our Esteemed Clients
          </h2>
          
          {/* Stats Row */}
          <div className="flex flex-wrap justify-center items-center gap-8 mb-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center">
                <FaCheckCircle className="text-white text-xl" />
              </div>
              <div className="text-left">
                <div className="text-3xl font-bold text-gray-900">650+</div>
                <div className="text-sm text-gray-600">Companies</div>
              </div>
            </div>
            
            <div className="hidden md:block w-px h-12 bg-gray-300"></div>
            
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                <FaStar className="text-white text-xl" />
              </div>
              <div className="text-left">
                <div className="text-3xl font-bold text-gray-900">50+</div>
                <div className="text-sm text-gray-600">Countries</div>
              </div>
            </div>
            
            <div className="hidden md:block w-px h-12 bg-gray-300"></div>
            
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-teal-500 rounded-full flex items-center justify-center">
                <FaAward className="text-white text-xl" />
              </div>
              <div className="text-left">
                <div className="text-3xl font-bold text-gray-900">98%</div>
                <div className="text-sm text-gray-600">Satisfaction</div>
              </div>
            </div>
          </div>
          
          {/* Subtitle */}
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Trusted by leading enterprises worldwide to deliver innovative technology solutions
          </p>
        </div>

        {/* Client Logos Carousel */}
        <div className="space-y-6 overflow-hidden">
          {/* Row 1 - Moving Left */}
          <div className="relative overflow-hidden">
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-gray-50 to-transparent z-10 pointer-events-none"></div>
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-gray-50 to-transparent z-10 pointer-events-none"></div>
            
            <div ref={row1Ref} className="flex gap-6 will-change-transform">
              {[...clients, ...clients].map((client, index) => (
                <div 
                  key={index} 
                  className="group min-w-[240px] flex-shrink-0 bg-white rounded-2xl p-6 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 border border-gray-100 cursor-pointer"
                >
                  {/* Logo Container */}
                  <div className="flex items-center justify-center mb-4">
                    <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center text-white font-bold text-2xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                      {client.logo}
                    </div>
                  </div>
                  
                  {/* Client Info */}
                  <div className="text-center">
                    <h4 className="font-bold text-gray-900 mb-1 group-hover:text-primary transition-colors">
                      {client.name}
                    </h4>
                    <p className="text-xs text-gray-500 uppercase tracking-wide">
                      {client.industry}
                    </p>
                  </div>
                  
                  {/* Hover Accent */}
                  <div className="mt-4 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                </div>
              ))}
            </div>
          </div>

          {/* Row 2 - Moving Right */}
          <div className="relative overflow-hidden">
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-gray-50 to-transparent z-10 pointer-events-none"></div>
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-gray-50 to-transparent z-10 pointer-events-none"></div>
            
            <div ref={row2Ref} className="flex gap-6 will-change-transform">
              {[...clients.reverse(), ...clients].map((client, index) => (
                <div 
                  key={index} 
                  className="group min-w-[240px] flex-shrink-0 bg-white rounded-2xl p-6 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 border border-gray-100 cursor-pointer"
                >
                  {/* Logo Container */}
                  <div className="flex items-center justify-center mb-4">
                    <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center text-white font-bold text-2xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                      {client.logo}
                    </div>
                  </div>
                  
                  {/* Client Info */}
                  <div className="text-center">
                    <h4 className="font-bold text-gray-900 mb-1 group-hover:text-primary transition-colors">
                      {client.name}
                    </h4>
                    <p className="text-xs text-gray-500 uppercase tracking-wide">
                      {client.industry}
                    </p>
                  </div>
                  
                  {/* Hover Accent */}
                  <div className="mt-4 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-gray-600 mb-6">
            Join hundreds of successful companies who trust us with their digital transformation
          </p>
          <button className="bg-gradient-to-r from-primary to-blue-600 text-white px-10 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 inline-flex items-center gap-3">
            Become Our Client
            <FaCheckCircle />
          </button>
        </div>
      </div>
    </section>
  );
}
