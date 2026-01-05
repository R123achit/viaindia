'use client';

import { useRef } from 'react';
import Logo from '@/components/Logo';
import { FaDownload, FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaYoutube } from 'react-icons/fa';

export default function LogoDownloadPage() {
  const logoRef = useRef(null);

  const downloadLogo = (format, size, bgColor = 'transparent') => {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    const scale = 2; // For high DPI
    
    canvas.width = size.width * scale;
    canvas.height = size.height * scale;
    ctx.scale(scale, scale);

    // Background
    if (bgColor !== 'transparent') {
      ctx.fillStyle = bgColor;
      ctx.fillRect(0, 0, size.width, size.height);
    }

    // Create SVG
    const svg = createLogoSVG(size.width, size.height);
    const svgBlob = new Blob([svg], { type: 'image/svg+xml;charset=utf-8' });
    const url = URL.createObjectURL(svgBlob);
    
    const img = new Image();
    img.onload = () => {
      ctx.drawImage(img, 0, 0, size.width, size.height);
      
      canvas.toBlob((blob) => {
        const link = document.createElement('a');
        link.download = `viahind-logo-${size.width}x${size.height}.${format}`;
        link.href = URL.createObjectURL(blob);
        link.click();
        URL.revokeObjectURL(url);
      }, `image/${format}`);
    };
    img.src = url;
  };

  const downloadSVG = () => {
    const svg = createLogoSVG(400, 120);
    const blob = new Blob([svg], { type: 'image/svg+xml;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.download = 'viahind-logo.svg';
    link.href = url;
    link.click();
    URL.revokeObjectURL(url);
  };

  const createLogoSVG = (width, height) => {
    return `<?xml version="1.0" encoding="UTF-8"?>
<svg width="${width}" height="${height}" viewBox="0 0 400 120" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="premiumGradient" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0066FF" />
      <stop offset="50%" stop-color="#0099FF" />
      <stop offset="100%" stop-color="#00CCFF" />
    </linearGradient>
    <linearGradient id="shineGradient" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#FFFFFF" stop-opacity="0.3" />
      <stop offset="50%" stop-color="#FFFFFF" stop-opacity="0.1" />
      <stop offset="100%" stop-color="#FFFFFF" stop-opacity="0" />
    </linearGradient>
  </defs>
  
  <!-- Icon -->
  <g transform="translate(20, 20)">
    <!-- Outer Hexagon -->
    <path d="M40 5 L65 18 L65 44 L40 57 L15 44 L15 18 Z" 
          stroke="url(#premiumGradient)" stroke-width="3" fill="none"/>
    
    <!-- Inner Hexagon -->
    <path d="M40 13 L57 23 L57 43 L40 53 L23 43 L23 23 Z" 
          fill="url(#premiumGradient)"/>
    
    <!-- Shine -->
    <path d="M40 13 L57 23 L57 43 L40 53 L23 43 L23 23 Z" 
          fill="url(#shineGradient)" opacity="0.6"/>
    
    <!-- V Letter -->
    <path d="M31 25 L40 43 L49 25" 
          stroke="#FFFFFF" stroke-width="4" stroke-linecap="round" 
          stroke-linejoin="round" fill="none"/>
    
    <!-- Circuit Lines -->
    <g opacity="0.8">
      <path d="M40 13 L40 18" stroke="#00CCFF" stroke-width="2"/>
      <circle cx="40" cy="20" r="2" fill="#00CCFF"/>
      <path d="M40 53 L40 48" stroke="#00CCFF" stroke-width="2"/>
      <circle cx="40" cy="46" r="2" fill="#00CCFF"/>
      <path d="M23 33 L27 33" stroke="#00CCFF" stroke-width="2"/>
      <circle cx="29" cy="33" r="2" fill="#00CCFF"/>
      <path d="M57 33 L53 33" stroke="#00CCFF" stroke-width="2"/>
      <circle cx="51" cy="33" r="2" fill="#00CCFF"/>
    </g>
  </g>
  
  <!-- Text -->
  <g transform="translate(110, 35)">
    <!-- VIAHIND -->
    <text x="0" y="30" font-family="Arial, sans-serif" font-size="42" 
          font-weight="900" fill="#0066FF" letter-spacing="-1">VIAHIND</text>
    
    <!-- Registered Mark -->
    <text x="220" y="20" font-family="Arial, sans-serif" font-size="12" 
          font-weight="900" fill="#0066FF">®</text>
    
    <!-- Line -->
    <rect x="0" y="45" width="35" height="3" fill="url(#premiumGradient)" rx="1.5"/>
    
    <!-- IT Solutions -->
    <text x="40" y="50" font-family="Arial, sans-serif" font-size="16" 
          font-weight="700" fill="#4B5563" letter-spacing="3">IT SOLUTIONS</text>
    
    <!-- Tech Line -->
    <circle cx="0" cy="62" r="2" fill="#0066FF" opacity="0.6"/>
    <rect x="5" y="61" width="80" height="1" fill="#0066FF" opacity="0.3"/>
  </g>
</svg>`;
  };

  const socialMediaSizes = [
    { name: 'Facebook Profile', size: { width: 180, height: 180 }, icon: FaFacebook, color: 'bg-blue-600' },
    { name: 'Facebook Cover', size: { width: 820, height: 312 }, icon: FaFacebook, color: 'bg-blue-600' },
    { name: 'Twitter Profile', size: { width: 400, height: 400 }, icon: FaTwitter, color: 'bg-sky-500' },
    { name: 'Twitter Header', size: { width: 1500, height: 500 }, icon: FaTwitter, color: 'bg-sky-500' },
    { name: 'LinkedIn Profile', size: { width: 400, height: 400 }, icon: FaLinkedin, color: 'bg-blue-700' },
    { name: 'LinkedIn Cover', size: { width: 1584, height: 396 }, icon: FaLinkedin, color: 'bg-blue-700' },
    { name: 'Instagram Profile', size: { width: 320, height: 320 }, icon: FaInstagram, color: 'bg-pink-600' },
    { name: 'Instagram Post', size: { width: 1080, height: 1080 }, icon: FaInstagram, color: 'bg-pink-600' },
    { name: 'YouTube Channel', size: { width: 800, height: 800 }, icon: FaYoutube, color: 'bg-red-600' },
    { name: 'YouTube Banner', size: { width: 2560, height: 1440 }, icon: FaYoutube, color: 'bg-red-600' },
  ];

  const standardSizes = [
    { name: 'Small', size: { width: 200, height: 60 } },
    { name: 'Medium', size: { width: 400, height: 120 } },
    { name: 'Large', size: { width: 800, height: 240 } },
    { name: 'Extra Large', size: { width: 1600, height: 480 } },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-20">
      <div className="container-custom max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Download Viahind Logo</h1>
          <p className="text-xl text-gray-600">Get our logo in various formats and sizes for your needs</p>
        </div>

        {/* Logo Preview */}
        <div className="bg-white rounded-3xl shadow-2xl p-12 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Logo Preview</h2>
          <div className="flex justify-center items-center py-12 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl">
            <Logo />
          </div>
        </div>

        {/* Social Media Sizes */}
        <div className="bg-white rounded-3xl shadow-2xl p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Social Media Sizes</h2>
          <p className="text-gray-600 mb-8">Optimized for different social media platforms</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {socialMediaSizes.map((item, index) => (
              <div key={index} className="border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-3 mb-4">
                  <div className={`${item.color} w-10 h-10 rounded-lg flex items-center justify-center text-white`}>
                    <item.icon className="text-xl" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">{item.name}</h3>
                    <p className="text-sm text-gray-500">{item.size.width} × {item.size.height}px</p>
                  </div>
                </div>
                
                <div className="flex gap-2">
                  <button
                    onClick={() => downloadLogo('png', item.size, '#FFFFFF')}
                    className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
                  >
                    <FaDownload /> PNG (White)
                  </button>
                  <button
                    onClick={() => downloadLogo('png', item.size, 'transparent')}
                    className="flex-1 bg-gray-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-gray-700 transition-colors flex items-center justify-center gap-2"
                  >
                    <FaDownload /> PNG (Trans)
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Standard Sizes */}
        <div className="bg-white rounded-3xl shadow-2xl p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Standard Sizes</h2>
          <p className="text-gray-600 mb-8">General purpose logo files</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {standardSizes.map((item, index) => (
              <div key={index} className="border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <h3 className="font-bold text-gray-900 mb-2">{item.name}</h3>
                <p className="text-sm text-gray-500 mb-4">{item.size.width} × {item.size.height}px</p>
                
                <div className="space-y-2">
                  <button
                    onClick={() => downloadLogo('png', item.size, '#FFFFFF')}
                    className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center gap-2 text-sm"
                  >
                    <FaDownload /> PNG
                  </button>
                  <button
                    onClick={() => downloadLogo('jpeg', item.size, '#FFFFFF')}
                    className="w-full bg-green-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-green-700 transition-colors flex items-center justify-center gap-2 text-sm"
                  >
                    <FaDownload /> JPEG
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Vector Format */}
        <div className="bg-white rounded-3xl shadow-2xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Vector Format</h2>
          <p className="text-gray-600 mb-8">Scalable vector graphics for print and large displays</p>
          
          <div className="flex justify-center">
            <button
              onClick={downloadSVG}
              className="bg-purple-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-purple-700 transition-colors flex items-center gap-3 shadow-lg hover:shadow-xl"
            >
              <FaDownload className="text-2xl" />
              Download SVG (Vector)
            </button>
          </div>
        </div>

        {/* Usage Guidelines */}
        <div className="mt-12 bg-blue-50 border-2 border-blue-200 rounded-2xl p-8">
          <h3 className="text-xl font-bold text-blue-900 mb-4">Logo Usage Guidelines</h3>
          <ul className="space-y-2 text-blue-800">
            <li>✓ Maintain minimum clear space around the logo</li>
            <li>✓ Use on white or light backgrounds for best visibility</li>
            <li>✓ Keep proportions intact - do not stretch or distort</li>
            <li>✓ Use high-resolution files for print materials</li>
            <li>✗ Do not change colors or modify the design</li>
            <li>✗ Do not add effects, shadows, or outlines</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
