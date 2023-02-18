import styled from "styled-components";

export const Container = styled.div`
    #main-wrapper {
        position: relative;
        z-index: 30;
        margin-left: auto;
        margin-right: auto;
        display: flex;
        width: 100%;
        height: 100%;
        padding-top: 2rem;
        transition-duration: 100ms;
    }
    .content-wrapper {
        transition-duration: 150ms;
        margin-bottom: 2rem;
        @media (min-width: 768px) {
            margin-bottom: 1.5rem;
        }

        @media (min-width: 1024px) {
            margin-bottom: 2.5rem;
        }
    }

    section {
        display: flex;
        width: 100%;
        flex-direction: column;
    }

    .title-wrapper {
        padding-left: 1.25rem;
        padding-right: 1.25rem;
        margin-bottom: 0.25rem;

        .section-title {
            z-index: 30;
            white-space: nowrap;
            color: white;
            transition-duration: 150ms;
        }
        
        @media (min-width: 768px) {
            padding-left: 2.75rem;
            padding-right: 2.75rem;
            transition-duration: 150ms;
        }

        @media (min-width: 1280px) {
            padding-left: 5rem;
            padding-right: 5rem;
            transition-duration: 150ms;
            margin-bottom: 1rem;

            .section-title {
                font-size: 1.25rem;
                line-height: 1.75rem;
            }
        }
    }

    .swiper {
        /* background-color: red; */
        /* min-width: 15rem; */
        /* width: 100%; */
        padding: 0.5rem 0;
        padding-left: 0.75rem;
        padding-right: 0.75rem;
        transition-duration: 150ms;

        @media (min-width: 768px) {
            padding-left: 2rem;
            padding-right: 2rem;
            transition-duration: 150ms;
        }
        @media (min-width: 1280px) {
            padding-left: 4rem;
            padding-right: 4rem;
            transition-duration: 150ms;
        }
    }

    .swiper-slide {
        min-width: 15rem;
        /* max-width: 26rem; */
        width: 100%;
        /* background-color: blue; */
        /* width: 100%; */
        /* max-height:  */
        @media (min-width: 768px) {
            max-width: 26rem;
            width: 100%;
            height: 100%;
        }
    }

    .swiper-wrapper {
        /* width: 100%; */
        height: 100%;
        display: flex;
        /* padding: 0.5rem 2rem; */
    }
`;

export const CardWrapper = styled.div`
    /* cursor: pointer;
    overflow: hidden;
    border-radius: 0.75rem;
    transition-duration: 300ms;
    &:hover {
        transform: scale(1.05);
        #data-wrapper {}
    } */

    /* #content-image {
        position: absolute;
        z-index: 10;
        aspect-ratio: 16 / 9;
        object-fit: cover;
        border-radius: 0.75rem;
    } */

    /* #data-wrapper {
        position: relative;
        top: 100%;
        aspect-ratio: 16 / 9;
        height: 100%;
        width: 100%;
        background-image: linear-gradient(
            180deg,
            rgba(255, 0, 0, 0) 0%,
            rgba(0, 0, 0, 1) 60%
        );
        transition-duration: 400ms;
        &:hover {
            top: 0;
            z-index: 20;
            transition-duration: 400ms;
        }
    } */

    /* #data-container {
        position: absolute;
        bottom: 0px;
        margin-left: auto;
        margin-right: auto;
        display: flex;
        width: 100%;
        flex-direction: column;
        padding-left: 1rem;
        padding-bottom: 0.75rem;
        opacity: 0;
        &:hover {
            opacity: 1;
        }
    } */

    .data-text {
        display: flex;
        align-items: center;
    }

    .bullet {
        margin-left: 0.5rem;
        margin-right: 0.5rem;
        font-size: 0.5rem;
    }
`;
