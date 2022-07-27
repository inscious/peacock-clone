import React from "react";
import { navData } from "./navData";
import logoMobile from "../../assets/mobile.png";

const Header = () => {
    return (
        <div className="header-container">
            <div className="image-container">
                <img src={logoMobile} className="mobile-logo" />
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
            <div className="bottom-nav-container">
                <div className="flex flex-row">
                    <ul classname="flex">
                        <li className="flex">
                            <a className="text-[.75rem]">Channels</a>
                        </li>
                        <li className="flex">
                            <a className="text-[.75rem]">Browse</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;
