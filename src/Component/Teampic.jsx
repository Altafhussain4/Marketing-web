import React from 'react'
import pic from './Pics/avatar.jpg'
export default function Teampic(props) {
  return (
    <div>
       <div>
        <img src={pic} alt="" className='rounded-full h-[10rem]' />
        <p className='text-2xl text-center mt-2'>{props.name}</p>
        <p className='text-center mt-5'> {props.work}</p>
        </div>
    </div>
  )
}
