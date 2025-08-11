
'use client';

import React from 'react';
import Link from 'next/link';
import Footer from '@/components/home/Footer';

// Metadata for SEO
export const metadata = {
  title: 'Privacy Policy | Comfort Home Healthcare in Indore, Ujjain, Dewas, Rau, Mhow',
  description: 'Read the Privacy Policy for Comfort Home Healthcare, covering data protection for home nursing, elder care, physiotherapy, and more in Indore, Ujjain, Dewas, Rau, and Mhow.',
  keywords: 'home healthcare Indore, home nursing services Ujjain, elder care services Dewas, patient care taker Rau, physiotherapy at home Mhow, privacy policy, healthcare services Indore, take care services Ujjain, elder take care Dewas, home health care Rau, nursing care paralysis patient Mhow, new born baby care Indore, Japa care Ujjain, post operative nursing Dewas',
  robots: 'noindex, follow',
  openGraph: {
    title: 'Privacy Policy - Comfort Home Healthcare',
    description: 'Understand how we protect your data for home healthcare services in Indore, Ujjain, Dewas, Rau, and Mhow.',
    url: 'https://comforthomehealthcare.in/privacy-policy',
    type: 'website',
    images: ['https://comforthomehealthcare.in/images/privacy-hero.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Privacy Policy - Comfort Home Healthcare',
    description: 'Privacy practices for home nursing, elder care, and physiotherapy services in Indore, Ujjain, Dewas, Rau, and Mhow.',
    images: ['https://comforthomehealthcare.in/images/privacy-hero.jpg'],
  },
  alternates: {
    canonical: 'https://comforthomehealthcare.in/privacy-policy',
  },
};

// Schema.org structured data for WebPage and LocalBusiness
const schemaData = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Privacy Policy',
  description: 'Privacy Policy for Comfort Home Healthcare, covering data protection for home nursing, elder care, physiotherapy, and more in Indore, Ujjain, Dewas, Rau, and Mhow.',
  url: 'https://comforthomehealthcare.in/privacy-policy',
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

export default function PrivacyPolicy() {
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
                Privacy <span className="text-[#007B8A]">Policy</span>
              </h1>
              <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
                Effective Date: August 11, 2025
              </p>
            </div>
          </div>
        </section>

        {/* Document-style Privacy Policy */}
        <section className="py-12 bg-white" aria-labelledby="privacy-heading">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200" role="document">
              {/* Document Header */}
              <div className="bg-[#007B8A] p-6 text-center">
                <h2 className="text-2xl font-bold text-white">Comfort Home Healthcare</h2>
                <p className="text-white/90 mt-1">Privacy Policy Document</p>
              </div>

              {/* Document Content */}
              <div className="p-8 md:p-10">
                <div className="prose prose-lg text-gray-700 max-w-none">
                  <div className="mb-8 border-b pb-6">
                    <p className="text-right text-sm text-gray-500">Document Ref: CHH/PP/2025</p>
                    <p className="text-justify">
                      This Privacy Policy ("Policy") describes how Comfort Home Healthcare ("Company", "we", "us", or "our") collects, uses, discloses, and protects the personal information of our patients, their families, and visitors to our website. By accessing our services or website, you consent to the practices described herein.
                    </p>
                  </div>

                  <div className="space-y-8">
                    {/* Article 1: Definitions */}
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 border-l-4 border-[#007B8A] pl-4" id="definitions">
                        Article 1: Definitions
                      </h3>
                      <ol className="list-decimal pl-6 mt-4 space-y-2">
                        <li><strong>Personal Data:</strong> Any information relating to an identified or identifiable individual.</li>
                        <li><strong>Processing:</strong> Any operation performed on Personal Data.</li>
                        <li><strong>Data Subject:</strong> The individual to whom Personal Data relates.</li>
                        <li><strong>Consent:</strong> Freely given, specific, informed, and unambiguous indication of agreement.</li>
                      </ol>
                    </div>

                    {/* Article 2: Data Collection */}
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 border-l-4 border-[#007B8A] pl-4" id="data-collection">
                        Article 2: Data Collection
                      </h3>
                      <p className="mt-4">We collect the following categories of information:</p>
                      <table className="min-w-full mt-4 border border-gray-200">
                        <thead className="bg-gray-50">
                          <tr>
                            <th className="px-4 py-2 text-left text-sm font-medium text-gray-700 border-b">Data Type</th>
                            <th className="px-4 py-2 text-left text-sm font-medium text-gray-700 border-b">Examples</th>
                            <th className="px-4 py-2 text-left text-sm font-medium text-gray-700 border-b">Purpose</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="bg-white">
                            <td className="px-4 py-2 text-sm border-b">Identification Data</td>
                            <td className="px-4 py-2 text-sm border-b">Name, DOB, Aadhar</td>
                            <td className="px-4 py-2 text-sm border-b">Patient registration</td>
                          </tr>
                          <tr className="bg-gray-50">
                            <td className="px-4 py-2 text-sm border-b">Health Data</td>
                            <td className="px-4 py-2 text-sm border-b">Medical history, treatments</td>
                            <td className="px-4 py-2 text-sm border-b">Care provision</td>
                          </tr>
                          <tr className="bg-white">
                            <td className="px-4 py-2 text-sm border-b">Contact Data</td>
                            <td className="px-4 py-2 text-sm border-b">Address, phone, email</td>
                            <td className="px-4 py-2 text-sm border-b">Communication</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>

                    {/* Article 3: Data Processing Principles */}
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 border-l-4 border-[#007B8A] pl-4" id="data-processing">
                        Article 3: Data Processing Principles
                      </h3>
                      <p className="mt-4">We adhere to the following principles:</p>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                        <div className="bg-slate-50 p-4 rounded-lg border border-gray-200">
                          <h4 className="font-bold text-[#007B8A]">Lawfulness & Transparency</h4>
                          <p className="text-sm mt-1">Processing only with valid legal basis and clear information</p>
                        </div>
                        <div className="bg-slate-50 p-4 rounded-lg border border-gray-200">
                          <h4 className="font-bold text-[#007B8A]">Purpose Limitation</h4>
                          <p className="text-sm mt-1">Collected for specified, explicit purposes</p>
                        </div>
                        <div className="bg-slate-50 p-4 rounded-lg border border-gray-200">
                          <h4 className="font-bold text-[#007B8A]">Data Minimization</h4>
                          <p className="text-sm mt-1">Adequate, relevant, and limited to necessities</p>
                        </div>
                        <div className="bg-slate-50 p-4 rounded-lg border border-gray-200">
                          <h4 className="font-bold text-[#007B8A]">Storage Limitation</h4>
                          <p className="text-sm mt-1">Kept only as long as necessary</p>
                        </div>
                      </div>
                    </div>

                    {/* Article 4: Data Subject Rights */}
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 border-l-4 border-[#007B8A] pl-4" id="data-subject-rights">
                        Article 4: Data Subject Rights
                      </h3>
                      <div className="mt-4 space-y-4">
                        <div className="flex items-start">
                          <div className="flex-shrink-0 h-8 w-8 rounded-full bg-[#007B8A]/10 flex items-center justify-center mr-4">
                            <span className="text-[#007B8A] font-bold">1</span>
                          </div>
                          <div>
                            <h4 className="font-medium text-gray-900">Right to Access</h4>
                            <p className="text-sm text-gray-600">You may request copies of your personal data.</p>
                          </div>
                        </div>
                        <div className="flex items-start">
                          <div className="flex-shrink-0 h-8 w-8 rounded-full bg-[#007B8A]/10 flex items-center justify-center mr-4">
                            <span className="text-[#007B8A] font-bold">2</span>
                          </div>
                          <div>
                            <h4 className="font-medium text-gray-900">Right to Rectification</h4>
                            <p className="text-sm text-gray-600">You may request correction of inaccurate data.</p>
                          </div>
                        </div>
                        <div className="flex items-start">
                          <div className="flex-shrink-0 h-8 w-8 rounded-full bg-[#007B8A]/10 flex items-center justify-center mr-4">
                            <span className="text-[#007B8A] font-bold">3</span>
                          </div>
                          <div>
                            <h4 className="font-medium text-gray-900">Right to Erasure</h4>
                            <p className="text-sm text-gray-600">You may request deletion under certain conditions.</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Article 5: Security Measures */}
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 border-l-4 border-[#007B8A] pl-4" id="security-measures">
                        Article 5: Security Measures
                      </h3>
                      <div className="mt-4 pl-2">
                        <p className="mb-3">We implement robust security measures including:</p>
                        <ul className="space-y-2 list-disc pl-6">
                          <li>Encryption of sensitive health data in transit and at rest</li>
                          <li>Role-based access controls to personal information</li>
                          <li>Regular security audits and vulnerability assessments</li>
                          <li>Secure disposal of physical and digital records</li>
                          <li>Staff training on data protection protocols</li>
                        </ul>
                      </div>
                    </div>

                    {/* Article 6: Our Services */}
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 border-l-4 border-[#007B8A] pl-4" id="our-services">
                        Article 6: Our Services
                      </h3>
                      <div className="mt-4 pl-2">
                        <p>Comfort Home Healthcare provides the following services in Indore, Ujjain, Dewas, Rau, and Mhow:</p>
                        <ul className="list-disc pl-6 mt-2 space-y-2">
                          <li><Link href="/services/care-taker" className="text-[#007B8A] hover:underline" aria-label="Care Taker For Patient">Care Taker For Patient</Link> - Assistance with daily living activities.</li>
                          <li><Link href="/services/home-nursing" className="text-[#007B8A] hover:underline" aria-label="Home Nursing Services">Home Nursing Services</Link> - Professional nursing care at home.</li>
                          <li><Link href="/services/elder-care" className="text-[#007B8A] hover:underline" aria-label="Elder Care Services At Home">Elder Care Services At Home</Link> - Support for seniors with companionship.</li>
                          <li><Link href="/services/paralysis-care" className="text-[#007B8A] hover:underline" aria-label="Nursing Care of Paralysis Patient">Nursing Care of Paralysis Patient</Link> - Specialized care for paralysis patients.</li>
                          <li><Link href="/services/baby-care" className="text-[#007B8A] hover:underline" aria-label="New Born Baby And Japa Care">New Born Baby And Japa Care</Link> - Care for newborns and mothers.</li>
                          <li><Link href="/services/post-operative-care" className="text-[#007B8A] hover:underline" aria-label="Post Operative Nursing Care">Post Operative Nursing Care</Link> - Post-surgical recovery support.</li>
                          <li><Link href="/services/physiotherapy" className="text-[#007B8A] hover:underline" aria-label="Physiotherapy At Home">Physiotherapy At Home</Link> - Mobility and pain management services.</li>
                        </ul>
                      </div>
                    </div>

                    {/* Article 7: Contact Information */}
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 border-l-4 border-[#007B8A] pl-4" id="contact-information">
                        Article 7: Contact Information
                      </h3>
                      <div className="mt-4 bg-slate-50 p-6 rounded-lg border border-gray-200">
                        <h4 className="font-bold text-[#007B8A]">Data Protection Officer</h4>
                        <address className="not-italic mt-2 text-gray-700">
                          Comfort Home Healthcare<br />
                          B-07, Flat No. 704, Palash Parisar<br />
                          Silicon City, Indore – 452012<br />
                          Madhya Pradesh, India<br />
                          Phone: <a href="tel:+919479365137" className="text-[#007B8A] hover:underline" aria-label="Call support line">+91-9479365137</a> (24/7 Helpline)<br />
                          Email: <a href="mailto:comforthomehealthcaree@gmail.com" className="text-[#007B8A] hover:underline" aria-label="Email Data Protection Officer">comforthomehealthcaree@gmail.com</a><br />
                          Hours: Monday-Sunday, 8:00 AM - 8:00 PM
                        </address>
                        <p className="mt-4 text-sm text-gray-600">
                          For any privacy-related concerns or to exercise your rights, please contact our Data Protection Officer with your request and valid identification.
                        </p>
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
