import React from 'react'
import './styles.css';
import { useSelector } from 'react-redux'
import {getAllStories } from '../../redux/stories/storiesSlice'
import Shared from '../../pages/Shared';

const StoriesList = () => {
    const stories = useSelector(getAllStories);
    let renderStories = "";

    renderStories =
   stories.Response === "True" ? (
     stories?.map((story, index)=>(
       <Shared key={index} data={story}/>
     ))
   ) : (
     <div className="stories-error">
     <h3>{stories.Error}</h3>
     </div>
   )

  return (
    <div>
    <div>{renderStories}</div>
    </div>
  )
}

export default StoriesList