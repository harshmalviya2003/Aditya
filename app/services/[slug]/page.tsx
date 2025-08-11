

import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Header from '@/components/home/Header';
import Footer from '@/components/home/Footer';
import { getServiceById, services } from '@/data/services';
import { Heart, Users, CheckCircle, Phone, Star, ArrowRight } from 'lucide-react';
import Image from 'next/image';

interface ServicePageProps {
  params: {
    slug: string;
  };
}

export default function ServicePage({ params }: ServicePageProps) {
  const service = getServiceById(params.slug);

  if (!service) {
    notFound();
  }
  
  const relatedServices = services.filter(s => s.id !== service.id).slice(0, 3);

  return (
    <div className="bg-white">
      <main>
        {/* Hero Section */}
        <section className="py-8 sm:py-24 bg-gradient-to-br from-teal-50 via-white to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-base font-semibold text-[#007B8A]">Care Service</p>
                <h1 className="mt-2 text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
                  {service.title}
                </h1>
                <p className="mt-4 text-lg text-gray-600 leading-relaxed">
                  {service.fullDescription}
                </p>
                  
                <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <a
                    href={`https://wa.me/+919876543210?text=${encodeURIComponent(`Hello, I want to request the "${service.title}" service`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center bg-[#4CAF50] text-white px-8 py-3.5 rounded-lg font-semibold hover:bg-[#3e8e41] transition-colors shadow-lg"
                  >
                    Request This Service
                  </a>
                   <a href="tel:+919479365137" className="inline-flex items-center justify-center bg-white border-2 border-teal-200 text-teal-800 px-8 py-3.5 rounded-lg font-semibold hover:bg-teal-50 transition-colors">
                    <Phone className="mr-2 w-5 h-5" />
                    Call for Info
                  </a>
                </div>
              </div>
              <div className="relative h-96 lg:h-[500px]">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="rounded-2xl shadow-2xl object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Detailed Content & Features Section */}
        <section className="py-20 sm:py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-3 gap-12">
                {/* Left Column: Detailed Content */}
                <div className="lg:col-span-2">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Approach to {service.title}</h2>
                    <div className="prose prose-lg text-gray-600 max-w-none">
                        {service.content.map((section, index) => (
                            <div key={index} className="mb-6">
                                <h3 className="font-semibold text-gray-800">{section.heading}</h3>
                                <p>{section.content}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right Column: Key Features */}
                <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
                    <h3 className="text-xl font-bold text-gray-900 mb-6">What's Included</h3>
                    <ul className="space-y-4">
                        {service.features.map((feature, index) => (
                            <li key={index} className="flex items-start">
                                <CheckCircle className="w-5 h-5 text-[#4CAF50] mr-3 mt-0.5 flex-shrink-0" />
                                <span className="text-gray-700">{feature}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>

        {/* Related Services */}
        <section className="py-20 sm:py-24 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900">Explore Other Services</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
               {relatedServices.map((relatedService) => (
                <div key={relatedService.id} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <h3 className="text-lg font-bold text-gray-900">{relatedService.title}</h3>
                    <p className="mt-2 text-sm text-gray-600 line-clamp-2 flex-grow">{relatedService.description}</p>
                    <Link href={`/services/${relatedService.id}`} className="mt-4 inline-flex items-center text-sm font-semibold text-[#007B8A] hover:text-teal-700">
                        Learn More <ArrowRight className="ml-1 w-4 h-4" />
                    </Link>
                </div>
               ))}
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}

export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.id,
  }));
}
