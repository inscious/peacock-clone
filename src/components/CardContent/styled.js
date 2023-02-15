import styled from "styled-components";

export const Container = styled.div`
    .swiper {
        /* background-color: red; */
        /* min-width: 15rem; */
        /* width: 100%; */
        padding: .5rem 0;
        padding-left: 0.75rem;
        transition-duration: 150ms;

        @media (min-width: 768px) {
            padding-left: 2rem;
            transition-duration: 150ms;
        }
        @media (min-width: 1280px) {
            padding-left: 4rem;
            transition-duration: 150ms;
        }
    }

    .swiper-slide {
        min-width: 15rem;
        /* background-color: blue; */
        width: 100%;
    }
`;
