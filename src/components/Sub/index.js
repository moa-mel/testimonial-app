import React from 'react'
import './styles.css'
import subImg from "../../images/subscribe-banner 1.png"

const Sub = () => {
    return (
        <div className='sub'>
        <div className='container'>
        {/*Left Side*/}
         <div className='left'>
         <div className="img-container">
          <img src={subImg} alt=''/>
         </div>
         
         </div>
        {/*Right Side*/}
         <div className='right'>
         <h1>Be a  member <br/> of our community 🎉</h1>
         <p>We’d make sure you’re always first to know what’s <br/> happening on Vasiti—thus, the world.</p>
        <div className='input-container'>
        <input type="email" placeholder="enter your email address" />
        <button className="ourbutton">SUBSCRIBE</button>
        </div>
         </div>
        </div>
        </div>
    )
}
export default Sub;