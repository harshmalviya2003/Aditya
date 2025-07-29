'use client';

import React, { useState, useEffect } from 'react';
import { getFeaturedTestimonials } from '@/data/testimonials';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = getFeaturedTestimonials(6);
  const [isPaused, setIsPaused] = useState(false);

  const renderStars = (rating: number) => {
    return [...Array(5)].map((_, i) => (
      <Star
        key={i}
        className={`w-3 h-3 ${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
      />
    ));
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short' });
  };

  return (
    <section className="py-16 px-2 bg-[#A2E3E2]/10">
      <div className="max-w-full mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center bg-[#007B8A]/10 px-3 py-1 rounded-full mb-4">
            <span className="text-sm font-medium text-[#007B8A]">Client Testimonials</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Families Trust <span className="text-[#007B8A]">Our Care</span>
          </h2>
        </div>

        {/* Marquee Carousel */}
        <div className="overflow-hidden ">
          <div
            className="flex animate-marquee"
            style={{
              animation: 'marquee 30s linear infinite',
              animationPlayState: isPaused ? 'paused' : 'running',
            }}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {/* Duplicate testimonials for seamless loop */}
            {[...testimonials, ...testimonials].map((testimonial, index) => (
              <div
                key={`${testimonial.id}-${index}`}
                className="flex-shrink-0 w-[280px] mx-2 sm:mx-3 mb-5"
              >
                <div className="bg-white p-4 border border-gray-100 shadow-md rounded-lg h-[220px] flex flex-col justify-between">
                  <div>
                    <div className="flex justify-center mb-2">
                      <Quote className="w-6 h-6 text-[#007B8A] opacity-50" />
                    </div>
                    <div className="flex justify-center space-x-1 mb-2">
                      {renderStars(testimonial.rating)}
                    </div>
                    <blockquote className="text-sm text-gray-700 line-clamp-3">
                      "{testimonial.content}"
                    </blockquote>
                  </div>
                  <div className="border-t border-[#007B8A]/20 pt-2">
                    <h4 className="text-sm font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-xs text-[#007B8A]">{testimonial.relationship}</p>
                    <p className="text-xs text-gray-500">
                      {testimonial.location} • {formatDate(testimonial.date)}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Trust Indicators */}
       
      </div>

      {/* CSS for Marquee Animation */}
      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          display: flex;
          width: max-content;
        }
        @media (max-width: 640px) {
          .animate-marquee {
            animation-duration: 20s;
          }
        }
      `}</style>
    </section>
  );
};

export default Testimonials;