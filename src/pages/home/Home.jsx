import React from 'react';
import './home.css';
import Navbar from '../../components/navbar/Navbar';
import Header from '../home/Header'
import himg1 from '../../assests/Becomıng a Web developer 12.png'
import himg2 from '../../assests/Dark Navy Blue Game Youtube Thumbnail 4.png'


const Home = () => {
  return (
    <div>
      <Navbar />
      <Header />
  

      <div className='Home-ec'>
      <h1>Enroll in Our Courses</h1>
      </div>
      <div className='hcourse-details'>
      <img src={himg1} />
      <img src={himg2} />
      <img src={himg1} />
      <img src={himg2} />
      <img src={himg1} />
      <img src={himg2} />
      </div>
    </div>
  )
}

export default Home
