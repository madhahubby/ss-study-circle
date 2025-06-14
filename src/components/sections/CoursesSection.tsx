
import type { Course } from "@/types";
import { CourseCard } from "./CourseCard";
import { BookMarked, NotebookText, ScrollText, Gift } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const coursesData: Course[] = [
  {
    id: "class-6",
    title: "6th Class Tuition",
    icon: BookMarked,
    description: "Comprehensive tuition for all subjects in 6th Class. Expert guidance to build a strong foundation.",
    duration: "1 Month",
    fees: "RS 1000 per subject",
    prerequisites: [],
    imageUrl: "https://placehold.co/600x450.png",
    imageHint: "classroom students",
  },
  {
    id: "class-7",
    title: "7th Class Tuition",
    icon: NotebookText,
    description: "Dedicated coaching for all subjects in 7th Class, focusing on conceptual clarity and exam preparation.",
    duration: "1 Month",
    fees: "RS 1100 per subject",
    prerequisites: [],
    imageUrl: "https://placehold.co/600x420.png",
    imageHint: "students learning",
  },
  {
    id: "class-8",
    title: "8th Class Tuition",
    icon: ScrollText,
    description: "Advanced learning support for all subjects in 8th Class, preparing students for higher secondary education.",
    duration: "1 Month",
    fees: "RS 1200 per subject",
    prerequisites: [],
    imageUrl: "https://placehold.co/600x480.png",
    imageHint: "teacher explaining",
  },
];

export function CoursesSection() {
  return (
    <section id="courses" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl md:text-4xl font-bold text-primary mb-4">
            Our Courses
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
            We offer tailored coaching for students from 6th to 8th class, focusing on building strong academic foundations in each subject.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {coursesData.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
          <Card className="flex flex-col h-full shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out transform hover:-translate-y-1 overflow-hidden bg-white border-accent">
            <CardHeader className="items-center pt-6">
                 <Gift className="h-10 w-10 text-accent mb-2" />
                 <CardTitle className="font-headline text-2xl text-accent text-center">Special Offer!</CardTitle>
            </CardHeader>
            <CardContent className="pt-4 pb-6 flex-grow flex items-center justify-center">
              <p className="font-body text-lg font-semibold text-center text-accent">
                Special discounts are given on packages!
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
