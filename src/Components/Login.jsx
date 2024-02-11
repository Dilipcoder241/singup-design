import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function login() {
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("")
  return (
    <div className='h-[812px] w-[375px] relative'>
        <h1 className='absolute top-[40px] left-[20px] leading=[28px] w-[188px] text-[28px]'>Singin to your PopX account</h1>
        <p className='absolute top-[123px] left-[20px] w-[232px] h-[48px] opacity-60'>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
        <input type="text" placeholder='Enter Email Address' onChange={(e)=>{setemail(e.target.value)}} className='absolute border-[1px] p-4 border-[#CBCBCB] rounded-[6px] w-[335px] h-[40px] top-[204px] left-[20px] '/>
        <input type="password" placeholder='Enter Password' onChange={(e)=>{setpassword(e.target.value)}} className='absolute border-[1px] p-4 border-[#CBCBCB] rounded-[6px] w-[335px] h-[40px] top-[267px] left-[20px] '/>
        <Link to="/account" className='flex items-center justify-center capitalize w-[335px] h-[46px] text-center font-Rubik absolute top-[321px] left-[20px] rounded-[6px] tracking-[0px] text-[#ffff] opacity-100 bg-[#CBCBCB]'>Login</Link>
    </div>
  )
}

export default login