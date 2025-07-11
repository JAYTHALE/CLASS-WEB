import React from 'react';
import { Link } from 'react-router-dom';
import { Award, Users, BookOpen, Target, CheckCircle } from 'lucide-react';
import Carousel from '../components/Carousel';
import Card from '../components/Card';
import AnimatedCounter from '../components/AnimatedCounter';
import { testimonials, results } from '../data/dummyData';
import { motion } from "framer-motion";
import { RiVidiconLine, RiWifiOffLine } from 'react-icons/ri';
import { GrGallery } from 'react-icons/gr';

const Home = () => {
  const stats = [
    { label: 'Students Enrolled', value: 5000, suffix: '+' },
    { label: 'Success Rate', value: 95, suffix: '%' },
    { label: 'Expert Faculty', value: 50, suffix: '+' },
    { label: 'Years of Excellence', value: 15, suffix: '+' }
  ];

  const features = [
    {
      icon: <Award className="h-12 w-12 text-blue-600" />,
      title: 'Proven Results',
      description: 'Consistent track record of producing toppers in competitive exams.'
    },
    {
      icon: <Users className="h-12 w-12 text-blue-600" />,
      title: 'Expert Faculty',
      description: 'Highly qualified and experienced teachers with deep subject knowledge.'
    },
    {
      icon: <BookOpen className="h-12 w-12 text-blue-600" />,
      title: 'Comprehensive Study Material',
      description: 'Well-researched and updated study materials for all subjects.'
    },
    {
      icon: <Target className="h-12 w-12 text-blue-600" />,
      title: 'Focused Approach',
      description: 'Targeted preparation strategies for specific competitive exams.'
    }
  ];

  const renderTestimonial = (testimonial) => (
    <div className="bg-white p-8 rounded-lg shadow-lg mx-4">
      <div className="flex items-center mb-4">
        <img
          src={testimonial.image}
          alt={testimonial.name}
          className="w-16 h-16 rounded-full object-cover mr-4"
        />
        <div>
          <h3 className="font-semibold text-lg">{testimonial.name}</h3>
          <p className="text-gray-600">{testimonial.course}</p>
        </div>
      </div>
      <p className="text-gray-700 mb-4">"{testimonial.message}"</p>
      <div className="flex text-yellow-500">
        {[...Array(testimonial.rating)].map((_, i) => (
          <span key={i}>★</span>
        ))}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center">
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="relative z-10 text-center text-white max-w-4xl px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in ">
            Excellence Academy
          </h1>
          <p className="text-xl md:text-2xl mb-8 animate-fade-in-delay">
            Shaping Future Leaders Through Quality Education
          </p>
          <p className="text-lg mb-8 max-w-2xl mx-auto animate-fade-in-delay-2">
            Join thousands of successful students who have achieved their dreams with our expert guidance
          </p>
          <div className="space-x-4 animate-fade-in-delay-3">
            <Link
              to="/courses"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200 inline-block"
            >
              Explore Courses
            </Link>
            <Link
              to="/contact"
              className="bg-transparent border-2 border-white hover:bg-white hover:text-blue-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200 inline-block"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                <p className="text-gray-600 mt-2">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 animate-fade-in-delay-2 ">
              Why Choose Excellence Academy?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto hover:translate-x-1 transition-all duration-200 animate-fade-in-delay-3">
              We are committed to providing the best educational experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                whileHover={{
                  rotateX: 5,
                  rotateY: -5,
                  scale: 1.05,
                  transition: { type: "spring", stiffness: 200, damping: 10 },
                }}
                whileTap={{ scale: 0.97 }}
                className="group relative text-center p-8 rounded-2xl bg-gradient-to-br from-white via-blue-200 to-white shadow-md border border-gray-200 cursor-pointer"
                style={{ transformStyle: "preserve-3d" }}
              >
                <div className="flex justify-center items-center mx-auto w-16 h-16 rounded-full bg-blue-100 text-blue-600 group-hover:text-white transition-colors duration-300 mb-4 shadow-inner">
                  {feature.icon}
                </div>

                <h3 className="text-xl font-bold text-gray-800 group-hover:text-blue-700 transition-colors duration-300">
                  {feature.title}
                </h3>

                <p className="mt-2 text-gray-600 group-hover:text-gray-800 transition-all duration-300 text-sm leading-relaxed">
                  {feature.description}
                </p>

                <div className="absolute inset-0 rounded-2xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500 border-2 border-blue-300 blur-sm"></div>
              </motion.div>
            ))}
          </div>


        </div>
      </section>

      {/* Results Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Success Stories
            </h2>
            <p className="text-xl text-gray-600">
              Celebrating the achievements of our students
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {results.map((result, index) => (
              <Card
                key={index}
                image={result.image}
                className="text-center"
              >
                <h3 className="text-xl font-semibold mb-2">{result.name}</h3>
                <p className="text-gray-600 mb-2">{result.exam}</p>
                <p className="text-blue-600 font-bold text-lg">{result.rank}</p>
                <p className="text-gray-600">{result.score}</p>
              </Card>
            ))}
          </div>

          <div className="text-center mt-8">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <Link
                to="/results"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200 inline-block shadow-md"
              >
                View All Results
              </Link>
            </motion.div>
            <div className='lg:hidden grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pt-10"'>
              <div className="">
                <Link to='/offline-classes'>
                  <motion.div

                    whileHover={{
                      rotateX: 5,
                      rotateY: -5,
                      scale: 1.05,
                      transition: { type: "spring", stiffness: 200, damping: 10 },
                    }}
                    whileTap={{ scale: 0.97 }}
                    className="group relative text-center p-8 rounded-2xl bg-gradient-to-br from-white via-blue-200 to-white shadow-md border border-gray-200 cursor-pointer"
                    style={{ transformStyle: "preserve-3d" }}
                  >
                    <div className="flex justify-center items-center mx-auto w-16 h-16 rounded-full bg-blue-100 text-blue-600 group-hover:text-white transition-colors duration-300 mb-4 shadow-inner">
                      <RiWifiOffLine className="h-12 w-12 text-blue-600" />

                    </div>

                    <h3 className="text-xl font-bold text-gray-800 group-hover:text-blue-700 transition-colors duration-300">
                      Offline-classes
                    </h3>
                    <div className="absolute inset-0 rounded-2xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500 border-2 border-blue-300 blur-sm"></div>
                  </motion.div>
                </Link>
              </div>
              <div className="">
                <Link to='/offline-classes'>
                  <motion.div
                    whileHover={{
                      rotateX: 5,
                      rotateY: -5,
                      scale: 1.05,
                      transition: { type: "spring", stiffness: 200, damping: 10 },
                    }}
                    whileTap={{ scale: 0.97 }}
                    className="group relative text-center p-8 rounded-2xl bg-gradient-to-br from-white via-blue-200 to-white shadow-md border border-gray-200 cursor-pointer"
                    style={{ transformStyle: "preserve-3d" }}
                  >
                    <div className="flex justify-center items-center mx-auto w-16 h-16 rounded-full bg-blue-100 text-blue-600 group-hover:text-white transition-colors duration-300 mb-4 shadow-inner">
                      <RiVidiconLine className="h-12 w-12 text-blue-600" />

                    </div>

                    <h3 className="text-xl font-bold text-gray-800 group-hover:text-blue-700 transition-colors duration-300">
                      Online-classes
                    </h3>
                    <div className="absolute inset-0 rounded-2xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500 border-2 border-blue-300 blur-sm"></div>
                  </motion.div>
                </Link>
              </div>
              <div className="">
                <Link to='/gallery'>
                  <motion.div

                    whileHover={{
                      rotateX: 5,
                      rotateY: -5,
                      scale: 1.05,
                      transition: { type: "spring", stiffness: 200, damping: 10 },
                    }}
                    whileTap={{ scale: 0.97 }}
                    className="group relative text-center p-8 rounded-2xl bg-gradient-to-br from-white via-blue-200 to-white shadow-md border border-gray-200 cursor-pointer"
                    style={{ transformStyle: "preserve-3d" }}
                  >
                    <div className="flex justify-center items-center mx-auto w-16 h-16 rounded-full bg-blue-100 text-blue-600 group-hover:text-white transition-colors duration-300 mb-4 shadow-inner">
                      <GrGallery className="h-12 w-12 text-blue-600" />

                    </div>

                    <h3 className="text-xl font-bold text-gray-800 group-hover:text-blue-700 transition-colors duration-300">
                      Gallery
                    </h3>
                    <div className="absolute inset-0 rounded-2xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500 border-2 border-blue-300 blur-sm"></div>
                  </motion.div>
                </Link>
              </div>
            </div>


          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Our Students Say
            </h2>
            <p className="text-xl text-gray-600">
              Hear from our successful students
            </p>
          </div>

          <Carousel
            items={testimonials}
            renderItem={renderTestimonial}
            autoPlay={true}
            interval={5000}
          />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join thousands of successful students and achieve your academic goals with us
          </p>
          <div className="space-x-4">
            {/* Get Started Today Button */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="inline-block"
            >
              <Link
                to="/contact"
                className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors duration-200 inline-block"
              >
                Get Started Today
              </Link>
            </motion.div>

            {/* View Courses Button */}
            <motion.div
              whileHover={{
                scale: 1.05,
                boxShadow: "0px 0px 10px rgba(255,255,255,0.5)",
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="inline-block"
            >
              <Link
                to="/courses"
                className="bg-transparent border-2 border-white hover:bg-white hover:text-blue-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200 inline-block"
              >
                View Courses
              </Link>
            </motion.div>
          </div>

        </div>
      </section>
    </div>
  );
};

export default Home;