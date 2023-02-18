import styled from "styled-components";

export const SlideContainer = styled.div`
    position: absolute;
    bottom: 40%;
    left: 1.25rem;
    z-index: 20;
    height: 33.333333%;
    width: 50%;
    flex-direction: column;
    transition-duration: 150ms;

    @media (min-width: 768px) {
        bottom: 50%;
        margin-left: 4rem;
        width: 50%;
    }
    @media (min-width: 1024px) {
        left: 0;
        height: 33.333333%;
    }

    #title-image {
        max-height: 80px;

        @media (min-width: 768px) {
            max-height: 200px;
        }
    }

    #data-wrapper {
        display: flex;
        margin-top: 0.5rem;
        align-items: center;
        font-size: 0.75rem;
        line-height: 1rem;
        color: white;
        transition-duration: 150ms;

        @media (min-width: 768px) {
            margin-top: 1.25rem;
            font-size: 1rem;
            line-height: 1.5rem;
        }

        span {
            display: flex;
            align-items: center;
        }

        img {
            margin-right: 0.5rem;
            height: 1rem;
        }
        p {
            margin-right: 0.5rem;
            white-space: nowrap;
        }
    }

    #control-wrapper {
        margin-top: 1.25rem;
        display: none;
        width: 100%;

        @media (min-width: 768px) {
            display: flex;
        }

        .btn {
            display: flex;
            height: 2.5rem;
            align-items: center;
            border-radius: 0.375rem;
            transition-duration: 150ms;
            padding-left: 1rem;
            padding-right: 1rem;
            p {
                white-space: nowrap;
                font-size: 0.875rem;
                line-height: 1.25rem;
            }
        }

        .watch-btn {
            margin-right: 0.5rem;
            background-color: rgb(250, 204, 21, 1);

            &:hover {
                transform: scale(1.05);
            }

            
        }

        .info-btn {
            background-color: rgb(16, 16, 16, 0.5);
            backdrop-filter: blur(12px);
            color: rgb(255, 255, 255, .75);

            &:hover {
                color: white;
            }
        }
    }
`;
