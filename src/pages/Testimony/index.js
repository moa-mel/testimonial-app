import React, {useState} from 'react'
import './styles.css'
import {Link} from 'react-router-dom'

const Testimony = () =>{
    const [selectedFile, setSelectedFile] = useState("")
    const [stories, setStories] = useState("")
    const submitHandler = (e) => {
        e.preventDefault();
        setStories("");
      };

    return (
        <div className='testimony'>
        <div className='container'>
        <div className='card'>
        <h2>Share your amazing story!</h2>
        <form className='contained' onSubmit={submitHandler}>
        <label>
        Upload your Picture
        </label>
        <input className={`${selectedFile ? "text-titleText" : "text-transparent"} mt-2  w-4/5 file:hidden   border border-placeholderText py-2 pl-2 cursor-pointer focus:border-transparent  focus:ring-main 
        block
        
        font-small
        bg-clip-padding
        transition
        ease-in-out
        m-0
        focus:border-main focus:outline-none`}
        placeholder="Choose Image"
        type="file"
        id="resume"
        value={selectedFile}
        onChange={(e) => {setSelectedFile(e.target.value)}}
        />
        <br/>
        <div className='inline-grid grid-cols-4 gap-3'>
        <label>First Name</label>
        <input type='text' className='font-small
        bg-white cursor-pointer '/>
        <label>Last Name</label>
        <input type='text'/>
        </div>
        <br/>
        <div className='contain'>
        <label>Share your story</label>
        <br/>
        <textarea rows="4" cols="40"
        value={stories}
        onChange={(e) => {setStories(e.target.value)}}
        ></textarea>
        </div>
        <br/>
        <label>What did you interact with Vasiti as?</label>
        <input type="radio" name="gender" id="customer" value="customer" />
        <label for="customer">Customer</label>
        <input type="radio" name="gender" id="customer" value="customer" />
        <label for="vendor">Vendor</label>
        <br/>
        <br/>
        <div>
        <label>City or Higher Institution (for Students)</label>
       <input type='text' className=' w-4/5 cursor-pointer px-8 ' />
       </div>
       <br/>
       <Link to='/shared'>
        <button className="btns">
        Share your story!
        </button>
        </Link>
        </form>
        </div>
        </div>
        </div>
    )
}
export default Testimony;