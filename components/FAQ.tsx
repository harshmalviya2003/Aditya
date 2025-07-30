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
      question: "What services does The Florence Nightingale Home Care Agency provide?",
      answer: "We offer comprehensive home care services including personal care, companionship, medical support, dementia and Alzheimer's care, respite care, and post-hospital recovery. Our services are tailored to meet individual needs, from a few hours a day to 24/7 care."
    },
    {
      question: "Are your caregivers licensed and trained?",
      answer: "Yes, all our caregivers are thoroughly screened, licensed, and professionally trained. They undergo background checks, skills assessments, and continuous training. Our team includes registered nurses and certified nursing assistants with specialized home healthcare training."
    },
    {
      question: "How quickly can you start providing care services?",
      answer: "We understand care needs can be urgent. We can typically start care within 24-48 hours of the initial consultation. For emergencies, same-day service is often available depending on the care required and caregiver availability."
    },
    {
      question: "What are your rates and payment options?",
      answer: "Rates vary based on the level of care and hours needed. We provide transparent pricing with no hidden fees and accept private pay, long-term care insurance, and work with some healthcare funding programs to offer flexible payment options."
    },
    {
      question: "Can family members be involved in the care planning process?",
      answer: "Absolutely! We encourage family involvement in creating and updating care plans. We believe in a team approach and provide regular updates to ensure the best possible outcomes for your loved one."
    },
    {
      question: "Do you provide care for specific medical conditions?",
      answer: "Yes, our team is experienced in caring for individuals with various conditions like diabetes, heart disease, stroke recovery, dementia, and post-surgical needs. Caregivers receive condition-specific training to ensure expert support."
    },
  ];

  return (
    <section className="py-10 sm:py-10 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900">
            Your Questions,<span className="text-[#007B8A]"> Answered</span>
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            Find answers to common questions about our services, caregivers, and how we support your family.
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
                <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Why Trust Our Care?</h2>
                <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">We provide more than just services; we deliver peace of mind.</p>
            </div>
            <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
                <div className="p-6">
                    <Shield className="w-12 h-12 text-[#007B8A] mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-gray-900">Certified & Screened</h3>
                    <p className="mt-2 text-gray-600">All caregivers are licensed, insured, and thoroughly background-checked.</p>
                </div>
                <div className="p-6">
                    <Heart className="w-12 h-12 text-[#007B8A] mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-gray-900">Compassionate Staff</h3>
                    <p className="mt-2 text-gray-600">Our team is chosen for their empathy and dedication to dignified care.</p>
                </div>
                <div className="p-6">
                    <Users className="w-12 h-12 text-[#007B8A] mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-gray-900">Personalized Plans</h3>
                    <p className="mt-2 text-gray-600">We create custom care plans that are tailored to your unique needs.</p>
                </div>
            </div>
        </div>

      </div>
    </section>
  );
};

export default FAQ;
