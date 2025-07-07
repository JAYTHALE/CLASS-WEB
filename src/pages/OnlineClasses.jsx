import React from 'react';
import { Monitor, Clock, Users, BookOpen, CheckCircle, Video, Headphones, Download } from 'lucide-react';

const OnlineClasses = () => {
  const features = [
    {
      icon: <Video className="h-8 w-8 text-blue-600" />,
      title: 'HD Video Quality',
      description: 'Crystal clear video streaming for optimal learning experience'
    },
    {
      icon: <Headphones className="h-8 w-8 text-blue-600" />,
      title: 'Interactive Sessions',
      description: 'Two-way communication with teachers and doubt clearing'
    },
    {
      icon: <Download className="h-8 w-8 text-blue-600" />,
      title: 'Recorded Lectures',
      description: 'Access to recorded sessions for revision and practice'
    },
    {
      icon: <Monitor className="h-8 w-8 text-blue-600" />,
      title: 'Digital Whiteboard',
      description: 'Interactive whiteboard for better understanding'
    }
  ];

  const benefits = [
    'Learn from anywhere, anytime',
    'Flexible scheduling options',
    'One-on-one doubt solving sessions',
    'Regular online tests and assessments',
    'Digital study materials and notes',
    'Parent-teacher meeting facilities',
    'Recording of all live sessions',
    'Mobile and tablet compatibility'
  ];

  const timings = [
    { course: 'JEE Main & Advanced', time: '6:00 AM - 8:00 AM', duration: '2 hours' },
    { course: 'NEET', time: '8:00 AM - 10:00 AM', duration: '2 hours' },
    { course: '11th Science', time: '4:00 PM - 6:00 PM', duration: '2 hours' },
    { course: '12th Science', time: '6:00 PM - 8:00 PM', duration: '2 hours' },
    { course: 'UPSC', time: '9:00 AM - 12:00 PM', duration: '3 hours' },
    { course: 'MPSC', time: '2:00 PM - 4:00 PM', duration: '2 hours' }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Online Classes</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">
              Quality education from the comfort of your home with our interactive online learning platform
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Online Learning Features
            </h2>
            <p className="text-xl text-gray-600">
              Advanced technology for an enhanced learning experience
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="flex justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How Online Classes Work
            </h2>
            <p className="text-xl text-gray-600">
              Simple steps to start your online learning journey
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <div className="bg-blue-100 text-blue-600 rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl font-semibold mb-3">Register & Enroll</h3>
              <p className="text-gray-600">
                Choose your course and complete the registration process online
              </p>
            </div>
            
            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <div className="bg-blue-100 text-blue-600 rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-semibold mb-3">Receive Login Details</h3>
              <p className="text-gray-600">
                Get your login credentials and access to our learning platform
              </p>
            </div>
            
            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <div className="bg-blue-100 text-blue-600 rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-semibold mb-3">Start Learning</h3>
              <p className="text-gray-600">
                Join live classes, access materials, and interact with teachers
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Class Timings */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Class Timings
            </h2>
            <p className="text-xl text-gray-600">
              Flexible schedules to fit your routine
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-blue-600 text-white">
                  <tr>
                    <th className="px-6 py-4 text-left">Course</th>
                    <th className="px-6 py-4 text-left">Time</th>
                    <th className="px-6 py-4 text-left">Duration</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {timings.map((timing, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium text-gray-900">{timing.course}</td>
                      <td className="px-6 py-4 text-gray-600">{timing.time}</td>
                      <td className="px-6 py-4 text-gray-600">{timing.duration}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Benefits of Online Classes
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Our online classes offer the same quality education as our offline classes, 
                with added flexibility and convenience. Experience personalized learning 
                with our expert faculty from anywhere in the world.
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
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Technical Requirements</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <Monitor className="h-6 w-6 text-blue-600 mr-3 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Device</h4>
                    <p className="text-gray-600">Computer, laptop, tablet, or smartphone</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Video className="h-6 w-6 text-blue-600 mr-3 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Internet Connection</h4>
                    <p className="text-gray-600">Stable broadband connection (minimum 2 Mbps)</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Headphones className="h-6 w-6 text-blue-600 mr-3 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Audio/Video</h4>
                    <p className="text-gray-600">Working microphone and camera (recommended)</p>
                  </div>
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
            Ready to Start Online Learning?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join our online classes and experience quality education from the comfort of your home
          </p>
          <div className="space-x-4">
            <button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors duration-200">
              Enroll Now
            </button>
            <button className="bg-transparent border-2 border-white hover:bg-white hover:text-blue-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200">
              Free Demo Class
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OnlineClasses;