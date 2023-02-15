import React from "react";
import Card from "./Card";
import { Container } from "./styled";

// swiper imports
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";

import {
    myStuff,
    peacockPicks,
    forYou,
    justAdded,
} from "../../assets/cardContent/cardsData";

// max-w-[94%] lg:max-w-[95%] xl:max-w-[91%]
// lg:px-8 xl:px-16 px-6

const CardContent = () => {
    return (
        // <CardsContainer>
        <div className="bg-purple-00/50 relative bottom-[] z-30 mx-auto flex h-full w-full pt-8 duration-100">
            <section className="bg-red-00 flex w-full flex-col">
                {/* <SliderContainer className="bg-slate-00"> */}
                <Container>
                    {/* My Stuff */}
                    <>
                        <div className="bg-slate-00 px-5 duration-150 md:px-8 xl:px-16">
                            <h3 className="mb- z-30 whitespace-nowrap text-white duration-150 lg:text-xl">
                                My Stuff
                            </h3>
                        </div>
                        <Swiper
                            modules={Navigation}
                            slidesPerView={4.5}
                            spaceBetween={15}
                        >
                            {myStuff.map((data, index) => {
                                return (
                                    <SwiperSlide key={index}>
                                        <Card data={data} />
                                    </SwiperSlide>
                                );
                            })}
                        </Swiper>
                    </>
                    {/* Peacock Picks */}
                    <>
                        <div className="bg-slate-00 mt-5 px-5 duration-150 md:px-8 xl:px-16">
                            <h3 className="mb- z-30 whitespace-nowrap text-white duration-150 lg:text-xl">
                                Peacock Picks
                            </h3>
                        </div>
                        <Swiper
                            modules={Navigation}
                            slidesPerView={4.5}
                            spaceBetween={15}
                        >
                            {peacockPicks.map((data, index) => {
                                return (
                                    <SwiperSlide key={index}>
                                        <Card data={data} />
                                    </SwiperSlide>
                                );
                            })}
                        </Swiper>
                    </>
                    <>
                        <div className="bg-slate-00 mt-5 px-5 duration-150 md:px-8 xl:px-16">
                            <h3 className="mb- z-30 whitespace-nowrap text-white duration-150 lg:text-xl">
                                Peacock Picks
                            </h3>
                        </div>
                        <Swiper
                            modules={Navigation}
                            slidesPerView={4.5}
                            spaceBetween={15}
                        >
                            {forYou.map((data, index) => {
                                return (
                                    <SwiperSlide key={index}>
                                        <Card data={data} />
                                    </SwiperSlide>
                                );
                            })}
                        </Swiper>
                    </>
                    {/* Just Added */}
                    <>
                        <div className="bg-slate-00 mt-5 px-5 duration-150 md:px-8 xl:px-16">
                            <h3 className="mb- z-30 whitespace-nowrap text-white duration-150 lg:text-xl">
                                Just Added
                            </h3>
                        </div>
                        <Swiper
                            modules={Navigation}
                            slidesPerView={4.5}
                            spaceBetween={15}
                        >
                            {justAdded.map((data, index) => {
                                return (
                                    <SwiperSlide key={index}>
                                        <Card data={data} />
                                    </SwiperSlide>
                                );
                            })}
                        </Swiper>
                    </>
                </Container>
                {/* </SliderContainer> */}
            </section>
        </div>
        // </CardsContainer>
    );
};

export default CardContent;
