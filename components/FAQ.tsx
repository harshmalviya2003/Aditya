'use client';

import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ = () => {
  const [openItems, setOpenItems] = useState<number[]>([0]);

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const faqData: FAQItem[] = [
    {
      question: "What services does The Florence Nightingale Home Care Agency provide?",
      answer: "We offer comprehensive home care services including personal care assistance, companionship services, medical care support, dementia and Alzheimer's care, respite care, and post-hospital recovery care. Our services are tailored to meet individual needs and can range from a few hours a day to 24/7 care."
    },
    {
      question: "Are your caregivers licensed and trained?",
      answer: "Yes, all our caregivers are thoroughly screened, licensed, and professionally trained. They undergo background checks, skills assessments, and ongoing training programs. Our medical staff includes registered nurses and certified nursing assistants with specialized training in home healthcare."
    },
    {
      question: "How quickly can you start providing care services?",
      answer: "We understand that care needs can be urgent. In most cases, we can begin providing care within 24-48 hours of your initial consultation. For emergency situations, we offer same-day service availability depending on the type of care required and caregiver availability."
    },
    {
      question: "What are your rates and payment options?",
      answer: "Our rates vary depending on the type and level of care required, duration of service, and scheduling needs. We accept private pay, long-term care insurance, and work with some healthcare funding programs. We provide transparent pricing with no hidden fees and offer flexible payment options."
    },
    {
      question: "Can family members be involved in the care planning process?",
      answer: "Absolutely! We encourage family involvement in developing and updating care plans. We provide regular updates on your loved one's condition and welcome family input. Our goal is to work as a team with families to ensure the best possible care outcomes."
    },
    {
      question: "Do you provide care for specific medical conditions?",
      answer: "Yes, we have specialized experience caring for individuals with various conditions including diabetes, heart disease, stroke recovery, dementia, Alzheimer's disease, Parkinson's disease, and post-surgical care. Our caregivers receive specific training for different medical conditions and work closely with healthcare providers."
    },
    {
      question: "What happens if our regular caregiver is unavailable?",
      answer: "We maintain a team of qualified backup caregivers to ensure continuity of care. If your regular caregiver is unavailable due to illness or vacation, we'll arrange for a replacement caregiver who is familiar with your care plan and preferences. We strive to minimize disruptions to your routine."
    },
    {
      question: "How do you ensure the safety and security of clients?",
      answer: "Safety is our top priority. All caregivers undergo thorough background checks and reference verification. We have strict protocols for medication management, fall prevention, and emergency response. Our caregivers are trained in first aid and CPR, and we maintain 24/7 supervisor availability for any concerns."
    }
  ];

  return (
    <section className="py-20 bg-[#A2E3E2]/10">
      <div className="max-w-4xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-[#007B8A]/10 px-4 py-2 rounded-full mb-6">
            <HelpCircle className="w-4 h-4 text-[#007B8A] mr-2" />
            <span className="text-sm font-medium text-[#007B8A]">Frequently Asked Questions</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Your Questions
            <span className="text-[#007B8A]"> Answered</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Find answers to common questions about our home care services, 
            caregivers, and how we can support your family's needs.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqData.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100"
            >
              <button
                onClick={() => toggleItem(index)}
                className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-[#A2E3E2]/20 rounded-2xl transition-colors duration-200"
              >
                <h3 className="text-lg font-semibold text-gray-900 pr-4">
                  {item.question}
                </h3>
                <div className="flex-shrink-0">
                  {openItems.includes(index) ? (
                    <ChevronUp className="w-6 h-6 text-[#007B8A]" />
                  ) : (
                    <ChevronDown className="w-6 h-6 text-[#007B8A]" />
                  )}
                </div>
              </button>
              
              {openItems.includes(index) && (
                <div className="px-8 pb-6">
                  <div className="border-t border-[#007B8A]/20 pt-4">
                    <p className="text-gray-600 leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="text-center mt-12 p-8 bg-[#007B8A]/5 rounded-2xl border border-[#007B8A]/10">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Still Have Questions?
          </h3>
          <p className="text-gray-600 mb-6">
            Our care coordinators are here to help you understand our services and find the perfect care solution.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+919876543210"
              className="inline-flex items-center justify-center bg-[#4CAF50] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#3e8e41] transition-colors duration-200 shadow-md hover:shadow-lg"
            >
              Call Us: +91 98765 43210
            </a>
            <a
              href="mailto:info@florencenightingalecare.com"
              className="inline-flex items-center justify-center border-2 border-[#007B8A] text-[#007B8A] px-6 py-3 rounded-lg font-semibold hover:bg-[#007B8A] hover:text-white transition-colors duration-200"
            >
              Email Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;