const Location = () => {
  return (
    <div>
      {/* Hero */}
      <section className="hero-gradient text-white py-16">
        <div className="container-custom px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Location & Directions</h1>
          <p className="text-xl">Find your way to the Shirdi of North America</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding bg-white">
        <div className="container-custom px-4">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Address</h2>
              <div className="bg-gray-50 rounded-lg p-6 mb-8">
                <p className="text-xl font-semibold text-gray-800 mb-2">
                  Shirdi Sai Mandir
                </p>
                <p className="text-lg text-gray-700">
                  2721 Markham Road<br />
                  Toronto, ON<br />
                  Canada
                </p>
                <p className="text-lg text-gray-600 mt-4">
                  Just north of Finch Road and Markham Road
                </p>
              </div>

              <h2 className="text-3xl font-bold text-gray-800 mb-4 mt-8">Directions</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                The Mandir is conveniently located at 2721 Markham Road in Toronto, ON, 
                just north of the intersection of Finch Road and Markham Road. The entrance 
                to the Mandir is from Unit 6.
              </p>

              <h2 className="text-3xl font-bold text-gray-800 mb-4 mt-8">Parking</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Baba's 2.2 acre land has been paved for parking, providing ample space for 
                devotees. The parking lot is located adjacent to the Mandir.
              </p>

              <h2 className="text-3xl font-bold text-gray-800 mb-4 mt-8">Accessibility</h2>
              <div className="bg-orange-50 border-l-4 border-orange-600 p-6 my-8">
                <p className="text-lg text-gray-700 font-semibold mb-2">
                  Wheelchair Accessible Entrance
                </p>
                <p className="text-lg text-gray-700">
                  Devotees using Wheeltrans or wheelchairs may enter the Mandir using the 
                  entrance of Unit 9. For assistance, please call 647-444-4724.
                </p>
              </div>

              <h2 className="text-3xl font-bold text-gray-800 mb-4 mt-8">Temple Timings</h2>
              <div className="bg-orange-50 rounded-lg p-6 mb-8">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Regular Hours</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex justify-between">
                    <span>Monday - Wednesday</span>
                    <span className="font-semibold">7:00 AM - 9:00 PM</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Thursday (Special)</span>
                    <span className="font-semibold">7:00 AM - 10:00 PM</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Friday - Sunday</span>
                    <span className="font-semibold">7:00 AM - 9:00 PM</span>
                  </li>
                </ul>
              </div>

              <h2 className="text-3xl font-bold text-gray-800 mb-4">Daily Aarti Timings</h2>
              <div className="bg-orange-50 rounded-lg p-6 mb-8">
                <ul className="space-y-2 text-gray-700">
                  <li className="flex justify-between">
                    <span>Kakad Aarti</span>
                    <span className="font-semibold">7:00 AM</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Madhyan Aarti</span>
                    <span className="font-semibold">12:00 PM</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Dhoop Aarti</span>
                    <span className="font-semibold">6:00 PM</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Shej Aarti</span>
                    <span className="font-semibold">9:00 PM</span>
                  </li>
                </ul>
              </div>

              <h2 className="text-3xl font-bold text-gray-800 mb-4 mt-8">Contact</h2>
              <div className="space-y-4 text-lg text-gray-700">
                <p>
                  <span className="font-semibold">Phone:</span>{' '}
                  <a href="tel:6474444724" className="text-orange-600 hover:underline">
                    647-444-4724
                  </a>
                </p>
                <p>
                  <span className="font-semibold">For Assistance:</span> Please call ahead if 
                  you need any special assistance during your visit.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Location;

