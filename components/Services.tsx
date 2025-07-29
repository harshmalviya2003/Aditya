import React from 'react';
import Link from 'next/link';
import { services } from '@/data/services';
import { Heart, Users, Stethoscope, Brain, Clock, Activity, ArrowRight, Star, Phone, Check } from 'lucide-react';
import Image from 'next/image';

const Services = () => {
  const featuredServices = services.slice(0, 6);

  return (
    <section className="py-16 sm:py-20 bg-[#A2E3E2]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center bg-[#007B8A]/10 px-4 sm:px-6 py-2 sm:py-3 rounded-full mb-4 sm:mb-6 shadow-md">
            <div className="flex items-center mr-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400 fill-yellow-400" />
              ))}
            </div>
            <span className="text-sm sm:text-lg font-bold text-[#007B8A]">Most Trusted Home Care Services</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#007B8A] mb-4 sm:mb-6">
            <span className="text-black">Healthcare Services</span> At Your Home
          </h2>
          <p className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Our expert team provides complete care solutions for your family
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {featuredServices.map((service) => (
            <div 
              key={service.id}
              className="relative bg-white rounded-xl shadow-lg sm:shadow-xl overflow-hidden border border-[#007B8A]/20 hover:border-[#007B8A]/40 transition-all duration-300 transform hover:scale-[1.02] group"
            >
              {/* Card Header with Image */}
              <div className="bg-[#007B8A] p-4 sm:p-6 flex items-center">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white rounded-xl flex items-center justify-center mr-3 sm:mr-4 shadow-md overflow-hidden">
                  <Image 
                    src={service.image} // Use service.image directly
                    alt={service.title}
                    width={64}
                    height={64}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-white">{service.title}</h3>
                  <p className="text-white/80 text-sm sm:text-base">{service.price}</p>
                </div>
              </div>
              
              {/* Card Body */}
              <div className="p-4 sm:p-6">
                <p className="text-gray-700 mb-3 sm:mb-4 text-sm sm:text-base">{service.description}</p>
                
                {/* Features with Checkmarks */}
                <div className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
                  {service.features.slice(0, 3).map((feature, index) => (
                    <div key={index} className="flex items-start">
                      <Check className="w-4 h-4 sm:w-5 sm:h-5 text-[#4CAF50] mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-gray-700 text-sm sm:text-base">{feature}</span>
                    </div>
                  ))}
                </div>
                
                {/* Emergency Call Button for Medical Services */}
                {(service.id === 'icu-care' || service.id === 'post-op-care') && (
                  <div className="mb-3 sm:mb-4 bg-red-50 p-2 sm:p-3 rounded-lg flex items-center">
                    <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-red-500 mr-2" />
                    <span className="text-xs sm:text-sm text-red-600 font-medium">24/7 Emergency Service Available</span>
                  </div>
                )}
              </div>
              
              {/* Card Footer - Dual Buttons */}
              <div className="px-4 sm:px-6 pb-4 sm:pb-6 grid grid-cols-2 gap-3">
                <Link
                  href={`tel:+919876543210`}
                  className="inline-flex items-center justify-center bg-white border border-[#007B8A] text-[#007B8A] py-2 sm:py-3 rounded-lg font-semibold hover:bg-[#007B8A]/10 transition-all text-sm sm:text-base"
                >
                  <Phone className="w-4 h-4 sm:w-5 sm:h-5 mr-1 sm:mr-2" />
                  Call Now
                </Link>
                <Link
                  href={`/services/${service.id}`}
                  className="inline-flex items-center justify-center bg-[#4CAF50] text-white py-2 sm:py-3 rounded-lg font-semibold hover:bg-[#3e8e41] transition-all text-sm sm:text-base"
                >
                  Book Now
                  <ArrowRight className="ml-1 sm:ml-2 w-4 h-4 sm:w-5 sm:h-5" />
                </Link>
              </div>
              
              {/* Popular Tag */}
              {(service.id === 'newborn-mother-care' || service.id === 'elder-care') && (
                <div className="absolute top-3 right-3 bg-[#FFD700] text-[#8B8000] px-2 py-1 rounded-full text-xs font-bold shadow-sm">
                  POPULAR
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center bg-[#007B8A]/5 rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-[#007B8A]/10">
          <h3 className="text-xl sm:text-2xl font-bold text-[#1E3A8A] mb-3 sm:mb-4">Need Immediate Assistance?</h3>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-4 sm:mb-6">
            <div className="flex items-center bg-white p-3 sm:p-4 rounded-lg shadow-md w-full sm:w-auto">
              <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-[#4CAF50] mr-2 sm:mr-3" />
              <div>
                <div className="text-xs sm:text-sm text-gray-700">24/7 Helpline Number</div>
                <div className="text-xl sm:text-2xl font-bold text-[#007B8A]">+91 98765 43210</div>
              </div>
            </div>
            <div className="text-gray-700 font-medium text-sm sm:text-base">OR</div>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center bg-[#4CAF50] text-white px-6 py-3 sm:px-8 sm:py-4 rounded-lg font-semibold hover:bg-[#3e8e41] transition-all shadow-lg hover:shadow-[#4CAF50]/30 w-full sm:w-auto text-sm sm:text-base"
            >
              Request Call Back
              <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
            </Link>
          </div>
          <p className="text-gray-700 max-w-2xl mx-auto text-sm sm:text-base">
            Our team is available 24/7 for your service. Contact us immediately in case of any emergency.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;