import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import { Link } from "wouter";

export default function Hero() {
  return (
    <div className="relative min-h-[600px] flex items-center bg-gradient-to-br from-primary-900 via-primary to-primary-700 overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
            <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5"/>
          </pattern>
          <rect width="100" height="100" fill="url(#grid)"/>
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Building Connected <br />
            <span className="text-blue-400">Digital Solutions</span>
          </h1>
          
          <p className="text-xl text-primary-100 mb-8 max-w-2xl">
            Waya Moja delivers innovative networking solutions that empower businesses 
            to thrive in the digital age.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/contact">
              <Button size="lg" className="bg-blue-500 hover:bg-blue-600">
                Get a Quote
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link href="/portfolio">
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
                View Our Work
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
