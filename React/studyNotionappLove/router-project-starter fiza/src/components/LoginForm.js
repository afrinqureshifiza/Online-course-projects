import React, { useState } from 'react'
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import {Link, useNavigate} from 'react-router-dom'
import toast from 'react-hot-toast';


const LoginForm = ({setIsLoggedIn}) => {

    const navigate= useNavigate()

    const[showPass, setShowPass]= useState(false)

    const [formdata, setFormData]= useState({
        email:'',
        password:''
    })

    function changeHandler(event){

      setFormData((prevObj)=>{
        return {...prevObj,
        [event.target.name]: event.target.value}
      })

    }

    function submitHandler(e){
      e.preventDefault()
      setIsLoggedIn(true)
      toast.success('Logged In')
      navigate('/dashboard')
      console.log(formdata)
    }

  return (
    <form onSubmit={submitHandler}
    className='flex flex-col gap-4 mt-6'>
      <label >
      <p className='text-[0.875rem]'>Email Address <sup className='text-pink-200'>*</sup></p> 
      <input 
      type='email' 
      required 
      value={formdata.email}
      placeholder='Enter email address'
      onChange={changeHandler}
      name='email'
      className='bg-richblack-800 p-[12px] w-full rounded-[0.5rem] mt-1'></input>
      </label>
      

      <label className='relative'>
      <p className='text-[0.875rem]'>Password <sup className='text-pink-200'>*</sup></p>  
      <input 
      type={showPass ? ('text') : ('password')}
      required 
      value={formdata.password}
      placeholder='Enter Password'
      onChange={changeHandler}
      name='password'
      className='bg-richblack-800 p-[12px] text-richblack-5 w-full rounded-[0.5rem] mt-1'></input>

      <span onClick={()=>{setShowPass(!showPass)}} 
      className='absolute right-3 top-[38px] cursor-pointer'>
        {showPass ? 
        (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF'/>) : 
        (<AiOutlineEye fontSize={24} fill='#AFB2BF'/>)}
      </span>

      <Link to='#'
      className=' text-blue-100 text-xs ml-[360px]'> Forgot Password</Link>
      </label>

      <button 
      className='bg-yellow-50 rounded-[8px] px-[12px] py-[8px] font-medium mt-6 text-richblack-900'>Sign In</button>
      
    </form>
  )
}

export default LoginForm
