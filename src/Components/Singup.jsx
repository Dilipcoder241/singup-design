import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Singup() {
    const [fullName, setfullName] = useState("");
    const [number, setNumber] = useState();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [companyName, setCompanyName] = useState("");
    return (
        <div className='h-[812px] w-[375px] relative'>
            <h1 className='absolute top-[40px] left-[20px] leading=[28px] w-[188px] text-[28px]'>Create your PopX account</h1>
            <input type="text" placeholder='Full Name' onChange={(e)=>{setfullName(e.target.value)}} value={fullName} className='absolute border-[1px] p-4 border-[#CBCBCB] rounded-[6px] w-[335px] h-[40px] top-[140px] left-[20px] ' />
            <input type="number" placeholder='Phone No' onChange={(e)=>{setNumber(e.target.value)}} value={number} className='absolute border-[1px] p-4 border-[#CBCBCB] rounded-[6px] w-[335px] h-[40px] top-[209px] left-[20px] ' />
            <input type="email" placeholder='Email address' onChange={(e)=>{setEmail(e.target.value)}} value={email} className='absolute border-[1px] p-4 border-[#CBCBCB] rounded-[6px] w-[335px] h-[40px] top-[278px] left-[20px] ' />
            <input type="password" placeholder='Password' onChange={(e)=>{setPassword(e.target.value)}} value={password} className='absolute border-[1px] p-4 border-[#CBCBCB] rounded-[6px] w-[335px] h-[40px] top-[347px] left-[20px] ' />
            <input type="text" placeholder='Company Name' onChange={(e)=>setCompanyName(e.target.value)} value={companyName} className='absolute border-[1px] p-4 border-[#CBCBCB] rounded-[6px] w-[335px] h-[40px] top-[416px] left-[20px] ' />
            <div className='w-[132px] h-[47px] text-[13px] absolute top-[474px] left-[20px]'>
                <p className=''>Are you an Agency?*</p>
                <div className='flex items-center gap-4'>
                    <input type="radio" name="agency" />
                    <p>Yes</p>
                    <input type="radio" name="agency" />
                    <p>No</p>
                </div>
            </div>

            <Link to="/account" className='flex items-center justify-center capitalize w-[335px] h-[46px] text-center font-Rubik absolute top-[736px] left-[20px] rounded-[6px] tracking-[0px] text-[#ffff] opacity-100 bg-[#6C25FF]'>create account</Link>

        </div>
    )
}

export default Singup