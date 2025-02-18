import { motion } from "framer-motion";
import ContactForm from "@/components/shared/ContactForm";
import { MapPin, Phone, Mail } from "lucide-react";

export default function Contact() {
  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold text-primary mb-6">Contact Us</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get in touch with us to discuss how we can help with your networking needs.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="bg-white p-4 sm:p-8 rounded-lg shadow-sm">
              <h2 className="text-2xl font-bold text-primary mb-6">Send us a message</h2>
              <ContactForm />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="lg:pl-12"
          >
            <h2 className="text-2xl font-bold text-primary mb-6">Contact Information</h2>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <MapPin className="w-6 h-6 text-blue-500 mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">Address</h3>
                  <p className="text-gray-600">
                    1st floor, room 20, chaphi house<br />
                    (bettan hotel), koinange street<br />
                    nyahururu, kenya
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Phone className="w-6 h-6 text-blue-500 mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">Phone</h3>
                  <p className="text-gray-600">+254 727666093</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Mail className="w-6 h-6 text-blue-500 mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">Email</h3>
                  <p className="text-gray-600">info@wayamoja.com</p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <h3 className="font-semibold mb-4">Business Hours</h3>
              <div className="space-y-2 text-gray-600">
                <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                <p>Saturday: 10:00 AM - 4:00 PM</p>
                <p>Sunday: Closed</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
