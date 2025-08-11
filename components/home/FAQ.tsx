'use client';

import React, { useState } from 'react';
import { HelpCircle, Phone, Mail, ChevronDown, Heart, Shield, Users } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ = () => {
  // Allow only one item to be open at a time, or none.
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleItem = (index: number) => {
    // If the clicked item is already open, close it. Otherwise, open the new item.
    setOpenIndex(prevIndex => (prevIndex === index ? null : index));
  };

  const faqData: FAQItem[] = [
    {
      question: "What home care services does Comfort Health Home provide in Indore, Rau, Mhow, Ujjain, and Dewas?",
      answer: "Comfort Health Home offers comprehensive home care services in Indore, Rau, Mhow, Ujjain, and Dewas, including caretaker services, home nursing, elder care, paralysis care, newborn and Japa care, post-operative care, and physiotherapy. Our services are tailored to meet individual needs, providing personalized care from a few hours to 24/7 support."
    },
    {
      question: "Are Comfort Health Home’s caregivers trained for home care in Indore and nearby areas?",
      answer: "Yes, all caregivers at Comfort Health Home are licensed, thoroughly screened, and professionally trained to provide top-quality home care in Indore, Rau, Mhow, Ujjain, and Dewas. They undergo rigorous background checks, skills assessments, and ongoing training to ensure exceptional care for conditions like paralysis, post-operative recovery, and elder care."
    },
    {
      question: "How quickly can Comfort Health Home start home care services in Ujjain or Dewas?",
      answer: "Comfort Health Home can typically begin home care services in Ujjain, Dewas, Indore, Mhow, or Rau within 24-48 hours after the initial consultation. For urgent cases, same-day home care services may be available depending on the specific care needs and caregiver availability."
    },
    {
      question: "What are the rates for home nursing and physiotherapy by Comfort Health Home in Indore?",
      answer: "Rates for home nursing and physiotherapy at Comfort Health Home in Indore, Rau, Mhow, Ujjain, and Dewas vary based on care level and hours required. We offer transparent pricing with no hidden fees, accepting private pay, long-term care insurance, and select healthcare funding programs for flexible payment options."
    },
    {
      question: "Can families in Rau or Ujjain participate in creating care plans with Comfort Health Home?",
      answer: "Absolutely, Comfort Health Home encourages family involvement in care planning for clients in Rau, Mhow, Ujjain, Indore, and Dewas. We collaborate with families to create and update personalized care plans, ensuring regular updates and a team-based approach for the best outcomes."
    },
    {
      question: "Does Comfort Health Home provide specialized care for conditions like paralysis in Dewas?",
      answer: "Yes, Comfort Health Home specializes in home care for conditions such as paralysis, diabetes, stroke recovery, and post-surgical needs in Dewas, Indore, Rau, Mhow, and Ujjain. Our caregivers receive condition-specific training to deliver expert, compassionate care tailored to each client’s needs."
    },
  ];

  return (
    <section className="py-10 sm:py-10 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900">
            Your Questions About Home Care in Indore, Rau, Mhow, Ujjain, and Dewas,<span className="text-[#007B8A]"> Answered</span>
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            Learn more about Comfort Health Home’s services, caregivers, and how we support families with personalized care in Indore, Rau, Mhow, Ujjain, and Dewas.
          </p>
        </div>

        {/* Modern Accordion */}
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg border border-gray-100">
          {faqData.map((item, index) => (
            <div key={index} className="border-b border-gray-200 last:border-b-0">
              <button
                onClick={() => toggleItem(index)}
                className="w-full flex justify-between items-center p-6 text-left"
              >
                <h3 className="text-lg font-semibold text-gray-800">
                  {item.question}
                </h3>
                <div className="flex-shrink-0 ml-4">
                  <ChevronDown
                    className={`w-6 h-6 text-[#007B8A] transition-transform duration-300 ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                  />
                </div>
              </button>
              {/* Animated Answer Panel */}
              <div
                className={`grid transition-all duration-500 ease-in-out ${
                  openIndex === index ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                }`}
              >
                <div className="overflow-hidden">
                  <p className="px-6 pb-6 text-gray-600 leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Why Choose Us Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
            <div className="text-center">
                <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Why Trust Comfort Health Home?</h2>
                <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">We deliver exceptional home care in Indore, Rau, Mhow, Ujjain, and Dewas, ensuring peace of mind for your family.</p>
            </div>
            <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
                <div className="p-6">
                    <Shield className="w-12 h-12 text-[#007B8A] mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-gray-900">Certified & Screened</h3>
                    <p className="mt-2 text-gray-600">All caregivers are licensed, insured, and thoroughly background-checked for trusted care in Indore and beyond.</p>
                </div>
                <div className="p-6">
                    <Heart className="w-12 h-12 text-[#007B8A] mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-gray-900">Compassionate Staff</h3>
                    <p className="mt-2 text-gray-600">Our team is chosen for their empathy and dedication to dignified home care in Rau, Mhow, Ujjain, and Dewas.</p>
                </div>
                <div className="p-6">
                    <Users className="w-12 h-12 text-[#007B8A] mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-gray-900">Personalized Plans</h3>
                    <p className="mt-2 text-gray-600">We create custom care plans tailored to your unique needs in Indore, Rau, Mhow, Ujjain, and Dewas.</p>
                </div>
            </div>
        </div>

      </div>
    </section>
  );
};

export default FAQ;