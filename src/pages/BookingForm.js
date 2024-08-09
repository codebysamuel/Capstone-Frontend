import { useState } from 'react';
import { useGlobalContext } from '../AppContext'
import { Navigate, useNavigate } from 'react-router-dom';
function BookingForm(){
    const { setConfirm, msg, setMsg, availableTimes} = useGlobalContext();
    const navigate=useNavigate()
  const [user,setUser]=useState({
    firstName:"",
    lastName:"",
    email:""
  });
  const [date,setDate]=useState();
  const [time,setTime]=useState();
  const [guests,setGuests]=useState(2)
  const[occassion,setOccassion]=useState()

  const handleUser=(e)=>{
if(e.target.name==='fname'){
  setUser({...user,firstName:e.target.value})
}else if(e.target.name==='lname'){
  setUser({...user,lastName:e.target.value})
}else if(e.target.name==='email'){
  setUser({...user,email:e.target.value})
}
  }

 

  const handleGuests=(e)=>{
const num=Number(e.target.value)
if(num<1){
  setGuests(1)
}else if(num>20){
  setGuests(20)
}else{
  setGuests(num)
}
  }

 

  const handleSubmit=(e)=>{
e.preventDefault()
console.log(user.firstName,user.lastName,guests,date,time,occassion)
setMsg({
  ...msg,
  line1: `Dear ${user.firstName} ${user.lastName}:`,
  line2: `Your table for party of ${guests} is reserved for ${date} at ${time}.`,
  line3: `We will see you soon for the ${occassion} event!`,
});
setConfirm(true)
  }
    return (
        <div className="container pt-5">
        <div className="row">
            <h1>Reserve A Table</h1>
            <div className="row">
            <form onSubmit={handleSubmit}>
  <div class="row">
    <div class="col">
        <label for="fname">First Name:</label>
      <input type="text" class="form-control" 
      value={user.firstName}
      onChange={handleUser}
      placeholder="Enter first name" name="fname"
      required
      />
    </div>
    <div class="col">
    <label for="lname">Last Name:</label>
      <input type="text" class="form-control"
      value={user.lastName}
      onChange={handleUser}
      placeholder="Enter last name" name="lname" required/>
    </div>
    <div class="col">
    <label for="email">email:</label>
      <input type="email" class="form-control"
      value={user.email}
      onChange={handleUser}
      placeholder="Enter email" name="email" required/>
    </div>
  </div>


  {/* date and time */}
  <div class="row">
    <div class="col">
        <label for="date">Date:</label>
      <input type="date" class="form-control"  
      value={date}
      onChange={(e)=>setDate(e.target.value)}
      name="date"/>
    </div>
    <div class="col">
    <label for="time">Time:</label>
   <select name='date' id='date' className='' value={time} onChange={(e)=>setTime(e.target.value)}>
    <option>
      select time
    </option>
    {availableTimes.map((element,i)=>{
      return(
        <option key={i} value={element}>
          {element}
        </option>
      )
    })}
   </select>
    </div>
    
  </div>

  {/* guests and occassion */}
  <div class="row">
    <div class="col">
        <label for="guests">No. Of Guests:</label>
      <input type="number"
      value={guests} onChange={handleGuests}
      class="form-control" placeholder="2" name="guests"/>
    </div>
    <div class="col">
    <label for="occassion">occassion:</label>
     <select name="date" id="date" value={occassion} onChange={(e)=>setOccassion(e.target.value)}>
      <option defaultValue hidden>
        Select Occassion
      </option>
      <option value="birthday">Birthday</option>
      <option value="engagement">Engagement</option>
      <option value="anniversary">Anniversary</option>
      <option value="Other">Other</option>

     </select>
    </div>
 
  </div>

  <div className="row">
    <div className="col">

    </div>
    <div className="col">
    <button className="btn btn-primary btn-lg" onClick={()=>navigate("/confirm")}> Confirm Reservation</button>

        </div>
    <div className="col">
        
        </div>
  </div>
</form> 
            </div>
        </div>
        </div>
    )
}

export default BookingForm