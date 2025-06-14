import type { Testimonial } from "@/types";
import { TestimonialCard } from "./TestimonialCard";

const testimonialsData: Testimonial[] = [
  {
    id: "1",
    name: "Aisha Khan",
    quote: "SS Study Circle completely transformed my understanding of complex subjects. The instructors are knowledgeable and incredibly supportive.",
    // imageUrl: "https://placehold.co/100x100.png", // Removed as per UI change
    courseTaken: "Advanced Mathematics",
    imageHint: "smiling student", // Kept for potential future use, though image is removed
  },
  {
    id: "2",
    name: "Ben Carter",
    quote: "The Web Development Bootcamp was intense but rewarding. I landed a job within a month of graduating!",
    // imageUrl: "https://placehold.co/100x100.png", // Removed as per UI change
    courseTaken: "Web Development Bootcamp",
    imageHint: "professional portrait", // Kept for potential future use
  },
  {
    id: "3",
    name: "Chloe Davis",
    quote: "I highly recommend their courses. The practical approach to learning made all the difference for me.",
    // imageUrl: "https://placehold.co/100x100.png", // Removed as per UI change
    courseTaken: "Data Analysis with Python",
    imageHint: "happy person", // Kept for potential future use
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
