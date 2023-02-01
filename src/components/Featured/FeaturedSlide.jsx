import React from "react";
import { BsPlayFill } from "react-icons/bs";

const FeaturedSlide = ({ data }) => {
    return (
        <>
            <div className="w-lg bg- md:h- absolute bottom-1/2 left-5 z-20 flex h-1/3 w-1/2 flex-col duration-200 md:ml-16 md:w-1/3  lg:bottom-1/3 lg:h-1/3">
                <div className="m h-full">
                    <img src={data.titleImage} className="md:max-h-[200px]" />
                    <span className="mt-2 flex text-sm text-white duration-200 md:mt-5 md:text-base">
                        <p className="mr-2">{data.genre}</p>
                        <p className="mr-2">•</p>
                        <p>{data.seasons}</p>
                    </span>
                    <div className="mt-5 hidden w-full md:flex">
                        <button className="mr-2.5 flex h-10 items-center rounded-md bg-yellow-400 px-2">
                            <BsPlayFill className="mr-2 h-7 w-7" />
                            <p className="whitespace-nowrap text-sm">
                                {data.watch}
                            </p>
                        </button>
                        <button className="flex h-10 items-center rounded-md bg-[#101010]/50 px-2 backdrop-blur-md">
                            <p className="whitespace-nowrap text-sm text-white/75">
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
