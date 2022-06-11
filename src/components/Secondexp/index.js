import React from "react";
import './styles.css'
import SecondexpImg from "../../images/woman-shoppingbag-card 1.png"

const Secondexp = () => {
    return (
        <div className='Secondexp'>
        <div className='container'>
        {/*Left Side*/}
         <div className='left'>
         <h1>Josiah’s Experience</h1>
         <div className='input-container'>
         <button className='mybutton'>VENDOR</button>
         </div>
         <br/>
         <p>I had the best experience shopping with vasiti.<br/> Usability of the website was great, very good<br/> customer service, an all round great <br/> experience. I would definately be coming back! <br/>I had the best experience shopping with vasiti.<br/> Usability of the website was great, very good <br/>customer service, an all round great<br/> experience. I would definately be coming back!</p>
         <br/>
         <br/>
         <p >SHARE YOUR OWN STORY</p>
         </div>
        {/*Right Side*/}
         <div className='right'>
         <div className="img-container">
          <img src={SecondexpImg} alt=''/>
         </div>
         </div>
        </div>
        </div>
    )
}
export default Secondexp