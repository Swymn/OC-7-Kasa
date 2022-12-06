import React from "react";

import './caroussel.scss';

export const Caroussel = () => {
    return (
        <div className="caroussel">
            
            
            <div className="caroussel-container caroussel__nav">
                <svg className="caroussel__nav__button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                    <path d="M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" />
                </svg>

                <div className="caroussel-item caroussel__slide">
                    <img src="https://picsum.photos/800/200" alt="caroussel-img" />
                </div>
                
                <div className="caroussel-item caroussel__slide">
                    <img src="https://picsum.photos/800/200" alt="caroussel-img" />
                </div>

                <div className="caroussel-item caroussel__slide">
                    <img src="https://picsum.photos/800/200" alt="caroussel-img" />
                </div>

                <svg className="caroussel__nav__button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                    <path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z" />
                </svg>
            </div>

            
        </div>
    );
}