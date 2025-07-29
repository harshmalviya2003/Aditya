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

  const testimonials = [
    {
      quote: "They saved us during an emergency!",
      text: "The nurse arrived within 2 hours when my father needed urgent care. Professional and compassionate service.",
      author: "Rajesh K., Mumbai"
    },
    {
      quote: "Absolutely compassionate care.",
      text: "Finding reliable help was a struggle until we found them. The caregiver is like family to us now.",
      author: "Priya S., Delhi"
    },
    {
      quote: "A service you can truly trust.",
      text: "The team is incredibly responsive and professional. They made a difficult time much more manageable.",
      author: "Amit V., Bangalore"
    },
    {
      quote: "Five-star service all the way!",
      text: "From the first call to the daily care, everything has been exceptional. Highly recommended.",
      author: "Sunita M., Chennai"
    },
    {
      quote: "Professional and very skilled.",
      text: "The nurse was highly skilled and handled all medical needs with expertise. We felt completely at ease.",
      author: "Vikram R., Pune"
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
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center relative z-10 py-16 md:py-24">
        
        {/* Content */}
        <div className="space-y-6 text-center lg:text-left">
          <div className="inline-flex items-center bg-white shadow-md px-4 py-2 rounded-full">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
              ))}
            </div>
            <span className="ml-3 text-base font-bold text-[#007B8A]">Rated 5.0 by 1000+ Families</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight">
            Expert <span className="text-[#007B8A]">In-Home Medical</span> Care For Your Loved Ones
          </h1>
          
          <p className="text-lg text-gray-600 leading-relaxed max-w-xl mx-auto lg:mx-0">
            Certified caregivers providing personalized medical care at home. 
            <span className="font-semibold text-[#007B8A]"> Same-day service available.</span> 
            Let us help your family today.
          </p>

          <div className="bg-white/80 backdrop-blur-sm p-4 rounded-xl shadow-lg border border-gray-100 max-w-md mx-auto lg:mx-0">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center">
                <div className="bg-[#4CAF50]/10 p-3 rounded-full mr-4">
                  <Phone className="w-6 h-6 text-[#4CAF50]" />
                </div>
                <div>
                  <div className="text-sm text-gray-500">Call Now For Immediate Help</div>
                  <div className="text-2xl font-bold text-[#007B8A]">+91 98765 43210</div>
                </div>
              </div>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center bg-[#4CAF50] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#3e8e41] transition-all duration-200 whitespace-nowrap text-base w-full sm:w-auto"
              >
                Enquire Now
              </Link>
            </div>
          </div>
        </div>

        {/* Image Carousel */}
        <div className="relative mt-8 lg:mt-0 h-[400px] sm:h-[500px] md:h-[600px]">
          <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl h-full">
            {/* Images with Fade Transition */}
            {images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Care service ${index + 1}`}
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
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                        ))}
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
                aria-label={`Go to image ${index + 1}`}
              />
            ))}
          </div>
        </div>
        
      </div>
    </section>
  );
}

export default Hero;
