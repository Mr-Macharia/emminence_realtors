import { MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-keys-lock.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-[600px] lg:min-h-[700px] flex items-center bg-dark-slate text-white overflow-hidden">
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Professional estate agency services" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-dark-slate via-dark-slate/95 to-dark-slate/70" />
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-3xl">
          <div className="flex items-start gap-2 mb-6">
            <MapPin className="text-primary mt-1 flex-shrink-0" size={24} />
            <div>
              <p className="text-primary font-bold text-lg">Riverside Estate</p>
              <p className="text-primary font-bold text-lg">Thika, Kiambu County, Kenya</p>
            </div>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold uppercase leading-tight mb-8 font-condensed">
            ESTATE AGENCY AND<br />
            PROPERTY MANAGEMENT SERVICES,<br />
            SINCE 2019
          </h1>

          <Button size="lg" asChild>
            <a href="tel:+254796349269">
              CALL +254-796-349-269
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
