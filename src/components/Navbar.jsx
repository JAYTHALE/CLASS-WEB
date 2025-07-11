import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, GraduationCap } from 'lucide-react';
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react"; // Lucide icon lib



const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();


  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1); // Go one step back in browser history
  };


  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
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
    // { name: 'Attendance', path: '/student-attendance' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-white shadow-md" : "bg-white/60 backdrop-blur-md"
        }`}
    >
      <div className="py-4">
        <div className="flex justify-between items-center px-5">
          {/* Logo */}
          <div className=" lg:hidden">
            <button
              onClick={goBack}
              className="flex items-centertext-blue-600 hover:text-blue-800 transition duration-300"
            >
              <ArrowLeft className="w-6 h-6" />
            </button>
          </div>
          <Link to="/" className="flex pe-12 ">
            <GraduationCap className="h-7 w-7 text-blue-600" />
            <span className="text-xl font-bold text-gray-900">
              Excellence Academy
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`text-[16px] font-medium transition-colors duration-300 ${location.pathname === item.path
                  ? "text-blue-600 border-b-2 border-blue-600 pb-1"
                  : "text-gray-700 hover:text-blue-600"
                  }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile Hamburger */}
          {/* <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-blue-600 focus:outline-none"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div> */}
        </div>

        {/* Mobile Menu */}
        {/* {isOpen && (
          <div className="md:hidden mt-2 rounded-lg bg-white shadow-lg py-3 px-4 animate-fadeIn">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`block px-4 py-2 rounded-md font-medium ${location.pathname === item.path
                  ? "bg-blue-50 text-blue-600"
                  : "text-gray-800 hover:bg-blue-100 hover:text-blue-600"
                  }`}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        )} */}
      </div>
    </nav>
  );
};

export default Navbar;