import React from 'react'
import { useGlobalContext } from '../AppContext'
const ConfirmPage = () => {
    const {msg} = useGlobalContext();
console.log('what is msg',msg)
  return (
    <div>
         <section className="container my-3">
         <h2>Reservation Confirmed</h2>
        <div className="container row pd my-3" style={{ width: "60%", margin: "0 auto", background: "#F4CE14", borderRadius: "15px" }}>
          <h6>{`${msg.line1}`}</h6>
          <h6>{`${msg.line2}`}</h6>
          <h6>{`${msg.line3}`}</h6>
        </div>
      </section>
    </div>
  )
}

export default ConfirmPage
