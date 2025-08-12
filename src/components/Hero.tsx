import React from 'react';
import { Heart, Users, Video } from 'lucide-react';

const Hero = () => {
  const handleWhatsAppClick = () => {
    window.open('https://api.whatsapp.com/send/?phone=5531997998377&text&type=phone_number&app_absent=0', '_blank');
  };

  const handleInstagramClick = () => {
    window.open('https://www.instagram.com/nutri.alinecastro', '_blank');
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-cream via-blush/20 to-cream flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-20 right-10 w-32 h-32 bg-dusty/20 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 left-10 w-24 h-24 bg-mauve/20 rounded-full blur-2xl animate-float" style={{animationDelay: '1s'}}></div>
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Content */}
        <div className="text-center lg:text-left space-y-8">
          <div className="space-y-4">
            <h1 className="font-poppins text-4xl sm:text-5xl lg:text-6xl font-bold text-text-primary leading-tight">
              Nutrição para 
              <span className="block text-plum">cada fase</span> 
              da sua vida
            </h1>
            <p className="text-lg sm:text-xl text-text-secondary max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Acolhimento + ciência para TPM, SOP, climatério/menopausa e diabetes.
            </p>
          </div>

          {/* Badges */}
          <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-blush text-plum text-sm font-medium rounded-full shadow-sm">
              <Heart className="w-4 h-4" />
              Saúde da mulher
            </span>
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-dusty/50 text-plum text-sm font-medium rounded-full shadow-sm">
              <Users className="w-4 h-4" />
              Emagrecimento saudável
            </span>
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-mauve/50 text-white text-sm font-medium rounded-full shadow-sm">
              <Video className="w-4 h-4" />
              Online e presencial
            </span>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <button 
              onClick={handleWhatsAppClick}
              className="group px-8 py-4 bg-plum text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-3 focus:ring-plum/50"
              aria-label="Agendar consulta via WhatsApp"
            >
              <span className="flex items-center justify-center gap-2">
                📱 Agendar no WhatsApp
                <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
              </span>
            </button>
            <button 
              onClick={handleInstagramClick}
              className="px-8 py-4 border-2 border-mauve text-plum font-semibold rounded-2xl hover:bg-blush transition-all duration-300 focus:outline-none focus:ring-3 focus:ring-mauve/50"
              aria-label="Ver perfil no Instagram"
            >
              Ver no Instagram
            </button>
          </div>
        </div>

        {/* Hero Image */}
        <div className="relative">
          <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-500 bg-cream w-full sm:max-w-[340px] md:max-w-[420px] lg:max-w-[480px] xl:max-w-[540px] aspect-[4/5] mx-auto lg:mx-0">
            <img
              src="/alinecastro.png"
              alt="Aline Castro - Nutricionista sorrindo em ambiente profissional"
              className="w-full h-full object-contain object-center"
              loading="eager"
              decoding="async"
            />
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-plum/20 to-transparent"></div>
          </div>
          
          {/* Decorative elements */}
          <div className="absolute -top-4 -right-4 w-20 h-20 bg-dusty rounded-full opacity-60 blur-sm"></div>
          <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-mauve rounded-full opacity-40 blur-sm"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;