'use client';

import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, MessageSquare, X } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
    urgency: 'routine'
  });

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    // Reset form after modal is closed
    setFormData({
      name: '', email: '', phone: '', service: '', message: '', urgency: 'routine'
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

  return (
    <div className="bg-slate-50">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="py-10 md:py-20 bg-gradient-to-b from-teal-50 to-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 tracking-tight">
              Get in <span className="text-[#007B8A]">Touch With Us</span>
            </h1>
            <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
              We're here to answer your questions and help you find the perfect care solution. Reach out today to start the conversation.
            </p>
          </div>
        </section>

        {/* Contact Form & Info Section */}
        <section className="py-5 sm:py-">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
              
              {/* Left Column: Contact Info */}
              <div className="lg:col-span-2 space-y-8">
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <Phone className="w-6 h-6 text-[#007B8A] mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-900">Phone</h3>
                      <a href="tel:+919479365137" className="text-gray-600 hover:text-[#007B8A] transition-colors">+91-94793-65137</a>
                    </div>
                    <Phone className="w-6 h-6 text-[#007B8A] mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-900">Phone</h3>
                      <a href="tel:+918319226300" className="text-gray-600 hover:text-[#007B8A] transition-colors">+91 83192-26300</a>
                    </div>
                  </div>
                   <div className="flex items-start gap-4">
                    <Mail className="w-6 h-6 text-[#007B8A] mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-900">Email</h3>
                      <a href="mailto:comforthomehealthcaree@gmail.com" className="text-gray-600 hover:text-[#007B8A] transition-colors">comforthomehealthcaree@gmail.com</a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <MapPin className="w-6 h-6 text-[#007B8A] mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-900">Address</h3>
                      <p className="text-gray-600">B-07, Flat No. 704, Palash Parisar <br />
Silicon City, Indore – 452012 <br />
Madhya Pradesh, India</p>
                    </div>
                  </div>
                   <div className="flex items-start gap-4">
                    <Clock className="w-6 h-6 text-[#007B8A] mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-900">Office Hours</h3>
                      <p className="text-gray-600">Mon-Fri: 8:00 AM - 6:00 PM</p>
                      <p className="text-gray-600">Sat-Sun: 9:00 AM - 4:00 PM</p>
                    </div>
                  </div>
                </div>
                 <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg">
                    <h3 className="text-lg font-bold text-red-800">24/7 Emergency Line</h3>
                    <p className="text-red-700 mt-1">For immediate assistance, please call us anytime.</p>
                </div>
              </div>

              {/* Right Column: Form */}
              <div className="lg:col-span-3 bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Request a Free Consultation</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">Full Name *</label>
                      <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required className="w-full px-4 py-3 bg-slate-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#007B8A] focus:border-transparent" />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">Phone Number *</label>
                      <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} required className="w-full px-4 py-3 bg-slate-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#007B8A] focus:border-transparent" />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">Email Address *</label>
                    <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required className="w-full px-4 py-3 bg-slate-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#007B8A] focus:border-transparent" />
                  </div>
                  <div>
                    <label htmlFor="service" className="block text-sm font-semibold text-gray-700 mb-2">Service Needed</label>
                    <select id="service" name="service" value={formData.service} onChange={handleChange} className="w-full px-4 py-3 bg-slate-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#007B8A] focus:border-transparent">
                      <option value="">Select a service</option>
                      <option value="personal-care">Personal Care</option>
                      <option value="companionship">Companionship</option>
                      <option value="medical-care">Medical Care</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">Tell us about your needs</label>
                    <textarea id="message" name="message" value={formData.message} onChange={handleChange} rows={4} className="w-full px-4 py-3 bg-slate-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#007B8A] focus:border-transparent" />
                  </div>
                  <button type="submit" className="w-full bg-[#007B8A] text-white px-8 py-3.5 rounded-lg font-semibold hover:bg-teal-700 transition-colors flex items-center justify-center">
                    <Send className="w-5 h-5 mr-2" />
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
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3679.986687848657!2d75.8936983154275!3d22.72877963283733!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fd40c108937b%3A0x442f654b4239eabd!2sVijay%20Nagar%2C%20Indore%2C%20Madhya%20Pradesh!5e0!3m2!1sen!2sin!4v1678886478901!5m2!1sen!2sin"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Office Location"
                    ></iframe>
                 </div>
            </div>
        </section>
      </main>
      <Footer />

      {/* Submission Confirmation Modal */}
      {isModalOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm"
          onClick={closeModal}
          role="dialog"
          aria-modal="true"
        >
          <div 
            className="bg-white rounded-2xl shadow-2xl p-8 sm:p-12 text-center max-w-md m-4"
            onClick={(e) => e.stopPropagation()}
          >
            <button onClick={closeModal} className="absolute top-4 right-4 text-gray-400 hover:text-gray-600">
                <X size={24}/>
            </button>
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-9 h-9 text-green-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Thank You!</h2>
            <p className="text-gray-600 mb-6">
              Your message has been sent successfully. Our care team will contact you within the next 2 business hours.
            </p>
            <button
              onClick={closeModal}
              className="w-full bg-[#007B8A] text-white px-6 py-3 rounded-lg font-semibold hover:bg-teal-700 transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
