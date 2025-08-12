'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { services } from '@/data/services'; // Assuming services data is available here
import { Phone, Mail, MapPin, ArrowRight, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'About Us', href: '/about' },
    { name: 'Our Services', href: '/services' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Our Blog', href: '/blog' },
    { name: 'Contact Us', href: '/contact' },
    { name: 'Careers', href: '/careers' },
  ];

  const socialLinks = [
    { name: 'Instagram', icon: Instagram, href: 'https://www.instagram.com/comforthealthcare05/' },
    { name: 'Facebook', icon: Facebook, href: '#' },
  ];

  return (
    <footer className="bg-slate-900 text-slate-300">
      {/* Newsletter Section */}
      <div className="border-b rounded-sm border-white p-6 rounded-xs">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
      <div>
        <h3 className="text-2xl font-bold text-white">Need Immediate Assistance?</h3>
        <p className="mt-2 text-white/90">
          Our care team is available 24/7 to discuss your home healthcare needs
        </p>
      </div>
      <div className="flex flex-col sm:flex-row gap-3 items-center">
        <a 
          href="tel:+919479365137" 
          className="w-full  sm:w-auto justify inline-flex items-center justify-center bg-white text-[#007B8A] px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors duration-200 shadow-lg hover:shadow-xl"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
           +91 94793 65137
        </a>
        <p className="text-white/80 text-sm mt-2 sm:mt-0 sm:ml-4">
          24/7 Emergency Support Available
        </p>
      </div>
    </div>
  </div>
</div>
      
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8">
          
          {/* Company Info */}
          <div className="lg:col-span-4 space-y-4">
          <Link href="/" className="flex items-center space-x-1">
    {/* Logo Image */}
    <div className="w-16 h-16 mt- md:mt-2 md:w-16 md:h-16 flex-shrink-0">
      <img
        src="/logo/logo.png"
        alt="Comfort Home Healthcare Logo"
        className="w-full h-full object-contain bg-white"
      />
    </div>

    {/* Text Section */}
    <div className="leading-tight">
      <h1 className="text-[20px] md:text-[25px] font-extrabold text-[#007B8A]">
        Comfort Home
      </h1>
      <h2 className="text-[20px] md:text-[25px] font-extrabold text-white -mt-1">
        Healthcare
      </h2>
      <p className="text-[10px] md:text-[10px] font-semibold text-white-500">
        Premium In <span className="text-[#007B8A] font-bold">Healthcare</span> Services
      </p>
    </div>
  </Link>
            <p className="text-sm leading-relaxed text-slate-400">
              Providing compassionate and professional home care services with a commitment to dignity and quality of life for every individual we serve.
            </p>
            <div className="flex space-x-2 pt-2">
              {socialLinks.map((social) => (
                <a key={social.name} href={social.href} className="w-9 h-9 flex items-center justify-center bg-slate-800 rounded-full text-slate-400 hover:bg-[#007B8A] hover:text-white transition-all duration-200">
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 md:col-start-1 lg:col-start-auto">
            <h4 className="text-md font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map(link => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm text-slate-400 hover:text-white hover:underline transition-colors duration-200">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="lg:col-span-3">
            <h4 className="text-md font-semibold text-white mb-4">Our Services</h4>
            <ul className="space-y-2 columns-1 sm:columns-2 lg:columns-1">
              {services.map(service => (
                <li key={service.id}>
                  <Link href={`/services/${service.id}`} className="text-sm text-slate-400 hover:text-white hover:underline transition-colors duration-200">
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-3">
            <h4 className="text-md font-semibold text-white mb-4">Contact Information</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin size={16} className="text-[#A2E3E2] mt-1 flex-shrink-0" />
                <address className="text-sm text-slate-400 not-italic">
                B-07, 704, Palash Parisar <br />
Silicon City, Indore – 452012 <br />
Madhya Pradesh, India                </address>
              </div>
              <a href="tel:+919876543210" className="flex items-center space-x-3 group">
                <Phone size={16} className="text-[#A2E3E2] flex-shrink-0" />
                <span className="text-sm text-slate-400 group-hover:text-white group-hover:underline">+91-94793-65137</span>
              </a>
              <a href="tel:+919876543210" className="flex items-center space-x-3 group">
                <Phone size={16} className="text-[#A2E3E2] flex-shrink-0" />
                <span className="text-sm text-slate-400 group-hover:text-white group-hover:underline">+91-83192-26300</span>
              </a>
              <a href="mailto:comforthomehealthcaree@gmail.com" className="flex items-center space-x-3 group">
                <Mail size={16} className="text-[#A2E3E2] flex-shrink-0" />
                <span className="text-sm text-slate-400 group-hover:text-white group-hover:underline">comforthomehealthcaree@gmail.com</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-slate-950/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
            <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
                <p className="text-xs text-slate-500 mb-4 md:mb-0">
                    &copy; {currentYear} Comfort Home Health Care. All Rights Reserved.
                </p>
                <div className="flex space-x-4 text-xs">
                    <Link href="/privacy-policy" className="text-slate-500 hover:text-white">Privacy Policy</Link>
                    <Link href="/terms-of-service" className="text-slate-500 hover:text-white">Terms of Service</Link>
                </div>
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
