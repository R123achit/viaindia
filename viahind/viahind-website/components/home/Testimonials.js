'use client';
import { useState, useEffect } from 'react';
import { FaStar, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      company: 'Soham Industrial Machinery',
      quote: 'Viahind transformed our digital presence with a robust web application. Their team understood our industrial needs perfectly and delivered beyond expectations.',
      name: 'Rajesh Kumar',
      designation: 'CEO',
      rating: 5
    },
    {
      company: 'Magicrete',
      quote: 'Outstanding service and technical expertise. The ERP solution they built has streamlined our entire manufacturing process.',
      name: 'Priya Sharma',
      designation: 'Operations Director',
      rating: 5
    },
    {
      company: 'Booknfly',
      quote: 'The travel booking platform they developed is intuitive, fast, and has significantly increased our online bookings.',
      name: 'Amit Patel',
      designation: 'Founder',
      rating: 5
    },
    {
      company: "Pix'O'city",
      quote: 'Creative solutions and professional approach. Our photography portfolio website is stunning and performs flawlessly.',
      name: 'Sarah Johnson',
      designation: 'Creative Director',
      rating: 5
    },
    {
      company: 'Readers Adda',
      quote: 'The e-commerce platform exceeded our expectations. Sales have increased by 200% since launch.',
      name: 'Vikram Singh',
      designation: 'Managing Director',
      rating: 5
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="section-spacing bg-gray-100">
      <div className="container-custom">
        <h2 className="text-center mb-4">What Our Clients Say</h2>
        <p className="text-center text-gray-600 text-xl mb-16">Trusted by businesses worldwide</p>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-10 mb-10">
          <button onClick={prevTestimonial} className="w-12 h-12 rounded-full bg-white text-primary text-xl flex items-center justify-center transition-all duration-300 shadow-lg hover:bg-primary hover:text-white hover:scale-110">
            <FaChevronLeft />
          </button>

          <div className="bg-white p-16 rounded-3xl max-w-4xl shadow-2xl text-center">
            <h3 className="text-primary mb-6 text-3xl">{testimonials[currentIndex].company}</h3>
            <p className="text-xl italic text-dark leading-relaxed mb-8">"{testimonials[currentIndex].quote}"</p>
            <div className="flex justify-center gap-2 mb-8 text-yellow-500 text-2xl">
              {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                <FaStar key={i} />
              ))}
            </div>
            <div className="flex items-center justify-center gap-5">
              <div className="w-20 h-20 rounded-full bg-primary text-white flex items-center justify-center text-3xl font-bold">
                {testimonials[currentIndex].name.charAt(0)}
              </div>
              <div className="text-left">
                <p className="text-xl font-semibold text-black mb-1">{testimonials[currentIndex].name}</p>
                <p className="text-gray-600">{testimonials[currentIndex].designation}</p>
              </div>
            </div>
          </div>

          <button onClick={nextTestimonial} className="w-12 h-12 rounded-full bg-white text-primary text-xl flex items-center justify-center transition-all duration-300 shadow-lg hover:bg-primary hover:text-white hover:scale-110">
            <FaChevronRight />
          </button>
        </div>

        <div className="flex justify-center gap-3 mb-10">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`h-3 rounded-full transition-all duration-300 ${
                index === currentIndex ? 'w-10 bg-primary' : 'w-3 bg-gray-300 hover:bg-primary-light'
              }`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>

        <div className="text-center">
          <a href="/testimonials" className="text-primary font-semibold text-lg hover:underline">View All Testimonials</a>
        </div>
      </div>
    </section>
  );
}
