'use client';

import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const PrivacyPolicy = () => {
  return (
    <div className="bg-white">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative pt-28 pb-16 bg-gradient-to-b from-teal-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900">
                Privacy <span className="text-[#007B8A]">Policy</span>
              </h1>
              <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
                Effective Date: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
              </p>
            </div>
          </div>
        </section>

        {/* Document-style Privacy Policy */}
        <section className="py-12 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200">
              {/* Document Header */}
              <div className="bg-[#007B8A] p-6 text-center">
                <h2 className="text-2xl font-bold text-white">COMFORT HOME HEALTHCARE</h2>
                <p className="text-white/90 mt-1">PRIVACY POLICY DOCUMENT</p>
              </div>

              {/* Document Content */}
              <div className="p-8 md:p-10">
                <div className="prose prose-lg text-gray-700 max-w-none">
                  <div className="mb-8 border-b pb-6">
                    <p className="text-right text-sm text-gray-500">Document Ref: CHH/PP/2024</p>
                    <p className="text-justify">
                      This Privacy Policy ("Policy") describes how Comfort Home Healthcare ("Company", "we", "us", or "our") collects, uses, discloses, and protects the personal information of our patients, their families, and visitors to our website. By accessing our services or website, you consent to the practices described herein.
                    </p>
                  </div>

                  <div className="space-y-8">
                    {/* Article 1 */}
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 border-l-4 border-[#007B8A] pl-4">ARTICLE 1: DEFINITIONS</h3>
                      <ol className="list-decimal pl-6 mt-4 space-y-2">
                        <li><strong>Personal Data:</strong> Any information relating to an identified or identifiable individual.</li>
                        <li><strong>Processing:</strong> Any operation performed on Personal Data.</li>
                        <li><strong>Data Subject:</strong> The individual to whom Personal Data relates.</li>
                        <li><strong>Consent:</strong> Freely given, specific, informed and unambiguous indication of agreement.</li>
                      </ol>
                    </div>

                    {/* Article 2 */}
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 border-l-4 border-[#007B8A] pl-4">ARTICLE 2: DATA COLLECTION</h3>
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

                    {/* Article 3 */}
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 border-l-4 border-[#007B8A] pl-4">ARTICLE 3: DATA PROCESSING PRINCIPLES</h3>
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
                          <p className="text-sm mt-1">Adequate, relevant and limited to necessities</p>
                        </div>
                        <div className="bg-slate-50 p-4 rounded-lg border border-gray-200">
                          <h4 className="font-bold text-[#007B8A]">Storage Limitation</h4>
                          <p className="text-sm mt-1">Kept only as long as necessary</p>
                        </div>
                      </div>
                    </div>

                    {/* Article 4 */}
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 border-l-4 border-[#007B8A] pl-4">ARTICLE 4: DATA SUBJECT RIGHTS</h3>
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

                    {/* Article 5 */}
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 border-l-4 border-[#007B8A] pl-4">ARTICLE 5: SECURITY MEASURES</h3>
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

                    {/* Article 6 */}
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 border-l-4 border-[#007B8A] pl-4">ARTICLE 6: CONTACT INFORMATION</h3>
                      <div className="mt-4 bg-slate-50 p-6 rounded-lg border border-gray-200">
                        <h4 className="font-bold text-[#007B8A]">Data Protection Officer</h4>
                        <address className="not-italic mt-2 text-gray-700">
                        B-07, 704, Palash Parisar <br />
                        Silicon City, Indore – 452012 <br />
                        Madhya Pradesh, India <br />
                          Email: comforthomehealthcaree@gmail.com<br />
                          Phone: +91-9479365137 (Mon-Sun, 9AM-5PM)
                        </address>
                        <p className="mt-4 text-sm text-gray-600">
                          For any privacy-related concerns or to exercise your rights, please contact our DPO with your request and valid identification.
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

export default PrivacyPolicy;