
'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Calendar, User, Clock, ArrowRight, BookOpen, Tag } from 'lucide-react';
import Image from 'next/image';
import { getRecentBlogs } from '@/data/blogs';

// Define Blog interface
interface Blog {
  id: string;
  title: string;
  excerpt: string;
  content: {
    heading: string;
    description: string;
  }[];
  author: string;
  authorAvatar: string;
  date: string;
  readTime: string;
  image: string;
  category: string;
  tags: string[];
}

// Metadata for SEO
export const metadata = {
  title: 'Comfort Home Healthcare Blog | Health & Care Insights for Indore, Ujjain, Dewas, Rau, Mhow',
  description: 'Explore expert advice on home nursing, elder care, physiotherapy, and more from Comfort Home Healthcare, serving Indore, Ujjain, Dewas, Rau, and Mhow.',
  keywords: 'home healthcare Indore, home nursing services Ujjain, elder care services Dewas, patient care taker Rau, physiotherapy at home Mhow, healthcare services Indore, take care services Ujjain, elder take care Dewas, home health care Rau, nursing care paralysis patient Mhow, new born baby care Indore, Japa care Ujjain, post operative nursing Dewas, home health care services, professional nursing at home, senior care at home, baby care services, rehabilitation at home',
  robots: 'index, follow',
  openGraph: {
    title: 'Comfort Home Healthcare Blog - Health & Care Insights',
    description: 'Expert tips on home nursing, elder care, and physiotherapy for families in Indore, Ujjain, Dewas, Rau, and Mhow.',
    url: 'https://comforthomehealthcare.in/blog',
    type: 'website',
    images: ['https://comforthomehealthcare.in/images/blog-hero.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Comfort Home Healthcare Blog - Health Insights',
    description: 'Trusted advice on home healthcare services in Indore, Ujjain, Dewas, Rau, and Mhow.',
    images: ['https://comforthomehealthcare.in/images/blog-hero.jpg'],
  },
  alternates: {
    canonical: 'https://comforthomehealthcare.in/blog',
  },
};

// Schema.org structured data for Blog
const schemaData = (blogs: Blog[]) => ({
  '@context': 'https://schema.org',
  '@type': 'Blog',
  name: 'Comfort Home Healthcare Blog',
  description: 'Expert insights on home healthcare, including home nursing, elder care, and physiotherapy in Indore, Ujjain, Dewas, Rau, and Mhow.',
  url: 'https://comforthomehealthcare.in/blog',
  publisher: {
    '@type': 'Organization',
    name: 'Comfort Home Healthcare',
    logo: {
      '@type': 'ImageObject',
      url: 'https://comforthomehealthcare.in/images/logo.jpg',
    },
  },
  blogPost: blogs.map((blog) => ({
    '@type': 'BlogPosting',
    headline: blog.title,
    description: blog.excerpt,
    author: {
      '@type': 'Person',
      name: blog.author,
    },
    datePublished: blog.date,
    image: blog.image,
    url: `https://comforthomehealthcare.in/blog/${blog.id}`,
    keywords: blog.tags.join(', '),
  })),
});

// Service categories
const serviceCategories = [
  'All',
  'Home Nursing',
  'Elder Care',
  'Physiotherapy',
  'Paralysis Care',
  'New Born Baby Care',
  'Post Operative Care',
  'Care Taker',
];

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
  };

  // Fetch blogs
  const blogs: Blog[] = getRecentBlogs(100);
  const categories: string[] = Array.from(new Set([...serviceCategories, ...blogs.map((blog: Blog) => blog.category)]));
  const sortedBlogs: Blog[] = [...blogs].sort((a: Blog, b: Blog) => new Date(b.date).getTime() - new Date(a.date).getTime());
  const filteredBlogs: Blog[] = selectedCategory === 'All'
    ? sortedBlogs
    : sortedBlogs.filter((blog: Blog) => blog.category === selectedCategory);

  return (
    <div className="bg-slate-50">
      {/* Schema.org Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData(blogs)) }}
      />

      {/* Hero Section */}
      <section className="py-10 md:py-20 bg-gradient-to-b from-teal-50 to-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 tracking-tight">
            Our Health & Care <span className="text-[#007B8A]">Insights</span>
          </h1>
          <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
            Stay informed with expert advice on home nursing, elder care, physiotherapy, and more from Comfort Home Healthcare, serving Indore, Ujjain, Dewas, Rau, and Mhow.
          </p>
        </div>
      </section>

      {/* Blog Grid with Filters */}
      <section className="bg-slate-50 border-t border-slate-200 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filter */}
          <div className="mb-8 flex flex-wrap gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors ${
                  selectedCategory === category ? 'bg-[#007B8A] text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
                aria-label={`Filter blogs by ${category}`}
              >
                {category}
              </button>
            ))}
          </div>
          {/* Blog Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredBlogs.length > 0 ? (
              filteredBlogs.map((blog: Blog) => (
                <article
                  key={blog.id}
                  className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col group"
                >
                  <Link href={`/blog/${blog.id}`} className="block overflow-hidden">
                    <Image
                      src={blog.image}
                      alt={`${blog.title} - ${blog.category} in ${
                        blog.tags.includes('Indore') ? 'Indore' : blog.tags.includes('Ujjain') ? 'Ujjain' : 'Central India'
                      }`}
                      width={400}
                      height={225}
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </Link>
                  <div className="p-6 flex-grow flex flex-col">
                    <p className="text-xs font-semibold text-[#007B8A] uppercase">
                      <Link
                        href={`/services/${blog.category.toLowerCase().replace(/\s+/g, '-')}`}
                        className="hover:underline"
                        aria-label={`Explore ${blog.category} services`}
                      >
                        {blog.category}
                      </Link>
                    </p>
                    <h3 className="mt-2 text-lg font-bold text-gray-900 flex-grow line-clamp-2">
                      <Link href={`/blog/${blog.id}`} className="hover:text-[#007B8A] transition-colors">
                        {blog.title}
                      </Link>
                    </h3>
                    <p className="mt-2 text-sm text-gray-600 line-clamp-3">{blog.excerpt}</p>
                    <div className="mt-4 pt-4 border-t border-gray-100 flex items-center justify-between">
                      <div className="flex items-center text-sm text-gray-500">
                        <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center mr-2">
                          <User className="w-4 h-4 text-[#007B8A]" aria-hidden="true" />
                        </div>
                        <span>{blog.author}</span>
                      </div>
                      <Link
                        href={`/blog/${blog.id}`}
                        className="text-sm font-semibold text-[#007B8A] flex items-center group-hover:text-teal-700"
                        aria-label={`Read blog post: ${blog.title}`}
                      >
                        Read <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                      </Link>
                    </div>
                    <div className="mt-2 flex items-center text-sm text-gray-500">
                      <Calendar className="w-4 h-4 mr-1" aria-hidden="true" />
                      <span>{formatDate(blog.date)}</span>
                      <Clock className="w-4 h-4 ml-4 mr-1" aria-hidden="true" />
                      <span>{blog.readTime}</span>
                    </div>
                  </div>
                </article>
              ))
            ) : (
              <p className="text-center text-gray-600 col-span-full">No blogs found for this category.</p>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
