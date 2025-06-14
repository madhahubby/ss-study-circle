import { ContactForm } from "@/components/ContactForm";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, MapPin } from "lucide-react";

export function ContactSection() {
  return (
    <section id="contact" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl md:text-4xl font-bold text-primary mb-4">
            Get In Touch
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
            We're here to help you on your educational journey. Reach out to us with any questions or inquiries.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 items-start">
          <div className="lg:col-span-2 space-y-6">
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="font-headline text-xl flex items-center text-primary">
                  <MapPin className="h-6 w-6 mr-3 text-primary" />
                  Our Location
                </CardTitle>
              </CardHeader>
              <CardContent className="font-body text-foreground/80">
                <p>123 Education Lane</p>
                <p>Knowledge City, ST 54321</p>
                <p>United States</p>
              </CardContent>
            </Card>
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="font-headline text-xl flex items-center text-primary">
                   <Phone className="h-6 w-6 mr-3 text-primary" />
                  Call Us
                </CardTitle>
              </CardHeader>
              <CardContent className="font-body text-foreground/80">
                <p>General Inquiries: (555) 123-4567</p>
                <p>Admissions: (555) 987-6543</p>
              </CardContent>
            </Card>
             <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="font-headline text-xl flex items-center text-primary">
                   <Mail className="h-6 w-6 mr-3 text-primary" />
                  Email Us
                </CardTitle>
              </CardHeader>
              <CardContent className="font-body text-foreground/80">
                <p>info@ssstudycircle.com</p>
                <p>admissions@ssstudycircle.com</p>
              </CardContent>
            </Card>
          </div>

          <div className="lg:col-span-3">
            <Card className="shadow-xl p-6 md:p-8">
              <CardHeader className="p-0 mb-6">
                <CardTitle className="font-headline text-2xl text-primary">Send Us a Message</CardTitle>
                <CardDescription className="font-body text-muted-foreground">
                  Fill out the form below and we'll get back to you as soon as possible.
                </CardDescription>
              </CardHeader>
              <CardContent className="p-0">
                <ContactForm />
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
