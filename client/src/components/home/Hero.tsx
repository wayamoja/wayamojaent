import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import { Link, useLocation } from "wouter";
import ConsultationModal from "@/components/shared/ConsultationModal";

export default function Hero() {
  const [, setLocation] = useLocation();
  const [showConsultation, setShowConsultation] = useState(false);

  return (
    <div className="relative min-h-[600px] flex items-center bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 overflow-hidden">
      <div className="absolute inset-0 opacity-10">
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
          className="text-center"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Transforming Networks,<br />
            <span className="text-blue-300">Empowering Success</span>
          </h1>

          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Leading the digital revolution with state-of-the-art security solutions and 
            enterprise Wi-Fi to advanced security systems. Waya Moja delivers unparalleled 
            connectivity that drives your business forward. Experience the future of 
            networking today.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.div whileHover={{ scale: 1.05 }}>
              <Button 
                size="lg" 
                className="bg-blue-500 hover:bg-blue-600 text-lg"
                onClick={() => setLocation("/services")}
              >
                Explore Solutions
                <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }}>
              <Button 
                size="lg" 
                variant="outline" 
                className="text-white border-white hover:bg-white/10 text-lg"
                onClick={() => setShowConsultation(true)}
              >
                Schedule Consultation
              </Button>
            </motion.div>
          </div>

          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-center"
            >
              <h3 className="text-3xl font-bold text-white mb-2">500+</h3>
              <p className="text-blue-200">Projects Completed</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-center"
            >
              <h3 className="text-3xl font-bold text-white mb-2">200+</h3>
              <p className="text-blue-200">Enterprise Clients</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-center"
            >
              <h3 className="text-3xl font-bold text-white mb-2">99.99%</h3>
              <p className="text-blue-200">Uptime Guaranteed</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-center"
            >
              <h3 className="text-3xl font-bold text-white mb-2">&lt;15min</h3>
              <p className="text-blue-200">Support Response</p>
            </motion.div>
          </div>
        </motion.div>
      </div>

      <ConsultationModal 
        isOpen={showConsultation}
        onClose={() => setShowConsultation(false)}
      />
    </div>
  );
}