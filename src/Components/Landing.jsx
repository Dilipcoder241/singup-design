import React from 'react'
import { Link } from 'react-router-dom'

function Landing() {
  return (
    <div className='h-[812px] w-[375px] relative'>
      <h1 className='absolute w-[231px] h-[33px] top-[549px] left-[20px] text-[#1D2226]'>Welcome to PopX</h1>
      <p className='absolute w-[232px] h-[48px] top-[592px] left-[20px] text-[#1D2226] opacity-60'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      <Link to="/singup" className='flex items-center justify-center capitalize w-[335px] h-[46px] text-center font-Rubik absolute top-[669px] left-[20px] rounded-[6px] tracking-[0px] text-[#ffff] opacity-100 bg-[#6C25FF]'>create account</Link>
      <Link to="/login" className='flex items-center justify-center capitalize w-[335px] h-[46px] text-center font-Rubik absolute top-[725px] left-[20px] rounded-[6px] tracking-[0px] text-[#ffff] opacity-100 bg-[#6C25FF4B]'>already register? login</Link>
    </div>
   
  )
}

export default Landing