import { Shirt, Calendar, Phone, Mail } from 'lucide-react';

const Shawl = () => {
  return (
    <div>
      <section className="hero-gradient text-white py-16">
        <div className="container-custom px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Offering Shawl</h1>
          <p className="text-xl">Offer shawl to Baba during Abhishek Puja</p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <Shirt className="w-16 h-16 text-orange-600 mx-auto mb-4" />
            </div>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Devotees can offer a shawl to Baba during the Abhishek Puja ceremony. The shawl offering 
              is included with Abhishek Puja booking. After the puja, the blessed shawl is returned to 
              the devotee.
            </p>

            <div className="bg-orange-50 rounded-lg p-6 mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Abhishek Puja Information</h2>
              <ul className="space-y-2 text-gray-700">
                <li>• Shawl offering is included with Abhishek Puja booking</li>
                <li>• Personal offerings are allowed</li>
                <li>• Blessed shawl is returned after the puja</li>
                <li>• Book in advance for preferred dates</li>
              </ul>
            </div>

            <div className="text-center">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Book Abhishek Puja</h2>
              <p className="text-gray-700 mb-6">
                To book Abhishek Puja with shawl offering, please contact us using the information below 
                or visit the temple during operating hours.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <a href="tel:6474444724" className="btn-primary inline-flex items-center gap-2">
                  <Phone className="w-5 h-5" />
                  Call 647-444-4724
                </a>
                <a href="mailto:info@theshirdisaimandir.ca" className="btn-secondary inline-flex items-center gap-2">
                  <Mail className="w-5 h-5" />
                  Email Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Shawl;

