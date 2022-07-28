import React from "react";

const BottomNav = () => {
    return (
        <div className="bottom-nav-container">
            {/* <div className="flex flex-row"> */}
                <ul classname="flex">
                    <li className="flex">
                        <a className="text-sm">Channels</a>
                    </li>
                    <li className="flex">
                        <a className="text-sm">Browse</a>
                    </li>
                </ul>
            {/* </div> */}
        </div>
    );
};

export default BottomNav;
