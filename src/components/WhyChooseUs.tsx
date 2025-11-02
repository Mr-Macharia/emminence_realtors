import keyInDoorImage from "@/assets/key-in-door.jpg";

const WhyChooseUs = () => {
  return (
    <section id="why-choose-us" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <p className="text-primary font-bold uppercase mb-2">Your Property, Our Concern</p>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold uppercase mb-16 font-condensed max-w-4xl">
          WE PROVIDE THE BEST RESIDENTIAL AND COMMERCIAL AND ESTATE AGENCY SERVICES
        </h2>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h3 className="text-2xl sm:text-3xl font-bold uppercase text-primary mb-8 font-condensed">
              EMINENCE REALTORS LTD IS A<br />
              REGISTERED AND INCORPORATED<br />
              COMPANY OPERATING IN KENYA.
            </h3>

            <div className="bg-background p-8 rounded-lg shadow-md">
              <h4 className="text-xl font-bold mb-4">Extensive knowledge and expertise in all matters commercial and residential.</h4>
              <p className="text-muted-foreground leading-relaxed">
                As trusted experts who facilitate the sale, rental and management of buildings,land and other property assets in Kenya. We believe in playing our professional role better than others and in this case, we connect buyers to sellers, landlords to tenants as well as offer investors accurate markets insights and practical transaction support.
              </p>
            </div>
          </div>

          <div>
            <img 
              src={keyInDoorImage} 
              alt="Key in door lock" 
              className="w-full rounded-lg shadow-xl"
            />
          </div>
        </div>

        <div className="bg-background p-8 rounded-lg shadow-md">
          <p className="text-sm uppercase font-bold mb-4">Why choose us</p>
          <h3 className="text-3xl sm:text-4xl font-bold uppercase mb-12 font-condensed">
            FULLY LICENSED,<br />EXPERIENCED AND CAPABLE
          </h3>

          <div className="grid sm:grid-cols-2 gap-8">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-primary">
                  <rect x="6" y="11" width="12" height="10" rx="1" />
                  <path d="M9 11V7a3 3 0 0 1 6 0v4" />
                </svg>
              </div>
              <div>
                <h4 className="font-bold mb-2">Certified Estate Agents</h4>
                <p className="text-sm text-muted-foreground">We are legally registered estate agents under the Estate Agency Chapter of the Institute of Surveyors of Kenya.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-primary">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                </svg>
              </div>
              <div>
                <h4 className="font-bold mb-2">Quickest Response</h4>
                <p className="text-sm text-muted-foreground">We embrace a proper and state of art property management system that ensures timely interaction between all stakeholders.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-primary">
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              </div>
              <div>
                <h4 className="font-bold mb-2">Customer Support</h4>
                <p className="text-sm text-muted-foreground">We are able to ensure seemless customer support as well as transparency in all management operations.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-primary">
                  <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                  <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                </svg>
              </div>
              <div>
                <h4 className="font-bold mb-2">Extensive Knowledge</h4>
                <p className="text-sm text-muted-foreground">We have absolute confidence in our unmatched knowledge in tha Real Estate Sector in Kenya and believe in offering the best.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
