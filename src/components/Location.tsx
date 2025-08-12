import React, { useState } from 'react';
import { MapPin, Phone, Clock, ChevronDown, ChevronUp } from 'lucide-react';

const Location = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const faqItems = [
    {
      question: "Como funciona a primeira consulta?",
      answer: "A primeira consulta tem duração de 60-90 minutos. Fazemos uma anamnese completa, avaliação do histórico alimentar e definimos objetivos personalizados para seu tratamento."
    },
    {
      question: "Atende online e presencial?",
      answer: "Sim! Atendo presencialmente em Belo Horizonte no consultório na Savassi e também ofereço consultas online para pacientes de qualquer lugar do Brasil."
    },
    {
      question: "Como funcionam os retornos?",
      answer: "Os retornos são programados conforme a necessidade de cada paciente, geralmente entre 15-30 dias. O acompanhamento é essencial para ajustar o plano e garantir os melhores resultados."
    }
  ];

  const handleWhatsAppClick = () => {
    window.open('https://api.whatsapp.com/send/?phone=5531997998377&text&type=phone_number&app_absent=0', '_blank');
  };

  const handleInstagramClick = () => {
    window.open('https://www.instagram.com/nutri.alinecastro', '_blank');
  };

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-cream">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-poppins text-3xl sm:text-4xl font-bold text-text-primary mb-4">
            Onde estou
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Venha me conhecer pessoalmente ou agende uma consulta online
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            {/* Address */}
            <div className="flex items-start gap-4 p-6 bg-white rounded-2xl shadow-lg">
              <div className="w-12 h-12 bg-plum rounded-xl flex items-center justify-center flex-shrink-0">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-poppins text-xl font-semibold text-text-primary mb-2">
                  Consultório Presencial
                </h3>
                <p className="text-text-secondary leading-relaxed">
                  Edifício Savassi Premium<br />
                  R. Rio Grande do Norte, 1435, sala 606<br />
                  Savassi, Belo Horizonte – MG<br />
                  CEP: 30130-131
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start gap-4 p-6 bg-white rounded-2xl shadow-lg">
              <div className="w-12 h-12 bg-dusty rounded-xl flex items-center justify-center flex-shrink-0">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-poppins text-xl font-semibold text-text-primary mb-2">
                  Contato
                </h3>
                <p className="text-text-secondary">
                  📱 (31) 99799-8377
                </p>
              </div>
            </div>

            {/* Hours */}
            <div className="flex items-start gap-4 p-6 bg-white rounded-2xl shadow-lg">
              <div className="w-12 h-12 bg-mauve rounded-xl flex items-center justify-center flex-shrink-0">
                <Clock className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-poppins text-xl font-semibold text-text-primary mb-2">
                  Horários
                </h3>
                <p className="text-text-secondary">
                  Segunda à Sexta: 8h às 18h<br />
                  Sábados: Sob consulta
                </p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={handleWhatsAppClick}
                className="flex-1 px-6 py-4 bg-plum text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-3 focus:ring-plum/50"
              >
                📱 Agendar no WhatsApp
              </button>
              <button
                onClick={handleInstagramClick}
                className="flex-1 px-6 py-4 border-2 border-mauve text-plum font-semibold rounded-2xl hover:bg-blush transition-all duration-300 focus:outline-none focus:ring-3 focus:ring-mauve/50"
              >
                Ver no Instagram
              </button>
            </div>
          </div>

          {/* FAQ */}
          <div className="space-y-6">
            <h3 className="font-poppins text-2xl font-semibold text-text-primary">
              Perguntas Frequentes
            </h3>
            
            {faqItems.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg overflow-hidden"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-cream/50 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-plum/50"
                >
                  <h4 className="font-poppins text-lg font-semibold text-text-primary pr-4">
                    {item.question}
                  </h4>
                  {openFAQ === index ? (
                    <ChevronUp className="w-5 h-5 text-plum flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-plum flex-shrink-0" />
                  )}
                </button>
                
                {openFAQ === index && (
                  <div className="px-6 pb-6">
                    <p className="text-text-secondary leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Map */}
        <div className="mt-12">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="aspect-video">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3751.518087266744!2d-43.937589!3d-19.924583!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa699c2f7d54097%3A0x5c8b38a6b5d7e8f9!2sR.%20Rio%20Grande%20do%20Norte%2C%201435%20-%20Savassi%2C%20Belo%20Horizonte%20-%20MG%2C%2030130-131!5e0!3m2!1spt-BR!2sbr!4v1700000000000!5m2!1spt-BR!2sbr"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização do consultório - Savassi Premium"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;