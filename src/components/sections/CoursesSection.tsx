
import type { Course } from "@/types";
import { CourseCard } from "./CourseCard";
import { BookMarked, NotebookText, ScrollText } from "lucide-react";

const coursesData: Course[] = [
  {
    id: "class-6",
    title: "6th Class Tuition",
    icon: BookMarked,
    description: "Comprehensive tuition for all subjects in 6th Class. Expert guidance to build a strong foundation.",
    duration: "1 Month",
    fees: "RS 1000 per subject",
    prerequisites: [],
    imageUrl: "https://placehold.co/600x400.png",
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
    imageUrl: "https://placehold.co/601x401.png",
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
    imageUrl: "https://placehold.co/602x402.png",
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
        </div>
      </div>
    </section>
  );
}
