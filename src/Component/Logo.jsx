import React from 'react'
import pic from './Pics/sailboat.jpg'
import Team from './Team'
import Work from './Work'
import Price from './Price'
import Contact from './Contact'

const Logo = () => {
  return (
    <>
      
    <div className=''>
   
        {/* ----------------------Back Pic------------- */}
        <div className='  '>
        <img src={pic} alt=""  className='h-screen w-screen'/>
        </div>
        {/* --------------------Front-------------------- */}
        <div>
        <p className='font-extrabold font-serif absolute bottom-0 left-0 text-white text-3xl ml-4'>Learn with A.H</p>
        </div>
        
    </div>
    <Team/>
    <Work/>
    <Price/>
    <Contact/>
       
    </>
  )
}

export default Logo