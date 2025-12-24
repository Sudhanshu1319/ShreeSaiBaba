const Contact = () => {
  return (
    <div>
      {/* Hero */}
      <section className="hero-gradient text-white py-16">
        <div className="container-custom px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl">Get in touch with the Shirdi Sai Mandir</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding bg-white">
        <div className="container-custom px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="card p-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Address</h3>
                <p className="text-lg text-gray-700 mb-2">
                  Shirdi Sai Mandir<br />
                  2721 Markham Road<br />
                  Toronto, ON<br />
                  Canada
                </p>
                <p className="text-gray-600 mt-4">
                  Just north of Finch Road and Markham Road
                </p>
              </div>

              <div className="card p-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Contact Information</h3>
                <div className="space-y-3 text-lg text-gray-700">
                  <p>
                    <span className="font-semibold">Phone:</span>{' '}
                    <a href="tel:6474444724" className="text-orange-600 hover:underline">
                      647-444-4724
                    </a>
                  </p>
                  <p>
                    <span className="font-semibold">For Assistance:</span> Call for any special 
                    assistance during your visit
                  </p>
                </div>
              </div>
            </div>

            <div className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Visit Us</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                We welcome all devotees to visit the Shirdi Sai Mandir. The Mandir is open 
                daily for darshan and prayers. Please check the Services page for daily aarti 
                timings and special events.
              </p>

              <h2 className="text-3xl font-bold text-gray-800 mb-4 mt-8">Volunteer</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                The Mandir needs volunteers. Please contact the Volunteer Committee with your 
                availability and skills.
              </p>
              <a href="mailto:volunteer@theshirdisaimandir.ca" className="btn-primary inline-block">
                Contact Volunteer Committee
              </a>

              <h2 className="text-3xl font-bold text-gray-800 mb-4 mt-8">Accessibility</h2>
              <div className="bg-orange-50 border-l-4 border-orange-600 p-6 my-8">
                <p className="text-lg text-gray-700 font-semibold mb-2">
                  Wheelchair Accessible
                </p>
                <p className="text-lg text-gray-700">
                  Devotees using Wheeltrans or wheelchairs may enter the Mandir using the 
                  entrance of Unit 9. For assistance, please call 647-444-4724.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;

