import { Calendar, Clock, MapPin, Users } from 'lucide-react';

const Events = () => {
  const upcomingEvents = [
    {
      title: 'Guru Purnima',
      date: '2025-07-13',
      time: '7:00 AM - 9:00 PM',
      description: 'Special aarti and celebrations on Guru Purnima',
      type: 'Festival'
    },
    {
      title: 'Rama Navami',
      date: '2025-04-06',
      time: '7:00 AM - 9:00 PM',
      description: 'Celebration of Lord Rama\'s birth',
      type: 'Festival'
    },
    {
      title: 'Sai Baba Jayanti',
      date: '2025-09-27',
      time: '7:00 AM - 10:00 PM',
      description: 'Birth anniversary of Shri Sai Baba of Shirdi',
      type: 'Festival'
    },
    {
      title: 'Diwali Celebration',
      date: '2025-10-20',
      time: '6:00 PM - 10:00 PM',
      description: 'Festival of Lights celebration',
      type: 'Festival'
    },
    {
      title: 'Weekly Thursday Special Aarti',
      date: 'Every Thursday',
      time: '7:00 AM - 10:00 PM',
      description: 'Extended hours and special aarti on Thursdays',
      type: 'Weekly'
    },
    {
      title: 'Satyanarayan Puja',
      date: 'Monthly',
      time: '10:00 AM',
      description: 'Monthly Satyanarayan Vrat Puja ceremony',
      type: 'Monthly'
    }
  ];

  const formatDate = (dateString) => {
    if (dateString === 'Every Thursday' || dateString === 'Monthly') {
      return dateString;
    }
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  const getEventTypeColor = (type) => {
    switch (type) {
      case 'Festival':
        return 'bg-orange-100 text-orange-600';
      case 'Weekly':
        return 'bg-blue-100 text-blue-600';
      case 'Monthly':
        return 'bg-green-100 text-green-600';
      default:
        return 'bg-gray-100 text-gray-600';
    }
  };

  return (
    <div>
      {/* Hero */}
      <section className="hero-gradient text-white py-16">
        <div className="container-custom px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Events</h1>
          <p className="text-xl">Upcoming festivals, celebrations, and special programs</p>
        </div>
      </section>

      {/* Events List */}
      <section className="section-padding bg-white">
        <div className="container-custom px-4">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {upcomingEvents.map((event, index) => (
                <div key={index} className="card p-6 hover:shadow-xl transition-shadow">
                  <div className="flex flex-col md:flex-row md:items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="bg-orange-600 text-white rounded-lg p-4 text-center min-w-[100px]">
                        <Calendar className="w-6 h-6 mx-auto mb-2" />
                        <div className="text-sm font-semibold">
                          {formatDate(event.date)}
                        </div>
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <h3 className="text-2xl font-bold text-gray-800 mb-2">{event.title}</h3>
                          <span className={`inline-block px-3 py-1 rounded-full text-sm font-semibold ${getEventTypeColor(event.type)}`}>
                            {event.type}
                          </span>
                        </div>
                      </div>
                      <p className="text-gray-700 mb-4">{event.description}</p>
                      <div className="flex flex-wrap gap-4 text-gray-600">
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4" />
                          <span>{event.time}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4" />
                          <span>2721 Markham Road, Toronto</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Regular Schedule */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Regular Schedule</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-lg p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                  <Clock className="w-5 h-5 text-orange-600" />
                  Daily Aarti Timings
                </h3>
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
              <div className="bg-white rounded-lg p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-orange-600" />
                  Temple Hours
                </h3>
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

      {/* Contact for Events */}
      <section className="section-padding bg-orange-50">
        <div className="container-custom px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Have Questions About Events?</h2>
            <p className="text-lg text-gray-700 mb-6">
              For more information about upcoming events, special programs, or to register for ceremonies, 
              please contact us.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a href="tel:6474444724" className="btn-primary">
                Call 647-444-4724
              </a>
              <a href="mailto:info@theshirdisaimandir.ca" className="btn-secondary">
                Email Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Events;

