import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { getServiceById, services } from '@/data/services';
import { Heart, Users, Stethoscope, Brain, Clock, Activity, ArrowRight, CheckCircle, Phone, Star } from 'lucide-react';

const iconMap = {
  Heart,
  Users,
  Stethoscope,
  Brain,
  Clock,
  Activity
};

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

  const IconComponent = iconMap[service.icon as keyof typeof iconMap];
  const relatedServices = services.filter(s => s.id !== service.id).slice(0, 3);

  return (
    <div>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-white via-blue-50 to-[#5B97C6]/10">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="space-y-6">
                  <div className="inline-flex items-center bg-[#5B97C6]/10 px-4 py-2 rounded-full">
                    {IconComponent && <IconComponent className="w-4 h-4 text-[#5B97C6] mr-2" />}
                    <span className="text-sm font-medium text-[#5B97C6]">Professional Care Service</span>
                  </div>
                  
                  <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                    {service.title}
                  </h1>
                  
                  <p className="text-xl text-gray-600 leading-relaxed">
                    {service.fullDescription}
                  </p>
                  
                  {service.price && (
                    <div className="bg-[#5B97C6]/5 p-4 rounded-xl border border-[#5B97C6]/10">
                      <p className="text-lg font-semibold text-[#5B97C6]">{service.price}</p>
                    </div>
                  )}
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center bg-[#5B97C6] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#4a82b3] transition-colors duration-200"
                  >
                    Request This Service
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                  <a
                    href="tel:+919876543210"
                    className="inline-flex items-center justify-center border-2 border-[#5B97C6] text-[#5B97C6] px-8 py-4 rounded-lg font-semibold hover:bg-[#5B97C6] hover:text-white transition-colors duration-200"
                  >
                    <Phone className="mr-2 w-5 h-5" />
                    Call Now
                  </a>
                </div>
              </div>
              
              <div className="relative">
                <img
                  src={service.image}
                  alt={service.title}
                  className="rounded-2xl shadow-2xl w-full h-[500px] object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Service Features */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
                  What's <span className="text-[#5B97C6]">Included</span>
                </h2>
                <div className="space-y-4">
                  {service.features.map((feature, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                      </div>
                      <p className="text-gray-600 leading-relaxed">{feature}</p>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-[#5B97C6]/5 to-white p-8 rounded-2xl border border-[#5B97C6]/10">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Why Choose Our Service?</h3>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-[#5B97C6]/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Star className="w-5 h-5 text-[#5B97C6]" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Expert Caregivers</h4>
                      <p className="text-gray-600 text-sm">All our caregivers are professionally trained and experienced in this specific type of care.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-[#5B97C6]/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Heart className="w-5 h-5 text-[#5B97C6]" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Personalized Approach</h4>
                      <p className="text-gray-600 text-sm">Every care plan is customized to meet individual needs and preferences.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-[#5B97C6]/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Clock className="w-5 h-5 text-[#5B97C6]" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Flexible Scheduling</h4>
                      <p className="text-gray-600 text-sm">Care services available when you need them, from a few hours to 24/7 support.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Related Services */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Other <span className="text-[#5B97C6]">Services</span>
              </h2>
              <p className="text-lg text-gray-600">
                Explore our other professional care services
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedServices.map((relatedService) => {
                const RelatedIconComponent = iconMap[relatedService.icon as keyof typeof iconMap];
                
                return (
                  <div
                    key={relatedService.id}
                    className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
                  >
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-[#5B97C6]/10 rounded-xl flex items-center justify-center mr-4">
                        {RelatedIconComponent && <RelatedIconComponent className="w-6 h-6 text-[#5B97C6]" />}
                      </div>
                      <h3 className="text-lg font-bold text-gray-900">{relatedService.title}</h3>
                    </div>
                    
                    <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                      {relatedService.description}
                    </p>
                    
                    <Link
                      href={`/services/${relatedService.id}`}
                      className="inline-flex items-center text-[#5B97C6] font-semibold hover:text-[#4a82b3] transition-colors duration-200 text-sm"
                    >
                      Learn More
                      <ArrowRight className="ml-1 w-4 h-4" />
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-[#5B97C6]">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Begin Care?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Contact us today to discuss your needs and schedule a free consultation. 
              Our care coordinators will work with you to create the perfect care plan.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center bg-white text-[#5B97C6] px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
              >
                Schedule Consultation
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <a
                href="tel:+919876543210"
                className="inline-flex items-center justify-center border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-[#5B97C6] transition-colors duration-200"
              >
                <Phone className="mr-2 w-5 h-5" />
                +91 98765 43210
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.id,
  }));
}