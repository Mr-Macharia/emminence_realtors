import { useState } from "react";
import { Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent!",
      description: "We'll get back to you as soon as possible.",
    });
    setFormData({ firstName: "", lastName: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <p className="text-sm uppercase font-bold mb-2">We work Mon - Fri 8:00 - 16:00 Sat 8:00 - 1300</p>
        <h2 className="text-4xl sm:text-5xl font-bold text-primary mb-12 font-condensed">CALL +254-796-349-269</h2>

        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-3xl font-bold uppercase mb-8 font-condensed">CONTACT US</h3>
            
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Mail className="text-primary flex-shrink-0" size={20} />
                <a href="mailto:info@eminence.co.ke" className="hover:text-primary transition-colors">info@eminence.co.ke</a>
              </div>
              
              <div className="flex items-start gap-3">
                <MapPin className="text-primary flex-shrink-0 mt-1" size={20} />
                <div>
                  <p>Riverside Estate</p>
                  <p>Thika, Kiambu County, Kenya</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-3xl font-bold uppercase mb-8 font-condensed">MESSAGE US</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Name <span className="text-primary">*</span>
                  </label>
                  <Input 
                    required
                    placeholder="First"
                    value={formData.firstName}
                    onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                    className="bg-background"
                  />
                  <p className="text-xs text-muted-foreground mt-1">First</p>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 opacity-0">Last</label>
                  <Input 
                    placeholder="Last"
                    value={formData.lastName}
                    onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                    className="bg-background"
                  />
                  <p className="text-xs text-muted-foreground mt-1">Last</p>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Email <span className="text-primary">*</span>
                </label>
                <Input 
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="bg-background"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Message <span className="text-primary">*</span>
                </label>
                <Textarea 
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="bg-background resize-none"
                />
              </div>

              <Button type="submit" size="lg">SUBMIT</Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
