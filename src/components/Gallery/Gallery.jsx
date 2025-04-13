import React from "react";
import "./gallery.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

const Gallery = () => {
    const images = [
        { id: 1, src: "banner.jpg", title: "Beautiful Landscape" },
        { id: 2, src: "banner.jpg", title: "Sunset View" },
        { id: 3, src: "banner.jpg", title: "Mountain Peaks" },
        { id: 4, src: "banner.jpg", title: "Ocean Waves" },
        { id: 5, src: "banner.jpg", title: "Serene Forest" },
        { id: 6, src: "banner.jpg", title: "City Skyline" },
        { id: 7, src: "banner.jpg", title: "City Skyline" },
        { id: 8, src: "banner.jpg", title: "City Skyline" },
        { id: 9, src: "banner.jpg", title: "City Skyline" },
        { id: 10, src: "banner.jpg", title: "City Skyline" },
        { id: 11, src: "banner.jpg", title: "City Skyline" },
        { id: 12, src: "banner.jpg", title: "City Skyline" },
        { id: 13, src: "banner.jpg", title: "City Skyline" },
        { id: 14, src: "banner.jpg", title: "City Skyline" },
        { id: 15, src: "banner.jpg", title: "City Skyline" },
        { id: 16, src: "banner.jpg", title: "City Skyline" },
        { id: 17, src: "banner.jpg", title: "City Skyline" },
        { id: 18, src: "banner.jpg", title: "City Skyline" },
        { id: 19, src: "banner.jpg", title: "City Skyline" },
        { id: 20, src: "banner.jpg", title: "City Skyline" },
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
