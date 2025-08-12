import React from 'react';
import { BookOpen, Lightbulb, MessageCircle } from 'lucide-react';

const Content = () => {
  const contentPieces = [
    {
      icon: BookOpen,
      title: "Guia TPM Sem Drama",
      description: "Estratégias nutricionais para aliviar sintomas da TPM naturalmente",
      color: "from-plum to-mauve"
    },
    {
      icon: Lightbulb,
      title: "Mitos e Verdades",
      description: "Descubra o que realmente funciona na nutrição feminina",
      color: "from-mauve to-dusty"
    },
    {
      icon: MessageCircle,
      title: "Dicas Rápidas",
      description: "Conteúdo prático para o seu dia a dia alimentar",
      color: "from-dusty to-blush"
    }
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-cream">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-poppins text-3xl sm:text-4xl font-bold text-text-primary mb-4">
            Conteúdo & Educação
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Informação de qualidade para você cuidar da sua saúde com consciência
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {contentPieces.map((content, index) => (
            <div
              key={index}
              className="group p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              <div className="space-y-4">
                <div className={`w-12 h-12 bg-gradient-to-br ${content.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <content.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-poppins text-xl font-semibold text-text-primary mb-2">
                    {content.title}
                  </h3>
                  <p className="text-text-secondary">
                    {content.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Featured Quote */}
        <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 lg:p-12 shadow-xl">
          <blockquote className="text-center">
            <p className="font-playfair text-2xl lg:text-3xl italic text-text-primary leading-relaxed mb-6">
              "O cuidado com a alimentação é um investimento em todas as fases da vida da mulher. É sobre autonomia, conhecimento e amor próprio."
            </p>
            <footer className="flex items-center justify-center gap-4">
              <img
                src="https://images.pexels.com/photos/5207262/pexels-photo-5207262.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop"
                alt="Aline Castro"
                className="w-12 h-12 rounded-full object-cover"
                loading="lazy"
              />
              <div>
                <div className="font-semibold text-plum">Aline Castro</div>
                <div className="text-sm text-text-secondary">Nutricionista Clínica</div>
              </div>
            </footer>
          </blockquote>
        </div>
      </div>
    </section>
  );
};

export default Content;