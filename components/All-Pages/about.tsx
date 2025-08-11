'use client';

import React from 'react';
import Footer from '@/components/home/Footer';
import { Heart, Award, Shield, CheckCircle } from 'lucide-react';
import Image from 'next/image';

// Metadata for SEO
export const metadata = {
  title: 'Comfort Home Healthcare | Home Nursing & Elder Care in Indore, Ujjain, Dewas, Rau, Mhow',
  description: 'Comfort Home Healthcare offers professional home nursing, elder care, physiotherapy, and patient care services in Indore, Ujjain, Dewas, Rau, and Mhow. Trusted care at home.',
  keywords: 'home healthcare Indore, home nursing services Ujjain, elder care services Dewas, patient care taker Rau, physiotherapy at home Mhow, healthcare services Indore, take care services Ujjain, elder take care Dewas, home health care Rau, nursing care paralysis patient Mhow, new born baby care Indore, Japa care Ujjain, post operative nursing Dewas, home health care services, professional nursing at home, senior care at home, baby care services, rehabilitation at home, medical care at home',
  robots: 'index, follow',
  openGraph: {
    title: 'Comfort Home Healthcare - Best Home Health Care in Indore, Ujjain, Dewas, Rau, Mhow',
    description: 'Expert home nursing, elder care, patient care, physiotherapy, and more at your doorstep in Indore, Ujjain, Dewas, Rau, and Mhow.',
    url: 'https://comforthomehealthcare.in/about',
    type: 'website',
    images: ['https://comforthomehealthcare.in/images/hero-image.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Comfort Home Healthcare - Home Nursing & Elder Care',
    description: 'Providing reliable home healthcare including nursing, elder care, and physiotherapy in Indore, Ujjain, Dewas, Rau, Mhow.',
    images: ['https://comforthomehealthcare.in/images/hero-image.jpg'],
  },
  alternates: {
    canonical: 'https://comforthomehealthcare.in/about',
  },
};

// Team members data
const teamMembers = [
  { name: 'Dr. Anjali Sharma', role: 'Medical Director', image: 'https://images.unsplash.com/photo-1535713875002-d1d0cf3356de?auto=format&fit=crop&w=400&q=80', alt: 'Dr. Anjali Sharma, Medical Director at Comfort Home Healthcare' },
  { name: 'Priya Malhotra', role: 'Head Caregiver', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&q=80', alt: 'Priya Malhotra, Head Caregiver for home nursing services' },
  { name: 'Rahul Verma', role: 'Care Coordinator', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80', alt: 'Rahul Verma, Care Coordinator for elder care services' },
];

// Commitments data
const commitments = [
  { icon: Shield, title: 'Unmatched Safety', description: 'Licensed, insured, and rigorously background-checked caregivers for home healthcare in Indore, Ujjain, Dewas, Rau, and Mhow.' },
  { icon: Heart, title: 'Deep Compassion', description: 'Our care takers and nurses provide empathetic home nursing services and elder care with a personal touch.' },
  { icon: CheckCircle, title: 'Personalized Care Plans', description: 'Tailored care plans for paralysis patients, post-operative care, new born baby care, and physiotherapy at home.' },
];

// Services data
const services = [
  { title: 'Care Taker For Patient', description: 'Professional care takers for patients at home in Indore, Ujjain, and nearby areas.', link: '/services/care-taker' },
  { title: 'Home Nursing Services', description: 'Expert home nursing services in Ujjain, Dewas, and Rau for comprehensive medical care.', link: '/services/home-nursing' },
  { title: 'Elder Care Services At Home', description: 'Compassionate elder take care services in Mhow and Indore for senior well-being.', link: '/services/elder-care' },
  { title: 'Nursing Care of Paralysis Patient', description: 'Specialized nursing for paralysis patients at home in Dewas and surrounding areas.', link: '/services/paralysis-care' },
  { title: 'New Born Baby And Japa Care', description: 'Professional new born baby care and Japa services in Rau for new mothers.', link: '/services/baby-care' },
  { title: 'Post Operative Nursing Care', description: 'Post-operative nursing care at home in Ujjain for faster recovery.', link: '/services/post-operative-care' },
  { title: 'Physiotherapy At Home', description: 'Convenient physiotherapy services at home in Indore and Mhow for rehabilitation.', link: '/services/physiotherapy' },
];

// Schema.org structured data for LocalBusiness
const schemaData = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Comfort Home Healthcare',
  description: 'Providing home healthcare services including home nursing, elder care, and physiotherapy in Indore, Ujjain, Dewas, Rau, and Mhow.',
  url: 'https://comforthomehealthcare.in',
  telephone: '+91-1234567890', // Replace with actual phone number
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Indore, Ujjain, Dewas, Rau, Mhow',
    addressRegion: 'Madhya Pradesh',
    addressCountry: 'IN',
  },
  openingHours: 'Mo-Su 00:00-23:59',
  sameAs: [
    'https://www.facebook.com/comforthomehealthcare', // Replace with actual social media links
    'https://www.twitter.com/comforthomehc',
  ],
};

export default function About() {
  return (
    <div className="bg-white">
      {/* Schema.org Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      {/* Hero Section */}
      <section className="relative pt-14 pb-16 sm:pt-22 sm:pb-14 bg-gradient-to-b from-teal-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-5xl font-extrabold text-gray-900 tracking-tight">
                Why <span className="text-[#007B8A]">Choose Comfort Home</span> Healthcare
              </h1>
              <p className="mt-6 text-lg text-gray-600">
                At Comfort Home Healthcare, we are your trusted partner for home healthcare in Indore, Ujjain, Dewas, Rau, and Mhow. Offering compassionate and professional services like home nursing, elder care, and physiotherapy, we bring medical excellence to your doorstep.
              </p>
              <div className="mt-8 flex gap-4">
                <a
                  href="/contact"
                  className="inline-block bg-[#4CAF50] text-white px-8 py-3 rounded-lg font-semibold hover:bg-teal-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                  aria-label="Request a consultation with Comfort Home Healthcare"
                >
                  Request a Consultation
                </a>
              </div>
            </div>
            <div className="relative h-96 lg:h-[500px]">
              <Image
                src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&auto=format&fit=crop&w=880&q=80"
                alt="Comfort Home Healthcare caregiver assisting senior in Indore"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="rounded-2xl object-cover shadow-2xl"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900">
              Our <span className="text-[#007B8A]">Home Healthcare Services</span>
            </h2>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive home healthcare solutions tailored for Indore, Ujjain, Dewas, Rau, and Mhow.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <article
                key={index}
                className="bg-slate-50/70 p-8 rounded-2xl border border-gray-200/80 text-center transform transition-all duration-300 hover:bg-white hover:shadow-xl hover:-translate-y-2"
              >
                <h3 className="mt-6 text-xl font-bold text-gray-900">{service.title}</h3>
                <p className="mt-2 text-gray-600">{service.description}</p>
                <a
                  href={service.link}
                  className="mt-4 inline-block text-[#007B8A] font-semibold hover:underline"
                  aria-label={`Learn more about ${service.title}`}
                >
                  Learn More
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Foundation of Care Section */}
      <section className="py-20 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900">
              Healthcare <span className="text-[#007B8A]">That Understands You</span>
            </h2>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
              Premium home healthcare services with a personal touch in Central India.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <article className="bg-slate-50/70 p-8 rounded-2xl border border-gray-200/80 text-center transform transition-all duration-300 hover:bg-white hover:shadow-xl hover:-translate-y-2">
              <div className="mx-auto w-16 h-16 bg-[#007B8A]/10 rounded-full flex items-center justify-center">
                <Award className="w-8 h-8 text-[#007B8A]" aria-hidden="true" />
              </div>
              <h3 className="mt-6 text-xl font-bold text-gray-900">Local Healthcare Experts</h3>
              <p className="mt-2 text-gray-600">
                Serving Indore, Ujjain, Dewas, Rau, and Mhow with home healthcare solutions designed for our community.
              </p>
            </article>
            <article className="bg-slate-50/70 p-8 rounded-2xl border border-gray-200/80 text-center transform transition-all duration-300 hover:bg-white hover:shadow-xl hover:-translate-y-2">
              <div className="mx-auto w-16 h-16 bg-[#007B8A]/10 rounded-full flex items-center justify-center">
                <Shield className="w-8 h-8 text-[#007B8A]" aria-hidden="true" />
              </div>
              <h3 className="mt-6 text-xl font-bold text-gray-900">Certified Care Team</h3>
              <p className="mt-2 text-gray-600">
                Our healthcare professionals undergo rigorous training for top-quality home nursing and elder care.
              </p>
            </article>
            <article className="bg-slate-50/70 p-8 rounded-2xl border border-gray-200/80 text-center transform transition-all duration-300 hover:bg-white hover:shadow-xl hover:-translate-y-2">
              <div className="mx-auto w-16 h-16 bg-[#007B8A]/10 rounded-full flex items-center justify-center">
                <Heart className="w-8 h-8 text-[#007B8A]" aria-hidden="true" />
              </div>
              <h3 className="mt-6 text-xl font-bold text-gray-900">Comfort Where You Need It</h3>
              <p className="mt-2 text-gray-600">
                Bringing hospital-quality healthcare to the comfort of your home in Indore and Mhow.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* Our Commitment Section */}
      <section className="py-20 sm:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Our Healthcare Promise</h2>
              <p className="mt-4 text-lg text-gray-600">Comfort Home Healthcare combines medical expertise with compassionate home care in Central India.</p>
              <div className="mt-8 space-y-6">
                {commitments.map((commit, index) => (
                  <div key={index} className="flex items-start">
                    <div className="flex-shrink-0 w-12 h-12 bg-[#007B8A]/10 rounded-xl flex items-center justify-center mr-4">
                      <commit.icon className="w-6 h-6 text-[#007B8A]" aria-hidden="true" />
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
              <article className="bg-white p-8 rounded-2xl text-center">
                <p className="text-4xl md:text-5xl font-extrabold text-[#007B8A]">100+</p>
                <p className="mt-2 text-sm font-semibold text-gray-600">Families Cared For</p>
              </article>
              <article className="bg-white p-8 rounded-2xl text-center">
                <p className="text-4xl md:text-5xl font-extrabold text-[#007B8A]">50+</p>
                <p className="mt-2 text-sm font-semibold text-gray-600">Trained Healthcare Providers</p>
              </article>
              <article className="bg-white p-8 rounded-2xl text-center">
                <p className="text-4xl md:text-5xl font-extrabold text-[#007B8A]">5+</p>
                <p className="mt-2 text-sm font-semibold text-gray-600">Years of Trust</p>
              </article>
              <article className="bg-white p-8 rounded-2xl text-center">
                <p className="text-4xl md:text-5xl font-extrabold text-[#007B8A]">24/7</p>
                <p className="mt-2 text-sm font-semibold text-gray-600">Healthcare Support</p>
              </article>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-slate-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="relative bg-gradient-to-r from-[#007B8A] to-teal-600 rounded-2xl p-12 text-center text-white overflow-hidden">
            <div className="absolute inset-0 opacity-10 bg-[url('/patterns/circuit-board.svg')]"></div>
            <div className="relative">
              <h2 className="text-3xl font-bold">Experience the Comfort Home Healthcare Difference</h2>
              <p className="mt-4 max-w-2xl mx-auto">Serving families across Indore, Ujjain, Dewas, Rau, and Mhow with exceptional home healthcare services.</p>
              <a
                href="/contact"
                className="mt-8 inline-block bg-white text-[#007B8A] px-8 py-3.5 rounded-lg font-bold text-base hover:bg-gray-100 transition-all transform hover:scale-105 shadow-xl"
                aria-label="Begin your healthcare journey with Comfort Home Healthcare"
              >
                Begin Your Healthcare Journey
              </a>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}