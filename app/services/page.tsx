import React from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { services } from '@/data/services';
import { Phone, Check, ArrowRight, Star } from 'lucide-react';

export default function Services() {
  return (
    <div className="min-h-screen flex flex-col bg-[#F5FAFA]">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-20 sm:py-24 bg-gradient-to-br from-[#F5FAFA] to-[#A2E3E2]/30 relative" aria-labelledby="hero-heading">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center bg-[#007B8A]/10 px-4 sm:px-6 py-2 sm:py-3 rounded-full mb-6 sm:mb-8 shadow-lg transition-transform hover:scale-105">
              <div className="flex items-center mr-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400 fill-yellow-400" aria-hidden="true" />
                ))}
              </div>
              <span className="text-sm sm:text-lg font-bold text-[#007B8A]">Most Trusted Home Care Services</span>
            </div>
            <h1 id="hero-heading" className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1E3A8A] mb-4 sm:mb-6">
              <span className="text-[#007B8A]">Healthcare Services</span> At Your Home
            </h1>
            <p className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              From personal care to specialized medical support, we deliver tailored home care services with compassion and professionalism.
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 sm:py-20 bg-[#F5FAFA]" aria-labelledby="services-heading">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 id="services-heading" className="sr-only">Our Services</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {services.map((service) => (
                <div
                  key={service.id}
                  className="relative bg-white rounded-xl shadow-lg hover:shadow-2xl overflow-hidden border border-[#007B8A]/20 hover:border-[#007B8A]/40 transition-all duration-300 transform hover:scale-[1.02] group"
                >
                  {/* Card Header */}
                  <div className="bg-[#007B8A] p-4 sm:p-6 flex items-center">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-12 h-12 sm:w-16 sm:h-16 rounded-xl object-cover mr-3 sm:mr-4 shadow-md"
                    />
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold text-white">{service.title}</h3>
                      {service.price && (
                        <p className="text-white/80 text-sm sm:text-base">{service.price}</p>
                      )}
                    </div>
                  </div>
                  
                  {/* Card Body */}
                  <div className="p-4 sm:p-6">
                    <p className="text-gray-700 mb-4 sm:mb-6 text-sm sm:text-base">{service.description}</p>
                    <div className="space-y-3 sm:space-y-4 mb-4 sm:mb-6">
                      {service.features.slice(0, 3).map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-start">
                          <Check className="w-4 h-4 sm:w-5 sm:h-5 text-[#4CAF50] mt-0.5 mr-2 flex-shrink-0" aria-hidden="true" />
                          <span className="text-gray-700 text-sm sm:text-base">{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    {/* Emergency Call Section */}
                    {(service.id === 'icu-care' || service.id === 'post-op-care') && (
                      <div className="mb-4 sm:mb-6 bg-red-50 p-3 sm:p-4 rounded-lg flex items-center">
                        <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-red-500 mr-2" aria-hidden="true" />
                        <span className="text-xs sm:text-sm text-red-600 font-medium">24/7 Emergency Service Available</span>
                      </div>
                    )}
                  </div>
                  
                  {/* Card Footer - Dual Buttons */}
                  <div className="px-4 sm:px-6 pb-4 sm:pb-6 grid grid-cols-2 gap-3">
                    <a
                      href="tel:+919876543210"
                      className="inline-flex items-center justify-center bg-white border border-[#007B8A] text-[#007B8A] py-2 sm:py-3 rounded-lg font-semibold hover:bg-[#007B8A]/10 transition-all text-sm sm:text-base"
                      aria-label={`Call now for ${service.title}`}
                    >
                      <Phone className="w-4 h-4 sm:w-5 sm:h-5 mr-1 sm:mr-2" aria-hidden="true" />
                      Call Now
                    </a>
                    <Link
                      href={`/services/${service.id}`}
                      className="inline-flex items-center justify-center bg-[#4CAF50] text-white py-2 sm:py-3 rounded-lg font-semibold hover:bg-[#3e8e41] transition-all text-sm sm:text-base"
                      aria-label={`Book now for ${service.title}`}
                    >
                      Book Now
                      <ArrowRight className="ml-1 sm:ml-2 w-4 h-4 sm:w-5 sm:h-5" aria-hidden="true" />
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
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 sm:py-24 bg-gradient-to-br from-[#007B8A]/10 to-[#A2E3E2]/10 border border-[#007B8A]/10 rounded-xl sm:rounded-2xl" aria-labelledby="cta-heading">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
            <h2 id="cta-heading" className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1E3A8A] mb-4 sm:mb-6">
              Need Immediate Assistance?
            </h2>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-6 sm:mb-8">
              <div className="flex items-center bg-white p-3 sm:p-4 rounded-lg shadow-lg w-full sm:w-auto transition-transform hover:scale-105">
                <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-[#4CAF50] mr-2 sm:mr-3" aria-hidden="true" />
                <div>
                  <div className="text-xs sm:text-sm text-gray-700">24/7 Helpline Number</div>
                  <div className="text-xl sm:text-2xl font-bold text-[#007B8A]">+91 98765 43210</div>
                </div>
              </div>
              <div className="text-gray-700 font-medium text-sm sm:text-base">OR</div>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center bg-[#4CAF50] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:bg-[#3e8e41] transition-all shadow-lg hover:shadow-[#4CAF50]/30 w-full sm:w-auto text-sm sm:text-base"
                aria-label="Request a call back"
              >
                Request Call Back
                <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" aria-hidden="true" />
              </Link>
            </div>
            <p className="text-gray-700 max-w-2xl mx-auto text-sm sm:text-base">
              Our team is available 24/7 to provide support. Contact us immediately for any emergency or to discuss your care needs.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}