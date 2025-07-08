import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Courses from './pages/Courses';
import OnlineClasses from './pages/OnlineClasses';
import OfflineClasses from './pages/OfflineClasses';
import Results from './pages/Results';
import StudentAttendance from './pages/StudentAttendance';
import TeacherAttendance from './pages/TeacherAttendance';
import Facilities from './pages/Facilities';
import Gallery from './pages/Gallery';
import Details from './pages/Details';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/online-classes" element={<OnlineClasses />} />
          <Route path="/offline-classes" element={<OfflineClasses />} />
          <Route path="/results" element={<Results />} />
          <Route path="/details/:id" element={<Details />} />
          {/* <Route path="/student-attendance" element={<StudentAttendance />} /> */}
          {/* <Route path="/teacher-attendance" element={<TeacherAttendance />} /> */}
          <Route path="/facilities" element={<Facilities />} />
          <Route path="/gallery" element={<Gallery />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;