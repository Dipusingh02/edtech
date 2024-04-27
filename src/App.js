<<<<<<< HEAD
import React from 'react'
import FooterContainer from './components/footercontainer/FooterContainer'
=======
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import {Home,Aboutus, Course, Contactus} from './pages';
import MyCourses from './pages/mycourses/MyCourses';

>>>>>>> e565761dcf3ac168622aea66710b980c81d5feb5

import image from './assests/ima.jpeg';

const App = () => {
  return (
<<<<<<< HEAD
    <div >

   <FooterContainer/>

    </div>
  )
=======
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
>>>>>>> e565761dcf3ac168622aea66710b980c81d5feb5
}

export default App