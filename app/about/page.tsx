'use client';

import React from 'react';
import Header from '@/components/Header'; // Make sure this path is correct
import Footer from '@/components/Footer'; // Make sure this path is correct
import { Heart, Users, Award, Shield, CheckCircle } from 'lucide-react';
import Image from 'next/image';

// --- Data for the page ---
const teamMembers = [
    { name: 'Dr. Anjali Sharma', role: 'Medical Director', image: 'https://images.unsplash.com/photo-1535713875002-d1d0cf3356de?auto=format&fit=crop&w=400&q=80' },
    { name: 'Priya Malhotra', role: 'Head Caregiver', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&q=80' },
    { name: 'Rahul Verma', role: 'Care Coordinator', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80' },
];

const commitments = [
    { icon: Shield, title: "Unmatched Safety", description: "Licensed, insured, and rigorously background-checked caregivers for total peace of mind." },
    { icon: Heart, title: "Deep Compassion", description: "We believe care is not just a service, but a calling. Empathy is at our core." },
    { icon: CheckCircle, title: "Personalized Care Plans", description: "Your needs are unique. Your care plan should be too. We tailor everything." },
];

// --- Main Component ---
export default function About() {
  return (
    <div className="bg-white">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative pt-14 pb-16 sm:pt-22 sm:pb-14 bg-gradient-to-b from-teal-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 tracking-tight">
                  The Heart of <span className="text-[#007B8A]">Home Care</span> Excellence.
                </h1>
                <p className="mt-6 text-lg text-gray-600">
                  We are more than a service; we are a dedicated partner in your family's health journey, committed to providing compassionate, professional, and dignified care since 2015.
                </p>
                <div className="mt-8 flex gap-4">
                  <a href="/contact" className="inline-block bg-[#4CAF50] text-white px-8 py-3 rounded-lg font-semibold hover:bg-teal-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                    Request a Consultation
                  </a>
                </div>
              </div>
              <div className="relative h-96 lg:h-[500px]">
                <Image
                  src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&auto=format&fit=crop&w=880&q=80"
                  alt="A compassionate caregiver"
                  fill
                  className="rounded-2xl object-cover shadow-2xl"
                  priority // Added for LCP optimization
                />
              </div>
            </div>
          </div>
        </section>

        {/* --- Naya 'Foundation of Care' Section --- */}
        <section className="py-20 sm:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900">
                Built on <span className="text-[#007B8A]">Trust & Expertise</span>
              </h2>
              <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
                We're not just a service; we are a promise of safety, compassion, and excellence in every aspect of home care.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-slate-50/70 p-8 rounded-2xl border border-gray-200/80 text-center transform transition-all duration-300 hover:bg-white hover:shadow-xl hover:-translate-y-2">
                <div className="mx-auto w-16 h-16 bg-[#007B8A]/10 rounded-full flex items-center justify-center">
                  <Award className="w-8 h-8 text-[#007B8A]" />
                </div>
                <h3 className="mt-6 text-xl font-bold text-gray-900">Decade of Dedication</h3>
                <p className="mt-2 text-gray-600">
                  With over 9 years of service, we have a proven track record of enriching lives and supporting families across Indore.
                </p>
              </div>
              <div className="bg-slate-50/70 p-8 rounded-2xl border border-gray-200/80 text-center transform transition-all duration-300 hover:bg-white hover:shadow-xl hover:-translate-y-2">
                <div className="mx-auto w-16 h-16 bg-[#007B8A]/10 rounded-full flex items-center justify-center">
                  <Shield className="w-8 h-8 text-[#007B8A]" />
                </div>
                <h3 className="mt-6 text-xl font-bold text-gray-900">Vetted & Trusted Professionals</h3>
                <p className="mt-2 text-gray-600">
                  Every caregiver undergoes rigorous background checks, skill verification, and compassionate training for your peace of mind.
                </p>
              </div>
              <div className="bg-slate-50/70 p-8 rounded-2xl border border-gray-200/80 text-center transform transition-all duration-300 hover:bg-white hover:shadow-xl hover:-translate-y-2">
                <div className="mx-auto w-16 h-16 bg-[#007B8A]/10 rounded-full flex items-center justify-center">
                  <Heart className="w-8 h-8 text-[#007B8A]" />
                </div>
                <h3 className="mt-6 text-xl font-bold text-gray-900">Care with a Human Touch</h3>
                <p className="mt-2 text-gray-600">
                  We believe in empathy and dignity. Our care plans are not just about tasks, but about building genuine, caring relationships.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Commitment Section */}
        <section className="py-20 sm:py-24 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Our Commitment to You</h2>
                <p className="mt-4 text-lg text-gray-600">Our values are not just words—they are the principles that guide every decision we make and every interaction we have.</p>
                <div className="mt-8 space-y-6">
                  {commitments.map((commit, index) => (
                    <div key={index} className="flex items-start">
                      <div className="flex-shrink-0 w-12 h-12 bg-[#007B8A]/10 rounded-xl flex items-center justify-center mr-4">
                        <commit.icon className="w-6 h-6 text-[#007B8A]" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900">{commit.title}</h3>
                        <p className="mt-1 text-gray-600">{commit.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white p-8 rounded-2xl text-center">
                  <p className="text-4xl md:text-5xl font-extrabold text-[#007B8A]">1,200+</p>
                  <p className="mt-2 text-sm font-semibold text-gray-600">Families Served</p>
                </div>
                <div className="bg-white p-8 rounded-2xl text-center">
                  <p className="text-4xl md:text-5xl font-extrabold text-[#007B8A]">50+</p>
                  <p className="mt-2 text-sm font-semibold text-gray-600">Trained Caregivers</p>
                </div>
                <div className="bg-white p-8 rounded-2xl text-center">
                  <p className="text-4xl md:text-5xl font-extrabold text-[#007B8A]">9+</p>
                  <p className="mt-2 text-sm font-semibold text-gray-600">Years of Service</p>
                </div>
                <div className="bg-white p-8 rounded-2xl text-center">
                  <p className="text-4xl md:text-5xl font-extrabold text-[#007B8A]">4.9/5</p>
                  <p className="mt-2 text-sm font-semibold text-gray-600">Client Rating</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20 sm:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Meet Our Leaders</h2>
              <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">The dedicated professionals who uphold our mission and guide our team with expertise and heart.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
              {teamMembers.map((member) => (
                <div key={member.name} className="text-center group">
                  <div className="relative w-48 h-48 mx-auto">
                    <Image
                      src={member.image}
                      alt={member.name}
                      width={192}
                      height={192}
                      className="w-48 h-48 rounded-full object-cover shadow-lg transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mt-6">{member.name}</h3>
                  <p className="text-[#007B8A] font-semibold">{member.role}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Call to Action */}
        <section className="bg-slate-50">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="relative bg-gradient-to-r from-[#007B8A] to-teal-600 rounded-2xl p-12 text-center text-white overflow-hidden">
              <div className="absolute inset-0 opacity-10 bg-[url('/patterns/circuit-board.svg')]"></div>
              <div className="relative">
                <h2 className="text-3xl font-bold">Let's Discuss How We Can Help</h2>
                <p className="mt-4 max-w-2xl mx-auto">Your family's peace of mind is just a conversation away. Contact us for a free, no-obligation consultation.</p>
                <a href="/contact" className="mt-8 inline-block bg-white text-[#007B8A] px-8 py-3.5 rounded-lg font-bold text-base hover:bg-gray-100 transition-all transform hover:scale-105 shadow-xl">
                  Start Your Care Journey
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
