import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, MapPin, FileDown } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="section-title mb-8">Let's Create Together</h2>
          <p className="text-xl text-muted-foreground mb-16">
            I'm always interested in discussing new opportunities and innovative projects
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <Card className="border-0 shadow-lg hover-lift">
              <CardContent className="p-8 text-center">
                <Mail className="w-8 h-8 text-accent mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Email</h3>
                <p className="text-muted-foreground">maildhwanijha@gmail.com</p>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-lg hover-lift">
              <CardContent className="p-8 text-center">
                <MapPin className="w-8 h-8 text-accent mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Location</h3>
                <p className="text-muted-foreground">New Zealand</p>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-lg hover-lift">
              <CardContent className="p-8 text-center">
                <FileDown className="w-8 h-8 text-accent mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Portfolio</h3>
                <p className="text-muted-foreground">Download PDF</p>
              </CardContent>
            </Card>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-6 text-lg"
            >
              Get In Touch
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="px-8 py-6 text-lg"
            >
              View LinkedIn
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;