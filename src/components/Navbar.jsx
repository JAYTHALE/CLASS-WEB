import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, GraduationCap, ArrowLeft } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isAtBottom, setIsAtBottom] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  // Scroll handlers
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      const isBottom =
        window.innerHeight + window.scrollY >= document.body.offsetHeight - 10;
      setIsAtBottom(isBottom);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Courses', path: '/courses' },
    { name: 'Online Classes', path: '/online-classes' },
    { name: 'Offline Classes', path: '/offline-classes' },
    { name: 'Results', path: '/results' },
    { name: 'Facilities', path: '/facilities' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' }
  ];

  const shouldShowBackArrow = location.pathname !== '/' && !isAtBottom;

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md' : 'bg-white/60 backdrop-blur-md'
        }`}
    >
      <div className="py-4 px-5 flex justify-between items-center">

        {/* Back Button (only when not on home AND not at bottom) */}
        <div className='flex gap-8'>
          {shouldShowBackArrow ? (
            <button
              onClick={goBack}
              className="lg:hidden text-blue-600 hover:text-blue-800 transition"
            >
              <ArrowLeft className="w-6 h-6" />
            </button>
          ) : (
            <div className="w-6 h-6 lg:hidden" />
          )}

          {/* Logo */}
          <Link to="/" className="flex items-center">
            <GraduationCap className="h-7 w-7 text-blue-600" />
            <span className="text-xl font-bold text-gray-900">
              Excellence Academy
            </span>
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={`text-sm font-medium transition duration-300 ${location.pathname === item.path
                ? 'text-blue-600 border-b-2 border-blue-600 pb-1'
                : 'text-gray-700 hover:text-blue-600'
                }`}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
