import type { Course } from "@/types";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, DollarSign, ListChecks } from "lucide-react";
import Image from "next/image";

interface CourseCardProps {
  course: Course;
}

export function CourseCard({ course }: CourseCardProps) {
  const Icon = course.icon;
  return (
    <Card className="flex flex-col h-full shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out transform hover:-translate-y-1 overflow-hidden">
      <div className="relative w-full h-48">
        <Image 
          src={`https://placehold.co/600x400.png`} 
          alt={course.title} 
          layout="fill" 
          objectFit="cover"
          data-ai-hint={course.imageHint}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
        <div className="absolute bottom-4 left-4">
           <Icon className="h-10 w-10 text-white mb-2" />
           <CardTitle className="font-headline text-2xl text-white">{course.title}</CardTitle>
        </div>
      </div>
      <CardContent className="pt-6 flex-grow">
        <CardDescription className="font-body text-sm text-muted-foreground mb-4">{course.description}</CardDescription>
        
        <div className="space-y-3">
          <div className="flex items-center font-body text-sm">
            <Clock className="h-4 w-4 mr-2 text-primary" />
            <strong>Duration:</strong><span className="ml-1">{course.duration}</span>
          </div>
          <div className="flex items-center font-body text-sm">
            <DollarSign className="h-4 w-4 mr-2 text-primary" />
            <strong>Fees:</strong><span className="ml-1">{course.fees}</span>
          </div>
          {course.prerequisites.length > 0 && (
            <div className="font-body text-sm">
              <div className="flex items-center mb-1">
                <ListChecks className="h-4 w-4 mr-2 text-primary" />
                <strong>Pre-requisites:</strong>
              </div>
              <ul className="list-disc list-inside ml-6 space-y-1">
                {course.prerequisites.map((prereq, index) => (
                  <li key={index}>{prereq}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </CardContent>
      <CardFooter>
        <Badge variant="secondary" className="font-body">Popular</Badge>
      </CardFooter>
    </Card>
  );
}
