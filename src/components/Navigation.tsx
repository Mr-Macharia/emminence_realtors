import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <>
      <nav className="bg-background border-b border-border sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center gap-3">
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="10" y="15" width="20" height="15" rx="2" stroke="#EA6A47" strokeWidth="2.5" fill="none"/>
                <path d="M15 15V12C15 8.68629 17.6863 6 21 6V6C24.3137 6 27 8.68629 27 12V15" stroke="#EA6A47" strokeWidth="2.5" strokeLinecap="round"/>
                <circle cx="21" cy="24" r="2" fill="#EA6A47"/>
              </svg>
              <div>
                <h1 className="text-2xl font-bold tracking-tight">EMINENCE</h1>
                <p className="text-xs text-muted-foreground -mt-1">Realtors Limited</p>
              </div>
            </div>

            <div className="hidden md:flex items-center gap-8">
              <button onClick={() => scrollToSection("home")} className="text-sm font-medium hover:text-primary transition-colors">Home</button>
              <button onClick={() => scrollToSection("services")} className="text-sm font-medium hover:text-primary transition-colors">Services</button>
              <button onClick={() => scrollToSection("about")} className="text-sm font-medium hover:text-primary transition-colors">About Us</button>
              <button onClick={() => scrollToSection("why-choose-us")} className="text-sm font-medium hover:text-primary transition-colors">Why Choose Us</button>
              <button onClick={() => scrollToSection("testimonials")} className="text-sm font-medium hover:text-primary transition-colors">Testimonials</button>
              <button onClick={() => scrollToSection("contact")} className="text-sm font-medium hover:text-primary transition-colors">Contact Us</button>
            </div>

            <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden bg-background border-t border-border">
            <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
              <button onClick={() => scrollToSection("home")} className="text-sm font-medium hover:text-primary transition-colors text-left">Home</button>
              <button onClick={() => scrollToSection("services")} className="text-sm font-medium hover:text-primary transition-colors text-left">Services</button>
              <button onClick={() => scrollToSection("about")} className="text-sm font-medium hover:text-primary transition-colors text-left">About Us</button>
              <button onClick={() => scrollToSection("why-choose-us")} className="text-sm font-medium hover:text-primary transition-colors text-left">Why Choose Us</button>
              <button onClick={() => scrollToSection("testimonials")} className="text-sm font-medium hover:text-primary transition-colors text-left">Testimonials</button>
              <button onClick={() => scrollToSection("contact")} className="text-sm font-medium hover:text-primary transition-colors text-left">Contact Us</button>
            </div>
          </div>
        )}
      </nav>

      <div className="bg-primary text-primary-foreground py-2 px-4">
        <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-sm font-bold uppercase tracking-wide">ALWAYS OPEN! Mon - Fri 8:00 - 16:00 Sat 8:00 - 13:00</p>
          <a href="tel:+254796349269" className="text-sm font-bold uppercase tracking-wide hover:underline">CALL NOW! +254 796 349 269</a>
        </div>
      </div>
    </>
  );
};

export default Navigation;
