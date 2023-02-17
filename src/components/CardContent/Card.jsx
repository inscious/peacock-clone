import React from "react";
import { rotten } from "../Featured/data";
import { CardWrapper } from "./styled";

const Card = ({ data, index }) => {
    let rating = data.tomato;
    return (
        <CardWrapper>
            <div
                key={index}
                id="wrapper"
                className="group cursor-pointer overflow-hidden rounded-xl duration-300 hover:scale-105"
            >
                <img
                    alt={data.title}
                    src={data.img}
                    className="absolute z-10 aspect-video rounded-xl object-cover"
                />
                <div className="relative top-[100%] aspect-video h-full w-full bg-gradient-to-t from-black duration-[400ms] group-hover:top-0 group-hover:z-20">
                    <div className="absolute bottom-0 mx-auto flex w-full flex-col pl-4 pb-3 opacity-0 group-hover:opacity-100">
                        {/* <img src={data?.logo} className="w-6 relative bottom-20"/> */}
                        <span>
                            <p className="whitespace-nowra text-md tracking-tight text-white duration-150 lg:text-lg">
                                {data.title}
                            </p>
                        </span>
                        <span className="flex items-center text-xs text-white md:text-sm">
                            {rating === "" ? (
                                <p className="data-text">
                                    {data.genre}
                                    <span className="bullet">•</span>
                                </p>
                            ) : (
                                <>
                                    <img
                                        alt="Rotten Tomatoes"
                                        src={rotten}
                                        className="mr-2 h-4"
                                    />
                                    <p className="data-text">
                                        {data.tomato}
                                        <span className="bullet">
                                            •
                                        </span>
                                    </p>
                                    <p className="data-text">
                                        {data.genre}
                                        <span className="bullet">
                                            •
                                        </span>
                                    </p>
                                </>
                            )}

                            <p className="data-text">
                                {data.seasons || data.released}
                            </p>
                        </span>
                    </div>
                </div>
            </div>
        </CardWrapper>
    );
};

export default Card;
