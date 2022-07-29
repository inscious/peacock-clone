import React from "react";
import { navData } from "./navData";
import logoMobile from "../../assets/mobile.png";
import dsktpLogo from "../../assets/desktop.png";

import BottomNav from "./BottomNav";

const Header = () => {
    return (
        <div className="header-container">
            <div className="image-container-mobile">
                <img src={logoMobile} className="mobile-logo" />
            </div>
            <div className="image-container-desktop">
                <img
                    src={dsktpLogo}
                    className="hidden lg:flex h-12 absolute left-8 top-9 xl:left-16 duration-200"
                />
            </div>
            <div className="flex">
                <ul className="nav-links-wrapper">
                    {navData.map((data) => {
                        return (
                            <li className="nav-links">
                                <a className="nav-anchor" href={data.url}>
                                    {data.title}
                                </a>
                            </li>
                        );
                    })}
                </ul>
            </div>
            <div className="hidden lg:flex w-full justify-center">
                <div className="bg-[#222222] rounded-full h-12 flex justify-center items-center -mr-6 z-10">
                    <span className="text-white flex justify-center items-center py-4 pl-4 mr-1 xl:mr-0 xl:px-6 duration-200 cursor-pointer">
                        <a className="text-sm duration-200 hover:border-b-4 xl:text-base">
                            Channels
                        </a>
                    </span>
                    <span className="text-black flex bg-gradient-to-r from-[#fab503] to-[#fe9001] rounded-full p-4 xl:px-6 justify-center items-center duration-200 cursor-pointer h-12">
                        <a className="text-sm duration-200 xl:text-base">Browse</a>
                    </span>
                </div>
                <ul className="flex bg-[#222222] rounded-r-full pl-6">
                    {navData.map((data) => {
                        return (
                            <li className="flex items-center mx-2.5 xl:mx-[1.125rem]">
                                <a
                                    className="text-white text-sm opacity-60 hover:opacity-100 duration-200 xl:text-base"
                                    href={data.url}
                                >
                                    {data.title}
                                </a>
                            </li>
                        );
                    })}
                </ul>
            </div>
            <div className="hidden lg:flex absolute right-8 xl:right-16 duration-200">
                <div className="flex items-center w-12 h-12 justify-center rounded-full overflow-hidden bg-[#222222] cursor-pointer mx-2">
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
                <div className="flex items-end w-12 h-12 rounded-full bg-[#222222] cursor-pointer duration-200 hover:bg-gradient-to-r hover:from-[#eba23f] hover:to-[#f2bf75]">
                    <img src="https://imageservice.disco.peacocktv.com/pcms/7fdf0012-3001-434a-be15-9ea2d3c32275/AGG_SOURCE/400?territory=US&proposition=NBCUOTT&language=eng" />
                </div>
            </div>
            <BottomNav />
        </div>
    );
};

export default Header;
