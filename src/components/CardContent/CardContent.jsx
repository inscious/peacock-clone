import React, { useRef, useState, useEffect } from "react";
import { CardsContainer, SliderContainer } from "./styles";

// swiper imports
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";

import peacockPicks from "../../assets/cardContent/peacockPicks";

const CardContent = () => {
    return (
        <CardsContainer>
            <section className="contentSlider">
                <h3 className="z-50 text-white">My Stuff</h3>
                <SliderContainer>
                    <Swiper
                        modules={Navigation}
                        slidesPerView={4}
                        spaceBetween={15}
                    >
                        {peacockPicks.map((data, index) => {
                            return (
                                <SwiperSlide>
                                    <div
                                        key={index}
                                        className="contentSlider__content"
                                    >
                                        <img src={data.img} className="" />
                                    </div>
                                </SwiperSlide>
                            );
                        })}
                    </Swiper>
                </SliderContainer>
            </section>
        </CardsContainer>
    );
};

export default CardContent;
