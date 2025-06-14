import Link from 'next/link';
import { BookHeart } from 'lucide-react'; // Example icon

const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'About Us', href: '#mission' },
  { name: 'Courses', href: '#courses' },
  { name: 'Testimonials', href: '#testimonials' },
  { name: 'Contact', href: '#contact' },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 max-w-screen-2xl items-center justify-between">
        <Link href="#home" className="flex items-center space-x-2">
          <BookHeart className="h-8 w-8 text-accent" />
          <span className="font-headline text-xl font-bold text-accent">
            SS Study Circle Hub
          </span>
        </Link>
        <nav className="hidden md:flex">
          <ul className="flex space-x-6">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className="font-body text-sm font-medium text-foreground/80 transition-colors hover:text-accent"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        {/* Mobile menu button can be added here if needed */}
      </div>
    </header>
  );
}
