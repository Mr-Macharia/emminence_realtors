import { ChevronRight } from "lucide-react";
import automotiveImage from "@/assets/man-writing-new-house.jpg";
import residentialImage from "@/assets/residential-service.jpg";
import commercialImage from "@/assets/commercial-service.jpg";

const Services = () => {
  const services = [
    {
      title: "LAND & PROPERTY ASSETS",
      image: automotiveImage,
      items: [
        "Site Acquisition and Conveyancy Support",
        "Land Registration Support",
        "Insolvency and Liquidation Advisory"
      ]
    },
    {
      title: "RESIDENTIAL",
      image: residentialImage,
      items: [
        "Letting and Selling of Residential Assets",
        "Tenant Placement and Rent Collection Management",
        "Property and Facility Maintenance"
      ]
    },
    {
      title: "COMMERCIAL",
      image: commercialImage,
      items: [
        "Leasing and Selling of Commercial Assets",
        "Leasee Placement and Accounting Management",
        "Real Estate Market Surveys and Feasibiliy Sudies"
      ]
    }
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl sm:text-5xl font-bold uppercase mb-12 font-condensed">OUR SERVICES</h2>

        <div className="grid md:grid-cols-3 gap-0">
          {services.map((service, index) => (
            <div key={index} className="group">
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="bg-muted p-8">
                <h3 className="text-2xl font-bold uppercase mb-6 font-condensed border-b-2 border-foreground inline-block pb-2">
                  {service.title}
                </h3>
                <ul className="space-y-4">
                  {service.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start gap-2">
                      <ChevronRight className="flex-shrink-0 mt-0.5" size={20} />
                      <span className="text-sm font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
