import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import featuredImages from "./data";

const Featured = () => {
    return (
        <Carousel
            autoPlay={true}
            showThumbs={false}
            showStatus={false}
            interval={4000}
            infiniteLoop={true}
        >
            {featuredImages.map((data) => {
                return (
                    <div>
                        <img src={data.image}></img>
                    </div>
                );
            })}
        </Carousel>
    );
};

export default Featured;
