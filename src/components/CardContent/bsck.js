import React, { useRef } from "react";

// swiper imports
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";

const CardContentBackup = () => {
    return (
        <div className="bg-slate-40 w- relative left-5 bottom-6 h-96 ">
            <div className="flex flex-row">
                <p className="text-white">Peacock Picks</p>
            </div>
            <Swiper modules={Navigation} slidesPerView={3} spaceBetween={30}>
                <div className="w-full">
                    <SwiperSlide className="!aspect-video">
                        <div
                            className="aspect-video max-h-[14rem] min-h-[9rem] overflow-hidden rounded-xl"
                            style={{
                                backgroundImage: `url("https://imageservice.disco.peacocktv.com/uuid/1e9baed1-661a-3d3b-8737-53d343e2fb2e/LAND_16_9/1280?language=eng&territory=US&proposition=NBCUOTT&version=e757f4c1-f205-35db-80e3-05c68161c625")`,
                                backgroundPosition: "center",
                                backgroundSize: "cover",
                                backgroundRepeat: "no-repeat",
                            }}
                        >
                            {/* <a href="/">
                                <div className="bg-whit aspect-video min-h-[9rem] max-h-[14rem] rounded-xl overflow-hidden">
                                    <img
                                        className="aspect-video"
                                        src="https://imageservice.disco.peacocktv.com/uuid/1e9baed1-661a-3d3b-8737-53d343e2fb2e/LAND_16_9/1280?language=eng&territory=US&proposition=NBCUOTT&version=e757f4c1-f205-35db-80e3-05c68161c625"
                                    />
                                </div>
                            </a> */}
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="">
                        <div
                            className="sca aspect-video max-h-[14rem] min-h-[9rem] overflow-hidden rounded-xl"
                            style={{
                                backgroundImage: `url("https://imageservice.disco.peacocktv.com/uuid/1e9baed1-661a-3d3b-8737-53d343e2fb2e/LAND_16_9/1280?language=eng&territory=US&proposition=NBCUOTT&version=e757f4c1-f205-35db-80e3-05c68161c625")`,
                                backgroundPosition: "center",
                                backgroundSize: "cover",
                                backgroundRepeat: "no-repeat",
                            }}
                        >
                            {/* <a href="/">
                                <div className="bg-whit aspect-video min-h-[9rem] max-h-[14rem] rounded-xl overflow-hidden">
                                    <img
                                        className="aspect-video"
                                        src="https://imageservice.disco.peacocktv.com/uuid/1e9baed1-661a-3d3b-8737-53d343e2fb2e/LAND_16_9/1280?language=eng&territory=US&proposition=NBCUOTT&version=e757f4c1-f205-35db-80e3-05c68161c625"
                                    />
                                </div>
                            </a> */}
                        </div>
                    </SwiperSlide>
                </div>
            </Swiper>
        </div>
    );
};

export default CardContentBackup;
