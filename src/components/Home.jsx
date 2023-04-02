import React from 'react'
import Typed from 'react-typed';


export const Home = () => {
    return (
        <>
            <section id='home' >
                <div className='flex flex-col md:flex-row items-center text-center justify-center gap-4 md:gap-8 '>
                    <div className='w-[28rem] pt-6 md:pt-0 ' >
                        <h1 className='text-4xl text-white font-bold mb-2' >Hi! My name is Leandro</h1>
                        <h2 className='text-3xl text-[#94a1b2]'>I am a front-end developer</h2>
                        <h4 className='text-2xl text-[#94a1b2] '>I build websites and apps with</h4>
                        <h4 className='text-2xl text-[#8900f2] font-bold'><Typed
                            strings={['React', 'Javascript', 'Bootstrap', 'TailwindCss', 'Redux', 'ChakraUi']}
                            typeSpeed={30}
                            backSpeed={50}
                            loop
                        /></h4>
                        <h4 className='text-2xl text-[#94a1b2]'> And other technologies.</h4>
                        <a href="../assets/CV-Leandro-Sabus.pdf" target="_blank"><button className=' text-white bg-[#8900f2] font-bold p-2 rounded-xl mt-2 hover:bg-teal-400 hover:text-black'>Download CV</button></a>
                    </div>
                    <div className='w-[24rem] md:w-[28rem] mt-8' >
                        <img src="../assets/home.png" alt="" />
                    </div>

                </div>

            </section>
            <button className=' w-14 h-1 p-1 cursor-auto bg-gradient-to-r from-teal-400  via-teal-500 to-teal-700   flex rounded'></button>
        </>
    )
}

