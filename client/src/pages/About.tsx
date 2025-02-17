import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

export default function About() {
  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-12"
        >
          <motion.div
            variants={itemVariants}
            className="text-center"
          >
            <h1 className="text-4xl font-bold text-primary mb-6">About Waya Moja</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Your trusted partner in innovative network solutions and cutting-edge security systems.
            </p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="grid grid-cols-1 md:grid-cols-2 gap-12"
          >
            <div>
              <h2 className="text-2xl font-bold text-primary mb-4">Our Story</h2>
              <p className="text-gray-600">
                Founded with a vision to transform digital infrastructure in Kenya, 
                Waya Moja has grown to become a leading provider of comprehensive 
                technology solutions. We specialize in delivering state-of-the-art 
                network installations, security systems, and IT services that empower 
                businesses to thrive in the digital age.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-primary mb-4">Our Expertise</h2>
              <p className="text-gray-600">
                With years of experience in the industry, our team of certified 
                professionals excels in implementing cutting-edge solutions across:
                <br /><br />
                • High-speed fiber internet installations<br />
                • Advanced security systems including CCTV and biometric access<br />
                • Network infrastructure design and maintenance<br />
                • Professional computer and phone repair services
              </p>
            </div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="bg-blue-50 p-8 rounded-lg"
          >
            <h2 className="text-2xl font-bold text-primary mb-6 text-center">Our Location</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-semibold mb-2 text-blue-900">Main Office:</h3>
                <p className="text-gray-600">
                  1st Floor, Room 20<br />
                  Chaphi House (Bettan Hotel)<br />
                  Koinange Street, Nyahururu<br />
                  Kenya
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2 text-blue-900">Contact Information:</h3>
                <p className="text-gray-600">
                  Phone: +254 727 666 093<br />
                  Email: wayamojaent@gmail.com<br />
                  Alternative: info@wayamoja.com
                </p>
                <div className="mt-4">
                  <h4 className="font-semibold mb-2 text-blue-900">Business Hours:</h4>
                  <p className="text-gray-600">
                    Monday - Friday: 8:00 AM - 6:00 PM<br />
                    Saturday: 9:00 AM - 4:00 PM<br />
                    Sunday: Closed
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}