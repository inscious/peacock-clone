import React, { useRef } from "react";


// swiper imports
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "./swiper.styles.scss";
import NavigationArrows from "./NavigationArrows";
// import MockPagination from "./MockPagination";
import FeaturedSlide from "./FeaturedSlide";

// mock data
import featuredImages from "./data";

const Featured = () => {
    const swiperNavPrevRef = useRef(null);
    const swiperNavNextRef = useRef(null);
    return (
        <div className="">
            <Swiper
                modules={[Navigation, Autoplay, Pagination]}
                navigation={{
                    prevEl: swiperNavPrevRef.current,
                    nextEl: swiperNavNextRef.current,
                }}
                pagination={{ clickable: true }}
                slidesPerView={1}
                loop={true}
                autoplay={{
                    delay: 4800,
                    disableOnInteraction: false,
                }}
                onInit={(swiper) => {
                    swiper.params.navigation.prevEl = swiperNavPrevRef.current;
                    swiper.params.navigation.nextEl = swiperNavNextRef.current;
                    swiper.navigation.init();
                    swiper.navigation.update();
                }}
            >
                {featuredImages.map((data) => {
                    return (
                        <SwiperSlide className="bg-gradient-to-t from-black">
                            <FeaturedSlide data={data} />
                        </SwiperSlide>
                    );
                })}
                {/* NAVIGATION ARROWS */}
                <NavigationArrows
                    swiperNavPrevRef={swiperNavPrevRef}
                    swiperNavNextRef={swiperNavNextRef}
                />
            </Swiper>
            {/* <MockPagination /> */}
        </div>
    );
};

export default Featured;
