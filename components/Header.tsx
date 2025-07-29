'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Phone, Mail, MapPin } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigationItems = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      {/* Top Bar */}
      <div className="bg-[#007B8A] text-white py-2 px-4 hidden sm:block">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row sm:justify-between items-center text-xs sm:text-sm">
          <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4">
            <div className="flex items-center space-x-2">
              <Phone size={12} />
              <span>+91 98765 43210</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail size={12} />
              <span>info@florencenightingalecare.com</span>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin size={12} />
              <span>Indore, Madhya Pradesh</span>
            </div>
          </div>
          <div className="text-xs sm:text-sm mt-2 sm:mt-0">
            24/7 Emergency Care Available
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className={`sticky top-0 z-50 transition-all duration-300 ease-in-out ${
        isScrolled ? 'bg-white shadow-lg' : 'bg-white shadow-none'
      }`}>
        <div className="max-w-7xl mx-auto px-2 sm:px-4 flex justify-between items-center py-3 sm:py-4">
          {/* Logo */}
          <Link href="/" className="flex items-end space-x-1">
            <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full overflow-hidden">
              <img src="/logo/loh.png" alt="Logo" className="w-full h-full object-cover" />
            </div>
            <div>
              <h1 className="text-lg sm:text-xl font-bold text-gray-900 leading-tight">
                The Florence Nightingale
              </h1>
              <p className="text-xs sm:text-sm text-[#007B8A] font-medium">Home Care Agency</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-8">
            {navigationItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`font-medium transition-colors duration-200 hover:text-[#007B8A] ${
                  pathname === item.href ? 'text-[#007B8A]' : 'text-gray-700'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* CTA Button & Mobile Menu */}
          <div className="flex items-center space-x-4">
            <Link
              href="/contact"
              className="hidden md:inline-flex bg-[#4CAF50] text-white px-6 py-2 rounded-lg font-medium hover:bg-[#3e8e41] transition-colors duration-200"
            >
              Get Free Consultation
            </Link>
            
            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="lg:hidden p-2 rounded-md hover:bg-[#A2E3E2] transition-colors duration-200"
              aria-label="Toggle menu"
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
            >
              {isMenuOpen ? (
                <X size={24} className="text-gray-700" />
              ) : (
                <Menu size={24} className="text-gray-700" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Overlay */}
        {isMenuOpen && (
          <div className="lg:hidden fixed inset-0 z-50 bg-black bg-opacity-50" onClick={toggleMenu}>
            <div 
              id="mobile-menu"
              className="absolute right-0 top-0 h-full w-full sm:w-80 max-w-[90vw] bg-[#A2E3E2] shadow-xl transform transition-transform duration-300 ease-in-out"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-6">
                <div className="flex justify-between items-center mb-8">
                  <Link href="/" className="flex items-center space-x-3" onClick={toggleMenu}>
                    <div className="w-10 h-10 bg-[#007B8A] rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-lg">FN</span>
                    </div>
                    <div>
                      <h1 className="text-lg font-bold text-gray-900 leading-tight">
                        Florence Nightingale
                      </h1>
                      <p className="text-xs text-[#007B8A] font-medium">Home Care Agency</p>
                    </div>
                  </Link>
                  <button
                    onClick={toggleMenu}
                    className="p-2 rounded-md hover:bg-[#007B8A] hover:text-white transition-colors duration-200"
                  >
                    <X size={24} className="currentColor" />
                  </button>
                </div>
                
                <nav className="space-y-4">
                  {navigationItems.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={toggleMenu}
                      className={`block text-base sm:text-lg font-medium transition-colors duration-200 hover:text-[#007B8A] ${
                        pathname === item.href ? 'text-[#007B8A]' : 'text-gray-700'
                      }`}
                    >
                      {item.name}
                    </Link>
                  ))}
                </nav>
                
                <div className="mt-8 pt-6 border-t border-gray-200">
                  <Link
                    href="/contact"
                    onClick={toggleMenu}
                    className="block w-full bg-[#4CAF50] text-white text-center px-6 py-2 rounded-lg font-medium hover:bg-[#3e8e41] transition-colors duration-200"
                  >
                    Get Free Consultation
                  </Link>
                </div>
                
                <div className="mt-6 space-y-3 text-xs sm:text-sm text-gray-600">
                  <div className="flex items-center space-x-2">
                    <Phone size={14} />
                    <span>+91 98765 43210</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Mail size={14} />
                    <span>info@florencenightingalecare.com</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MapPin size={14} />
                    <span>Indore, Madhya Pradesh</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;