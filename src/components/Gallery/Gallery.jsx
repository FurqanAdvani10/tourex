import React from "react";
import "./gallery.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

const Gallery = () => {
    const images = [
        { id: 1, src: "destination/galary1.jpg", title: "Beautiful Landscape" },
        { id: 2, src: "destination/galary2.jpg", title: "Sunset View" },
        { id: 3, src: "destination/galary3.jpg", title: "Mountain Peaks" },
        { id: 4, src: "destination/galary4.jpg", title: "Ocean Waves" },
        { id: 5, src: "destination/galary5.jpg", title: "Serene Forest" },
        { id: 6, src: "destination/galary6.jpg", title: "City Skyline" },
        { id: 7, src: "destination/galary7.jpg", title: "City Skyline" },
        { id: 8, src: "destination/galary8.jpg", title: "City Skyline" },
        { id: 9, src: "destination/galary9.jpg", title: "City Skyline" },
        { id: 10, src: "destination/galary10.jpg", title: "City Skyline" },
        { id: 11, src: "destination/galary11.jpg", title: "City Skyline" },
        { id: 12, src: "destination/galary12.jpg", title: "City Skyline" },
        { id: 13, src: "destination/galary13.jpg", title: "City Skyline" },
        { id: 14, src: "destination/galary14.jpg", title: "City Skyline" },
        { id: 15, src: "destination/galary15.jpg", title: "City Skyline" },
        { id: 16, src: "destination/galary16.jpg", title: "City Skyline" },
        { id: 17, src: "destination/galary17.jpg", title: "City Skyline" },
        { id: 18, src: "destination/galary18.jpg", title: "City Skyline" },
        { id: 19, src: "destination/galary19.jpg", title: "City Skyline" },
    ];



    const getImg = (path) => {
        const images = import.meta.glob('../../assets/**/*', { eager: true });

        if (!path) return "";
        return images[`../../assets/${path}`]?.default || "";
    };

    return (
        <div className="gallery-slider-container">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h2 className="gallery-title">Image Gallery</h2>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12">
                    <Swiper
                        modules={[Navigation, Pagination, Autoplay]}
                        navigation
                        pagination={{ clickable: true }}
                        autoplay={{ delay: 3000 }}
                        loop={true}
                        spaceBetween={30}
                        slidesPerView={1}
                        breakpoints={{
                            640: {
                                slidesPerView: 3,
                                spaceBetween: 20,
                            },
                            1024: {
                                slidesPerView: 4,
                                spaceBetween: 30,
                            },
                        }}
                    >
                        {images.map((image) => (
                            <SwiperSlide key={image.id}>
                                <div className="gallery-item">
                                    <img
                                        src={getImg(image.src)}
                                        alt={image.title}
                                        className="gallery-image"
                                    />

                                    <div className="gallery-overlay">
                                        {/* <h3>{image.title}</h3> */}
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>

        </div>
    );
};

export default Gallery;
