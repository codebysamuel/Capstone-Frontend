import React from 'react'
import { useGlobalContext } from '../AppContext'
import { Link } from 'react-router-dom';

const ConfirmPage = () => {
    const {msg} = useGlobalContext();
   
 console.log('what is msg:',msg)
  return (
    <div>
         <section className="container my-3">
     
         <div className="container row pd my-3" 
        style={{ width: "60%", height:"30vh", margin: "0 auto", background: "#F4CE14", borderRadius: "15px" }}>
        {
          msg.line1 ? (
            <>
            
            <h2 className='mt-2'>Reservation Confirmed</h2>
          <h6>{`${msg.line1}`}</h6>
          <h6>{`${msg.line2}`}</h6>
          <h6>{`${msg.line3}`}</h6>
      
            </>
          ):<>
          <div className='row'>
          <h4 className='mt-4'> Please reserve a table first!</h4>

          </div>
          <div className='row'>
          <div className='col'></div>
          <div className='col'>
          <Link to="/reserve" className='btn btn-lg btn-confirm'>Reserve</Link>
          </div>
          <div className='col'></div>
          </div>
         
         
          
          </>
        }
        
         </div>
         
      </section>
    </div>
  )
}

export default ConfirmPage
