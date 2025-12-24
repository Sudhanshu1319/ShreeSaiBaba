import { Heart, Building, Gift, CreditCard, Mail, Phone } from 'lucide-react';

const Donation = () => {
  const donationTypes = [
    {
      icon: <Building className="w-12 h-12" />,
      title: 'Sai Niwas Construction',
      description: 'Support the construction of Baba\'s new Mandir',
      details: [
        'Help build a permanent home for Baba',
        'Support the growing community',
        'Leave a lasting legacy'
      ]
    },
    {
      icon: <Heart className="w-12 h-12" />,
      title: 'General Donations',
      description: 'Support daily temple operations and activities',
      details: [
        'Maintain temple facilities',
        'Support daily aartis and pujas',
        'Help with community programs'
      ]
    },
    {
      icon: <Gift className="w-12 h-12" />,
      title: 'Food Donations',
      description: 'Donate food items for prasad and annadaan',
      details: [
        'Rice, Daal, Ghee',
        'Non-perishable items',
        'Used at Mandir or donated to charities'
      ]
    },
    {
      icon: <Heart className="w-12 h-12" />,
      title: 'In-Kind Donations',
      description: 'Donate items needed for temple operations',
      details: [
        'Temple supplies',
        'Equipment and materials',
        'Contact us for specific needs'
      ]
    }
  ];

  return (
    <div>
      {/* Hero */}
      <section className="hero-gradient text-white py-16">
        <div className="container-custom px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Donation</h1>
          <p className="text-xl">Support the temple and help serve the community</p>
        </div>
      </section>

      {/* Quote Section */}
      <section className="section-padding bg-orange-50">
        <div className="container-custom px-4">
          <div className="max-w-4xl mx-auto text-center">
            <blockquote className="text-2xl italic text-gray-800 mb-4">
              "Unless there is some relationship or connection, nobody goes anywhere. If any men or 
              creatures come to you, do not discourteously drive them away, but receive them well and 
              treat them with due respect."
            </blockquote>
            <p className="text-gray-600 font-semibold">- Shri Sai Baba</p>
          </div>
        </div>
      </section>

      {/* Donation Types */}
      <section className="section-padding bg-white">
        <div className="container-custom px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Ways to Donate
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Your generous contributions help us maintain the temple, support community programs, 
              and build Sai Niwas - Baba's new home.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {donationTypes.map((type, index) => (
              <div key={index} className="card p-6">
                <div className="text-orange-600 mb-4">{type.icon}</div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">{type.title}</h3>
                <p className="text-gray-600 mb-4">{type.description}</p>
                <ul className="space-y-2">
                  {type.details.map((detail, i) => (
                    <li key={i} className="flex items-start gap-2 text-gray-700">
                      <span className="text-orange-600 mt-1">•</span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to Donate */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
              How to Donate
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white rounded-lg p-6 text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CreditCard className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">In Person</h3>
                <p className="text-gray-600">
                  Visit the temple during operating hours and make your donation at the reception area.
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">By Phone</h3>
                <p className="text-gray-600">
                  Call us at <a href="tel:6474444724" className="text-orange-600 font-semibold">647-444-4724</a> to 
                  discuss donation options.
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">By Email</h3>
                <p className="text-gray-600">
                  Email us at <a href="mailto:info@theshirdisaimandir.ca" className="text-orange-600 font-semibold">info@theshirdisaimandir.ca</a> for 
                  more information.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Food Donations */}
      <section className="section-padding bg-white">
        <div className="container-custom px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Food Donations</h2>
            <p className="text-lg text-gray-700 mb-6 text-center">
              Devotees can drop off rice, daal, ghee and other non-perishable items at the Mandir. 
              These collections are either used at the Mandir or donated to other charitable organizations every month.
            </p>
            <div className="bg-orange-50 rounded-lg p-8">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4 text-center">Items Needed</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-white rounded-lg p-4 text-center">
                  <p className="font-semibold text-gray-800">Basmati Rice</p>
                </div>
                <div className="bg-white rounded-lg p-4 text-center">
                  <p className="font-semibold text-gray-800">Daal</p>
                </div>
                <div className="bg-white rounded-lg p-4 text-center">
                  <p className="font-semibold text-gray-800">Ghee</p>
                </div>
                <div className="bg-white rounded-lg p-4 text-center">
                  <p className="font-semibold text-gray-800">Wheat/Rava</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding bg-orange-50">
        <div className="container-custom px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Questions About Donations?</h2>
            <p className="text-lg text-gray-700 mb-6">
              We're here to help. Contact us for more information about donation options, tax receipts, 
              or to discuss specific donation needs.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a href="tel:6474444724" className="btn-primary inline-flex items-center gap-2">
                <Phone className="w-5 h-5" />
                Call 647-444-4724
              </a>
              <a href="mailto:info@theshirdisaimandir.ca" className="btn-secondary inline-flex items-center gap-2">
                <Mail className="w-5 h-5" />
                Email Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Donation;

