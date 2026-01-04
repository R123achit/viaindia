'use client';
import { FaStar } from 'react-icons/fa';

export default function TrustBadges() {
  const badges = [
    { platform: 'Glassdoor', rating: 4.7, reviews: 150 },
    { platform: 'Google My Business', rating: 4.9, reviews: 320 },
    { platform: 'Clutch', rating: 4.9, reviews: 85 }
  ];

  return (
    <section className="bg-white py-16 border-b border-gray-200">
      <div className="container-custom grid grid-cols-1 md:grid-cols-3 gap-10">
        {badges.map((badge, index) => (
          <div key={index} className="bg-accent p-8 rounded-xl text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/20">
            <h4 className="text-xl font-semibold text-primary mb-4">{badge.platform}</h4>
            <div className="flex items-center justify-center gap-4 my-5">
              <span className="text-4xl font-bold text-black">{badge.rating}</span>
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className={`text-xl ${i < Math.floor(badge.rating) ? 'text-yellow-500' : 'text-gray-300'}`} />
                ))}
              </div>
            </div>
            <p className="text-base font-semibold text-dark mb-2">{badge.reviews} Reviews</p>
            <small className="text-gray-600">Reviewed On {badge.platform}</small>
          </div>
        ))}
      </div>
    </section>
  );
}
