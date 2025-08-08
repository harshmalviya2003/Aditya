'use client';

import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const TermsOfService = () => {
  return (
    <div className="bg-white">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative pt-28 pb-16 bg-gradient-to-b from-teal-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900">
                Terms of <span className="text-[#007B8A]">Service</span>
              </h1>
              <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
                Effective Date: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
              </p>
            </div>
          </div>
        </section>

        {/* Document-style Terms */}
        <section className="py-12 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200">
              {/* Document Header */}
              <div className="bg-[#007B8A] p-6 text-center">
                <h2 className="text-2xl font-bold text-white">COMFORT HOME HEALTHCARE</h2>
                <p className="text-white/90 mt-1">TERMS OF SERVICE AGREEMENT</p>
              </div>

              {/* Document Content */}
              <div className="p-8 md:p-10">
                <div className="prose prose-lg text-gray-700 max-w-none">
                  <div className="mb-8 border-b pb-6">
                    <p className="text-right text-sm text-gray-500">Document Ref: CHH/TOS/2024</p>
                    <p className="text-justify">
                      These Terms of Service ("Terms") govern your use of Comfort Home Healthcare's services and website. By accessing or using our services, you agree to be bound by these Terms. If you disagree with any part, you may not access our services.
                    </p>
                  </div>

                  <div className="space-y-8">
                    {/* Section 1 */}
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 border-l-4 border-[#007B8A] pl-4">1. SERVICES PROVIDED</h3>
                      <div className="mt-4 pl-2">
                        <p>Comfort Home Healthcare provides the following services:</p>
                        <ul className="list-disc pl-6 mt-2 space-y-2">
                          <li>In-home nursing care and medical services</li>
                          <li>Elderly care and assistance with daily living</li>
                          <li>Post-operative and rehabilitation care</li>
                          <li>Medical equipment provisioning</li>
                          <li>Health monitoring and medication management</li>
                        </ul>
                        <p className="mt-3 text-sm text-gray-600">
                          Services are provided by qualified professionals based on medical assessment and care plans.
                        </p>
                      </div>
                    </div>

                    {/* Section 2 */}
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 border-l-4 border-[#007B8A] pl-4">2. USER RESPONSIBILITIES</h3>
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

                    {/* Section 3 */}
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 border-l-4 border-[#007B8A] pl-4">3. PAYMENT TERMS</h3>
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

                    {/* Section 4 */}
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 border-l-4 border-[#007B8A] pl-4">4. CANCELLATION POLICY</h3>
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
                          To cancel or reschedule, please call our support line at least 24 hours in advance.
                        </p>
                      </div>
                    </div>

                    {/* Section 5 */}
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 border-l-4 border-[#007B8A] pl-4">5. LIABILITY DISCLAIMERS</h3>
                      <div className="mt-4 pl-2 space-y-4">
                        <div className="p-4 bg-red-50 rounded-lg border border-red-100">
                          <h4 className="font-bold text-red-700">Medical Disclaimer</h4>
                          <p className="mt-1 text-sm text-red-600">
                            Our services complement but do not replace professional medical advice. Always consult with a qualified physician for medical conditions.
                          </p>
                        </div>
                        <p>
                          Comfort Home Healthcare shall not be liable for:
                        </p>
                        <ul className="list-disc pl-6 space-y-2">
                          <li>Complications arising from pre-existing conditions</li>
                          <li>Non-compliance with prescribed care plans</li>
                          <li>Events beyond our reasonable control</li>
                          <li>Unauthorized modifications to treatment plans</li>
                        </ul>
                      </div>
                    </div>

                    {/* Section 6 */}
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 border-l-4 border-[#007B8A] pl-4">6. GOVERNING LAW</h3>
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

                    {/* Section 7 */}
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 border-l-4 border-[#007B8A] pl-4">7. CONTACT INFORMATION</h3>
                      <div className="mt-4 pl-2">
                        <div className="bg-slate-50 p-6 rounded-lg border border-gray-200">
                          <h4 className="font-bold text-[#007B8A]">For service-related inquiries:</h4>
                          <address className="not-italic mt-2 text-gray-700">
                            Comfort Home Healthcare<br />
                            B-07, 704, Palash Parisar <br />
Silicon City, Indore – 452012 <br />
Madhya Pradesh, India <br />
                            Phone: +91-9479365137 (24/7 Helpline)<br />
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
                  <p className="text-xs text-gray-500">© {new Date().getFullYear()} Comfort Home Healthcare. All rights reserved.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default TermsOfService;