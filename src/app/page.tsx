import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MissionSection } from "@/components/sections/MissionSection";
import { CoursesSection } from "@/components/sections/CoursesSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow">
        <section id="home" className="relative py-20 md:py-32 lg:py-40 bg-gradient-to-br from-primary/10 to-accent/10 overflow-hidden">
          <div className="absolute inset-0 opacity-10">
             {/* Subtle background pattern or image can be added here */}
          </div>
          <div className="container mx-auto px-4 text-center relative z-10">
            <h1 className="font-headline text-4xl sm:text-5xl md:text-6xl font-bold text-primary mb-6 leading-tight">
              Unlock Your Potential with <br/> <span className="text-accent">SS Study Circle Hub</span>
            </h1>
            <p className="font-body text-lg md:text-xl text-foreground/80 max-w-3xl mx-auto mb-10">
              Dedicated to providing high-quality education and fostering a passion for learning. Explore our courses and join a community committed to excellence.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <Button asChild variant="yellow" size="lg" className="font-body font-bold shadow-lg hover:shadow-primary/30 transition-shadow">
                <Link href="#courses">Explore Courses</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="font-body font-bold border-primary text-primary hover:bg-primary/10 hover:text-primary shadow-sm hover:shadow-md transition-all">
                <Link href="#contact">Contact Us</Link>
              </Button>
            </div>
          </div>
           <div className="absolute -bottom-1/3 left-0 w-full h-2/3 opacity-5" style={{backgroundImage: "url('https://www.transparenttextures.com/patterns/ диагональные-линии.png')"}}></div>
        </section>

        <MissionSection />
        <CoursesSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
