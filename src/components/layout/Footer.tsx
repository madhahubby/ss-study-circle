export function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="border-t border-border/40 bg-background py-8">
      <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
        <p>&copy; {currentYear} SS Study Circle Hub. All rights reserved.</p>
        <p className="mt-1">Designed with care for a brighter future.</p>
      </div>
    </footer>
  );
}
