import React from "react";
import { navData } from "./navData";
import logoMobile from "../../assets/mobile.png";

import BottomNav from "./BottomNav";

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
            <BottomNav />
        </div>
    );
};

export default Header;
