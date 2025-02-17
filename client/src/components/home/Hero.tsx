import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronRight, Wifi, Shield } from "lucide-react";
import { Link } from "wouter";

export default function Hero() {
  return (
    <div className="relative min-h-[600px] flex items-center bg-gradient-to-br from-primary-900 via-primary to-primary-700 overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <pattern id="grid" width="8" height="8" patternUnits="userSpaceOnUse">
            <path d="M 8 0 L 0 0 0 8" fill="none" stroke="currentColor" strokeWidth="0.5"/>
          </pattern>
          <rect width="100" height="100" fill="url(#grid)"/>
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12"
        >
          <div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Secure & Connected <br />
              <span className="text-blue-400">Technology Solutions</span>
            </h1>

            <p className="text-xl text-primary-100 mb-8 max-w-2xl">
              Waya Moja delivers cutting-edge internet, security, and technology solutions 
              for homes and businesses across Kenya.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact">
                <Button size="lg" className="bg-blue-500 hover:bg-blue-600">
                  Get Started
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/services">
                <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
                  View Services
                </Button>
              </Link>
            </div>
          </div>

          <div className="hidden lg:flex justify-center items-center">
            <div className="relative">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="absolute -top-16 -left-16"
              >
                <Wifi className="w-32 h-32 text-blue-400 opacity-80" />
              </motion.div>
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="absolute -bottom-16 -right-16"
              >
                <Shield className="w-32 h-32 text-blue-400 opacity-80" />
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}