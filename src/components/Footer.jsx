import React from 'react';
import { Link } from 'react-router-dom';
import { GraduationCap, MapPin, Phone, Mail, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Courses', path: '/courses' },
    { name: 'Results', path: '/results' },
    { name: 'Contact', path: '/contact' }
  ];

  const courses = [
    { name: 'JEE Main & Advanced', path: '/courses' },
    { name: 'NEET', path: '/courses' },
    { name: '11th & 12th Science', path: '/courses' },
    { name: 'CET', path: '/courses' },
    { name: 'UPSC', path: '/courses' }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <GraduationCap className="h-8 w-8 text-blue-500 hover:translate-x-1 transition-all duration-200" />
              <span className="text-xl font-bold hover:translate-x-1 transition-all duration-200">Excellence Academy</span>
            </div>
            <p className="text-gray-300">
              Leading coaching institute providing quality education and excellent results
              for competitive exams and board examinations.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-6 w-6 text-blue-500 cursor-pointer hover:text-blue-400 hover:translate-x-1 transition-all duration-200" />
              <Twitter className="h-6 w-6 text-blue-500 cursor-pointer hover:text-blue-400 hover:translate-x-1 transition-all duration-200" hover:translate-x-1 transition-all duration-200 />
              <Instagram className="h-6 w-6 text-blue-500 cursor-pointer hover:text-blue-400 hover:translate-x-1 transition-all duration-200" />
              <Youtube className="h-6 w-6 text-blue-500 cursor-pointer hover:text-blue-400 hover:translate-x-1 transition-all duration-200" />
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-blue-500 hover:translate-x-1 duration-200 transition-all">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li className='hover:translate-x-1 transition-all duration-200' key={link.name}>
                  <Link
                    to={link.path}
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Courses */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-blue-500 hover:translate-x-1 transition-all duration-200">Courses</h3>
            <ul className="space-y-2">
              {courses.map((course) => (
                <li className='hover:translate-x-1 transition-all duration-200' key={course.name}>
                  <Link
                    to={course.path}
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    {course.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-blue-500 hover:translate-x-1 transition-all duration-200">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3 hover:translate-x-1 transition-all duration-200">
                <MapPin className="h-5 w-5 text-blue-500 mt-0.5" />
                <p className="text-gray-300 ">
                  123 Education Street, Knowledge City, Mumbai - 400001
                </p>
              </div>
              <div className="flex items-center space-x-3 hover:translate-x-1 transition-all duration-200">
                <Phone className="h-5 w-5 text-blue-500 hover:translate-x-1 transition-all duration-200" />
                <p className="text-gray-300">+91 98765 43210</p>
              </div>
              <div className="flex items-center space-x-3 hover:translate-x-1 transition-all duration-200">
                <Mail className="h-5 w-5 text-blue-500 " />
                <p className="text-gray-300 ">info@excellenceacademy.com</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} Excellence Academy. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;







