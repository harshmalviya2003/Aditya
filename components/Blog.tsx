import React from 'react';
import Link from 'next/link';
import { getRecentBlogs } from '@/data/blogs';
import { Calendar, User, Clock, ArrowRight, BookOpen } from 'lucide-react';

const Blog = () => {
  const recentBlogs = getRecentBlogs(3);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  return (
    <section className="py-20 bg-[#A2E3E2]/10">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-[#007B8A]/10 px-4 py-2 rounded-full mb-6">
            <BookOpen className="w-4 h-4 text-[#007B8A] mr-2" />
            <span className="text-sm font-medium text-[#007B8A]">Latest Insights</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Health & Care
            <span className="text-[#007B8A]"> Resources</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Stay informed with expert advice, care tips, and the latest developments 
            in home healthcare from our professional team.
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
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
                    <Calendar className="w-4 h-4 mr-1 text-[#007B8A]" />
                    <span>{formatDate(blog.date)}</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-1 text-[#007B8A]" />
                    <span>{blog.readTime}</span>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 hover:text-[#007B8A] transition-colors duration-200">
                  {blog.title}
                </h3>
                
                <p className="text-gray-600 mb-4 line-clamp-3 leading-relaxed">
                  {blog.excerpt}
                </p>
                
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <div className="flex items-center">
                    <User className="w-4 h-4 text-[#007B8A] mr-2" />
                    <span className="text-sm text-gray-600">{blog.author}</span>
                  </div>
                  
                  <Link
                    href={`/blog/${blog.id}`}
                    className="inline-flex items-center text-[#007B8A] font-semibold hover:text-[#4CAF50] transition-colors duration-200 text-sm"
                  >
                    Read More
                    <ArrowRight className="ml-1 w-4 h-4" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <Link
            href="/blog"
            className="inline-flex items-center bg-[#4CAF50] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#3e8e41] transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-[#4CAF50]/30"
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