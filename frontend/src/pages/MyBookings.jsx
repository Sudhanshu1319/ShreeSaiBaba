import { useState, useEffect } from 'react';
import { getBookingsByEmail, getPrasadByEmail } from '../services/api';
import { Calendar, Clock, CheckCircle, XCircle, AlertCircle } from 'lucide-react';

const MyBookings = () => {
  const [email, setEmail] = useState('');
  const [bookings, setBookings] = useState([]);
  const [prasadBookings, setPrasadBookings] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const fetchBookings = async () => {
    if (!email) {
      setError('Please enter your email address');
      return;
    }

    setLoading(true);
    setError('');

    try {
      const [bookingsRes, prasadRes] = await Promise.all([
        getBookingsByEmail(email),
        getPrasadByEmail(email)
      ]);

      setBookings(bookingsRes.bookings || []);
      setPrasadBookings(prasadRes.prasadBookings || []);
    } catch (err) {
      setError('Error fetching bookings. Please try again.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const getStatusBadge = (status) => {
    const statusConfig = {
      pending: { bg: 'bg-yellow-100', text: 'text-yellow-800', icon: <AlertCircle size={16} /> },
      confirmed: { bg: 'bg-green-100', text: 'text-green-800', icon: <CheckCircle size={16} /> },
      cancelled: { bg: 'bg-red-100', text: 'text-red-800', icon: <XCircle size={16} /> }
    };

    const config = statusConfig[status] || statusConfig.pending;

    return (
      <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-sm font-semibold ${config.bg} ${config.text}`}>
        {config.icon}
        {status.charAt(0).toUpperCase() + status.slice(1)}
      </span>
    );
  };

  return (
    <div>
      {/* Hero */}
      <section className="hero-gradient text-white py-16">
        <div className="container-custom px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">My Bookings</h1>
          <p className="text-xl">View and manage your temple bookings</p>
        </div>
      </section>

      {/* Search Section */}
      <section className="section-padding bg-white">
        <div className="container-custom px-4">
          <div className="max-w-2xl mx-auto mb-12">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Enter Your Email</h2>
              <div className="flex gap-4">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your.email@example.com"
                  className="flex-grow px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-600 focus:border-transparent"
                />
                <button
                  onClick={fetchBookings}
                  disabled={loading}
                  className="btn-primary disabled:opacity-50"
                >
                  {loading ? 'Loading...' : 'View Bookings'}
                </button>
              </div>
              {error && (
                <div className="mt-4 p-4 bg-red-50 text-red-800 rounded-lg">
                  {error}
                </div>
              )}
            </div>
          </div>

          {/* Service Bookings */}
          {bookings.length > 0 && (
            <div className="max-w-5xl mx-auto mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Service Bookings</h2>
              <div className="space-y-4">
                {bookings.map((booking) => (
                  <div key={booking._id} className="card p-6">
                    <div className="flex flex-wrap justify-between items-start gap-4">
                      <div className="flex-grow">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="text-xl font-bold text-gray-800">{booking.service}</h3>
                          {getStatusBadge(booking.status)}
                        </div>
                        <div className="space-y-2 text-gray-600">
                          <p className="flex items-center gap-2">
                            <Calendar size={16} />
                            {new Date(booking.date).toLocaleDateString('en-US', {
                              weekday: 'long',
                              year: 'numeric',
                              month: 'long',
                              day: 'numeric'
                            })}
                          </p>
                          <p><strong>Name:</strong> {booking.name}</p>
                          <p><strong>Phone:</strong> {booking.phone}</p>
                          {booking.additionalInfo && (
                            <p><strong>Details:</strong> {booking.additionalInfo}</p>
                          )}
                        </div>
                      </div>
                      <div className="text-sm text-gray-500">
                        <Clock size={14} className="inline mr-1" />
                        Booked on {new Date(booking.createdAt).toLocaleDateString()}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Prasad Bookings */}
          {prasadBookings.length > 0 && (
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Prasad Bookings</h2>
              <div className="space-y-4">
                {prasadBookings.map((prasad) => (
                  <div key={prasad._id} className="card p-6 bg-orange-50">
                    <div className="flex flex-wrap justify-between items-start gap-4">
                      <div className="flex-grow">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="text-xl font-bold text-gray-800">Prasad Sponsorship</h3>
                          {getStatusBadge(prasad.status)}
                        </div>
                        <div className="space-y-2 text-gray-600">
                          <p className="flex items-center gap-2">
                            <Calendar size={16} />
                            {new Date(prasad.date).toLocaleDateString('en-US', {
                              weekday: 'long',
                              year: 'numeric',
                              month: 'long',
                              day: 'numeric'
                            })}
                          </p>
                          <p><strong>Name:</strong> {prasad.name}</p>
                          <p><strong>Phone:</strong> {prasad.phone}</p>
                          {prasad.occasion && <p><strong>Occasion:</strong> {prasad.occasion}</p>}
                          {prasad.numberOfPeople && <p><strong>Number of People:</strong> {prasad.numberOfPeople}</p>}
                          {prasad.amount && <p><strong>Donation:</strong> ${prasad.amount}</p>}
                        </div>
                      </div>
                      <div className="text-sm text-gray-500">
                        <Clock size={14} className="inline mr-1" />
                        Booked on {new Date(prasad.createdAt).toLocaleDateString()}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* No Bookings Message */}
          {!loading && bookings.length === 0 && prasadBookings.length === 0 && email && !error && (
            <div className="max-w-3xl mx-auto text-center">
              <div className="bg-gray-50 rounded-lg p-12">
                <AlertCircle className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-800 mb-2">No Bookings Found</h3>
                <p className="text-gray-600 mb-6">
                  We couldn't find any bookings associated with this email address.
                </p>
                <div className="flex flex-wrap gap-4 justify-center">
                  <a href="/prasad" className="btn-primary">Book Prasad</a>
                  <a href="/services" className="btn-secondary">View Services</a>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default MyBookings;