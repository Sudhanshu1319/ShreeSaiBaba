import { Link } from 'react-router-dom';
import { Video } from 'lucide-react';
import { useState } from 'react';

const Home = () => {
  const [soundEnabled, setSoundEnabled] = useState(false);
  const [showSoundPrompt, setShowSoundPrompt] = useState(true);

  return (
    <div className="bg-white">
      {/* Top Bar with Shraddha and Saburi */}
      <div className="bg-white border-b border-gray-200">
        <div className="container-custom px-4">
          <div className="flex justify-between items-center py-2">
            <button className="bg-yellow-400 hover:bg-yellow-500 text-black px-6 py-2 rounded-full font-semibold text-sm transition-colors">
              Shraddha
            </button>
            <button className="bg-yellow-400 hover:bg-yellow-500 text-black px-6 py-2 rounded-full font-semibold text-sm transition-colors">
              Saburi
            </button>
          </div>
        </div>
      </div>

      {/* Main Content Area - Central Image with Side Boxes */}
      <section className="py-8 bg-white">
        <div className="container-custom px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
              
              {/* Left Information Box - Announcement */}
              <div className="lg:col-span-3">
                <div className="bg-white border-2 border-gray-300 rounded-lg p-6 shadow-sm">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">Announcement</h3>
                  <ul className="space-y-3 text-sm text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="text-orange-600 mt-1">→</span>
                      <span>Baba's new Mandir is under construction on the land behind Sun City Plaza.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-orange-600 mt-1">→</span>
                      <span>
                        Devotees are requested to park vehicles on one of the{' '}
                        <a href="/location" className="text-blue-600 hover:underline">alternative parking lots</a>{' '}
                        located within 2 to 3 minutes of walking distance.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-orange-600 mt-1">→</span>
                      <span>We request your cooperation and patience especially on busy days such as Thursdays and carpool or use TTC if possible.</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Central Image - Main Feature */}
              <div className="lg:col-span-6">
                <div className="bg-gray-100 rounded-lg overflow-hidden shadow-lg">
                  <img 
                    src="/images/baba-murti-throne.jpg" 
                    alt="Baba's beautiful marble murthy on golden throne"
                    className="w-full h-auto object-cover"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextElementSibling.style.display = 'block';
                    }}
                  />
                  <div className="hidden bg-gray-200 aspect-[4/3] flex items-center justify-center text-gray-500 p-8">
                    <div className="text-center">
                      <div className="text-6xl mb-4">🕉️</div>
                      <p className="text-lg font-semibold">Baba's Marble Murti on Golden Throne</p>
                      <p className="text-sm mt-2">Place image at: /public/images/baba-murti-throne.jpg</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Information Box - Notice to Devotees */}
              <div className="lg:col-span-3">
                <div className="bg-white border-2 border-gray-300 rounded-lg p-6 shadow-sm">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">Notice to Devotees</h3>
                  <ul className="space-y-3 text-sm text-gray-700 mb-4">
                    <li className="flex items-start gap-2">
                      <span className="text-orange-600 mt-1">→</span>
                      <span>
                        <a href="/contact" className="text-blue-600 hover:underline font-semibold">Register</a>{' '}
                        to receive email updates.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-orange-600 mt-1">→</span>
                      <span>
                        <a href="/resources" className="text-blue-600 hover:underline font-semibold">Calendar 2025</a>{' '}
                        Click to download a copy.
                      </span>
                    </li>
                  </ul>
                  
                  {/* Sai Niwas Updates Button */}
                  <Link 
                    to="/sai-niwas" 
                    className="block w-full bg-blue-600 hover:bg-blue-700 text-white text-center py-2 px-4 rounded font-semibold text-sm transition-colors mb-4"
                  >
                    Sai Niwas Updates
                  </Link>
                  
                  <p className="text-xs text-gray-600">
                    Baba's new Mandir is under construction. Please park on alternative lots for your personal safety.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MANDIR Section - Below the main image */}
      <section className="section-padding bg-white">
        <div className="container-custom px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 text-center">MANDIR</h2>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                The Shirdi Sai Mandir, the <strong>Shirdi</strong> of North America, is conveniently located at 
                2721 Markham Road in Toronto, ON just north of Finch Road and Markham Road.
              </p>
              
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Baba's Mandir is spread across 4 units (6, 7, 8 and 9) with a total area of approximately 
                8,000 square feet. The entrance to the Mandir is from Unit 6 which leads into the reception 
                area with facilities to place footwear and jackets. Rest rooms have been provided by the 
                reception area.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                After walking across unit 7, further into the reception area, devotees enter unit 8, which 
                is the main darshan and meditation hall. Baba's beautiful marble murthy, facing west, is 
                located in the East end. Baba's benign look and mystical smile welcomes everybody to His 
                Dwarkamai in Toronto.
              </p>

              <div className="bg-orange-50 border-l-4 border-orange-600 p-6 my-8">
                <p className="text-lg text-gray-700 font-semibold">
                  This is one of the very few Mandir's wherein devotees can touch Baba's murthy to seek 
                  blessings and energy. Devotees are requested to ensure that ornaments such as rings and 
                  bangles do not scratch Baba.
                </p>
              </div>

              {/* Shirdi Baba Picture */}
              <div className="my-8">
                <div className="max-w-md mx-auto">
                  <div className="bg-gray-100 rounded-lg overflow-hidden shadow-lg">
                    <img 
                      src="/images/baba-murti-portrait.jpg" 
                      alt="Baba's murthy in Shirdi - beautiful picture"
                      className="w-full h-auto object-cover"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextElementSibling.style.display = 'block';
                      }}
                    />
                    <div className="hidden bg-gray-200 aspect-[3/4] flex items-center justify-center text-gray-500 p-8">
                      <div className="text-center">
                        <div className="text-4xl mb-2">🖼️</div>
                        <p className="text-sm">Picture of Baba's murthy in Shirdi</p>
                        <p className="text-xs mt-2">Place image at: /public/images/baba-murti-portrait.jpg</p>
                      </div>
                    </div>
                  </div>
                </div>
                <p className="text-sm text-gray-500 mt-3 text-center italic">
                  Devotees can see a beautiful picture of Baba's murthy in Shirdi mounted on the wall behind 
                  Baba's murthy. This picture was placed on the altar before Baba's murthy pratistha.
                </p>
              </div>

              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Devotees may offer parikrama to Baba around the altar. We request devotees to refrain from 
                conducting parikrama during Aarti and pujas. Parikrama may not be possible on busy days such 
                as Thursdays and major events. Please follow guidelines provided by employees and volunteers.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Unit 9, on Baba's left, houses a stage for Bhajan singers. A seating area is available in 
                Unit 7 for seniors. The Prasadalay, (food distribution) is located in Unit 6 and can seat 
                upto 150 devotees. A small kitchen is located in the west corner of unit 6.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                The resource centre is located in Unit 7 wherein various articles such as Satcharita (in various 
                languages), CDs, books can be acquired by devotees for nominal donations.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Devotees using Wheeltrans / wheelchairs may enter the Mandir using the entrance of unit 9.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed">
                Please call <a href="tel:6474444724" className="text-orange-600 font-semibold hover:underline">647-444-4724</a> to request any assistance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-8">History</h2>
          <div className="max-w-3xl mx-auto">
            <div className="space-y-3">
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <p className="text-gray-700"><strong>Oct 2005</strong> - Mandir Inauguration</p>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <p className="text-gray-700"><strong>Oct 2006</strong> - Murthi Pratista ceremony</p>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <p className="text-gray-700"><strong>Oct 2007</strong> - Baba owns Mandir (Unit 8)</p>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <p className="text-gray-700"><strong>Oct 2008</strong> - Baba expands Mandir with acquisition of Unit 7</p>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <p className="text-gray-700"><strong>Feb 2009</strong> - 2.2 acres land purchased at 2781 Markham Road, Toronto</p>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <p className="text-gray-700"><strong>Apr 2011</strong> - Baba expands Mandir with acquisition of Unit 6</p>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <p className="text-gray-700"><strong>Sep 2012</strong> - Temporary parking lot set up on Baba's land</p>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <p className="text-gray-700"><strong>Jan 2016</strong> - Baba's Mandir further expands with acquisition of Unit 9</p>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <p className="text-gray-700"><strong>Oct 2019</strong> - Baba's 2.2 acre land paved for parking</p>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <p className="text-gray-700"><strong>Feb 2022</strong> - Unit 7 modifications – Commercial kitchen / mezzanine floor</p>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <p className="text-gray-700"><strong>Mar 2022</strong> - Fencing for Baba's Parking</p>
              </div>
            </div>
            <div className="mt-6 text-center">
              <Link to="/about" className="btn-primary inline-flex items-center">
                Read Full Story →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
