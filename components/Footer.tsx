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
    { name: 'Facebook', icon: Facebook, href: '#' },
    { name: 'Twitter', icon: Twitter, href: '#' },
    { name: 'Instagram', icon: Instagram, href: '#' },
    { name: 'LinkedIn', icon: Linkedin, href: '#' },
  ];

  return (
    <footer className="bg-slate-900 text-slate-300">
      {/* Newsletter Section */}
      <div className="bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-white">Subscribe to Our Newsletter</h3>
              <p className="mt-2 text-slate-400">Get the latest health tips, news, and updates directly in your inbox.</p>
            </div>
            <form className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#007B8A]"
              />
              <button
                type="submit"
                className="inline-flex items-center justify-center bg-[#007B8A] text-white px-6 py-3 rounded-lg font-semibold hover:bg-teal-600 transition-colors duration-200"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
      
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8">
          
          {/* Company Info */}
          <div className="lg:col-span-4 space-y-4">
            <Link href="/" className="flex items-center space-x-3">
              <div className="w-12 h-12 rounded-full overflow-hidden bg-white p-1">
                <Image src="/logo/loh.png" alt="Logo" width={48} height={48} className="object-contain" />
              </div>
              <div>
                <h3 className="text-lg font-bold leading-tight text-white">The Florence Nightingale</h3>
                <p className="text-sm text-[#A2E3E2] font-medium">Home Care Agency</p>
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
                  123 Medical Square, Vijay Nagar,<br/>Indore, Madhya Pradesh 452010
                </address>
              </div>
              <a href="tel:+919876543210" className="flex items-center space-x-3 group">
                <Phone size={16} className="text-[#A2E3E2] flex-shrink-0" />
                <span className="text-sm text-slate-400 group-hover:text-white group-hover:underline">+91-94793-65137</span>
              </a>
              <a href="tel:+919876543210" className="flex items-center space-x-3 group">
                <Phone size={16} className="text-[#A2E3E2] flex-shrink-0" />
                <span className="text-sm text-slate-400 group-hover:text-white group-hover:underline">+91-83192-26300</span>
              </a>
              <a href="mailto:info@florencenightingalecare.com" className="flex items-center space-x-3 group">
                <Mail size={16} className="text-[#A2E3E2] flex-shrink-0" />
                <span className="text-sm text-slate-400 group-hover:text-white group-hover:underline">info@florencenightingalecare.com</span>
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
                    &copy; {currentYear} The Florence Nightingale Home Care Agency. All Rights Reserved.
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
