import './hero.css'

const Hero = () => {
  return (
    <div className='hero-main'>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="hero-content">
              <div className="hero-heading">
                <h2 className='p-0 m-0'>Where Every Journey</h2>
                <h4 className='p-0 m-0'>Become an Adventure</h4>
              </div>
              <div className="hero-img">
                <img src="https://themedox.com/demo/tourex/assets/img/hero/tu/avatar.png" alt="" />
                <a href="">35k Peoples Booked <br  /> Dream Place</a>
              </div>
              <div className="hero-btn">
                {/* <input type="text" placeholder='Search' /> */}
                  <button>View More</button>                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
