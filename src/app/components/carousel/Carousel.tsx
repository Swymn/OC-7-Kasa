import React from "react";

import './carousel.scss';

export const Carousel = ({ pictures }: { pictures: string[]}) => {
    const [activeIndex, setActiveIndex] = React.useState<number>(0);

    const goToPrevSlide = (e: React.MouseEvent<HTMLDivElement>) => {
        e.preventDefault();

        let index = activeIndex;
        let slidesLength = pictures.length;

        if (index < 1) {
            index = slidesLength;
        }

        --index;

        setActiveIndex(index);
    }

    const goToNextSlide = (e: React.MouseEvent<HTMLDivElement>) => {
        e.preventDefault();

        let index = activeIndex;
        let slidesLength = pictures.length - 1;

        if (index === slidesLength) {
            index = -1;
        }

        ++index;

        setActiveIndex(index);
    }

    return (
        <div className="carousel">
            <div
                className="carousel__arrow carousel__arrow--left"
                onClick={goToPrevSlide}
            >
                <svg className="icon-slide" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                    <path d="M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" />
                </svg>
            </div>

            <ul className="carousel__slides">
                {pictures.map((slide, index) =>
                    <li
                        className={
                            index === activeIndex
                                ? "carousel__slide carousel__slide--active"
                                : "carousel__slide"
                        }
                        key={index}
                    >
                        <img className="carousel__slide__image" src={slide} alt="label" />
                    </li>
                )}
            </ul>

            <span className="carousel__indicators">{activeIndex+1}/{pictures.length}</span>

            <div
                className="carousel__arrow carousel__arrow--right"
                onClick={goToNextSlide}
            >
                <svg className="icon-slide" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                    <path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z" />
                </svg>
            </div>
        </div>
    );
}
