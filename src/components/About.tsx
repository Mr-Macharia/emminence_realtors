import goldenKeyImage from "@/assets/golden-key.jpg";
import lockPickingImage from "@/assets/lock-picking.jpg";

const About = () => {
  return (
    <section id="about" className="py-20 bg-background relative">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl sm:text-5xl font-bold uppercase font-condensed">ABOUT US</h2>
            
            <h3 className="text-xl font-bold">Eminence Realtors Limited is a duly registed company with the Director being a registered under the estate agency chapter with ISK.</h3>
            
            <p className="text-muted-foreground leading-relaxed">
              Eminence Realtors Ltd was born from a vision to enhancing luxury real estate in a way that it is both approachable and reliable. Our firm has consistently delivered personalized, high-impact results for clients seeking premium residence experience and intelligent investment options. Trust and Transparency is at the core of everything we do. We take pride in being more than just realtors; we are long-term partners and advisors, guiding clients with integrity, market intelligence, and an unwavering commitment to satisfaction.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              <span className="font-semibold">Our Mission</span>- At Eminence Realtors Ltd, our mission is to provide exceptional, client-centered real estate agency services built on trust, integrity and a deep understanding of each client's unique goals. We are committed to guiding individuals, families and corporates' through every step of the property journey, delivering personalized solutions that lead to lasting satisfaction and lifelong relationships.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              <span className="font-semibold">Our Vission</span>- At Eminence Realtors Ltd, our vision is to be the most trusted and sought-after real estate partner, known for redefining the estate agency experience through passion, professionalism, and genuine care. We aim to set new standards in real estate by consistently exceeding expectations, empowering our clients, and creating meaningful places where life's best moments happen.
            </p>

            <div>
              <h3 className="text-xl font-bold">FREDRICK NDEGWA.</h3>
              <p className="font-semibold">MANAGING DIRECTOR - GMISK - EA CHAPTER.</p>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-5">
              <svg width="400" height="400" viewBox="0 0 400 400" fill="none">
                <rect x="100" y="150" width="200" height="150" rx="10" stroke="currentColor" strokeWidth="15"/>
                <path d="M150 150V120C150 86.8629 176.863 60 210 60V60C243.137 60 270 86.8629 270 120V150" stroke="currentColor" strokeWidth="15"/>
              </svg>
            </div>

            <div className="relative space-y-4">
              <img 
                src={goldenKeyImage} 
                alt="Golden key on brick wall" 
                className="w-full rounded-lg shadow-lg"
              />
              <img 
                src={lockPickingImage} 
                alt="Professional lock picking" 
                className="w-full rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;