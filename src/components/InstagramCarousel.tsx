import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const InstagramCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const instagramPosts = [
    { id: 1, permalink: 'https://www.instagram.com/p/C72ROq9v_8Z/' },
    { id: 2, permalink: 'https://www.instagram.com/p/DNN_BPLtK6c/' },
    { id: 3, permalink: 'https://www.instagram.com/p/DMtSo1_OfwD/' },
    { id: 4, permalink: 'https://www.instagram.com/p/DMaMgZFt7TE/' },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % instagramPosts.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + instagramPosts.length) % instagramPosts.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  useEffect(() => {
    const numSlides = instagramPosts.length;
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % numSlides);
    }, 5000);
    return () => clearInterval(timer);
  }, [instagramPosts.length]);

  // Carrega script do Instagram para auto-ajustar a altura do embed e processa os blockquotes
  useEffect(() => {
    const scriptSrc = 'https://www.instagram.com/embed.js';
    const alreadyLoaded = document.querySelector(`script[src="${scriptSrc}"]`);
    if (!alreadyLoaded) {
      const script = document.createElement('script');
      script.src = scriptSrc;
      script.async = true;
      script.defer = true;
      script.onload = () => {
        // @ts-expect-error instgrm é injetado pelo script externo
        if (window.instgrm?.Embeds?.process) window.instgrm.Embeds.process();
      };
      document.body.appendChild(script);
    } else {
      // @ts-expect-error instgrm é injetado pelo script externo
      if (window.instgrm?.Embeds?.process) window.instgrm.Embeds.process();
    }
  }, []);

  // Reprocessa ao trocar de slide para garantir ajuste do tamanho
  useEffect(() => {
    // @ts-expect-error instgrm é injetado pelo script externo
    if (window.instgrm?.Embeds?.process) window.instgrm.Embeds.process();
  }, [currentSlide]);

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-poppins text-3xl sm:text-4xl font-bold text-text-primary mb-4">
            Acompanhe no Instagram
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Dicas exclusivas, bastidores do consultório e conteúdo sobre saúde da mulher
          </p>
        </div>

        {/* Carousel */}
        <div className="relative max-w-4xl mx-auto">
          <div className="relative rounded-3xl overflow-hidden shadow-xl">
            <div
              className={
                `flex transition-transform duration-500 ease-out ` +
                (currentSlide === 0
                  ? 'translate-x-0'
                  : currentSlide === 1
                  ? '-translate-x-[100%]'
                  : currentSlide === 2
                  ? '-translate-x-[200%]'
                  : currentSlide === 3
                  ? '-translate-x-[300%]'
                  : '')
              }
            >
              {instagramPosts.map((post) => (
                <div key={post.id} className="w-full flex-shrink-0 px-2">
                  <div className="max-w-[540px] mx-auto">
                    <blockquote
                      className="instagram-media bg-white border-0 m-0 p-0 min-w-[326px] max-w-[540px] w-full"
                      data-instgrm-permalink={post.permalink}
                      data-instgrm-version="14"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 p-3 bg-white/80 backdrop-blur-sm hover:bg-white rounded-full shadow-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-plum/50"
            aria-label="Post anterior"
          >
            <ChevronLeft className="w-6 h-6 text-plum" />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 p-3 bg-white/80 backdrop-blur-sm hover:bg-white rounded-full shadow-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-plum/50"
            aria-label="Próximo post"
          >
            <ChevronRight className="w-6 h-6 text-plum" />
          </button>

          {/* Dots pagination */}
          <div className="flex justify-center space-x-2 mt-6">
            {instagramPosts.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-plum/50 ${
                  currentSlide === index ? 'bg-plum w-8' : 'bg-dusty'
                }`}
                aria-label={`Ir para o slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default InstagramCarousel;