import React from "react";
import { BsPlayFill } from "react-icons/bs";
import { rotten } from "./data";

import { SlideContainer } from "./styles";

const FeaturedSlide = ({ data }) => {
    return (
        <>
            <SlideContainer>
                <img alt={data.title} src={data.titleImage} id="title-image" />
                <span id="data-wrapper">
                    <span>
                        <img alt="Rotten Tomatoes" src={rotten} />
                        <p className="mr-2">{data.score}</p>
                        <p className="mr-2">•</p>
                    </span>
                    <p>{data.genre}</p>
                    <p>•</p>
                    <p>{data.seasons || data.year}</p>
                </span>
                <div id="control-wrapper">
                    <button className="btn watch-btn">
                        <BsPlayFill className="mr-2 h-7 w-7" />
                        <p>{data.watch}</p>
                    </button>
                    <button className="btn info-btn group">
                        <p>More Info</p>
                    </button>
                </div>
                {/* </div> */}
            </SlideContainer>
            <img
                src={data.image}
                className="w-full mix-blend-overlay"
                alt={data.title}
            />
        </>
    );
};

export default FeaturedSlide;
