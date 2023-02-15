import React from "react";
import { SwiperSlide } from "swiper/react";

const Card = ({ data, index }) => {
    return (
        // <SwiperSlide>
        <div
            key={index}
            className="group cursor-pointer duration-150 hover:scale-105"
        >
            <img
                src={data.img}
                className="aspect-video rounded-xl object-cover z-10"
            />
            {/* <div className="h-full w-full bg-amber-900 z-50 aspect-video rounded-xl relative" /> */}
        </div>
        // </SwiperSlide>
    );
};

export default Card;
