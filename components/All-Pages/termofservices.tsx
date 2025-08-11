
'use client';

import React from 'react';
import Link from 'next/link';
import Footer from '@/components/home/Footer';

// Metadata for SEO
export const metadata = {
  title: 'Terms of Service | Comfort Home Healthcare in Indore, Ujjain, Dewas, Rau, Mhow',
  description: 'Read the Terms of Service for Comfort Home Healthcare, covering home nursing, elder care, physiotherapy, and more in Indore, Ujjain, Dewas, Rau, and Mhow.',
  keywords: 'home healthcare Indore, home nursing services Ujjain, elder care services Dewas, patient care taker Rau, physiotherapy at home Mhow, terms of service, healthcare services Indore, take care services Ujjain, elder take care Dewas, home health care Rau, nursing care paralysis patient Mhow, new born baby care Indore, Japa care Ujjain, post operative nursing Dewas',
  robots: 'noindex, follow',
  openGraph: {
    title: 'Terms of Service - Comfort Home Healthcare',
    description: 'Understand the terms governing our home healthcare services in Indore, Ujjain, Dewas, Rau, and Mhow.',
    url: 'https://comforthomehealthcare.in/terms-of-service',
    type: 'website',
    images: ['https://comforthomehealthcare.in/images/terms-hero.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Terms of Service - Comfort Home Healthcare',
    description: 'Terms for home nursing, elder care, and physiotherapy services in Indore, Ujjain, Dewas, Rau, and Mhow.',
    images: ['https://comforthomehealthcare.in/images/terms-hero.jpg'],
  },
  alternates: {
    canonical: 'https://comforthomehealthcare.in/terms-of-service',
  },
};

// Schema.org structured data for WebPage and LocalBusiness
const schemaData = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Terms of Service',
  description: 'Terms of Service for Comfort Home Healthcare, covering home nursing, elder care, physiotherapy, and more in Indore, Ujjain, Dewas, Rau, and Mhow.',
  url: 'https://comforthomehealthcare.in/terms-of-service',
  publisher: {
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
};

export default function TermsOfService() {
  return (
    <div className="bg-white">
      {/* Schema.org Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      <main>
        {/* Hero Section */}
        <section className="relative pt-16 pb-12 bg-gradient-to-b from-teal-50 to-white" aria-labelledby="hero-heading">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 id="hero-heading" className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900">
                Terms of <span className="text-[#007B8A]">Service</span>
              </h1>
              <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
                Effective Date: August 11, 2025
              </p>
            </div>
          </div>
        </section>

        {/* Document-style Terms */}
        <section className="py-12 bg-white" aria-labelledby="terms-heading">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200" role="document">
              {/* Document Header */}
              <div className="bg-[#007B8A] p-6 text-center">
                <h2 className="text-2xl font-bold text-white">Comfort Home Healthcare</h2>
                <p className="text-white/90 mt-1">Terms of Service Agreement</p>
              </div>

              {/* Document Content */}
              <div className="p-8 md:p-10">
                <div className="prose prose-lg text-gray-700 max-w-none">
                  <div className="mb-8 border-b pb-6">
                    <p className="text-right text-sm text-gray-500">Document Ref: CHH/TOS/2025</p>
                    <p className="text-justify">
                      These Terms of Service ("Terms") govern your use of Comfort Home Healthcare's services and website. By accessing or using our services, you agree to be bound by these Terms. If you disagree with any part, you may not access our services.
                    </p>
                  </div>

                  <div className="space-y-8">
                    {/* Section 1: Services Provided */}
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 border-l-4 border-[#007B8A] pl-4" id="services-provided">
                        1. Services Provided
                      </h3>
                      <div className="mt-4 pl-2">
                        <p>Comfort Home Healthcare provides the following services in Indore, Ujjain, Dewas, Rau, and Mhow:</p>
                        <ul className="list-disc pl-6 mt-2 space-y-2">
                          <li><Link href="/services/care-taker" className="text-[#007B8A] hover:underline">Care Taker For Patient</Link> - Assistance with daily living activities.</li>
                          <li><Link href="/services/home-nursing" className="text-[#007B8A] hover:underline">Home Nursing Services</Link> - Professional nursing care at home.</li>
                          <li><Link href="/services/elder-care" className="text-[#007B8A] hover:underline">Elder Care Services At Home</Link> - Support for seniors with companionship.</li>
                          <li><Link href="/services/paralysis-care" className="text-[#007B8A] hover:underline">Nursing Care of Paralysis Patient</Link> - Specialized care for paralysis patients.</li>
                          <li><Link href="/services/baby-care" className="text-[#007B8A] hover:underline">New Born Baby And Japa Care</Link> - Care for newborns and mothers.</li>
                          <li><Link href="/services/post-operative-care" className="text-[#007B8A] hover:underline">Post Operative Nursing Care</Link> - Post-surgical recovery support.</li>
                          <li><Link href="/services/physiotherapy" className="text-[#007B8A] hover:underline">Physiotherapy At Home</Link> - Mobility and pain management services.</li>
                        </ul>
                        <p className="mt-3 text-sm text-gray-600">
                          Services are provided by qualified professionals based on medical assessment and care plans.
                        </p>
                      </div>
                    </div>

                    {/* Section 2: User Responsibilities */}
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 border-l-4 border-[#007B8A] pl-4" id="user-responsibilities">
                        2. User Responsibilities
                      </h3>
                      <div className="mt-4 pl-2">
                        <p>As a client or user of our services, you agree to:</p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-3">
                          <div className="flex items-start">
                            <div className="flex-shrink-0 mt-1">
                              <svg className="h-5 w-5 text-[#007B8A]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                              </svg>
                            </div>
                            <p className="ml-2">Provide accurate medical history and information</p>
                          </div>
                          <div className="flex items-start">
                            <div className="flex-shrink-0 mt-1">
                              <svg className="h-5 w-5 text-[#007B8A]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                              </svg>
                            </div>
                            <p className="ml-2">Follow prescribed care plans and instructions</p>
                          </div>
                          <div className="flex items-start">
                            <div className="flex-shrink-0 mt-1">
                              <svg className="h-5 w-5 text-[#007B8A]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                              </svg>
                            </div>
                            <p className="ml-2">Maintain a safe environment for our staff</p>
                          </div>
                          <div className="flex items-start">
                            <div className="flex-shrink-0 mt-1">
                              <svg className="h-5 w-5 text-[#007B8A]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                              </svg>
                            </div>
                            <p className="ml-2">Make timely payments for services rendered</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Section 3: Payment Terms */}
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 border-l-4 border-[#007B8A] pl-4" id="payment-terms">
                        3. Payment Terms
                      </h3>
                      <div className="mt-4 pl-2">
                        <div className="overflow-x-auto">
                          <table className="min-w-full border border-gray-200">
                            <thead className="bg-gray-50">
                              <tr>
                                <th className="px-4 py-2 text-left text-sm font-medium text-gray-700 border-b">Service</th>
                                <th className="px-4 py-2 text-left text-sm font-medium text-gray-700 border-b">Payment Terms</th>
                                <th className="px-4 py-2 text-left text-sm font-medium text-gray-700 border-b">Late Fees</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr className="bg-white">
                                <td className="px-4 py-2 text-sm border-b">Routine Home Care</td>
                                <td className="px-4 py-2 text-sm border-b">Weekly/Monthly in advance</td>
                                <td className="px-4 py-2 text-sm border-b">2% per day</td>
                              </tr>
                              <tr className="bg-gray-50">
                                <td className="px-4 py-2 text-sm border-b">Specialized Nursing</td>
                                <td className="px-4 py-2 text-sm border-b">Per visit/session</td>
                                <td className="px-4 py-2 text-sm border-b">5% per day</td>
                              </tr>
                              <tr className="bg-white">
                                <td className="px-4 py-2 text-sm border-b">Emergency Care</td>
                                <td className="px-4 py-2 text-sm border-b">Immediate upon service</td>
                                <td className="px-4 py-2 text-sm border-b">10% per day</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                        <p className="mt-3 text-sm text-gray-600">
                          We accept payments via cash, bank transfer, and online payment methods. Receipts will be provided for all transactions.
                        </p>
                      </div>
                    </div>

                    {/* Section 4: Cancellation Policy */}
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 border-l-4 border-[#007B8A] pl-4" id="cancellation-policy">
                        4. Cancellation Policy
                      </h3>
                      <div className="mt-4 pl-2">
                        <div className="bg-slate-50 p-4 rounded-lg border border-gray-200">
                          <h4 className="font-bold text-[#007B8A]">Service Cancellation Terms:</h4>
                          <ul className="list-disc pl-6 mt-2 space-y-1">
                            <li>24 hours notice required for non-emergency cancellations</li>
                            <li>50% charge for cancellations within 12 hours</li>
                            <li>Full charge for cancellations within 4 hours or no-shows</li>
                            <li>Emergency services cannot be cancelled once dispatched</li>
                          </ul>
                        </div>
                        <p className="mt-3 text-sm text-gray-600">
                          To cancel or reschedule, please call our support line at <a href="tel:+919479365137" className="text-[#007B8A] hover:underline" aria-label="Call support line">+91-9479365137</a>.
                        </p>
                      </div>
                    </div>

                    {/* Section 5: Liability Disclaimers */}
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 border-l-4 border-[#007B8A] pl-4" id="liability-disclaimers">
                        5. Liability Disclaimers
                      </h3>
                      <div className="mt-4 pl-2 space-y-4">
                        <div className="p-4 bg-red-50 rounded-lg border border-red-100">
                          <h4 className="font-bold text-red-700">Medical Disclaimer</h4>
                          <p className="mt-1 text-sm text-red-600">
                            Our services complement but do not replace professional medical advice. Always consult with a qualified physician for medical conditions.
                          </p>
                        </div>
                        <p>Comfort Home Healthcare shall not be liable for:</p>
                        <ul className="list-disc pl-6 space-y-2">
                          <li>Complications arising from pre-existing conditions</li>
                          <li>Non-compliance with prescribed care plans</li>
                          <li>Events beyond our reasonable control</li>
                          <li>Unauthorized modifications to treatment plans</li>
                        </ul>
                      </div>
                    </div>

                    {/* Section 6: Governing Law */}
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 border-l-4 border-[#007B8A] pl-4" id="governing-law">
                        6. Governing Law
                      </h3>
                      <div className="mt-4 pl-2">
                        <div className="flex items-start bg-slate-50 p-4 rounded-lg border border-gray-200">
                          <div className="flex-shrink-0 mt-1">
                            <svg className="h-5 w-5 text-[#007B8A]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                            </svg>
                          </div>
                          <div className="ml-3">
                            <p>
                              These Terms shall be governed by and construed in accordance with the laws of India. Any disputes shall be subject to the exclusive jurisdiction of the courts in Indore, Madhya Pradesh.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Section 7: Contact Information */}
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 border-l-4 border-[#007B8A] pl-4" id="contact-information">
                        7. Contact Information
                      </h3>
                      <div className="mt-4 pl-2">
                        <div className="bg-slate-50 p-6 rounded-lg border border-gray-200">
                          <h4 className="font-bold text-[#007B8A]">For service-related inquiries:</h4>
                          <address className="not-italic mt-2 text-gray-700">
                            Comfort Home Healthcare<br />
                            B-07, Flat No. 704, Palash Parisar<br />
                            Silicon City, Indore – 452012<br />
                            Madhya Pradesh, India<br />
                            Phone: <a href="tel:+919479365137" className="text-[#007B8A] hover:underline" aria-label="Call support line">+91-9479365137</a> (24/7 Helpline)<br />
                            Email: <a href="mailto:comforthomehealthcaree@gmail.com" className="text-[#007B8A] hover:underline" aria-label="Email support">comforthomehealthcaree@gmail.com</a><br />
                            Hours: Monday-Sunday, 8:00 AM - 8:00 PM
                          </address>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Document Footer */}
              <div className="bg-gray-50 px-6 py-4 border-t border-gray-200">
                <div className="flex flex-col md:flex-row justify-between items-center">
                  <p className="text-xs text-gray-500">Document Version: 1.0</p>
                  <p className="text-xs text-gray-500">© 2025 Comfort Home Healthcare. All rights reserved.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
