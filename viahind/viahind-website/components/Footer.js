'use client';
import Link from 'next/link';
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-dark text-white py-20">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-16">
          <div>
            <h3 className="text-primary text-4xl font-bold mb-8">Viahind</h3>
            <div className="flex flex-col gap-8">
              <div>
                <h4 className="text-white text-lg mb-4">🇮🇳 India</h4>
                <p className="flex items-center gap-3 text-sm text-gray-400 mb-2">
                  <FaMapMarkerAlt /> 123 Business Park, Mumbai, India
                </p>
                <p className="flex items-center gap-3 text-sm text-gray-400 mb-2">
                  <FaPhone /> +91 261 312 1140
                </p>
                <p className="flex items-center gap-3 text-sm text-gray-400">
                  <FaEnvelope /> info@viahind.com
                </p>
              </div>
              <div>
                <h4 className="text-white text-lg mb-4">🇺🇸 USA</h4>
                <p className="flex items-center gap-3 text-sm text-gray-400 mb-2">
                  <FaMapMarkerAlt /> 456 Tech Avenue, San Francisco, CA
                </p>
                <p className="flex items-center gap-3 text-sm text-gray-400 mb-2">
                  <FaPhone /> +1 (555) 123-4567
                </p>
                <p className="flex items-center gap-3 text-sm text-gray-400">
                  <FaEnvelope /> usa@viahind.com
                </p>
              </div>
            </div>
            <Link href="/contact" className="inline-block bg-primary text-white px-8 py-3 rounded-lg mt-5 font-semibold hover:bg-primary-light transition-colors">
              Reach Us
            </Link>
          </div>

          <div>
            <h4 className="text-white text-xl mb-6">About</h4>
            <ul className="flex flex-col gap-3">
              <li><Link href="/about" className="text-gray-400 text-sm hover:text-primary transition-colors">Our Company</Link></li>
              <li><Link href="/about#impact" className="text-gray-400 text-sm hover:text-primary transition-colors">We Impact</Link></li>
              <li><Link href="/career" className="text-gray-400 text-sm hover:text-primary transition-colors">Careers</Link></li>
              <li><Link href="/work-culture" className="text-gray-400 text-sm hover:text-primary transition-colors">Work Culture</Link></li>
              <li><Link href="/clients" className="text-gray-400 text-sm hover:text-primary transition-colors">Our Clients</Link></li>
              <li><Link href="/blogs" className="text-gray-400 text-sm hover:text-primary transition-colors">Blogs</Link></li>
              <li><Link href="/testimonials" className="text-gray-400 text-sm hover:text-primary transition-colors">Testimonials</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white text-xl mb-6">Services</h4>
            <ul className="flex flex-col gap-3">
              <li><Link href="/services/web-application" className="text-gray-400 text-sm hover:text-primary transition-colors">Web Development</Link></li>
              <li><Link href="/services/mobile" className="text-gray-400 text-sm hover:text-primary transition-colors">Mobile Application</Link></li>
              <li><Link href="/services/windows" className="text-gray-400 text-sm hover:text-primary transition-colors">Desktop App Development</Link></li>
              <li><Link href="/services/enterprise" className="text-gray-400 text-sm hover:text-primary transition-colors">Enterprise Software</Link></li>
              <li><Link href="/services/integration" className="text-gray-400 text-sm hover:text-primary transition-colors">Enterprise Integration</Link></li>
              <li><Link href="/services/seo" className="text-gray-400 text-sm hover:text-primary transition-colors">Digital Marketing</Link></li>
              <li><Link href="/services/erp" className="text-gray-400 text-sm hover:text-primary transition-colors">ERP Implementation</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white text-xl mb-6">Industries</h4>
            <ul className="flex flex-col gap-3">
              <li><Link href="/industries#hospitality" className="text-gray-400 text-sm hover:text-primary transition-colors">Hospitality</Link></li>
              <li><Link href="/industries#retail" className="text-gray-400 text-sm hover:text-primary transition-colors">Retail</Link></li>
              <li><Link href="/industries#health" className="text-gray-400 text-sm hover:text-primary transition-colors">Health</Link></li>
              <li><Link href="/industries#telecom" className="text-gray-400 text-sm hover:text-primary transition-colors">Telecommunication</Link></li>
              <li><Link href="/industries#ecommerce" className="text-gray-400 text-sm hover:text-primary transition-colors">E-commerce</Link></li>
              <li><Link href="/industries#manufacturing" className="text-gray-400 text-sm hover:text-primary transition-colors">Manufacturing</Link></li>
              <li><Link href="/industries#food" className="text-gray-400 text-sm hover:text-primary transition-colors">Food</Link></li>
              <li><Link href="/industries#it" className="text-gray-400 text-sm hover:text-primary transition-colors">Information Technology</Link></li>
              <li><Link href="/industries#mining" className="text-gray-400 text-sm hover:text-primary transition-colors">Mining</Link></li>
              <li><Link href="/industries#fintech" className="text-gray-400 text-sm hover:text-primary transition-colors">Fintech</Link></li>
              <li><Link href="/industries#media" className="text-gray-400 text-sm hover:text-primary transition-colors">Media</Link></li>
              <li><Link href="/industries#supply" className="text-gray-400 text-sm hover:text-primary transition-colors">Supply Chain</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center gap-5">
          <p className="text-sm text-gray-400">©2013-2026 All rights reserved. Viahind IT Solutions</p>
          <div className="flex gap-8">
            <Link href="/terms" className="text-sm text-gray-400 hover:text-primary transition-colors">Terms</Link>
            <Link href="/privacy" className="text-sm text-gray-400 hover:text-primary transition-colors">Privacy</Link>
            <Link href="/cookies" className="text-sm text-gray-400 hover:text-primary transition-colors">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
