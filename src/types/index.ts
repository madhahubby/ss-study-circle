import type { LucideIcon } from 'lucide-react';

export interface Course {
  id: string;
  title: string;
  icon: LucideIcon;
  description: string;
  duration: string;
  fees: string;
  prerequisites: string[];
  imageUrl: string; // Added for unique course images
  imageHint: string;
}

export interface Testimonial {
  id: string;
  name: string;
  quote: string;
  // imageUrl?: string; // Removed as per UI change
  courseTaken?: string;
  imageHint: string;
}
