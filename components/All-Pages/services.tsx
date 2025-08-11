


import React from 'react';
import Link from 'next/link';
import Footer from '@/components/home/Footer';
import { Phone, ArrowRight, Shield, Heart, Users } from 'lucide-react';
import Image from 'next/image';
import { services } from '@/data/services';

// Metadata for SEO
export const metadata = {
  title: 'Services | Comfort Home Healthcare in Indore, Ujjain, Dewas, Rau, Mhow',
  description: 'Explore home nursing, elder care, physiotherapy, and more with Comfort Home Healthcare in Indore, Ujjain, Dewas, Rau, and Mhow.',
  keywords: 'home healthcare Indore, home nursing services Ujjain, elder care services Dewas, patient care taker Rau, physiotherapy at home Mhow, healthcare services Indore, take care services Ujjain, elder take care Dewas, home health care Rau, nursing care paralysis patient Mhow, new born baby care Indore, Japa care Ujjain, post operative nursing Dewas, home health care services, professional nursing at home, senior care at home, baby care services, rehabilitation at home',
  robots: 'index, follow',
  openGraph: {
    title: 'Comfort Home Healthcare Services - Expert Care at Home',
    description: 'Discover professional home nursing, elder care, physiotherapy, and more in Indore, Ujjain, Dewas, Rau, and Mhow.',
    url: 'https://comforthomehealthcare.in/services',
    type: 'website',
    images: ['https://comforthomehealthcare.in/images/services-hero.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Comfort Home Healthcare Services',
    description: 'Providing home nursing, elder care, and physiotherapy in Indore, Ujjain, Dewas, Rau, and Mhow.',
    images: ['https://comforthomehealthcare.in/images/services-hero.jpg'],
  },
  alternates: {
    canonical: 'https://comforthomehealthcare.in/services',
  },
};

// Schema.org structured data for Service
const schemaData = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Home Healthcare',
  provider: {
    '@type': 'LocalBusiness',
    name: 'Comfort Home Healthcare',
    description: 'Providing home nursing, elder care, physiotherapy, paralysis care, new born baby care, Japa care, and post-operative care in Indore, Ujjain, Dewas, Rau, and Mhow.',
    url: 'https://comforthomehealthcare.in',
    telephone: '+91-9479365137',
    email: 'comforthomehealthcaree@gmail.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'B-07, Flat No. 704, Palash Parisar, Silicon City',
      addressLocality: 'Indore',
      addressRegion: 'Madhya Pradesh',
      postalCode: '452012',
      addressCountry: 'IN',
    },
  },
  offers: services.map((service) => ({
    '@type': 'Offer',
    name: service.title,
    description: service.description,
    url: `https://comforthomehealthcare.in/services/${service.id}`,
    areaServed: ['Indore', 'Ujjain', 'Dewas', 'Rau', 'Mhow'],
  })),
};

export default function Services() {
  return (
    <div className="bg-slate-50">
      {/* Schema.org Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      <main>
        {/* Hero Section */}
        <section className="py-10 sm:py-20 bg-gradient-to-b from-teal-50 to-white" aria-labelledby="hero-heading">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 id="hero-heading" className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 tracking-tight">
              Our <span className="text-[#007B8A]">Home Care</span> Services
            </h1>
            <p className="mt-6 max-w-3xl mx-auto text-lg text-gray-600">
              Discover tailored home healthcare services, including home nursing, elder care, and physiotherapy, in Indore, Ujjain, Dewas, Rau, and Mhow.
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-10 sm:py-16" aria-labelledby="services-heading">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 id="services-heading" className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Our Services
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service) => (
                <article
                  key={service.id}
                  className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col group border border-transparent hover:border-[#007B8A]/50"
                >
                  <div className="relative">
                    <Image
                      src={service.image}
                      alt={`${service.title} in Indore, Ujjain, Dewas, Rau, Mhow`}
                      width={400}
                      height={250}
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
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
                    <a
                      href="tel:+919479365137"
                      className="inline-flex items-center justify-center bg-slate-100 border border-slate-200 text-slate-700 py-2.5 rounded-lg font-semibold hover:bg-slate-200 transition-all text-sm"
                      aria-label={`Call for ${service.title} inquiry`}
                    >
                      <Phone className="w-4 h-4 mr-2" aria-hidden="true" />
                      Call Now
                    </a>
                    <Link
                      href={`/services/${service.id}`}
                      className="inline-flex items-center justify-center bg-[#4CAF50] text-white py-2.5 rounded-lg font-semibold hover:bg-[#3e8e41] transition-all text-sm"
                      aria-label={`Learn more about ${service.title}`}
                    >
                      View More
                      <ArrowRight className="ml-2 w-4 h-4" aria-hidden="true" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-20 sm:py-24 bg-white" aria-labelledby="why-choose-heading">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 id="why-choose-heading" className="text-3xl font-bold text-gray-900 sm:text-4xl">
                Why Trust Our Care?
              </h2>
              <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
                At Comfort Home Healthcare, we deliver compassionate, professional care in Indore, Ujjain, Dewas, Rau, and Mhow.
              </p>
            </div>
            <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
              <article className="p-6">
                <Shield className="w-12 h-12 text-[#007B8A] mx-auto mb-4" aria-hidden="true" />
                <h3 className="text-lg font-semibold text-gray-900">Certified & Screened</h3>
                <p className="mt-2 text-gray-600">All caregivers are licensed, insured, and thoroughly background-checked.</p>
              </article>
              <article className="p-6">
                <Heart className="w-12 h-12 text-[#007B8A] mx-auto mb-4" aria-hidden="true" />
                <h3 className="text-lg font-semibold text-gray-900">Compassionate Staff</h3>
                <p className="mt-2 text-gray-600">Our team is chosen for their empathy and dedication to dignified care.</p>
              </article>
              <article className="p-6">
                <Users className="w-12 h-12 text-[#007B8A] mx-auto mb-4" aria-hidden="true" />
                <h3 className="text-lg font-semibold text-gray-900">Personalized Plans</h3>
                <p className="mt-2 text-gray-600">We create custom care plans tailored to your unique needs in Central India.</p>
              </article>
            </div>
          </div>
        </section>
      </main>

    </div>
  );
}
