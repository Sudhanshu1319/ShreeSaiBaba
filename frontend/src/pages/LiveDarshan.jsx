const LiveDarshan = () => {
  return (
    <div>
      {/* Hero */}
      <section className="hero-gradient text-white py-16">
        <div className="container-custom px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Live Darshan</h1>
          <p className="text-xl">Experience Baba's divine presence from anywhere</p>
        </div>
      </section>

      {/* Video Section */}
      <section className="section-padding bg-white">
        <div className="container-custom px-4">
          <div className="max-w-5xl mx-auto">
            <div className="bg-gray-900 rounded-lg overflow-hidden shadow-2xl aspect-video">
              {/* Replace with actual live stream embed */}
              <div className="w-full h-full flex items-center justify-center text-white">
                <div className="text-center">
                  <div className="w-20 h-20 mx-auto mb-4 bg-orange-600 rounded-full flex items-center justify-center">
                    <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" />
                    </svg>
                  </div>
                  <p className="text-xl font-semibold">Live Darshan Stream</p>
                  <p className="text-gray-400 mt-2">Coming Soon</p>
                </div>
              </div>
            </div>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-orange-50 rounded-lg p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3">Aarti Schedule</h3>
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

              <div className="bg-orange-50 rounded-lg p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3">Temple Timings</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex justify-between">
                    <span>Monday - Wednesday</span>
                    <span className="font-semibold">7 AM - 9 PM</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Thursday (Special)</span>
                    <span className="font-semibold">7 AM - 10 PM</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Friday - Sunday</span>
                    <span className="font-semibold">7 AM - 9 PM</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Instructions */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
              How to Watch Live Darshan
            </h2>
            <div className="space-y-4">
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">1. Choose Your Time</h3>
                <p className="text-gray-600">
                  Check the aarti schedule and temple timings to plan your virtual visit
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">2. Connect Your Device</h3>
                <p className="text-gray-600">
                  Access live darshan from your computer, tablet, or smartphone
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">3. Experience Baba's Blessings</h3>
                <p className="text-gray-600">
                  Join devotees worldwide in experiencing Baba's divine presence
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LiveDarshan;