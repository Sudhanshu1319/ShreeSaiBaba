import { Building, Heart, Users, Sparkles } from 'lucide-react';

const SaiNiwas = () => {
  const features = [
    {
      icon: <Building className="w-8 h-8" />,
      title: 'Larger Temple Space',
      description: 'Expanded darshan hall to accommodate more devotees comfortably'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Community Hall',
      description: 'Multipurpose hall for bhajans, cultural programs, and community events'
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: 'Modern Facilities',
      description: 'State-of-the-art kitchen, prasadalay, and amenities'
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: 'Sacred Spaces',
      description: 'Dedicated meditation rooms and peaceful prayer areas'
    }
  ];

  return (
    <div>
      {/* Hero */}
      <section className="hero-gradient text-white py-20">
        <div className="container-custom px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Sai Niwas</h1>
          <p className="text-xl md:text-2xl mb-4">The New Mandir Project</p>
          <p className="text-lg max-w-2xl mx-auto">
            Building a grand home for Baba to serve the growing community of devotees
          </p>
        </div>
      </section>

      {/* Project Overview */}
      <section className="section-padding bg-white">
        <div className="container-custom px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                A Vision for the Future
              </h2>
              <p className="text-lg text-gray-700">
                Baba's new Mandir, Sai Niwas, is currently under construction at 2781 Markham Road. 
                This ambitious project will provide a permanent, purpose-built home for our growing 
                spiritual community.
              </p>
            </div>

            <div className="bg-orange-50 rounded-lg p-8 mb-12">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Construction Update</h3>
              <p className="text-gray-700 mb-4">
                Construction is actively underway. For devotee safety, please park on alternative 
                lots during your visit. We appreciate your patience and cooperation during this 
                exciting phase.
              </p>
              <div className="bg-white rounded-lg p-6 mt-4">
                <p className="text-sm text-gray-600">
                  <strong>Parking Notice:</strong> Please use the parking lot at 2781 Markham Road 
                  behind Sun City Plaza. Parking in the Mandir condominium complex is prohibited.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Plans and Models */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">
              Sai Niwas – Plans and Models
            </h2>
            <p className="text-center text-gray-600 mb-12">
              Explore the architectural plans and models for Baba's new Mandir
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              <div className="card overflow-hidden">
                <div className="aspect-video bg-gray-200 relative overflow-hidden">
                  <img 
                    src="/images/sai-niwas-plans.jpg" 
                    alt="Main Floor Plan"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextElementSibling.style.display = 'flex';
                    }}
                  />
                  <div className="hidden absolute inset-0 flex items-center justify-center">
                    <span className="text-gray-500">Architectural Plan</span>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-gray-800">Main Floor Plan</h3>
                  <p className="text-sm text-gray-600">Ground level layout</p>
                </div>
              </div>
              <div className="card overflow-hidden">
                <div className="aspect-video bg-gray-200 relative overflow-hidden">
                  <img 
                    src="/images/sai-niwas-model.jpg" 
                    alt="3D Model View"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextElementSibling.style.display = 'flex';
                    }}
                  />
                  <div className="hidden absolute inset-0 flex items-center justify-center">
                    <span className="text-gray-500">3D Model View</span>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-gray-800">Exterior View</h3>
                  <p className="text-sm text-gray-600">Building exterior design</p>
                </div>
              </div>
              <div className="card overflow-hidden">
                <div className="aspect-video bg-gray-200 relative overflow-hidden">
                  <img 
                    src="/images/sai-niwas-interior.jpg" 
                    alt="Interior Design"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextElementSibling.style.display = 'flex';
                    }}
                  />
                  <div className="hidden absolute inset-0 flex items-center justify-center">
                    <span className="text-gray-500">Interior Design</span>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-gray-800">Darshan Hall</h3>
                  <p className="text-sm text-gray-600">Main prayer hall design</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-8 text-center">
              <p className="text-gray-700 mb-4">
                Detailed plans and models are available for viewing at the temple. 
                Please contact us to schedule a viewing or for more information about the project.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <a href="/contact" className="btn-primary">Contact for Details</a>
                <a href="tel:6474444724" className="btn-secondary">Call 647-444-4724</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="section-padding bg-white">
        <div className="container-custom px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
              Features of Sai Niwas
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="card p-6">
                  <div className="text-orange-600 mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding bg-white">
        <div className="container-custom px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Project Timeline</h2>
            
            <div className="space-y-6">
              <div className="bg-green-50 border-l-4 border-green-600 p-6">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-3 h-3 bg-green-600 rounded-full"></div>
                  <h3 className="text-xl font-bold text-gray-800">Feb 2009 - Completed</h3>
                </div>
                <p className="text-gray-700 ml-6">2.2 acres land purchased at 2781 Markham Road</p>
              </div>

              <div className="bg-green-50 border-l-4 border-green-600 p-6">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-3 h-3 bg-green-600 rounded-full"></div>
                  <h3 className="text-xl font-bold text-gray-800">Oct 2019 - Completed</h3>
                </div>
                <p className="text-gray-700 ml-6">Land paved for parking facilities</p>
              </div>

              <div className="bg-orange-50 border-l-4 border-orange-600 p-6">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-3 h-3 bg-orange-600 rounded-full animate-pulse"></div>
                  <h3 className="text-xl font-bold text-gray-800">Current - In Progress</h3>
                </div>
                <p className="text-gray-700 ml-6">Main temple construction underway</p>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-600 p-6">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
                  <h3 className="text-xl font-bold text-gray-800">Future - Planned</h3>
                </div>
                <p className="text-gray-700 ml-6">Completion and inauguration of Sai Niwas</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Support */}
      <section className="section-padding bg-orange-50">
        <div className="container-custom px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Support the Project</h2>
            <p className="text-lg text-gray-700 mb-8">
              Your contributions help us build Baba's new home. Every donation, big or small, 
              brings us closer to completing Sai Niwas.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a href="/contact" className="btn-primary">Donate Now</a>
              <a href="/contact" className="btn-secondary">Contact for Details</a>
            </div>
            
            <div className="mt-12 bg-white rounded-lg p-6">
              <p className="text-gray-700">
                "Let there be no insistence on establishing one's own view, no attempt to refute 
                other's opinions, no discussions of pros and cons of any subject"
              </p>
              <p className="text-orange-600 font-semibold mt-2">- Shri Sai Baba</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SaiNiwas;