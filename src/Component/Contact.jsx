import React from 'react'
import pic from './Pics/map.jpg'
import DoneIcon from '@mui/icons-material/Done';
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import MailSharpIcon from '@mui/icons-material/MailSharp';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
const Contact = () => {
  return (
    <>
    <div className='bg-slate-100 mt-[5rem] flex gap-[20rem] pt-14 pb-14 p-4'>

    <div>
    <p className='text-3xl font-semibold ' >Contact Us </p><hr/>
    <p>Address</p>
    <p>Swing by for a cup of coffee, or whatever.</p>
    <p><FmdGoodIcon/>  Chicago, US</p>
    <p><LocalPhoneIcon/>  +00 1515151515</p>
    <p><MailSharpIcon/>  test@test.com</p>
    </div>
    <div className='bg-white w-[50rem] p-2 '>
        <p>Name</p>
        <input type="text" placeholder='' className=''/><hr/>
        <p>Email</p>
        <input type="text" placeholder='' className=''/><hr/>
        <p>Message</p>
        <input type="text" placeholder='' className=''/><hr/>
        <p><button className='bg-blue-500 text-white mt-5'><DoneIcon/></button>I Like it <button className='bg-black text-white ml-[40rem] p-2'>send</button></p>     
    </div>
    </div>
    <div>
        <img src={pic} alt="" className='w-screen h-screen'  />
    </div>
    <div className=' bg-black p-16'>
    <p className='text-white text-center font-semibold'>Follow Us</p>
    <div className='text-center '>
    <button className=' text-white'><a href="/Facebook"></a><FacebookIcon/></button>
    <button className=' text-white'><a href="/Twitter"><TwitterIcon/></a></button>
    <button className=' text-white'><a href="/Instagram"><InstagramIcon/></a></button>
    <button className=' text-white'><a href="/LinkedIn"><LinkedInIcon/></a></button>
    </div>
    </div>

    </>
    
    
    
  )
}

export default Contact