import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <p className="text-gray-400">
          © {new Date().getFullYear()} Elite Barber Shop Cusco. Todos los derechos reservados.
        </p>
        <p className="text-sm text-gray-500 mt-2">
          Designed for style.
        </p>
      </div>
    </footer>
  );
};

export default Footer;