import React from 'react';
import { Link } from 'react-router-dom';
import Features from '../../components/coursescom/Features';
import web1 from '../../assests/webdevn1.png';
import './h_course.css';

const FeaturesData = [
  {
    image: web1,
    text1: "Full Stack",
    text2: 'Web Development:',
    text3: 'Start Building Your Future',
    techstack1: 'Web Development',
    techstack2: 'Designing',
    techstack3: 'MERN',
    instructorname: 'Anant',
    pricevalueamt: '2000'
  },
];

const H_course = () => (
  <div className="u">
    {FeaturesData.map((item, index) => (
      <Features 
        key={index}
        image={item.image}
        text1={item.text1}
        text2={item.text2}
        text3={item.text3}
        techstack1={item.techstack1}
        techstack2={item.techstack2}
        techstack3={item.techstack3}
        instructorname={item.instructorname}
        pricevalueamt={item.pricevalueamt}
      />
    ))}
    <Link to="/courses" className="circle-button-container">
      <div className="circle-button">
        <span className="arrow">&rarr;</span>
      </div>
      <div className="all-courses-text">All Courses</div>
    </Link>
  </div>
);

export default H_course;
