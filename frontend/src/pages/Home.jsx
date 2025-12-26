import { Link } from 'react-router-dom';
import { Video } from 'lucide-react';
import { useState } from 'react';

const Home = () => {
  const [soundEnabled, setSoundEnabled] = useState(false);
  const [showSoundPrompt, setShowSoundPrompt] = useState(true);

  return (
    <div className="bg-white">
      {/* Hero Section - Main Image with Side Boxes */}
      <section className="relative bg-gray-100">
        <div className="relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 items-start">

            {/* Left Information Box - Announcement */}
            <div className="lg:col-span-2 order-2 lg:order-1 bg-white p-4 min-h-[600px]">
              <div className="bg-white border-2 border-gray-300 rounded p-3 shadow-sm">
                <h3 className="text-base font-bold text-gray-800 mb-3 border-b pb-2">
                  Announcement
                </h3>
                <ul className="space-y-2 text-xs text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-orange-600 mt-0.5">→</span>
                    <span>Baba's new Mandir is under construction on the land behind Sun City Plaza.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-600 mt-0.5">→</span>
                    <span>
                      Devotees are requested to park vehicles on one of the{' '}
                      <a href="/location" className="text-blue-600 hover:underline">alternative parking lots</a>{' '}
                      located within 2 to 3 minutes of walking distance.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-600 mt-0.5">→</span>
                    <span>We request your cooperation and patience especially on busy days such as Thursdays and carpool or use TTC if possible.</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Central Image - Main Feature */}
            <div className="lg:col-span-8 order-1 lg:order-2 relative">
              <div className="relative w-full h-[600px] lg:h-[700px]">
                <img
                  src="/images/sai-baba-murti.jpg"
                  alt="Shri Sai Baba's beautiful marble murti with golden crown"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.src = 'https://images.unsplash.com/photo-1604387558827-b9e7f2fc5ebb?w=1200&q=80';
                  }}
                />
                {/* Top corner decorative placeholders */}
                <div className="absolute top-4 left-4 bg-white border border-gray-300 rounded p-2 shadow-md">
                  <div className="text-xs font-bold text-orange-600">श्रद्धा</div>
                </div>
                <div className="absolute top-4 right-4 bg-white border border-gray-300 rounded p-2 shadow-md">
                  <div className="text-xs font-bold text-orange-600">सबुरी</div>
                </div>
              </div>
            </div>

            {/* Right Information Box - Notice to Devotees */}
            <div className="lg:col-span-2 order-3 bg-white p-4 min-h-[600px]">
              <div className="bg-white border-2 border-gray-300 rounded p-3 shadow-sm mb-4">
                <h3 className="text-base font-bold text-gray-800 mb-3 border-b pb-2">
                  Notice to Devotees
                </h3>
                <ul className="space-y-2 text-xs text-gray-700 mb-3">
                  <li className="flex items-start gap-2">
                    <span className="text-orange-600 mt-0.5">→</span>
                    <span>
                      <a href="/contact" className="text-blue-600 hover:underline font-semibold">Register</a>{' '}
                      to receive email updates.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-600 mt-0.5">→</span>
                    <span>
                      <a href="/resources" className="text-blue-600 hover:underline font-semibold">Calendar 2025</a>{' '}
                      Click to download a copy.
                    </span>
                  </li>
                </ul>

                {/* Sai Niwas Updates Button */}
                <Link
                  to="/sai-niwas"
                  className="block w-full bg-blue-600 hover:bg-blue-700 text-white text-center py-1.5 px-3 rounded text-xs font-semibold transition-colors"
                >
                  Sai Niwas Updates
                </Link>
              </div>

              <div className="text-xs text-gray-600 italic">
                on alternative lots for your personal safety.
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
