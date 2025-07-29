import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Heart, Users, Award, Shield, Clock, CheckCircle } from 'lucide-react';

export default function About() {
  return (
    <div>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-white via-[#A2E3E2]/30 to-[#A2E3E2]/50">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="space-y-6">
                  <div className="inline-flex items-center bg-[#007B8A]/10 px-4 py-2 rounded-full">
                    <Heart className="w-4 h-4 text-[#007B8A] mr-2" />
                    <span className="text-sm font-medium text-[#007B8A]">About Our Agency</span>
                  </div>
                  
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                    Caring for
                    <span className="text-[#007B8A] block">Your Family</span>
                    Since 2015
                  </h1>
                  
                  <p className="text-xl text-gray-600 leading-relaxed">
                    The Florence Nightingale Home Care Agency was founded with a simple mission: 
                    to provide compassionate, professional care that allows individuals to maintain 
                    their dignity and independence in the comfort of their own homes.
                  </p>
                </div>
              </div>
              
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80"
                  alt="Compassionate caregiving"
                  className="rounded-2xl shadow-2xl w-full h-[500px] object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                  Our <span className="text-[#007B8A]">Mission</span>
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  To provide exceptional home care services that enhance the quality of life for 
                  individuals and families in Indore. We are committed to delivering personalized, 
                  compassionate care that respects each person's unique needs, preferences, and dignity.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-[#4CAF50] flex-shrink-0 mt-1" />
                    <p className="text-gray-600">Personalized care plans tailored to individual needs</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-[#4CAF50] flex-shrink-0 mt-1" />
                    <p className="text-gray-600">Highly trained and compassionate caregivers</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-[#4CAF50] flex-shrink-0 mt-1" />
                    <p className="text-gray-600">24/7 support and emergency response</p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                  Our <span className="text-[#007B8A]">Vision</span>
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  To be the most trusted home care provider in Madhya Pradesh, setting the standard 
                  for excellence in care delivery while empowering individuals to age gracefully 
                  and independently in their own homes.
                </p>
                <div className="bg-[#007B8A]/5 p-6 rounded-xl border border-[#007B8A]/10">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Our Core Values</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Compassion and empathy in every interaction</li>
                    <li>• Respect for dignity and individual choices</li>
                    <li>• Excellence in professional care delivery</li>
                    <li>• Integrity and transparency in all services</li>
                    <li>• Innovation in care solutions and techniques</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-[#A2E3E2]/10">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Our Impact in
                <span className="text-[#007B8A]"> Numbers</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                These numbers reflect our commitment to providing exceptional care and building lasting relationships with families across Indore.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
                <div className="w-16 h-16 bg-[#007B8A]/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-[#007B8A]" />
                </div>
                <div className="text-4xl font-bold text-gray-900 mb-2">500+</div>
                <div className="text-gray-600 font-medium">Families Served</div>
              </div>
              
              <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
                <div className="w-16 h-16 bg-[#007B8A]/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-[#007B8A]" />
                </div>
                <div className="text-4xl font-bold text-gray-900 mb-2">50+</div>
                <div className="text-gray-600 font-medium">Trained Caregivers</div>
              </div>
              
              <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
                <div className="w-16 h-16 bg-[#007B8A]/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-[#007B8A]" />
                </div>
                <div className="text-4xl font-bold text-gray-900 mb-2">8+</div>
                <div className="text-gray-600 font-medium">Years of Service</div>
              </div>
              
              <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
                <div className="w-16 h-16 bg-[#007B8A]/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-[#007B8A]" />
                </div>
                <div className="text-4xl font-bold text-gray-900 mb-2">4.9/5</div>
                <div className="text-gray-600 font-medium">Client Satisfaction</div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Why Choose
                <span className="text-[#007B8A]"> Florence Nightingale?</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We stand apart in the home care industry through our unwavering commitment to excellence, 
                compassion, and professional service delivery.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-white to-[#A2E3E2]/20 p-8 rounded-2xl shadow-lg border border-gray-100">
                <div className="w-14 h-14 bg-[#007B8A]/10 rounded-2xl flex items-center justify-center mb-6">
                  <Shield className="w-7 h-7 text-[#007B8A]" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Licensed & Insured</h3>
                <p className="text-gray-600 leading-relaxed">
                  All our caregivers are fully licensed, insured, and undergo comprehensive background checks 
                  for your peace of mind and security.
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-white to-[#A2E3E2]/20 p-8 rounded-2xl shadow-lg border border-gray-100">
                <div className="w-14 h-14 bg-[#007B8A]/10 rounded-2xl flex items-center justify-center mb-6">
                  <Users className="w-7 h-7 text-[#007B8A]" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Personalized Care</h3>
                <p className="text-gray-600 leading-relaxed">
                  Each care plan is uniquely designed to meet individual needs, preferences, and health conditions 
                  for optimal outcomes.
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-white to-[#A2E3E2]/20 p-8 rounded-2xl shadow-lg border border-gray-100">
                <div className="w-14 h-14 bg-[#007B8A]/10 rounded-2xl flex items-center justify-center mb-6">
                  <Clock className="w-7 h-7 text-[#007B8A]" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">24/7 Availability</h3>
                <p className="text-gray-600 leading-relaxed">
                  Emergency response and round-the-clock care availability ensure you're never alone 
                  when you need support most.
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-white to-[#A2E3E2]/20 p-8 rounded-2xl shadow-lg border border-gray-100">
                <div className="w-14 h-14 bg-[#007B8A]/10 rounded-2xl flex items-center justify-center mb-6">
                  <Heart className="w-7 h-7 text-[#007B8A]" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Compassionate Approach</h3>
                <p className="text-gray-600 leading-relaxed">
                  Our caregivers are selected not just for their skills, but for their genuine compassion 
                  and dedication to making a difference.
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-white to-[#A2E3E2]/20 p-8 rounded-2xl shadow-lg border border-gray-100">
                <div className="w-14 h-14 bg-[#007B8A]/10 rounded-2xl flex items-center justify-center mb-6">
                  <Award className="w-7 h-7 text-[#007B8A]" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Proven Excellence</h3>
                <p className="text-gray-600 leading-relaxed">
                  With years of experience and hundreds of satisfied families, our track record speaks 
                  to our commitment to excellence.
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-white to-[#A2E3E2]/20 p-8 rounded-2xl shadow-lg border border-gray-100">
                <div className="w-14 h-14 bg-[#007B8A]/10 rounded-2xl flex items-center justify-center mb-6">
                  <Users className="w-7 h-7 text-[#007B8A]" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Family-Centered Care</h3>
                <p className="text-gray-600 leading-relaxed">
                  We believe in involving families in the care process, ensuring open communication 
                  and collaborative decision-making.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}