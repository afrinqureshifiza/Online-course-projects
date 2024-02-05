import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Spinner from './Spinner';
import useGifs from '../hooks/useGifs';

const API_KEY = process.env.REACT_APP_GIPHY_API_KEY

const Random = () => {
    
   const {gif, loading, fetchData}=useGifs()
   
  return (
    <div className='w-1/2   bg-green-400 border border-black rounded-lg
    flex flex-col items-center gap-y-5 '>
      <h1 className='font-bold underline text-2xl mt-[15px]'>A RANDOM GIF</h1>
      
      {
        loading ? (<Spinner/>) : (<img src={gif} width={450}/>)
      }

      <button onClick={()=>{
        fetchData()
      }}
      className='bg-yellow-100 w-10/12 rounded-lg py-2 mb-[20px] text-[20px]'>
        Generate
      </button>
    </div>
  )
}

export default Random
