
import { motion } from "framer-motion";

export default function LogoAnimation() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 1,
        ease: [0, 0.71, 0.2, 1.01],
        scale: {
          type: "spring",
          damping: 5,
          stiffness: 100,
          restDelta: 0.001
        }
      }}
      className="fixed inset-0 flex items-center justify-center bg-white z-50"
    >
      <motion.div
        initial={{ y: 20 }}
        animate={{ y: 0 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="text-center"
      >
        <motion.img
          src="/logo.svg"
          alt="Waya Moja"
          className="w-32 h-32 mb-4"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="text-2xl font-bold text-blue-900"
        >
          WAYA MOJA
          <div className="text-lg text-blue-600">ENTERPRISE</div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
