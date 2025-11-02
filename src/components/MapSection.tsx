import { Button } from "@/components/ui/button";

const MapSection = () => {
  return (
    <section className="relative">
      <div className="h-[300px] bg-muted">
        <iframe 
          src="https://www.google.com/maps/place/1%C2%B003'16.2%22S+37%C2%B008'33.7%22E/@-1.0555556,37.1400037,1149m/data=!3m1!1e3!4m4!3m3!8m2!3d-1.054488!4d37.142703?entry=ttu&g_ep=EgoyMDI1MTAyOS4yIKXMDSoASAFQAw%3D%3D"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Eminence Realtors Limited Location"
        />
      </div>
      
      <div className="bg-primary py-8">
        <div className="container mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white text-lg font-bold text-center sm:text-left">
            We are very proud to be serving our local area for over 5 years!
          </p>
          <Button variant="outline" size="lg" asChild>
            <a href="tel:+254796349269">
              CALL +254-796-349-269
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default MapSection;
