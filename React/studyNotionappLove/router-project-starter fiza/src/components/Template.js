import React from 'react'
import frame from '../assets/frame.png'
import SignupForm from './SignupForm';
import LoginForm from './LoginForm';
import { FcGoogle } from "react-icons/fc";

const Template = ({title, desc1, desc2, image, formtype, setIsLoggedIn}) => {
  return (
    <div className='flex justify-between w-11/12 max-w-[1160px] mx-auto py-12 gap-x-12'>
      <div className=' text-white flex flex-col w-11/12 max-w-[450px]'>
        <h1 className='text-richblack-5 font-semibold text-[1.875rem] leading-[2.375rem]'>{title}</h1>
        <p className='text-[1.125rem] mt-4'>
            <span className='text-richblack-100'>{desc1}</span>
            <br/>
            <span className='text-blue-100 italic'>{desc2}</span>
        </p>

        {formtype === 'signup' ? 
        (<SignupForm setIsLoggedIn={setIsLoggedIn}></SignupForm>) :
        (<LoginForm setIsLoggedIn={setIsLoggedIn}></LoginForm>)}

        <div className='flex items-center gap-2 mt-6'>
            <div className='w-full h-[2px] bg-richblack-700'></div>
            <p className='text-richblack-700 font-semibold'>OR</p>
            <div className='w-full h-[2px] bg-richblack-700'></div>
        </div>

        <div>
            <button 
            className='w-full border px-[12px] py-[8px] border-richblack-700
            rounded-md text-richblack-100 font-medium mt-6 flex justify-center items-center gap-2'>
               <FcGoogle/> 
               <p>Sign Up with Google</p>
               </button>
        </div>
      </div>

      <div className='relative w-11/12 max-w-[450px] '>
        <img src={frame}
        width={558}
        height={504}
        loading='lazy'></img>
        <img src={image}
        width={558}
        height={490}
        loading='lazy'
        className='absolute -top-4 right-4'></img>
      </div>

    </div>
  )
}

export default Template
