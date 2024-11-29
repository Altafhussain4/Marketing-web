import React from 'react'

const Navbar = () => {
  return (
    <>
    
    <div className='bg-black p-2 flex gap-8 text-white sticky hover:cursor-pointer'>
        <p> <a href="/logo">Logo</a></p>
        <p><a href="/team">Team</a></p>
        <p><a href="/work">Work</a></p>
        <p><a href="/pricing">Pricing</a></p>
        <p><a href="/contact">Contact</a></p>
        {/* <p><a href="/Dropdown">Team</a></p> */}
    </div>
    
    
    </>
  )
}

export default Navbar