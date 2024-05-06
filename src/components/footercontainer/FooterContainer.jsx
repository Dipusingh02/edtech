import React from 'react';
import './footercontainer.css';
// import img1 from '../../assests/ima.jpeg'

import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn, FaYoutube, FaMailBulk, FaPhone } from 'react-icons/fa';
import Course from './../../pages/courses/Course';
const FooterContainer = () => {
  return (
    // <div  className='container'>
      
    //   <section className="firstsection">
    //     <div className="leftsection">
    //         Get Access To Our <div ><spam className="name">Free Batches</spam> <spam>Now.</spam> </div> 
          
    //         <p className='para'>    Get instant access to high-quality material </p>

    //     </div>
       
    //     <div className="rightsection">
    //         <img src={img1} alt="image"/>
    //     </div>
    //  </section>

    // </div>
    <>

<footer>
      <div className="footer-container">
        <h1> Your Social Media </h1>
        <div className="logo-container">
          <a href="https://www.facebook.com"><FaFacebookF className="social-icon" /> </a>
          <a href="https://www.instagram.com"><FaInstagram className="social-icon" /> </a>
          <a href="https://www.twitter.com"><FaTwitter className="social-icon" /> </a>
          <a href="https://www.linkedin.com"><FaLinkedinIn className="social-icon" /> </a>
          <a href="https://www.youtube.com"><FaYoutube className="social-icon" /> </a>
          <a href="https://www.mail.com"><FaMailBulk className="social-icon" /> </a>
        </div>
        <div className="footer-links">
          <a href="https://www.facebook.com">Privacy Policy</a>
          <a href="https://www.facebook.com">Term and condition</a>
          <a href="https://www.facebook.com">Pricing and Refund</a>
          <a href="https://www.facebook.com">Shipping and delivery </a>
        </div>
        <div className='free'>
        <a href="/terms-of-service">About Us</a>
        <a href="/terms-of-service">Hire from Us</a>

        </div>
        <div className='thired'>
          <p> free course </p>
          <p> free course </p>
        </div>
        <p>&copy; {new Date().getFullYear()} Your Company Name. All Rights Reserved.</p>
      </div>
    </footer>
  
    
    {/* <script src="https://unpkg.com/ionicons@5.4.0/dist/ionicons.js"></script> */}

    </>
  );
};

export default FooterContainer
