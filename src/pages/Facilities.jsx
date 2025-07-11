import React from 'react';
import { BookOpen, FlaskRound as Flask, Monitor, Home, Coffee, Trophy, Wifi, Car } from 'lucide-react';
import Card from '../components/Card';
import { facilities } from '../data/dummyData';

const Facilities = () => {
  const iconMap = {
    BookOpen: BookOpen,
    Flask: Flask,
    Monitor: Monitor,
    Home: Home,
    Coffee: Coffee,
    Trophy: Trophy
  };

  const additionalFacilities = [
    {
      icon: <Wifi className="h-8 w-8 text-blue-600" />,
      title: 'High-Speed WiFi',
      description: 'Free high-speed internet access throughout the campus'
    },
    {
      icon: <Car className="h-8 w-8 text-blue-600" />,
      title: 'Transport Service',
      description: 'Bus service covering major areas of the city'
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Our Facilities</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">
              World-class infrastructure and amenities designed to enhance your learning experience
            </p>
          </div>
        </div>
      </section>

      {/* Main Facilities */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Campus Facilities
            </h2>
            <p className="text-xl text-gray-600">
              Everything you need for a comprehensive learning experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {facilities.map((facility, index) => {
              const IconComponent = iconMap[facility.icon];
              return (
                <Card
                  key={index}
                  image={facility.image}
                  title={facility.name}
                  description={facility.description}
                  className="hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="flex items-center justify-center mb-4">
                    {IconComponent && <IconComponent className="h-12 w-12 text-blue-600" />}
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Additional Facilities */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Additional Amenities
            </h2>
            <p className="text-xl text-gray-600">
              Extra conveniences for your comfort and convenience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {additionalFacilities.map((facility, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center mb-4">
                  {facility.icon}
                  <h3 className="text-xl font-semibold ml-3">{facility.title}</h3>
                </div>
                <p className="text-gray-600">{facility.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Facility Information */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                State-of-the-Art Infrastructure
              </h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-blue-100 p-2 rounded-full mr-4 mt-1">
                    <BookOpen className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Digital Library</h3>
                    <p className="text-gray-600">
                      Access to over 10,000 books, journals, and digital resources.
                      Quiet study areas with individual desks and group study rooms.
                    </p>
                  </div>
                </div>

                {/* <div className="flex items-start">
                  <div className="bg-blue-100 p-2 rounded-full mr-4 mt-1">
                    <Flask className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Advanced Laboratories</h3>
                    <p className="text-gray-600">
                      Fully equipped physics, chemistry, and biology labs with modern
                      equipment and safety measures for hands-on learning.
                    </p>
                  </div>
                </div> */}

                <div className="flex items-start">
                  <div className="bg-blue-100 p-2 rounded-full mr-4 mt-1">
                    <Monitor className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Smart Classrooms</h3>
                    <p className="text-gray-600">
                      Interactive whiteboards, projectors, and audio-visual equipment
                      in every classroom for enhanced learning experience.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Student Support Services
              </h2>
              <div className="space-y-6">
                {/* <div className="flex items-start">
                  <div className="bg-green-100 p-2 rounded-full mr-4 mt-1">
                    <Home className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Hostel Accommodation</h3>
                    <p className="text-gray-600">
                      Comfortable and secure hostel facilities for outstation students 
                      with 24/7 security and mess facilities.
                    </p>
                  </div>
                </div> */}

                <div className="flex items-start">
                  <div className="bg-green-100 p-2 rounded-full mr-4 mt-1">
                    <Coffee className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Cafeteria & Food Court</h3>
                    <p className="text-gray-600">
                      Hygienic food preparation with variety of healthy meals, snacks,
                      and beverages at affordable prices.
                    </p>
                  </div>
                </div>

                {/* <div className="flex items-start">
                  <div className="bg-green-100 p-2 rounded-full mr-4 mt-1">
                    <Trophy className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Sports Complex</h3>
                    <p className="text-gray-600">
                      Indoor and outdoor sports facilities including basketball, 
                      badminton, table tennis, and fitness center.
                    </p>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Facility Hours */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Facility Hours
            </h2>
            <p className="text-xl text-gray-600">
              Our facilities are available during the following hours
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold mb-3">Library</h3>
              <p className="text-gray-600">Monday - Saturday: 7:00 AM - 9:00 PM</p>
              <p className="text-gray-600">Sunday: 8:00 AM - 6:00 PM</p>
            </div>
            {/* 
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold mb-3">Laboratories</h3>
              <p className="text-gray-600">Monday - Saturday: 8:00 AM - 6:00 PM</p>
              <p className="text-gray-600">Sunday: Closed</p>
            </div> */}

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold mb-3">Cafeteria</h3>
              <p className="text-gray-600">Monday - Saturday: 7:00 AM - 8:00 PM</p>
              <p className="text-gray-600">Sunday: 8:00 AM - 6:00 PM</p>
            </div>

            {/* <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold mb-3">Sports Complex</h3>
              <p className="text-gray-600">Monday - Saturday: 6:00 AM - 9:00 PM</p>
              <p className="text-gray-600">Sunday: 7:00 AM - 8:00 PM</p>
            </div> */}

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold mb-3">Computer Lab</h3>
              <p className="text-gray-600">Monday - Saturday: 8:00 AM - 8:00 PM</p>
              <p className="text-gray-600">Sunday: 9:00 AM - 5:00 PM</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold mb-3">Administrative Office</h3>
              <p className="text-gray-600">Monday - Saturday: 9:00 AM - 6:00 PM</p>
              <p className="text-gray-600">Sunday: Closed</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Experience Our Facilities
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Visit our campus and see our world-class facilities firsthand
          </p>
          <div className="space-x-4">
            <button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors duration-200">
              Schedule a Tour
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

export default Facilities;