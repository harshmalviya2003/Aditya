
import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Header from '@/components/home/Header';
import Footer from '@/components/home/Footer';
import { getBlogById, blogs } from '@/data/blogs';
import { Calendar, Clock, ArrowLeft, Twitter, Facebook, Linkedin, Phone } from 'lucide-react';
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
  
  // SEO-friendly: It's best practice to have only one <h1> per page for the main title.
  // Section headings should use <h2>, <h3>, etc., to create a proper document outline.
  const MainHeadingTag = 'h1';
  const SectionHeadingTag = 'h2';

  return (
    <div className="bg-white">
      <main>
        <section className="py-16 sm:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:grid lg:grid-cols-12 lg:gap-12">

              {/* Main Content */}
              <div className="lg:col-span-8">
                {/* --- ENHANCED: Breadcrumbs and Title section with better spacing --- */}
                <div className="mb-8">
                  <Link href="/blog" className="inline-flex items-center text-sm font-semibold text-[#007B8A] hover:text-teal-700 transition-colors">
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Back to All Articles
                  </Link>
                  <p className="mt-6 text-base font-semibold text-[#007B8A] uppercase tracking-wider">{blog.category}</p>
                  <MainHeadingTag className="mt-2 text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight">
                    {blog.title}
                  </MainHeadingTag>
                </div>

                {/* --- ENHANCED: Metadata with better vertical alignment and spacing --- */}
                <div className="flex flex-wrap items-center gap-x-6 gap-y-4 text-sm text-gray-600 py-6 border-y border-gray-200">
                  
                
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-1.5 text-gray-500" />
                    <span>{formatDate(blog.date)}</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-1.5 text-gray-500" />
                    <span>{blog.readTime}</span>
                  </div>
                </div>

                {/* --- UPDATE: Image size is now constrained for better visual balance --- */}
                <div className="my-8">
                <Image
                    src={blog.image}
                    alt={blog.title}
                    width={300}
                    height={200}
                    className="w-full h-[450px] object-cover rounded-xl shadow-lg"
                  />
                </div>
                
                {/* --- ENHANCED: Content body with improved typography for readability --- */}
                <div className="prose prose-lg max-w-full prose-headings:font-bold prose-headings:text-gray-900 prose-p:text-gray-700 prose-p:leading-relaxed prose-a:text-[#007B8A] hover:prose-a:text-teal-700 prose-strong:text-gray-800">
                   {blog.content.map((section, index) => (
                     <div key={index} className="mt-8 first:mt-0">
                       <h1  className="text-2xl font-semibold text-gray-900">{section.heading}</h1>
                       {/* This paragraph text is now styled for desktop readability via the 'prose' classes above */}
                       <p>{section.description}</p>
                     </div>
                   ))}
                </div>

                {/* --- ENHANCED: Tags section with a clearer layout --- */}
                <div className="mt-12 pt-6 border-t border-gray-200">
                  <h3 className="text-sm font-semibold text-gray-800 mb-3">Tagged In:</h3>
                  <div className="flex flex-wrap gap-2">
                    {blog.tags.map((tag) => (
                      <span key={tag} className="inline-block bg-slate-100 text-slate-700 px-3 py-1.5 rounded-full text-xs font-medium">
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Sidebar */}
              <aside className="lg:col-span-4 mt-12 lg:mt-0">
                <div className="sticky top-28 space-y-8">
                  
                  {/* --- ENHANCED: Call to Action with clearer text and design --- */}
                  <div className="bg-teal-50 p-6 rounded-xl border border-teal-100 text-center">
                    <h3 className="text-xl font-bold text-gray-900">Need Professional Care?</h3>
                    <p className="mt-2 text-sm text-gray-600">Our expert team is ready to help. Get a free, no-obligation consultation today.</p>
                    <a href="tel:+919479365137" className="mt-5 inline-flex w-full items-center justify-center bg-[#007B8A] text-white px-4 py-2.5 rounded-lg font-semibold hover:bg-teal-800 transition-colors shadow-sm">
                      <Phone className="w-4 h-4 mr-2" />
                      Call +91-94793-65137
                    </a>
                  </div>

                  {/* --- ENHANCED: Social Share with clearer button labels --- */}
                    <div className="bg-slate-50 p-6 rounded-xl border border-slate-200/80">
                      <h3 className="text-lg font-bold text-gray-900 mb-4 text-center">Share This Article</h3>
                      <div className="flex flex-col space-y-3">
                          <a href="#" className="flex items-center justify-center py-2.5 bg-sky-100 text-sky-700 rounded-lg hover:bg-sky-200 transition-colors font-semibold"><Twitter size={18} className="mr-2"/> Share on Twitter</a>
                          <a href="#" className="flex items-center justify-center py-2.5 bg-blue-100 text-blue-800 rounded-lg hover:bg-blue-200 transition-colors font-semibold"><Facebook size={18} className="mr-2"/> Share on Facebook</a>
                          <a href="#" className="flex items-center justify-center py-2.5 bg-indigo-100 text-indigo-700 rounded-lg hover:bg-indigo-200 transition-colors font-semibold"><Linkedin size={18} className="mr-2"/> Share on LinkedIn</a>
                      </div>
                  </div>
                  
                  {/* --- ENHANCED: Related Articles with better visual hierarchy --- */}
                  {relatedBlogs.length > 0 && (
                    <div className="bg-slate-50 p-6 rounded-xl border border-slate-200/80">
                      <h3 className="text-lg font-bold text-gray-900 mb-5">Related Articles</h3>
                      <div className="space-y-5">
                        {relatedBlogs.map((relatedBlog) => (
                          <Link key={relatedBlog.id} href={`/blog/${relatedBlog.id}`} className="block group">
                            <h4 className="font-semibold text-gray-800 group-hover:text-[#007B8A] transition-colors leading-snug">{relatedBlog.title}</h4>
                            <p className="text-xs text-gray-500 mt-1.5">{formatDate(relatedBlog.date)}</p>
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
    </div>
  );
}

export async function generateStaticParams() {
  return blogs.map((blog) => ({
    slug: blog.id,
  }));
}
