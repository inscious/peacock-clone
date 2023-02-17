import React from "react";
import { copyright, footerData } from "./footerData";

const Footer = () => {
    return (
        <footer className="bg-slate-">
            <div className="bg-slate-00  mx-auto grid w-full max-w-[100rem] grid-cols-1 pb-8 pt-14 lg:grid-cols-3">
                <div className=" items-s bg-red-00 bg-stone-00 justify-center lg:col-span-2">
                    <ul className="bg-violet-00 flex w-full flex-row flex-wrap items-center justify-center py-2 px-10 duration-150 lg:justify-start">
                        {footerData.map((data, index) => {
                            return (
                                <li
                                    className="flex h-full items-center justify-center pr-5 "
                                    key={index}
                                >
                                    <a
                                        className="h-full whitespace-nowrap text-sm text-[#777777] duration-100 hover:text-[#fccc12] lg:text-base"
                                        href={data.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        {data.title}
                                    </a>
                                </li>
                            );
                        })}
                    </ul>
                </div>
                <div className="bg-purple-00 col-span-1 my-4 flex w-full py-1">
                    <ul className="bg-slate-00 lg flex h-full w-full flex-row items-center justify-center">
                        <li
                            id="Facebook"
                            className="flex h-8 w-8 items-center justify-center rounded-full bg-[#777777] duration-100 hover:cursor-pointer hover:bg-[#fccc12]"
                        >
                            <svg
                                stroke="currentColor"
                                fill="currentColor"
                                strokeWidth="0"
                                viewBox="0 0 320 512"
                                height="1em"
                                width="1em"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"></path>
                            </svg>
                        </li>
                        <li
                            id="Twitter"
                            className="duration-10 ml-5 flex h-8 w-8 items-center justify-center rounded-full bg-[#777777] duration-100 hover:cursor-pointer hover:bg-[#fccc12]"
                        >
                            <svg
                                stroke="currentColor"
                                fill="currentColor"
                                strokeWidth="0"
                                viewBox="0 0 1024 1024"
                                height="1em"
                                width="1em"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M928 254.3c-30.6 13.2-63.9 22.7-98.2 26.4a170.1 170.1 0 0 0 75-94 336.64 336.64 0 0 1-108.2 41.2A170.1 170.1 0 0 0 672 174c-94.5 0-170.5 76.6-170.5 170.6 0 13.2 1.6 26.4 4.2 39.1-141.5-7.4-267.7-75-351.6-178.5a169.32 169.32 0 0 0-23.2 86.1c0 59.2 30.1 111.4 76 142.1a172 172 0 0 1-77.1-21.7v2.1c0 82.9 58.6 151.6 136.7 167.4a180.6 180.6 0 0 1-44.9 5.8c-11.1 0-21.6-1.1-32.2-2.6C211 652 273.9 701.1 348.8 702.7c-58.6 45.9-132 72.9-211.7 72.9-14.3 0-27.5-.5-41.2-2.1C171.5 822 261.2 850 357.8 850 671.4 850 843 590.2 843 364.7c0-7.4 0-14.8-.5-22.2 33.2-24.3 62.3-54.4 85.5-88.2z"></path>
                            </svg>
                        </li>
                        <li
                            id="Youtube"
                            className="duration-10 ml-5 flex h-8 w-8 items-center justify-center rounded-full bg-[#777777] duration-100 hover:cursor-pointer hover:bg-[#fccc12]"
                        >
                            <svg
                                stroke="currentColor"
                                fill="currentColor"
                                strokeWidth="0"
                                viewBox="0 0 1024 1024"
                                height="1em"
                                width="1em"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M941.3 296.1a112.3 112.3 0 0 0-79.2-79.3C792.2 198 512 198 512 198s-280.2 0-350.1 18.7A112.12 112.12 0 0 0 82.7 296C64 366 64 512 64 512s0 146 18.7 215.9c10.3 38.6 40.7 69 79.2 79.3C231.8 826 512 826 512 826s280.2 0 350.1-18.8c38.6-10.3 68.9-40.7 79.2-79.3C960 658 960 512 960 512s0-146-18.7-215.9zM423 646V378l232 133-232 135z"></path>
                            </svg>
                        </li>
                        <li
                            id="Instagram"
                            className="duration-10 ml-5 flex h-8 w-8 items-center justify-center rounded-full bg-[#777777] duration-100 hover:cursor-pointer hover:bg-[#fccc12]"
                        >
                            <svg
                                stroke="currentColor"
                                fill="none"
                                strokeWidth="2"
                                viewBox="0 0 24 24"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                height="1em"
                                width="1em"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <rect
                                    x="2"
                                    y="2"
                                    width="20"
                                    height="20"
                                    rx="5"
                                    ry="5"
                                ></rect>
                                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                                <line
                                    x1="17.5"
                                    y1="6.5"
                                    x2="17.5"
                                    y2="6.5"
                                ></line>
                            </svg>
                        </li>
                    </ul>
                    <ul></ul>
                </div>
                <div className="bg-violet-00 bg-rose-00 pb- col-span-1 mx-auto my-2 mb-10 flex w-full items-center justify-center px-10 lg:col-span-3 lg:justify-start">
                    <p className="text-xs text-[#777777] duration-150 lg:text-sm">
                        {copyright}
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
