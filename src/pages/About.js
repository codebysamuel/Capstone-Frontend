import restaurantImg from '../../src/images/restaurant.jpg'
import restaurantChefImg from '../../src/images/restaurant chef B.jpg'
function About(){
    return (
       
        <div className="row">
            <div className="col-md-5 mt-3 mx-5 col-sm-12">
               <h1 className='about-heading primary-lemon'>Little Lemon</h1>
               <h2 className='about-subheading primary-dark'>Chicago</h2>
               <div className='about-para'>
               <p>
               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac molestie orci. Vestibulum sem erat, facilisis id rhoncus non, egestas ut risus. In in erat ante. Nunc in iaculis ante, nec efficitur purus. Nunc eros lorem, tristique et eros quis, maximus lobortis ligula. Mauris rutrum in leo et mattis. Nulla id condimentum metus. Morbi aliquet egestas ex vitae faucibus. Morbi suscipit mattis lacus, sed pretium odio sagittis nec. 
               </p>
               <p>
               Integer sed varius risus. Nam condimentum pretium felis vitae ornare. Morbi mollis, sem vitae venenatis sollicitudin, turpis lorem consequat eros, eget consequat nisl lacus sit amet purus. Praesent ac lobortis eros. Sed ex augue, mattis vel aliquam nec, malesuada in dui. Mauris enim ex, tincidunt et libero sed, eleifend scelerisque est. Nulla lobortis id tortor sit amet tincidunt. Nam dapibus dictum libero non dictum. 
               </p>
               <p>
               Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla a feugiat lectus. Proin eleifend eros at nisi laoreet molestie. Vestibulum pellentesque mollis felis, in egestas lorem suscipit vitae. Vestibulum egestas placerat malesuada. Vestibulum euismod tortor arcu, et aliquam orci cursus ac. Sed dictum id dolor eget scelerisque. Duis pharetra nibh diam, eu bibendum mauris interdum quis. 
               </p>
               </div>
              
            </div>
            <div className="col-md-6 mx-2 col-sm-12">
                <img src={restaurantImg} alt='restaurant image' className='about-img'/>
                <img src={restaurantChefImg} alt='restaurant chef' className='about-img'/>
            </div>
   
        </div>  
    )
}

export default About