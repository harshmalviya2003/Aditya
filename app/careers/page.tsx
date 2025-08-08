'use client';

import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Phone, Clock, User, Home, Heart, MessageCircle } from 'lucide-react';

const Careers = () => {
  const vacancies = [
    {
      title: "Care Taker For Patient",
      type: "Full-time",
      location: "Indore",
      description: "Provide skilled nursing care to elderly patients in their homes, administer medications, and monitor health conditions.",
      requirements: [
        "GNM/B.Sc Nursing degree",
        "Valid nursing license",
        "Experience in geriatric care",
        "Compassionate and patient"
      ],
      contact: "+91-9479365137",
      whatsapp: "+919479365137"
    },
    {
      title: "Home Nursing Services",
      type: "Full-time/Part-time",
      location: "Indore, Ujjain",
      description: "Assist patients with daily living activities, personal care, and light household tasks.",
      requirements: [
        "10th/12th pass (Healthcare certification preferred)",
        "Experience in patient care",
        "Good communication skills",
        "Physically fit"
      ],
      contact: "+91-8319226300",
      whatsapp: "+918319226300"
    },
    {
      title: "Elder Care Services At Home",
      type: "Part-time",
      location: "Indore",
      description: "Provide mobility therapy and pain management to patients recovering from injuries or surgeries.",
      requirements: [
        "BPT degree",
        "Valid license to practice",
        "Experience in home care settings",
        "Knowledge of elderly care techniques"
      ],
      contact: "+91-9479365137",
      whatsapp: "+919479365137"
    },
    {
      title: "Post Operative Nursing Care At Home",
      type: "Full-time",
      location: "Indore",
      description: "Manage patient schedules, coordinate between caregivers and families, and ensure service quality.",
      requirements: [
        "Graduate in any discipline",
        "Healthcare admin experience",
        "Excellent organizational skills",
        "Proficient in Hindi and English"
      ],
      contact: "+91-8319226300",
      whatsapp: "+918319226300"
    }
  ];

  const benefits = [
    {
      icon: Heart,  
      title: "Medical Insurance",
      description: "Comprehensive health coverage for all full-time staff"
    },
    {
      icon: Clock,
      title: "Flexible Shifts",
      description: "Options for day/night shifts based on your preference"
    },
    {
      icon: User,
      title: "Training Programs",
      description: "Regular skill development and certification courses"
    },
    {
      icon: Heart,
      title: "Rewarding Work",
      description: "Make a real difference in patients' lives every day"
    }
  ];

  return (
    <div className="bg-white">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative pt-28 pb-16 bg-gradient-to-b from-teal-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900">
                Join Our <span className="text-[#007B8A]">Care Team</span>
              </h1>
              <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
                Build a meaningful career with Comfort Home Healthcare while making a difference in people's lives
              </p>
            </div>
          </div>
        </section>

        {/* Current Openings */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
                Current <span className="text-[#007B8A]">Job Openings</span>
              </h2>
              <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
                We're looking for compassionate professionals to join our growing team
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {vacancies.map((job, index) => (
                <div key={index} className="bg-slate-50/70 rounded-2xl border border-gray-200/80 p-8 hover:shadow-lg transition-shadow duration-300">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">{job.title}</h3>
                      <div className="flex flex-wrap gap-2 mt-2">
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-[#007B8A]/10 text-[#007B8A]">
                          {job.type}
                        </span>
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                          {job.location}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6">
                    <h4 className="font-medium text-gray-900">Job Description:</h4>
                    <p className="mt-2 text-gray-600">{job.description}</p>
                  </div>

                  <div className="mt-6">
                    <h4 className="font-medium text-gray-900">Requirements:</h4>
                    <ul className="mt-2 space-y-2 text-gray-600">
                      {job.requirements.map((req, i) => (
                        <li key={i} className="flex items-start">
                          <svg className="h-5 w-5 text-[#007B8A] mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-8 space-y-3">
                    <a 
                      href={`tel:${job.contact}`}
                      className="inline-flex items-center justify-center w-full bg-[#007B8A] text-white px-6 py-3 rounded-lg font-semibold hover:bg-teal-700 transition-colors duration-200"
                    >
                      <Phone className="w-5 h-5 mr-2" />
                      Call Now: {job.contact}
                    </a>
                    <a 
                      href={`https://wa.me/${job.whatsapp}?text=Hello%20Comfort%20Home%20Healthcare,%20I'm%20interested%20in%20applying%20for%20the%20${encodeURIComponent(job.title)}%20position`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center w-full bg-[#25D366] text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-600 transition-colors duration-200"
                    >
                      <MessageCircle className="w-5 h-5 mr-2" />
                      WhatsApp Now
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
                Why Work With <span className="text-[#007B8A]">Comfort Home Healthcare</span>
              </h2>
              <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
                We value our team members and provide benefits that support your growth and wellbeing
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white p-8 rounded-2xl border border-gray-200/80 text-center hover:shadow-lg transition-shadow duration-300">
                  <div className="mx-auto w-16 h-16 bg-[#007B8A]/10 rounded-full flex items-center justify-center">
                    <benefit.icon className="w-8 h-8 text-[#007B8A]" />
                  </div>
                  <h3 className="mt-6 text-xl font-bold text-gray-900">{benefit.title}</h3>
                  <p className="mt-2 text-gray-600">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="bg-[#007B8A]">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="text-center text-white">
              <h2 className="text-3xl font-bold">Have Questions About Careers?</h2>
              <p className="mt-4 max-w-2xl mx-auto">
                Our HR team is available to discuss opportunities and guide you through the application process
              </p>
              <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
                <a 
                  href="tel:+919479365137" 
                  className="inline-flex items-center justify-center bg-white text-[#007B8A] px-8 py-3.5 rounded-lg font-bold hover:bg-gray-100 transition-all shadow-lg"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call HR: +91 94793 65137
                </a>
                <a 
                  href="https://wa.me/+919479365137?text=Hello%20Comfort%20Home%20Healthcare,%20I%20have%20a%20question%20about%20career%20opportunities"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center bg-[#25D366] text-white px-8 py-3.5 rounded-lg font-bold hover:bg-green-600 transition-all shadow-lg"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  WhatsApp HR
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Careers;