import type { Course } from "@/types";
import { CourseCard } from "./CourseCard";
import { BookOpen, Code, Atom, BarChart3, Briefcase } from "lucide-react"; // Example icons

const coursesData: Course[] = [
  {
    id: "1",
    title: "Advanced Mathematics",
    icon: BookOpen,
    description: "Master complex mathematical concepts and problem-solving techniques.",
    duration: "12 Weeks",
    fees: "$300",
    prerequisites: ["Basic Algebra", "Calculus I"],
    imageHint: "mathematics chalkboard",
  },
  {
    id: "2",
    title: "Web Development Bootcamp",
    icon: Code,
    description: "Become a full-stack web developer. Learn HTML, CSS, JavaScript, React, and Node.js.",
    duration: "16 Weeks",
    fees: "$500",
    prerequisites: ["Basic computer literacy"],
    imageHint: "coding laptop",
  },
  {
    id: "3",
    title: "Physics for Engineers",
    icon: Atom,
    description: "Explore the fundamental principles of physics relevant to engineering disciplines.",
    duration: "10 Weeks",
    fees: "$250",
    prerequisites: ["High School Physics", "Calculus I"],
    imageHint: "physics experiment",
  },
  {
    id: "4",
    title: "Data Analysis with Python",
    icon: BarChart3,
    description: "Learn to analyze data, create visualizations, and derive insights using Python libraries.",
    duration: "8 Weeks",
    fees: "$400",
    prerequisites: ["Basic Python programming"],
    imageHint: "data charts",
  },
  {
    id: "5",
    title: "Project Management Fundamentals",
    icon: Briefcase,
    description: "Understand the core principles of project management to lead successful projects.",
    duration: "6 Weeks",
    fees: "$200",
    prerequisites: [],
    imageHint: "team meeting",
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
            Explore a variety of courses designed to enhance your skills and knowledge, tailored for success in today's competitive world.
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
