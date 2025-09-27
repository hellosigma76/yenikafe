const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-cafe-brown text-white py-12">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h3 className="text-3xl font-bold mb-4">Acıktım</h3>
          <p className="text-white/80 mb-6 text-lg">
            En İyi Deneyim - 16+ Yıldır Hizmetinizde
          </p>
          
          <div className="flex justify-center items-center space-x-4 mb-8">
            <div className="h-px bg-white/30 flex-1 max-w-24"></div>
            <span className="text-white/60">★</span>
            <div className="h-px bg-white/30 flex-1 max-w-24"></div>
          </div>
          
          <p className="text-white/60 text-sm">
            © {currentYear} Acıktım Café. Tüm hakları saklıdır.
          </p>
          <p className="text-white/50 text-xs mt-2">
            Taze, lezzetli ve ev yapımı yemeklerle hizmet veren kafeniz.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;