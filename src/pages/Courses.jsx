import React, { useState } from 'react';
import { BookOpen, Clock, Users, Star, ArrowRight } from 'lucide-react';
import Card from '../components/Card';
import { courses } from '../data/dummyData';
import { useNavigate } from 'react-router-dom';

const Courses = () => {
  const navigate = useNavigate()
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Courses' },
    // { id: 'school', name: 'School Courses' },
    { id: 'competitive', name: 'Competitive Exams' },
    { id: 'government', name: 'Government Exams' }
  ];

  const getCourseCategory = (courseName) => {
    const competitiveExams = ['JEE Main & Advanced', 'NEET', 'CET'];
    const governmentExams = ['UPSC', 'MPSC'];
    const schoolCourses = ['11th Science', '12th Science'];


    if (competitiveExams.includes(courseName)) return 'competitive';
    if (governmentExams.includes(courseName)) return 'government';
    if (schoolCourses.includes(courseName)) return 'school';
    return 'all';
  };

  const filteredCourses = selectedCategory === 'all'
    ? courses
    : courses.filter(course => getCourseCategory(course.name) === selectedCategory);

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Our Courses</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">
              Comprehensive programs designed to help you achieve your academic goals
            </p>
          </div>
        </div>
      </section>

      {/* Course Categories */}
      <section className="py-8 bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-2 rounded-full font-medium transition-colors duration-200 ${selectedCategory === category.id
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCourses.map((course) => (
              <Card
                key={course.id}
                image={course.image}
                title={course.name}
                description={course.description}
                className="hover:shadow-xl transition-shadow duration-300"
              >
                <div className="space-y-4">
                  <div className="flex items-center text-gray-600">
                    <Clock className="h-5 w-5 mr-2" />
                    <span>{course.duration}</span>
                  </div>


                  <div className="flex flex-wrap gap-2">
                    {course.subjects.map((subject, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full"
                      >
                        {subject}
                      </span>
                    ))}
                  </div>


                  <div className="flex items-center justify-between">
                    <div className="text-2xl font-bold text-blue-600">
                      {course.fees}
                    </div>
                    <div className="flex items-center text-yellow-500">
                      <Star className="h-4 w-4 fill-current" />
                      <Star className="h-4 w-4 fill-current" />
                      <Star className="h-4 w-4 fill-current" />
                      <Star className="h-4 w-4 fill-current" />
                      <Star className="h-4 w-4 fill-current" />
                      <span className="ml-1 text-gray-600 text-sm">4.8</span>
                    </div>
                  </div>


                  <div className="flex space-x-3">
                    <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg font-medium transition-colors duration-200">
                      Enroll Now
                    </button>
                    <button onClick={e => navigate(`/details/${course.id}`)} className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 py-2 px-4 rounded-lg font-medium transition-colors duration-200">
                      Learn More
                    </button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our Courses?
            </h2>
            <p className="text-xl text-gray-600">
              Features that make our programs stand out
            </p>
          </div>


          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-white rounded-lg shadow-lg">
              <BookOpen className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Comprehensive Curriculum</h3>
              <p className="text-gray-600">
                Well-structured syllabus covering all important topics
              </p>
            </div>

            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <Users className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Expert Faculty</h3>
              <p className="text-gray-600">
                Experienced teachers with proven track records
              </p>
            </div>

            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <Star className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Regular Assessments</h3>
              <p className="text-gray-600">
                Continuous evaluation to track progress
              </p>
            </div>

            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <Clock className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Flexible Timings</h3>
              <p className="text-gray-600">
                Multiple batches to suit your schedule
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join thousands of successful students and take the first step towards your goals
          </p>
          <div className="space-x-4">
            <button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors duration-200 inline-flex items-center">
              Contact Us Today
              <ArrowRight className="h-5 w-5 ml-2" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Courses;