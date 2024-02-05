import React from 'react'
import { useState,useEffect } from 'react'
import axios from 'axios'

const API_KEY = process.env.REACT_APP_GIPHY_API_KEY
const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`
  

const useGifs = (input) => {

    const [gif, setgif]=useState('')
    const [loading, setLoading]=useState(false)   
    
    async function fetchData(){
     setLoading(true)

     
     const {data} =  await axios.get(input ? (`${url}&tag=${input}`) : (url) ) //destructuring
     const imageSource= data.data.images.downsized_large.url
     
     setgif(imageSource)
     setLoading(false)
    }
    

    useEffect(()=>{
        fetchData()
    },[])

   return {gif, loading, fetchData}

}

export default useGifs
