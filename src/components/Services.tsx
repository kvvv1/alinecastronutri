import React from 'react';
import { Heart, Baby, Users, Activity, Stethoscope, Monitor } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Activity,
      title: "Emagrecimento Saudável",
      description: "Planos personalizados para perda de peso sustentável e melhora da composição corporal"
    },
    {
      icon: Heart,
      title: "Saúde da Mulher",
      description: "Especialização em TPM, SOP, climatério e menopausa com abordagem integrativa"
    },
    {
      icon: Baby,
      title: "Nutrição Infantil",
      description: "Acompanhamento nutricional para crianças e adolescentes em todas as fases"
    },
    {
      icon: Users,
      title: "Nutrição Gestacional",
      description: "Cuidado especial durante gestação e amamentação para mãe e bebê"
    },
    {
      icon: Stethoscope,
      title: "Diabetes",
      description: "Manejo nutricional especializado para controle glicêmico e qualidade de vida"
    },
    {
      icon: Monitor,
      title: "Consulta Online & Presencial",
      description: "Flexibilidade total: atendimento presencial em BH ou online de qualquer lugar"
    }
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-poppins text-3xl sm:text-4xl font-bold text-text-primary mb-4">
            Áreas de Atuação
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Serviços especializados para cuidar da sua saúde com acolhimento e evidência científica
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group p-6 bg-white/60 backdrop-blur-sm border border-dusty/20 rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 hover:-translate-y-2 transition-all duration-300"
            >
              <div className="space-y-4">
                {/* Icon */}
                <div className="w-12 h-12 bg-gradient-to-br from-plum to-mauve rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-6 h-6 text-white" />
                </div>

                {/* Content */}
                <div>
                  <h3 className="font-poppins text-xl font-semibold text-text-primary mb-2 group-hover:text-plum transition-colors duration-200">
                    {service.title}
                  </h3>
                  <p className="text-text-secondary leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>

              {/* Hover effect overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-plum/5 to-mauve/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-12 text-center">
          <p className="text-lg text-text-secondary mb-6">
            Pronta para transformar sua relação com a alimentação?
          </p>
          <button
            onClick={() => window.open('https://api.whatsapp.com/send/?phone=5531997998377&text&type=phone_number&app_absent=0', '_blank')}
            className="inline-flex items-center gap-2 px-8 py-4 bg-plum text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-3 focus:ring-plum/50"
          >
            🌸 Agendar Primeira Consulta
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;