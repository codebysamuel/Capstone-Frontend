import { Link } from "react-router-dom"
import ImageData from '../images/menu/ImageData'
function Menu(){
  console.log('what is ImageData',ImageData[0])
    return (
        <div className="container">
      <h1>Our Menu</h1>
      <hr/> 
      <div className="row">
        <h3>Appetizers</h3>
        <div className="col-lg-3 col-md-6  col-sm-12 img-holder">
        <img src={ImageData[0]} width="100%" className="menu"/>

        </div>
        <div className="col-lg-3 col-md-6 col-sm-12 img-holder">
        <img src={ImageData[1]} width="100%" className="menu"/>

        </div>
        <div className="col-lg-3 col-md-6 col-sm-12 img-holder">
        <img src={ImageData[2]} width="100%" className="menu"/>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-12 img-holder">
       <Link className="px-5"> <h3>More...</h3></Link>
        </div>
      </div>
      <div className="row">
        <h3>Main Dishes</h3>
        <div className="col-lg-3 col-md-6  col-sm-12 img-holder">
        <img src={ImageData[3]} width="100%" className="menu"/>

        </div>
        <div className="col-lg-3 col-md-6  col-sm-12 img-holder">
        <img src={ImageData[4]} width="100%" className="menu"/>

        </div>
        <div className="col-lg-3 col-md-6  col-sm-12 img-holder">
        <img src={ImageData[5]} width="100%" className="menu"/>
        </div>
        <div className="col-lg-3 col-md-6  col-sm-12 img-holder">
        <Link className="px-5"> <h3>More...</h3></Link>
        </div>
      </div>
      <div className="row">
        <h3>Desserts</h3>
        <div className="col-lg-3 col-md-6  col-sm-12 img-holder">
        <img src={ImageData[6]} width="100%" className="menu"/>

        </div>
        <div className="col-lg-3 col-md-6  col-sm-12 img-holder">
        <img src={ImageData[7]} width="100%" className="menu"/>

        </div>
        <div className="col-lg-3 col-md-6  col-sm-12 img-holder">
        <img src={ImageData[8]} width="100%" className="menu"/>

        </div>
        <div className="col-lg-3 col-md-6  col-sm-12 img-holder">
        <Link className="px-5"> <h3>More...</h3></Link>
        </div>
      </div>
        </div>
    )
}

export default Menu