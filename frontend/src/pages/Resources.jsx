import { Book, ExternalLink, Download } from 'lucide-react';

const Resources = () => {
  const resources = [
    {
      title: 'Shri Sai Satcharita',
      description: 'Available in multiple languages - English, Hindi, Telugu, Tamil, Gujarati',
      type: 'Book'
    },
    {
      title: 'Sai Baba Aarti Collection',
      description: 'Complete collection of all four daily aartis with meanings',
      type: 'Audio/Book'
    },
    {
      title: 'Bhajan CDs',
      description: 'Collection of devotional bhajans sung at the mandir',
      type: 'Audio'
    },
    {
      title: 'Calendar 2025',
      description: 'Temple calendar with all important dates and festivals',
      type: 'PDF'
    },
    {
      title: 'Sai Philosophy Books',
      description: 'Books on Sai Baba\'s teachings and philosophy',
      type: 'Book'
    },
    {
      title: 'Prayer Books',
      description: 'Daily prayer books and mantras',
      type: 'Book'
    }
  ];

  const externalLinks = [
    {
      title: 'Sri Sai Baba Sansthan Trust (Shirdi)',
      description: 'Official website of Shirdi Sai Baba Temple',
      url: 'https://www.sai.org.in'
    },
    {
      title: 'Sai Baba Teachings',
      description: 'Comprehensive resource on Sai Baba\'s life and teachings',
      url: '#'
    }
  ];

  return (
    <div>
      {/* Hero */}
      <section className="hero-gradient text-white py-16">
        <div className="container-custom px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Resources</h1>
          <p className="text-xl">Books, Audio, and Learning Materials</p>
        </div>
      </section>

      {/* Quote Section */}
      <section className="section-padding bg-orange-50">
        <div className="container-custom px-4">
          <div className="max-w-4xl mx-auto text-center">
            <blockquote className="text-2xl italic text-gray-800 mb-4">
              "Hearing my stories and teachings will create faith in devotees' hearts and they will 
              easily get self-realization and Bliss"
            </blockquote>
            <p className="text-gray-600">- Shri Sai Baba</p>
          </div>
        </div>
      </section>

      {/* Resource Centre */}
      <section className="section-padding bg-white">
        <div className="container-custom px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Resource Centre</h2>
              <p className="text-gray-600">
                The resource centre is located in Unit 7 wherein various articles can be acquired 
                by devotees for nominal donations.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {resources.map((resource, index) => (
                <div key={index} className="card p-6">
                  <div className="flex items-start gap-4">
                    <Book className="w-8 h-8 text-orange-600 flex-shrink-0" />
                    <div>
                      <div className="inline-block bg-orange-100 text-orange-600 text-xs font-semibold px-2 py-1 rounded mb-2">
                        {resource.type}
                      </div>
                      <h3 className="text-xl font-bold text-gray-800 mb-2">{resource.title}</h3>
                      <p className="text-gray-600">{resource.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 bg-orange-50 rounded-lg p-8 text-center">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Visit Our Resource Centre</h3>
              <p className="text-gray-700 mb-6">
                All resources are available for nominal donations at the temple. 
                Visit Unit 7 during temple hours to browse our collection.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <a href="/location" className="btn-primary">Get Directions</a>
                <a href="/contact" className="btn-secondary">Contact Us</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* External Links */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">External Resources</h2>
            
            <div className="space-y-6">
              {externalLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card p-6 flex items-center justify-between hover:shadow-xl transition-all group"
                >
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-orange-600 transition-colors">
                      {link.title}
                    </h3>
                    <p className="text-gray-600">{link.description}</p>
                  </div>
                  <ExternalLink className="w-6 h-6 text-orange-600 flex-shrink-0" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Downloads */}
      <section className="section-padding bg-white">
        <div className="container-custom px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Downloads</h2>
            <div className="bg-orange-50 rounded-lg p-8">
              <Download className="w-12 h-12 text-orange-600 mx-auto mb-4" />
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Calendar 2025</h3>
              <p className="text-gray-700 mb-6">
                Download the 2025 temple calendar with all important dates, festivals, and events.
              </p>
              <button className="btn-primary">Download Calendar</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Resources;