import React from 'react'
import './styles.css';
import {useSelector} from 'react-redux'
import Hurray from "../../images/🎉.png"
import Button from "../../components/Button"

  const Shared = () => {
    const stories = useSelector(store=> store.stories)

     const renderCard = () => stories?.map(story => (
      <div key={story.id}>
        <p>{story.word}</p>
      </div>
     ))
  
    return (
        <div className='shared'>
        <div className='container'>
        <div className='contain'>
        <div className='subcontain'>
        
        <img className='shareimage' src={Hurray} alt=''/>
        
        <h1>Thank you for <br/>
        sharing your story </h1>
        
       {stories.length ? renderCard() : <p>No Story</p>}
       
       <br/>
        <Button>
        Close
        </Button>
        </div>
        </div>
        </div>
        </div>
    )
    }

export default Shared;