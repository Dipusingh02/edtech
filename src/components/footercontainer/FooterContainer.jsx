import React from 'react';
import './footercontainer.css';
import img1 from '../../assests/ima.jpeg'
const FooterContainer = () => {
  return (
    <div  className='container'>
      
      <section className="firstsection">
        <div className="leftsection">
            Get Access To Our <div ><spam className="name">Free Batches</spam> <spam>Now.</spam> </div> 
          
            <p className='para'>    Get instant access to high-quality material </p>

        </div>
       
        <div className="rightsection">
            <img src={img1} alt="image"/>
        </div>
    </section>

    </div>
  )
}

export default FooterContainer
