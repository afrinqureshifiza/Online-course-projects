import React from 'react'
import { useState,useEffect } from 'react'
import axios from 'axios'
import Spinner from './Spinner'
import useGifs from '../hooks/useGifs'



const Tag = () => {
    
    const [input, setinput]=useState('car')

    const {gif, loading, fetchData}= useGifs(input)


  return (
    <div className='w-1/2   bg-blue-400 border border-black rounded-lg
    flex flex-col items-center gap-y-5 '>
      <h1 className='font-bold underline text-2xl mt-[15px] uppercase'>
        {`RANDOM ${input} GIF`}
      </h1>
      
      {
        loading ? (<Spinner/>) : (<img src={gif} width={450}/>)
      }

      <input onChange={(event)=>{ setinput(event.target.value) }}
      value={input}
      className='text-center  w-10/12 rounded-lg py-2  text-[20px]'/>


      <button onClick={()=>{ fetchData() }}
      className='bg-yellow-100 w-10/12 rounded-lg py-2 mb-[20px] text-[20px]'>
        Generate
      </button>
    </div>
  )
}

export default Tag
