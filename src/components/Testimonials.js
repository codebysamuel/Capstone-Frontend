import React from 'react'
import charles from '../images/users/charles.jpg'
import joshua from '../images/users/Joshua.jpg'
import teresa from '../images/users/Teresa.jpg' 
const Testimonials = () => {
  return (
    <>
     
 
<section className=" py-5 py-xl-8 testi">
  <div className="container">
    <div className="row justify-content-md-center">
      <div className="col-12 col-md-10 col-lg-8 col-xl-7 col-xxl-6">
        <h1 className=" primary-dark fs-4   mb-2 text-uppercase text-center">Happy Customers</h1>
        <p className="display-6 mb-2 mb-md-2 text-center">We deliver what we promise. See what customers are expressing about us.</p>
        <hr className="w-50 mx-auto mb-5 mb-xl-9 border-dark-subtle"/>
      </div>
    </div>
  </div>

  <div className="container overflow-hidden">
    <div className="row">
      <div className="col-12 col-md-4">
        <div className="card border-0 border-bottom border-primary shadow-sm">
          <div className="card-body p-4 p-xxl-5">
            <figure>
              <img className="img-fluid rounded rounded-circle mb-4 border border-5"
               loading="lazy" src={charles} alt="Luna John"/>
              <figcaption>
                <div className="bsb-ratings text-warning mb-3" data-bsb-star="5" data-bsb-star-off="0"></div>
                <blockquote className="bsb-blockquote-icon mb-4">
                The food was exceptional, with every dish bursting with flavor and beautifully presented.
                  </blockquote>
                <h4 className="mb-2">Charles Emanuel</h4>
                <h5 className="fs-6 text-secondary mb-0">Tourist</h5>
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
      <div className="col-12 col-md-4">
        <div className="card border-0 border-bottom border-primary shadow-sm">
          <div className="card-body p-4 p-xxl-5">
            <figure>
              <img className="img-fluid rounded rounded-circle mb-4 border border-5" loading="lazy"
               src={teresa} alt="Mark Smith"/>
              <figcaption>
                <div className="bsb-ratings text-warning mb-3" data-bsb-star="4" data-bsb-star-off="1"></div>
                <blockquote className="bsb-blockquote-icon mb-4">
                Outstanding service and a cozy ambiance made for an unforgettable dining experience.
                  </blockquote>
                <h4 className="mb-2">Teresa Salerno</h4>
                <h5 className="fs-6 text-secondary mb-0">Tourist</h5>
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
      <div className="col-12 col-md-4">
        <div className="card border-0 border-bottom border-primary shadow-sm">
          <div className="card-body p-4 p-xxl-5">
            <figure>
              <img className="img-fluid rounded rounded-circle mb-4 border border-5"
               loading="lazy" src={joshua} alt="Luke Reeves"/>
              <figcaption>
                <div className="bsb-ratings text-warning mb-3" data-bsb-star="5" data-bsb-star-off="0"></div>
                <blockquote className="bsb-blockquote-icon mb-4">
                From appetizers to dessert, each course was a culinary delight that left us eager to return.
                </blockquote>
                <h4 className="mb-2">Joshua Nicholson</h4>
                <h5 className="fs-6 text-secondary mb-0">Local</h5>
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
    </>
   
  )
}

export default Testimonials
