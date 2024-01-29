import { useState } from "react";
import Card from "./Card"
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

function Testimonial(props){
    let reviews=props.reviews
    const [index,setIndex] = useState(0)

    function leftshiftHandler(){
      if(index-1 < 0 ){
        setIndex(reviews.length-1)
      }
      else{
        setIndex(index-1)
      }
    }

    function rightshiftHandler(){
        if(index+1 > reviews.length-1){
            setIndex(0)
          }
          else{
            setIndex(index+1)
          }
    }

    function surpriseHandler(){
       let ran= require('random-number')
       let options={
        min:0,
        max:4,
        integer:true
       }
       setIndex(ran(options))
    }
   return (
    <div className="flex flex-col justify-center items-center w-[85vw] md:w-[700px] bg-white mt-10 p-10 rounded-md transition-all duration-200 hover:shadow-xl">
       <Card review={reviews[index]}>
        </Card> 

        <div className='mx-auto mt-5 text-3xl text-violet-400 flex gap-3 font-bold'>
        <button className='cursor-pointer hover:text-violet-500'
        onClick={leftshiftHandler}>
             <FiChevronLeft></FiChevronLeft>
        </button>
        <button className='cursor-pointer  hover:text-violet-500'
        onClick={rightshiftHandler}> 
             <FiChevronRight></FiChevronRight>
        </button>
      </div>

      <div className='mx-auto font-bold text-white bg-violet-400 hover:bg-violet-500 transition-all duration-200
      cursor-pointer px-10 py-3 rounded-md mt-5 text-lg'>
        <button onClick={surpriseHandler}>Surprise Me</button>
      </div>
    </div>
   )
}

export default Testimonial