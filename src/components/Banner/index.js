import React from 'react'
import "./styles.css"
import BannerImg from "../../images/Testimonial image 1.png"

const Banner = () => {
  return (
    <div className='hero'>
        <div className='container'>
        {/*Left Side*/}
         <div className='left'>
         <h1>Amazing <br/> Experiences from Our <br/> Wonderful Customers</h1>
         <p>Here is what customers and vendors are saying about <br/> us, you can share your stories with us too</p>
         </div>
        {/*Right Side*/}
         <div className='right'>
         <div className="img-container">
          <img className='bannerImage' src={BannerImg} alt=''/>
         </div>
         </div>
        </div>
        </div>
  )
}

export default Banner
