import React from "react";

const NavigationArrows = ({ swiperNavPrevRef, swiperNavNextRef }) => {
    return (
        <div className="z-20 hidden md:flex h-full w-full">
            <div
                ref={swiperNavPrevRef}
                className="flex items-center w-12 h-12 justify-center rounded-full overflow-hidden backdrop-blur-md bg-[#101010]/50 cursor-pointer mx-2 absolute z-20 bottom-1/2 group"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 stroke-white group-hover:stroke-yellow-400 duration-200"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 19l-7-7 7-7"
                    />
                </svg>
            </div>
            <div
                ref={swiperNavNextRef}
                className="flex items-center w-12 h-12 justify-center rounded-full overflow-hidden backdrop-blur-md bg-[#101010]/50 cursor-pointer mx-2 absolute z-20 bottom-1/2 right-0 group"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 stroke-white group-hover:stroke-yellow-400 duration-200"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 5l7 7-7 7"
                    />
                </svg>
            </div>
        </div>
    );
};

export default NavigationArrows;
