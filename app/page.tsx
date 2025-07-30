import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Blog from '@/components/Blog';
import CTABanner from '@/components/CTABanner';
import FAQ from '@/components/FAQ';
import Testimonials from '@/components/Testimonials';

export default function Home() {
  return (
    <div>
      <Header />
      <main>
        <Hero />
        <Services />
        <CTABanner />
        <Testimonials />
        <Blog />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}