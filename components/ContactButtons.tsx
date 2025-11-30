import React from 'react';
import { Phone, Map, CreditCard, Video, Instagram } from 'lucide-react';
import { WHATSAPP_NUMBER, WHATSAPP_MSG_BOOK, SOCIAL_LINKS, GOOGLE_MAPS_DIR_URL } from '../constants';

const ContactButtons: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <h2 className="text-3xl font-bold text-center text-elite-dark mb-12">
          📲 Contáctanos Fácil
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* WhatsApp */}
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MSG_BOOK)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 py-4 px-6 rounded-xl font-bold text-lg bg-[#25D366] text-white shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
          >
            <Phone size={24} />
            WhatsApp
          </a>

          {/* Call */}
          <a
            href={`tel:+${WHATSAPP_NUMBER}`}
            className="flex items-center justify-center gap-3 py-4 px-6 rounded-xl font-bold text-lg bg-blue-600 text-white shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
          >
            <Phone size={24} />
            Llamar
          </a>

          {/* Instagram */}
          <a
            href={SOCIAL_LINKS[0].url}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center justify-center gap-3 py-4 px-6 rounded-xl font-bold text-lg text-white shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 ${SOCIAL_LINKS[0].colorClass}`}
          >
            <Instagram size={24} />
            Instagram
          </a>

          {/* TikTok */}
          <a
            href={SOCIAL_LINKS[1].url}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center justify-center gap-3 py-4 px-6 rounded-xl font-bold text-lg text-white shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 ${SOCIAL_LINKS[1].colorClass}`}
          >
            <Video size={24} />
            TikTok
          </a>

          {/* Yape/Plin */}
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(`Pagué Yape/Plin a ${WHATSAPP_NUMBER}`)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 py-4 px-6 rounded-xl font-bold text-lg bg-[#00a651] text-white shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
          >
            <CreditCard size={24} />
            Yape/Plin
          </a>

          {/* Google Maps Waze */}
          <a
            href={GOOGLE_MAPS_DIR_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 py-4 px-6 rounded-xl font-bold text-lg bg-green-600 text-white shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
          >
            <Map size={24} />
            Waze/Maps
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactButtons;