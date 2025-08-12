 

const About = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-cream">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6">
            <h2 className="font-poppins text-3xl sm:text-4xl font-bold text-text-primary">
              Sobre mim
            </h2>
            
            <div className="space-y-4">
              <p className="text-lg text-text-secondary leading-relaxed">
                Sou Aline Castro, nutricionista clínica. Acredito em um cuidado acolhedor e baseado em ciência para transformar hábitos com leveza. Atendo presencialmente em Belo Horizonte e no online para quem está longe.
              </p>
              
              <p className="text-lg text-text-secondary leading-relaxed">
                Minha especialização é trabalhar com famílias, com atenção especial à <strong className="text-plum">saúde da mulher</strong>. Desenvolvo planos personalizados que equilibram acolhimento e evidência científica, respeitando cada fase da vida.
              </p>
            </div>

            {/* Specialties chips */}
            <div className="flex flex-wrap gap-3">
              <span className="px-4 py-2 bg-blush text-plum text-sm font-medium rounded-full">
                TPM/SOP
              </span>
              <span className="px-4 py-2 bg-dusty text-white text-sm font-medium rounded-full">
                Climatério & menopausa
              </span>
              <span className="px-4 py-2 bg-mauve text-white text-sm font-medium rounded-full">
                Diabetes
              </span>
              <span className="px-4 py-2 bg-plum/20 text-plum text-sm font-medium rounded-full">
                Famílias
              </span>
            </div>

            {/* Quote */}
            <blockquote className="mt-8 p-6 bg-white/60 backdrop-blur-sm rounded-2xl border border-dusty/20">
              <p className="font-playfair text-lg italic text-text-primary leading-relaxed">
                "Acredito que cuidar da alimentação é um ato de amor próprio. Cada mulher merece se sentir confiante e saudável em todas as fases da vida."
              </p>
              <footer className="mt-3 text-plum font-medium">— Aline Castro</footer>
            </blockquote>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl w-full max-w-[330px] aspect-[11/18] mx-0">
              <img
                src="/sobremim.png"
                alt="Aline Castro no consultório, demonstrando cuidado e profissionalismo"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              {/* Soft overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-transparent to-plum/10"></div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-dusty/30 rounded-3xl blur-xl"></div>
            <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-mauve/40 rounded-2xl blur-lg"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;