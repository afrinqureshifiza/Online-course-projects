import { useState } from "react";


function Card({id, image, info, price, name, removeTour}){

    const [readmore, setReadmore]= useState(false)
    const description=readmore ? `${info}....` : `${info.substring(0,200)}....`

    function readmorehandler(){
        setReadmore(!readmore)
    }

   function interestHandler(){
    removeTour(id)
   }

    
   return ( <div className="card">
        <img src={image} className="image"></img>
        
        <div className="tour-info">
         <div className="tour-details">
          <h4 className="tour-price">{price}</h4>
          <h3 className="tour-city">{name}</h3> 
        </div>

       <div className="description">
        {description}
        <span onClick={readmorehandler} className="read-more">
            {readmore ? `Show Less `: `Read More`}
        </span>
       </div>   
        </div>
        

       <button onClick={interestHandler} className="btn-red">Not Interested</button>
        
    </div>)
}

export default Card;