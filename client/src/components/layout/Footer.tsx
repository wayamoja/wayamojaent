import { FaLinkedin, FaTwitter, FaFacebook } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Waya Moja</h3>
            <p className="text-primary-200">
              Your trusted partner for comprehensive technology and security solutions.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <address className="text-primary-200 not-italic">
              <p>1st Floor, Room 20</p>
              <p>Chaphi House (Bettan Hotel)</p>
              <p>Koinange Street, Nyahururu</p>
              <p>Kenya</p>
              <p className="mt-2">Phone: +254 727 666 093</p>
              <p>Email: wayamojaent@gmail.com</p>
              <p>Alternative: info@wayamoja.com</p>
            </address>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Business Hours</h3>
            <div className="text-primary-200 space-y-2">
              <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
              <p>Saturday: 9:00 AM - 4:00 PM</p>
              <p>Sunday: Closed</p>
            </div>

            <div className="mt-6">
              <h4 className="font-semibold mb-3">Follow Us</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-primary-200 hover:text-white transition-colors">
                  <FaLinkedin size={24} />
                </a>
                <a href="#" className="text-primary-200 hover:text-white transition-colors">
                  <FaTwitter size={24} />
                </a>
                <a href="#" className="text-primary-200 hover:text-white transition-colors">
                  <FaFacebook size={24} />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-primary-700">
          <p className="text-center text-primary-200">
            © {new Date().getFullYear()} Waya Moja. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}