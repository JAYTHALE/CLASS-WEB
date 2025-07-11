import React from 'react';
import { Trophy, Award, Star, TrendingUp } from 'lucide-react';
import Card from '../components/Card';
import AnimatedCounter from '../components/AnimatedCounter';
import { results } from '../data/dummyData';

const Results = () => {
  const stats = [
    { label: 'Students Selected', value: 5000, suffix: '+' },
    { label: 'Top 100 Ranks', value: 250, suffix: '+' },
    { label: 'Success Rate', value: 95, suffix: '%' },
    { label: 'Average Score', value: 85, suffix: '%' }
  ];

  const toppers = [
    {
      name: 'Arjun Sharma',
      exam: 'JEE Main 2024',
      rank: 'AIR 1',
      score: '300/300',
      image: 'https://images.pexels.com/photos/5427648/pexels-photo-5427648.jpeg?auto=compress&cs=tinysrgb&w=400',
      testimonial: 'The faculty guidance and study material helped me achieve my dream rank!'
    },
    {
      name: 'Priya Patel',
      exam: 'NEET 2024',
      rank: 'AIR 5',
      score: '715/720',
      image: 'https://images.pexels.com/photos/5427648/pexels-photo-5427648.jpeg?auto=compress&cs=tinysrgb&w=400',
      testimonial: 'Excellent coaching with personalized attention. Thank you Excellence Academy!'
    },
    {
      name: 'Rohit Gupta',
      exam: 'JEE Advanced 2024',
      rank: 'AIR 15',
      score: '285/300',
      image: 'https://images.pexels.com/photos/5427648/pexels-photo-5427648.jpeg?auto=compress&cs=tinysrgb&w=400',
      testimonial: 'The mock tests and doubt clearing sessions were extremely helpful.'
    }
  ];

  const examWiseResults = [
    {
      exam: 'JEE Main 2024',
      totalStudents: 500,
      qualified: 475,
      top100: 45,
      successRate: 95
    },
    {
      exam: 'NEET 2024',
      totalStudents: 400,
      qualified: 380,
      top100: 38,
      successRate: 95
    },
    {
      exam: '12th Board 2024',
      totalStudents: 600,
      qualified: 585,
      top100: 120,
      successRate: 97.5
    },
    {
      exam: 'CET 2024',
      totalStudents: 300,
      qualified: 285,
      top100: 25,
      successRate: 95
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Our Results</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">
              Celebrating the outstanding achievements of our students across various competitive exams
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Achievement Statistics
            </h2>
            <p className="text-xl text-gray-600">
              Numbers that showcase our commitment to excellence
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center bg-white p-6 rounded-lg shadow-md">
                <div className="mb-2">
                  <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                </div>
                <p className="text-gray-600 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Top Performers */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Top Performers 2024
            </h2>
            <p className="text-xl text-gray-600">
              Our star students who achieved exceptional ranks
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {toppers.map((topper, index) => (
              <Card
                key={index}
                image={topper.image}
                className="text-center hover:shadow-xl transition-shadow duration-300 relative overflow-hidden"
              >
                <div className="absolute top-4 right-4">
                  <div className="bg-yellow-400 text-yellow-900 px-3 py-1 rounded-full text-sm font-bold">
                    #{index + 1}
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{topper.name}</h3>
                  <p className="text-gray-600 mb-2">{topper.exam}</p>
                  <div className="flex justify-center items-center space-x-4 mb-4">
                    <div className="text-center">
                      <p className="text-2xl font-bold text-blue-600">{topper.rank}</p>
                      <p className="text-sm text-gray-600">Rank</p>
                    </div>
                    <div className="text-center">
                      <p className="text-2xl font-bold text-green-600">{topper.score}</p>
                      <p className="text-sm text-gray-600">Score</p>
                    </div>
                  </div>
                  <p className="text-gray-600 italic text-sm">"{topper.testimonial}"</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* All Results */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              All Our Success Stories
            </h2>
            <p className="text-xl text-gray-600">
              Comprehensive results across all programs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {results.map((result, index) => (
              <Card
                key={index}
                image={result.image}
                title={result.name}
                className="text-center hover:shadow-xl transition-shadow duration-300"
              >
                <div className="space-y-2">
                  <p className="text-gray-600">{result.exam}</p>
                  <p className="text-lg font-bold text-blue-600">{result.rank}</p>
                  <p className="text-gray-600">{result.score}</p>
                  <div className="flex justify-center text-yellow-500">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Exam-wise Results */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Exam-wise Performance
            </h2>
            <p className="text-xl text-gray-600">
              Detailed breakdown of our results by examination
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-blue-600 text-white">
                  <tr>
                    <th className="px-6 py-4 text-left">Examination</th>
                    <th className="px-6 py-4 text-left">Total Students</th>
                    <th className="px-6 py-4 text-left">Qualified</th>
                    <th className="px-6 py-4 text-left">Top 100 Ranks</th>
                    <th className="px-6 py-4 text-left">Success Rate</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {examWiseResults.map((result, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium text-gray-900">{result.exam}</td>
                      <td className="px-6 py-4 text-gray-600">{result.totalStudents}</td>
                      <td className="px-6 py-4 text-green-600 font-medium">{result.qualified}</td>
                      <td className="px-6 py-4 text-blue-600 font-medium">{result.top100}</td>
                      <td className="px-6 py-4 text-orange-600 font-medium">{result.successRate}%</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Be Our Next Success Story
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join thousands of successful students and achieve your academic goals with our proven methods
          </p>
          <div className="space-x-4">
            <button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors duration-200">
              Enroll Now
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

export default Results;