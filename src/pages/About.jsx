import React from 'react';
import { Award, Users, BookOpen, Target, CheckCircle, Star } from 'lucide-react';
import AnimatedCounter from '../components/AnimatedCounter';

const About = () => {
  const achievements = [
    { label: 'Students Trained', value: 25000, suffix: '+' },
    { label: 'Success Rate', value: 95, suffix: '%' },
    { label: 'Expert Faculty', value: 100, suffix: '+' },
    { label: 'Years of Excellence', value: 15, suffix: '+' }
  ];

  const values = [
    {
      icon: <Star className="h-8 w-8 text-blue-600" />,
      title: 'Excellence',
      description: 'We strive for excellence in everything we do, from teaching to student support.'
    },
    {
      icon: <Users className="h-8 w-8 text-blue-600" />,
      title: 'Student-Centric',
      description: 'Every decision we make is centered around our students\' success and well-being.'
    },
    {
      icon: <BookOpen className="h-8 w-8 text-blue-600" />,
      title: 'Innovation',
      description: 'We continuously innovate our teaching methods and learning resources.'
    },
    {
      icon: <Target className="h-8 w-8 text-blue-600" />,
      title: 'Integrity',
      description: 'We maintain the highest standards of integrity in all our interactions.'
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">About Excellence Academy</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">
              Empowering students to achieve their dreams through quality education and personalized guidance
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-gray-700 text-lg leading-relaxed">
                To provide world-class education and create an environment where students can develop their 
                full potential. We are committed to fostering academic excellence, critical thinking, and 
                character development in every student who walks through our doors.
              </p>
              <ul className="mt-6 space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-2 mt-0.5" />
                  <span className="text-gray-700">Quality education with modern teaching methods</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-2 mt-0.5" />
                  <span className="text-gray-700">Personalized attention to each student</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-2 mt-0.5" />
                  <span className="text-gray-700">Holistic development of personality</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Vision</h2>
              <p className="text-gray-700 text-lg leading-relaxed">
                To be the leading educational institution that transforms students into confident, 
                competent, and compassionate individuals ready to excel in their chosen fields and 
                contribute positively to society.
              </p>
              <ul className="mt-6 space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-2 mt-0.5" />
                  <span className="text-gray-700">Creating future leaders and innovators</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-2 mt-0.5" />
                  <span className="text-gray-700">Building a strong foundation for lifelong learning</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-2 mt-0.5" />
                  <span className="text-gray-700">Fostering ethical values and social responsibility</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Achievements
            </h2>
            <p className="text-xl text-gray-600">
              Numbers that speak for our commitment to excellence
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center bg-white p-6 rounded-lg shadow-md">
                <AnimatedCounter end={achievement.value} suffix={achievement.suffix} />
                <p className="text-gray-600 mt-2 font-medium">{achievement.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600">
              The principles that guide everything we do
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="flex justify-center mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Our Story
            </h2>
            <div className="text-lg text-gray-700 leading-relaxed space-y-6">
              <p>
                Excellence Academy was founded in 2009 with a simple yet powerful vision: to provide 
                quality education that transforms students' lives. What started as a small coaching 
                center with just 20 students has grown into one of the most respected educational 
                institutions in the region.
              </p>
              <p>
                Over the years, we have continuously evolved our teaching methods, embraced technology, 
                and expanded our course offerings to meet the changing needs of students. Our commitment 
                to excellence has remained unwavering, and we take pride in the thousands of students 
                who have achieved their dreams with our guidance.
              </p>
              <p>
                Today, Excellence Academy stands as a beacon of quality education, known for our 
                exceptional results, dedicated faculty, and student-centric approach. We continue 
                to innovate and adapt while staying true to our core values of excellence, integrity, 
                and student success.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;