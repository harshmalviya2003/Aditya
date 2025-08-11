
'use client';

import React from 'react';
import Link from 'next/link';
import Footer from '@/components/home/Footer';
import { Phone, Clock, User, Home, Heart, MessageCircle } from 'lucide-react';

// Job vacancies data
const vacancies = [
  {
    title: 'Care Taker For Patient',
    type: 'Full-time',
    location: 'Indore, Ujjain, Dewas, Rau, Mhow',
    description: 'Provide compassionate care to patients at home, assisting with daily activities and monitoring health in Indore, Ujjain, Dewas, Rau, and Mhow.',
    requirements: [
      '10th/12th pass (Healthcare certification preferred)',
      'Experience in patient care',
      'Good communication skills',
      'Physically fit',
    ],
    contact: '+91-9479365137',
    whatsapp: '+919479365137',
    serviceLink: '/services/care-taker',
  },
  {
    title: 'Registered Nurse for Home Nursing',
    type: 'Full-time/Part-time',
    location: 'Indore, Ujjain, Dewas',
    description: 'Deliver expert home nursing services, including medication administration and health monitoring, in Indore, Ujjain, and Dewas.',
    requirements: [
      'GNM/B.Sc Nursing degree',
      'Valid nursing license',
      'Experience in home nursing',
      'Compassionate and detail-oriented',
    ],
    contact: '+91-8319226300',
    whatsapp: '+918319226300',
    serviceLink: '/services/home-nursing',
  },
  {
    title: 'Elder Care Specialist',
    type: 'Part-time',
    location: 'Indore, Mhow',
    description: 'Provide specialized elder care services, including companionship and mobility support, in Indore and Mhow.',
    requirements: [
      'Experience in geriatric care',
      'Healthcare certification preferred',
      'Empathetic and patient',
      'Knowledge of elderly care techniques',
    ],
    contact: '+91-9479365137',
    whatsapp: '+919479365137',
    serviceLink: '/services/elder-care',
  },
  {
    title: 'Post Operative Nurse',
    type: 'Full-time',
    location: 'Ujjain, Dewas',
    description: 'Offer post-operative nursing care at home, supporting recovery and wound care in Ujjain and Dewas.',
    requirements: [
      'GNM/B.Sc Nursing degree',
      'Experience in post-operative care',
      'Valid nursing license',
      'Strong organizational skills',
    ],
    contact: '+91-8319226300',
    whatsapp: '+918319226300',
    serviceLink: '/services/post-operative-care',
  },
  {
    title: 'Physiotherapist for Home Care',
    type: 'Part-time',
    location: 'Indore, Mhow',
    description: 'Provide physiotherapy at home, including mobility therapy and pain management, in Indore and Mhow.',
    requirements: [
      'BPT degree',
      'Valid license to practice',
      'Experience in home care settings',
      'Knowledge of rehabilitation techniques',
    ],
    contact: '+91-9479365137',
    whatsapp: '+919479365137',
    serviceLink: '/services/physiotherapy',
  },
  {
    title: 'New Born Baby and Japa Care Specialist',
    type: 'Full-time',
    location: 'Rau, Indore',
    description: 'Offer professional new born baby care and Japa services for new mothers in Rau and Indore.',
    requirements: [
      'Certification in new born care or Japa services',
      'Experience with infants',
      'Compassionate and nurturing',
      'Good communication skills',
    ],
    contact: '+91-8319226300',
    whatsapp: '+918319226300',
    serviceLink: '/services/baby-care',
  },
  {
    title: 'Paralysis Care Nurse',
    type: 'Full-time',
    location: 'Dewas, Indore',
    description: 'Provide specialized nursing for paralysis patients at home, ensuring comfort and care in Dewas and Indore.',
    requirements: [
      'GNM/B.Sc Nursing degree',
      'Experience in paralysis care',
      'Valid nursing license',
      'Physically capable of patient assistance',
    ],
    contact: '+91-9479365137',
    whatsapp: '+919479365137',
    serviceLink: '/services/paralysis-care',
  },
];

// Benefits data
const benefits = [
  {
    icon: Heart,
    title: 'Medical Insurance',
    description: 'Comprehensive health coverage for all full-time staff.',
  },
  {
    icon: Clock,
    title: 'Flexible Shifts',
    description: 'Options for day/night shifts based on your preference.',
  },
  {
    icon: User,
    title: 'Training Programs',
    description: 'Regular skill development and certification courses.',
  },
  {
    icon: Home,
    title: 'Rewarding Work',
    description: 'Make a real difference in patients’ lives in Indore, Ujjain, Dewas, Rau, and Mhow.',
  },
];

// Schema.org structured data for JobPostings
const schemaData = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  itemListElement: vacancies.map((job, index) => ({
    '@type': 'JobPosting',
    title: job.title,
    description: job.description,
    hiringOrganization: {
      '@type': 'Organization',
      name: 'Comfort Home Healthcare',
      sameAs: 'https://comforthomehealthcare.in',
      logo: 'https://comforthomehealthcare.in/images/logo.jpg',
    },
    jobLocation: {
      '@type': 'Place',
      address: {
        '@type': 'PostalAddress',
        addressLocality: job.location,
        addressRegion: 'Madhya Pradesh',
        addressCountry: 'IN',
      },
    },
    employmentType: job.type,
    datePosted: '2025-08-11',
    validThrough: '2026-08-11',
    qualifications: job.requirements.join('; '),
    url: `https://comforthomehealthcare.in/careers#${job.title.toLowerCase().replace(/\s+/g, '-')}`,
  })),
};

export const metadata = {
  title: 'Careers at Comfort Home Healthcare | Jobs in Indore, Ujjain, Dewas, Rau, Mhow',
  description: 'Join Comfort Home Healthcare in Indore, Ujjain, Dewas, Rau, and Mhow. Explore job openings for home nursing, elder care, physiotherapy, and more.',
  keywords: 'home healthcare jobs Indore, home nursing jobs Ujjain, elder care jobs Dewas, patient care taker jobs Rau, physiotherapy jobs Mhow, healthcare careers Indore, nursing jobs Ujjain, elder care services jobs Dewas, home health care jobs Rau, paralysis care jobs Mhow, new born baby care jobs Indore, Japa care jobs Ujjain, post operative nursing jobs Dewas, medical jobs at home',
  robots: 'index, follow',
  openGraph: {
    title: 'Careers at Comfort Home Healthcare - Join Our Team',
    description: 'Exciting career opportunities in home healthcare, including home nursing, elder care, and physiotherapy in Indore, Ujjain, Dewas, Rau, and Mhow.',
    url: 'https://comforthomehealthcare.in/careers',
    type: 'website',
    images: ['https://comforthomehealthcare.in/images/careers-hero.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Careers at Comfort Home Healthcare',
    description: 'Join our team to provide home nursing, elder care, and physiotherapy in Indore, Ujjain, Dewas, Rau, and Mhow.',
    images: ['https://comforthomehealthcare.in/images/careers-hero.jpg'],
  },
  alternates: {
    canonical: 'https://comforthomehealthcare.in/careers',
  },
};

export default function Careers() {
  return (
    <div className="bg-white">
      {/* Schema.org Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      {/* Hero Section */}
      <section className="relative pt-28 pb-16 bg-gradient-to-b from-teal-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900">
              Join Our <span className="text-[#007B8A]">Care Team</span>
            </h1>
            <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
              Build a rewarding career with Comfort Home Healthcare, providing home nursing, elder care, and physiotherapy in Indore, Ujjain, Dewas, Rau, and Mhow.
            </p>
          </div>
        </div>
      </section>

      {/* Current Openings */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Current <span className="text-[#007B8A]">Job Openings</span>
            </h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              Join our compassionate team to deliver exceptional home healthcare services across Indore, Ujjain, Dewas, Rau, and Mhow.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {vacancies.map((job, index) => (
              <article
                key={index}
                className="bg-slate-50/70 rounded-2xl border border-gray-200/80 p-8 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{job.title}</h3>
                    <div className="flex flex-wrap gap-2 mt-2">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-[#007B8A]/10 text-[#007B8A]">
                        {job.type}
                      </span>
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                        {job.location}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="mt-6">
                  <h4 className="font-medium text-gray-900">Job Description:</h4>
                  <p className="mt-2 text-gray-600">
                    {job.description}{' '}
                    <Link href={job.serviceLink} className="text-[#007B8A] hover:underline" aria-label={`Learn more about ${job.title} services`}>
                      Learn more about this service
                    </Link>
                    .
                  </p>
                </div>

                <div className="mt-6">
                  <h4 className="font-medium text-gray-900">Requirements:</h4>
                  <ul className="mt-2 space-y-2 text-gray-600">
                    {job.requirements.map((req, i) => (
                      <li key={i} className="flex items-start">
                        <svg
                          className="h-5 w-5 text-[#007B8A] mr-2"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          aria-hidden="true"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {req}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8 space-y-3">
                  <a
                    href={`tel:${job.contact}`}
                    className="inline-flex items-center justify-center w-full bg-[#007B8A] text-white px-6 py-3 rounded-lg font-semibold hover:bg-teal-700 transition-colors duration-200"
                    aria-label={`Call to apply for ${job.title} position`}
                  >
                    <Phone className="w-5 h-5 mr-2" aria-hidden="true" />
                    Call Now: {job.contact}
                  </a>
                  <a
                    href={`https://wa.me/${job.whatsapp}?text=Hello%20Comfort%20Home%20Healthcare,%20I'm%20interested%20in%20applying%20for%20the%20${encodeURIComponent(
                      job.title
                    )}%20position`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-full bg-[#25D366] text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-600 transition-colors duration-200"
                    aria-label={`Apply via WhatsApp for ${job.title} position`}
                  >
                    <MessageCircle className="w-5 h-5 mr-2" aria-hidden="true" />
                    WhatsApp Now
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Why Work With <span className="text-[#007B8A]">Comfort Home Healthcare</span>
            </h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              We value our team members and provide benefits to support your growth and well-being in Indore, Ujjain, Dewas, Rau, and Mhow.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <article
                key={index}
                className="bg-white p-8 rounded-2xl border border-gray-200/80 text-center hover:shadow-lg transition-shadow duration-300"
              >
                <div className="mx-auto w-16 h-16 bg-[#007B8A]/10 rounded-full flex items-center justify-center">
                  <benefit.icon className="w-8 h-8 text-[#007B8A]" aria-hidden="true" />
                </div>
                <h3 className="mt-6 text-xl font-bold text-gray-900">{benefit.title}</h3>
                <p className="mt-2 text-gray-600">{benefit.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-[#007B8A]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center text-white">
            <h2 className="text-3xl font-bold">Have Questions About Careers?</h2>
            <p className="mt-4 max-w-2xl mx-auto">
              Our HR team is ready to discuss opportunities in home healthcare across Indore, Ujjain, Dewas, Rau, and Mhow.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="tel:+919479365137"
                className="inline-flex items-center justify-center bg-white text-[#007B8A] px-8 py-3.5 rounded-lg font-bold hover:bg-gray-100 transition-all shadow-lg"
                aria-label="Call HR team for career inquiries"
              >
                <Phone className="w-5 h-5 mr-2" aria-hidden="true" />
                Call HR: +91 94793 65137
              </a>
              <a
                href="https://wa.me/+919479365137?text=Hello%20Comfort%20Home%20Healthcare,%20I%20have%20a%20question%20about%20career%20opportunities"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-[#25D366] text-white px-8 py-3.5 rounded-lg font-bold hover:bg-green-600 transition-all shadow-lg"
                aria-label="Contact HR team via WhatsApp for career inquiries"
              >
                <MessageCircle className="w-5 h-5 mr-2" aria-hidden="true" />
                WhatsApp HR
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
