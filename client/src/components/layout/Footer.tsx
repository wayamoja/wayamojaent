import { FaLinkedin, FaTwitter, FaFacebook } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Waya Moja</h3>
            <p className="text-primary-200">
              Delivering innovative network solutions for businesses worldwide.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <address className="text-primary-200 not-italic">
              <p>123 Business Street</p>
              <p>City, State 12345</p>
              <p>Phone: (555) 123-4567</p>
              <p>Email: info@wayamoja.com</p>
            </address>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Follow Us</h3>
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
        
        <div className="mt-8 pt-8 border-t border-primary-700">
          <p className="text-center text-primary-200">
            © {new Date().getFullYear()} Waya Moja. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
