import React from 'react';
import { Star } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Maria Silva",
      text: "A Aline me ajudou a entender meu corpo durante a menopausa. Hoje me sinto muito melhor e mais confiante.",
      rating: 5
    },
    {
      name: "Ana Costa",
      text: "Profissional excepcional! Me acompanhou durante toda a gestação com muito cuidado e atenção.",
      rating: 5
    },
    {
      name: "Juliana Santos",
      text: "Finalmente encontrei alguém que entende de SOP. O tratamento foi transformador para minha vida.",
      rating: 5
    }
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-poppins text-3xl sm:text-4xl font-bold text-text-primary mb-4">
            O que dizem minhas pacientes
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Histórias reais de transformação e cuidado
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="p-6 bg-cream border border-dusty/20 rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-plum text-plum" />
                ))}
              </div>

              {/* Text */}
              <p className="text-text-secondary italic mb-4 leading-relaxed">
                "{testimonial.text}"
              </p>

              {/* Name */}
              <div className="font-semibold text-plum">
                {testimonial.name}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;