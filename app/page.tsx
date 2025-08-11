

import React from 'react';
import Footer from '@/components/home/Footer';
import Hero from '@/components/home/Hero';
import Services from '@/components/home/Services';
import CTABanner from '@/components/home/CTABanner';
import FAQ from '@/components/home/FAQ';
import Testimonials from '@/components/home/Testimonials';
import Blog from '@/components/home/Blog';

// Metadata for SEO
export const metadata = {
  title: 'Comfort Home Healthcare | Home Nursing & Elder Care in Indore, Ujjain, Dewas, Rau, Mhow',
  description: 'Comfort Home Healthcare provides expert home nursing, elder care, physiotherapy, and more in Indore, Ujjain, Dewas, Rau, and Mhow. Request a free consultation today.',
  keywords: 'home healthcare Indore, home nursing services Ujjain, elder care services Dewas, patient care taker Rau, physiotherapy at home Mhow, healthcare services Indore, take care services Ujjain, elder take care Dewas, home health care Rau, nursing care paralysis patient Mhow, new born baby care Indore, Japa care Ujjain, post operative nursing Dewas, home health care services, professional nursing at home, senior care at home, baby care services, rehabilitation at home',
  robots: 'index, follow',
  openGraph: {
    title: 'Comfort Home Healthcare - Expert Care at Home',
    description: 'Trusted home healthcare services including home nursing, elder care, and physiotherapy in Indore, Ujjain, Dewas, Rau, and Mhow.',
    url: 'https://comforthomehealthcare.in',
    type: 'website',
    images: ['https://comforthomehealthcare.in/images/hero.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Comfort Home Healthcare - Home Care Services',
    description: 'Providing professional home nursing, elder care, and physiotherapy in Indore, Ujjain, Dewas, Rau, and Mhow.',
    images: ['https://comforthomehealthcare.in/images/hero.jpg'],
  },
  alternates: {
    canonical: 'https://comforthomehealthcare.in',
  },
};

// Schema.org structured data for LocalBusiness
const schemaData = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Comfort Home Healthcare',
  description: 'Providing home healthcare services including home nursing, elder care, physiotherapy, paralysis care, new born baby care, Japa care, and post-operative care in Indore, Ujjain, Dewas, Rau, and Mhow.',
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
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '08:00',
      closes: '18:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Saturday', 'Sunday'],
      opens: '09:00',
      closes: '16:00',
    },
  ],
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+91-9479365137',
    contactType: 'Customer Service',
    areaServed: 'Indore, Ujjain, Dewas, Rau, Mhow',
  },
};

export default function Home() {
  return (
    <div lang="en" className="bg-slate-50">
      {/* Schema.org Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      <main>
        {/* Hero Section */}
        <Hero />

        {/* Services Section */}
        <Services />

        {/* Call to Action Banner */}
        <CTABanner />

        {/* Testimonials Section */}
        <Testimonials />

        {/* Blog Section */}
        <Blog />

        {/* FAQ Section */}
        <FAQ />
      </main>

    </div>
  );
}
