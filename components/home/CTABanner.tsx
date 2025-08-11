'use client';

import React from 'react';
import Link from 'next/link';
import { Phone, ArrowRight, ShieldCheck, Clock, UserCheck } from 'lucide-react';
import Image from 'next/image';

const CTABanner = () => {
  return (
    <section className="relative bg-gradient-to-r from-[#007B8A] to-teal-600 text-white overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[url('/patterns/circuit-board.svg')]"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Content Section */}
          <div className="space-y-8">
            <h2 className="text-3xl sm:text-5xl font-extrabold leading-tight">
              Ready for Immediate, Compassionate Care?
            </h2>
            <p className="text-lg text-teal-100/90 leading-relaxed">
              Our dedicated team is on standby to provide professional, reliable care services right at your doorstep. Contact us for a free, no-obligation consultation to see how we can support your family's needs.
            </p>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0 bg-white/10 p-3 rounded-full">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">24/7 Availability</h3>
                  <p className="text-teal-100/80 text-sm">Always here when you need us.</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0 bg-white/10 p-3 rounded-full">
                  <UserCheck className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Verified Caregivers</h3>
                  <p className="text-teal-100/80 text-sm">Trained and background-checked.</p>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              
              <Link
      href="https://wa.me/+919479365137?text=Hello,%20I%20need%20Home%20care%20Service"
      className="inline-flex items-center justify-center bg-white text-[#007B8A] px-8 py-3.5 rounded-lg font-bold text-base transition-transform hover:scale-105 shadow-lg"
    >
      Request a Callback
      <ArrowRight className="ml-2 w-5 h-5" />
    </Link>
              <a
                href="tel:+919876543210"
                className="inline-flex items-center justify-center bg-transparent border-2 border-white/50 text-white px-8 py-3.5 rounded-lg font-bold text-base transition-colors hover:bg-white/10"
              >
                <Phone className="mr-3 w-5 h-5" />
                Call +91 94793 65137
              </a>
            </div>
          </div>

          {/* Image Section */}
          <div className="relative flex items-center justify-center mt-10 lg:mt-0">
             <div className="absolute w-72 h-72 bg-white/10 rounded-full -top-10 -left-10 filter blur-xl"></div>
             <div className="absolute w-72 h-72 bg-white/10 rounded-full -bottom-10 -right-10 filter blur-xl"></div>
             <div className="relative z-10">
                <Image
                    src="https://images.pexels.com/photos/7579831/pexels-photo-7579831.jpeg?auto=compress&cs=tinysrgb&w=800"
                    alt="Professional caregiver"
                    width={500}
                    height={550}
                    className="rounded-3xl shadow-2xl object-cover w-full h-[450px] md:h-[550px]"
                />
                <div className="absolute -bottom-8 -right-8 bg-gradient-to-tr from-teal-400 to-cyan-300 p-6 rounded-2xl shadow-xl transform rotate-3">
                    <div className="flex items-center space-x-4">
                        <div className="bg-white/20 p-3 rounded-full">
                            <ShieldCheck className="w-8 h-8 text-white" />
                        </div>
                        <div>
                            <div className="font-bold text-xl text-white">100% Secure</div>
                            <div className="text-teal-900">Licensed & Insured Care</div>
                        </div>
                    </div>
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTABanner;
