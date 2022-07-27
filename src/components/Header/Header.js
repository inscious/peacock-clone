import React from "react";
import { navData } from "./navData";
import logoMobile from "../../assets/mobile.png";

const Header = () => {
    return (
        <div className="h-[8.5rem] bg-black flex flex-col justify-end md:h-[9.25rem] duration-200 z-14">
            <div className="h-10 cursor-pointer">
                <img src={logoMobile} className="h-10 top-9 absolute left-6" />
            </div>
            <div className="flex">
                <ul className="flex flex-row overflow-auto w-full">
                    {navData.map((data) => {
                        return (
                            <li className="h-12 flex items-center mx-4 md:my-2 md:mx-5 whitespace-nowrap  duration-200">
                                <a className="text-white">{data.title}</a>
                            </li>
                        );
                    })}
                </ul>
                <div className="h-48 bottom-0 absolute bg-gradient-to-t from-black w-full flex">

                </div>
            </div>
        </div>
    );
};

export default Header;
