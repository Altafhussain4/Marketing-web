import React from 'react'

export default function Pkg(props) {
  return (
    <div>
      <div className='text-center'>
            <p className='bg-black py-6 text-white text-2xl px-[10rem]'>{props.hid}</p>
            <p className='p-5 border border-slate-300'>{props.storage}</p>
            <p className='p-5 border border-slate-300'>{props.emails}</p>
            <p className='p-5 border border-slate-300'>{props.domains}</p>
            <p className='p-5 border border-slate-300'><b>Endless</b>Support</p>
            <p className='p-5 border border-slate-300'><b>{props.price}</b><br />per month</p>
            <div className=' p-5 border border-slate-300'>
                <p className='bg-green-600 rounded-md p-2 w-fit m-auto'>Sign up</p>
                </div>
        </div>
    </div>
  )
}
