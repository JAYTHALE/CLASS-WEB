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
import BottomNav from './components/bottomNav';

function App() {
  return (
    <>
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
        </div>
        <BottomNav />
      </Router>
    </>
  );
}

export default App;
