import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Prasad from './pages/Prasad';
import LiveDarshan from './pages/LiveDarshan';
import Location from './pages/Location';
import Resources from './pages/Resources';
import SaiNiwas from './pages/SaiNiwas';
import MyBookings from './pages/MyBookings';
import Contact from './pages/Contact';
import PhotoGallery from './pages/PhotoGallery';
import Events from './pages/Events';
import Donation from './pages/Donation';
import Garlands from './pages/Garlands';
import Paduka from './pages/Paduka';
import Shawl from './pages/Shawl';
import Annadaan from './pages/Annadaan';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/garlands" element={<Garlands />} />
            <Route path="/services/paduka" element={<Paduka />} />
            <Route path="/services/shawl" element={<Shawl />} />
            <Route path="/services/annadaan" element={<Annadaan />} />
            <Route path="/prasad" element={<Prasad />} />
            <Route path="/live-darshan" element={<LiveDarshan />} />
            <Route path="/location" element={<Location />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/sai-niwas" element={<SaiNiwas />} />
            <Route path="/my-bookings" element={<MyBookings />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/photo-gallery" element={<PhotoGallery />} />
            <Route path="/events" element={<Events />} />
            <Route path="/donation" element={<Donation />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;