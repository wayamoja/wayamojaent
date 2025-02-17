import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/contact", label: "Contact" }
];

export default function Navbar() {
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-primary/95 backdrop-blur supports-[backdrop-filter]:bg-primary/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/">
            <span className="text-2xl font-bold text-white">Waya Moja</span>
          </Link>
          
          <div className="hidden md:block">
            <div className="flex space-x-8">
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href}>
                  <a className={cn(
                    "px-3 py-2 rounded-md text-sm font-medium transition-colors",
                    location === link.href 
                      ? "text-white bg-primary-700"
                      : "text-primary-200 hover:text-white hover:bg-primary-700"
                  )}>
                    {link.label}
                  </a>
                </Link>
              ))}
            </div>
          </div>

          <button
            className="md:hidden text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                <a className={cn(
                  "block px-3 py-2 rounded-md text-base font-medium",
                  location === link.href
                    ? "text-white bg-primary-700"
                    : "text-primary-200 hover:text-white hover:bg-primary-700"
                )}>
                  {link.label}
                </a>
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
