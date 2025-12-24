const Prasad = () => {
  return (
    <div>
      {/* Hero */}
      <section className="hero-gradient text-white py-16">
        <div className="container-custom px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Prasad Service</h1>
          <p className="text-xl">Sponsor prasad for devotees</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding bg-white">
        <div className="container-custom px-4">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Devotees can sponsor prasad to celebrate special occasions, birthdays, anniversaries, 
                or to express gratitude to Baba. The Prasadalay in Unit 6 can seat up to 150 devotees.
              </p>

              <h2 className="text-3xl font-bold text-gray-800 mb-4 mt-8">Prasad Details</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Fresh vegetarian food is prepared daily and served to devotees. All prasad is 
                prepared with devotion and offered to Baba before being distributed.
              </p>

              <div className="bg-orange-50 border-l-4 border-orange-600 p-6 my-8">
                <p className="text-lg text-gray-700 font-semibold">
                  To sponsor prasad, please contact the Mandir office or speak with a volunteer 
                  during your visit. Advance booking is recommended for special occasions.
                </p>
              </div>

              <h2 className="text-3xl font-bold text-gray-800 mb-4 mt-8">Contact Information</h2>
              <div className="space-y-4 text-lg text-gray-700">
                <p>
                  <span className="font-semibold">Phone:</span>{' '}
                  <a href="tel:6474444724" className="text-orange-600 hover:underline">
                    647-444-4724
                  </a>
                </p>
                <p>
                  <span className="font-semibold">Location:</span> Unit 6, Prasadalay
                </p>
                <p>
                  <span className="font-semibold">Capacity:</span> Up to 150 devotees
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Prasad;

