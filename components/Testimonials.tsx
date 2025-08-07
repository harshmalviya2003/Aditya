'use client';

import React, {useState } from 'react';
import { getFeaturedTestimonials } from '@/data/testimonials';
import { Star, Quote, Heart, Users, CheckCircle, User } from 'lucide-react';
import Image from 'next/image';

const Testimonials = () => {
  const testimonials = getFeaturedTestimonials(8);
  const [isPaused, setIsPaused] = useState(false);

  const renderStars = (rating: number) => {
    return [...Array(5)].map((_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${i < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
      />
    ));
  };

  return (
    <section className="py-10 sm:py-20 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900">
            What Our <span className="text-[#007B8A]">Families Say</span>
          </h2>
          <p className="mt-2 text-lg text-gray-600 max-w-2xl mx-auto">
            Real stories from families who have trusted us with their loved ones' care.
          </p>
        </div>
      </div>

      {/* Marquee Container with Fading Edges */}
      <div className="relative">
        <div className="absolute top-0 bottom-0 left-0 w-16 bg-gradient-to-r from-slate-50 to-transparent z-10 pointer-events-none"></div>
        <div className="absolute top-0 bottom-0 right-0 w-16 bg-gradient-to-l from-slate-50 to-transparent z-10 pointer-events-none"></div>

        <div
          className="flex animate-marquee-slow"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          style={{ animationPlayState: isPaused ? 'paused' : 'running' }}
        >
          {/* Render testimonials twice for a seamless loop */}
          {[...testimonials, ...testimonials].map((testimonial, index) => (
            <div key={`${testimonial.id}-${index}`} className="flex-shrink-0 w-80 sm:w-96 mx-4 py-2">
              <div className="bg-white rounded-2xl shadow-lg p-6 h-full flex flex-col border border-gray-100 transform transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl">
                 <Quote className="w-8 h-8 text-[#007B8A] opacity-20 mb-4" />
                <blockquote className="text-gray-700 italic flex-grow">
                  "{testimonial.content}"
                </blockquote>
                <div className="mt-6 flex items-center">
                   
                    <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center mr-4 border-2 border-[#007B8A]/50">
                      <User className="w-6 h-6 text-[#007B8A]" />
                    </div>
                  
                  <div>
                    <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-[#007B8A] font-medium">{testimonial.relationship}</p>
                    <div className="flex items-center mt-1">
                      {renderStars(testimonial.rating)}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Trust Indicators Section */}
      {/* <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
          <div className="bg-white/60 p-6 rounded-xl border border-gray-200/80">
            <Heart className="w-10 h-10 text-[#007B8A] mx-auto mb-3" />
            <div className="text-3xl font-bold text-gray-900">1,200+</div>
            <p className="text-gray-600">Families Served</p>
          </div>
          <div className="bg-white/60 p-6 rounded-xl border border-gray-200/80">
            <CheckCircle className="w-10 h-10 text-[#007B8A] mx-auto mb-3" />
            <div className="text-3xl font-bold text-gray-900">98%</div>
            <p className="text-gray-600">Satisfaction Rate</p>
          </div>
          <div className="bg-white/60 p-6 rounded-xl border border-gray-200/80">
            <Users className="w-10 h-10 text-[#007B8A] mx-auto mb-3" />
            <div className="text-3xl font-bold text-gray-900">50+</div>
            <p className="text-gray-600">Certified Caregivers</p>
          </div>
        </div>
      </div> */}
      
      {/* CSS for custom marquee animation */}
      <style jsx>{`
        @keyframes marquee-slow {
          from { transform: translateX(0%); }
          to { transform: translateX(-50%); }
        }
        .animate-marquee-slow {
          display: flex;
          width: max-content;
          animation: marquee-slow 40s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default Testimonials;