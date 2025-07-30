'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { blogs } from '@/data/blogs';
import { Calendar, User, Clock, ArrowRight, BookOpen, Tag } from 'lucide-react';
import Image from 'next/image';

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
  };

  const categories = ['All', ...Array.from(new Set(blogs.map(blog => blog.category)))];
  const sortedBlogs = blogs.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  const featuredBlog = sortedBlogs[0];
  const otherBlogs = sortedBlogs.slice(0);

  const filteredBlogs = selectedCategory === 'All'
    ? otherBlogs
    : otherBlogs.filter(blog => blog.category === selectedCategory);

  return (
    <div className="bg-slate-50">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="py-10 md:py-20 bg-gradient-to-b from-teal-50 to-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 tracking-tight">
              Our Health & Care <span className="text-[#007B8A]">Insights</span>
            </h1>
            <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
              Stay informed with expert advice, caregiving tips, and wellness articles from our professional team.
            </p>
          </div>
        </section>

        {/* Blog Grid with Filters */}
        <section className=" bg-slate-50 border-t border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredBlogs.map((blog) => (
                <article key={blog.id} className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col group">
                  <Link href={`/blog/${blog.id}`} className="block overflow-hidden">
                    <Image src={blog.image} alt={blog.title} width={400} height={225} className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105" />
                  </Link>
                  <div className="p-6 flex-grow flex flex-col">
                    <p className="text-xs font-semibold text-[#007B8A] uppercase">{blog.category}</p>
                    <h3 className="mt-2 text-lg font-bold text-gray-900 flex-grow line-clamp-2">
                      <Link href={`/blog/${blog.id}`} className="hover:text-[#007B8A] transition-colors">{blog.title}</Link>
                    </h3>
                    <div className="mt-4 pt-4 border-t border-gray-100 flex items-center justify-between">
                      <div className="flex items-center text-sm text-gray-500">
                        <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center mr-2">
                          <User className="w-4 h-4 text-[#007B8A]" />
                        </div>                      
                        <span>Home Care Agency</span>
                      </div>
                      <Link href={`/blog/${blog.id}`} className="text-sm font-semibold text-[#007B8A] flex items-center group-hover:text-teal-700">
                        Read <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
