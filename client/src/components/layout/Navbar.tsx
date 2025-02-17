import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/contact", label: "Contact" }
];

export default function Navbar() {
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="sticky top-0 z-50 bg-blue-900/95 backdrop-blur supports-[backdrop-filter]:bg-blue-900/60"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/">
            <a className="flex items-center space-x-2">
              <img 
                src="/logo.svg" 
                alt="Waya Moja" 
                className="h-8 w-auto"
              />
              <span className="text-2xl font-bold text-white">Waya Moja</span>
            </a>
          </Link>

          <div className="hidden md:block">
            <div className="flex space-x-8">
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href}>
                  <motion.span 
                    whileHover={{ scale: 1.05 }}
                    className={cn(
                      "px-3 py-2 rounded-md text-sm font-medium transition-colors cursor-pointer",
                      location === link.href 
                        ? "text-white bg-blue-800"
                        : "text-blue-200 hover:text-white hover:bg-blue-800"
                    )}
                  >
                    {link.label}
                  </motion.span>
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
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden"
        >
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                <motion.span 
                  whileHover={{ scale: 1.05 }}
                  className={cn(
                    "block px-3 py-2 rounded-md text-base font-medium cursor-pointer",
                    location === link.href
                      ? "text-white bg-blue-800"
                      : "text-blue-200 hover:text-white hover:bg-blue-800"
                  )}
                >
                  {link.label}
                </motion.span>
              </Link>
            ))}
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}