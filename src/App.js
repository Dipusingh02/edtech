
import React from 'react'
import FooterContainer from './components/footercontainer/FooterContainer'
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import {Home,Aboutus, Course, Contactus} from './pages';


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<Aboutus/>} />
        <Route path="/courses" element={<Course/>} />
        <Route path="/ContactUs" element={<Contactus/>} />
      </Routes>
    </Router>
  );
}

export default App