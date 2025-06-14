import type { Testimonial } from "@/types";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Star } from "lucide-react";

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <Card className="flex flex-col h-full shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out transform hover:-translate-y-1 bg-card">
      <CardContent className="pt-6 flex-grow">
        <div className="mb-4">
          <CardTitle className="font-headline text-lg text-primary">{testimonial.name}</CardTitle>
          {testimonial.courseTaken && (
            <p className="font-body text-xs text-muted-foreground mt-1">{testimonial.courseTaken}</p>
          )}
        </div>
        <blockquote className="font-body text-foreground/80 italic border-l-4 border-primary pl-4">
          "{testimonial.quote}"
        </blockquote>
      </CardContent>
      <CardFooter className="flex justify-end pt-4">
        <div className="flex text-yellow-400">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="h-5 w-5 fill-current" />
          ))}
        </div>
      </CardFooter>
    </Card>
  );
}
