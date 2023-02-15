import React from "react";

const BottomNav = () => {
    return (
        <div className="bottom-nav-container lg:hidden">
            <div className="flex w-full flex-row justify-center">
                <div className="flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-[#101010]/50 backdrop-blur-md">
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
                <div className="mx-4 flex h-12 items-center justify-center rounded-full bg-[#222222]">
                    <span className="flex cursor-pointer items-center justify-center py-3 px-3 text-white duration-200 md:px-5 ">
                        <p className="text-xs duration-200 hover:border-b-4 md:text-base">
                            Channels
                        </p>
                    </span>
                    <span className="flex cursor-pointer items-center justify-center rounded-full bg-gradient-to-r from-[#fab503] to-[#fe9001] py-4 px-[18px] text-black duration-200 md:px-5 md:py-3">
                        <p className="text-xs duration-200 md:text-base">
                            Browse
                        </p>
                    </span>
                </div>
                <div className="group flex h-12 w-12 items-end rounded-full bg-[#222] duration-200">
                    <img
                        alt="avatar"
                        className="z-10"
                        src="https://imageservice.disco.peacocktv.com/pcms/7fdf0012-3001-434a-be15-9ea2d3c32275/AGG_SOURCE/400?territory=US&proposition=NBCUOTT&language=eng"
                    />
                    <span className="absolute h-12 w-12 cursor-pointer rounded-full bg-gradient-to-r from-[#eba23f] to-[#f2bf75] opacity-0 duration-200 group-hover:opacity-100 " />
                </div>
            </div>
        </div>
    );
};

export default BottomNav;
