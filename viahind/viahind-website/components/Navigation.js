'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { 
  FaBars, 
  FaTimes, 
  FaChevronDown,
  FaCode,
  FaPalette,
  FaMobile,
  FaDesktop,
  FaCloud,
  FaSearch,
  FaCog,
  FaHospital,
  FaShoppingCart,
  FaHeartbeat,
  FaIndustry,
  FaPhone,
  FaEnvelope
} from 'react-icons/fa';
import Logo from './Logo';

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isIndustriesOpen, setIsIndustriesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services = [
    { name: 'Web Development', href: '/services/web-application', icon: FaCode, color: 'blue' },
    { name: 'Web Design', href: '/services/web-designing', icon: FaPalette, color: 'purple' },
    { name: 'Mobile Apps', href: '/services/mobile', icon: FaMobile, color: 'cyan' },
    { name: 'Desktop Apps', href: '/services/windows', icon: FaDesktop, color: 'indigo' },
    { name: 'Enterprise Software', href: '/services/enterprise', icon: FaCog, color: 'blue' },
    { name: 'Cloud Solutions', href: '/services/integration', icon: FaCloud, color: 'sky' },
    { name: 'Digital Marketing', href: '/services/seo', icon: FaSearch, color: 'green' },
    { name: 'ERP Systems', href: '/services/erp', icon: FaCog, color: 'orange' }
  ];

  const industries = [
    { name: 'Healthcare', href: '/industries#health', icon: FaHeartbeat, color: 'red' },
    { name: 'E-commerce', href: '/industries#ecommerce', icon: FaShoppingCart, color: 'blue' },
    { name: 'Hospitality', href: '/industries#hospitality', icon: FaHospital, color: 'purple' },
    { name: 'Manufacturing', href: '/industries#manufacturing', icon: FaIndustry, color: 'gray' }
  ];

  // Prevent hydration mismatch
  if (!mounted) {
    return (
      <>
        <nav className="hidden lg:block fixed bottom-0 left-0 right-0 z-[100]">
          <div className="flex justify-center items-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-cyan-500/20 to-blue-500/20 blur-xl rounded-full"></div>
              <div className="relative flex items-center gap-1 bg-white/95 backdrop-blur-xl rounded-full shadow-2xl px-4 py-3 border border-gray-200/50">
                <Link href="/" className="group relative px-5 py-2.5 text-gray-700 font-semibold text-sm hover:text-blue-600 transition-all duration-300 rounded-full">
                  <span className="relative z-10 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-blue-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    Home
                  </span>
                  <span className="absolute inset-0 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300"></span>
                </Link>
                <div className="h-6 w-px bg-gray-200"></div>
                <Link href="/about" className="group relative px-5 py-2.5 text-gray-700 font-semibold text-sm hover:text-purple-600 transition-all duration-300 rounded-full">
                  <span className="relative z-10 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-purple-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    About
                  </span>
                  <span className="absolute inset-0 bg-gradient-to-r from-purple-50 to-pink-50 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300"></span>
                </Link>
                <div className="h-6 w-px bg-gray-200"></div>
                <Link href="/services" className="group relative px-5 py-2.5 text-gray-700 font-semibold text-sm hover:text-cyan-600 transition-all duration-300 rounded-full">
                  <span className="relative z-10">Services</span>
                </Link>
                <div className="h-6 w-px bg-gray-200"></div>
                <Link href="/industries" className="group relative px-5 py-2.5 text-gray-700 font-semibold text-sm hover:text-indigo-600 transition-all duration-300 rounded-full">
                  <span className="relative z-10">Industries</span>
                </Link>
                <div className="h-6 w-px bg-gray-200"></div>
                <Link href="/contact" className="group relative px-6 py-2.5 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold text-sm rounded-full hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300">
                  <span className="relative z-10">Contact Us</span>
                </Link>
              </div>
            </div>
          </div>
        </nav>
        <nav className="lg:hidden fixed bottom-0 left-0 right-0 z-[100] bg-white/95 backdrop-blur-xl border-t border-gray-200 shadow-2xl">
          <div className="container-custom">
            <div className="flex items-center justify-around py-3">
              <Link href="/" className="flex flex-col items-center gap-1 text-gray-600 hover:text-blue-600 transition-colors">
                <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center">
                  <span className="text-xl">🏠</span>
                </div>
                <span className="text-xs font-semibold">Home</span>
              </Link>
              <Link href="/services" className="flex flex-col items-center gap-1 text-gray-600 hover:text-cyan-600 transition-colors">
                <div className="w-10 h-10 bg-cyan-50 rounded-xl flex items-center justify-center">
                  <FaCode className="text-cyan-600" />
                </div>
                <span className="text-xs font-semibold">Services</span>
              </Link>
              <button onClick={() => setIsMobileMenuOpen(true)} className="flex flex-col items-center gap-1 text-gray-600 hover:text-purple-600 transition-colors">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center shadow-lg -mt-6">
                  <FaBars className="text-white text-xl" />
                </div>
                <span className="text-xs font-semibold">Menu</span>
              </button>
              <Link href="/industries" className="flex flex-col items-center gap-1 text-gray-600 hover:text-indigo-600 transition-colors">
                <div className="w-10 h-10 bg-indigo-50 rounded-xl flex items-center justify-center">
                  <FaIndustry className="text-indigo-600" />
                </div>
                <span className="text-xs font-semibold">Industries</span>
              </Link>
              <Link href="/contact" className="flex flex-col items-center gap-1 text-gray-600 hover:text-green-600 transition-colors">
                <div className="w-10 h-10 bg-green-50 rounded-xl flex items-center justify-center">
                  <FaPhone className="text-green-600" />
                </div>
                <span className="text-xs font-semibold">Contact</span>
              </Link>
            </div>
          </div>
        </nav>
      </>
    );
  }

  return (
    <>
      {/* Desktop Navigation - Bottom Fixed */}
      <nav className={`hidden lg:block fixed bottom-0 left-0 right-0 z-[100] transition-all duration-300 ${
        scrolled ? 'bottom-6' : 'bottom-0'
      }`}>
        <div className="flex justify-center items-center">
          <div className="relative">
            {/* Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-cyan-500/20 to-blue-500/20 blur-xl rounded-full"></div>
            
            {/* Main Nav Bar */}
            <div className="relative flex items-center gap-1 bg-white/95 backdrop-blur-xl rounded-full shadow-2xl px-4 py-3 border border-gray-200/50">
              {/* Home */}
              <Link 
                href="/" 
                className="group relative px-5 py-2.5 text-gray-700 font-semibold text-sm hover:text-blue-600 transition-all duration-300 rounded-full"
              >
                <span className="relative z-10 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-blue-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Home
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300"></span>
              </Link>

              <div className="h-6 w-px bg-gray-200"></div>
              
              {/* About */}
              <Link 
                href="/about" 
                className="group relative px-5 py-2.5 text-gray-700 font-semibold text-sm hover:text-purple-600 transition-all duration-300 rounded-full"
              >
                <span className="relative z-10 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-purple-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  About
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-purple-50 to-pink-50 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300"></span>
              </Link>

              <div className="h-6 w-px bg-gray-200"></div>
                
              {/* Services Dropdown */}
              <div 
                className="relative"
                onMouseEnter={() => setIsServicesOpen(true)}
                onMouseLeave={() => setIsServicesOpen(false)}
              >
                <button className="group relative px-5 py-2.5 text-gray-700 font-semibold text-sm hover:text-cyan-600 transition-all duration-300 rounded-full flex items-center gap-2">
                  <span className="relative z-10 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    Services
                    <FaChevronDown className={`text-xs transition-transform duration-300 ${isServicesOpen ? 'rotate-180' : ''}`} />
                  </span>
                  <span className="absolute inset-0 bg-gradient-to-r from-cyan-50 to-blue-50 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300"></span>
                </button>
                
                {isServicesOpen && (
                  <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-4 animate-fade-in">
                    <div className="bg-white/95 backdrop-blur-xl shadow-2xl rounded-2xl overflow-hidden min-w-[600px] border border-gray-200/50">
                      <div className="p-6">
                        <div className="grid grid-cols-2 gap-3">
                          {services.map((service, idx) => (
                            <Link
                              key={idx}
                              href={service.href}
                              className="group flex items-center gap-3 p-4 rounded-xl hover:bg-gradient-to-r hover:from-blue-50 hover:to-cyan-50 transition-all duration-300 border border-transparent hover:border-blue-200"
                            >
                              <div className={`w-10 h-10 bg-gradient-to-br from-${service.color}-500 to-${service.color}-600 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                                <service.icon className="text-white text-sm" />
                              </div>
                              <span className="text-gray-700 font-medium group-hover:text-blue-600 transition-colors">
                                {service.name}
                              </span>
                            </Link>
                          ))}
                        </div>
                        <Link
                          href="/services"
                          className="mt-4 block text-center py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-xl font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300"
                        >
                          View All Services →
                        </Link>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <div className="h-6 w-px bg-gray-200"></div>

              {/* Industries Dropdown */}
              <div 
                className="relative"
                onMouseEnter={() => setIsIndustriesOpen(true)}
                onMouseLeave={() => setIsIndustriesOpen(false)}
              >
                <button className="group relative px-5 py-2.5 text-gray-700 font-semibold text-sm hover:text-indigo-600 transition-all duration-300 rounded-full flex items-center gap-2">
                  <span className="relative z-10 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    Industries
                    <FaChevronDown className={`text-xs transition-transform duration-300 ${isIndustriesOpen ? 'rotate-180' : ''}`} />
                  </span>
                  <span className="absolute inset-0 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300"></span>
                </button>
                
                {isIndustriesOpen && (
                  <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-4 animate-fade-in">
                    <div className="bg-white/95 backdrop-blur-xl shadow-2xl rounded-2xl overflow-hidden min-w-[400px] border border-gray-200/50">
                      <div className="p-6">
                        <div className="grid grid-cols-2 gap-3">
                          {industries.map((industry, idx) => (
                            <Link
                              key={idx}
                              href={industry.href}
                              className="group flex items-center gap-3 p-4 rounded-xl hover:bg-gradient-to-r hover:from-indigo-50 hover:to-purple-50 transition-all duration-300 border border-transparent hover:border-indigo-200"
                            >
                              <div className={`w-10 h-10 bg-gradient-to-br from-${industry.color}-500 to-${industry.color}-600 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                                <industry.icon className="text-white text-sm" />
                              </div>
                              <span className="text-gray-700 font-medium group-hover:text-indigo-600 transition-colors">
                                {industry.name}
                              </span>
                            </Link>
                          ))}
                        </div>
                        <Link
                          href="/industries"
                          className="mt-4 block text-center py-3 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-xl font-semibold hover:shadow-lg hover:shadow-indigo-500/50 transition-all duration-300"
                        >
                          View All Industries →
                        </Link>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <div className="h-6 w-px bg-gray-200"></div>

              {/* Contact */}
              <Link 
                href="/contact" 
                className="group relative px-6 py-2.5 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold text-sm rounded-full hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300"
              >
                <span className="relative z-10">Contact Us</span>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation - Bottom Fixed */}
      <nav className="lg:hidden fixed bottom-0 left-0 right-0 z-[100] bg-white/95 backdrop-blur-xl border-t border-gray-200 shadow-2xl">
        <div className="container-custom">
          <div className="flex items-center justify-around py-3">
            <Link href="/" className="flex flex-col items-center gap-1 text-gray-600 hover:text-blue-600 transition-colors">
              <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center">
                <span className="text-xl">🏠</span>
              </div>
              <span className="text-xs font-semibold">Home</span>
            </Link>

            <Link href="/services" className="flex flex-col items-center gap-1 text-gray-600 hover:text-cyan-600 transition-colors">
              <div className="w-10 h-10 bg-cyan-50 rounded-xl flex items-center justify-center">
                <FaCode className="text-cyan-600" />
              </div>
              <span className="text-xs font-semibold">Services</span>
            </Link>

            <button 
              onClick={() => setIsMobileMenuOpen(true)}
              className="flex flex-col items-center gap-1 text-gray-600 hover:text-purple-600 transition-colors"
            >
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center shadow-lg -mt-6">
                <FaBars className="text-white text-xl" />
              </div>
              <span className="text-xs font-semibold">Menu</span>
            </button>

            <Link href="/industries" className="flex flex-col items-center gap-1 text-gray-600 hover:text-indigo-600 transition-colors">
              <div className="w-10 h-10 bg-indigo-50 rounded-xl flex items-center justify-center">
                <FaIndustry className="text-indigo-600" />
              </div>
              <span className="text-xs font-semibold">Industries</span>
            </Link>

            <Link href="/contact" className="flex flex-col items-center gap-1 text-gray-600 hover:text-green-600 transition-colors">
              <div className="w-10 h-10 bg-green-50 rounded-xl flex items-center justify-center">
                <FaPhone className="text-green-600" />
              </div>
              <span className="text-xs font-semibold">Contact</span>
            </Link>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-[110] bg-black/50 backdrop-blur-sm" onClick={() => setIsMobileMenuOpen(false)}>
          <div 
            className="absolute right-0 top-0 bottom-0 w-full max-w-sm bg-white shadow-2xl overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="sticky top-0 bg-gradient-to-r from-blue-600 to-cyan-600 p-6 flex items-center justify-between">
              <Logo className="brightness-0 invert" />
              <button 
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-10 h-10 bg-white/20 backdrop-blur-xl rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
              >
                <FaTimes className="text-xl" />
              </button>
            </div>

            {/* Menu Items */}
            <div className="p-6 space-y-2">
              <Link 
                href="/about" 
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-4 py-3 text-gray-700 font-semibold rounded-xl hover:bg-blue-50 hover:text-blue-600 transition-all"
              >
                About Us
              </Link>
              <Link 
                href="/work-culture" 
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-4 py-3 text-gray-700 font-semibold rounded-xl hover:bg-purple-50 hover:text-purple-600 transition-all"
              >
                Work Culture
              </Link>
              <Link 
                href="/blogs" 
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-4 py-3 text-gray-700 font-semibold rounded-xl hover:bg-cyan-50 hover:text-cyan-600 transition-all"
              >
                Blog
              </Link>
              <Link 
                href="/career" 
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-4 py-3 text-gray-700 font-semibold rounded-xl hover:bg-green-50 hover:text-green-600 transition-all"
              >
                Careers
              </Link>
            </div>

            {/* Contact Info */}
            <div className="p-6 bg-gray-50 space-y-3">
              <h3 className="font-bold text-gray-900 mb-4">Get in Touch</h3>
              <a href="tel:+912613121140" className="flex items-center gap-3 p-3 bg-white rounded-xl hover:shadow-md transition-all">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                  <FaPhone className="text-blue-600" />
                </div>
                <div>
                  <div className="text-xs text-gray-500">Call Us</div>
                  <div className="font-semibold text-gray-900">+91 261 312 1140</div>
                </div>
              </a>
              <a href="mailto:info@viahind.com" className="flex items-center gap-3 p-3 bg-white rounded-xl hover:shadow-md transition-all">
                <div className="w-10 h-10 bg-cyan-100 rounded-lg flex items-center justify-center">
                  <FaEnvelope className="text-cyan-600" />
                </div>
                <div>
                  <div className="text-xs text-gray-500">Email Us</div>
                  <div className="font-semibold text-gray-900">info@viahind.com</div>
                </div>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
