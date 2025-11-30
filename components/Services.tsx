import React from 'react';
import { SERVICES } from '../constants';

const Services: React.FC = () => {
  return (
    <section id="servicios" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-elite-dark mb-4">
            💈 Nuestros Servicios
          </h2>
          <div className="h-1.5 w-24 bg-gradient-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {SERVICES.map((service, index) => (
            <div 
              key={index}
              className="group relative bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-4 overflow-hidden border-t-0"
            >
              {/* Top Gradient Line */}
              <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-primary"></div>
              
              <div className="flex flex-col items-center text-center h-full">
                <div className="mb-6 p-4 bg-gray-50 rounded-full text-elite-teal group-hover:text-elite-green transition-colors duration-300">
                  <service.icon size={48} strokeWidth={1.5} />
                </div>
                
                <h3 className="text-2xl font-bold text-gray-800 mb-3 group-hover:text-elite-teal transition-colors">
                  {service.title}
                </h3>
                
                <div className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-primary mb-4">
                  {service.price}
                </div>
                
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;