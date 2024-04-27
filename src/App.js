<<<<<<< HEAD

import React from 'react'
import FooterContainer from './components/footercontainer/FooterContainer'
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import {Home,Aboutus, Course, Contactus} from './pages';


=======
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import {Home,Aboutus, Course, Contactus,MyCourses} from './pages';
>>>>>>> f240521507a644aaea4806d5c4f4c83c2089b679
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<Aboutus/>} />
        <Route path="/courses" element={<Course/>} />
        <Route path="/mycourses" element={<MyCourses/>} />
        <Route path="/ContactUs" element={<Contactus/>} />
      </Routes>
    </Router>
  );
}

export default App