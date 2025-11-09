
import React, { use } from "react";

import { Swiper, SwiperSlide } from "swiper/react";



// Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { A11y, Autoplay, Navigation, Pagination } from "swiper/modules";

// load data
const slideDataPromise = fetch('http://localhost:3000/slide_data').then(res => res.json());




const Slider = () => {
    const slideData = use(slideDataPromise) // data

    return (
        <div className="w-full mx-auto">
            <Swiper
                style={{
                    '--swiper-navigation-color': '#85A947',
                    '--swiper-pagination-color': '#85A947',

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
                    <SwiperSlide key={idx}>
                        <div className="min-h-100 p-4 md:min-h-screen w-full bg-center bg-no-repeat bg-cover   rounded-b-md relative flex flex-col justify-center items-center"
                            style={{
                                backgroundImage: `linear-gradient(to top, 
                         black, rgba(255,255,255,0.1)),url(${slide.image})`
                            }} >
                            {/* overlay */}
                            <div className="text-center  space-y-5 
                                
                             ">
                                 
                                <h2 className="text-white text-xl md:text-4xl font-semibold tracking-wider
">{slide.title}</h2>
                                <p className="text-pink-100 text-sm md:text-xl font-semibold">{slide.description}</p>
                                <button className="btn text-white btn-outline border-primary border-2 px-6 font-semibold tracking-wider">{slide.buttonText}</button>
                            </div>
                        </div>

                    </SwiperSlide>
                ))}

            </Swiper>
        </div >
    );
};

export default Slider;