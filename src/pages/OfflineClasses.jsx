import React from 'react';
import { MapPin, Clock, Users, BookOpen, CheckCircle, Building, Car, Coffee } from 'lucide-react';

const OfflineClasses = () => {
  const facilities = [
    {
      icon: <Building className="h-8 w-8 text-blue-600" />,
      title: 'Modern Infrastructure',
      description: 'State-of-the-art classrooms with modern amenities'
    },
    {
      icon: <BookOpen className="h-8 w-8 text-blue-600" />,
      title: 'Well-Equipped Library',
      description: 'Extensive collection of books and reference materials'
    },
    {
      icon: <Car className="h-8 w-8 text-blue-600" />,
      title: 'Parking Facility',
      description: 'Safe and secure parking for students and parents'
    },
    {
      icon: <Coffee className="h-8 w-8 text-blue-600" />,
      title: 'Cafeteria',
      description: 'Healthy snacks and refreshments available'
    }
  ];

  const benefits = [
    'Face-to-face interaction with teachers',
    'Immediate doubt clearing and feedback',
    'Peer learning and group discussions',
    'Structured learning environment',
    'Regular offline tests and assessments',
    'Physical study materials and notes',
    'Library and computer lab access',
    'Disciplined study atmosphere'
  ];

  const timings = [
    { batch: 'Morning Batch', time: '6:00 AM - 10:00 AM', courses: 'JEE, NEET, 11th & 12th' },
    { batch: 'Regular Batch', time: '10:00 AM - 2:00 PM', courses: 'UPSC, MPSC, Banking' },
    { batch: 'Evening Batch', time: '4:00 PM - 8:00 PM', courses: 'JEE, NEET, CET' },
    { batch: 'Weekend Batch', time: '9:00 AM - 6:00 PM', courses: 'Working Professional Courses' }
  ];

  const centerInfo = {
    address: '123 Education Street, Knowledge City, Mumbai - 400001',
    phone: '+91 98765 43210',
    email: 'info@excellenceacademy.com',
    timings: 'Monday to Saturday: 6:00 AM - 10:00 PM'
  };

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Offline Classes</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">
              Traditional classroom learning with modern facilities and expert guidance
            </p>
          </div>
        </div>
      </section>

      {/* Center Information */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Learning Center
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Our state-of-the-art learning center is strategically located in the heart of the city, 
                providing easy access to students from all areas. The facility is designed to create 
                an optimal learning environment with modern amenities and technology.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <MapPin className="h-6 w-6 text-blue-600 mr-3 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Address</h3>
                    <p className="text-gray-600">{centerInfo.address}</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Clock className="h-6 w-6 text-blue-600 mr-3 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Operating Hours</h3>
                    <p className="text-gray-600">{centerInfo.timings}</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Users className="h-6 w-6 text-blue-600 mr-3 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Batch Size</h3>
                    <p className="text-gray-600">Small batches of 15-20 students for personalized attention</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Quick Contact</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="bg-blue-100 p-3 rounded-full mr-4">
                    <MapPin className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Visit Us</h4>
                    <p className="text-gray-600">Get directions to our center</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="bg-blue-100 p-3 rounded-full mr-4">
                    <Users className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Call Us</h4>
                    <p className="text-gray-600">{centerInfo.phone}</p>
                  </div>
                </div>
                
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200">
                  Schedule a Visit
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Facilities */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Center Facilities
            </h2>
            <p className="text-xl text-gray-600">
              Modern amenities for an enhanced learning experience
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {facilities.map((facility, index) => (
              <div key={index} className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="flex justify-center mb-4">
                  {facility.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{facility.title}</h3>
                <p className="text-gray-600">{facility.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Batch Timings */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Batch Timings
            </h2>
            <p className="text-xl text-gray-600">
              Choose the batch that fits your schedule
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {timings.map((timing, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{timing.batch}</h3>
                <p className="text-blue-600 font-medium text-lg mb-2">{timing.time}</p>
                <p className="text-gray-600">{timing.courses}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Benefits of Offline Classes
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Our offline classes provide the traditional classroom experience with modern 
                teaching methods. Benefit from direct interaction with teachers and peers in 
                a structured learning environment.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">What to Expect</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Small Batch Size</h4>
                  <p className="text-gray-600">
                    Limited to 15-20 students per batch for personalized attention
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Interactive Learning</h4>
                  <p className="text-gray-600">
                    Group discussions, peer learning, and collaborative problem-solving
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Regular Assessment</h4>
                  <p className="text-gray-600">
                    Weekly tests, mock exams, and continuous evaluation
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Study Materials</h4>
                  <p className="text-gray-600">
                    Comprehensive books, notes, and practice papers
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Visit Our Center Today
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Experience our world-class facilities and meet our expert faculty
          </p>
          <div className="space-x-4">
            <button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors duration-200">
              Schedule a Visit
            </button>
            <button className="bg-transparent border-2 border-white hover:bg-white hover:text-blue-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200">
              Contact Us
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OfflineClasses;