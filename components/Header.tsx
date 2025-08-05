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

  // Effect to disable body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMenuOpen]);

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
      {/* Top Bar - Hidden on mobile */}
      <div className="bg-[#007B8A] text-white py-2 px-4 sm:px-6 lg:px-8 hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-sm">
          <div className="flex items-center space-x-6">
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
          <div className="text-sm">24/7 Emergency Care Available</div>
        </div>
      </div>

      {/* Main Header */}
      <header className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg' : 'bg-white'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center py-3">
          {/* Logo - Now responsive */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-12 h-12 md:w-16 md:h-16 rounded-full overflow-hidden flex-shrink-0">
              <img src="/logo/loh.png" alt="Logo" className="w-full h-full object-cover bg-[#FFF1DB]" />
            </div>
            <div>
              <h1 className="text-lg md:text-xl font-bold text-gray-900 leading-tight">
                  Comfort Health 
              </h1>
              <p className="text-xs md:text-sm text-[#007B8A] font-medium">Home Care Services</p>
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

          {/* CTA Button & Mobile Menu Toggle */}
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
              className="lg:hidden p-2 rounded-md hover:bg-gray-100 transition-colors duration-200"
              aria-label="Toggle menu"
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
          <div className="lg:hidden fixed inset-0 z-40 bg-black bg-opacity-50" onClick={toggleMenu}>
            <div 
              className="absolute right-0 top-0 h-full w-full max-w-xs bg-white shadow-xl transform transition-transform duration-300 ease-in-out"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-6 flex flex-col h-full">
                {/* Mobile Menu Header - Consistent Logo */}
                <div className="flex justify-between items-center mb-8">
                  <Link href="/" className="flex items-center space-x-2" onClick={toggleMenu}>
                     <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
                       <img src="/logo/loh.png" alt="Logo" className="w-full h-full object-cover" />
                     </div>
                     <div>
                       <h1 className="font-bold text-gray-900 leading-tight">
                         Florence Nightingale
                       </h1>
                       <p className="text-xs text-[#007B8A] font-medium">Home Care Agency</p>
                     </div>
                  </Link>
                  <button
                    onClick={toggleMenu}
                    className="p-2 rounded-md hover:bg-gray-100 transition-colors duration-200"
                  >
                    <X size={24} className="text-gray-700" />
                  </button>
                </div>
                
                {/* Mobile Menu Navigation */}
                <nav className="flex-grow space-y-6">
                  {navigationItems.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={toggleMenu}
                      className={`block text-lg font-medium transition-colors duration-200 hover:text-[#007B8A] ${
                        pathname === item.href ? 'text-[#007B8A]' : 'text-gray-700'
                      }`}
                    >
                      {item.name}
                    </Link>
                  ))}
                </nav>
                
                {/* Mobile Menu Footer */}
                <div className="mt-8 pt-6 border-t border-gray-200">
                  <Link
                    href="/contact"
                    onClick={toggleMenu}
                    className="block w-full bg-[#4CAF50] text-white text-center px-6 py-3 rounded-lg font-medium hover:bg-[#3e8e41] transition-colors duration-200"
                  >
                    Get Free Consultation
                  </Link>
                  <div className="mt-6 space-y-3 text-sm text-gray-600">
                    <div className="flex items-center space-x-2">
                      <Phone size={16} className="text-gray-500" />
                      <span>+91 98765 43210</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Mail size={16} className="text-gray-500" />
                      <span>info@florencenightingalecare.com</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <MapPin size={16} className="text-gray-500" />
                      <span>Indore, Madhya Pradesh</span>
                    </div>
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
