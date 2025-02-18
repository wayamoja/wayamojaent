
import { motion } from "framer-motion";

export default function LogoAnimation() {
  const zigzagPath = "M0,25 L20,15 L40,25 L60,15 L80,25 L100,15";

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 flex items-center justify-center bg-blue-900/30 backdrop-blur-sm z-50"
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ 
          duration: 0.4,
          ease: "easeOut"
        }}
        className="text-center relative"
      >
        <motion.img
          src="/logo.svg"
          alt="Waya Moja"
          className="w-32 h-32 mb-4"
          animate={{ 
            rotateY: -360,
            filter: ["brightness(1)", "brightness(1.2)", "brightness(1)"]
          }}
          transition={{
            rotateY: { duration: 0.6, ease: "easeInOut" },
            filter: { duration: 0.8, repeat: 1 }
          }}
        />
        <motion.div
          className="text-2xl font-bold text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.4 }}
        >
          WAYA MOJA
          <motion.div 
            className="text-lg text-blue-200"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            ENTERPRISE
          </motion.div>
        </motion.div>
        
        <motion.svg
          width="100"
          height="30"
          viewBox="0 0 100 30"
          className="absolute -bottom-8 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0, pathLength: 0 }}
          animate={{ opacity: 1, pathLength: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <motion.path
            d={zigzagPath}
            stroke="white"
            strokeWidth="2"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          />
        </motion.svg>
      </motion.div>
    </motion.div>
  );
}
