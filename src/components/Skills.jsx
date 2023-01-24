import React from 'react'

export const Skills = () => {
    return (
        <>
            <section id='skills'>
                <div className='flex flex-col p-0 md:p-10  text-center justify-center  w-auto h-auto mt-8'>
                    <h1 className='text-3xl text-white font-bold '>Skills and Experience</h1>


                    <div className='grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-12 md:gap-4 p-8'>

                        <div className='flex flex-row gap-8 rounded items-center justify-center w-[150px] md:w-[200px] h-[100px] p-4 bg-white shadow-teal-500 shadow-md hover:-translate-y-2 ease-in duration-200'>
                            <img className='w-[50px] h-auto' src="./src/assets/skills/html5.png" alt="#" />

                            <p className='hidden md:flex font-bold w-[30px] md:w-[50px] h-auto'>HTML</p>
                        </div>

                        <div className='flex flex-row gap-8 rounded  items-center justify-center w-[150px] md:w-[200px] h-[100px] p-4 bg-white shadow-teal-400 shadow-md hover:-translate-y-2 ease-in duration-200'>
                            <img className='w-[50px] h-auto' src="./src/assets/skills/css3.png" alt="#" />

                            <p className=' hidden md:flex font-bold w-[50px] h-auto'>CSS</p>
                        </div>

                        <div className='flex flex-row gap-8 rounded  items-center justify-center w-[150px] md:w-[200px] h-[100px] p-4 bg-white shadow-teal-400 shadow-md hover:-translate-y-2 ease-in duration-200'>
                            <img className='w-[50px] h-auto' src="./src/assets/skills/javascript.png" alt="#" />

                            <p className='hidden md:flex font-bold w-[50px] h-auto'>Javascript</p>
                        </div>

                        <div className='flex flex-row gap-8 rounded  items-center justify-center w-[150px] md:w-[200px] h-[100px] p-4 bg-white shadow-teal-400 shadow-md hover:-translate-y-2 ease-in duration-200'>
                            <img className='w-[50px] h-auto' src="./src/assets/skills/react-icon.svg.png" alt="#" />

                            <p className='hidden md:flex font-bold w-[50px] h-auto'>React</p>
                        </div>

                        <div className='flex flex-row mt-3  gap-8 rounded items-center justify-center w-[150px] md:w-[200px] h-[100px] p-4 bg-white shadow-teal-500 shadow-md hover:-translate-y-2 ease-in duration-200'>
                            <img className='w-[50px] h-auto' src="./src/assets/skills/tailwind.png" alt="#" />

                            <p className='hidden md:flex font-bold w-[50px] h-auto'>Tailwind</p>
                        </div>

                        <div className='flex flex-row mt-3  gap-8 rounded  items-center justify-center w-[150px] md:w-[200px] h-[100px] p-4 bg-white shadow-teal-400 shadow-md hover:-translate-y-2 ease-in duration-200'>
                            <img className='w-[50px] h-auto' src="./src/assets/skills/firebase.png" alt="#" />

                            <p className='hidden md:flex font-bold w-[50px] h-auto'>Firebase</p>
                        </div>

                        <div className='flex flex-row mt-3  gap-8 rounded  items-center justify-center w-[150px] md:w-[200px] h-[100px] p-4 bg-white shadow-teal-400 shadow-md hover:-translate-y-2 ease-in duration-200'>
                            <img className='w-[50px] h-auto' src="./src/assets/skills/redux.jpg" alt="#" />

                            <p className='hidden md:flex font-bold w-[50px] h-auto'>Redux</p>
                        </div>

                        <div className='flex flex-row gap-8 mt-3  rounded  items-center justify-center w-[150px] md:w-[200px] h-[100px] p-4 bg-white shadow-teal-400 shadow-md hover:-translate-y-2 ease-in duration-200'>
                            <img className='w-[50px] h-auto' src="./src/assets/skills/github.png" alt="#" />

                            <p className='hidden md:flex font-bold w-[50px] h-auto'>Github</p>
                        </div>


                    </div>
                    <h3 className='text-white text-2xl text-start font-bold p-6'>Experience</h3>
                    <div className=' flex flex-col md:flex-row items-center justify-between gap-8 p-4 text-white text-start'>
                        <div className='w-[350px] md:w-[400px] h-[250px] bg-slate-900 rounded-xl p-4'>
                            <h4 className='font-bold text-xl text-[#8900f2] '>Freelance (2021-2023)</h4>
                            <p className='mt-2'>I built proyects and taken courses to gain experience and
                                improve mi skills using the best technologies on front-end development.
                                Focusing in best practices and modern design. I can highlight<span className='text-[#94a1b2] font-bold'> HTML, CSS , Javascript, React, Tailwind </span> among the most used by me.
                            </p>
                        </div>

                        <div className='w-[350px] md:w-[400px] h-[250px] bg-slate-900 rounded-xl p-4'>
                            <h4 className='font-bold text-xl text-[#8900f2]'>ID for Ideas (2023-Actuality)</h4>
                            <p className='mt-2'>I'm working in a team as a front-end developer. We work in proyects to grow experience
                                and skills for teamwork. I using technologies like a <span className=' font-bold text-[#94a1b2]'> React, Tailwind, Vite, Agile methodologies, Figma.</span>


                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <button className=' w-14 h-1 p-1 cursor-auto bg-gradient-to-r from-teal-400  via-teal-500 to-teal-700   flex rounded'></button>
        </>
    )
}
