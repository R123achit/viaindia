'use client';
import { FaUsers, FaLightbulb, FaTrophy, FaHeart, FaStar } from 'react-icons/fa';

export default function WorkCulturePage() {
  const values = [
    { icon: <FaUsers />, title: 'Customer Centric', description: 'We put our clients at the heart of everything we do' },
    { icon: <FaLightbulb />, title: 'The Difference Makers', description: 'Innovation and creativity drive our solutions' },
    { icon: <FaTrophy />, title: 'One Team, One Dream', description: 'Collaboration and unity towards common goals' },
    { icon: <FaHeart />, title: 'Work-Life Balance', description: 'We care about your wellbeing and happiness' }
  ];

  return (
    <div>
      <section className="bg-gradient-to-br from-primary to-primary-dark text-white py-32 text-center">
        <div className="container-custom">
          <h1 className="text-white mb-8">Creating Work-Life Balance</h1>
          <div className="max-w-4xl mx-auto space-y-5 text-lg opacity-95">
            <p>
              At Viahind, we believe in empowering our employees to achieve their full potential. 
              We foster a culture of innovation, collaboration, and continuous learning.
            </p>
            <p>
              Our workplace is built on fairness, inclusivity, and respect. We provide a 
              supportive environment where every team member can thrive and grow.
            </p>
            <p>
              We encourage continuous learning and professional development, offering opportunities 
              for skill enhancement and career advancement.
            </p>
            <p>
              Together, we create a collective space for growth, where individual success 
              contributes to our shared achievements.
            </p>
          </div>
        </div>
      </section>

      <section className="section-spacing bg-white">
        <div className="container-custom">
          <h2 className="text-center mb-16">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {values.map((value, index) => (
              <div key={index} className="bg-accent p-10 rounded-2xl text-center transition-all duration-300 hover:-translate-y-3 hover:shadow-2xl">
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-6 text-4xl text-primary">
                  {value.icon}
                </div>
                <h3 className="mb-4 text-xl">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-spacing bg-gray-100">
        <div className="container-custom">
          <h2 className="text-center mb-8">Employee Reviews</h2>
          <p className="text-center text-xl text-gray-600 mb-12">Read more employee reviews on Glassdoor</p>
          
          <div className="max-w-4xl mx-auto bg-white p-12 rounded-3xl shadow-2xl text-center">
            <div className="flex justify-center gap-2 mb-8 text-yellow-500 text-3xl">
              <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
            </div>
            <h3 className="text-primary mb-6 text-2xl">4.7 Rating on Glassdoor</h3>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              "Great work environment with supportive management. The company truly cares about 
              employee growth and maintains an excellent work-life balance. Highly recommend!"
            </p>
            <a href="https://glassdoor.com" target="_blank" rel="noopener noreferrer" className="btn-primary inline-block">
              View All Reviews
            </a>
          </div>
        </div>
      </section>

      <section className="section-spacing bg-accent text-center">
        <div className="container-custom">
          <h2 className="mb-5">Ready to kickstart your career?</h2>
          <p className="text-xl text-gray-600 mb-10">Join our team of 75+ talented professionals</p>
          <button className="btn-primary">JOIN US NOW</button>
        </div>
      </section>
    </div>
  );
}
