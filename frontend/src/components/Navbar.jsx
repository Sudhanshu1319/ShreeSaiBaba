import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const location = useLocation();

  const navLinks = [
    { path: '/', label: 'Home' },
    {
      path: '/sai-niwas',
      label: 'Sai Niwas',
      submenu: [
        { path: '/sai-niwas', label: 'Sai Niwas – Plans and Models' }
      ]
    },
    {
      path: '/about',
      label: 'About Us',
      submenu: [
        { path: '/about', label: 'Our Story' },
        { path: '/about#mandir', label: 'Mandir' },
        { path: '/about#history', label: 'History' }
      ]
    },
    { path: '/photo-gallery', label: 'Photo Gallery' },
    { path: '/location', label: 'Location & Timing' },
    {
      path: '/services',
      label: 'Services and Activities',
      submenu: [
        { path: '/services/garlands', label: 'Garlands for Baba' },
        { path: '/services/paduka', label: 'Paduka for Worship at Home' },
        { path: '/services/shawl', label: 'Offering Shawl' },
        { path: '/prasad', label: 'Offering Prasad' },
        { path: '/services/annadaan', label: 'Annadaan' }
      ]
    },
    { path: '/events', label: 'Events' },
    { path: '/donation', label: 'Donation' },
    {
      path: '/resources',
      label: 'Resources',
      submenu: [
        { path: '/resources', label: 'Calendar' }
      ]
    },
    { path: '/contact', label: 'Contact Us' }
  ];

  const isActive = (path) => {
    if (path.includes('#')) {
      return location.pathname === path.split('#')[0];
    }
    return location.pathname === path;
  };

  const handleMouseEnter = (index) => {
    setOpenDropdown(index);
  };

  const handleMouseLeave = () => {
    setOpenDropdown(null);
  };

  const toggleMobileDropdown = (index) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };

  return (
    <nav className="bg-gray-100 sticky top-0 z-50">
      {/* Top Bar with Shraddha and Saburi */}
      <div className="bg-white border-b border-gray-200">
        <div className="container-custom px-4">
          <div className="flex justify-between items-center py-2">
            <div className="bg-yellow-400 px-6 py-2 rounded-full font-semibold text-sm">
              Shraddha
            </div>
            <div className="bg-yellow-400 px-6 py-2 rounded-full font-semibold text-sm">
              Saburi
            </div>
          </div>
        </div>
      </div>

      {/* Main Header with Logo and Title */}
      <div className="container-custom px-4 py-3">
        <div className="bg-white rounded-full shadow-lg px-6 py-3 flex items-center justify-between">
          {/* Logo and Title */}
          <div className="flex items-center gap-3">
            {/* Circular Logo with Sai Baba Image */}
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-yellow-400 via-orange-500 to-orange-600 flex items-center justify-center shadow-lg p-1">
              <div className="w-full h-full rounded-full bg-white flex items-center justify-center overflow-hidden">
                <img
                  src="/images/images.jpg"
                  alt="Sai Baba Logo"
                  className="w-full h-full object-cover rounded-full"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextElementSibling.style.display = 'flex';
                  }}
                />
                <div className="hidden text-orange-600 text-3xl font-bold">ॐ</div>
              </div>
            </div>
            <div>
              <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-800">
                The Shirdi Sai Mandir And Cultural Centre
              </h1>
            </div>
          </div>

          {/* Live Darshan Button */}
          <Link
            to="/live-darshan"
            className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-2.5 rounded-full font-semibold text-sm transition-colors hidden md:block shadow-md"
          >
            Live Darshan
          </Link>
        </div>
      </div>

      {/* Navigation Bar */}
      <div className="bg-orange-600">
        <div className="container-custom px-4">
          <div className="flex justify-between items-center py-2">
            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center gap-0">
              {navLinks.map((link, index) => (
                <div
                  key={link.path}
                  className="relative"
                  onMouseEnter={() => link.submenu && handleMouseEnter(index)}
                  onMouseLeave={() => link.submenu && handleMouseLeave()}
                >
                  {link.submenu ? (
                    <>
                      <button
                        className={`px-4 py-2 text-sm font-medium transition-colors flex items-center gap-1 ${
                          isActive(link.path)
                            ? 'bg-yellow-500 text-black'
                            : 'text-white hover:bg-orange-700'
                        }`}
                      >
                        {link.label}
                        <ChevronDown className="w-3 h-3" />
                      </button>
                      {openDropdown === index && (
                        <div className="absolute top-full left-0 mt-0 bg-white shadow-lg min-w-[220px] py-1 border border-gray-200 z-50">
                          {link.submenu.map((subItem) => (
                            <Link
                              key={subItem.path}
                              to={subItem.path}
                              className={`block px-4 py-2 text-sm transition-colors ${
                                isActive(subItem.path)
                                  ? 'bg-orange-50 text-orange-600 font-semibold'
                                  : 'text-gray-700 hover:bg-orange-50 hover:text-orange-600'
                              }`}
                            >
                              {subItem.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <Link
                      to={link.path}
                      className={`px-4 py-2 text-sm font-medium transition-colors ${
                        isActive(link.path)
                          ? 'bg-yellow-500 text-black'
                          : 'text-white hover:bg-orange-700'
                      }`}
                    >
                      {link.label}
                    </Link>
                  )}
                </div>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden text-white hover:text-yellow-300 transition-colors"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white pb-4 border-t border-gray-200">
          {navLinks.map((link, index) => (
            <div key={link.path}>
              {link.submenu ? (
                <>
                  <button
                    onClick={() => toggleMobileDropdown(index)}
                    className={`w-full flex items-center justify-between px-4 py-3 rounded-md text-sm font-medium transition-colors ${
                      isActive(link.path)
                        ? 'bg-orange-600 text-white'
                        : 'text-gray-700 hover:bg-orange-100 hover:text-orange-600'
                    }`}
                  >
                    <span>{link.label}</span>
                    <ChevronDown
                      className={`w-4 h-4 transition-transform ${
                        openDropdown === index ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  {openDropdown === index && (
                    <div className="pl-4 pb-2">
                      {link.submenu.map((subItem) => (
                        <Link
                          key={subItem.path}
                          to={subItem.path}
                          onClick={() => setIsOpen(false)}
                          className={`block px-4 py-2 rounded-md text-sm transition-colors ${
                            isActive(subItem.path)
                              ? 'bg-orange-50 text-orange-600 font-semibold'
                              : 'text-gray-600 hover:bg-orange-50 hover:text-orange-600'
                          }`}
                        >
                          {subItem.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <Link
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`block px-4 py-3 rounded-md text-sm font-medium transition-colors ${
                    isActive(link.path)
                      ? 'bg-orange-600 text-white'
                      : 'text-gray-700 hover:bg-orange-100 hover:text-orange-600'
                  }`}
                >
                  {link.label}
                </Link>
              )}
            </div>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
