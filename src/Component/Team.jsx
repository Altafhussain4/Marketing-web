import React from 'react'
import pic from './Pics/avatar.jpg'
import Teampic from './Teampic'
// import pic from './Pics/avatar.jpg'
// import pic from './Pics/avatar.jpg'
// import pic from './Pics/avatar.jpg'
const Team = () => {
  return (
    <>
    
    <div className='mt-16'>
        <p className='text-3xl text-center'>OUR TEAM</p>
        <p  className='text-center mt-5'>Meet the team - our office rats:</p>
    </div>
    <div className='flex mt-24 justify-center gap-[10rem]'>
      <Teampic name="Johnny Walker" work="Web designer"/>
      <Teampic name="Rebecca Flex" work="Support"/>
      <Teampic name="Jan Ringo" work="Box man"/>
      <Teampic name="Kai Ringo" work="Fixer"/>
        {/* <div>
        <img src={pic} alt="" className='rounded-full h-[10rem]' />
        <p className='text-2xl text-center mt-2'>Johnny Walker</p>
        <p className='text-center mt-5'> Web Designer</p>
        </div> */}
       {/* <div>
       <img src={pic} alt="" className='rounded-full  h-[10rem]' />
        <p className='text-2xl text-center mt-2'>Rebecca Flex</p>
        <p className='text-center mt-5'> Support</p>
       </div> */}
       {/* <div>
       <img src={pic} alt="" className='rounded-full  h-[10rem]' />
        <p className='text-2xl text-center mt-2'>Jan Ringo</p>
        <p className='text-center mt-5'>Box Man</p>
       </div> */}
       {/* <div>
       <img src={pic} alt="" className='rounded-full  h-[10rem]' />
        <p className='text-2xl text-center mt-2'>Kai Ringo</p>
        <p className='text-center mt-5'>Fixer</p>
       </div> */}
    </div>
    
    
    </>
  )
}

export default Team