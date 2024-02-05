import React, { useState } from 'react'
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const SignupForm = ({setIsLoggedIn}) => {

    const navigate = useNavigate()

    const [showPass, setShowPass]= useState(false)
    const [showcnfpwd, setShowCnfPwd]= useState(false)
    const [accountType, setAccountType]=useState('student')

    const [formdata, setFormData]= useState({
        fname:'',
        lname:'',
        email:'',
        password:'',
        confirmpass:''
    })

    function changeHandler(event){
        setFormData((prevObj)=>{
          return {...prevObj,
          [event.target.name]: event.target.value}
        })
    }

    function submitHandler(e){
        e.preventDefault()
        if(formdata.password === formdata.confirmpass){

        setIsLoggedIn(true)
        toast.success('Signed Up')
        navigate('/dashboard')  
        const accountData={...formdata}  

        const finalData={...accountData, accountType}
        console.log('Final account data printing')
        console.log(finalData)

        }
        else{
          toast.error('Password Dont Matched')  
        }
        
    }

  return (
   <div>

    <div className='flex gap-1 my-6 bg-richblack-800 max-w-max p-1 rounded-full'>
     <button
     onClick={()=>{setAccountType('student')}}
     className={`${accountType==='student' ? ('bg-richblack-900 text-richblack-5 rounded-full') : ('text-richblack-200')} py-2 px-5  transition-all duration-200`}>Student</button>

     <button
     onClick={()=>{setAccountType('instructor')}}
     className={`${accountType==='instructor' ? ('bg-richblack-900 text-richblack-5 rounded-full') : ('text-richblack-200')} py-2 px-5 transition-all duration-200`}>Instructor</button>
   </div>

   <form onSubmit={submitHandler}>
    
    {/* first name and last name  */}
    <div className='flex gap-4 mt-4 '>
    <label className='w-full'>
        <p className='text-[0.875rem] mb-1 text-richblack-5'>First Name<sup className='text-pink-200'>*</sup></p>
        <input 
        required
        type='text'
        onChange={changeHandler}
        placeholder='Enter First Name'
        name='fname'
        value={formdata.fname}
        className='bg-richblack-800 p-[12px] w-full rounded-[0.5rem] mt-1'
        />
    </label>

    <label className='w-full'>
        <p className='text-[0.875rem] mb-1 text-richblack-5'>Last Name<sup className='text-pink-200'>*</sup></p>
        <input 
        required
        type='text'
        onChange={changeHandler}
        placeholder='Enter Last Name'
        name='lname'
        value={formdata.lname}
        className='bg-richblack-800 p-[12px] w-full rounded-[0.5rem] mt-1'
        />
    </label>
    </div>

    {/* email  */}
    <div className='mt-[20px]'>
     <label className='w-full'>
        <p className='text-[0.875rem] mb-1 text-richblack-5'>Email Address<sup className='text-pink-200'>*</sup></p>
        <input 
        required
        type='email'
        onChange={changeHandler}
        placeholder='Enter Email Address'
        name='email'
        value={formdata.email}
        className='bg-richblack-800 p-[12px] w-full rounded-[0.5rem] mt-1'
        />
    </label>   
    </div>
    
    
    {/* password / confirm password  */}
    <div className='flex gap-4 mt-[20px]'>
    <label className='relative w-full'>
        <p className='text-[0.875rem] mb-1 text-richblack-5'>Create Password<sup className='text-pink-200'>*</sup></p>
        <input 
        required
        type={showPass ? ('text') : ('password')}
        onChange={changeHandler}
        placeholder='Enter Password'
        name='password'
        value={formdata.password}
        className='bg-richblack-800 p-[12px] w-full rounded-[0.5rem] mt-1'
        />
        <span onClick={()=>{setShowPass(!showPass)}} 
        className='absolute right-3 top-[38px] cursor-pointer'>

         {showPass ? 
         (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF'/>) : 
         (<AiOutlineEye fontSize={24} fill='#AFB2BF'/>)}
        </span>
    </label>

    <label className='relative w-full'>
        <p className='text-[0.875rem] mb-1 text-richblack-5'>Confirm Password<sup className='text-pink-200'>*</sup></p>
        <input 
        required
        type={showcnfpwd ? ('text') : ('password')}
        onChange={changeHandler}
        placeholder='Confirm Password'
        name='confirmpass'
        value={formdata.confirmpass}
        className='bg-richblack-800 p-[12px] w-full rounded-[0.5rem] mt-1'
        />
        <span onClick={()=>{setShowCnfPwd(!showcnfpwd)}}
        className='absolute right-3 top-[38px] cursor-pointer'>
         {showcnfpwd ? 
         (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF'/>) : 
         (<AiOutlineEye fontSize={24} fill='#AFB2BF'/>)}
        </span>
    </label>
    </div> 

    <button
     className='bg-yellow-50 rounded-[8px] px-[12px] py-[8px] font-medium mt-6  text-richblack-900 w-full'>Create Account</button>   

   </form>
   </div>
  )
}

export default SignupForm
