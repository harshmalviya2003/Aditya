import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Camera, Heart, Users, Home } from 'lucide-react';

export default function Gallery() {
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

  return (
    <div>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-white via-blue-50 to-[#5B97C6]/10">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center">
              <div className="inline-flex items-center bg-[#5B97C6]/10 px-4 py-2 rounded-full mb-6">
                <Camera className="w-4 h-4 text-[#5B97C6] mr-2" />
                <span className="text-sm font-medium text-[#5B97C6]">Our Care Gallery</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
                See Our
                <span className="text-[#5B97C6] block">Care in Action</span>
              </h1>
              
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Take a glimpse into the compassionate care we provide every day. These images showcase 
                our dedicated caregivers in action, providing professional, dignified care to our clients.
              </p>
            </div>
          </div>
        </section>

        {/* Gallery Grid */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            {/* Category Filter - placeholder for future functionality */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {categories.map((category) => (
                <button
                  key={category}
                  className={`px-6 py-2 rounded-full font-medium transition-colors duration-200 ${
                    category === "All" 
                      ? "bg-[#5B97C6] text-white" 
                      : "bg-gray-100 text-gray-600 hover:bg-[#5B97C6]/10 hover:text-[#5B97C6]"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Gallery Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {galleryImages.map((image) => (
                <div
                  key={image.id}
                  className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <div className="inline-block bg-[#5B97C6] text-white px-3 py-1 rounded-full text-sm font-medium mb-2">
                        {image.category}
                      </div>
                      <p className="text-white text-sm leading-relaxed">
                        {image.alt}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Our Care
                <span className="text-[#5B97C6]"> Impact</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                These numbers reflect the lives we've touched and the difference we've made in our community.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
                <div className="w-16 h-16 bg-[#5B97C6]/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-[#5B97C6]" />
                </div>
                <div className="text-4xl font-bold text-gray-900 mb-2">500+</div>
                <div className="text-gray-600 font-medium">Families Served</div>
              </div>
              
              <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
                <div className="w-16 h-16 bg-[#5B97C6]/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-[#5B97C6]" />
                </div>
                <div className="text-4xl font-bold text-gray-900 mb-2">50,000+</div>
                <div className="text-gray-600 font-medium">Hours of Care</div>
              </div>
              
              <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
                <div className="w-16 h-16 bg-[#5B97C6]/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Home className="w-8 h-8 text-[#5B97C6]" />
                </div>
                <div className="text-4xl font-bold text-gray-900 mb-2">95%</div>
                <div className="text-gray-600 font-medium">Prefer Home Care</div>
              </div>
              
              <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
                <div className="w-16 h-16 bg-[#5B97C6]/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-[#5B97C6]" />
                </div>
                <div className="text-4xl font-bold text-gray-900 mb-2">50+</div>
                <div className="text-gray-600 font-medium">Expert Caregivers</div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-[#5B97C6] to-[#4a82b3]">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Experience Our Care Yourself
            </h2>
            <p className="text-xl text-white/90 mb-8">
              See firsthand the difference our compassionate care can make. Schedule a consultation 
              to learn more about our services and meet our caregivers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center justify-center bg-white text-[#5B97C6] px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
              >
                Schedule Visit
              </a>
              <a
                href="tel:+919876543210"
                className="inline-flex items-center justify-center border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-[#5B97C6] transition-colors duration-200"
              >
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