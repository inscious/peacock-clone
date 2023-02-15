import React from "react";
import { rotten } from "../Featured/data";

const Card = ({ data, index }) => {
    return (
        // <SwiperSlide>
        <div
            key={index}
            className="group cursor-pointer overflow-hidden rounded-xl duration-150 hover:scale-105"
        >
            <img
                alt={data.title}
                src={data.img}
                className="absolute z-10 aspect-video rounded-xl object-cover"
            />
            <div className="relative top-[100%] aspect-video h-full w-full bg-gradient-to-t from-black/75 duration-500 group-hover:top-0 group-hover:z-20">
                <div className="absolute bottom-0 mx-auto flex w-full flex-col pl-4 pb-3">
                    <span>
                        <p className="whitespace-nowrap text-sm tracking-tight text-white duration-150 xl:text-lg">
                            {data.title}
                        </p>
                    </span>
                    <span className="flex items-center text-xs text-white">
                        <img
                            alt="Rotten Tomatoes"
                            src={rotten}
                            className="mr-2 h-4"
                        />
                        <p className="flex items-center">
                            {data.tomato}
                            <span className="mx-2 text-[.5rem]">•</span>
                        </p>
                        <p className="flex items-center">
                            {data.genre}
                            <span className="mx-2 text-[.5rem]">•</span>
                        </p>
                        <p className="flex items-center">
                            {data.seasons || data.released}
                        </p>
                    </span>
                </div>
            </div>
        </div>
        // </SwiperSlide>
    );
};

export default Card;
