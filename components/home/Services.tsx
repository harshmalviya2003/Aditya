'use client';

import React from 'react';
import Link from 'next/link';
import { services } from '@/data/services';
import { ArrowRight, Star, Phone, Check } from 'lucide-react';
import Image from 'next/image';

const Services = () => {
  const featuredServices = services.slice(0, 6);

  return (
    <section className="py-20 sm:py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight">
            Comprehensive Care in the <span className="text-[#007B8A]">Comfort of Your Home</span>
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            Our certified and compassionate professionals provide a wide range of medical and support services tailored to your family's needs.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredServices.map((service) => (
            <div 
              key={service.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col group border border-transparent hover:border-[#007B8A]/50"
            >
              <div className="relative">
                <Image 
                  src={service.image}
                  alt={service.title}
                  width={400}
                  height={250}
                  className="object-cover w-full h-48 rounded-t-2xl"
                />
                 {/* Tags */}
                <div className="absolute top-3 right-3 flex flex-col items-end gap-2">
                  {(service.id === 'newborn-mother-care' || service.id === 'elder-care') && (
                    <div className="bg-yellow-400 text-yellow-900 px-3 py-1 rounded-full text-xs font-bold shadow-sm">
                      POPULAR
                    </div>
                  )}
                  {(service.id === 'icu-care' || service.id === 'post-op-care') && (
                     <div className="bg-red-100 text-red-600 px-3 py-1 rounded-full text-xs font-bold shadow-sm">
                       24/7 SERVICE
                     </div>
                  )}
                </div>
              </div>
              
              <div className="p-6 flex-grow flex flex-col">
                <h3 className="text-xl font-bold text-gray-900">{service.title}</h3>
                <p className="mt-3 text-gray-600 text-sm flex-grow">{service.description}</p>
                
                <div className="mt-5 space-y-2">
                  {service.features.slice(0, 2).map((feature, index) => (
                    <div key={index} className="flex items-center">
                      <Check className="w-5 h-5 text-[#4CAF50] mr-2 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card Footer */}
              <div className="px-6 pb-6 mt-auto grid grid-cols-2 gap-3">
                <Link
                  href={`tel:+919479365137`}
                  className="inline-flex items-center justify-center bg-slate-100 border border-slate-200 text-slate-700 py-2.5 rounded-lg font-semibold hover:bg-slate-200 transition-all text-sm"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  Call Now
                </Link>
                <Link
                  href={`/services/${service.id}`}
                  className="inline-flex items-center justify-center bg-[#4CAF50] text-white py-2.5 rounded-lg font-semibold hover:bg-[#3e8e41] transition-all text-sm"
                >
                  View More
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center bg-gradient-to-r from-[#007B8A] to-teal-600 rounded-2xl p-8 sm:p-12">
  <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3">
    Need Home Care Assistance in Indore, Rau, Mhow, Ujjain, or Dewas?
  </h3>
  <p className="text-white/80 max-w-2xl mx-auto mb-8">
    Comfort Health Home’s care coordinators are available 24/7 to provide personalized home care solutions for your loved ones in Indore, Rau, Mhow, Ujjain, and Dewas.
  </p>
  <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
    <Link
      href="tel:+919876543210"
      className="inline-flex items-center justify-center bg-white text-[#007B8A] px-8 py-3 rounded-lg font-semibold transition-transform hover:scale-105 shadow-lg w-full sm:w-auto"
    >
      <Phone className="w-5 h-5 mr-3" />
      +91-9479365137
    </Link>
    <Link
      href="https://wa.me/+919479365137?text=Hello,%20I%20Need%20Home%20Care%20Service"
      className="inline-flex items-center justify-center bg-white/20 text-white px-8 py-3 rounded-lg font-semibold transition-transform hover:scale-105 hover:bg-white/30 w-full sm:w-auto"
    >
      Request a Callback
      <ArrowRight className="ml-2 w-5 h-5" />
    </Link>
  </div>
</div>
      </div>
    </section>
  );
};

export default Services;
