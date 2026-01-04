'use client';
import { useState } from 'react';

export default function LeadForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    company: '',
    email: '',
    mobile: '',
    description: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('Thank you! We will contact you soon.');
        handleReset();
      } else {
        alert('Something went wrong. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Failed to submit form. Please try again.');
    }
  };

  const handleReset = () => {
    setFormData({
      firstName: '',
      lastName: '',
      company: '',
      email: '',
      mobile: '',
      description: ''
    });
  };

  return (
    <section className="section-spacing bg-accent">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="mb-4">Your Idea Could Be The Next Revolution</h2>
          <p className="text-2xl text-primary font-semibold">Let's Discuss & Make It Happen</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 items-start">
          <form onSubmit={handleSubmit} className="lg:col-span-2 bg-white p-12 rounded-3xl shadow-2xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
              <input
                type="text"
                name="firstName"
                placeholder="First Name *"
                value={formData.firstName}
                onChange={handleChange}
                required
                className="px-5 py-4 border-2 border-gray-200 rounded-lg text-base focus:outline-none focus:border-primary transition-colors"
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last Name *"
                value={formData.lastName}
                onChange={handleChange}
                required
                className="px-5 py-4 border-2 border-gray-200 rounded-lg text-base focus:outline-none focus:border-primary transition-colors"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
              <input
                type="text"
                name="company"
                placeholder="Company *"
                value={formData.company}
                onChange={handleChange}
                required
                className="px-5 py-4 border-2 border-gray-200 rounded-lg text-base focus:outline-none focus:border-primary transition-colors"
              />
              <input
                type="email"
                name="email"
                placeholder="Email *"
                value={formData.email}
                onChange={handleChange}
                required
                className="px-5 py-4 border-2 border-gray-200 rounded-lg text-base focus:outline-none focus:border-primary transition-colors"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
              <input
                type="tel"
                name="mobile"
                placeholder="Mobile *"
                value={formData.mobile}
                onChange={handleChange}
                required
                className="px-5 py-4 border-2 border-gray-200 rounded-lg text-base focus:outline-none focus:border-primary transition-colors"
              />
              <textarea
                name="description"
                placeholder="Description *"
                value={formData.description}
                onChange={handleChange}
                required
                rows="1"
                className="px-5 py-4 border-2 border-gray-200 rounded-lg text-base focus:outline-none focus:border-primary transition-colors resize-none"
              />
            </div>
            <textarea
              name="description"
              placeholder="Project Details *"
              value={formData.description}
              onChange={handleChange}
              required
              rows="4"
              className="w-full px-5 py-4 border-2 border-gray-200 rounded-lg text-base focus:outline-none focus:border-primary transition-colors resize-vertical mb-8"
            />
            <div className="flex flex-col md:flex-row gap-5">
              <button type="submit" className="btn-primary flex-1">Submit</button>
              <button type="button" className="btn-outline flex-1" onClick={handleReset}>Reset</button>
            </div>
          </form>

          <div className="bg-white p-12 rounded-3xl text-center shadow-2xl flex flex-col justify-center gap-5 h-full">
            <h3 className="text-primary text-2xl">Looking to build something incredible?</h3>
            <p className="text-lg text-gray-600">We are trusted by over 650 clients</p>
            <button className="btn-primary">Book A Consultation</button>
          </div>
        </div>
      </div>
    </section>
  );
}
