import React from 'react'
import './styles.css';
import Hurray from "../../images/🎉.png"
import StoriesList from '../../components/StoriesList';

  const Shared = () => {
    
    return (
        <div className='shared'>
        <div className='container'>
        <div className='contain'>
        <div className='subcontain'>
        
        <img className='shareimage' src={Hurray} alt=''/>
        
        <h1>Thank you for <br/>
        sharing your story </h1>
       <p></p>
        <br/>
        <button className="btn">
        Close
        </button>
        </div>
        </div>
        </div>
        </div>
    )
    }

export default Shared;