'use client';
import { useState } from 'react';
import Link from 'next/link';
import { FaBars, FaTimes, FaFacebook, FaLinkedin, FaSkype, FaInstagram, FaPhone, FaEnvelope } from 'react-icons/fa';
import Logo from './Logo';

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isIndustriesOpen, setIsIndustriesOpen] = useState(false);
  const [isCareerOpen, setIsCareerOpen] = useState(false);

  // Close mobile menu when clicking a link
  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  // Close all dropdowns
  const closeAllDropdowns = () => {
    setIsServicesOpen(false);
    setIsIndustriesOpen(false);
    setIsCareerOpen(false);
  };

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="hidden lg:block fixed bottom-0 left-0 right-0 z-50">
        <div className="flex justify-center items-center py-3">
          <div className="flex items-center gap-1 bg-white rounded-full shadow-lg px-3 py-2 border border-gray-200">
          <Link 
            href="/" 
            className="relative px-6 py-2 text-gray-700 font-semibold text-sm hover:text-primary transition-all duration-300 group"
          >
            <span className="relative z-10 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
              Home
            </span>
            <span className="absolute bottom-0 left-6 right-6 h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
          </Link>

          <div className="h-5 w-px bg-gray-200"></div>
          
          <Link 
            href="/about" 
            className="relative px-6 py-2 text-gray-700 font-semibold text-sm hover:text-primary transition-all duration-300 group"
          >
            <span className="relative z-10 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-purple-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
              About
            </span>
            <span className="absolute bottom-0 left-6 right-6 h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
          </Link>

          <div className="h-5 w-px bg-gray-200"></div>
            
            <div 
              className="relative"
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <span className="relative px-6 py-2 text-gray-700 font-semibold text-sm hover:text-primary transition-all duration-300 cursor-pointer inline-flex items-center gap-2 group">
                <span className="relative z-10 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Services
                  <svg className="w-3 h-3 transition-transform duration-300 group-hover:rotate-180" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </span>
                <span className="absolute bottom-0 left-6 right-6 h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
              </span>
              {isServicesOpen && (
                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 bg-white shadow-2xl rounded-2xl overflow-hidden min-w-[900px] mb-4 z-50 border border-gray-100">
                  <div className="grid grid-cols-12 gap-0">
                    {/* Left Column - Services List */}
                    <div className="col-span-4 bg-gradient-to-br from-blue-50 to-cyan-50 p-8">
                      <div className="flex items-center gap-2 mb-6">
                        <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                          <span className="text-white text-sm font-bold">S</span>
                        </div>
                        <h4 className="text-gray-900 text-xl font-bold">Our Services</h4>
                      </div>
                      <div className="space-y-2">
                        <Link 
                          href="/services/web-application" 
                          className="group flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-white transition-all duration-300"
                        >
                          <div className="w-2 h-2 bg-primary rounded-full group-hover:scale-150 transition-transform"></div>
                          <span className="text-gray-700 font-medium group-hover:text-primary group-hover:translate-x-1 transition-all">
                            Web Application
                          </span>
                        </Link>
                        <Link 
                          href="/services/web-designing" 
                          className="group flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-white transition-all duration-300"
                        >
                          <div className="w-2 h-2 bg-primary rounded-full group-hover:scale-150 transition-transform"></div>
                          <span className="text-gray-700 font-medium group-hover:text-primary group-hover:translate-x-1 transition-all">
                            Web Designing
                          </span>
                        </Link>
                        <Link 
                          href="/services/ecommerce" 
                          className="group flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-white transition-all duration-300"
                        >
                          <div className="w-2 h-2 bg-primary rounded-full group-hover:scale-150 transition-transform"></div>
                          <span className="text-gray-700 font-medium group-hover:text-primary group-hover:translate-x-1 transition-all">
                            E-Commerce
                          </span>
                        </Link>
                        <Link 
                          href="/services/mobile" 
                          className="group flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-white transition-all duration-300"
                        >
                          <div className="w-2 h-2 bg-primary rounded-full group-hover:scale-150 transition-transform"></div>
                          <span className="text-gray-700 font-medium group-hover:text-primary group-hover:translate-x-1 transition-all">
                            iOS/Mobile
                          </span>
                        </Link>
                        <Link 
                          href="/services/windows" 
                          className="group flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-white transition-all duration-300"
                        >
                          <div className="w-2 h-2 bg-primary rounded-full group-hover:scale-150 transition-transform"></div>
                          <span className="text-gray-700 font-medium group-hover:text-primary group-hover:translate-x-1 transition-all">
                            Windows Forms
                          </span>
                        </Link>
                        <Link 
                          href="/services/saas" 
                          className="group flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-white transition-all duration-300"
                        >
                          <div className="w-2 h-2 bg-primary rounded-full group-hover:scale-150 transition-transform"></div>
                          <span className="text-gray-700 font-medium group-hover:text-primary group-hover:translate-x-1 transition-all">
                            SaaS
                          </span>
                        </Link>
                        <Link 
                          href="/services/seo" 
                          className="group flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-white transition-all duration-300"
                        >
                          <div className="w-2 h-2 bg-primary rounded-full group-hover:scale-150 transition-transform"></div>
                          <span className="text-gray-700 font-medium group-hover:text-primary group-hover:translate-x-1 transition-all">
                            SEO/SEM
                          </span>
                        </Link>
                      </div>
                    </div>

                    {/* Middle Column - Featured Service */}
                    <div className="col-span-4 p-8 bg-white">
                      <div className="flex items-center gap-2 mb-4">
                        <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                          <span className="text-white text-sm font-bold">★</span>
                        </div>
                        <h4 className="text-gray-900 text-xl font-bold">Featured Service</h4>
                      </div>
                      <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-6 mb-4">
                        <h5 className="text-lg font-bold text-gray-900 mb-3">Web Application Development</h5>
                        <p className="text-gray-600 text-sm leading-relaxed mb-4">
                          Custom web applications tailored to your business needs with cutting-edge technology and modern design principles.
                        </p>
                        <div className="flex flex-wrap gap-2 mb-4">
                          <span className="px-3 py-1 bg-white rounded-full text-xs font-medium text-primary">React</span>
                          <span className="px-3 py-1 bg-white rounded-full text-xs font-medium text-primary">Next.js</span>
                          <span className="px-3 py-1 bg-white rounded-full text-xs font-medium text-primary">Node.js</span>
                        </div>
                        <Link 
                          href="/services/web-application"
                          className="inline-flex items-center gap-2 text-primary font-semibold text-sm hover:gap-3 transition-all"
                        >
                          Learn More →
                        </Link>
                      </div>
                    </div>

                    {/* Right Column - Clients */}
                    <div className="col-span-4 p-8 bg-gradient-to-br from-gray-50 to-blue-50">
                      <div className="flex items-center gap-2 mb-4">
                        <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-teal-500 rounded-lg flex items-center justify-center">
                          <span className="text-white text-sm font-bold">C</span>
                        </div>
                        <h4 className="text-gray-900 text-xl font-bold">Our Clients</h4>
                      </div>
                      <div className="grid grid-cols-2 gap-3 mb-4">
                        <div className="bg-white p-4 rounded-xl text-center shadow-sm hover:shadow-md transition-shadow">
                          <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg mx-auto mb-2 flex items-center justify-center text-white font-bold">
                            C1
                          </div>
                          <span className="text-xs font-medium text-gray-700">Client 1</span>
                        </div>
                        <div className="bg-white p-4 rounded-xl text-center shadow-sm hover:shadow-md transition-shadow">
                          <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg mx-auto mb-2 flex items-center justify-center text-white font-bold">
                            C2
                          </div>
                          <span className="text-xs font-medium text-gray-700">Client 2</span>
                        </div>
                        <div className="bg-white p-4 rounded-xl text-center shadow-sm hover:shadow-md transition-shadow">
                          <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-teal-500 rounded-lg mx-auto mb-2 flex items-center justify-center text-white font-bold">
                            C3
                          </div>
                          <span className="text-xs font-medium text-gray-700">Client 3</span>
                        </div>
                        <div className="bg-white p-4 rounded-xl text-center shadow-sm hover:shadow-md transition-shadow">
                          <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-lg mx-auto mb-2 flex items-center justify-center text-white font-bold">
                            C4
                          </div>
                          <span className="text-xs font-medium text-gray-700">Client 4</span>
                        </div>
                      </div>
                      <Link 
                        href="/clients"
                        className="block text-center py-3 bg-white rounded-xl text-primary font-semibold text-sm hover:bg-primary hover:text-white transition-all"
                      >
                        View All Clients
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div className="h-5 w-px bg-gray-200"></div>
            
            <div 
              className="relative"
              onMouseEnter={() => setIsIndustriesOpen(true)}
              onMouseLeave={() => setIsIndustriesOpen(false)}
            >
              <span className="relative px-6 py-2 text-gray-700 font-semibold text-sm hover:text-primary transition-all duration-300 cursor-pointer inline-flex items-center gap-2 group">
                <span className="relative z-10 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-pink-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Industries
                  <svg className="w-3 h-3 transition-transform duration-300 group-hover:rotate-180" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </span>
                <span className="absolute bottom-0 left-6 right-6 h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
              </span>
              {isIndustriesOpen && (
                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 bg-white shadow-2xl rounded-2xl overflow-hidden min-w-[700px] mb-4 z-50 border border-gray-100">
                  <div className="grid grid-cols-2 gap-0">
                    {/* Left Column - Industries List */}
                    <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-8">
                      <div className="flex items-center gap-2 mb-6">
                        <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                          <span className="text-white text-sm font-bold">I</span>
                        </div>
                        <h4 className="text-gray-900 text-xl font-bold">Industries We Serve</h4>
                      </div>
                      <div className="grid grid-cols-2 gap-2">
                        <Link 
                          href="/industries#hospitality" 
                          className="group flex items-center gap-2 px-3 py-2.5 rounded-xl hover:bg-white transition-all duration-300"
                        >
                          <div className="w-2 h-2 bg-purple-500 rounded-full group-hover:scale-150 transition-transform"></div>
                          <span className="text-gray-700 text-sm font-medium group-hover:text-purple-600 group-hover:translate-x-1 transition-all">
                            Hospitality
                          </span>
                        </Link>
                        <Link 
                          href="/industries#retail" 
                          className="group flex items-center gap-2 px-3 py-2.5 rounded-xl hover:bg-white transition-all duration-300"
                        >
                          <div className="w-2 h-2 bg-pink-500 rounded-full group-hover:scale-150 transition-transform"></div>
                          <span className="text-gray-700 text-sm font-medium group-hover:text-pink-600 group-hover:translate-x-1 transition-all">
                            Retail
                          </span>
                        </Link>
                        <Link 
                          href="/industries#health" 
                          className="group flex items-center gap-2 px-3 py-2.5 rounded-xl hover:bg-white transition-all duration-300"
                        >
                          <div className="w-2 h-2 bg-red-500 rounded-full group-hover:scale-150 transition-transform"></div>
                          <span className="text-gray-700 text-sm font-medium group-hover:text-red-600 group-hover:translate-x-1 transition-all">
                            Healthcare
                          </span>
                        </Link>
                        <Link 
                          href="/industries#telecom" 
                          className="group flex items-center gap-2 px-3 py-2.5 rounded-xl hover:bg-white transition-all duration-300"
                        >
                          <div className="w-2 h-2 bg-blue-500 rounded-full group-hover:scale-150 transition-transform"></div>
                          <span className="text-gray-700 text-sm font-medium group-hover:text-blue-600 group-hover:translate-x-1 transition-all">
                            Telecom
                          </span>
                        </Link>
                        <Link 
                          href="/industries#ecommerce" 
                          className="group flex items-center gap-2 px-3 py-2.5 rounded-xl hover:bg-white transition-all duration-300"
                        >
                          <div className="w-2 h-2 bg-indigo-500 rounded-full group-hover:scale-150 transition-transform"></div>
                          <span className="text-gray-700 text-sm font-medium group-hover:text-indigo-600 group-hover:translate-x-1 transition-all">
                            E-commerce
                          </span>
                        </Link>
                        <Link 
                          href="/industries#manufacturing" 
                          className="group flex items-center gap-2 px-3 py-2.5 rounded-xl hover:bg-white transition-all duration-300"
                        >
                          <div className="w-2 h-2 bg-gray-600 rounded-full group-hover:scale-150 transition-transform"></div>
                          <span className="text-gray-700 text-sm font-medium group-hover:text-gray-600 group-hover:translate-x-1 transition-all">
                            Manufacturing
                          </span>
                        </Link>
                        <Link 
                          href="/industries#fintech" 
                          className="group flex items-center gap-2 px-3 py-2.5 rounded-xl hover:bg-white transition-all duration-300"
                        >
                          <div className="w-2 h-2 bg-teal-500 rounded-full group-hover:scale-150 transition-transform"></div>
                          <span className="text-gray-700 text-sm font-medium group-hover:text-teal-600 group-hover:translate-x-1 transition-all">
                            Fintech
                          </span>
                        </Link>
                        <Link 
                          href="/industries#logistics" 
                          className="group flex items-center gap-2 px-3 py-2.5 rounded-xl hover:bg-white transition-all duration-300"
                        >
                          <div className="w-2 h-2 bg-orange-500 rounded-full group-hover:scale-150 transition-transform"></div>
                          <span className="text-gray-700 text-sm font-medium group-hover:text-orange-600 group-hover:translate-x-1 transition-all">
                            Logistics
                          </span>
                        </Link>
                      </div>
                    </div>

                    {/* Right Column - Stats & CTA */}
                    <div className="p-8 bg-white">
                      <div className="flex items-center gap-2 mb-4">
                        <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
                          <span className="text-white text-sm font-bold">70+</span>
                        </div>
                        <h4 className="text-gray-900 text-xl font-bold">Global Reach</h4>
                      </div>
                      
                      <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-6 mb-4">
                        <p className="text-gray-600 text-sm leading-relaxed mb-6">
                          We serve <span className="font-bold text-primary">70+ industries</span> across <span className="font-bold text-primary">50+ countries</span> worldwide, delivering innovative IT solutions tailored to each sector's unique challenges.
                        </p>
                        
                        <div className="grid grid-cols-2 gap-4 mb-6">
                          <div className="bg-white rounded-lg p-4 text-center">
                            <div className="text-2xl font-bold text-primary mb-1">650+</div>
                            <div className="text-xs text-gray-600">Companies</div>
                          </div>
                          <div className="bg-white rounded-lg p-4 text-center">
                            <div className="text-2xl font-bold text-purple-600 mb-1">50+</div>
                            <div className="text-xs text-gray-600">Countries</div>
                          </div>
                        </div>
                        
                        <Link 
                          href="/industries"
                          className="block text-center py-3 bg-gradient-to-r from-primary to-blue-600 text-white rounded-xl font-semibold text-sm hover:shadow-lg transition-all"
                        >
                          Explore All Industries
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div className="h-5 w-px bg-gray-200"></div>

            <Link 
              href="/zoho" 
              className="relative px-6 py-2 text-gray-700 font-semibold text-sm hover:text-primary transition-all duration-300 group"
            >
              <span className="relative z-10 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-orange-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                ZOHO
              </span>
              <span className="absolute bottom-0 left-6 right-6 h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
            </Link>

            <div className="h-5 w-px bg-gray-200"></div>
            
            <div 
              className="relative"
              onMouseEnter={() => setIsCareerOpen(true)}
              onMouseLeave={() => setIsCareerOpen(false)}
            >
              <span className="relative px-6 py-2 text-gray-700 font-semibold text-sm hover:text-primary transition-all duration-300 cursor-pointer inline-flex items-center gap-2 group">
                <span className="relative z-10 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Career
                  <svg className="w-3 h-3 transition-transform duration-300 group-hover:rotate-180" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </span>
                <span className="absolute bottom-0 left-6 right-6 h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
              </span>
              {isCareerOpen && (
                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 bg-white shadow-2xl rounded-2xl overflow-hidden min-w-[600px] mb-4 z-50 border border-gray-100">
                  <div className="grid grid-cols-2 gap-0">
                    {/* Left Column - Career Options */}
                    <div className="bg-gradient-to-br from-green-50 to-teal-50 p-8">
                      <div className="flex items-center gap-2 mb-6">
                        <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-teal-500 rounded-lg flex items-center justify-center">
                          <span className="text-white text-sm font-bold">💼</span>
                        </div>
                        <h4 className="text-gray-900 text-xl font-bold">Join Our Team</h4>
                      </div>
                      <div className="space-y-2">
                        <Link 
                          href="/career#openings" 
                          className="group flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-white transition-all duration-300"
                        >
                          <div className="w-2 h-2 bg-green-500 rounded-full group-hover:scale-150 transition-transform"></div>
                          <span className="text-gray-700 font-medium group-hover:text-green-600 group-hover:translate-x-1 transition-all">
                            Current Openings
                          </span>
                        </Link>
                        <Link 
                          href="/career#culture" 
                          className="group flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-white transition-all duration-300"
                        >
                          <div className="w-2 h-2 bg-teal-500 rounded-full group-hover:scale-150 transition-transform"></div>
                          <span className="text-gray-700 font-medium group-hover:text-teal-600 group-hover:translate-x-1 transition-all">
                            Work Culture
                          </span>
                        </Link>
                        <Link 
                          href="/career#benefits" 
                          className="group flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-white transition-all duration-300"
                        >
                          <div className="w-2 h-2 bg-blue-500 rounded-full group-hover:scale-150 transition-transform"></div>
                          <span className="text-gray-700 font-medium group-hover:text-blue-600 group-hover:translate-x-1 transition-all">
                            Benefits & Perks
                          </span>
                        </Link>
                        <Link 
                          href="/career#internship" 
                          className="group flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-white transition-all duration-300"
                        >
                          <div className="w-2 h-2 bg-purple-500 rounded-full group-hover:scale-150 transition-transform"></div>
                          <span className="text-gray-700 font-medium group-hover:text-purple-600 group-hover:translate-x-1 transition-all">
                            Internship Program
                          </span>
                        </Link>
                        <Link 
                          href="/career#apply" 
                          className="group flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-white transition-all duration-300"
                        >
                          <div className="w-2 h-2 bg-orange-500 rounded-full group-hover:scale-150 transition-transform"></div>
                          <span className="text-gray-700 font-medium group-hover:text-orange-600 group-hover:translate-x-1 transition-all">
                            How to Apply
                          </span>
                        </Link>
                      </div>
                    </div>

                    {/* Right Column - Why Join Us */}
                    <div className="p-8 bg-white">
                      <div className="flex items-center gap-2 mb-4">
                        <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                          <span className="text-white text-sm font-bold">★</span>
                        </div>
                        <h4 className="text-gray-900 text-xl font-bold">Why Viahind?</h4>
                      </div>
                      
                      <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-6 mb-4">
                        <div className="space-y-4 mb-6">
                          <div className="flex items-start gap-3">
                            <div className="w-6 h-6 bg-green-500 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                              <span className="text-white text-xs">✓</span>
                            </div>
                            <div>
                              <div className="font-semibold text-gray-900 text-sm mb-1">Innovative Projects</div>
                              <div className="text-xs text-gray-600">Work on cutting-edge technology</div>
                            </div>
                          </div>
                          <div className="flex items-start gap-3">
                            <div className="w-6 h-6 bg-blue-500 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                              <span className="text-white text-xs">✓</span>
                            </div>
                            <div>
                              <div className="font-semibold text-gray-900 text-sm mb-1">Growth Opportunities</div>
                              <div className="text-xs text-gray-600">Career development programs</div>
                            </div>
                          </div>
                          <div className="flex items-start gap-3">
                            <div className="w-6 h-6 bg-purple-500 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                              <span className="text-white text-xs">✓</span>
                            </div>
                            <div>
                              <div className="font-semibold text-gray-900 text-sm mb-1">Great Team Culture</div>
                              <div className="text-xs text-gray-600">Collaborative environment</div>
                            </div>
                          </div>
                        </div>
                        
                        <Link 
                          href="/career"
                          className="block text-center py-3 bg-gradient-to-r from-green-500 to-teal-500 text-white rounded-xl font-semibold text-sm hover:shadow-lg transition-all"
                        >
                          View Open Positions
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div className="h-5 w-px bg-gray-200 ml-1"></div>

            <Link 
              href="/contact" 
              className="px-7 py-2 ml-2 bg-blue-600 text-white font-bold text-sm rounded-lg shadow-md hover:bg-blue-700 hover:shadow-lg transition-all duration-300 flex items-center gap-2"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
              Reach Us
            </Link>
          </div>
        </div>
      </nav>

      {/* Mobile Bottom Navigation */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white py-3 border-t border-gray-200 shadow-lg z-50">
        <div className="container-custom flex items-center justify-between px-4">
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="flex flex-col items-center gap-1"
          >
            <FaBars className="text-primary text-xl" />
            <span className="text-xs text-gray-600 font-medium">Menu</span>
          </button>
          
          <Link href="/" className="flex flex-col items-center gap-1">
            <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
            </svg>
            <span className="text-xs text-gray-600 font-medium">Home</span>
          </Link>
          
          <Link href="/contact" className="flex flex-col items-center gap-1">
            <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
            </svg>
            <span className="text-xs text-gray-600 font-medium">Contact Us</span>
          </Link>
          
          <Link href="/career" className="flex flex-col items-center gap-1">
            <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd" />
              <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
            </svg>
            <span className="text-xs text-gray-600 font-medium">Career</span>
          </Link>
        </div>
      </div>

      {/* Mobile Sidebar Menu */}
      {isMobileMenuOpen && (
        <>
          {/* Overlay */}
          <div 
            className="lg:hidden fixed inset-0 bg-black/50 z-[60]"
            onClick={() => setIsMobileMenuOpen(false)}
          ></div>
          
          {/* Sidebar */}
          <div className="lg:hidden fixed top-0 left-0 bottom-0 w-80 bg-white z-[70] shadow-2xl overflow-y-auto">
              {/* Header with Logo and Close */}
              <div className="flex items-center justify-between p-6 border-b border-gray-200">
                <Logo />
                <button 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-primary text-2xl"
                >
                  <FaTimes />
                </button>
              </div>

              {/* Menu Items */}
              <div className="py-4">
                <Link 
                  href="/" 
                  className="block px-6 py-4 text-primary text-lg font-bold hover:bg-blue-50 transition-colors"
                  onClick={closeMobileMenu}
                >
                  Home
                </Link>
                <Link 
                  href="/about" 
                  className="block px-6 py-4 text-gray-800 text-lg font-semibold hover:bg-blue-50 transition-colors"
                  onClick={closeMobileMenu}
                >
                  About
                </Link>
                <Link 
                  href="/services/web-application" 
                  className="block px-6 py-4 text-gray-800 text-lg font-semibold hover:bg-blue-50 transition-colors"
                  onClick={closeMobileMenu}
                >
                  Services
                </Link>
                <Link 
                  href="/industries" 
                  className="block px-6 py-4 text-gray-800 text-lg font-semibold hover:bg-blue-50 transition-colors"
                  onClick={closeMobileMenu}
                >
                  Industries
                </Link>
                <Link 
                  href="/zoho" 
                  className="block px-6 py-4 text-gray-800 text-lg font-semibold hover:bg-blue-50 transition-colors"
                  onClick={closeMobileMenu}
                >
                  ZOHO
                </Link>
                <Link 
                  href="/work-culture" 
                  className="block px-6 py-4 text-gray-800 text-lg font-semibold hover:bg-blue-50 transition-colors"
                  onClick={closeMobileMenu}
                >
                  Work Culture
                </Link>
                <Link 
                  href="/blogs" 
                  className="block px-6 py-4 text-gray-800 text-lg font-semibold hover:bg-blue-50 transition-colors"
                  onClick={closeMobileMenu}
                >
                  Blog
                </Link>
                <Link 
                  href="/career" 
                  className="block px-6 py-4 text-gray-800 text-lg font-semibold hover:bg-blue-50 transition-colors"
                  onClick={closeMobileMenu}
                >
                  Career
                </Link>
                <Link 
                  href="/contact" 
                  className="block px-6 py-4 text-gray-800 text-lg font-semibold hover:bg-blue-50 transition-colors"
                  onClick={closeMobileMenu}
                >
                  Reach Us
                </Link>
              </div>

              {/* Social Section */}
              <div className="px-6 py-4 border-t border-gray-200">
                <h3 className="text-gray-500 text-sm font-semibold mb-3">Our Social</h3>
                <div className="flex items-center gap-4">
                  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-primary text-xl">
                    <FaFacebook />
                  </a>
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-primary text-xl">
                    <FaLinkedin />
                  </a>
                  <a href="https://skype.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-primary text-xl">
                    <FaSkype />
                  </a>
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-primary text-xl">
                    <FaInstagram />
                  </a>
                </div>
              </div>

              {/* Contact Info */}
              <div className="px-6 py-4 border-t border-gray-200">
                <a href="tel:+912613121140" className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                    <FaPhone className="text-white" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 font-medium">Call Us Now</div>
                    <div className="text-base font-bold text-gray-800">+91 261 312 1140</div>
                  </div>
                </a>
                
                <a href="mailto:info@viahind.com" className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                    <FaEnvelope className="text-white" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 font-medium">Get In Touch Now</div>
                    <div className="text-base font-bold text-gray-800">info@viahind.com</div>
                  </div>
                </a>
              </div>
            </div>
          </>
        )}
    </>
  );
}
