import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

const team = [
  {
    name: "John Doe",
    role: "CEO",
    image: "https://api.dicebear.com/7.x/avatars/svg?seed=john"
  },
  {
    name: "Jane Smith",
    role: "CTO",
    image: "https://api.dicebear.com/7.x/avatars/svg?seed=jane"
  },
  {
    name: "Mike Johnson",
    role: "Lead Engineer",
    image: "https://api.dicebear.com/7.x/avatars/svg?seed=mike"
  }
];

export default function About() {
  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold text-primary mb-6">About Us</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Waya Moja is a leading provider of network solutions, dedicated to helping
            businesses achieve their digital transformation goals through innovative
            technology solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h2 className="text-2xl font-bold text-primary mb-4">Our Mission</h2>
            <p className="text-gray-600">
              To provide cutting-edge network solutions that enable businesses to thrive
              in an increasingly connected world, delivering reliability, security,
              and innovation to our clients.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <h2 className="text-2xl font-bold text-primary mb-4">Our Vision</h2>
            <p className="text-gray-600">
              To be the leading provider of network infrastructure and digital
              solutions, recognized globally for our excellence in service delivery
              and technological innovation.
            </p>
          </motion.div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-primary text-center mb-12">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="text-center">
                  <CardContent className="pt-6">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-32 h-32 rounded-full mx-auto mb-4"
                    />
                    <h3 className="text-xl font-semibold">{member.name}</h3>
                    <p className="text-gray-600">{member.role}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
