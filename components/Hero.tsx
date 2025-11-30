import React from 'react';
import { Smartphone } from 'lucide-react';
import { WHATSAPP_NUMBER, WHATSAPP_MSG_BOOK, ADDRESS } from '../constants';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative h-screen flex flex-col justify-center items-center text-center px-4 overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat bg-fixed"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1551632811-561732d1e306?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')"
        }}
      >
        <div className="absolute inset-0 bg-black/70"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-white space-y-6">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight drop-shadow-lg">
          <span className="block text-elite-green">Elite</span> Barber Shop
        </h1>
        
        <p className="text-xl md:text-2xl font-light max-w-2xl mx-auto text-gray-200 drop-shadow-md">
          {ADDRESS}<br />
          <span className="font-medium text-white">Degradado perfecto • Ambiente pet-friendly • Estacionamiento</span>
        </p>
        
        <div className="pt-8">
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MSG_BOOK)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gradient-primary text-white px-8 py-4 rounded-full text-xl font-bold shadow-[0_20px_50px_rgba(37,211,102,0.4)] hover:shadow-[0_30px_60px_rgba(37,211,102,0.6)] hover:-translate-y-2 transition-all duration-300 border-2 border-transparent hover:border-elite-green"
          >
            <Smartphone size={24} />
            Reservar Ahora
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;