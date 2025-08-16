import Link from "next/link";
import { ModeToggle } from "./ui/toogle";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b bg-background/70 backdrop-blur">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-base font-semibold">
          Portfolio
        </Link>

        <div className="flex gap-6 text-sm text-muted-foreground">
          <Link href="/about" className="hover:text-foreground">About</Link>
          <Link href="/projects" className="hover:text-foreground">Projects</Link>
          <Link href="/skills" className="hover:text-foreground">Skills</Link>
          <Link href="/contact" className="hover:text-foreground">Contact</Link>

                    <ModeToggle />
        </div>
      </nav>
    </header>
  );
}