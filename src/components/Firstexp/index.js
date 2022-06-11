import React from 'react';
import './styles.css';
import FirstexpImg from "../../images/black-beautiful-ladies-smiling 1.png"


const Firstexp = () => {
    return (
        <div className='Firstexp'>
        <div className='container'>
        {/*Left Side*/}
         <div className='left'>
         <div className="img-container">
         <img className='firstexpImage' src={FirstexpImg} alt=''/>
        </div>
         
         </div>
        {/*Right Side*/}
         <div className='right'>
         <h1>Tolu & Joy's Experience</h1>
         <div className='input-container'>
         <button >customer</button>
         </div>
         <br/>
         <p>I had the best experience shopping with vasiti.<br/> Usability of the website was great, very good<br/> customer service, an all round great <br/> experience. I would definately be coming back! <br/>I had the best experience shopping with vasiti.<br/> Usability of the website was great, very good <br/>customer service, an all round great<br/> experience. I would definately be coming back!</p>
         <br/>
         <br/>
         <p>SHARE YOUR OWN STORY</p>
         </div>
        </div>
        </div>
    )
}
export default Firstexp;