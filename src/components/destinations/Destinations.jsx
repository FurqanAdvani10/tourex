import React, { useState } from 'react';
import './destinations.css';
import 'swiper/css';
// import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Autoplay } from 'swiper/modules';
import { data } from './destinationsData';
import { useNavigate } from 'react-router-dom';
// import one from '../../assets/one.jpg'

const Destinations = () => {
  const navigate = useNavigate(); // Add this inside the component


  const images = import.meta.glob('../../assets/*', { eager: true });

  return (
    <div id='explore' className='destination-main section-padding' >
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="heading-with-sub">
              <h5 className='p-0 m-0'>Best Places near you</h5>
              <h2 className='p-0 m-0'>Explore Top Destinations</h2>
            </div>
          </div>
        </div>

        <div className="row mt-30">
          <div className="col-md-12">
            <Swiper
              slidesPerView={4}
              spaceBetween={30}
              modules={[EffectCoverflow, Pagination, Autoplay]}
              coverflowEffect={{
                rotate: 0,
                depth: 800,
                slideShadows: true,
              }}
              pagination={{ clickable: true }}
              autoplay={{ delay: 2000 }}
              breakpoints={{
                0: { slidesPerView: 1 },       // Mobile (up to 500px)
                600: { slidesPerView: 1 },       // Mobile (up to 500px)
                800: { slidesPerView: 1 },       // Mobile (up to 500px)
                500: { slidesPerView: 2 },     // Small tablets
                768: { slidesPerView: 3 },     // Tablets
                1024: { slidesPerView: 4 },    // Desktop
              }}
              loop={true}
              className="mySwiper"
            >
            {data.map(item => {
              return (
                <SwiperSlide key={item.id}>
                  <div className="sild-container"
                  >
                    <div className="item-box"
                      style={{ backgroundImage: `url(${images[`../../assets/${item?.image}`]?.default})`, objectFit: "contain" }}
                      onClick={() => navigate('/packages')}
                   >
                      <div className="item-content">
                        <h3>{item.title}</h3>
                        <h5>{item.subTitle}</h5>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </div>
    </div >
  );
};

export default Destinations;
