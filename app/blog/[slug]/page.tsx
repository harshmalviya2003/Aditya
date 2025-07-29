

import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { getBlogById, blogs } from '@/data/blogs';
import { Calendar, User, Clock, ArrowLeft, Tag, Share2, Twitter, Facebook, Linkedin, Phone } from 'lucide-react';
import Image from 'next/image';

interface BlogPageProps {
  params: {
    slug: string;
  };
}

export default function BlogPage({ params }: BlogPageProps) {
  const blog = getBlogById(params.slug);

  if (!blog) {
    notFound();
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
  };

  const relatedBlogs = blogs.filter(b => b.id !== blog.id && b.category === blog.category).slice(0, 3);

  return (
    <div className="bg-white">
      <Header />
      <main>
        {/* Article Content Section */}
        <section className="py-16 sm:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:grid lg:grid-cols-12 lg:gap-8">

              {/* Main Content */}
              <div className="lg:col-span-8">
                {/* Breadcrumbs and Title */}
                <div className="mb-8">
                  <Link href="/blog" className="text-sm font-semibold text-[#007B8A] hover:text-teal-700">
                    &larr; Back to Blog
                  </Link>
                  <p className="mt-4 text-base font-semibold text-[#007B8A] uppercase">{blog.category}</p>
                  <h1 className="mt-2 text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight">
                    {blog.title}
                  </h1>
                </div>

                {/* Author and Metadata */}
                <div className="flex items-center gap-x-6 gap-y-3 text-sm text-gray-600 pb-8 border-b border-gray-200">
                  <div className="flex items-center">
                    <Image src={blog.authorAvatar} alt={blog.author} width={40} height={40} className="w-10 h-10 rounded-full mr-3" />
                    <div>
                        <p className="font-semibold text-gray-800">By {blog.author}</p>
                        <p className="text-xs">Healthcare Expert</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span>{formatDate(blog.date)}</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-2" />
                    <span>{blog.readTime}</span>
                  </div>
                </div>

                {/* Smaller, Integrated Image */}
                <div className="my-8">
                    <Image src={blog.image} alt={blog.title} width={1200} height={675} className="w-full h-auto object-cover rounded-2xl shadow-lg" />
                </div>
                
                {/* Structured Content Body */}
                <div className="prose prose-lg max-w-none prose-headings:font-bold prose-headings:text-gray-900 prose-p:text-gray-700 prose-a:text-[#007B8A] hover:prose-a:text-teal-700 prose-strong:text-gray-800">
                   {blog.content.map((section, index) => (
                       <div key={index}>
                           <h2>{section.heading}</h2>
                           <p>{section.description}</p>
                       </div>
                   ))}
                </div>

                {/* Tags */}
                <div className="mt-12 pt-8 border-t border-gray-200">
                  <span className="text-sm font-semibold text-gray-800 mr-3">Tags:</span>
                  {blog.tags.map((tag) => (
                    <span key={tag} className="inline-block bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-xs font-medium mr-2 mb-2">
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Sidebar */}
              <aside className="lg:col-span-4 mt-12 lg:mt-0">
                <div className="sticky top-28 space-y-8">
                  
                  {/* Call to Action Box */}
                  <div className="bg-teal-50 p-6 rounded-2xl border border-teal-100 text-center">
                    <h3 className="text-lg font-bold text-gray-900">Need Professional Care?</h3>
                    <p className="mt-2 text-sm text-gray-600">Our team is ready to help. Get a free, no-obligation consultation today.</p>
                    <a href="tel:+919876543210" className="mt-4 inline-flex w-full items-center justify-center bg-[#4CAF50] text-white px-4 py-2.5 rounded-lg font-semibold hover:bg-[#3e8e41] transition-colors">
                      <Phone className="w-4 h-4 mr-2" />
                      Call +91 98765 43210
                    </a>
                  </div>

                  {/* Social Share */}
                   <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200/80">
                      <h3 className="text-lg font-bold text-gray-900 mb-4">Share this article</h3>
                      <div className="flex space-x-2">
                          <a href="#" className="flex-1 flex items-center justify-center py-2 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100 transition-colors"><Twitter size={18}/></a>
                          <a href="#" className="flex-1 flex items-center justify-center py-2 bg-blue-50 text-blue-800 rounded-lg hover:bg-blue-100 transition-colors"><Facebook size={18}/></a>
                          <a href="#" className="flex-1 flex items-center justify-center py-2 bg-blue-50 text-blue-700 rounded-lg hover:bg-blue-100 transition-colors"><Linkedin size={18}/></a>
                      </div>
                  </div>
                  
                  {/* Related Articles */}
                  {relatedBlogs.length > 0 && (
                    <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200/80">
                      <h3 className="text-lg font-bold text-gray-900 mb-4">Related Articles</h3>
                      <div className="space-y-4">
                        {relatedBlogs.map((relatedBlog) => (
                          <Link key={relatedBlog.id} href={`/blog/${relatedBlog.id}`} className="block group">
                            <h4 className="font-semibold text-gray-800 group-hover:text-[#007B8A] transition-colors">{relatedBlog.title}</h4>
                            <p className="text-xs text-gray-500 mt-1">{formatDate(relatedBlog.date)}</p>
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </aside>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export async function generateStaticParams() {
  return blogs.map((blog) => ({
    slug: blog.id,
  }));
}
