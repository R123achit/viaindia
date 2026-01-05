'use client';

import { useState } from 'react';
import Link from 'next/link';
import { 
  FaMapMarkerAlt, 
  FaPhone, 
  FaEnvelope, 
  FaFacebook, 
  FaLinkedin, 
  FaTwitter, 
  FaInstagram, 
  FaGithub,
  FaArrowRight,
  FaCheckCircle
} from 'react-icons/fa';
import Logo from './Logo';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setTimeout(() => {
        setSubscribed(false);
        setEmail('');
      }, 3000);
    }
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: 'linear-gradient(#0066FF 1px, transparent 1px), linear-gradient(90deg, #0066FF 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }} />
        
        {/* Gradient Orbs */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
        
        {/* Floating Particles */}
        <div className="absolute top-20 left-20 w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
        <div className="absolute top-40 right-40 w-1 h-1 bg-cyan-400 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-40 left-60 w-1.5 h-1.5 bg-blue-300 rounded-full animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      {/* Main Footer Content - Compact Single View */}
      <div className="relative z-10">
        <div className="container-custom py-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Company Info - Compact */}
            <div className="lg:col-span-3">
              <Logo className="mb-4 scale-90 origin-left" />
              <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                Leading IT solutions provider delivering innovative software development globally since 2013.
              </p>
              
              {/* Compact Stats */}
              <div className="grid grid-cols-3 gap-2 mb-4">
                <div className="text-center p-2 bg-gray-800/50 rounded-lg border border-gray-700/50">
                  <div className="text-lg font-bold text-blue-400">13+</div>
                  <div className="text-[10px] text-gray-500">Years</div>
                </div>
                <div className="text-center p-2 bg-gray-800/50 rounded-lg border border-gray-700/50">
                  <div className="text-lg font-bold text-cyan-400">500+</div>
                  <div className="text-[10px] text-gray-500">Projects</div>
                </div>
                <div className="text-center p-2 bg-gray-800/50 rounded-lg border border-gray-700/50">
                  <div className="text-lg font-bold text-blue-400">50+</div>
                  <div className="text-[10px] text-gray-500">Clients</div>
                </div>
              </div>

              {/* Compact Social Links */}
              <div className="flex gap-2">
                {[
                  { icon: FaFacebook, href: '#', color: 'hover:bg-blue-600' },
                  { icon: FaLinkedin, href: '#', color: 'hover:bg-blue-700' },
                  { icon: FaTwitter, href: '#', color: 'hover:bg-sky-500' },
                  { icon: FaInstagram, href: '#', color: 'hover:bg-pink-600' },
                  { icon: FaGithub, href: '#', color: 'hover:bg-gray-700' }
                ].map((social, idx) => (
                  <a
                    key={idx}
                    href={social.href}
                    className={`w-9 h-9 bg-gray-800 border border-gray-700 rounded-lg flex items-center justify-center ${social.color} transition-all duration-300 hover:border-transparent hover:-translate-y-1`}
                  >
                    <social.icon className="text-gray-400 hover:text-white transition-colors text-sm" />
                  </a>
                ))}
              </div>
            </div>

            {/* Services - Compact */}
            <div className="lg:col-span-2">
              <h4 className="text-white font-bold text-sm mb-3 flex items-center gap-2">
                <div className="w-1 h-4 bg-gradient-to-b from-blue-500 to-cyan-500 rounded-full" />
                Services
              </h4>
              <ul className="space-y-2">
                {[
                  { name: 'Web Development', href: '/services/web-application' },
                  { name: 'Mobile Apps', href: '/services/mobile' },
                  { name: 'Enterprise Software', href: '/services/enterprise' },
                  { name: 'Cloud Solutions', href: '/services/integration' },
                  { name: 'Digital Marketing', href: '/services/seo' }
                ].map((item, idx) => (
                  <li key={idx}>
                    <Link 
                      href={item.href}
                      className="text-gray-400 text-sm hover:text-blue-400 transition-colors flex items-center gap-2 group"
                    >
                      <FaArrowRight className="text-[10px] opacity-0 group-hover:opacity-100 -ml-3 group-hover:ml-0 transition-all" />
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Industries - Compact */}
            <div className="lg:col-span-2">
              <h4 className="text-white font-bold text-sm mb-3 flex items-center gap-2">
                <div className="w-1 h-4 bg-gradient-to-b from-blue-500 to-cyan-500 rounded-full" />
                Industries
              </h4>
              <ul className="space-y-2">
                {[
                  { name: 'Healthcare', href: '/industries#health' },
                  { name: 'E-commerce', href: '/industries#ecommerce' },
                  { name: 'Fintech', href: '/industries#fintech' },
                  { name: 'Manufacturing', href: '/industries#manufacturing' },
                  { name: 'Retail', href: '/industries#retail' }
                ].map((item, idx) => (
                  <li key={idx}>
                    <Link 
                      href={item.href}
                      className="text-gray-400 text-sm hover:text-cyan-400 transition-colors flex items-center gap-2 group"
                    >
                      <FaArrowRight className="text-[10px] opacity-0 group-hover:opacity-100 -ml-3 group-hover:ml-0 transition-all" />
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company - Compact */}
            <div className="lg:col-span-2">
              <h4 className="text-white font-bold text-sm mb-3 flex items-center gap-2">
                <div className="w-1 h-4 bg-gradient-to-b from-blue-500 to-cyan-500 rounded-full" />
                Company
              </h4>
              <ul className="space-y-2">
                {[
                  { name: 'About Us', href: '/about' },
                  { name: 'Careers', href: '/career' },
                  { name: 'Our Clients', href: '/clients' },
                  { name: 'Blog', href: '/blogs' },
                  { name: 'Contact', href: '/contact' }
                ].map((item, idx) => (
                  <li key={idx}>
                    <Link 
                      href={item.href}
                      className="text-gray-400 text-sm hover:text-blue-400 transition-colors flex items-center gap-2 group"
                    >
                      <FaArrowRight className="text-[10px] opacity-0 group-hover:opacity-100 -ml-3 group-hover:ml-0 transition-all" />
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact & Newsletter - Compact */}
            <div className="lg:col-span-3">
              <h4 className="text-white font-bold text-sm mb-3 flex items-center gap-2">
                <div className="w-1 h-4 bg-gradient-to-b from-blue-500 to-cyan-500 rounded-full" />
                Get in Touch
              </h4>
              
              {/* Compact Contact Cards */}
              <div className="space-y-2 mb-4">
                <div className="p-3 bg-gray-800/30 border border-gray-700/50 rounded-lg hover:border-blue-500/50 transition-all">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-6 h-6 bg-gradient-to-br from-orange-500 to-green-500 rounded text-xs flex items-center justify-center">🇮🇳</div>
                    <span className="text-white text-xs font-semibold">India</span>
                  </div>
                  <p className="text-gray-400 text-xs flex items-center gap-2">
                    <FaPhone className="text-cyan-400" /> +91 261 312 1140
                  </p>
                </div>

                <div className="p-3 bg-gray-800/30 border border-gray-700/50 rounded-lg hover:border-cyan-500/50 transition-all">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-6 h-6 bg-gradient-to-br from-blue-600 to-red-600 rounded text-xs flex items-center justify-center">🇺🇸</div>
                    <span className="text-white text-xs font-semibold">USA</span>
                  </div>
                  <p className="text-gray-400 text-xs flex items-center gap-2">
                    <FaPhone className="text-cyan-400" /> +1 (555) 123-4567
                  </p>
                </div>
              </div>

              {/* Compact Newsletter */}
              <form onSubmit={handleSubscribe} className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email"
                  className="w-full px-3 py-2 text-sm bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-all"
                  required
                />
                <button
                  type="submit"
                  className="absolute right-1 top-1/2 -translate-y-1/2 px-3 py-1 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded text-xs font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition-all"
                >
                  {subscribed ? <FaCheckCircle /> : 'Subscribe'}
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Compact Bottom Bar */}
        <div className="border-t border-gray-700/50">
          <div className="container-custom py-4">
            <div className="flex flex-col lg:flex-row justify-between items-center gap-3 text-xs">
              {/* Copyright */}
              <div className="flex items-center gap-3 text-gray-400">
                <p className="flex items-center gap-2">
                  <span className="text-blue-400">©</span>
                  <span>2013-{currentYear} Viahind IT Solutions</span>
                </p>
                <div className="flex items-center gap-1.5">
                  <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-gray-500">Online</span>
                </div>
              </div>

              {/* Legal Links */}
              <div className="flex items-center gap-4">
                <Link href="/terms" className="text-gray-400 hover:text-blue-400 transition-colors">Terms</Link>
                <span className="text-gray-700">•</span>
                <Link href="/privacy" className="text-gray-400 hover:text-blue-400 transition-colors">Privacy</Link>
                <span className="text-gray-700">•</span>
                <Link href="/cookies" className="text-gray-400 hover:text-blue-400 transition-colors">Cookies</Link>
              </div>

              {/* Trust Badges */}
              <div className="flex items-center gap-3 opacity-50">
                <div className="flex items-center gap-1">
                  <FaCheckCircle className="text-green-500 text-[10px]" />
                  <span className="text-gray-500">ISO</span>
                </div>
                <div className="flex items-center gap-1">
                  <FaCheckCircle className="text-green-500 text-[10px]" />
                  <span className="text-gray-500">GDPR</span>
                </div>
                <div className="flex items-center gap-1">
                  <FaCheckCircle className="text-green-500 text-[10px]" />
                  <span className="text-gray-500">SOC 2</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
