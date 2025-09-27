import { Button } from "@/components/ui/button";
import cafeHero from "@/assets/cafe-hero.jpg";

const Hero = () => {
  const scrollToContact = () => {
    const section = document.getElementById('contact');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={cafeHero} 
          alt="Acıktım Café atmosferi" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4 animate-fade-in-up">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
          Acıktım
        </h1>
        <p className="text-xl md:text-2xl mb-4 text-white/90 font-light">
          EN İYİ DENEYİM
        </p>
        <p className="text-lg md:text-xl mb-8 text-white/80 max-w-2xl mx-auto leading-relaxed">
          Her lokmada harika bir tat! 16 yıldır taze, lezzetli ve ev yapımı yemeklerle 
          hizmet veren kafenizde sıcak ortam sizi bekliyor.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            onClick={scrollToContact}
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg font-semibold shadow-large"
          >
            İletişime Geçin
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            className="bg-white/10 border-white/30 text-white hover:bg-white/20 backdrop-blur-sm px-8 py-6 text-lg font-semibold"
            onClick={() => {
              const section = document.getElementById('about');
              if (section) section.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Hakkımızda
          </Button>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;