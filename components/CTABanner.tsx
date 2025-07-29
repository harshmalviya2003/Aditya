import React from 'react';
import Link from 'next/link';
import { Phone, ArrowRight, Shield, Clock } from 'lucide-react';

const CTABanner = () => {
  return (
    <section className="py-12 sm:py-20 bg-[#A2E3E2]/10 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          {/* Content */}
          <div className="text-white space-y-6 sm:space-y-8">
            <div className="space-y-4 sm:space-y-6">
              <div className="inline-flex items-center bg-[#007B8A]/10 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full">
                <Shield className="w-4 h-4 text-[#007B8A] mr-2" />
                <span className="text-xs sm:text-sm font-medium text-[#007B8A]">Emergency Care Available</span>
              </div>
              
              <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold leading-tight text-black">
                Need Care
                <span className="block text-[#007B8A]">Right Away?</span>
              </h2>
              
              <p className="text-base sm:text-xl text-black leading-relaxed">
                Our experienced team is ready to provide immediate, professional care services. 
                Get started with a free consultation today and discover how we can help your family.
              </p>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              <div className="flex items-center space-x-3 ">
                <div className="w-6 sm:w-8 h-6 sm:h-8 bg-white/20 rounded-full flex items-center justify-center">
                  <Clock className="w-3 sm:w-4 h-3 sm:h-4 text-[#007B8A]" />
                </div>
                <span className="text-[#007B8A] text-sm sm:text-base">24/7 Emergency Response</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-6 sm:w-8 h-6 sm:h-8 bg-white/20 rounded-full flex items-center justify-center">
                  <Shield className="w-3 sm:w-4 h-3 sm:h-4 text-[#007B8A]" />
                </div>
                <span className="text-[#007B8A] text-sm sm:text-base">Licensed & Insured</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center bg-[#4CAF50] text-white px-4 sm:px-8 py-2 sm:py-4 rounded-lg font-semibold hover:bg-[#3e8e41] transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-[#4CAF50]/30 text-xs sm:text-base"
              >
                Get Free Consultation
                <ArrowRight className="ml-1 sm:ml-2 w-4 sm:w-5 h-4 sm:h-5" />
              </Link>
              <a
                href="tel:+919876543210"
                className="inline-flex items-center justify-center bg-white border border-[#007B8A] text-[#007B8A] px-4 sm:px-8 py-2 sm:py-4 rounded-lg font-semibold hover:bg-[#007B8A]/10 transition-all duration-200 text-xs sm:text-base"
              >
                <Phone className="mr-1 sm:mr-2 w-4 sm:w-5 h-4 sm:h-5" />
                Call Now: +91 98765 43210
              </a>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative z-10">
              <img
                src="https://images.pexels.com/photos/7579831/pexels-photo-7579831.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Professional caregiver providing medical care"
                className="rounded-2xl shadow-2xl w-full h-[300px] sm:h-[400px] md:h-[500px] object-cover"
              />
              
              {/* Floating Card */}
              <div className="absolute -bottom-4 sm:-bottom-6 -left-4 sm:-left-6 bg-white p-4 sm:p-6 rounded-xl shadow-xl border border-[#007B8A]/20">
                <div className="flex items-center space-x-3 sm:space-x-4">
                  <div className="w-8 sm:w-12 h-8 sm:h-12 bg-[#4CAF50]/10 rounded-full flex items-center justify-center">
                    <Phone className="w-4 sm:w-6 h-4 sm:h-6 text-[#4CAF50]" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 text-sm sm:text-base">Quick Response</div>
                    <div className="text-xs sm:text-sm text-gray-600">Within 2 Hours</div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Background Decorative Elements */}
            <div className="absolute -top-4 sm:-top-8 -right-4 sm:-right-8 w-24 sm:w-32 h-24 sm:h-32 bg-white/10 rounded-full -z-10"></div>
            <div className="absolute -bottom-4 sm:-bottom-8 -left-4 sm:-left-8 w-20 sm:w-24 h-20 sm:h-24 bg-white/20 rounded-full -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTABanner;