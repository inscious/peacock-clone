import React from "react";

const BottomNav = () => {
    return (
        <div className="bottom-nav-container lg:hidden">
            <div className="flex flex-row w-full justify-center">
                <div className="flex items-center w-12 h-12 justify-center rounded-full overflow-hidden bg-[#222222] cursor-pointer">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="white"
                        strokeWidth={2}
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        />
                    </svg>
                </div>
                <div className="bg-[#222222] rounded-full h-12 flex justify-center items-center mx-4">
                    <span className="text-white flex justify-center items-center py-3 px-3 md:px-5 duration-200 cursor-pointer ">
                        <a className="text-xs md:text-base duration-200 hover:border-b-4">
                            Channels
                        </a>
                    </span>
                    <span className="text-black flex bg-gradient-to-r from-[#fab503] to-[#fe9001] rounded-full py-4 px-[18px] md:px-5 md:py-3 justify-center items-center duration-200 cursor-pointer">
                        <a className="text-xs md:text-base duration-200">
                            Browse
                        </a>
                    </span>
                </div>
                <div className="flex items-end w-12 h-12 rounded-full bg-[#222222] cursor-pointer duration-200 hover:bg-gradient-to-r hover:from-[#eba23f] hover:to-[#f2bf75]">
                    <img src="https://imageservice.disco.peacocktv.com/pcms/7fdf0012-3001-434a-be15-9ea2d3c32275/AGG_SOURCE/400?territory=US&proposition=NBCUOTT&language=eng" />
                </div>
            </div>
        </div>
    );
};

export default BottomNav;
