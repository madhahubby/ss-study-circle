import type { LucideIcon } from 'lucide-react';

export interface Course {
  id: string;
  title: string;
  icon: LucideIcon;
  description: string;
  duration: string;
  fees: string;
  prerequisites: string[];
  imageHint: string;
}

export interface Testimonial {
  id: string;
  name: string;
  quote: string;
  imageUrl?: string;
  courseTaken?: string;
  imageHint: string;
}
