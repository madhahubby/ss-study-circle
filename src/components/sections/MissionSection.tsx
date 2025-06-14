import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Target, Award, Users } from "lucide-react";

export function MissionSection() {
  return (
    <section id="mission" className="py-16 md:py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl md:text-4xl font-bold text-primary mb-4">
            Our Mission & Values
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
            At SS Study Circle, we are dedicated to fostering academic excellence and personal growth through innovative teaching and unwavering support.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader className="items-center text-center">
              <div className="p-4 bg-primary/10 rounded-full mb-4">
                <Target className="h-10 w-10 text-primary" />
              </div>
              <CardTitle className="font-headline text-2xl text-primary">Our Mission</CardTitle>
            </CardHeader>
            <CardContent className="font-body text-center text-foreground/80">
              To empower students with the knowledge, skills, and confidence to achieve their academic and career aspirations in a supportive and stimulating learning environment.
            </CardContent>
          </Card>
          <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader className="items-center text-center">
              <div className="p-4 bg-accent/10 rounded-full mb-4">
                 <Award className="h-10 w-10 text-accent" />
              </div>
              <CardTitle className="font-headline text-2xl text-accent">Core Values</CardTitle>
            </CardHeader>
            <CardContent className="font-body text-center text-foreground/80">
              <ul className="list-disc list-inside space-y-1 text-left ml-4">
                <li>Excellence in Education</li>
                <li>Student-Centric Approach</li>
                <li>Integrity and Respect</li>
                <li>Continuous Improvement</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader className="items-center text-center">
              <div className="p-4 bg-primary/10 rounded-full mb-4">
                <Users className="h-10 w-10 text-primary" />
              </div>
              <CardTitle className="font-headline text-2xl text-primary">Our Vision</CardTitle>
            </CardHeader>
            <CardContent className="font-body text-center text-foreground/80">
              To be a leading educational institution recognized for innovative teaching methodologies, student success, and contributions to lifelong learning.
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
