"use client"
import React, { useState, useEffect } from 'react';
import Header from '@/components/home/Header';
import Footer from '@/components/home/Footer';
import { Camera, Phone, ArrowRight, Search, X, ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';

// Define a type for a single gallery image for type safety and reusability.
interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  category: string;
}

export default function Gallery() {
  // Explicitly type the state. 'selectedImage' can be a GalleryImage object or null.
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  // Apply the GalleryImage type to the array of images.
  const galleryImages: GalleryImage[] = [
    { id: 1, src: "https://images.pexels.com/photos/7551428/pexels-photo-7551428.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", alt: "Caregiver assisting elderly patient with daily activities", category: "Personal Care" },
    { id: 2, src: "https://images.pexels.com/photos/7551667/pexels-photo-7551667.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", alt: "Compassionate companionship services", category: "Companionship" },
    { id: 3, src: "https://images.pexels.com/photos/7579831/pexels-photo-7579831.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", alt: "Medical care support at home", category: "Medical Care" },
    { id: 4, src: "https://images.pexels.com/photos/7551544/pexels-photo-7551544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", alt: "Specialized dementia care services", category: "Dementia Care" },
    { id: 5, src: "https://images.pexels.com/photos/7551598/pexels-photo-7551598.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", alt: "Respite care for family caregivers", category: "Respite Care" },
    { id: 6, src: "https://images.pexels.com/photos/7579319/pexels-photo-7579319.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", alt: "Post-hospital recovery support", category: "Recovery Care" },
    { id: 7, src: "https://images.pexels.com/photos/5722164/pexels-photo-5722164.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", alt: "Professional nursing care at home", category: "Medical Care" },
    { id: 8, src: "https://images.pexels.com/photos/5722163/pexels-photo-5722163.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", alt: "Elderly care and mobility assistance", category: "Personal Care" },
    { id: 9, src: "https://images.pexels.com/photos/6647019/pexels-photo-6647019.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", alt: "Family-centered care approach", category: "Companionship" },
  ];

  const categories = ["All", "Personal Care", "Companionship", "Medical Care", "Dementia Care", "Respite Care", "Recovery Care"];

  const filteredImages = selectedCategory === 'All'
    ? galleryImages
    : galleryImages.filter(image => image.category === selectedCategory);

  // Type the 'image' parameter with the GalleryImage interface.
  const openModal = (image: GalleryImage) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };
  
  // Type the 'image' parameter with the GalleryImage interface.
  const findImageIndex = (image: GalleryImage) => filteredImages.findIndex(img => img.id === image.id);

  const showNextImage = () => {
    if (selectedImage) {
      const currentIndex = findImageIndex(selectedImage);
      const nextIndex = (currentIndex + 1) % filteredImages.length;
      setSelectedImage(filteredImages[nextIndex]);
    }
  };

  const showPrevImage = () => {
    if (selectedImage) {
      const currentIndex = findImageIndex(selectedImage);
      const prevIndex = (currentIndex - 1 + filteredImages.length) % filteredImages.length;
      setSelectedImage(filteredImages[prevIndex]);
    }
  };

  // Keyboard navigation for modal
  useEffect(() => {
    // Type the event 'e' as a KeyboardEvent.
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedImage) {
        if (e.key === 'ArrowRight') showNextImage();
        if (e.key === 'ArrowLeft') showPrevImage();
        if (e.key === 'Escape') closeModal();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImage, filteredImages, showNextImage, showPrevImage, closeModal]);



  return (
    <div className="bg-slate-50">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-10 sm:py-20 bg-gradient-to-b from-teal-50 to-slate-50" aria-labelledby="hero-heading">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 id="hero-heading" className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 tracking-tight">
              A Glimpse Into Our <span className="text-[#007B8A]">Care</span>
            </h1>
            <p className="mt-6 max-w-3xl mx-auto text-lg text-gray-600">
              Explore moments of compassion, professionalism, and dedication. Our gallery showcases our caregivers providing exceptional care in the comfort of our clients' homes.
            </p>
          </div>
        </section>

        {/* Gallery Grid Section */}
        <section className="py-10 sm:py-20" aria-labelledby="gallery-heading">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Masonry Grid */}
            <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
              {filteredImages.map((image) => (
                <div
                  key={image.id}
                  className="group relative overflow-hidden rounded-2xl shadow-md cursor-pointer break-inside-avoid"
                  onClick={() => openModal(image)}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={500}
                    height={750}
                    className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                      <div>
                          <p className="text-white text-base font-semibold">{image.category}</p>
                          <p className="text-sm text-slate-200">{image.alt}</p>
                      </div>
                  </div>
                </div>
              ))}
            </div>
            {filteredImages.length === 0 && (
                <p className="text-center text-gray-600 col-span-full mt-8">No images found for this category.</p>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 sm:py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-gradient-to-r from-[#007B8A] to-teal-600 rounded-2xl p-12 text-center text-white">
                    <h2 className="text-3xl font-bold">See the Difference Compassionate Care Makes</h2>
                    <p className="mt-4 max-w-2xl mx-auto">Ready to discuss your family's needs? Our team is here to provide answers and support.</p>
                    <a href="/contact" className="mt-8 inline-block bg-white text-[#007B8A] px-8 py-3.5 rounded-lg font-bold text-base hover:bg-gray-100 transition-all transform hover:scale-105 shadow-xl">
                        Schedule a Free Consultation
                    </a>
                </div>
            </div>
        </section>
      </main>
      <Footer />

      {/* Lightbox Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm animate-fade-in"
          onClick={closeModal}
        >
          {/* Type the event 'e' as a MouseEvent to use stopPropagation */}
          <div className="relative w-full h-full max-w-4xl max-h-[90vh]" onClick={(e: React.MouseEvent) => e.stopPropagation()}>
            {/* Close Button */}
            <button onClick={closeModal} className="absolute -top-12 right-0 sm:right-0 md:-right-12 text-white bg-black/50 rounded-full p-2 hover:bg-black/80 transition-colors" aria-label="Close">
              <X size={24} />
            </button>
            
            {/* Image */}
            <Image
              src={selectedImage.src}
              alt={selectedImage.alt}
              fill
              className="object-contain"
              quality={100}
            />

            {/* Prev Button */}
            <button onClick={showPrevImage} className="absolute left-0 sm:-left-16 top-1/2 -translate-y-1/2 text-white bg-black/50 rounded-full p-2 hover:bg-black/80 transition-colors" aria-label="Previous image">
              <ChevronLeft size={32} />
            </button>

            {/* Next Button */}
            <button onClick={showNextImage} className="absolute right-0 sm:-right-16 top-1/2 -translate-y-1/2 text-white bg-black/50 rounded-full p-2 hover:bg-black/80 transition-colors" aria-label="Next image">
              <ChevronRight size={32} />
            </button>

             {/* Image Info */}
             <div className="absolute bottom-[-60px] left-0 right-0 text-center text-white p-4 bg-black/30">
                <p className="font-semibold">{selectedImage.category}</p>
                <p className="text-sm text-slate-300">{selectedImage.alt}</p>
            </div>
          </div>
        </div>
      )}
      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-fade-in {
          animation: fade-in 0.3s ease-out;
        }
      `}</style>
    </div>
  );
}
