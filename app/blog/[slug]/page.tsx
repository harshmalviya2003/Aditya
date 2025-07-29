import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { getBlogById, blogs } from '@/data/blogs';
import { Calendar, User, Clock, ArrowLeft, ArrowRight, Tag, Share2 } from 'lucide-react';

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
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  const relatedBlogs = blogs
    .filter(b => b.id !== blog.id && b.category === blog.category)
    .slice(0, 3);

  return (
    <div>
      <Header />
      <main>
        {/* Article Header */}
        <section className="py-20 bg-gradient-to-br from-white via-blue-50 to-[#5B97C6]/10">
          <div className="max-w-4xl mx-auto px-4">
            <Link
              href="/blog"
              className="inline-flex items-center text-[#5B97C6] hover:text-[#4a82b3] transition-colors duration-200 mb-8"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Blog
            </Link>
            
            <div className="space-y-6">
              <div className="inline-flex items-center bg-[#5B97C6]/10 px-4 py-2 rounded-full">
                <span className="text-sm font-medium text-[#5B97C6]">{blog.category}</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                {blog.title}
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed">
                {blog.excerpt}
              </p>
              
              <div className="flex flex-wrap items-center gap-6 text-sm text-gray-500 pt-6 border-t border-gray-200">
                <div className="flex items-center">
                  <User className="w-4 h-4 mr-2" />
                  <span>{blog.author}</span>
                </div>
                <div className="flex items-center">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span>{formatDate(blog.date)}</span>
                </div>
                <div className="flex items-center">
                  <Clock className="w-4 h-4 mr-2" />
                  <span>{blog.readTime}</span>
                </div>
                <button className="flex items-center text-[#5B97C6] hover:text-[#4a82b3] transition-colors duration-200">
                  <Share2 className="w-4 h-4 mr-2" />
                  <span>Share</span>
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Article Content */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
              {/* Main Content */}
              <div className="lg:col-span-3">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-64 md:h-96 object-cover rounded-2xl shadow-lg mb-8"
                />
                
                <div 
                  className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-headings:font-bold prose-p:text-gray-600 prose-p:leading-relaxed prose-a:text-[#5B97C6] prose-a:no-underline hover:prose-a:underline prose-strong:text-gray-900 prose-ul:text-gray-600 prose-li:text-gray-600"
                  dangerouslySetInnerHTML={{ __html: blog.content }}
                />
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mt-12 pt-8 border-t border-gray-200">
                  <span className="text-sm font-medium text-gray-900 mr-4">Tags:</span>
                  {blog.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="inline-flex items-center bg-[#5B97C6]/10 text-[#5B97C6] px-3 py-1 rounded-full text-sm font-medium"
                    >
                      <Tag className="w-3 h-3 mr-1" />
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1">
                <div className="sticky top-8 space-y-8">
                  {/* Author Info */}
                  <div className="bg-gray-50 p-6 rounded-2xl">
                    <h3 className="text-lg font-bold text-gray-900 mb-4">About the Author</h3>
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="w-12 h-12 bg-[#5B97C6] rounded-full flex items-center justify-center">
                        <User className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">{blog.author}</h4>
                        <p className="text-sm text-gray-600">Healthcare Expert</p>
                      </div>
                    </div>
                    <p className="text-sm text-gray-600">
                      Our healthcare professionals bring years of experience in home care, 
                      sharing valuable insights to help families make informed care decisions.
                    </p>
                  </div>

                  {/* Related Articles */}
                  {relatedBlogs.length > 0 && (
                    <div className="bg-gray-50 p-6 rounded-2xl">
                      <h3 className="text-lg font-bold text-gray-900 mb-4">Related Articles</h3>
                      <div className="space-y-4">
                        {relatedBlogs.map((relatedBlog) => (
                          <Link
                            key={relatedBlog.id}
                            href={`/blog/${relatedBlog.id}`}
                            className="block group"
                          >
                            <h4 className="text-sm font-semibold text-gray-900 group-hover:text-[#5B97C6] transition-colors duration-200 mb-2">
                              {relatedBlog.title}
                            </h4>
                            <p className="text-xs text-gray-500">
                              {formatDate(relatedBlog.date)} • {relatedBlog.readTime}
                            </p>
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* CTA */}
                  <div className="bg-[#5B97C6] p-6 rounded-2xl text-white">
                    <h3 className="text-lg font-bold mb-4">Need Care Services?</h3>
                    <p className="text-sm mb-4 text-white/90">
                      Our expert team is ready to provide personalized care solutions for your family.
                    </p>
                    <Link
                      href="/contact"
                      className="inline-flex items-center bg-white text-[#5B97C6] px-4 py-2 rounded-lg font-semibold text-sm hover:bg-gray-100 transition-colors duration-200"
                    >
                      Get Consultation
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Navigation */}
        <section className="py-12 bg-gray-50 border-t border-gray-200">
          <div className="max-w-4xl mx-auto px-4">
            <div className="flex justify-between items-center">
              <Link
                href="/blog"
                className="inline-flex items-center text-[#5B97C6] hover:text-[#4a82b3] transition-colors duration-200"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                All Articles
              </Link>
              
              <Link
                href="/contact"
                className="inline-flex items-center bg-[#5B97C6] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#4a82b3] transition-colors duration-200"
              >
                Contact Us
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
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