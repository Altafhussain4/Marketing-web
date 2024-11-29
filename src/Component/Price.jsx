import React from 'react'
import Pkg from './Pkg'

const Price = () => {
  return (
    <>
    
    <div>
        <div className='text-center mt-8'>
            <p className='text-3xl'>PRICING</p>
            <p className='mt-4 '>Choose a pricing plan that fits your needs.</p>
        </div>
     <div className='mt-12  flex gap-4  justify-center mx-6'>
     <Pkg hid="Basic" storage="10 Gb storage" emails="10 Emails" domains="10 domains" price="10$"  />
     <Pkg hid="Pro" storage="25 Gb storage" emails="25 Emails" domains="25 domains" price="25$"  />
     <Pkg hid="Premium" storage="50 Gb storage" emails="50 Emails" domains="50 domains" price="50$"  />
     </div>
     <div className='mt-12  flex gap-4  justify-center mx-6'>
     <Pkg hid="Advance" storage="55 Gb storage" emails="55 Emails" domains="55 domains" price="60$"  />
     <Pkg hid="Extra" storage="60 Gb storage" emails="60 Emails" domains="60 domains" price="80$"  />
     <Pkg hid="Gold" storage="100 Gb storage" emails="100 Emails" domains="100 domains" price="100$"  />
     </div>
     
        {/* <div className='text-center'>
            <p className='bg-black py-6 text-white text-2xl px-[10rem]'>Pro</p>
            <p className='p-5 border border-slate-300'>10GB Storage</p>
            <p className='p-5 border border-slate-300'>10 Emails</p>
            <p className='p-5 border border-slate-300'>10 Domains</p>
            <p className='p-5 border border-slate-300'><b>Endless</b>Support</p>
            <p className='p-5 border border-slate-300'><b>$10</b><br />per month</p>
            <div className=' p-5 border border-slate-300'>
                <p className='bg-green-600 rounded-md p-2 w-fit m-auto'>Sign up</p>
                </div>
        </div> */}

        {/* <div className='text-center'>
            <p className='bg-black py-6 text-white text-2xl px-[10rem]'>Premium</p>
            <p className='p-5 border border-slate-300'>10GB Storage</p>
            <p className='p-5 border border-slate-300'>10 Emails</p>
            <p className='p-5 border border-slate-300'>10 Domains</p>
            <p className='p-5 border border-slate-300'><b>Endless</b>Support</p>
            <p className='p-5 border border-slate-300'><b>$10</b><br />per month</p>
            <div className=' p-5 border border-slate-300'>
                <p className='bg-green-600 rounded-md p-2 w-fit m-auto'>Sign up</p>
                </div>
        </div> */}
     
    </div>
    
    
    
    </>
  )
}

export default Price