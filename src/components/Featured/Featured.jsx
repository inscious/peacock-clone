import React, { useRef } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import featuredImages from "./data";
import "./swiper.styles.scss";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import styles from "swiper/css/pagination";

const Featured = () => {
    const swiperNavPrevRef = useRef(null);
    const swiperNavNextRef = useRef(null);
    return (
        <div className={styles.container}>
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                navigation={{
                    prevEl: swiperNavPrevRef.current,
                    nextEl: swiperNavNextRef.current,
                }}
                pagination={true}
                slidesPerView={1}
                loop={true}
                autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                }}
                className={styles.mySwiper}
                onInit={(swiper) => {
                    swiper.params.navigation.prevEl = swiperNavPrevRef.current;
                    swiper.params.navigation.nextEl = swiperNavNextRef.current;
                    swiper.navigation.init();
                    swiper.navigation.update();
                }}
            >
                {featuredImages.map((data) => {
                    return (
                        <SwiperSlide className={styles.swiperSlide}>
                            <img src={data.image} className="w-full"></img>
                        </SwiperSlide>
                    );
                })}
                <div className="top-0 z-20 hidden md:flex">
                    <div
                        ref={swiperNavPrevRef}
                        className="flex items-center w-12 h-12 justify-center rounded-full overflow-hidden backdrop-blur-md bg-[#101010]/50 cursor-pointer mx-2 absolute z-20 bottom-1/2 group"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6 stroke-white group-hover:stroke-yellow-400"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M15 19l-7-7 7-7"
                            />
                        </svg>
                    </div>
                    <div
                        ref={swiperNavNextRef}
                        className="flex items-center w-12 h-12 justify-center rounded-full overflow-hidden backdrop-blur-md bg-[#101010]/50 cursor-pointer mx-2 absolute z-20 bottom-1/2 right-0 group"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6 stroke-white group-hover:stroke-yellow-400"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M9 5l7 7-7 7"
                            />
                        </svg>
                    </div>
                </div>
            </Swiper>
        </div>
    );
};

export default Featured;
