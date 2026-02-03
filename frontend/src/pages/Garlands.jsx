import { Flower } from 'lucide-react';
import BookingForm from '../components/BookingForm';

const Garlands = () => {
  return (
    <div>
      <section className="hero-gradient text-white py-16">
        <div className="container-custom px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Garlands for Baba</h1>
          <p className="text-xl">Offer beautiful garlands to Baba</p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <Flower className="w-16 h-16 text-orange-600 mx-auto mb-4" />
            </div>
            <p className="text-lg text-gray-700 leading-relaxed mb-6 text-center">
              Devotees can book garlands to offer to Baba on special occasions, birthdays, anniversaries,
              or to express gratitude. Fresh flowers are arranged daily and offered to Baba with devotion.
            </p>

            <div className="bg-orange-50 rounded-lg p-6 mb-12">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Garland Offerings</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">Fresh Flower Garlands</h3>
                  <ul className="space-y-1 text-gray-700 text-sm">
                    <li>• Roses, Marigolds, Jasmine</li>
                    <li>• Offered during morning Aarti</li>
                    <li>• Blessed by priests</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">Special Occasions</h3>
                  <ul className="space-y-1 text-gray-700 text-sm">
                    <li>• Birthdays & Anniversaries</li>
                    <li>• Festivals & Celebrations</li>
                    <li>• Gratitude Offerings</li>
                  </ul>
                </div>
              </div>
            </div>

            <BookingForm serviceType="garlands" serviceName="Garland Offering" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Garlands;

