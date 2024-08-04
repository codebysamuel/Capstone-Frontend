import React from 'react'
import LLLogo from "../images/logos/Logo.svg";
import { Link,NavLink} from 'react-router-dom';
const style = {
    Active: "activefooter",
    nonActive: "nonactivefooter nav-item nav-link",
  };
const Footer = () => {
  return (
    <div className="pt-5">
    
    <footer className='pt-5'>
    <div className="row  justify-content-xl-between logo">
    <div className="col-12 col-md-4 col-lg-3 col-xl-2">
              <Link to="/" className="logo">
  <img className="logo-height" src={LLLogo} alt="Little Lemon Logo" />
  </Link>
      </div>
      <div className="col-12 col-md-4 col-lg-3 col-xl-2 touch">        <h4>Get in touch</h4>
        <p>123 Star Plaza AV, Erandel, Newerland</p>
      </div>
      <div className="col-12 col-md-4 col-lg-3 col-xl-2">       
       <ul className="navbar-nav mx-auto ">
       <NavLink className={({ isActive }) => (isActive ? style.Active : style.nonActive)} to="/">
              HOME
            </NavLink>
            <NavLink className={({ isActive }) => (isActive ? style.Active : style.nonActive)} to="/about">
              ABOUT
            </NavLink>
            <NavLink className={({ isActive }) => (isActive ? style.Active : style.nonActive)} to="/menu">
              MENU
            </NavLink>
            <NavLink className={({ isActive }) => (isActive ? style.Active : style.nonActive)} to="/reserve">
RESERVATION            </NavLink>
             
        </ul>
      </div>
      <div className="col-12 col-md-4 col-lg-3 col-xl-2 newsletter">         
     <h5> For latest offers subscribe to our newsletter</h5>
      <form action="#!">
              <div className="row gy-4">
                <div className="col-12">
                  <div className="input-group">
                    <span className="input-group-text" id="email-newsletter-addon">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-envelope" viewBox="0 0 16 16">
                        <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z" />
                      </svg>
                    </span>
                    <input type="email" 
                    class="form-control" id="email-newsletter" value="" placeholder="Email Address" aria-label="email-newsletter" aria-describedby="email-newsletter-addon" required/>
                  </div>
                </div>
                <div className="col-12">
                  <div className="d-grid">
                    <button className="btn btn-sub" type="submit">Subscribe</button>
                  </div>
                </div>
              </div>
            </form>
      </div>
    </div>
    <div className="row gy-4 gy-md-0 social">
    <div class="col-xs-12 col-md-7 order-1 order-md-0 mt-3">
          <div class="copyright text-center align-items-center">
            &copy; 2024. All Rights Reserved
          </div>
          </div>
          <div class="col-xs-12 col-md-5 order-0 order-md-1 mt-3">
          <ul class="list-unstyled m-0 p-0 d-flex justify-content-center">
            <li>Facebook</li>
            <li>Instagram</li>
            <li>Twitter</li>
            </ul>
        </div>
    </div>
    </footer>
    
    </div>
   
  )
}

export default Footer
