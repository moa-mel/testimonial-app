import React from 'react'
import Header from "../../components/Header"
import Navbar from "../../components/Navbar"
import Banner from "../../components/Banner"
import Firstexp from "../../components/Firstexp"
import Story from "../../components/Story"
import Secondexp from "../../components/Secondexp"
import Testimonies from "../../components/Testimonies"
import Footer from "../../components/Footer"

const Home = () => {
  return (
    <div>
      {/*Header*/}
      <Header/>
       {/*Navbar*/}
       <Navbar/>
        {/*Banner*/}
        <Banner/>
         {/*Firstexp*/}
         <Firstexp/>
          {/*Story*/}
          <Story/>
           {/*Secondexp*/}
           <Secondexp/>
            {/*Testimonies*/}
            <Testimonies/>
             {/*Footer*/}
             <Footer/>
    </div>
  )
}

export default Home
