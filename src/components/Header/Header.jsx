import React from "react";
import { navData } from "./navData";
import mobileLogo from "../../assets/mobile.png";
import dsktpLogo from "../../assets/desktop.png";

import BottomNav from "./BottomNav";

const Header = () => {
    return (
        <nav className="header-container z-50">
            {/* LOGO */}
            <div className="image-container-mobile">
                <a href="/">
                    <img
                        alt="Peacock Logo"
                        src={mobileLogo}
                        className="mobile-logo"
                    />
                </a>
            </div>
            <div className="image-container-desktop">
                <a href="/">
                    <img
                        alt="Peacock Logo"
                        src={dsktpLogo}
                        className="absolute left-8 top-9 hidden h-12 duration-200 lg:flex xl:left-16"
                    />
                </a>
            </div>
            {/* MOBILE NAV  LINKS */}
            <div className="flex">
                <ul className="nav-links-wrapper">
                    {navData.map((data, index) => {
                        return (
                            <li className="nav-links" key={index}>
                                <a className="nav-anchor" href={data.url}>
                                    {data.title}
                                </a>
                            </li>
                        );
                    })}
                </ul>
            </div>
            {/* DESKTOP NAV LINKS */}
            <div className="hidden w-full justify-center lg:flex">
                <div className="z-10 -mr-6 flex h-12 items-center justify-center rounded-full bg-[#222222]">
                    <span className="mr-1 flex cursor-pointer items-center justify-center py-4 pl-4 text-white duration-200 xl:mr-0 xl:px-6">
                        <p className="text-sm duration-200 hover:border-b-4 xl:text-base">
                            Channels
                        </p>
                    </span>
                    <span className="flex h-12 cursor-pointer items-center justify-center rounded-full bg-gradient-to-r from-[#fab503] to-[#fe9001] p-4 text-black duration-200 xl:px-6">
                        <p className="text-sm duration-200 xl:text-base">
                            Browse
                        </p>
                    </span>
                </div>
                <ul className="flex rounded-r-full bg-[#101010]/50 pl-6 backdrop-blur-md ">
                    {navData.map((data, index) => {
                        return (
                            <li
                                className="mx-2.5 flex items-center xl:mx-[1.125rem]"
                                key={index}
                            >
                                <a
                                    className="text-sm text-white opacity-60 duration-200 hover:opacity-100 xl:text-base"
                                    href={data.url}
                                >
                                    {data.title}
                                </a>
                            </li>
                        );
                    })}
                </ul>
            </div>
            {/* DESKTOP SEARCH & AVATAR */}
            <div className="absolute right-8 hidden duration-200 lg:flex xl:right-16">
                <div className="mx-2 flex h-12 w-12 cursor-pointer items-center justify-center overflow-hidden rounded-full bg-[#101010]/50 backdrop-blur-md duration-100 hover:bg-[#212121]">
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
                <div className="group flex h-12 w-12 items-end rounded-full bg-[#222] duration-200 hover:cursor-pointer">
                    <img
                        alt="avatar"
                        className="z-10"
                        src="https://imageservice.disco.peacocktv.com/pcms/7fdf0012-3001-434a-be15-9ea2d3c32275/AGG_SOURCE/400?territory=US&proposition=NBCUOTT&language=eng"
                    />
                    <span className="absolute h-12 w-12 cursor-pointer rounded-full bg-gradient-to-r from-[#eba23f] to-[#f2bf75] opacity-0 duration-200 group-hover:opacity-100" />
                </div>
            </div>
            <BottomNav />
        </nav>
    );
};

export default Header;
