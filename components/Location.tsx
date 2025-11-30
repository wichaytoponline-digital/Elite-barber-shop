import React from 'react';
import { MapPin, Phone, Clock, Car, Dog } from 'lucide-react';
import { GOOGLE_MAPS_EMBED_URL, WHATSAPP_NUMBER } from '../constants';

const Location: React.FC = () => {
  return (
    <section id="contacto" className="py-12 px-4 md:px-8">
      <div className="max-w-6xl mx-auto bg-elite-dark rounded-[2rem] overflow-hidden shadow-2xl">
        <div className="p-8 md:p-16 text-white">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 flex items-center justify-center gap-3">
              <MapPin size={40} className="text-elite-green" /> 
              Pl. San Francisco 110
            </h2>
            <p className="text-xl md:text-2xl text-gray-300">Cusco 08002 • Código Plus: F2J9+GJ</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12 text-center">
            <div className="bg-white/5 p-6 rounded-2xl backdrop-blur-sm">
              <Phone className="w-10 h-10 text-elite-green mx-auto mb-4" />
              <h4 className="font-bold text-lg mb-2">WhatsApp/Yape</h4>
              <p className="text-gray-300">+{WHATSAPP_NUMBER}</p>
            </div>
            
            <div className="bg-white/5 p-6 rounded-2xl backdrop-blur-sm">
              <Clock className="w-10 h-10 text-elite-green mx-auto mb-4" />
              <h4 className="font-bold text-lg mb-2">Horario</h4>
              <p className="text-gray-300">Lun-Dom 9AM-9PM</p>
            </div>

            <div className="bg-white/5 p-6 rounded-2xl backdrop-blur-sm">
              <Car className="w-10 h-10 text-elite-green mx-auto mb-4" />
              <h4 className="font-bold text-lg mb-2">Estacionamiento</h4>
              <p className="text-gray-300">Disponible</p>
            </div>

            <div className="bg-white/5 p-6 rounded-2xl backdrop-blur-sm">
              <Dog className="w-10 h-10 text-elite-green mx-auto mb-4" />
              <h4 className="font-bold text-lg mb-2">Pet-Friendly</h4>
              <p className="text-gray-300">¡Trae a tu mascota!</p>
            </div>
          </div>

          <div className="rounded-2xl overflow-hidden shadow-lg border-4 border-white/10 h-[400px] md:h-[500px]">
            <iframe 
              src={GOOGLE_MAPS_EMBED_URL}
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Maps Location"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;