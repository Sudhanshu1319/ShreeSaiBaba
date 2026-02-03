import { useState } from 'react';

const LiveDarshan = () => {
  const [isLive, setIsLive] = useState(false);
  // Replace with your actual YouTube live stream ID when available
  const youtubeStreamId = 'YOUR_YOUTUBE_STREAM_ID';

  return (
    <div>
      {/* Hero */}
      <section className="hero-gradient text-white py-16">
        <div className="container-custom px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Live Darshan</h1>
          <p className="text-xl">Experience Baba's divine presence from anywhere</p>
          {isLive && (
            <div className="mt-4 inline-flex items-center gap-2 bg-red-600 px-4 py-2 rounded-full">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
              </span>
              <span className="font-semibold">LIVE NOW</span>
            </div>
          )}
        </div>
      </section>

      {/* Video Section */}
      <section className="section-padding bg-white">
        <div className="container-custom px-4">
          <div className="max-w-5xl mx-auto">
            <div className="bg-gray-900 rounded-lg overflow-hidden shadow-2xl aspect-video relative">
              {/* YouTube Embed - Replace YOUR_YOUTUBE_STREAM_ID with actual ID */}
              <iframe
                className="w-full h-full absolute inset-0"
                src={`https://www.youtube.com/embed/${youtubeStreamId}?autoplay=0&rel=0&modestbranding=1`}
                title="Live Darshan Stream"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              {/* Fallback when stream is not available */}
              <div className="w-full h-full flex items-center justify-center text-white absolute inset-0 bg-gray-900" style={{display: youtubeStreamId === 'YOUR_YOUTUBE_STREAM_ID' ? 'flex' : 'none'}}>
                <div className="text-center">
                  <div className="w-20 h-20 mx-auto mb-4 bg-orange-600 rounded-full flex items-center justify-center">
                    <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" />
                    </svg>
                  </div>
                  <p className="text-xl font-semibold">Live Darshan Loading...</p>
                  <p className="text-gray-400 mt-2">Please check back during temple hours</p>
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