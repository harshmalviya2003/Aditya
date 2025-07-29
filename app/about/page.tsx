import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Heart, Users, Award, Shield, Clock, CheckCircle, Star } from 'lucide-react';

export default function About() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-24 bg-gradient-to-br from-white via-[#A2E3E2]/20 to-[#A2E3E2]/40" aria-labelledby="hero-heading">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="space-y-6">
                  <div className="inline-flex items-center bg-[#007B8A]/10 px-4 py-2 rounded-full transition-transform hover:scale-105">
                    <Heart className="w-4 h-4 text-[#007B8A] mr-2" aria-hidden="true" />
                    <span className="text-sm font-medium text-[#007B8A]">About Our Agency</span>
                  </div>
                  
                  <h1 id="hero-heading" className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                    Caring for
                    <span className="text-[#007B8A] block">Your Family</span>
                    Since 2015
                  </h1>
                  
                  <p className="text-xl text-gray-600 leading-relaxed">
                    At Florence Nightingale Home Care Agency, our mission is to deliver compassionate, professional care, enabling individuals to maintain their dignity and independence in the comfort of their homes.
                  </p>
                </div>
                <a
                  href="/contact"
                  className="inline-block bg-[#007B8A] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#005F6B] transition-colors"
                  aria-label="Contact us to learn more about our services"
                >
                  Get in Touch
                </a>
              </div>
              
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&auto=format&fit=crop&w=880&q=80"
                  alt="Compassionate caregiver assisting a senior"
                  className="rounded-2xl shadow-2xl w-full h-[500px] object-cover transition-transform hover:scale-105"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-24 bg-white" aria-labelledby="mission-vision-heading">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 id="mission-vision-heading" className="text-4xl md:text-5xl font-bold text-gray-900 text-center mb-12">
              Our <span className="text-[#007B8A]">Purpose</span>
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              <div className="space-y-6">
                <h3 className="text-3xl font-bold text-gray-900">Our Mission</h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  To deliver exceptional home care services that enhance the quality of life for individuals and families in Indore, with personalized, compassionate care that respects each person's unique needs and dignity.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-[#4CAF50] flex-shrink-0 mt-1" aria-hidden="true" />
                    <p className="text-gray-600">Tailored care plans for individual needs</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-[#4CAF50] flex-shrink-0 mt-1" aria-hidden="true" />
                    <p className="text-gray-600">Highly trained, compassionate caregivers</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-[#4CAF50] flex-shrink-0 mt-1" aria-hidden="true" />
                    <p className="text-gray-600">24/7 support and emergency response</p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-6">
                <h3 className="text-3xl font-bold text-gray-900">Our Vision</h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  To be the leading home care provider in Madhya Pradesh, setting the standard for excellence while empowering individuals to age gracefully and independently at home.
                </p>
                <div className="bg-[#007B8A]/5 p-6 rounded-xl border border-[#007B8A]/10">
                  <h4 className="text-xl font-semibold text-gray-900 mb-3">Our Core Values</h4>
                  <ul className="space-y-2 text-gray-600 list-disc pl-5">
                    <li>Compassion and empathy in every interaction</li>
                    <li>Respect for dignity and individual choices</li>
                    <li>Excellence in professional care delivery</li>
                    <li>Integrity and transparency in all services</li>
                    <li>Innovation in care solutions and techniques</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-24 bg-[#A2E3E2]/10" aria-labelledby="team-heading">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 id="team-heading" className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Meet Our <span className="text-[#007B8A]">Care Team</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our dedicated team of professionals is committed to providing exceptional care with compassion and expertise.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-2xl shadow-lg text-center transition-transform hover:scale-105">
                <img
                  src="https://images.unsplash.com/photo-1535713875002-d1d0cf3356de?auto=format&fit=crop&w=400&q=80"
                  alt="Dr. Anjali Sharma"
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-bold text-gray-900">Dr. Anjali Sharma</h3>
                <p className="text-gray-600">Medical Director</p>
                <p className="text-gray-500 text-sm mt-2">Over 15 years of experience in geriatric care, ensuring medical excellence in all our services.</p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-lg text-center transition-transform hover:scale-105">
                <img
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&q=80"
                  alt="Priya Malhotra"
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-bold text-gray-900">Priya Malhotra</h3>
                <p className="text-gray-600">Head Caregiver</p>
                <p className="text-gray-500 text-sm mt-2">Leads our caregiving team with compassion and a focus on personalized care plans.</p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-lg text-center transition-transform hover:scale-105">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80"
                  alt="Rahul Verma"
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-bold text-gray-900">Rahul Verma</h3>
                <p className="text-gray-600">Care Coordinator</p>
                <p className="text-gray-500 text-sm mt-2">Ensures seamless coordination between families, caregivers, and medical professionals.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-24 bg-[#A2E3E2]/10" aria-labelledby="stats-heading">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 id="stats-heading" className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Our Impact in
                <span className="text-[#007B8A]"> Numbers</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                These figures reflect our dedication to exceptional care and lasting relationships with families across Indore.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-white p-8 rounded-2xl shadow-lg text-center transition-transform hover:scale-105">
                <div className="w-16 h-16 bg-[#007B8A]/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-[#007B8A]" aria-hidden="true" />
                </div>
                <div className="text-4xl font-bold text-gray-900 mb-2">500+</div>
                <div className="text-gray-600 font-medium">Families Served</div>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg text-center transition-transform hover:scale-105">
                <div className="w-16 h-16 bg-[#007B8A]/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-[#007B8A]" aria-hidden="true" />
                </div>
                <div className="text-4xl font-bold text-gray-900 mb-2">50+</div>
                <div className="text-gray-600 font-medium">Trained Caregivers</div>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg text-center transition-transform hover:scale-105">
                <div className="w-16 h-16 bg-[#007B8A]/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-[#007B8A]" aria-hidden="true" />
                </div>
                <div className="text-4xl font-bold text-gray-900 mb-2">8+</div>
                <div className="text-gray-600 font-medium">Years of Service</div>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg text-center transition-transform hover:scale-105">
                <div className="w-16 h-16 bg-[#007B8A]/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-[#007B8A]" aria-hidden="true" />
                </div>
                <div className="text-4xl font-bold text-gray-900 mb-2">4.9/5</div>
                <div className="text-gray-600 font-medium">Client Satisfaction</div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-24 bg-white" aria-labelledby="testimonials-heading">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 id="testimonials-heading" className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                What Our <span className="text-[#007B8A]">Clients Say</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Hear from the families who trust us to provide compassionate care for their loved ones.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
                <div className="flex items-center mb-4">
                  <Star className="w-5 h-5 text-yellow-400" aria-hidden="true" />
                  <Star className="w-5 h-5 text-yellow-400" aria-hidden="true" />
                  <Star className="w-5 h-5 text-yellow-400" aria-hidden="true" />
                  <Star className="w-5 h-5 text-yellow-400" aria-hidden="true" />
                  <Star className="w-5 h-5 text-yellow-400" aria-hidden="true" />
                </div>
                <p className="text-gray-600 mb-4">
                  "The care provided to my mother was exceptional. The caregivers were kind, professional, and truly made a difference in her life."
                </p>
                <p className="text-gray-900 font-semibold">— Ankit Patel</p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
                <div className="flex items-center mb-4">
                  <Star className="w-5 h-5 text-yellow-400" aria-hidden="true" />
                  <Star className="w-5 h-5 text-yellow-400" aria-hidden="true" />
                  <Star className="w-5 h-5 text-yellow-400" aria-hidden="true" />
                  <Star className="w-5 h-5 text-yellow-400" aria-hidden="true" />
                  <Star className="w-5 h-5 text-yellow-400" aria-hidden="true" />
                </div>
                <p className="text-gray-600 mb-4">
                  "Florence Nightingale gave us peace of mind. Their team was always there when we needed them, and their compassion was unmatched."
                </p>
                <p className="text-gray-900 font-semibold">— Shalini Gupta</p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
                <div className="flex items-center mb-4">
                  <Star className="w-5 h-5 text-yellow-400" aria-hidden="true" />
                  <Star className="w-5 h-5 text-yellow-400" aria-hidden="true" />
                  <Star className="w-5 h-5 text-yellow-400" aria-hidden="true" />
                  <Star className="w-5 h-5 text-yellow-400" aria-hidden="true" />
                  <Star className="w-5 h-5 text-yellow-400" aria-hidden="true" />
                </div>
                <p className="text-gray-600 mb-4">
                  "The personalized care plan was a game-changer for my father. We are so grateful for the support and care provided."
                </p>
                <p className="text-gray-900 font-semibold">— Vikram Singh</p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-24 bg-white" aria-labelledby="why-choose-heading">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 id="why-choose-heading" className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Why Choose
                <span className="text-[#007B8A]"> Florence Nightingale?</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We stand out through our commitment to excellence, compassion, and professional care delivery tailored to your needs.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-white to-[#A2E3E2]/20 p-8 rounded-2xl shadow-lg border border-gray-100 transition-transform hover:scale-105">
                <div className="w-14 h-14 bg-[#007B8A]/10 rounded-2xl flex items-center justify-center mb-6">
                  <Shield className="w-7 h-7 text-[#007B8A]" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Licensed & Insured</h3>
                <p className="text-gray-600 leading-relaxed">
                  Our caregivers are fully licensed, insured, and undergo rigorous background checks for your peace of mind.
                </p>
              </div>
              <div className="bg-gradient-to-br from-white to-[#A2E3E2]/20 p-8 rounded-2xl shadow-lg border border-gray-100 transition-transform hover:scale-105">
                <div className="w-14 h-14 bg-[#007B8A]/10 rounded-2xl flex items-center justify-center mb-6">
                  <Users className="w-7 h-7 text-[#007B8A]" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Personalized Care</h3>
                <p className="text-gray-600 leading-relaxed">
                  Each care plan is uniquely designed to meet individual needs, preferences, and health conditions for optimal outcomes.
                </p>
              </div>
              <div className="bg-gradient-to-br from-white to-[#A2E3E2]/20 p-8 rounded-2xl shadow-lg border border-gray-100 transition-transform hover:scale-105">
                <div className="w-14 h-14 bg-[#007B8A]/10 rounded-2xl flex items-center justify-center mb-6">
                  <Clock className="w-7 h-7 text-[#007B8A]" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">24/7 Availability</h3>
                <p className="text-gray-600 leading-relaxed">
                  Round-the-clock care and emergency response ensure support is always available when you need it most.
                </p>
              </div>
              <div className="bg-gradient-to-br from-white to-[#A2E3E2]/20 p-8 rounded-2xl shadow-lg border border-gray-100 transition-transform hover:scale-105">
                <div className="w-14 h-14 bg-[#007B8A]/10 rounded-2xl flex items-center justify-center mb-6">
                  <Heart className="w-7 h-7 text-[#007B8A]" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Compassionate Approach</h3>
                <p className="text-gray-600 leading-relaxed">
                  Our caregivers are selected for their skills and genuine compassion, dedicated to making a difference.
                </p>
              </div>
              <div className="bg-gradient-to-br from-white to-[#A2E3E2]/20 p-8 rounded-2xl shadow-lg border border-gray-100 transition-transform hover:scale-105">
                <div className="w-14 h-14 bg-[#007B8A]/10 rounded-2xl flex items-center justify-center mb-6">
                  <Award className="w-7 h-7 text-[#007B8A]" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Proven Excellence</h3>
                <p className="text-gray-600 leading-relaxed">
                  With years of experience and hundreds of satisfied families, our track record speaks to our excellence.
                </p>
              </div>
              <div className="bg-gradient-to-br from-white to-[#A2E3E2]/20 p-8 rounded-2xl shadow-lg border border-gray-100 transition-transform hover:scale-105">
                <div className="w-14 h-14 bg-[#007B8A]/10 rounded-2xl flex items-center justify-center mb-6">
                  <Users className="w-7 h-7 text-[#007B8A]" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Family-Centered Care</h3>
                <p className="text-gray-600 leading-relaxed">
                  We involve families in the care process, ensuring open communication and collaborative decision-making.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="py-24 bg-[#007B8A] text-white" aria-labelledby="cta-heading">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 id="cta-heading" className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Experience <span className="text-[#A2E3E2]">Compassionate Care?</span>
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Contact us today to learn how Florence Nightingale Home Care Agency can support your family with personalized, professional care.
            </p>
            <a
              href="/contact"
              className="inline-block bg-white text-[#007B8A] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors"
              aria-label="Contact us to start your care journey"
            >
              Contact Us Now
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}