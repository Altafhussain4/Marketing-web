import React from 'react'
import pic1 from './Pics/snow.jpg'
import pic2 from './Pics/lights.jpg'
import pic3 from './Pics/mountains.jpg'
const Work = () => {
  return (
    <>
    
    <div className='bg-gray-600 mt-16 p-3'>
    <div className='flex gap-4 pt-10 pb-10'>

       <div className='w-[22rem] text-white'>
       <p className='text-2xl'>Our Work</p>
       <p className='mt-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
       </div>

       <div className='bg-white w-[20rem]'>
        <img src={pic1} alt="" />
        <div className='m-4'>
        <p className='text-2xl'>Customer 1</p>
        <p className='mt-2'>Trade</p>
        <p className='mt-2'>Blablabla</p>
        <p className='mt-2'>Blablabla</p>
        <p className='mt-2'>Blablabla</p>
        <p className='mt-2'>Blablabla</p>
        </div>
       </div>

       <div className='bg-white w-[20rem]'>
        <img src={pic2} alt="" />
        <div className='m-4'>
        <p className='text-2xl'>Customer 2</p>
        <p className='mt-2'>Trade</p>
        <p className='mt-2'>Blablabla</p>
        <p className='mt-2'>Blablabla</p>
        <p className='mt-2'>Blablabla</p>
        <p className='mt-2'>Blablabla</p>
        </div>
       </div>

       <div className='bg-white w-[20rem]'>
        <img src={pic3} alt="" />
        <div className='m-4'>
        <p className='text-2xl'>Customer 3</p>
        <p className='mt-2'>Trade</p>
        <p className='mt-2'>Blablabla</p>
        <p className='mt-2'>Blablabla</p>
        <p className='mt-2'>Blablabla</p>
        <p className='mt-2'>Blablabla</p>
        </div>
       </div>
    </div>
    <button className='bg-green-600 h-10 w-10 text-center text-3xl text-white   rounded-full ml-[80rem]'>+</button>
    </div>
    
    
    
    
    </>
  )
}

export default Work