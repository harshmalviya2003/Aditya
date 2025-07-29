'use client';

import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, MessageCircle } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
    urgency: 'routine'
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: '',
        urgency: 'routine'
      });
    }, 3000);
  };

  return (
    <div>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-white via-[#A2E3E2]/30 to-[#A2E3E2]/50">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center">
              <div className="inline-flex items-center bg-[#007B8A]/10 px-4 py-2 rounded-full mb-6">
                <MessageCircle className="w-4 h-4 text-[#007B8A] mr-2" />
                <span className="text-sm font-medium text-[#007B8A]">Get In Touch</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
                Contact Our
                <span className="text-[#007B8A] block">Care Team</span>
              </h1>
              
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Ready to start your care journey? Our experienced team is here to answer your questions, 
                discuss your needs, and create a personalized care plan for your family.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Form & Info */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Contact Information */}
              <div className="lg:col-span-1 space-y-8">
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">
                    Let's <span className="text-[#007B8A]">Connect</span>
                  </h2>
                  <p className="text-gray-600 leading-relaxed mb-8">
                    We're available 24/7 for emergencies and offer flexible consultation times 
                    to accommodate your schedule. Reach out to us through any of these channels.
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-[#007B8A]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-[#007B8A]" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Phone</h3>
                      <p className="text-gray-600 mb-2">+91 98765 43210</p>
                      <p className="text-sm text-gray-500">24/7 Emergency Line</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-[#007B8A]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-[#007B8A]" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                      <p className="text-gray-600 mb-2">info@florencenightingalecare.com</p>
                      <p className="text-sm text-gray-500">Response within 2 hours</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-[#007B8A]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-[#007B8A]" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Office Address</h3>
                      <p className="text-gray-600 mb-2">
                        123 Medical Square,<br />
                        Vijay Nagar, Indore,<br />
                        Madhya Pradesh 452010
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-[#007B8A]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-[#007B8A]" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Office Hours</h3>
                      <p className="text-gray-600 mb-1">Mon-Fri: 8:00 AM - 6:00 PM</p>
                      <p className="text-gray-600 mb-2">Sat-Sun: 9:00 AM - 4:00 PM</p>
                      <p className="text-sm text-gray-500">24/7 Care Services Available</p>
                    </div>
                  </div>
                </div>

                {/* Emergency Notice */}
                <div className="bg-red-50 border border-red-200 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-red-800 mb-2">Emergency Care</h3>
                  <p className="text-red-700 text-sm mb-3">
                    For immediate care needs or emergencies, please call our 24/7 helpline.
                  </p>
                  <a
                    href="tel:+919876543210"
                    className="inline-flex items-center bg-red-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-red-700 transition-colors duration-200 text-sm"
                  >
                    <Phone className="w-4 h-4 mr-2" />
                    Call Emergency Line
                  </a>
                </div>
              </div>

              {/* Contact Form */}
              <div className="lg:col-span-2">
                <div className="bg-gradient-to-br from-white to-[#A2E3E2]/20 p-8 rounded-2xl shadow-lg border border-gray-100">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">
                    Request a Free Consultation
                  </h2>
                  
                  {isSubmitted ? (
                    <div className="text-center py-12">
                      <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <CheckCircle className="w-8 h-8 text-[#4CAF50]" />
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">Thank You!</h3>
                      <p className="text-gray-600 mb-4">
                        We've received your message and will contact you within 2 hours.
                      </p>
                      <p className="text-sm text-gray-500">
                        For immediate assistance, please call +91 98765 43210
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                            Full Name *
                          </label>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#007B8A] focus:border-transparent transition-colors duration-200"
                            placeholder="Enter your full name"
                          />
                        </div>

                        <div>
                          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                            Phone Number *
                          </label>
                          <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#007B8A] focus:border-transparent transition-colors duration-200"
                            placeholder="+91 98765 43210"
                          />
                        </div>
                      </div>

                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#007B8A] focus:border-transparent transition-colors duration-200"
                          placeholder="your.email@example.com"
                        />
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                            Service Needed
                          </label>
                          <select
                            id="service"
                            name="service"
                            value={formData.service}
                            onChange={handleChange}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#007B8A] focus:border-transparent transition-colors duration-200"
                          >
                            <option value="">Select a service</option>
                            <option value="personal-care">Personal Care Services</option>
                            <option value="companionship">Companionship Services</option>
                            <option value="medical-care">Medical Care Support</option>
                            <option value="dementia-care">Dementia & Alzheimer's Care</option>
                            <option value="respite-care">Respite Care</option>
                            <option value="post-hospital">Post-Hospital Care</option>
                            <option value="consultation">General Consultation</option>
                          </select>
                        </div>

                        <div>
                          <label htmlFor="urgency" className="block text-sm font-medium text-gray-700 mb-2">
                            Urgency Level
                          </label>
                          <select
                            id="urgency"
                            name="urgency"
                            value={formData.urgency}
                            onChange={handleChange}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#007B8A] focus:border-transparent transition-colors duration-200"
                          >
                            <option value="routine">Routine (within 48 hours)</option>
                            <option value="urgent">Urgent (within 24 hours)</option>
                            <option value="emergency">Emergency (immediate)</option>
                          </select>
                        </div>
                      </div>

                      <div>
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                          Tell us about your needs
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          rows={5}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#007B8A] focus:border-transparent transition-colors duration-200"
                          placeholder="Please describe your care needs, any specific requirements, medical conditions, or questions you have..."
                        />
                      </div>

                      <button
                        type="submit"
                        className="w-full bg-[#007B8A] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#005f6b] transition-colors duration-200 flex items-center justify-center"
                      >
                        <Send className="w-5 h-5 mr-2" />
                        Send Message
                      </button>

                      <p className="text-sm text-gray-500 text-center">
                        By submitting this form, you agree to our privacy policy and terms of service. 
                        We'll contact you within 2 hours during business hours.
                      </p>
                    </form>
                  )}
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