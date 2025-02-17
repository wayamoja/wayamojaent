import { motion } from "framer-motion";
import { Shield, Wifi, Computer, Phone, Camera } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const services = [
  {
    icon: Shield,
    title: "Biometric Access Management",
    description: "State-of-the-art biometric security solutions for controlled access."
  },
  {
    icon: Camera,
    title: "CCTV Installation",
    description: "Professional installation of surveillance systems for enhanced security."
  },
  {
    icon: Shield,
    title: "Security Solutions",
    description: "Razor wire and electric fence installation for perimeter security."
  },
  {
    icon: Wifi,
    title: "Internet Installation",
    description: "High-speed fiber internet solutions for homes and businesses."
  },
  {
    icon: Computer,
    title: "Computer Repair",
    description: "Expert computer repair and maintenance services."
  },
  {
    icon: Phone,
    title: "Phone Repair",
    description: "Professional phone repair and servicing."
  }
];

const internetPlans = [
  { speed: "8MBPS", price: "KES 1,500" },
  { speed: "12MBPS", price: "KES 2,000" },
  { speed: "15MBPS", price: "KES 2,500" },
  { speed: "20MBPS", price: "KES 3,000" },
  { speed: "25MBPS", price: "KES 3,500" },
  { speed: "30MBPS", price: "KES 4,000" },
  { speed: "40MBPS", price: "KES 4,500" },
  { speed: "50MBPS", price: "KES 5,000" },
  { speed: "60MBPS", price: "KES 8,000" }
];

export default function Services() {
  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-primary mb-4">Our Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We offer comprehensive technology and security solutions to protect and 
            enhance your business infrastructure.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <service.icon className="w-12 h-12 mb-4 text-blue-500" />
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="mt-20">
          <h2 className="text-3xl font-bold text-primary text-center mb-8">Internet Plans</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {internetPlans.map((plan, index) => (
              <motion.div
                key={plan.speed}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <h3 className="text-2xl font-bold text-primary mb-2">{plan.speed}</h3>
                    <p className="text-xl text-blue-500 font-semibold">{plan.price}</p>
                    <p className="text-gray-600 mt-2">Installation Fee: KES 1,000</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}