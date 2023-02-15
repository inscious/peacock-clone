import React from "react";
import { BsPlayFill } from "react-icons/bs";
import { rotten } from "./data";

const FeaturedSlide = ({ data }) => {
    return (
        <>
            <div className="absolute bottom-[40%] left-5 z-20 flex h-1/3 w-1/2 flex-col duration-200 md:bottom-[50%] md:ml-16 md:w-1/2 lg:left-0 lg:h-1/3">
                <div className="m bg-slate-00 h-full">
                    <img
                        alt={data.title}
                        src={data.titleImage}
                        className="max-h-[80px] md:max-h-[150px]"
                    />
                    <span className="mt-2 flex items-center text-xs text-white duration-200 md:mt-5 md:text-base">
                        <span className="flex items-center">
                            <img
                                alt="Rotten Tomatoes"
                                src={rotten}
                                className="mr-2 h-4"
                            />
                            <p className="mr-2">{data.score}</p>
                            <p className="mr-2">•</p>
                        </span>
                        <p className="mr-2 whitespace-nowrap">{data.genre}</p>
                        <p className="mr-2 ">•</p>
                        <p className="whitespace-nowrap">
                            {data.seasons || data.year}
                        </p>
                    </span>
                    <div className="mt-5 hidden w-full md:flex">
                        <button className="mr-2.5 flex h-10 items-center rounded-md bg-yellow-400 px-2 duration-100 hover:scale-105">
                            <BsPlayFill className="mr-2 h-7 w-7" />
                            <p className="whitespace-nowrap text-sm">
                                {data.watch}
                            </p>
                        </button>
                        <button className="group flex h-10 items-center rounded-md bg-[#101010]/50 px-2 backdrop-blur-md duration-100">
                            <p className="whitespace-nowrap text-sm text-white/75 duration-100 group-hover:text-white">
                                More Info
                            </p>
                        </button>
                    </div>
                </div>
            </div>
            <img
                src={data.image}
                className="w-full mix-blend-overlay"
                alt={data.title}
            />
        </>
    );
};

export default FeaturedSlide;
