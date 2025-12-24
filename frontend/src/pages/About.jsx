const About = () => {
  const timeline = [
    { year: 'Oct 2005', event: 'Mandir Inauguration' },
    { year: 'Oct 2006', event: 'Murthi Pratista ceremony' },
    { year: 'Oct 2007', event: 'Baba owns Mandir (Unit 8)' },
    { year: 'Oct 2008', event: 'Baba expands Mandir with acquisition of Unit 7' },
    { year: 'Feb 2009', event: '2.2 acres land purchased at 2781 Markham Road, Toronto' },
    { year: 'Apr 2011', event: 'Baba expands Mandir with acquisition of Unit 6' },
    { year: 'Sep 2012', event: 'Temporary parking lot set up on Baba\'s land' },
    { year: 'Jan 2016', event: 'Baba\'s Mandir further expands with acquisition of Unit 9' },
    { year: 'Oct 2019', event: 'Baba\'s 2.2 acre land paved for parking' },
    { year: 'Feb 2022', event: 'Unit 7 modifications – Commercial kitchen / mezzanine floor' },
    { year: 'Mar 2022', event: 'Fencing for Baba\'s Parking' }
  ];

  return (
    <div>
      {/* Hero */}
      <section className="hero-gradient text-white py-16">
        <div className="container-custom px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Us</h1>
          <p className="text-xl">The Shirdi of North America</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding bg-white">
        <div className="container-custom px-4">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                The Shirdi Sai Mandir, the Shirdi of North America, is conveniently located at 
                2721 Markham Road in Toronto, ON just north of Finch Road and Markham Road.
              </p>
              
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Baba's Mandir is spread across 4 units (6, 7, 8 and 9) with a total area of 
                approximately 8,000 square feet. The entrance to the Mandir is from Unit 6 which 
                leads into the reception area with facilities to place footwear and jackets. 
                Rest rooms have been provided by the reception area.
              </p>

              <h2 className="text-3xl font-bold text-gray-800 mb-4 mt-8">The Main Darshan Hall</h2>
              
              {/* Baba Murti Image */}
              <div className="my-8">
                <div className="bg-gray-100 rounded-lg overflow-hidden shadow-lg max-w-4xl mx-auto">
                  <img 
                    src="/images/baba-murti-throne.jpg" 
                    alt="Baba's beautiful marble murti on golden throne"
                    className="w-full h-auto object-cover"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextElementSibling.style.display = 'block';
                    }}
                  />
                  <div className="hidden bg-gray-200 aspect-[4/3] flex items-center justify-center text-gray-500 p-8">
                    <div className="text-center">
                      <div className="text-6xl mb-4">🕉️</div>
                      <p className="text-lg font-semibold">Baba's Marble Murti</p>
                      <p className="text-sm mt-2">Place image at: /public/images/baba-murti-throne.jpg</p>
                    </div>
                  </div>
                </div>
              </div>

              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                After walking across unit 7, further into the reception area, devotees enter unit 8, 
                which is the main darshan and meditation hall. Baba's beautiful marble murti, facing 
                west, is located in the East end. Baba's benign look and mystical smile welcomes 
                everybody to His Dwarkamai in Toronto.
              </p>

              <div className="bg-orange-50 border-l-4 border-orange-600 p-6 my-8">
                <p className="text-lg text-gray-700 font-semibold">
                  This is one of the very few Mandirs wherein devotees can touch Baba's murti to 
                  seek blessings and energy. Devotees are requested to ensure that ornaments such 
                  as rings and bangles do not scratch Baba.
                </p>
              </div>

              <h2 className="text-3xl font-bold text-gray-800 mb-4 mt-8">Facilities</h2>
              <ul className="space-y-3 text-lg text-gray-700">
                <li className="flex gap-3">
                  <span className="text-orange-600 font-bold">•</span>
                  <span>Unit 9 houses a stage for Bhajan singers</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-orange-600 font-bold">•</span>
                  <span>Seating area available in Unit 7 for seniors</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-orange-600 font-bold">•</span>
                  <span>Prasadalay in Unit 6 can seat up to 150 devotees</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-orange-600 font-bold">•</span>
                  <span>Small kitchen in the west corner of unit 6</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-orange-600 font-bold">•</span>
                  <span>Resource centre in Unit 7 with Satcharita, CDs, and books</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-orange-600 font-bold">•</span>
                  <span>Wheelchair accessible entrance through Unit 9</span>
                </li>
              </ul>

              <h2 className="text-3xl font-bold text-gray-800 mb-4 mt-8">Parikrama</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Devotees may offer parikrama to Baba around the altar. We request devotees to refrain 
                from conducting parikrama during Aarti and pujas. Parikrama may not be possible on 
                busy days such as Thursdays and major events.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
            Our Journey
          </h2>
          <div className="max-w-3xl mx-auto">
            {timeline.map((item, index) => (
              <div key={index} className="flex gap-6 mb-8 last:mb-0">
                <div className="flex-shrink-0 w-32 text-right">
                  <span className="inline-block bg-orange-600 text-white px-4 py-2 rounded-lg font-semibold">
                    {item.year}
                  </span>
                </div>
                <div className="flex-grow pb-8 border-l-2 border-orange-600 pl-6 relative">
                  <div className="absolute -left-2 top-2 w-4 h-4 bg-orange-600 rounded-full"></div>
                  <p className="text-gray-700 text-lg">{item.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="section-padding bg-white">
        <div className="container-custom px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Need Assistance?</h2>
          <p className="text-lg text-gray-600 mb-6">
            Devotees using Wheeltrans / wheelchairs may enter the Mandir using the entrance of unit 9.
          </p>
          <a href="tel:6474444724" className="btn-primary inline-block">
            Call 647-444-4724 for Assistance
          </a>
        </div>
      </section>
    </div>
  );
};

export default About;
