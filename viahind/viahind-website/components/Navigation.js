'use client';

import { useState, useEffect, useCallback } from 'react';
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

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    handleScroll(); // set initial value
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(false);
  }, []);

  const services = [
    { 
      name: 'Web Development', 
      icon: FaCode, 
      color: 'blue',
      subServices: [
        { name: 'Web Application', href: '/services?category=web-development&service=web-application' },
        { name: 'Web Designing', href: '/services?category=web-development&service=web-designing' },
        { name: 'E-Commerce', href: '/services?category=web-development&service=ecommerce' }
      ]
    },
    { 
      name: 'Mobile Application', 
      icon: FaMobile, 
      color: 'cyan',
      subServices: [
        { name: 'iOS', href: '/services?category=mobile-application&service=ios' },
        { name: 'Android', href: '/services?category=mobile-application&service=android' },
        { name: 'Flutter', href: '/services?category=mobile-application&service=flutter' },
        { name: 'React Native', href: '/services?category=mobile-application&service=react-native' },
        { name: 'Progressive Web App (PWA)', href: '/services?category=mobile-application&service=pwa' }
      ]
    },
    { 
      name: 'Desktop App Development', 
      icon: FaDesktop, 
      color: 'indigo',
      subServices: [
        { name: 'Windows forms c#', href: '/services?category=desktop-app&service=windows-forms' },
        { name: 'WPF (C#)', href: '/services?category=desktop-app&service=wpf' }
      ]
    },
    { 
      name: 'Enterprise Solution', 
      icon: FaCog, 
      color: 'blue',
      subServices: [
        { name: 'SaaS', href: '/services?category=enterprise-solution&service=saas' },
        { name: 'CRM', href: '/services?category=enterprise-solution&service=crm' },
        { name: 'ERP', href: '/services?category=enterprise-solution&service=erp' },
        { name: 'HRMS', href: '/services?category=enterprise-solution&service=hrms' },
        { name: 'Inventory Management', href: '/services?category=enterprise-solution&service=inventory' },
        { name: 'Payroll Solution', href: '/services?category=enterprise-solution&service=payroll' }
      ]
    },
    { 
      name: 'Enterprise Integration', 
      icon: FaCloud, 
      color: 'sky',
      subServices: [
        { name: 'SAP Integration', href: '/services?category=enterprise-integration&service=sap' },
        { name: 'Microsoft 365 Integration', href: '/services?category=enterprise-integration&service=microsoft' },
        { name: 'Zoho Integration', href: '/services?category=enterprise-integration&service=zoho' },
        { name: 'WhatsApp Business API', href: '/services?category=enterprise-integration&service=whatsapp' },
        { name: 'Hardware Integrations', href: '/services?category=enterprise-integration&service=hardware' }
      ]
    },
    { 
      name: 'Digital Marketing', 
      icon: FaSearch, 
      color: 'green',
      subServices: [
        { name: 'Search Engine Marketing', href: '/services?category=digital-marketing&service=sem' },
        { name: 'Search Engine optimization', href: '/services?category=digital-marketing&service=seo' },
        { name: 'Social Media Marketing', href: '/services?category=digital-marketing&service=smm' },
        { name: 'Social Media Optimization', href: '/services?category=digital-marketing&service=smo' }
      ]
    },
    { 
      name: 'ERP Implementation', 
      icon: FaCog, 
      color: 'orange',
      subServices: [
        { name: 'SAP Implementation', href: '/services?category=erp-implementation&service=sap-impl' },
        { name: 'Microsoft 365 Implementation', href: '/services?category=erp-implementation&service=microsoft-impl' },
        { name: 'Zoho Implementation', href: '/services?category=erp-implementation&service=zoho-impl' }
      ]
    }
  ];

  const industries = [
    { name: 'Hospitality', href: '/industries#hospitality', icon: FaHospital, color: 'blue' },
    { name: 'Retail', href: '/industries#retail', icon: FaShoppingCart, color: 'purple' },
    { name: 'Healthcare', href: '/industries#healthcare', icon: FaHeartbeat, color: 'rose' },
    { name: 'Telecom', href: '/industries#telecom', icon: FaPhone, color: 'green' },
    { name: 'E-commerce', href: '/industries#ecommerce', icon: FaShoppingCart, color: 'orange' },
    { name: 'Manufacturing', href: '/industries#manufacturing', icon: FaIndustry, color: 'indigo' },
    { name: 'Fintech', href: '/industries#fintech', icon: FaCode, color: 'teal' },
    { name: 'Logistics', href: '/industries#logistics', icon: FaCog, color: 'amber' }
  ];

  // Icon color mapping with actual Tailwind classes
  const iconBgMap = {
    blue: 'bg-blue-500',
    cyan: 'bg-cyan-500',
    indigo: 'bg-indigo-500',
    sky: 'bg-sky-500',
    green: 'bg-green-500',
    orange: 'bg-orange-500',
    purple: 'bg-purple-500',
    rose: 'bg-rose-500',
    teal: 'bg-teal-500',
    amber: 'bg-amber-500',
  };

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
                <Link href="/services" className="group relative px-5 py-2.5 text-gray-700 font-semibold text-sm hover:text-cyan-600 transition-all duration-300 rounded-full flex items-center gap-2">
                  <span className="relative z-10 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    Services
                    <FaChevronDown className={`text-xs transition-transform duration-300 ${isServicesOpen ? 'rotate-180' : ''}`} />
                  </span>
                  <span className="absolute inset-0 bg-gradient-to-r from-cyan-50 to-blue-50 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300"></span>
                </Link>
                
                {/* Services Mega Menu */}
                <div 
                  className={`fixed left-1/2 -translate-x-1/2 w-[90vw] max-w-[920px] transition-all duration-300 ease-out ${
                    isServicesOpen 
                      ? 'opacity-100 translate-y-0 pointer-events-auto' 
                      : 'opacity-0 translate-y-4 pointer-events-none'
                  }`}
                  style={{ bottom: scrolled ? 'calc(60px + 1.5rem + 16px)' : 'calc(60px + 16px)' }}
                >
                  {/* Arrow pointer */}
                  <div className="absolute -bottom-2 left-1/2 -translate-x-[60px] w-4 h-4 bg-white border-r border-b border-gray-200/80 rotate-45 z-10"></div>
                  
                  <div className="bg-white/95 backdrop-blur-xl rounded-2xl shadow-[0_8px_60px_-12px_rgba(0,0,0,0.15)] border border-gray-200/60 overflow-hidden max-h-[calc(100vh-140px)] overflow-y-auto">
                    {/* Header */}
                    <div className="bg-gradient-to-r from-blue-50 via-cyan-50 to-blue-50 px-8 py-4 flex items-center justify-between border-b border-blue-100/80">
                      <div>
                        <h3 className="text-blue-800 font-bold text-base">Our Services</h3>
                        <p className="text-blue-500/70 text-xs mt-0.5">Comprehensive IT solutions for your business</p>
                      </div>
                      <Link 
                        href="/services" 
                        className="text-xs font-semibold text-blue-600 hover:text-white bg-blue-500/10 hover:bg-blue-500 px-4 py-2 rounded-lg transition-all duration-200 flex items-center gap-1.5"
                      >
                        View All <FaChevronDown className="text-[8px] -rotate-90" />
                      </Link>
                    </div>
                    
                    {/* Content Grid */}
                    <div className="p-6">
                      <div className="grid grid-cols-3 gap-x-8 gap-y-5">
                        {services.map((service, idx) => (
                          <div key={idx}>
                            {/* Category Header */}
                            <div className="flex items-center gap-2.5 mb-2.5 pb-2 border-b border-gray-100">
                              <div className={`w-7 h-7 ${iconBgMap[service.color] || 'bg-blue-500'} rounded-lg flex items-center justify-center flex-shrink-0 shadow-sm`}>
                                <service.icon className="text-white text-[10px]" />
                              </div>
                              <span className="text-gray-900 font-bold text-[13px] tracking-tight">
                                {service.name}
                              </span>
                            </div>
                            {/* Sub-services */}
                            <div className="space-y-0.5">
                              {service.subServices.map((sub, subIdx) => (
                                <Link
                                  key={subIdx}
                                  href={sub.href}
                                  className="group/item flex items-center gap-2 text-gray-500 hover:text-blue-600 text-[13px] py-1.5 px-2 rounded-lg hover:bg-blue-50/70 transition-all duration-200"
                                >
                                  <span className="w-1 h-1 rounded-full bg-gray-300 group-hover/item:bg-blue-500 group-hover/item:scale-150 transition-all duration-200"></span>
                                  {sub.name}
                                </Link>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="h-6 w-px bg-gray-200"></div>

              {/* Industries Dropdown */}
              <div 
                className="relative"
                onMouseEnter={() => setIsIndustriesOpen(true)}
                onMouseLeave={() => setIsIndustriesOpen(false)}
              >
                <Link href="/industries" className="group relative px-5 py-2.5 text-gray-700 font-semibold text-sm hover:text-indigo-600 transition-all duration-300 rounded-full flex items-center gap-2">
                  <span className="relative z-10 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    Industries
                    <FaChevronDown className={`text-xs transition-transform duration-300 ${isIndustriesOpen ? 'rotate-180' : ''}`} />
                  </span>
                  <span className="absolute inset-0 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300"></span>
                </Link>
                
                {/* Industries Mega Menu */}
                <div 
                  className={`fixed left-1/2 -translate-x-1/2 w-[90vw] max-w-[680px] transition-all duration-300 ease-out ${
                    isIndustriesOpen 
                      ? 'opacity-100 translate-y-0 pointer-events-auto' 
                      : 'opacity-0 translate-y-4 pointer-events-none'
                  }`}
                  style={{ bottom: scrolled ? 'calc(60px + 1.5rem + 16px)' : 'calc(60px + 16px)' }}
                >
                  {/* Arrow pointer */}
                  <div className="absolute -bottom-2 left-1/2 translate-x-[30px] w-4 h-4 bg-white border-r border-b border-gray-200/80 rotate-45 z-10"></div>
                  
                  <div className="bg-white/95 backdrop-blur-xl rounded-2xl shadow-[0_8px_60px_-12px_rgba(0,0,0,0.15)] border border-gray-200/60 overflow-hidden max-h-[calc(100vh-140px)] overflow-y-auto">
                    {/* Header */}
                    <div className="bg-gradient-to-r from-indigo-50 via-purple-50 to-indigo-50 px-8 py-4 flex items-center justify-between border-b border-indigo-100/80">
                      <div>
                        <h3 className="text-indigo-800 font-bold text-base">Industries We Serve</h3>
                        <p className="text-indigo-500/70 text-xs mt-0.5">Custom solutions for 70+ industries worldwide</p>
                      </div>
                      <Link 
                        href="/industries" 
                        className="text-xs font-semibold text-indigo-600 hover:text-white bg-indigo-500/10 hover:bg-indigo-500 px-4 py-2 rounded-lg transition-all duration-200 flex items-center gap-1.5"
                      >
                        View All <FaChevronDown className="text-[8px] -rotate-90" />
                      </Link>
                    </div>
                    
                    {/* Industry Cards Grid */}
                    <div className="p-6">
                      <div className="grid grid-cols-4 gap-3">
                        {industries.map((industry, idx) => (
                          <Link
                            key={idx}
                            href={industry.href}
                            className="group/card flex flex-col items-center gap-2.5 p-4 rounded-xl bg-gray-50/50 hover:bg-gradient-to-br hover:from-indigo-50 hover:to-purple-50 transition-all duration-300 border border-transparent hover:border-indigo-200/60 hover:shadow-md"
                          >
                            <div className={`w-11 h-11 ${iconBgMap[industry.color] || 'bg-blue-500'} rounded-xl flex items-center justify-center flex-shrink-0 group-hover/card:scale-110 group-hover/card:-translate-y-0.5 transition-all duration-300 shadow-md`}>
                              <industry.icon className="text-white text-base" />
                            </div>
                            <span className="text-gray-600 font-semibold text-xs text-center group-hover/card:text-indigo-700 transition-colors leading-tight">
                              {industry.name}
                            </span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
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
        <div className="lg:hidden fixed inset-0 z-[110] bg-black/50 backdrop-blur-sm" onClick={closeMobileMenu}>
          <div 
            className="absolute right-0 top-0 bottom-0 w-full max-w-sm bg-white shadow-2xl overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="sticky top-0 bg-gradient-to-r from-blue-600 to-cyan-600 p-6 flex items-center justify-between">
              <Logo className="brightness-0 invert" />
              <button 
                onClick={closeMobileMenu}
                className="w-10 h-10 bg-white/20 backdrop-blur-xl rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
              >
                <FaTimes className="text-xl" />
              </button>
            </div>

            {/* Menu Items */}
            <div className="p-6 space-y-2">
              <Link 
                href="/about" 
                onClick={closeMobileMenu}
                className="block px-4 py-3 text-gray-700 font-semibold rounded-xl hover:bg-blue-50 hover:text-blue-600 transition-all"
              >
                About Us
              </Link>
              <Link 
                href="/work-culture" 
                onClick={closeMobileMenu}
                className="block px-4 py-3 text-gray-700 font-semibold rounded-xl hover:bg-purple-50 hover:text-purple-600 transition-all"
              >
                Work Culture
              </Link>
              <Link 
                href="/blogs" 
                onClick={closeMobileMenu}
                className="block px-4 py-3 text-gray-700 font-semibold rounded-xl hover:bg-cyan-50 hover:text-cyan-600 transition-all"
              >
                Blog
              </Link>
              <Link 
                href="/career" 
                onClick={closeMobileMenu}
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
