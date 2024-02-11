import React from 'react'

function Account() {
    return (
        <div className='h-[812px] w-[375px] relative bg-[#F7F8F9]'>
            <div className='h-[68px] w-full shaow-lg bg-[#FFFFFF]'>
                <p className='text-[18px] pt-[27px] pl-[15px]'>Account Settings</p>
            </div>

            <div className='pl-[20px] p-5 pr-[18px] pt-[30px] border-b-[1px] border-[#cccccc] border-dashed'>
                <div className='flex gap-4'>
                    <div className='relative rounded-full'>
                        <img src="./Ellipse114.png" alt="" className='h-[76px] w-[76px] object-cover' />
                        <img src="camero.svg" alt="" className='absolute bottom-0 right-0' />
                    </div>
                    <div className='mt-4'>
                        <p className='font-bold'>name</p>
                        <p>email</p>
                    </div>
                </div>
                <div className='mt-5'>
                    <p>Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam</p>
                </div>
            </div>
        </div>
    )
}

export default Account