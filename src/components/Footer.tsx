import React from 'react';
import { Heart, Instagram, MessageCircle } from 'lucide-react';

const Footer = () => {
  const handleWhatsAppClick = () => {
    window.open('https://api.whatsapp.com/send/?phone=5531997998377&text&type=phone_number&app_absent=0', '_blank');
  };

  const handleInstagramClick = () => {
    window.open('https://www.instagram.com/nutri.alinecastro', '_blank');
  };

  return (
    <footer className="bg-plum text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {/* Logo/Brand */}
          <div className="text-center md:text-left">
            <h3 className="font-playfair text-2xl font-semibold mb-2">
              Aline Castro
            </h3>
            <p className="text-dusty">
              Nutricionista Clínica
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <h4 className="font-poppins text-lg font-semibold mb-4">
              Contato Rápido
            </h4>
            <div className="flex justify-center gap-4">
              <button
                onClick={handleWhatsAppClick}
                className="flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white/50"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-5 h-5" />
                WhatsApp
              </button>
              <button
                onClick={handleInstagramClick}
                className="flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white/50"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
                Instagram
              </button>
            </div>
          </div>

          {/* Contact Info */}
          <div className="text-center md:text-right">
            <p className="text-dusty text-sm leading-relaxed">
              📍 Savassi, Belo Horizonte - MG<br />
              📱 (31) 99799-8377<br />
              @nutri.alinecastro
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/20 mt-8 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-dusty text-sm text-center md:text-left">
              © {new Date().getFullYear()} Aline Castro - Nutricionista. Todos os direitos reservados.
            </p>
            
            <div className="flex items-center gap-2 text-dusty text-sm">
              <span>Feito com</span>
              <Heart className="w-4 h-4 fill-dusty" />
              <span>para cuidar de você</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;