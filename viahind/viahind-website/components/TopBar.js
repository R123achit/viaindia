'use client';

import { useState, useEffect } from 'react';
import { FaFacebook, FaLinkedin, FaTwitter, FaInstagram, FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from 'react-icons/fa';
import Link from 'next/link';
import Logo from './Logo';

export default function TopBar() {
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent hydration mismatch
  if (!mounted) {
    return (
      <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 sticky top-0 z-[90] shadow-sm">
        <div className="border-b border-gray-700/50">
          <div className="container-custom">
            <div className="flex items-center justify-between py-2">
              <div className="hidden lg:flex items-center gap-6 text-xs text-gray-400">
                <div className="flex items-center gap-2">
                  <FaMapMarkerAlt className="text-blue-400" />
                  <span>Mumbai, India | San Francisco, USA</span>
                </div>
                <div className="w-px h-4 bg-gray-700"></div>
                <div className="flex items-center gap-2">
                  <FaClock className="text-cyan-400" />
                  <span>Mon - Fri: 9:00 AM - 6:00 PM</span>
                </div>
              </div>
              <div className="flex items-center gap-2 ml-auto">
                <span className="text-xs text-gray-400 mr-2 hidden md:inline">Follow Us:</span>
                {[
                  { icon: FaFacebook, href: '#', color: 'hover:bg-blue-600' },
                  { icon: FaLinkedin, href: '#', color: 'hover:bg-blue-700' },
                  { icon: FaTwitter, href: '#', color: 'hover:bg-sky-500' },
                  { icon: FaInstagram, href: '#', color: 'hover:bg-pink-600' }
                ].map((social, idx) => (
                  <a
                    key={idx}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-8 h-8 bg-gray-800 border border-gray-700 rounded-lg flex items-center justify-center text-gray-400 ${social.color} hover:text-white hover:border-transparent transition-all duration-300 hover:-translate-y-0.5`}
                  >
                    <social.icon className="text-xs" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white/95 backdrop-blur-xl border-b border-gray-200">
          <div className="container-custom">
            <div className="flex items-center justify-between py-3 md:py-4">
              <Link href="/" className="flex-shrink-0 group">
                <div className="transition-transform duration-300 group-hover:scale-105">
                  <Logo />
                </div>
              </Link>
              <div className="flex items-center gap-4 md:gap-6">
                <div className="hidden lg:flex items-center gap-4">
                  <Link href="/work-culture" className="relative text-gray-700 text-sm font-semibold hover:text-blue-600 transition-colors duration-300 group px-3 py-2">
                    <span className="relative z-10">Work Culture</span>
                    <span className="absolute inset-0 bg-blue-50 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300"></span>
                  </Link>
                  <Link href="/blogs" className="relative text-gray-700 text-sm font-semibold hover:text-blue-600 transition-colors duration-300 group px-3 py-2">
                    <span className="relative z-10">Blog</span>
                    <span className="absolute inset-0 bg-blue-50 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300"></span>
                  </Link>
                  <Link href="/career" className="relative text-gray-700 text-sm font-semibold hover:text-blue-600 transition-colors duration-300 group px-3 py-2">
                    <span className="relative z-10">Careers</span>
                    <span className="absolute inset-0 bg-blue-50 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300"></span>
                  </Link>
                </div>
                <div className="hidden lg:block h-8 w-px bg-gray-200"></div>
                <div className="flex items-center gap-2">
                  <a href="tel:+912613121140" className="group relative overflow-hidden">
                    <div className="relative z-10 flex items-center gap-2 md:gap-3 px-3 md:px-4 py-2 md:py-2.5 bg-gradient-to-r from-blue-600 to-blue-500 rounded-xl transition-all duration-300 group-hover:shadow-lg group-hover:shadow-blue-500/50">
                      <div className="w-8 h-8 bg-white/20 backdrop-blur-xl rounded-lg flex items-center justify-center flex-shrink-0">
                        <FaPhone className="text-white text-xs" />
                      </div>
                      <div className="hidden md:flex flex-col leading-tight">
                        <span className="text-[9px] text-blue-100 uppercase font-semibold tracking-wide">Call Now</span>
                        <span className="text-xs font-bold text-white">+91 261 312 1140</span>
                      </div>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-blue-600 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </a>
                  <a href="mailto:info@viahind.com" className="group relative overflow-hidden">
                    <div className="relative z-10 flex items-center gap-2 md:gap-3 px-3 md:px-4 py-2 md:py-2.5 bg-gradient-to-r from-cyan-600 to-cyan-500 rounded-xl transition-all duration-300 group-hover:shadow-lg group-hover:shadow-cyan-500/50">
                      <div className="w-8 h-8 bg-white/20 backdrop-blur-xl rounded-lg flex items-center justify-center flex-shrink-0">
                        <FaEnvelope className="text-white text-xs" />
                      </div>
                      <div className="hidden md:flex flex-col leading-tight">
                        <span className="text-[9px] text-cyan-100 uppercase font-semibold tracking-wide">Email Us</span>
                        <span className="text-xs font-bold text-white">info@viahind.com</span>
                      </div>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-700 to-cyan-600 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 sticky top-0 z-[90] transition-all duration-300 ${
      scrolled ? 'shadow-lg' : 'shadow-sm'
    }`}>
      {/* Top Info Bar */}
      <div className="border-b border-gray-700/50">
        <div className="container-custom">
          <div className="flex items-center justify-between py-2">
            {/* Left - Quick Info */}
            <div className="hidden lg:flex items-center gap-6 text-xs text-gray-400">
              <div className="flex items-center gap-2">
                <FaMapMarkerAlt className="text-blue-400" />
                <span>Mumbai, India | San Francisco, USA</span>
              </div>
              <div className="w-px h-4 bg-gray-700"></div>
              <div className="flex items-center gap-2">
                <FaClock className="text-cyan-400" />
                <span>Mon - Fri: 9:00 AM - 6:00 PM</span>
              </div>
            </div>

            {/* Right - Social Links */}
            <div className="flex items-center gap-2 ml-auto">
              <span className="text-xs text-gray-400 mr-2 hidden md:inline">Follow Us:</span>
              {[
                { icon: FaFacebook, href: '#', color: 'hover:bg-blue-600' },
                { icon: FaLinkedin, href: '#', color: 'hover:bg-blue-700' },
                { icon: FaTwitter, href: '#', color: 'hover:bg-sky-500' },
                { icon: FaInstagram, href: '#', color: 'hover:bg-pink-600' }
              ].map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-8 h-8 bg-gray-800 border border-gray-700 rounded-lg flex items-center justify-center text-gray-400 ${social.color} hover:text-white hover:border-transparent transition-all duration-300 hover:-translate-y-0.5`}
                >
                  <social.icon className="text-xs" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Main Header Bar */}
      <div className="bg-white/95 backdrop-blur-xl border-b border-gray-200">
        <div className="container-custom">
          <div className="flex items-center justify-between py-3 md:py-4">
            {/* Logo - Left Side */}
            <Link href="/" className="flex-shrink-0 group">
              <div className="transition-transform duration-300 group-hover:scale-105">
                <Logo />
              </div>
            </Link>

            {/* Right Side - Contact & Quick Links */}
            <div className="flex items-center gap-4 md:gap-6">
              {/* Quick Links - Desktop Only */}
              <div className="hidden lg:flex items-center gap-4">
                <Link 
                  href="/work-culture" 
                  className="relative text-gray-700 text-sm font-semibold hover:text-blue-600 transition-colors duration-300 group px-3 py-2"
                >
                  <span className="relative z-10">Work Culture</span>
                  <span className="absolute inset-0 bg-blue-50 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300"></span>
                </Link>
                
                <Link 
                  href="/blogs" 
                  className="relative text-gray-700 text-sm font-semibold hover:text-blue-600 transition-colors duration-300 group px-3 py-2"
                >
                  <span className="relative z-10">Blog</span>
                  <span className="absolute inset-0 bg-blue-50 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300"></span>
                </Link>

                <Link 
                  href="/career" 
                  className="relative text-gray-700 text-sm font-semibold hover:text-blue-600 transition-colors duration-300 group px-3 py-2"
                >
                  <span className="relative z-10">Careers</span>
                  <span className="absolute inset-0 bg-blue-50 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300"></span>
                </Link>
              </div>

              {/* Separator */}
              <div className="hidden lg:block h-8 w-px bg-gray-200"></div>

              {/* Contact Buttons */}
              <div className="flex items-center gap-2">
                {/* Phone */}
                <a 
                  href="tel:+912613121140" 
                  className="group relative overflow-hidden"
                >
                  <div className="relative z-10 flex items-center gap-2 md:gap-3 px-3 md:px-4 py-2 md:py-2.5 bg-gradient-to-r from-blue-600 to-blue-500 rounded-xl transition-all duration-300 group-hover:shadow-lg group-hover:shadow-blue-500/50">
                    <div className="w-8 h-8 bg-white/20 backdrop-blur-xl rounded-lg flex items-center justify-center flex-shrink-0">
                      <FaPhone className="text-white text-xs" />
                    </div>
                    <div className="hidden md:flex flex-col leading-tight">
                      <span className="text-[9px] text-blue-100 uppercase font-semibold tracking-wide">
                        Call Now
                      </span>
                      <span className="text-xs font-bold text-white">
                        +91 261 312 1140
                      </span>
                    </div>
                  </div>
                  {/* Hover Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-blue-600 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </a>

                {/* Email */}
                <a 
                  href="mailto:info@viahind.com" 
                  className="group relative overflow-hidden"
                >
                  <div className="relative z-10 flex items-center gap-2 md:gap-3 px-3 md:px-4 py-2 md:py-2.5 bg-gradient-to-r from-cyan-600 to-cyan-500 rounded-xl transition-all duration-300 group-hover:shadow-lg group-hover:shadow-cyan-500/50">
                    <div className="w-8 h-8 bg-white/20 backdrop-blur-xl rounded-lg flex items-center justify-center flex-shrink-0">
                      <FaEnvelope className="text-white text-xs" />
                    </div>
                    <div className="hidden md:flex flex-col leading-tight">
                      <span className="text-[9px] text-cyan-100 uppercase font-semibold tracking-wide">
                        Email Us
                      </span>
                      <span className="text-xs font-bold text-white">
                        info@viahind.com
                      </span>
                    </div>
                  </div>
                  {/* Hover Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-700 to-cyan-600 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
