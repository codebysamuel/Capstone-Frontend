import { Link,NavLink } from "react-router-dom"
import LLLogo from "../images/logos/Logo.svg";
const style = {
    navActive: "nav-font px-3 nav-item nav-link nav-active",
    navNonActive: "nav-font px-3 nav-item nav-link hover",
  };
const Navbar=()=>{
    return(
        <nav className="navbar navbar-expand-sm">
  <div class="container">
    <Link to="/" className="logo">
  <img className="logo-height img-fluid" src={LLLogo} alt="Little Lemon Logo" />
  </Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="collapsibleNavbar">
      <ul class="navbar-nav mx-auto">
       
           <NavLink className={({ isActive }) => (isActive ? style.navActive : style.navNonActive)} to="/">
              HOME
            </NavLink>
            <NavLink className={({ isActive }) => (isActive ? style.navActive : style.navNonActive)} to="/about">
              ABOUT
            </NavLink>
            <NavLink className={({ isActive }) => (isActive ? style.navActive : style.navNonActive)} to="/menu">
              MENU
            </NavLink>
            <NavLink className={({ isActive }) => (isActive ? style.navActive : style.navNonActive)} to="/reserve">
RESERVATION            </NavLink>
      </ul>
    </div>
  </div>
</nav> 
    )
}

export default Navbar