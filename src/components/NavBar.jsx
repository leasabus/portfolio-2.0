import React, { useState } from 'react'
import { AiOutlineLinkedin, AiFillGithub, AiOutlineMail, AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
// import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from 'react-icons/md'
import { IoLogoReact } from 'react-icons/io5';



export const NavBar = () => {
    const [nav, setNav] = useState(true);

    const handleNav = () => {
        setNav(!nav)
    }
    const onClose = () => {
        setNav(true)
    }
    return (
        <>

            <div className='flex flex-row justify-between items-center w-full h-[100px] bg-[#0f0e17] rounded text-[#dad7cd] mx-auto p-2 md:p-12  '  >
                <div className='text-xl semibold flex flex-row gap-2 items-center justify-center p-2'>
                    <IoLogoReact size={34} />
                    <span className='text-white  text-xl font-semibold  space-x-1' >Leandro Sabus</span >

                </div >

                <div>
                    <ul className='text-[#94a1b2] hidden md:flex flex-row gap-4 p-2 font-semibold text-xl   '>
                        <a className='hover:text-[#8900f2] hover:-translate-y-1 transition-all ease-in' href="#home"><li>Home</li></a>
                        <a className='hover:text-[#8900f2] hover:-translate-y-1 transition-all ease-in' href="#proyects"><li>Proyects</li></a>
                        <a className='hover:text-[#8900f2] hover:-translate-y-1 transition-all ease-in' href="#skills"><li>Skills</li></a>
                        <a className='hover:text-[#8900f2] hover:-translate-y-1 transition-all ease-in' href="#contact"><li>Contact</li></a>
                    </ul>
                </div>

                <div className='text-white hidden md:flex flex-row gap-4 text-2xl p-2'>
                    <a className='hover:text-[#8900f2] hover:-translate-y-1 transition-all ease-in' href="https://www.linkedin.com/in/leandro-sabus-a3873515a/" target="_blank"><AiOutlineLinkedin /></a>
                    <a className='hover:text-[#8900f2] hover:-translate-y-1 transition-all ease-in' href="https://github.com/leasabus" target="_blank"><AiFillGithub /></a>
                    <a className='hover:text-[#8900f2] hover:-translate-y-1 transition-all ease-in' href="mailto:leandro.sabus@gmail.com" ><AiOutlineMail /></a>
                </div>



                <div onClick={handleNav} className='block md:hidden cursor-pointer p-4 text-white'>
                    {
                        !nav ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />
                    }

                </div>
            </div >

            <div className={!nav ? 'absolute left-0 top-0 w-[60%] h-[350px] border-r border-r-gray-900 bg-slate-900 ease-in-out duration-500 rounded' : 'fixed left-[100%]'}>
                <div>
                    <div className='text-xl semibold flex flex-row items-start justify-start mt-2 p-2 text-white'>
                        <IoLogoReact size={30} />
                        <span className='text-white hover:text-[#8900f2] text-xl font-semibold  space-x-1' >Leandro Sabus</span >

                    </div >
                    <ul className='text-[#94a1b2] flex flex-col md:flex-row gap-2 md:gap-4 p-4 mt-6 font-semibold text-xl   '>
                        <a className='hover:text-[#8900f2] hover:-translate-y-1 transition-all ease-in' href="#home"><li>Home</li></a>
                        <a className='hover:text-[#8900f2] hover:-translate-y-1 transition-all ease-in' href="#proyects"><li>Proyects</li></a>
                        <a className='hover:text-[#8900f2] hover:-translate-y-1 transition-all ease-in' href="#skills"><li>Skills</li></a>
                        <a className='hover:text-[#8900f2] hover:-translate-y-1 transition-all ease-in' href="#contact"><li>Contact</li></a>
                    </ul>


                    <div className='text-white flex flex-row gap-4 mt-4 text-2xl p-2 '>
                        <a className='hover:text-[#8900f2] hover:-translate-y-1 transition-all ease-in' href="https://www.linkedin.com/in/leandro-sabus-a3873515a/" target="_blank"><AiOutlineLinkedin /></a>
                        <a className='hover:text-[#8900f2] hover:-translate-y-1 transition-all ease-in' href="https://github.com/leasabus" target="_blank"><AiFillGithub /></a>
                        <a className='hover:text-[#8900f2] hover:-translate-y-1 transition-all ease-in' href="mailto:leandro.sabus@gmail.com" ><AiOutlineMail /></a>
                    </div>

                </div>

            </div>
        </>
    )
}
