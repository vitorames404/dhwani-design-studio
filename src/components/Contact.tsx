import { Card, CardContent } from "@/components/ui/card";
import { Mail, Linkedin } from "lucide-react";

const EMAIL = "maildhwanijha@gmail.com";
const LINKEDIN = "https://www.linkedin.com/in/dhwani-jha/"; // <- replace with your profile

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="section-title mb-8">Let's Create Together</h2>
          <p className="text-xl text-muted-foreground mb-16">
            I'm always interested in discussing new opportunities and innovative projects
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Email */}
            <a
              href={`mailto:${EMAIL}`}
              aria-label="Send me an email"
              className="block"
            >
              <Card className="border-0 shadow-lg hover-lift h-full">
                <CardContent className="p-8 text-center">
                  <Mail className="w-8 h-8 text-accent mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2">Email</h3>
                  <p className="text-muted-foreground">{EMAIL}</p>
                </CardContent>
              </Card>
            </a>

            {/* LinkedIn */}
            <a
              href={LINKEDIN}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit my LinkedIn"
              className="block"
            >
              <Card className="border-0 shadow-lg hover-lift h-full">
                <CardContent className="p-8 text-center">
                  <Linkedin className="w-8 h-8 text-accent mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2">LinkedIn</h3>
                  <p className="text-muted-foreground">Open profile</p>
                </CardContent>
              </Card>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
