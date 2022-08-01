import React from "react";
import { BsPlayFill } from "react-icons/bs";

const FeaturedSlide = ({ data }) => {
    return (
        <>
            <div className="duration-200 absolute flex md:ml-16 bottom-1/2 lg:bottom-1/3 left-5 flex-col z-20 w-lg bg- h-1/3 md:h- lg:h-1/3  w-1/2 md:w-1/3">
                <div className="h-full m">
                    <img src={data.titleImage} className="md:max-h-[200px]" />
                    <div className="hidden md:flex mt-10 w-full">
                        <button className="px-3 bg-yellow-400 rounded-md flex items-center mr-2.5 h-12">
                            <BsPlayFill className="w-7 h-7 mr-2" />
                            <p className="text-sm whitespace-nowrap">
                                {data.watch}
                            </p>
                        </button>
                        <button className="px-3 h-12 bg-[#101010]/50 backdrop-blur-md flex items-center rounded-md">
                            <p className="text-sm whitespace-nowrap text-white/75">
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
