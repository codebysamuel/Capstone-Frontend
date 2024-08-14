import { useState } from 'react';
import { useGlobalContext } from '../AppContext'
import { Navigate, useNavigate } from 'react-router-dom';
import BookingForm from './BookingForm'

const Reservation = () => {
 
    const { setConfirm, msg, setMsg, availableTimes} = useGlobalContext();
    const navigate=useNavigate()
   return(
    <BookingForm/>
   )
}

export default Reservation
