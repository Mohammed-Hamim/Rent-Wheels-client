import React, { use } from "react";

import { Swiper, SwiperSlide } from "swiper/react";



// Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { A11y, Autoplay, Navigation, Pagination } from "swiper/modules";

// load data
const slideDataPromise = fetch('/sliderData.json').then(res => res.json());

const Slider = () => {
    const slideData = use(slideDataPromise) // data


    return (
        <div className="w-full h-auto  mx-auto">
            <Swiper
                style={{
                    '--swiper-pagination-color': '#00897B',
                }}
                modules={[Autoplay, Pagination
                    , Navigation, A11y]}
                spaceBetween={10}
                // navigation
                pagination={{ clickable: true }}
                autoplay={{ delay: 3000, disableOnInteraction: true }}
                loop={true}
                a11y={false}
            >
                {slideData.map((slide, idx) => (
                    <SwiperSlide slide={slide} key={idx}>
                        <section className="  text-gray-100  py-16 px-6 md:px-10 lg:px-14  flex flex-col-reverse md:flex-row items-center justify-between">
                            {/* Left Content */}
                            <div className="w-full md:w-1/2 space-y-6">
                                <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
                                    <span className="bg-gradient-to-r from-teal-400 to-teal-600 bg-clip-text text-transparent">
                                        {slide.title}
                                    </span>
                                </h1>
                                <p className="text-gray-400 text-lg max-w-md">
                                    {slide.description}
                                </p>

                                {/*  Button */}
                                <button className="custom-btn">
                                    {slide.buttonText}
                                </button>
                            </div>

                            {/* Right Image */}
                            <div className="w-full  md:w-1/2 flex justify-center mb-10 md:mb-0">
                                <img
                                    src={slide.image}
                                    alt="Car"
                                    className="w-full  h-[300px]    md:h-[400px] drop-shadow-2xl animate-float"
                                />
                            </div>
                        </section>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div >
    );
};

export default Slider;