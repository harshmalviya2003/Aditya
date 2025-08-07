'use client';

import React from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { services } from '@/data/services';
import { Phone, Check, ArrowRight, Star, Heart, Shield, Users } from 'lucide-react';
import Image from 'next/image';

export default function Services() {
  return (
    <div className="bg-slate-50">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="py-10 sm:py-20 bg-gradient-to-b from-teal-50 to-white" aria-labelledby="hero-heading">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 id="hero-heading" className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 tracking-tight">
              Our <span className="text-[#007B8A]">Home Care</span> Services
            </h1>
            <p className="mt-6 max-w-3xl mx-auto text-lg text-gray-600">
              From personal care to specialized medical support, we deliver a wide range of tailored home care services with compassion and professionalism.
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-1 sm:py-10" aria-labelledby="services-heading">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 id="services-heading" className="sr-only">Our Services</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service) => (
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
                    {(service.id === 'newborn-mother-care' || service.id === 'elder-care') && (
                      <div className="absolute top-3 right-3 bg-yellow-400 text-yellow-900 px-3 py-1 rounded-full text-xs font-bold shadow-sm">
                        POPULAR
                      </div>
                    )}
                  </div>
                  
                  <div className="p-6 flex-grow flex flex-col">
                    <h3 className="text-xl font-bold text-gray-900">{service.title}</h3>
                    <p className="mt-3 text-gray-600 text-sm flex-grow">{service.description}</p>
                  </div>

                  <div className="px-6 pb-6 mt-auto grid grid-cols-2 gap-3">
  {/* Call Now Button */}
  <Link
    href={`tel:+919479365137`}
    className="inline-flex items-center justify-center bg-slate-100 border border-slate-200 text-slate-700 py-2.5 rounded-lg font-semibold hover:bg-slate-200 transition-all text-sm"
  >
    <Phone className="w-4 h-4 mr-2" />
    Call Now
  </Link>

  {/* Learn More / Book Now Button */}
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
          </div>
        </section>
        
        {/* Why Choose Us Section */}
        <section className="py-20 sm:py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Why Trust Our Care?</h2>
                    <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">We provide more than just services; we deliver peace of mind.</p>
                </div>
                <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
                    <div className="p-6">
                        <Shield className="w-12 h-12 text-[#007B8A] mx-auto mb-4" />
                        <h3 className="text-lg font-semibold text-gray-900">Certified & Screened</h3>
                        <p className="mt-2 text-gray-600">All caregivers are licensed, insured, and thoroughly background-checked.</p>
                    </div>
                    <div className="p-6">
                        <Heart className="w-12 h-12 text-[#007B8A] mx-auto mb-4" />
                        <h3 className="text-lg font-semibold text-gray-900">Compassionate Staff</h3>
                        <p className="mt-2 text-gray-600">Our team is chosen for their empathy and dedication to dignified care.</p>
                    </div>
                    <div className="p-6">
                        <Users className="w-12 h-12 text-[#007B8A] mx-auto mb-4" />
                        <h3 className="text-lg font-semibold text-gray-900">Personalized Plans</h3>
                        <p className="mt-2 text-gray-600">We create custom care plans that are tailored to your unique needs.</p>
                    </div>
                </div>
            </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
