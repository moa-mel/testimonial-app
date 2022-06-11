import React from 'react'
import './styles.css'
import {FaFacebook, FaGithub, FaLinkedin, FaTwitter} from 'react-icons/fa'

const Main = () => {
    return (
        <div className="main">
        <div className='container'>
        <div className="col">
        <h5>Company</h5>
             <a href='/'>About Us</a>
             <a href='/'>Tem of Use</a>
             <a href='/'>Privacy Policy</a>
          <a href='/'>Press & Media</a>
        </div>
        <div className='col'>
        <h5>Products</h5>
            <a href='/'>Marketplace</a>
            <a href='/'>Magazine</a>
            <a href='/'>Seller</a>
            <a href='/'>Wholesale</a>
            <a href='/'>Service</a>
    </div>
    <div className='col'>
    <h5>Careers</h5>
        <a href='/'>Become a Campus Rep</a>
        <a href='/'>Become a Vasiti Influencer</a>
        <a href='/'>Become a Campus Writer</a>
        <a href='/'>Become an Affiliate</a>
</div>
    <div className='col'>
        <h5>Get in touch</h5>
            <a href='/'>Contact us</a>
            <a href='/'>Patner with us</a>
            <a href='/'>Advertise with us</a>
            <a href='/'>HelpFAQs</a>
    </div>
    <div className='col'>
        <h5>Join our community</h5>
        <div className='row'>
            <a href='/'><FaFacebook className='icon'/></a>
            <a href='/'><FaTwitter className='icon'/></a>
            <a href='/'><FaLinkedin className='icon'/></a>
            <a href='/'><FaGithub className='icon'/></a>
            </div>
            <br/>
            <p> Email Newsletter </p>
            </div>
        </div>
        </div>
    )
}
export default Main;