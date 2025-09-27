import turkishBreakfast from "@/assets/turkish-breakfast.jpg";
import coffeeService from "@/assets/coffee-service.jpg";

const Gallery = () => {
  const images = [
    {
      src: turkishBreakfast,
      alt: "Geleneksel Türk kahvaltısı - taze peynir, zeytin, reçel ve çay",
      title: "Türk Kahvaltısı"
    },
    {
      src: coffeeService,
      alt: "Türk kahvesi servisi - geleneksel fincanlar ve lokum",
      title: "Kahve Servisi"
    }
  ];

  return (
    <section id="gallery" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 animate-fade-in-up">
            Lezzetlerimiz
          </h2>
          <div className="w-24 h-1 gradient-hero mx-auto mb-8 rounded-full"></div>
          <p className="text-xl text-muted-foreground leading-relaxed animate-fade-in-up">
            Damak zevkinize hitap eden lezzetli yemeklerimiz ve içeceklerimizden örnekler
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {images.map((image, index) => (
            <div 
              key={index} 
              className="group relative overflow-hidden rounded-2xl shadow-medium hover:shadow-large transition-all duration-500 animate-scale-in"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src={image.src} 
                  alt={image.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-6 left-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">{image.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto animate-fade-in-up">
            Taze malzemelerle hazırlanan özel tariflerimiz, geleneksel Türk mutfağının 
            en lezzetli örneklerini sunar. Her tabağımız özenle hazırlanır ve sevgiyle servis edilir.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Gallery;