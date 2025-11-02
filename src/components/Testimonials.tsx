import { Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Fraciah Wambui",
      text: "Our property manager Fredrick Ndegwa is simply wonderful. He's helped place us in a wonderful home (we're the tenants) with a very amazing Landlord. Not to mention he has been empathetic, efficient, reliable and understanding. It's rare in the Kenyan rental circumstances to have good things to say about your property manager but he has helped us feel safe and secure throughout.",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Jane"
    },
    {
      name: "Simon Muiruri",
      text: "We were first time buyers and Fredrick Ndegwa was our sales agent and he truly went above and beyond to help us find our dream home. He kept us extremely well informed about the process, he always advocated for us and truly understood our needs. He even got things done for us that the sellers refused to do. We are so glad to have worked with him! Will definitely recommend him and if needed in future will chose him.",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=James"
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-dark-slate text-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-[400px_1fr] gap-12">
          <div className="bg-primary p-12 rounded-lg flex flex-col items-center justify-center text-center">
            <div className="flex gap-1 mb-4">
              {[1, 2, 3, 4].map((star) => (
                <Star key={star} size={20} fill="currentColor" className="text-rating" />
              ))}
              <Star size={20} fill="currentColor" className="text-rating opacity-50" />
            </div>
            <p className="text-6xl font-bold mb-4">4.8</p>
            <p className="text-lg font-bold mb-2">Our average customer rating is 4.8 / 5 based on 29 reviews</p>
          </div>

          <div className="flex flex-col justify-center">
            <h2 className="text-4xl sm:text-5xl font-bold uppercase mb-12 font-condensed">WHAT OUR CUSTOMERS SAY</h2>

            <div className="space-y-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="border-b border-white/20 pb-8 last:border-0">
                  <p className="text-lg mb-4 leading-relaxed">{testimonial.text}</p>
                  <div className="flex items-center gap-3">
                    <img 
                      src={testimonial.avatar} 
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full bg-white/10"
                    />
                    <p className="font-bold">{testimonial.name}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
