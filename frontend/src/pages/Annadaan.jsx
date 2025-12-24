import { Heart, Utensils, Phone, Mail } from 'lucide-react';

const Annadaan = () => {
  return (
    <div>
      <section className="hero-gradient text-white py-16">
        <div className="container-custom px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Annadaan</h1>
          <p className="text-xl">Food donation service</p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <Utensils className="w-16 h-16 text-orange-600 mx-auto mb-4" />
            </div>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Annadaan (food donation) is a sacred service where devotees can donate food items to support 
              temple activities. These donations are used at the Mandir for prasad or donated to charitable 
              organizations every month.
            </p>

            <div className="bg-orange-50 rounded-lg p-6 mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Items Needed</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                <div className="bg-white rounded-lg p-4 text-center">
                  <p className="font-semibold text-gray-800">Basmati Rice</p>
                </div>
                <div className="bg-white rounded-lg p-4 text-center">
                  <p className="font-semibold text-gray-800">Daal</p>
                </div>
                <div className="bg-white rounded-lg p-4 text-center">
                  <p className="font-semibold text-gray-800">Ghee</p>
                </div>
                <div className="bg-white rounded-lg p-4 text-center">
                  <p className="font-semibold text-gray-800">Wheat/Rava</p>
                </div>
              </div>
              <p className="text-gray-700">
                Devotees can drop off non-perishable food items at the Mandir. These collections are either 
                used at the Mandir or donated to other charitable organizations every month.
              </p>
            </div>

            <div className="text-center">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Make a Food Donation</h2>
              <p className="text-gray-700 mb-6">
                You can drop off food donations at the temple during operating hours. For large donations 
                or special arrangements, please contact us in advance.
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

export default Annadaan;

