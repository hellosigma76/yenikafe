import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Phone, MapPin, Clock } from "lucide-react";

const Contact = () => {
  const handleCallClick = () => {
    window.location.href = "tel:+904222118488";
  };

  return (
    <section id="contact" className="py-20 gradient-warm">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 animate-fade-in-up">
            İletişime Geçin
          </h2>
          <div className="w-24 h-1 gradient-hero mx-auto mb-8 rounded-full"></div>
          <p className="text-xl text-muted-foreground leading-relaxed animate-fade-in-up">
            Burada bizimle iletişime geçebilirsiniz. Herhangi bir sorunuz, isteğiniz, 
            arzunuz olduğunda aramaktan çekinmeyiniz.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <Card className="p-8 text-center shadow-medium hover:shadow-large transition-all duration-300 animate-scale-in">
            <div className="w-16 h-16 gradient-hero rounded-full flex items-center justify-center mx-auto mb-6">
              <Phone className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-4">Telefon</h3>
            <p className="text-muted-foreground mb-4">
              Rezervasyon ve bilgi için bizi arayabilirsiniz
            </p>
            <Button 
              onClick={handleCallClick}
              className="gradient-hero text-white font-semibold hover:shadow-medium transition-all"
            >
              0422 211 84 88
            </Button>
          </Card>

          <Card className="p-8 text-center shadow-medium hover:shadow-large transition-all duration-300 animate-scale-in">
            <div className="w-16 h-16 gradient-hero rounded-full flex items-center justify-center mx-auto mb-6">
              <MapPin className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-4">Konum</h3>
            <p className="text-muted-foreground">
              Merkezi konumumuzda sizi ağırlamaktan mutluluk duyarız
            </p>
          </Card>

          <Card className="p-8 text-center shadow-medium hover:shadow-large transition-all duration-300 animate-scale-in">
            <div className="w-16 h-16 gradient-hero rounded-full flex items-center justify-center mx-auto mb-6">
              <Clock className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-4">Çalışma Saatleri</h3>
            <p className="text-muted-foreground">
              Her gün sizlere hizmet vermekten mutluluk duyuyoruz
            </p>
          </Card>
        </div>

        <div className="text-center">
          <div className="max-w-2xl mx-auto gradient-hero p-8 rounded-2xl text-white shadow-large animate-fade-in-up">
            <h3 className="text-3xl font-bold mb-4">Bizi Ziyaret Edin</h3>
            <p className="text-xl mb-6 text-white/90">
              16 yıllık deneyimimizle hazırladığımız lezzetleri tatmak için cafemize bekleriz!
            </p>
            <Button 
              onClick={handleCallClick}
              variant="outline"
              size="lg"
              className="bg-white/10 border-white/30 text-white hover:bg-white/20 backdrop-blur-sm font-semibold"
            >
              Hemen Arayın: 0422 211 84 88
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;