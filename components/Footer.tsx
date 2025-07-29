import React from 'react';
import Link from 'next/link';
import { Phone, Mail, MapPin, Clock, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#007B8A] text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                <span className="text-[#007B8A] font-bold text-xl">FN</span>
              </div>
              <div>
                <h3 className="text-lg font-bold leading-tight">
                  The Florence Nightingale
                </h3>
                <p className="text-sm text-[#A2E3E2] font-medium">Home Care Agency</p>
              </div>
            </Link>
            <p className="text-[#A2E3E2] text-sm leading-relaxed">
              Providing compassionate, professional home care services in Indore with a commitment to dignity, independence, and quality of life for every individual we serve.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-[#A2E3E2] hover:text-white transition-colors duration-200">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-[#A2E3E2] hover:text-white transition-colors duration-200">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-[#A2E3E2] hover:text-white transition-colors duration-200">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-[#A2E3E2] hover:text-white transition-colors duration-200">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-[#A2E3E2] hover:text-white transition-colors duration-200 text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-[#A2E3E2] hover:text-white transition-colors duration-200 text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-[#A2E3E2] hover:text-white transition-colors duration-200 text-sm">
                  Our Services
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-[#A2E3E2] hover:text-white transition-colors duration-200 text-sm">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-[#A2E3E2] hover:text-white transition-colors duration-200 text-sm">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-[#A2E3E2] hover:text-white transition-colors duration-200 text-sm">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Our Services</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/services/personal-care" className="text-[#A2E3E2] hover:text-white transition-colors duration-200 text-sm">
                  Personal Care
                </Link>
              </li>
              <li>
                <Link href="/services/companionship-care" className="text-[#A2E3E2] hover:text-white transition-colors duration-200 text-sm">
                  Companionship Services
                </Link>
              </li>
              <li>
                <Link href="/services/medical-care" className="text-[#A2E3E2] hover:text-white transition-colors duration-200 text-sm">
                  Medical Care Support
                </Link>
              </li>
              <li>
                <Link href="/services/dementia-care" className="text-[#A2E3E2] hover:text-white transition-colors duration-200 text-sm">
                  Dementia Care
                </Link>
              </li>
              <li>
                <Link href="/services/respite-care" className="text-[#A2E3E2] hover:text-white transition-colors duration-200 text-sm">
                  Respite Care
                </Link>
              </li>
              <li>
                <Link href="/services/post-hospital-care" className="text-[#A2E3E2] hover:text-white transition-colors duration-200 text-sm">
                  Post-Hospital Care
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contact Information</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin size={16} className="text-white mt-1 flex-shrink-0" />
                <div className="text-sm text-[#A2E3E2]">
                  <p>123 Medical Square,</p>
                  <p>Vijay Nagar, Indore,</p>
                  <p>Madhya Pradesh 452010</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={16} className="text-white flex-shrink-0" />
                <span className="text-sm text-[#A2E3E2]">+91 98765 43210</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={16} className="text-white flex-shrink-0" />
                <span className="text-sm text-[#A2E3E2]">info@florencenightingalecare.com</span>
              </div>
              <div className="flex items-start space-x-3">
                <Clock size={16} className="text-white mt-1 flex-shrink-0" />
                <div className="text-sm text-[#A2E3E2]">
                  <p>24/7 Emergency Care</p>
                  <p>Mon-Fri: 8:00 AM - 6:00 PM</p>
                  <p>Sat-Sun: 9:00 AM - 4:00 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-[#005f6b]">
        <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-[#A2E3E2] mb-4 md:mb-0">
            © {currentYear} The Florence Nightingale Home Care Agency. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm">
            <Link href="/privacy" className="text-[#A2E3E2] hover:text-white transition-colors duration-200">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-[#A2E3E2] hover:text-white transition-colors duration-200">
              Terms of Service
            </Link>
            <Link href="/careers" className="text-[#A2E3E2] hover:text-white transition-colors duration-200">
              Careers
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;