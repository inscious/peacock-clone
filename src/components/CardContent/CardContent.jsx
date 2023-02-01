import React, { useRef, useState, useEffect } from "react";
import { CardsContainer } from "./styles";

// swiper imports
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";

import peacockPicks from "../../assets/cardContent/peacockPicks";

const CardContent = () => {
    return (
        <CardsContainer>
            <Swiper modules={Navigation} slidesPerView={3} spaceBetween={30}>
                <div className="w-full">
                    <SwiperSlide className=""></SwiperSlide>
                </div>
            </Swiper>
        </CardsContainer>
    );
};

export default CardContent;
