import { useState } from "react";
import "./App.css";

function App() {

  const [formData, setFormdata]= useState({
    firstName:'',
    lastName:'',
    email:'',
    country:'',
    street:'',
    city:'',
    state:'',
    pinCode:'',
    offers:false,
    candidates:false,
    comments:false,
    pushNotifications:''
  })

  function changeHandler(event){
   
    const {name, value, type, checked}=event.target

   setFormdata(prevData=>{
    return {
      ...prevData,
      [name]: type==='checkbox' ? checked : value
  }
   })
  }

  function submitHandler(e){
    e.preventDefault()
    console.log(formData)
  }
// console.log(formData)
  return (
    <div  className="px-[100px] flex justify-center items-center">
      <form onSubmit={submitHandler}>
      <label htmlFor="fname"
      className="font-semibold">First Name</label><br></br>
      <input
      type="text"
      name="firstName"
      id="fname"
      placeholder="Afrin"
      value={formData.firstName}
      onChange={changeHandler}
      className="outline w-[550px] rounded"
    /><br></br>

      <label htmlFor="lname"
      className="font-semibold">Last Name</label><br></br>
      <input 
      type="text"
       id="lname" 
       value={formData.lastName} 
       name="lastName"
       placeholder="Qureshi"
       onChange={changeHandler}
       className="outline w-[550px] rounded"></input><br></br>
      
      <label htmlFor="email"
      className="font-semibold">Email Address</label><br></br>
      <input 
      type="email" 
      id="email" 
      value={formData.email} 
      name="email"
      placeholder="Afrin@gmail.com"
      onChange={changeHandler}
      className="outline w-[550px] rounded"></input><br></br>
 
      <label htmlFor="select"
      className="font-semibold">Country</label><br></br>
      <select
      id="select"
      name="country"
      onChange={changeHandler}
      value={formData.country}
      className='w-[550px] outline'>
        <option>India</option>
        <option>United States</option>
        <option>Canada</option>
        <option>Mexico</option>
      </select><br></br>

      <label htmlFor="street"
      className="font-semibold">Street Address</label><br></br>
      <input 
      type="text" 
      id="street" 
      value={formData.street} 
      name="street"
      placeholder="36"
      onChange={changeHandler}
      className="outline w-[550px] rounded"></input><br></br>

      <label htmlFor="city"
      className="font-semibold">City</label><br></br>
      <input 
      type="text" 
      id="city" 
      value={formData.city} 
      name="city"
      placeholder="Bhilai"
      onChange={changeHandler}
      className="outline w-[550px] rounded"></input>  <br></br>

      <label htmlFor="state"
      className="font-semibold">State / Province</label><br></br>
      <input 
      type="text" 
      id="state" 
      value={formData.state} 
      name="state"
      placeholder="Chhattishgarh"
      onChange={changeHandler}
      className="outline w-[550px] rounded"></input> <br></br> 

      <label htmlFor="pin"
      className="font-semibold">Postal Code</label><br></br>
      <input 
      type="number" 
      id="pin" 
      value={formData.pinCode} 
      name="pinCode"
      placeholder="110077"
      onChange={changeHandler}
      className="outline w-[550px] rounded"></input>    <br></br>   
      <br></br>

      <fieldset >
        <legend className="mb-6 font-bold">By Emails</legend>
        
        
        <div className="flex items-start gap-4 mb-2">
         <input 
         type="checkbox" 
         id="comments"
         checked={formData.comments}
         name="comments"
         onChange={changeHandler}
         ></input>
         <div className="flex flex-col ">
         <label htmlFor="comments" className="font-semibold">Comments</label> 
         <p>Get notified when someones posts a comment on a posting.</p> 
         </div> 
        </div>

        <div className="flex items-start gap-4 mb-2">
         <input 
         type="checkbox" 
         id="candidate"
         checked={formData.candidates}
         name="candidates"
         onChange={changeHandler}
         ></input>
         <div>
         <label htmlFor="candidate" className="font-semibold">Candidate</label> 
         <p>Get notified when a candidate applies for a job.</p> 
         </div> 
        </div>

        <div className="flex items-start gap-4 mb-2">
         <input 
         type="checkbox" 
         id="offer"
         checked={formData.offers}
         name="offers"
         onChange={changeHandler}
         ></input>
         <div>
         <label htmlFor="offer" className="font-semibold">Offers</label> 
         <p>Get notified when a candidate accepts or rejects an offer.</p> 
         </div> 
        </div>
        
      
      </fieldset>
      <br></br>

      <fieldset>
        <legend className="font-bold">Push Notifications</legend>
        <p>These are delivered via SMS to your mobile phone.</p><br></br>

        <div className="flex flex-col gap-4">
         <div>
         <input 
        type="radio" 
        id="notification1"
        name="pushNotifications"
        value='Everything'
        checked={formData.pushNotifications === 'Everything'}        
        onChange={changeHandler}></input>
        <label htmlFor="notification1" className="font-semibold">Everything</label><br></br> 
        </div>
        
        <div>
         <input 
        type="radio" 
        id="notification2"
        name="pushNotifications"
        value='Same as email'
        checked={formData.pushNotifications === 'Same as email'}        
        onChange={changeHandler}></input>
        <label htmlFor="notification2" className="font-semibold">Same as email</label><br></br> 
        </div>
        
        <div>
         <input 
        type="radio" 
        id="notification3"
        name="pushNotifications"
        value='No Push Notifications'
        checked={formData.pushNotifications === 'No Push Notifications'}
        onChange={changeHandler}></input>
        <label htmlFor="notification3" className="font-semibold">No Push Notifications</label><br></br> 
        </div> 
        </div>
        
        
      </fieldset>
      
      <br></br>
      <button type="submit"
      className="bg-blue-500 text-white font-bold px-6 py-2 rounded-md cursor-pointer hover:bg-blue-600">Save</button>
      <br></br>
      <br></br>
      </form>
                        
    </div>
  );
}

export default App;
