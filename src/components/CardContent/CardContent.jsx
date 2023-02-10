import React, { useRef, useState, useEffect } from "react";
import { CardsContainer, SliderContainer } from "./styles";

// swiper imports
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";

import peacockPicks from "../../assets/cardContent/peacockPicks";

// max-w-[94%] lg:max-w-[95%] xl:max-w-[91%]

const CardContent = () => {
    return (
        // <CardsContainer>
        <div className="relative bottom-12 z-50 mx-auto flex h-full w-full  bg-purple-600 duration-100 pt-8 px-6 xl:px-16 lg:px-8">
            <section className="bg-red-500 w-full">
                <h3 className="z-50 text-white">My Stuff</h3>
                {/* <SliderContainer>
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
                                        className="contentSlider__content group duration-150 hover:scale-105"
                                    >
                                        <img
                                            src={data.img}
                                            className="rounded-xl object-cover"
                                        />
                                    </div>
                                </SwiperSlide>
                            );
                        })}
                    </Swiper>
                </SliderContainer> */}
            </section>
        </div>
        // </CardsContainer>
    );
};

export default CardContent;
