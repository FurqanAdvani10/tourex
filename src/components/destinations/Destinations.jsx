import React from 'react';
import './destinations.css';
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Autoplay } from 'swiper/modules';
import { data } from './destinationsData';
import { useNavigate } from 'react-router-dom';

const Destinations = () => {
  const navigate = useNavigate();
  const images = import.meta.glob('../../assets/*', { eager: true });

  return (
    <section id='explore' className='destination-main section-padding'>
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center mb-4">
            <div className="heading-with-sub text-center">
              <h5 className='m-0 p-0'>Best Places Near You</h5>
              <h2 className='m-0 p-0'>Explore Top Destinations</h2>
            </div>
          </div>
        </div>

        <div className="row mt-20">
          <div className="col-md-12">
            <Swiper
              slidesPerView={4}
              spaceBetween={30}
              modules={[EffectCoverflow, Pagination, Autoplay]}
              coverflowEffect={{ rotate: 0, depth: 800, slideShadows: true }}
              pagination={{ clickable: true }}
              autoplay={{ delay: 2500 }}
              breakpoints={{
                0: { slidesPerView: 1 },
                500: { slidesPerView: 2 },
                768: { slidesPerView: 3 },
                1024: { slidesPerView: 4 },
              }}
              loop={true}
              className="mySwiper"
            >
              {data.map(item => (
                <SwiperSlide key={item.id}>
                  <div className="sild-container">
                    <div
                      className="item-box"
                      style={{
                        backgroundImage: `url(${images[`../../assets/${item.image}`]?.default})`
                      }}
                      onClick={() => navigate('/packages')}
                    >
                      <div className="item-content">
                        <h3>{item.title}</h3>
                        <h5>{item.subTitle}</h5>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Destinations;
