import React from 'react'
import { FiMail } from 'react-icons/fi'
import { AiOutlineLinkedin, AiFillGithub } from 'react-icons/ai'


export const Contact = () => {
    return (
        <section id='contact'>
            <div className='flex flex-col p-0 md:p-10 gap-4 mt-8  text-center justify-center  w-auto h-auto md:h-[500px] text-white'>
                <h1 className='text-white text-3xl  font-bold'>Contact</h1>
                <p className='text-2xl text-[#94a1b2] mt-2 p-4 md:p-0 '>If you liked my works contact me. Let's work together!</p>

                <div className='flex flex-col items-center justify-center gap-4 md:gap-8 md:flex-row'>
                    <div className='w-[350px] md:w-[400px] h-auto'>
                        <img src="../assets/footer.png" alt="#" />
                    </div>
                    <div className='flex flex-col gap-2 md:gap-4 items-center md:items-start justify-center text-xl md:text-2xl mt-4 mb-4 '>
                        <a className='hover:text-[#8900f2]' href="mailto:leandro.sabus@gmail.com" > <div className=' flex flex-row items-center p-2 gap-2 '>   <FiMail /> <p >leandro.sabus@gmail.com</p></div></a>
                        <a className='hover:text-[#8900f2]' href="https://www.linkedin.com/in/leandro-sabus-a3873515a/" target="_blank"><div className=' flex flex-row items-center p-2 gap-2'> <AiOutlineLinkedin />  <p >Leandro Sabus</p></div></a>
                        <a className='hover:text-[#8900f2]' href="https://github.com/leasabus" target="_blank"><div className=' flex flex-row items-center  p-2 gap-2'>  <AiFillGithub />  <p >leasabus</p></div></a>
                    </div>
                </div>
            </div>
        </section>
    )
}

// var input = [1, 'hola', 2];

// function filterNumbersFromArray(array) {
//     var onlyEntireNumbers = [];
//     for (var i = 0; i < array.length; i++) {
//         if (typeof (array[i]) == "number") {

//             onlyEntireNumbers.push(array[i]);
//         };
//     }
//     return onlyEntireNumbers;
// }

// console.log(filterNumbersFromArray(input));