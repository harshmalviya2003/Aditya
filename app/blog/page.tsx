import React from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { blogs } from '@/data/blogs';
import { Calendar, User, Clock, ArrowRight, BookOpen, Tag } from 'lucide-react';

export default function Blog() {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  const categories = Array.from(new Set(blogs.map(blog => blog.category)));
  const recentBlogs = blogs.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return (
    <div>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-white via-[#A2E3E2]/30 to-[#A2E3E2]/50">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center">
              <div className="inline-flex items-center bg-[#007B8A]/10 px-4 py-2 rounded-full mb-6">
                <BookOpen className="w-4 h-4 text-[#007B8A] mr-2" />
                <span className="text-sm font-medium text-[#007B8A]">Health & Care Blog</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
                Expert Health &
                <span className="text-[#007B8A] block">Care Insights</span>
              </h1>
              
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Stay informed with the latest in home healthcare, caregiving tips, and wellness advice 
                from our team of experienced professionals and healthcare experts.
              </p>
            </div>
          </div>
        </section>

        {/* Categories */}
        <section className="py-12 bg-white border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-[#007B8A] text-white px-6 py-2 rounded-full font-medium">
                All Articles
              </button>
              {categories.map((category) => (
                <button
                  key={category}
                  className="bg-gray-100 text-gray-600 hover:bg-[#007B8A]/10 hover:text-[#007B8A] px-6 py-2 rounded-full font-medium transition-colors duration-200"
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Blog Grid */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {recentBlogs.map((blog) => (
                <article
                  key={blog.id}
                  className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={blog.image}
                      alt={blog.title}
                      className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-[#007B8A] text-white px-3 py-1 rounded-full text-xs font-medium">
                        {blog.category}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center space-x-4 text-sm text-gray-500 mb-4">
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 text-[#007B8A] mr-1" />
                        <span>{formatDate(blog.date)}</span>
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 text-[#007B8A] mr-1" />
                        <span>{blog.readTime}</span>
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 hover:text-[#007B8A] transition-colors duration-200">
                      {blog.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-4 line-clamp-3 leading-relaxed">
                      {blog.excerpt}
                    </p>
                    
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {blog.tags.slice(0, 3).map((tag, index) => (
                        <span
                          key={index}
                          className="inline-flex items-center bg-[#A2E3E2]/30 text-[#007B8A] px-2 py-1 rounded-md text-xs"
                        >
                          <Tag className="w-3 h-3 mr-1" />
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                      <div className="flex items-center">
                        <User className="w-4 h-4 text-[#007B8A] mr-2" />
                        <span className="text-sm text-gray-600">{blog.author}</span>
                      </div>
                      
                      <Link
                        href={`/blog/${blog.id}`}
                        className="inline-flex items-center text-[#007B8A] font-semibold hover:text-[#4CAF50] transition-colors duration-200 text-sm"
                      >
                        Read Article
                        <ArrowRight className="ml-1 w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="py-20 bg-gradient-to-r from-[#007B8A] to-[#005f6b]">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Stay Updated
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Subscribe to our newsletter for the latest health and care tips, articles, and updates 
              from The Florence Nightingale Home Care Agency.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <button className="bg-white text-[#007B8A] px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200">
                Subscribe
              </button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}