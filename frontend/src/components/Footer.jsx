import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, ArrowRight } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-custom px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* About Us Section */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-white border-b border-white pb-2">About Us</h3>
            <p className="text-gray-300 text-sm mb-4">
              The Shirdi Sai Mandir, the Shirdi of North America, is conveniently located at 2721 Markham Road in Toronto, ON just north of Finch Road and Markham Road. Baba's Mandir is spread across 4 units (6,7, 8 and 9) with a total area of approximately 8,000 square feet.
            </p>
            {/* Flower Tray Image */}
            <div className="mt-4">
              <div className="w-32 h-32 bg-gray-700 rounded flex items-center justify-center">
                <img 
                  src="/images/flower-tray.jpg" 
                  alt="Flower tray offering"
                  className="w-full h-full object-cover rounded"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextElementSibling.style.display = 'flex';
                  }}
                />
                <div className="hidden w-full h-full items-center justify-center text-gray-400 text-xs text-center p-2">
                  Flower Tray
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-white border-b border-white pb-2">Quick Links</h3>
            <ul className="space-y-2 text-sm mb-4">
              <li>
                <Link to="/services" className="hover:text-orange-400 transition-colors flex items-center gap-2">
                  <ArrowRight className="w-3 h-3" />
                  Services & Activities
                </Link>
              </li>
              <li>
                <Link to="/services/garlands" className="hover:text-orange-400 transition-colors flex items-center gap-2">
                  <ArrowRight className="w-3 h-3" />
                  Garlands
                </Link>
              </li>
              <li>
                <Link to="/services/paduka" className="hover:text-orange-400 transition-colors flex items-center gap-2">
                  <ArrowRight className="w-3 h-3" />
                  Paduka Booking
                </Link>
              </li>
              <li>
                <Link to="/services/shawl" className="hover:text-orange-400 transition-colors flex items-center gap-2">
                  <ArrowRight className="w-3 h-3" />
                  Shawl Booking
                </Link>
              </li>
              <li>
                <Link to="/prasad" className="hover:text-orange-400 transition-colors flex items-center gap-2">
                  <ArrowRight className="w-3 h-3" />
                  Prasad Booking
                </Link>
              </li>
            </ul>
            {/* DONATE Button */}
            <Link 
              to="/donation"
              className="inline-block bg-orange-600 hover:bg-orange-700 text-white px-6 py-2 rounded font-semibold text-sm transition-colors"
            >
              DONATE
            </Link>
          </div>

          {/* Contact Us */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-white border-b border-white pb-2">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin size={18} className="mt-1 flex-shrink-0 text-orange-400" />
                <span className="text-gray-300">
                  2721 Markham Road, Unit 8<br />
                  Toronto, ON, M1X 1L5<br />
                  Canada
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={18} className="flex-shrink-0 text-orange-400" />
                <a href="tel:6474444724" className="text-gray-300 hover:text-orange-400">
                  (647) 444 – 4SAI (4724)
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={18} className="flex-shrink-0 text-orange-400" />
                <a href="mailto:info@theshirdisaimandir.ca" className="text-gray-300 hover:text-orange-400">
                  info@theshirdisaimandir.ca
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>Copyright© {new Date().getFullYear()} The Shirdi Sai Mandir And Cultural Centre. All rights reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
