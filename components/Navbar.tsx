import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Video } from "lucide-react";

export function Navbar() {
  return (
    <header className="fixed top-0 w-full z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2 font-bold text-xl">
          <div className="p-1 bg-primary rounded-lg text-primary-foreground">
            <Video className="h-5 w-5" />
          </div>
          <span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
            Vidmaxx
          </span>
        </div>
        
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          <Link href="#features" className="hover:text-primary transition-colors">
            Features
          </Link>
          <Link href="#pricing" className="hover:text-primary transition-colors">
            Pricing
          </Link>
          <Link href="#resources" className="hover:text-primary transition-colors">
            Resources
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          <Link href="/login" className="text-sm font-medium hover:text-primary hidden sm:block">
            Log in
          </Link>
          <Button>Get Started</Button>
        </div>
      </div>
    </header>
  );
}
