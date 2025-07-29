"use client"
import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Camera, Heart, Users, Home, Phone, ArrowRight } from 'lucide-react';

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const galleryImages = [
    {
      id: 1,
      src: "https://images.pexels.com/photos/7551428/pexels-photo-7551428.jpeg?auto=compress&cs=tinysrgb&w=800",
      alt: "Caregiver assisting elderly patient with daily activities",
      category: "Personal Care"
    },
    {
      id: 2,
      src: "https://images.pexels.com/photos/7551667/pexels-photo-7551667.jpeg?auto=compress&cs=tinysrgb&w=800",
      alt: "Compassionate companionship services",
      category: "Companionship"
    },
    {
      id: 3,
      src: "https://images.pexels.com/photos/7579831/pexels-photo-7579831.jpeg?auto=compress&cs=tinysrgb&w=800",
      alt: "Medical care support at home",
      category: "Medical Care"
    },
    {
      id: 4,
      src: "https://images.pexels.com/photos/7551544/pexels-photo-7551544.jpeg?auto=compress&cs=tinysrgb&w=800",
      alt: "Specialized dementia care services",
      category: "Dementia Care"
    },
    {
      id: 5,
      src: "https://images.pexels.com/photos/7551598/pexels-photo-7551598.jpeg?auto=compress&cs=tinysrgb&w=800",
      alt: "Respite care for family caregivers",
      category: "Respite Care"
    },
    {
      id: 6,
      src: "https://images.pexels.com/photos/7579319/pexels-photo-7579319.jpeg?auto=compress&cs=tinysrgb&w=800",
      alt: "Post-hospital recovery support",
      category: "Recovery Care"
    },
    {
      id: 7,
      src: "https://images.pexels.com/photos/5722164/pexels-photo-5722164.jpeg?auto=compress&cs=tinysrgb&w=800",
      alt: "Professional nursing care at home",
      category: "Medical Care"
    },
    {
      id: 8,
      src: "https://images.pexels.com/photos/5722163/pexels-photo-5722163.jpeg?auto=compress&cs=tinysrgb&w=800",
      alt: "Elderly care and mobility assistance",
      category: "Personal Care"
    },
    {
      id: 9,
      src: "https://images.pexels.com/photos/6647019/pexels-photo-6647019.jpeg?auto=compress&cs=tinysrgb&w=800",
      alt: "Family-centered care approach",
      category: "Companionship"
    }
  ];

  const categories = ["All", "Personal Care", "Companionship", "Medical Care", "Dementia Care", "Respite Care", "Recovery Care"];

  const filteredImages = selectedCategory === 'All'
    ? galleryImages
    : galleryImages.filter(image => image.category === selectedCategory);

  return (
    <div className="min-h-screen flex flex-col bg-[#F5FAFA]">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-20 sm:py-24 bg-gradient-to-br from-[#F5FAFA] to-[#A2E3E2]/30" aria-labelledby="hero-heading">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="inline-flex items-center bg-[#007B8A]/10 px-4 sm:px-6 py-2 sm:py-3 rounded-full mb-6 sm:mb-8 shadow-lg transition-transform hover:scale-105">
                <Camera className="w-4 h-4 sm:w-5 sm:h-5 text-[#007B8A] mr-2" aria-hidden="true" />
                <span className="text-sm sm:text-lg font-medium text-[#007B8A]">Our Care Gallery</span>
              </div>
              
              <h1 id="hero-heading" className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-4 sm:mb-6">
                See Our
                <span className="text-[#007B8A] block">Care in Action</span>
              </h1>
              
              <p className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                Explore the compassionate care we provide daily. These images highlight our dedicated caregivers delivering professional, dignified care to our clients.
              </p>
            </div>
          </div>
        </section>

        {/* Gallery Grid */}
        <section className="py-20 sm:py-24 bg-[#F5FAFA]" aria-labelledby="gallery-heading">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 id="gallery-heading" className="sr-only">Care Gallery</h2>
            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-12 sm:mb-16">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 sm:px-6 py-2 sm:py-3 rounded-full font-medium text-sm sm:text-base transition-all duration-200 ${
                    selectedCategory === category
                      ? "bg-[#007B8A] text-white shadow-lg"
                      : "bg-gray-100 text-gray-700 hover:bg-[#007B8A]/10 hover:text-[#007B8A]"
                  }`}
                  aria-pressed={selectedCategory === category}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Gallery Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {filteredImages.length === 0 ? (
                <p className="text-center text-gray-600 col-span-full">No images found for this category.</p>
              ) : (
                filteredImages.map((image) => (
                  <div
                    key={image.id}
                    className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300"
                  >
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-64 sm:h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6">
                        <div className="inline-block bg-[#007B8A] text-white px-3 py-1 rounded-full text-xs sm:text-sm font-medium mb-2">
                          {image.category}
                        </div>
                        <p className="text-white text-sm sm:text-base leading-relaxed">
                          {image.alt}
                        </p>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 sm:py-24 bg-[#F5FAFA]" aria-labelledby="stats-heading">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-16">
              <h2 id="stats-heading" className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
                Our Care
                <span className="text-[#007B8A]"> Impact</span>
              </h2>
              <p className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto">
                These numbers reflect the lives we’ve touched and the difference we’ve made in our community.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg text-center transition-transform hover:scale-105">
                <div className="w-14 sm:w-16 h-14 sm:h-16 bg-[#007B8A]/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Users className="w-7 sm:w-8 h-7 sm:h-8 text-[#007B8A]" aria-hidden="true" />
                </div>
                <div className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">500+</div>
                <div className="text-gray-700 font-medium text-sm sm:text-base">Families Served</div>
              </div>
              
              <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg text-center transition-transform hover:scale-105">
                <div className="w-14 sm:w-16 h-14 sm:h-16 bg-[#007B8A]/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-7 sm:w-8 h-7 sm:h-8 text-[#007B8A]" aria-hidden="true" />
                </div>
                <div className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">50,000+</div>
                <div className="text-gray-700 font-medium text-sm sm:text-base">Hours of Care</div>
              </div>
              
              <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg text-center transition-transform hover:scale-105">
                <div className="w-14 sm:w-16 h-14 sm:h-16 bg-[#007B8A]/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Home className="w-7 sm:w-8 h-7 sm:h-8 text-[#007B8A]" aria-hidden="true" />
                </div>
                <div className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">95%</div>
                <div className="text-gray-700 font-medium text-sm sm:text-base">Prefer Home Care</div>
              </div>
              
              <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg text-center transition-transform hover:scale-105">
                <div className="w-14 sm:w-16 h-14 sm:h-16 bg-[#007B8A]/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Users className="w-7 sm:w-8 h-7 sm:h-8 text-[#007B8A]" aria-hidden="true" />
                </div>
                <div className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">50+</div>
                <div className="text-gray-700 font-medium text-sm sm:text-base">Expert Caregivers</div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 sm:py-24 bg-gradient-to-r from-[#007B8A] to-[#005F6B]" aria-labelledby="cta-heading">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 id="cta-heading" className="text-4xl sm:text-5xl font-bold text-white mb-4 sm:mb-6">
              Experience Our <span className="text-[#A2E3E2]">Compassionate Care</span>
            </h2>
            <p className="text-lg sm:text-xl text-white/90 mb-6 sm:mb-8 max-w-3xl mx-auto">
              Discover the difference our personalized care can make. Schedule a consultation or contact us to learn more about our services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center justify-center bg-[#4CAF50] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-sm sm:text-base hover:bg-[#3e8e41] transition-all shadow-lg hover:shadow-[#4CAF50]/30"
                aria-label="Schedule a visit with Florence Nightingale Home Care"
              >
                Schedule Visit
                <ArrowRight className="ml-2 w-4 sm:w-5 h-4 sm:h-5" aria-hidden="true" />
              </a>
              <a
                href="tel:+919876543210"
                className="inline-flex items-center justify-center border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-sm sm:text-base hover:bg-white hover:text-[#007B8A] transition-all"
                aria-label="Call Florence Nightingale Home Care at +91 98765 43210"
              >
                <Phone className="w-4 sm:w-5 h-4 sm:h-5 mr-2" aria-hidden="true" />
                Call: +91 98765 43210
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}