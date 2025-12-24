import { Calendar, Flower, Footprints, Shirt, Utensils, Heart, Gift } from 'lucide-react';
import { Link } from 'react-router-dom';

const Services = () => {
  const services = [
    {
      icon: <Calendar className="w-12 h-12" />,
      title: 'Daily Aarti',
      description: 'Four aartis performed daily',
      details: ['Kakad Aarti - 7:00 AM', 'Madhyan Aarti - 12:00 PM', 'Dhoop Aarti - 6:00 PM', 'Shej Aarti - 9:00 PM']
    },
    {
      icon: <Flower className="w-12 h-12" />,
      title: 'Garlands for Baba',
      description: 'Offer beautiful garlands to Baba',
      details: ['Book garlands for special occasions', 'Fresh flowers daily', 'Available for booking'],
      link: '/services/garlands'
    },
    {
      icon: <Footprints className="w-12 h-12" />,
      title: 'Paduka for Worship at Home',
      description: 'Book Paduka for home worship',
      details: ['Available for booking', 'Take home for worship', 'Return after use'],
      link: '/services/paduka'
    },
    {
      icon: <Shirt className="w-12 h-12" />,
      title: 'Offering Shawl',
      description: 'Offer shawl to Baba during Abhishek Puja',
      details: ['Included with Abhishek Puja booking', 'Personal offerings allowed', 'Blessed shawl returned'],
      link: '/services/shawl'
    },
    {
      icon: <Utensils className="w-12 h-12" />,
      title: 'Offering Prasad',
      description: 'Sponsor prasad for devotees',
      details: ['Celebrate special occasions', 'Fresh vegetarian food', 'Feeds up to 150 devotees'],
      link: '/prasad'
    },
    {
      icon: <Heart className="w-12 h-12" />,
      title: 'Annadaan',
      description: 'Food donation service',
      details: ['Support temple activities', 'Rice, Daal, Ghee welcome', 'Donated to charitable organizations'],
      link: '/services/annadaan'
    },
    {
      icon: <Gift className="w-12 h-12" />,
      title: 'Donations',
      description: 'Support temple activities and Sai Niwas',
      details: ['General donations accepted', 'Support Sai Niwas construction', 'Food donations welcome'],
      link: '/donation'
    },
    {
      icon: <Heart className="w-12 h-12" />,
      title: 'Volunteer',
      description: 'Join our volunteer community',
      details: ['Various opportunities', 'Flexible timing', 'Serve Baba and devotees']
    }
  ];

  return (
    <div>
      {/* Hero */}
      <section className="hero-gradient text-white py-16">
        <div className="container-custom px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Services and Activities</h1>
          <p className="text-xl">Ways to serve Baba and participate in temple activities</p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-white">
        <div className="container-custom px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const ServiceCard = (
                <div key={index} className="card p-6">
                  <div className="text-orange-600 mb-4">{service.icon}</div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <ul className="space-y-2 mb-4">
                    {service.details.map((detail, i) => (
                      <li key={i} className="flex items-start gap-2 text-gray-700">
                        <span className="text-orange-600 mt-1">•</span>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                  {service.link && (
                    <Link to={service.link} className="btn-primary inline-block mt-4">
                      Book Now
                    </Link>
                  )}
                </div>
              );
              return ServiceCard;
            })}
          </div>
        </div>
      </section>

      {/* Volunteer Section */}
      <section className="section-padding bg-orange-50">
        <div className="container-custom px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Volunteer with Us</h2>
            <p className="text-lg text-gray-700 mb-6">
              Mandir needs volunteers. Please contact Volunteer Committee with your availability and skills.
            </p>
            <a href="mailto:volunteer@theshirdisaimandir.ca" className="btn-primary">
              Contact Volunteer Committee
            </a>
          </div>
        </div>
      </section>

      {/* Donation Section */}
      <section className="section-padding bg-white">
        <div className="container-custom px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Food Donations</h2>
            <p className="text-lg text-gray-700 mb-6">
              Devotees can drop off rice, daal, ghee and other non-perishable items at the Mandir. 
              These collections are either used at the Mandir or donated to other charitable organizations every month.
            </p>
            <div className="bg-orange-50 rounded-lg p-8 mt-8">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Items Needed</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-white rounded-lg p-4">
                  <p className="font-semibold text-gray-800">Basmati Rice</p>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <p className="font-semibold text-gray-800">Daal</p>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <p className="font-semibold text-gray-800">Ghee</p>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <p className="font-semibold text-gray-800">Wheat/Rava</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
