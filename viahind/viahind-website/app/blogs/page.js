'use client';
import { FaCalendar, FaUser } from 'react-icons/fa';

export default function BlogsPage() {
  const blogs = [
    {
      image: '/blog1.jpg',
      category: 'Technology',
      title: 'The Future of AI in Business Automation',
      excerpt: 'Discover how artificial intelligence is revolutionizing business processes and driving efficiency across industries.',
      author: 'John Doe',
      date: 'Jan 15, 2026'
    },
    {
      image: '/blog2.jpg',
      category: 'Digital Marketing',
      title: '10 SEO Strategies That Actually Work in 2026',
      excerpt: 'Learn the latest SEO techniques that will help your website rank higher and attract more organic traffic.',
      author: 'Jane Smith',
      date: 'Jan 10, 2026'
    },
    {
      image: '/blog3.jpg',
      category: 'Technology',
      title: 'Cloud Computing: A Complete Guide for Businesses',
      excerpt: 'Everything you need to know about migrating your business to the cloud and maximizing its benefits.',
      author: 'Mike Johnson',
      date: 'Jan 5, 2026'
    },
    {
      image: '/blog4.jpg',
      category: 'Development',
      title: 'Building Scalable Web Applications with Next.js',
      excerpt: 'A comprehensive guide to creating high-performance, scalable web applications using Next.js framework.',
      author: 'Sarah Williams',
      date: 'Dec 28, 2025'
    },
    {
      image: '/blog5.jpg',
      category: 'Digital Marketing',
      title: 'Social Media Marketing Trends for 2026',
      excerpt: 'Stay ahead of the curve with these emerging social media marketing trends that will dominate 2026.',
      author: 'David Brown',
      date: 'Dec 20, 2025'
    },
    {
      image: '/blog6.jpg',
      category: 'Technology',
      title: 'Cybersecurity Best Practices for Modern Businesses',
      excerpt: 'Protect your business from cyber threats with these essential security measures and best practices.',
      author: 'Emily Davis',
      date: 'Dec 15, 2025'
    }
  ];

  const categories = ['All', 'Technology', 'Digital Marketing', 'Development', 'Business'];

  return (
    <div>
      <section className="bg-gradient-to-br from-primary to-primary-dark text-white py-32 text-center">
        <div className="container-custom">
          <h1 className="text-white mb-5">Our Blog</h1>
          <p className="text-xl opacity-95">Insights, tips, and trends from the world of technology</p>
        </div>
      </section>

      <section className="section-spacing bg-white">
        <div className="container-custom">
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {categories.map((category, index) => (
              <button
                key={index}
                className="px-8 py-3 bg-gray-100 text-dark rounded-full font-semibold transition-all duration-300 hover:bg-primary hover:text-white"
              >
                {category}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {blogs.map((blog, index) => (
              <article key={index} className="bg-white rounded-2xl overflow-hidden shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl cursor-pointer">
                <div className="h-56 bg-gradient-to-br from-primary to-primary-dark"></div>
                <div className="p-8">
                  <span className="inline-block bg-accent text-primary px-4 py-2 rounded-full text-sm font-semibold mb-4">
                    {blog.category}
                  </span>
                  <h3 className="mb-4 text-xl">{blog.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{blog.excerpt}</p>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span className="flex items-center gap-2">
                      <FaUser className="text-primary" />
                      {blog.author}
                    </span>
                    <span className="flex items-center gap-2">
                      <FaCalendar className="text-primary" />
                      {blog.date}
                    </span>
                  </div>
                  <button className="mt-6 text-primary font-semibold hover:underline">Read More →</button>
                </div>
              </article>
            ))}
          </div>

          <div className="flex justify-center gap-3 mt-16">
            <button className="w-10 h-10 rounded-full bg-primary text-white font-semibold hover:bg-primary-dark transition-colors">1</button>
            <button className="w-10 h-10 rounded-full bg-gray-200 text-dark font-semibold hover:bg-primary hover:text-white transition-colors">2</button>
            <button className="w-10 h-10 rounded-full bg-gray-200 text-dark font-semibold hover:bg-primary hover:text-white transition-colors">3</button>
            <button className="w-10 h-10 rounded-full bg-gray-200 text-dark font-semibold hover:bg-primary hover:text-white transition-colors">→</button>
          </div>
        </div>
      </section>
    </div>
  );
}
