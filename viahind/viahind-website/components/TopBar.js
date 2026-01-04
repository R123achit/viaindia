'use client';
import { FaFacebook, FaLinkedin, FaSkype, FaInstagram, FaPhone, FaEnvelope } from 'react-icons/fa';
import Link from 'next/link';
import Logo from './Logo';

export default function TopBar() {
  return (
    <div className="bg-white sticky top-0 z-50 shadow-sm border-b border-gray-100">
      <div className="container-custom">
        <div className="flex items-center justify-between py-2 md:py-3">
          {/* Logo - Left Side */}
          <Link href="/" className="flex-shrink-0 group">
            <div className="transition-transform duration-300 group-hover:scale-105">
              <Logo />
            </div>
          </Link>

          {/* Right Side - Responsive */}
          <div className="flex items-center gap-2 md:gap-6">
            {/* Navigation Links - Hidden on mobile */}
            <div className="hidden lg:flex items-center gap-6">
              <Link 
                href="/work-culture" 
                className="relative text-gray-700 text-sm font-semibold hover:text-primary transition-colors duration-300 group"
              >
                Work Culture
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
              </Link>
              
              <Link 
                href="/blogs" 
                className="relative text-gray-700 text-sm font-semibold hover:text-primary transition-colors duration-300 group"
              >
                Blogs
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
              </Link>

              {/* Separator */}
              <div className="h-6 w-px bg-gray-200"></div>
              
              {/* Social Icons */}
              <div className="flex items-center gap-2">
                <a 
                  href="https://facebook.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-8 h-8 rounded-lg hover:bg-blue-50 text-gray-500 hover:text-blue-600 flex items-center justify-center transition-all duration-300"
                >
                  <FaFacebook className="text-base" />
                </a>
                <a 
                  href="https://linkedin.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-8 h-8 rounded-lg hover:bg-blue-50 text-gray-500 hover:text-blue-700 flex items-center justify-center transition-all duration-300"
                >
                  <FaLinkedin className="text-base" />
                </a>
                <a 
                  href="https://skype.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-8 h-8 rounded-lg hover:bg-blue-50 text-gray-500 hover:text-blue-500 flex items-center justify-center transition-all duration-300"
                >
                  <FaSkype className="text-base" />
                </a>
                <a 
                  href="https://instagram.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-8 h-8 rounded-lg hover:bg-pink-50 text-gray-500 hover:text-pink-600 flex items-center justify-center transition-all duration-300"
                >
                  <FaInstagram className="text-base" />
                </a>
              </div>
            </div>

            {/* Separator - Hidden on mobile */}
            <div className="hidden lg:block h-6 w-px bg-gray-200"></div>

            {/* Contact Info - Icons only on mobile, full on desktop */}
            <div className="flex items-center gap-2">
              {/* Phone */}
              <a 
                href="tel:+912613121140" 
                className="group flex items-center gap-2 hover:text-primary transition-colors duration-300"
              >
                <div className="w-8 h-8 md:w-9 md:h-9 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-blue-700 transition-colors duration-300">
                  <FaPhone className="text-white text-xs" />
                </div>
                <div className="hidden md:flex flex-col leading-tight">
                  <span className="text-[9px] text-gray-400 uppercase font-semibold tracking-wide">
                    Call Now
                  </span>
                  <span className="text-xs font-bold text-gray-800 group-hover:text-primary transition-colors duration-300">
                    +91 261 312 1140
                  </span>
                </div>
              </a>

              {/* Email */}
              <a 
                href="mailto:info@viahind.com" 
                className="group flex items-center gap-2 hover:text-primary transition-colors duration-300"
              >
                <div className="w-8 h-8 md:w-9 md:h-9 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-blue-700 transition-colors duration-300">
                  <FaEnvelope className="text-white text-xs" />
                </div>
                <div className="hidden md:flex flex-col leading-tight">
                  <span className="text-[9px] text-gray-400 uppercase font-semibold tracking-wide">
                    Email Us
                  </span>
                  <span className="text-xs font-bold text-gray-800 group-hover:text-primary transition-colors duration-300">
                    info@viahind.com
                  </span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
