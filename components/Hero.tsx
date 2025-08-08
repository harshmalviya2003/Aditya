'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Phone, Heart, Star } from 'lucide-react';

const Hero = () => {
  const images = [
    "/hero/1.jpg",
    "/hero/2.jpg",
    "/hero/3.jpg",
    "/hero/4.jpg",
  ];

  const testimonials = [
    {
      quote: "Exceptional home care in Indore!",
      text: "Comfort Health Home provided urgent home care in Indore for my father. The nurse arrived within hours, offering professional and compassionate service.",
      author: "Rajesh K., Indore"
    },
    {
      quote: "Compassionate care in Rau.",
      text: "Finding reliable home care in Rau was tough until we found Comfort Health Home. The caregiver feels like family now, providing excellent support.",
      author: "Priya S., Rau"
    },
    {
      quote: "Trusted home care in Ujjain.",
      text: "Comfort Health Home’s team in Ujjain is responsive and professional, making a difficult time much easier with their reliable home care services.",
      author: "Amit V., Ujjain"
    },
    {
      quote: "Five-star home care in Dewas!",
      text: "From the first call to daily care, Comfort Health Home’s services in Dewas have been exceptional. Highly recommend their home care solutions.",
      author: "Sunita M., Dewas"
    },
    {
      quote: "Skilled nursing in Indore.",
      text: "The nurse from Comfort Health Home in Indore was highly skilled, handling all medical needs with expertise. We felt completely at ease.",
      author: "Vikram R., Indore"
    }
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  const currentTestimonial = testimonials[currentImageIndex];

  return (
    <section className="relative bg-gradient-to-br from-cyan-50 via-[#E0F7FA] to-cyan-100 flex items-center overflow-hidden">
      {/* Decorative Shapes */}
      <div className="absolute top-0 left-0 -translate-x-1/3 -translate-y-1/3 w-96 h-96 bg-cyan-200/50 rounded-full filter blur-2xl opacity-50"></div>
      <div className="absolute bottom-0 right-0 translate-x-1/3 translate-y-1/3 w-96 h-96 bg-teal-200/50 rounded-full filter blur-2xl opacity-50"></div>
      
      <div className="max-w-7xl mx-auto px-1 sm:px-6 lg:px-8 w-full grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center relative z-10 py-6 md:py-20">
        
        {/* Content */}
        <div className="space-y-6 text-center lg:text-left">
          <div className="inline-flex items-center bg-white shadow-md px-4 py-2 rounded-full">
            <div className="flex items-center">
              {[...Array(4)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
              ))}
              <Star className="w-3 h-3 text-yellow-400 fill-current" style={{ clipPath: 'inset(0 50% 0 0)' }} />
            </div>
            <span className="ml-2 text-base font-bold text-[#007B8A]">Trusted by 100+ Families</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight">
            Professional <span className="text-[#007B8A]">Home Care Solutions</span> for Your Loved Ones
          </h1>
          
          <p className="text-lg text-gray-600 leading-relaxed max-w-xl mx-auto lg:mx-0">
            Comfort Health Home provides certified caregivers for personalized home care in Indore, Mhow, Rau, Ujjain, and Dewas. 
            <span className="font-semibold text-[#007B8A]"> Same-day home care services available. </span> 
            Support your loved ones with our expert care today.
          </p>

          <div className="bg-white/80 backdrop-blur-sm p-4 rounded-xl shadow-lg border border-gray-100 max-w-md mx-auto lg:mx-0">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center">
                <div className="bg-[#4CAF50]/10 p-3 rounded-full mr-4">
                  <Phone className="w-6 h-6 text-[#4CAF50]" />
                </div>
                <div>
                  <div className="text-xs text-gray-500">Call Now For Home Care Service</div>
                  <div className="text-xl font-bold text-[#007B8A]">+91 94793 65137</div>
                </div>
              </div>
              <a
                href="tel:+919479365137"
                className="inline-flex items-center justify-center bg-[#4CAF50] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#3e8e41] transition-all duration-200 whitespace-nowrap text-base w-full sm:w-auto"
              >
                Enquire Now
              </a>

            </div>
          </div>
        </div>

        {/* Image Carousel */}
        <div className="relative mt-8 lg:mt-0 h-[350px] sm:h-[400px] md:h-[500px]">
          <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl h-full">
            {/* Images with Fade Transition */}
            {images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Home care service in ${['Indore', 'Rau', 'Mhow', 'Ujjain', 'Dewas', 'Indore'][index]}`}
                className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
                  index === currentImageIndex ? 'opacity-100' : 'opacity-0'
                }`}
              />
            ))}
            
            {/* Floating Testimonial */}
            <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm p-4 rounded-xl shadow-lg border border-gray-100">
              <div className="flex items-start">
                <div className="bg-[#007B8A] text-white p-2 rounded-full mr-3 flex-shrink-0">
                  <Heart className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-base font-semibold text-gray-900">"{currentTestimonial.quote}"</p>
                  <p className="text-sm text-gray-600 mt-1 hidden sm:block">{currentTestimonial.text}</p>
                  <div className="flex items-center justify-between mt-2">
                    <span className="text-sm font-medium text-gray-800">- {currentTestimonial.author}</span>
                    <div className="flex items-center">
                      {[...Array(4)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                      ))}
                      <Star className="w-4 h-4 text-yellow-400 fill-current" style={{ clipPath: 'inset(0 50% 0 0)' }} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Pagination Dots */}
          <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 flex space-x-2 z-20">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  index === currentImageIndex ? 'bg-[#007B8A] w-6' : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to home care image ${index + 1}`}
              />
            ))}
          </div>
        </div>
        
      </div>
    </section>
  );
}

export default Hero;