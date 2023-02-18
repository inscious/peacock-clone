import React from "react";
import { Container } from "./styled";
import Card from "./Card";

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
    onlyOnPeacock,
} from "../../assets/cardContent/cardsData";

const CardContent = () => {
    return (
        <Container>
            <div id="main-wrapper">
                <section>

                    {/* My Stuff */}
                    <>
                        <div className="content-wrapper">
                            <div className="title-wrapper">
                                <h3 className="section-title">My Stuff</h3>
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
                        </div>
                    </>

                    {/* Peacock Picks */}
                    <>
                        <div className="content-wrapper">
                            <div className="title-wrapper">
                                <h3 className="section-title">Peacock Picks</h3>
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
                        </div>
                    </>

                    {/* For Rou */}
                    <>
                        <div className="content-wrapper">
                            <div className="title-wrapper">
                                <h3 className="section-title">For You</h3>
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
                        </div>
                    </>

                    {/* Just Added */}
                    <>
                        <div className="content-wrapper">
                            <div className="title-wrapper">
                                <h3 className="section-title">Just Added</h3>
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
                        </div>
                    </>

                    {/* Only on peacock */}
                    <>
                        <div className="content-wrapper">
                            <div className="title-wrapper">
                                <h3 className="section-title">
                                    Only on Peacock
                                </h3>
                            </div>

                            <Swiper
                                modules={Navigation}
                                slidesPerView={4.5}
                                spaceBetween={15}
                            >
                                {onlyOnPeacock.map((data, index) => {
                                    return (
                                        <SwiperSlide key={index}>
                                            <Card data={data} />
                                        </SwiperSlide>
                                    );
                                })}
                            </Swiper>
                        </div>
                    </>

                </section>
            </div>
        </Container>
    );
};

export default CardContent;
