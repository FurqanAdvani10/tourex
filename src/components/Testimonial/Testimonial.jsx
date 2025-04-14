import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import './testimonial.css';
import { EffectCoverflow, Pagination, Autoplay } from 'swiper/modules';

const Testimonials = () => {
 
  const testimonialData = [
    {
      avatar: "https://static.vecteezy.com/system/resources/previews/024/183/525/non_2x/avatar-of-a-man-portrait-of-a-young-guy-illustration-of-male-character-in-modern-color-style-vector.jpg", // Male avatar
      name: "Ali Raza",
      review: "TravelNMemories made our Swat trip unforgettable! Everything was well-organized and hassle-free. Highly recommended!",
    },
    {
      avatar: "https://t3.ftcdn.net/jpg/06/17/13/26/360_F_617132669_YptvM7fIuczaUbYYpMe3VTLimwZwzlWf.jpg", // Female avatar
      name: "Ayesha Khan",
      review: "Had a fantastic experience in Murree with TravelNMemories! Everything from transport to accommodation was top-notch.",
    },
    {
      avatar: "https://static.vecteezy.com/system/resources/previews/024/183/525/non_2x/avatar-of-a-man-portrait-of-a-young-guy-illustration-of-male-character-in-modern-color-style-vector.jpg", // Male avatar
      name: "Hamza Yousuf",
      review: "Went on a family tour to Hunza. TravelNMemories handled everything professionally. It was safe, smooth, and scenic!",
    },
    {
      avatar: "https://t3.ftcdn.net/jpg/06/17/13/26/360_F_617132669_YptvM7fIuczaUbYYpMe3VTLimwZwzlWf.jpg", // Female avatar
      name: "Fatima Zahra",
      review: "This was my first solo trip, and I felt so comfortable and secure with TravelNMemories. Everything was perfectly arranged!",
    },
    {
      avatar: "https://static.vecteezy.com/system/resources/previews/024/183/525/non_2x/avatar-of-a-man-portrait-of-a-young-guy-illustration-of-male-character-in-modern-color-style-vector.jpg", // Male avatar
      name: "Usman Tariq",
      review: "From Lahore to Skardu, every moment was amazing. Clean transport, friendly staff, and breathtaking views. Loved it!",
    },
  ];

  return (
    <div className="testimonial section-padding">
      <div className="container">
        <div className="row">
          <div className="col-md-12 col-sm-12 col-lg-12 col-xl-12">
            <div className="heading-with-sub text-center">
              <h5 className="p-0 m-0">Testimonial</h5>
              <h2 className="p-0 m-0">Our Clients Reviews</h2>
            </div>
          </div>
        </div>


        <div className="swiper-container-main">
          <div className="row">
            <div className="col-md-12 col-sm-12 col-lg-12 col-xl-12">
              <div className="swiper-container">
                <Swiper
                  modules={[EffectCoverflow, Pagination, Autoplay]}
                  grabCursor={true}
                  centeredSlides={true}
                  slidesPerView={2.3}
                  loop={true}
                  spaceBetween={30}
                  effect="coverflow"
                  coverflowEffect={{
                    rotate: 0,
                    depth: 800,
                    slideShadows: true,
                  }}
                  pagination={{ clickable: true }}
                  autoplay={{ delay: 2000 }}
                  breakpoints={{
                    300: { slidesPerView: 1 },
                    501: { slidesPerView: 2 },
                    724: { slidesPerView: 2.3 },
                  }}
                >
                  {testimonialData.map((item, index) => (
                    <SwiperSlide key={index} className="swiper-slide">
                      <div className="ImgHolder">
                        <img src={item.avatar} alt={item.name} />
                      </div>
                      <div className="ContentHolder">
                        <h3>{item.name}</h3>
                        <p>{item.review}</p>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>


  );
};

export default Testimonials;
