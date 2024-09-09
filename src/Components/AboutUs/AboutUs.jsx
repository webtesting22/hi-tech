import React from "react";
import "./AboutUs.css";
import AboutImage from "/images/Image.png";
import Card from "/images/card.png";
import card2 from "/images/card2.png";
import { Swiper, SwiperSlide } from 'swiper/react';
// import required modules
import { Autoplay } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
const AboutUs = () => {
    return (
        <>
            <div id="MainHomePagestyle">
                <div className="about-section">
                    <div className="AnimatedHeaderingText">
                        <h1 className="aboutHeading">
                            <div className="AdjustContainer">
                                <span>WE ARE </span> <span>HI-TECH</span>
                                <div className="SwiperSliderContainer">
                                    <Swiper
                                        direction={'vertical'}
                                        className="mySwiper"
                                        style={{ height: "80px" }}
                                        autoplay={{
                                            delay: 1000,
                                            disableOnInteraction: false,
                                        }}
                                        modules={[Autoplay]}
                                    >
                                        <SwiperSlide><img src="https://images.unsplash.com/photo-1468500428914-59a49bceb33c?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" /></SwiperSlide>
                                        <SwiperSlide><img src="https://plus.unsplash.com/premium_photo-1671808062726-2a7ffcd6109e?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" /></SwiperSlide>
                                        <SwiperSlide><img src="https://images.unsplash.com/photo-1693639049292-0f9ec9c287d4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" /></SwiperSlide>
                                        <SwiperSlide><img src="https://images.unsplash.com/photo-1694521787673-28cbd8830ea5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" /></SwiperSlide>
                                        <SwiperSlide><img src="https://images.unsplash.com/photo-1694521787673-28cbd8830ea5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" /></SwiperSlide>

                                    </Swiper>
                                </div>
                            </div>
                            <span>YOUR PARTNER IN ICONIC STRUCTURES. EXCELLENCE IN EVERY BRICK.</span>
                        </h1>
                    </div>
                </div>
            </div>
        </>
    )
}
export default AboutUs;