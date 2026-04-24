'use client';
import { useState } from 'react';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaGlobe, FaClock, FaRocket, FaPaperPlane, FaCheckCircle, FaLinkedin, FaTwitter, FaFacebook, FaInstagram, FaWhatsapp, FaArrowRight } from 'react-icons/fa';

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: '', company: '', email: '', mobile: '', service: '', message: '' });
  const [focusedField, setFocusedField] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (errors[e.target.name]) setErrors({ ...errors, [e.target.name]: '' });
  };

  const validateForm = () => {
    const ne = {};
    if (!formData.name.trim()) ne.name = 'Name is required';
    if (!formData.email.trim()) ne.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) ne.email = 'Email is invalid';
    if (!formData.mobile.trim()) ne.mobile = 'Mobile is required';
    else if (!/^\+?[\d\s\-()]+$/.test(formData.mobile)) ne.mobile = 'Invalid number';
    if (!formData.message.trim()) ne.message = 'Message is required';
    setErrors(ne);
    return Object.keys(ne).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({ name: '', company: '', email: '', mobile: '', service: '', message: '' });
      setTimeout(() => setSubmitSuccess(false), 5000);
    }, 1500);
  };

  const locations = [
    { flag: '🇮🇳', country: 'IN', city: 'Mumbai', address: '123 Business Park, Andheri East, Mumbai, Maharashtra 400069', phone: '+91 261 312 1140', email: 'info@viahind.com' },
    { flag: '🇺🇸', country: 'US', city: 'San Francisco', address: '456 Tech Avenue, Suite 200, San Francisco, CA 94105', phone: '+1 (555) 123-4567', email: 'usa@viahind.com' },
    { flag: '🇶🇦', country: 'QA', city: 'Doha', address: '789 Business District, Doha, Qatar', phone: '+974 1234 5678', email: 'qatar@viahind.com' }
  ];

  const services = ['Web Development', 'Mobile App Development', 'UI/UX Design', 'Cloud Solutions', 'Digital Marketing', 'Enterprise Software', 'E-Commerce Solutions', 'Other'];

  const socials = [
    { icon: FaLinkedin, href: '#', label: 'LinkedIn' },
    { icon: FaTwitter, href: '#', label: 'Twitter' },
    { icon: FaFacebook, href: '#', label: 'Facebook' },
    { icon: FaInstagram, href: '#', label: 'Instagram' },
    { icon: FaWhatsapp, href: 'https://wa.me/912613121140', label: 'WhatsApp' }
  ];

  const inputCls = (field) => `w-full px-5 py-3.5 bg-white border-2 rounded-xl text-sm font-medium text-gray-900 placeholder-gray-400 focus:outline-none transition-all duration-300 focus:shadow-lg focus:shadow-blue-500/10 ${errors[field] ? 'border-red-400 focus:border-red-500' : 'border-gray-200 focus:border-blue-500'}`;

  return (
    <div className="bg-white overflow-hidden">

      {/* ═══ HERO ═══ */}
      <section className="relative min-h-[75vh] flex items-center overflow-hidden bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50">
        {/* Subtle background orbs — same as homepage */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200 rounded-full filter blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-200 rounded-full filter blur-3xl opacity-30 animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-cyan-200 rounded-full filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '2s' }}></div>
        {/* Grid pattern — same as homepage */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(rgba(0,0,0,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.05) 1px, transparent 1px)', backgroundSize: '50px 50px' }}></div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 w-full py-28">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2.5 bg-white/80 backdrop-blur-sm border border-blue-200 px-5 py-2 rounded-full mb-6 shadow-sm">
                <span className="relative flex h-2 w-2"><span className="animate-ping absolute h-full w-full rounded-full bg-blue-500 opacity-75"></span><span className="relative rounded-full h-2 w-2 bg-blue-600"></span></span>
                <span className="text-blue-700 font-semibold text-sm">Let's Build Something Great</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-5 leading-[1.1]">
                <span className="text-gray-900">Get In</span><br />
                <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-600 bg-clip-text text-transparent">Touch</span>
              </h1>
              <p className="text-gray-600 text-lg mb-8 max-w-md leading-relaxed">Have a project in mind? We'd love to hear from you. Our team responds within 24 hours.</p>

              <div className="flex gap-6 mb-8">
                {[{ v: '70+', l: 'Countries' }, { v: '24/7', l: 'Support' }, { v: '750+', l: 'Projects' }].map((s, i) => (
                  <div key={i} className="text-center">
                    <div className="text-2xl font-black text-gray-900">{s.v}</div>
                    <div className="text-xs text-gray-400 font-semibold uppercase tracking-wider">{s.l}</div>
                  </div>
                ))}
              </div>

              <div className="flex gap-3">
                {socials.map((s, i) => (
                  <a key={i} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label}
                    className="w-10 h-10 bg-white border border-gray-200 rounded-xl flex items-center justify-center text-gray-500 hover:text-blue-600 hover:border-blue-300 hover:shadow-md transition-all duration-300">
                    <s.icon className="text-sm" />
                  </a>
                ))}
              </div>
            </div>

            {/* Right — Quick Contact Cards */}
            <div className="space-y-4">
              {[
                { icon: FaPhone, title: 'Call Us', sub: 'Mon-Sat, 9AM-6PM IST', val: '+91 261 312 1140', href: 'tel:+912613121140', gradient: 'from-blue-500 to-blue-600' },
                { icon: FaEnvelope, title: 'Email Us', sub: 'We reply within 24 hours', val: 'info@viahind.com', href: 'mailto:info@viahind.com', gradient: 'from-blue-600 to-indigo-600' },
                { icon: FaWhatsapp, title: 'WhatsApp', sub: 'Chat with us instantly', val: 'Start Chat →', href: 'https://wa.me/912613121140', gradient: 'from-cyan-500 to-blue-500' }
              ].map((c, i) => (
                <a key={i} href={c.href} target={c.href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer"
                  className="group flex items-center gap-4 bg-white border border-gray-200 rounded-2xl p-5 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-500/[0.07] transition-all duration-300">
                  <div className={`w-12 h-12 bg-gradient-to-br ${c.gradient} rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform`}>
                    <c.icon className="text-white text-lg" />
                  </div>
                  <div className="flex-1">
                    <div className="text-gray-900 font-bold text-sm">{c.title}</div>
                    <div className="text-gray-400 text-xs">{c.sub}</div>
                  </div>
                  <div className="text-blue-600 font-bold text-sm group-hover:translate-x-0.5 transition-transform">{c.val}</div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══ FORM + OFFICES ═══ */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-5 gap-10">

            {/* Form — 3 cols */}
            <div className="lg:col-span-3">
              <span className="inline-block text-blue-600 font-bold text-sm uppercase tracking-widest mb-3">Send a Message</span>
              <h2 className="text-3xl font-black text-gray-900 mb-2">Start a Conversation</h2>
              <p className="text-gray-500 mb-8">Fill out the form and we'll get back to you within 24 hours</p>

              {submitSuccess && (
                <div className="mb-6 bg-emerald-50 border border-emerald-200 rounded-xl p-4 flex items-center gap-3">
                  <FaCheckCircle className="text-emerald-500 text-xl flex-shrink-0" />
                  <div>
                    <div className="text-emerald-800 font-bold text-sm">Message Sent!</div>
                    <div className="text-emerald-600 text-xs">We'll get back to you within 24 hours.</div>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <input type="text" name="name" placeholder="Full Name *" value={formData.name} onChange={handleChange}
                      onFocus={() => setFocusedField('name')} onBlur={() => setFocusedField(null)} className={inputCls('name')} />
                    {errors.name && <p className="text-red-500 text-xs mt-1 ml-1 font-medium">{errors.name}</p>}
                  </div>
                  <input type="text" name="company" placeholder="Company (Optional)" value={formData.company} onChange={handleChange}
                    onFocus={() => setFocusedField('company')} onBlur={() => setFocusedField(null)} className={inputCls('company')} />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <input type="email" name="email" placeholder="Email Address *" value={formData.email} onChange={handleChange}
                      onFocus={() => setFocusedField('email')} onBlur={() => setFocusedField(null)} className={inputCls('email')} />
                    {errors.email && <p className="text-red-500 text-xs mt-1 ml-1 font-medium">{errors.email}</p>}
                  </div>
                  <div>
                    <input type="tel" name="mobile" placeholder="Phone Number *" value={formData.mobile} onChange={handleChange}
                      onFocus={() => setFocusedField('mobile')} onBlur={() => setFocusedField(null)} className={inputCls('mobile')} />
                    {errors.mobile && <p className="text-red-500 text-xs mt-1 ml-1 font-medium">{errors.mobile}</p>}
                  </div>
                </div>
                <div className="relative">
                  <select name="service" value={formData.service} onChange={handleChange} className={`${inputCls('service')} appearance-none cursor-pointer`}>
                    <option value="">Select a Service (Optional)</option>
                    {services.map((s, i) => <option key={i} value={s}>{s}</option>)}
                  </select>
                  <svg className="w-4 h-4 text-gray-400 absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
                </div>
                <div>
                  <textarea name="message" placeholder="Tell us about your project *" value={formData.message} onChange={handleChange}
                    onFocus={() => setFocusedField('message')} onBlur={() => setFocusedField(null)} rows="5" className={`${inputCls('message')} resize-none`} />
                  {errors.message && <p className="text-red-500 text-xs mt-1 ml-1 font-medium">{errors.message}</p>}
                </div>

                <button type="submit" disabled={isSubmitting}
                  className={`group w-full flex items-center justify-center gap-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-4 rounded-xl font-bold text-base shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/35 transition-all duration-300 ${isSubmitting ? 'opacity-75 cursor-not-allowed' : ''}`}>
                  {isSubmitting ? (
                    <><svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg> Sending...</>
                  ) : (
                    <><FaPaperPlane className="group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" /> Send Message <FaArrowRight className="text-xs group-hover:translate-x-1 transition-transform" /></>
                  )}
                </button>
                <p className="text-center text-gray-400 text-xs">🔒 Your information is safe. We respect your privacy.</p>
              </form>
            </div>

            {/* Offices — 2 cols */}
            <div className="lg:col-span-2">
              <span className="inline-block text-blue-600 font-bold text-sm uppercase tracking-widest mb-3">Our Offices</span>
              <h2 className="text-3xl font-black text-gray-900 mb-6">Global Presence</h2>

              <div className="space-y-4">
                {locations.map((loc, i) => (
                  <div key={i} className="group bg-white border border-gray-200 rounded-2xl p-5 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-500/[0.06] transition-all duration-300 relative overflow-hidden">
                    <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-2xl">{loc.flag}</span>
                      <div>
                        <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">{loc.country}</span>
                        <h3 className="text-lg font-bold text-gray-900 leading-tight">{loc.city}</h3>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <FaMapMarkerAlt className="text-blue-500 mt-0.5 flex-shrink-0 text-sm" />
                        <span className="text-gray-600 text-sm leading-relaxed">{loc.address}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <FaPhone className="text-blue-500 flex-shrink-0 text-sm" />
                        <a href={`tel:${loc.phone}`} className="text-gray-700 text-sm font-medium hover:text-blue-600 transition-colors">{loc.phone}</a>
                      </div>
                      <div className="flex items-center gap-3">
                        <FaEnvelope className="text-blue-500 flex-shrink-0 text-sm" />
                        <a href={`mailto:${loc.email}`} className="text-gray-700 text-sm font-medium hover:text-blue-600 transition-colors">{loc.email}</a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-100 rounded-2xl p-5">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center"><FaRocket className="text-white text-xs" /></div>
                  <h4 className="font-bold text-gray-900 text-sm">Fast Response Guaranteed</h4>
                </div>
                <p className="text-gray-500 text-xs leading-relaxed">Our team typically responds within 2-4 hours during business hours. For urgent queries, reach us via WhatsApp or call.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ MAP ═══ */}
      <section className="relative h-[400px] bg-gray-100">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.8267168676843!2d72.8776559!3d19.0759837!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDA0JzMzLjUiTiA3MsKwNTInMzkuNiJF!5e0!3m2!1sen!2sin!4v1234567890"
          width="100%" height="100%" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Viahind Location"
          className="grayscale hover:grayscale-0 transition-all duration-700"
        />
        <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-md p-5 rounded-2xl shadow-xl max-w-xs border border-gray-100">
          <h3 className="text-base font-bold text-gray-900 mb-1">Visit Our Office</h3>
          <p className="text-gray-500 text-xs mb-3">Drop by for a coffee and let's discuss your project!</p>
          <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-blue-600 font-bold text-sm hover:gap-2.5 transition-all">
            Get Directions <FaArrowRight className="text-xs" />
          </a>
        </div>
      </section>
    </div>
  );
}
