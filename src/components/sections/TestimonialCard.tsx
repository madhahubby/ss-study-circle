import type { Testimonial } from "@/types";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star } from "lucide-react";
import Image from "next/image";


interface TestimonialCardProps {
  testimonial: Testimonial;
}

export function TestimonialCard({ testimonial }: TestimonialCardProps) {
  const initials = testimonial.name.split(' ').map(n => n[0]).join('');
  return (
    <Card className="flex flex-col h-full shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out transform hover:-translate-y-1 bg-card">
      <CardContent className="pt-6 flex-grow">
        <div className="flex items-center mb-4">
          <Avatar className="h-12 w-12 mr-4">
            {testimonial.imageUrl ? (
              <Image 
                src={testimonial.imageUrl} 
                alt={testimonial.name} 
                width={48} 
                height={48} 
                className="rounded-full"
                data-ai-hint={testimonial.imageHint}
              />
            ) : (
              <AvatarFallback className="bg-primary text-primary-foreground font-bold">{initials}</AvatarFallback>
            )}
          </Avatar>
          <div>
            <CardTitle className="font-headline text-lg text-primary">{testimonial.name}</CardTitle>
            {testimonial.courseTaken && (
              <p className="font-body text-xs text-muted-foreground">{testimonial.courseTaken}</p>
            )}
          </div>
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
