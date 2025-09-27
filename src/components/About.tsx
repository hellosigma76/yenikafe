import { Card } from "@/components/ui/card";
import { Clock, Heart, Users } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-cafe-cream">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 animate-fade-in-up">
            Hakkımızda
          </h2>
          <div className="w-24 h-1 gradient-hero mx-auto mb-8 rounded-full"></div>
          <p className="text-xl text-muted-foreground leading-relaxed animate-fade-in-up">
            16 yıldır taze, lezzetli ve ev yapımı yemeklerle hizmet veren kafemizde 
            sıcak ortam, damak zevkinize uygun tatlar ve güler yüzlü servis burada sizi bekliyor.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <Card className="p-8 text-center shadow-medium hover:shadow-large transition-all duration-300 animate-scale-in">
            <div className="w-16 h-16 gradient-hero rounded-full flex items-center justify-center mx-auto mb-6">
              <Clock className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-4">16+ Yıl Deneyim</h3>
            <p className="text-muted-foreground">
              16 seneden aşkın süredir kesintisiz hizmet veren deneyimli ekibimizle 
              her zaman en iyisini sunuyoruz.
            </p>
          </Card>

          <Card className="p-8 text-center shadow-medium hover:shadow-large transition-all duration-300 animate-scale-in">
            <div className="w-16 h-16 gradient-hero rounded-full flex items-center justify-center mx-auto mb-6">
              <Heart className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-4">Ev Yapımı</h3>
            <p className="text-muted-foreground">
              Tüm yemeklerimiz ev yapımı tariflerle, taze malzemeler kullanılarak 
              özenle hazırlanır.
            </p>
          </Card>

          <Card className="p-8 text-center shadow-medium hover:shadow-large transition-all duration-300 animate-scale-in">
            <div className="w-16 h-16 gradient-hero rounded-full flex items-center justify-center mx-auto mb-6">
              <Users className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-4">Sıcak Ortam</h3>
            <p className="text-muted-foreground">
              Güler yüzlü servisimiz ve sıcak atmosferimizle kendinizi evinizde 
              hissedeceğiniz bir ortam sunuyoruz.
            </p>
          </Card>
        </div>

        <div className="text-center">
          <p className="text-lg text-foreground font-medium animate-fade-in-up">
            16 Seneye aşkındır hizmet veren cafemize herkez davetli.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;