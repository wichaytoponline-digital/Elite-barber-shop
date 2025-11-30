import React from 'react';
import { TESTIMONIALS } from '../constants';
import { Star } from 'lucide-react';

const Testimonials: React.FC = () => {
  return (
    <section id="testimonios" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-elite-dark mb-4">
            ⭐ Experiencia Única
          </h2>
          <div className="h-1.5 w-24 bg-gradient-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((item, index) => (
            <div 
              key={index}
              className="bg-gradient-primary p-8 rounded-3xl shadow-xl text-white transform transition-transform duration-300 hover:scale-105"
            >
              <div className="flex justify-center gap-1 mb-6 text-yellow-300">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={24} fill="currentColor" />
                ))}
              </div>
              
              <p className="text-lg italic mb-6 leading-relaxed opacity-95">
                "{item.text}"
              </p>
              
              <div className="font-bold text-xl border-t border-white/20 pt-4 inline-block w-full text-center">
                {item.author}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;