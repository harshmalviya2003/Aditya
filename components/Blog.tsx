'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { getRecentBlogs } from '@/data/blogs';
import { Calendar, Clock, ArrowRight, BookOpen, ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';

const Blog = () => {
  const recentBlogs = getRecentBlogs(6);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
  };

  const checkScrollability = () => {
    const el = scrollContainerRef.current;
    if (el) {
      // Check if there's content to scroll to the left
      setCanScrollLeft(el.scrollLeft > 1);
      // Check if there's content to scroll to the right
      const isAtEnd = Math.abs(el.scrollWidth - el.clientWidth - el.scrollLeft) < 1;
      setCanScrollRight(!isAtEnd);
    }
  };

  useEffect(() => {
    const el = scrollContainerRef.current;
    if (el) {
      checkScrollability(); // Initial check
      el.addEventListener('scroll', checkScrollability, { passive: true });
      const resizeObserver = new ResizeObserver(checkScrollability);
      resizeObserver.observe(el);
      
      return () => {
        el.removeEventListener('scroll', checkScrollability);
        resizeObserver.unobserve(el);
      };
    }
  }, [recentBlogs]);

  const scroll = (direction: 'left' | 'right') => {
    const container = scrollContainerRef.current;
    if (container) {
      // Find the first card to measure its width for a precise scroll
      const card = container.querySelector('.blog-card') as HTMLElement;
      if (card) {
        const scrollAmount = card.offsetWidth; // Get the full width of one card
        container.scrollBy({
          left: direction === 'left' ? -scrollAmount : scrollAmount,
          behavior: 'smooth',
        });
      }
    }
  };

  return (
    <section className="py-20 sm:py-24 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 px-4">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight">
            Latest Insights & <span className="text-[#007B8A]"> Care Tips </span>
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            Stay informed with expert advice and the latest developments in home healthcare from our professional team.
          </p>
        </div>

        {/* Blog Carousel with wrapper for arrows */}
        <div className="relative px-4 sm:px-10 lg:px-12">
          {/* Left Arrow */}
          {canScrollLeft && (
            <button 
              onClick={() => scroll('left')}
              className="hidden lg:flex absolute top-1/2 -left-2 -translate-y-1/2 z-10 w-12 h-12 bg-white rounded-full shadow-lg items-center justify-center text-gray-700 hover:bg-slate-100 transition-all"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
          )}

          <div 
            ref={scrollContainerRef}
            className="flex overflow-x-auto scroll-smooth scrollbar-hide snap-x snap-mandatory"
          >
            {recentBlogs.map((blog) => (
              // The 'blog-card' class is used by the scroll function to measure width
              <div key={blog.id} className="blog-card flex-shrink-0 w-full md:w-1/2 lg:w-1/3 snap-start px-2 sm:px-3">
                <article className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 h-full flex flex-col group">
                  <Link href={`/blog/${blog.id}`} className="block overflow-hidden">
                    <Image
                      src={blog.image}
                      alt={blog.title}
                      width={400}
                      height={225}
                      className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </Link>
                  
                  <div className="p-6 flex-grow flex flex-col">
                    <div className="mb-3">
                      <span className="bg-[#007B8A]/10 text-[#007B8A] px-3 py-1 rounded-full text-xs font-semibold">
                        {blog.category}
                      </span>
                    </div>
                    
                    <h3 className="text-lg font-bold text-gray-900 mb-4 flex-grow line-clamp-3">
                      <Link href={`/blog/${blog.id}`} className="hover:text-[#007B8A] transition-colors">
                        {blog.title}
                      </Link>
                    </h3>

                    <div className="text-xs text-gray-500 flex items-center space-x-3 mb-4">
                      <span className="flex items-center"><Calendar className="w-3.5 h-3.5 mr-1.5"/> {formatDate(blog.date)}</span>
                      <span className="flex items-center"><Clock className="w-3.5 h-3.5 mr-1.5"/> {blog.readTime}</span>
                    </div>
                    
                    <div className="mt-auto pt-4 border-t border-gray-100 flex items-center justify-between">
                      <div className="flex items-center">
                        <Image src={blog.authorAvatar} alt={blog.author} width={32} height={32} className="w-8 h-8 rounded-full mr-2"/>
                        <span className="text-sm font-medium text-gray-700">{blog.author}</span>
                      </div>
                      <Link href={`/blog/${blog.id}`} className="text-sm font-semibold text-[#007B8A] flex items-center group-hover:text-[#4CAF50] transition-colors">
                        Read More <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1"/>
                      </Link>
                    </div>
                  </div>
                </article>
              </div>
            ))}
          </div>

          {/* Right Arrow */}
          {canScrollRight && (
            <button
              onClick={() => scroll('right')}
              className="hidden lg:flex absolute top-1/2 -right-2 -translate-y-1/2 z-10 w-12 h-12 bg-white rounded-full shadow-lg items-center justify-center text-gray-700 hover:bg-slate-100 transition-all"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          )}
        </div>

        {/* View All Button */}
        <div className="text-center mt-16">
          <Link
            href="/blog"
            className="inline-flex items-center bg-[#4CAF50] text-white px-8 py-3.5 rounded-lg font-semibold hover:bg-[#3e8e41] transition-transform hover:scale-105 shadow-md"
          >
            View All Articles
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Blog;
