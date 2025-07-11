import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Courses from './pages/Courses';
import OnlineClasses from './pages/OnlineClasses';
import OfflineClasses from './pages/OfflineClasses';
import Results from './pages/Results';
import Facilities from './pages/Facilities';
import Gallery from './pages/Gallery';
import Details from './pages/Details';

import { FaCompass, FaHistory, FaHome, FaThumbsUp } from 'react-icons/fa';
import { IoCallSharp, IoInformationCircle } from 'react-icons/io5';
import { FaBookBookmark } from 'react-icons/fa6';
import { MdDisplaySettings } from 'react-icons/md';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <Navbar />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/online-classes" element={<OnlineClasses />} />
            <Route path="/offline-classes" element={<OfflineClasses />} />
            <Route path="/results" element={<Results />} />
            <Route path="/details/:id" element={<Details />} />
            <Route path="/facilities" element={<Facilities />} />
            <Route path="/gallery" element={<Gallery />} />
          </Routes>
        </div>
        <Footer />

        <div className="fixed bottom-0 p-2 px-5 left-0 right-0 bg-white border-t border-gray-200 md:hidden z-50">
          <div className="flex justify-between">
            <Link to="/" className="flex flex-col items-center py-2">
              <FaHome className="text-gray-600" />
              <span className="text-xs text-gray-600">Home</span>
            </Link>
            <Link to="/courses" className="flex flex-col items-center py-2">
              <FaBookBookmark className="text-gray-600" />
              <span className="text-xs text-gray-600">Courses</span>
            </Link>
            {/* <Link to="/results" className="flex flex-col items-center py-2">
              <FaHistory className="text-gray-600" />
              <span className="text-xs text-gray-600">Results</span>
            </Link> */}
            <Link to="/facilities" className="flex flex-col items-center py-2">
              <MdDisplaySettings className="text-gray-600" />
              <span className="text-xs text-gray-600">Facilities</span>
            </Link>
            <Link to="/about" className="flex flex-col items-center py-2">
              <IoInformationCircle className="text-gray-600" />
              <span className="text-xs text-gray-600">About</span>
            </Link>
            <Link to="/contact" className="flex flex-col items-center py-2">
              <IoCallSharp className="text-gray-600" />
              <span className="text-xs text-gray-600">Contact</span>
            </Link>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
