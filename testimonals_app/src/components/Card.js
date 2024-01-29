import {FaQuoteLeft, FaQuoteRight} from 'react-icons/fa6'

function Card(props){
    let review= props.review
   return (
    <div className='flex flex-col md:relative' >
      <div className='absolute top-[-7rem] z-[10] mx-auto '>
        <img src={review.image} className='aspect-square rounded-full w-[140px] h-[140px] z-25'></img>
        <div className=' w-[140px] h-[140px] bg-violet-500 rounded-full absolute -top-[6px] left-[10px] -z-[15]'></div>
      </div>  

      <div className='text-center mt-7'>
        <h2 className='tracking-wider font-bold text-2xl capitalize'>{review.name}</h2>
        <p className='text-violet-300 uppercase text-sm'>{review.job}</p>
      </div>

      <div >
       <FaQuoteLeft className='text-violet-400 mx-auto mt-5'></FaQuoteLeft>
       <div  className='text-center mt-4 text-slate-500'>{review.text}</div>
       <FaQuoteRight className='text-violet-400 mx-auto mt-5'></FaQuoteRight>
      </div>

    </div>
   )
}
export default Card