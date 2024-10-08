
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import {Home,Aboutus, Course, Contactus,MyCourses} from './pages';
import FooterContainer from './components/footercontainer/FooterContainer';


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
      <FooterContainer/>
    </Router>
    
  );
}

export default App