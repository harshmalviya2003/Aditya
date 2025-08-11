
'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Footer from '@/components/home/Footer';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, MessageSquare, X } from 'lucide-react';

// Metadata for SEO
export const metadata = {
  title: 'Contact Comfort Home Healthcare | Indore, Ujjain, Dewas, Rau, Mhow',
  description: 'Reach out to Comfort Home Healthcare for home nursing, elder care, physiotherapy, and more in Indore, Ujjain, Dewas, Rau, and Mhow. Get a free consultation today.',
  keywords: 'home healthcare Indore, home nursing services Ujjain, elder care services Dewas, patient care taker Rau, physiotherapy at home Mhow, healthcare services Indore, take care services Ujjain, elder take care Dewas, home health care Rau, nursing care paralysis patient Mhow, new born baby care Indore, Japa care Ujjain, post operative nursing Dewas, contact home healthcare',
  robots: 'index, follow',
  openGraph: {
    title: 'Contact Comfort Home Healthcare - Free Consultation',
    description: 'Connect with us for expert home nursing, elder care, and physiotherapy services in Indore, Ujjain, Dewas, Rau, and Mhow.',
    url: 'https://comforthomehealthcare.in/contact',
    type: 'website',
    images: ['https://comforthomehealthcare.in/images/contact-hero.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Comfort Home Healthcare',
    description: 'Get in touch for home healthcare services in Indore, Ujjain, Dewas, Rau, and Mhow.',
    images: ['https://comforthomehealthcare.in/images/contact-hero.jpg'],
  },
  alternates: {
    canonical: 'https://comforthomehealthcare.in/contact',
  },
};

// Schema.org structured data for LocalBusiness
const schemaData = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Comfort Home Healthcare',
  description: 'Providing home healthcare services including home nursing, elder care, and physiotherapy in Indore, Ujjain, Dewas, Rau, and Mhow.',
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

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
    urgency: 'routine',
  });

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData); // Replace with API call for actual submission
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: '',
      message: '',
      urgency: 'routine',
    });
  };

  // Effect to handle closing modal with Escape key
  React.useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        closeModal();
      }
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  // Service options for dropdown
  const services = [
    { value: 'care-taker', label: 'Care Taker For Patient', link: '/services/care-taker' },
    { value: 'home-nursing', label: 'Home Nursing Services', link: '/services/home-nursing' },
    { value: 'elder-care', label: 'Elder Care Services At Home', link: '/services/elder-care' },
    { value: 'paralysis-care', label: 'Nursing Care of Paralysis Patient', link: '/services/paralysis-care' },
    { value: 'baby-care', label: 'New Born Baby And Japa Care', link: '/services/baby-care' },
    { value: 'post-operative-care', label: 'Post Operative Nursing Care', link: '/services/post-operative-care' },
    { value: 'physiotherapy', label: 'Physiotherapy At Home', link: '/services/physiotherapy' },
  ];

  return (
    <div className="bg-slate-50">
      {/* Schema.org Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      <main>
        {/* Hero Section */}
        <section className="py-10 md:py-20 bg-gradient-to-b from-teal-50 to-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 tracking-tight">
              Get in <span className="text-[#007B8A]">Touch With Us</span>
            </h1>
            <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
              Contact Comfort Home Healthcare for home nursing, elder care, physiotherapy, and more in Indore, Ujjain, Dewas, Rau, and Mhow. Request a free consultation today.
            </p>
          </div>
        </section>

        {/* Contact Form & Info Section */}
        <section className="py-5 sm:py-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
              {/* Left Column: Contact Info */}
              <div className="lg:col-span-2 space-y-8">
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <Phone className="w-6 h-6 text-[#007B8A] mt-1 flex-shrink-0" aria-hidden="true" />
                    <div>
                      <h3 className="font-semibold text-gray-900">Phone</h3>
                      <div className="space-y-2">
                        <a
                          href="tel:+919479365137"
                          className="text-gray-600 hover:text-[#007B8A] transition-colors"
                          aria-label="Call Comfort Home Healthcare at +91-94793-65137"
                        >
                          +91-94793-65137
                        </a>
                        <br />
                        <a
                          href="tel:+918319226300"
                          className="text-gray-600 hover:text-[#007B8A] transition-colors"
                          aria-label="Call Comfort Home Healthcare at +91-83192-26300"
                        >
                          +91-83192-26300
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Mail className="w-6 h-6 text-[#007B8A] mt-1 flex-shrink-0" aria-hidden="true" />
                    <div>
                      <h3 className="font-semibold text-gray-900">Email</h3>
                      <a
                        href="mailto:comforthomehealthcaree@gmail.com"
                        className="text-gray-600 hover:text-[#007B8A] transition-colors"
                        aria-label="Email Comfort Home Healthcare"
                      >
                        comforthomehealthcaree@gmail.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <MapPin className="w-6 h-6 text-[#007B8A] mt-1 flex-shrink-0" aria-hidden="true" />
                    <div>
                      <h3 className="font-semibold text-gray-900">Address</h3>
                      <p className="text-gray-600">
                        B-07, Flat No. 704, Palash Parisar
                        <br />
                        Silicon City, Indore – 452012
                        <br />
                        Madhya Pradesh, India
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Clock className="w-6 h-6 text-[#007B8A] mt-1 flex-shrink-0" aria-hidden="true" />
                    <div>
                      <h3 className="font-semibold text-gray-900">Office Hours</h3>
                      <p className="text-gray-600">Mon-Fri: 8:00 AM - 6:00 PM</p>
                      <p className="text-gray-600">Sat-Sun: 9:00 AM - 4:00 PM</p>
                    </div>
                  </div>
                </div>
                <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg">
                  <h3 className="text-lg font-bold text-red-800">24/7 Emergency Line</h3>
                  <p className="text-red-700 mt-1">
                    For immediate assistance in Indore, Ujjain, Dewas, Rau, or Mhow, call us anytime.
                  </p>
                  <a
                    href="tel:+919479365137"
                    className="text-red-700 hover:text-red-800 transition-colors font-semibold"
                    aria-label="Call 24/7 emergency line"
                  >
                    +91-94793-65137
                  </a>
                </div>
              </div>

              {/* Right Column: Form */}
              <div className="lg:col-span-3 bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Request a Free Consultation</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-slate-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#007B8A] focus:border-transparent"
                        aria-label="Enter your full name"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-slate-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#007B8A] focus:border-transparent"
                        aria-label="Enter your phone number"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-slate-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#007B8A] focus:border-transparent"
                      aria-label="Enter your email address"
                    />
                  </div>
                  <div>
                    <label htmlFor="service" className="block text-sm font-semibold text-gray-700 mb-2">
                      Service Needed
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-slate-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#007B8A] focus:border-transparent"
                      aria-label="Select a healthcare service"
                    >
                      <option value="">Select a service</option>
                      {services.map((service) => (
                        <option key={service.value} value={service.value}>
                          {service.label}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                      Tell us about your needs
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className="w-full px-4 py-3 bg-slate-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#007B8A] focus:border-transparent"
                      aria-label="Describe your healthcare needs"
                    />
                  </div>
                  <div>
                    <label htmlFor="urgency" className="block text-sm font-semibold text-gray-700 mb-2">
                      Urgency
                    </label>
                    <select
                      id="urgency"
                      name="urgency"
                      value={formData.urgency}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-slate-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#007B8A] focus:border-transparent"
                      aria-label="Select urgency of your request"
                    >
                      <option value="routine">Routine</option>
                      <option value="urgent">Urgent</option>
                      <option value="emergency">Emergency</option>
                    </select>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-[#007B8A] text-white px-8 py-3.5 rounded-lg font-semibold hover:bg-teal-700 transition-colors flex items-center justify-center"
                    aria-label="Submit inquiry for home healthcare services"
                  >
                    <Send className="w-5 h-5 mr-2" aria-hidden="true" />
                    Send Inquiry
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="rounded-2xl overflow-hidden shadow-lg h-96">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3679.7484961584926!2d75.84729247504197!3d22.73665352718057!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396302787d8bfc5f%3A0x5bd4d36c4479f749!2sSilicon%20City%2C%20Indore%2C%20Madhya%20Pradesh%20452012!5e0!3m2!1sen!2sin!4v1691503436405!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Comfort Home Healthcare location in Silicon City, Indore"
              ></iframe>
            </div>
          </div>
        </section>
      </main>

      {/* Submission Confirmation Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm"
          onClick={closeModal}
          role="dialog"
          aria-modal="true"
          aria-label="Form submission confirmation"
        >
          <div
            className="bg-white rounded-2xl shadow-2xl p-8 sm:p-12 text-center max-w-md m-4"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
              aria-label="Close confirmation modal"
            >
              <X size={24} />
            </button>
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-9 h-9 text-green-600" aria-hidden="true" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Thank You!</h2>
            <p className="text-gray-600 mb-6">
              Your message has been sent successfully. Our care team will contact you within 2 business hours for services in Indore, Ujjain, Dewas, Rau, or Mhow.
            </p>
            <button
              onClick={closeModal}
              className="w-full bg-[#007B8A] text-white px-6 py-3 rounded-lg font-semibold hover:bg-teal-700 transition-colors"
              aria-label="Close confirmation modal"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
