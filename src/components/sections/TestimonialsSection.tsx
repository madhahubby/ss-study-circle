
import type { Testimonial } from "@/types";
import { TestimonialCard } from "./TestimonialCard";

const testimonialsData: Testimonial[] = [
  {
    id: "1",
    name: "Rohan Sharma",
    quote: "The 6th class tuitions at SS Study Circle really helped me understand my NCERT science concepts much better. The teachers are very patient.",
    // imageUrl: "https://placehold.co/100x100.png", // Removed as per UI change
    courseTaken: "6th Class Tuition",
    imageHint: "smiling student",
  },
  {
    id: "2",
    name: "Priya Singh",
    quote: "I used to find mathematics difficult, but after joining SS Study Circle for my 7th class NCERT syllabus, my scores have improved a lot. Thank you!",
    // imageUrl: "https://placehold.co/100x100.png", // Removed as per UI change
    courseTaken: "7th Class Tuition",
    imageHint: "happy student",
  },
  {
    id: "3",
    name: "Amit Kumar",
    quote: "The teachers explain everything from the NCERT books in a simple way. My concepts for 8th class social studies are very clear now.",
    // imageUrl: "https://placehold.co/100x100.png", // Removed as per UI change
    courseTaken: "8th Class Tuition",
    imageHint: "focused student",
  },
];

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-16 md:py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl md:text-4xl font-bold text-primary mb-4">
            What Our Students Say
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
            Hear from students who have experienced the SS Study Circle difference and achieved their academic goals.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonialsData.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
}
