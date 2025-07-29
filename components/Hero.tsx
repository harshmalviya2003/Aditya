'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Phone, Heart, Star } from 'lucide-react';

const Hero = () => {
  const images = [
    "/services/1.jpg",
    "/services/2.jpg",
    "/services/3.jpg",
    "/services/4.jpg",
    "/services/5.jpg"
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className="relative bg-gradient-to-br from-white via-[#E0F7FA] to-[#B2EBF2] min-h-[80vh] md:min-h-[90vh] flex items-center py-6 md:py-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full grid grid-cols-1 lg:grid-cols-2 gap-5 md:gap-8 items-center relative z-10">
        {/* Content */}
        <div className="space-y-4 md:space-y-6 text-center lg:text-left">
          <div className="space-y-3 md:space-y-4">
            <div className="inline-flex items-center bg-white shadow-md px-4 py-2 md:px-6 md:py-2 rounded-full">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 md:w-5 md:h-5 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <span className="ml-2 md:ml-3 text-sm md:text-lg font-bold text-[#007B8A]">Rated 5.0 by 1000+ Families</span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Expert <span className="text-[#007B8A]">In-Home Medical</span> 
              <br />Care For Your Loved Ones
            </h1>
            
            <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Certified caregivers providing personalized medical care at home. 
              <span className="font-semibold text-[#007B8A]"> Same-day service available.</span> 
              Let us help your family today.
            </p>
          </div>

          {/* Immediate Call CTA */}
          <div className="bg-white p-3 md:p-4 rounded-xl shadow-lg border border-gray-100 max-w-lg mx-auto lg:mx-0">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-3 md:gap-4">
              <div className="flex items-center">
                <div className="bg-[#4CAF50]/10 p-2 md:p-2 rounded-full mr-3 md:mr-4">
                  <Phone className="w-5 h-5 md:w-6 md:h-6 text-[#4CAF50]" />
                </div>
                <div>
                  <div className="text-xs md:text-sm text-gray-500">Call Now For Immediate Help</div>
                  <div className="text-xl md:text-2xl font-bold text-[#007B8A]">+1 (800) 555-1234</div>
                </div>
              </div>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center bg-[#4CAF50] text-white px-4 py-2 md:px-5 md:py-2 rounded-lg font-semibold hover:bg-[#3e8e41] transition-all duration-200 whitespace-nowrap text-sm md:text-base"
              >
                Enquire Now
              </Link>
            </div>
          </div>
        </div>

        {/* Hero Image with Scroll Animation */}
        <div className="relative mt-4 lg:mt-0 h-[350px] sm:h-[400px] md:h-[500px]">
          <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl h-full">
            <div className="relative h-full w-full overflow-hidden">
              {images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Care service ${index + 1}`}
                  className={`absolute top-0 left-0 w-full h-full object-cover transition-transform duration-1000 ease-in-out ${
                    index === currentImageIndex ? 'translate-x-0' : 
                    index < currentImageIndex ? '-translate-x-full' : 'translate-x-full'
                  }`}
                />
              ))}
            </div>
            
            {/* Floating Testimonial */}
            <div className="absolute bottom-3 left-3 right-3 sm:bottom-5 sm:left-5 sm:right-5 bg-white/90 backdrop-blur-sm p-3 sm:p-4 rounded-xl shadow-lg border border-gray-100">
              <div className="flex items-start">
                <div className="bg-[#007B8A] text-white p-2 sm:p-2 rounded-full mr-3 sm:mr-4">
                  <Heart className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div>
                  <div className="text-sm sm:text-base font-semibold text-gray-900">"They saved us during an emergency!"</div>
                  <p className="text-xs sm:text-sm text-gray-600 mt-1">The nurse arrived within 2 hours when my father needed urgent care. Professional and compassionate service.</p>
                  <div className="flex items-center mt-1 sm:mt-2">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3 h-3 sm:w-3 sm:h-3 text-yellow-400 fill-yellow-400" />
                      ))}
                    </div>
                    <span className="ml-1 sm:ml-2 text-xs sm:text-sm font-medium text-gray-900">- Rajesh K., Mumbai</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;  