import React from 'react'
import './explore.css'
import thunb_1 from '../../assets/about-thumb-1.jpg'
import thunb_2 from '../../assets/about-thumb-2.jpg'
import thunb_3 from '../../assets/about-thumb-3.jpg'
import circle from '../../assets/circle-text.png'

const Explore = () => {
  return (
    <div className='explore-main  justify-content-center align-items-center section-padding'>
      <div className="container">
        <div className="row  justify-content-center align-items-center">
          <div className="col-md-7">
            <div className="explore-img-container">
              <div className="thumb-1-container">
                <div className="thumb-1 ">
                  <img src={thunb_1} alt="" />
                </div>
                <div className="thumb-2 circle">
                  <img src={circle} alt="" />
                </div>
              </div>
              <div className="thumb-2-container">
                <div className="thumb-3">
                  <img src={thunb_2} alt="" />
                </div>
                <div className="thumb-4">
                  <img src={thunb_3} alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-5">
            <div className="explore-content">
              <div className="heading-with-sub">
                <h5>Explore the world with us</h5>
                <h2>The perfect vacation come true with our Travel Agency</h2>
                <p>when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries but also the leap into electronic typesetting</p>
                <p>remaining essentially unchanged..</p>
              </div>
              <button>BOOK YOUR TOUR</button>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Explore
