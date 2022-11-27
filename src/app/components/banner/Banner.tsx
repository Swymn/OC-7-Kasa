import React from 'react';

import './banner.scss';

interface BannerProps {
    title: string;
    imgUrl: string;
}

export const Banner = ({ title, imgUrl }: BannerProps) => {
    return (
        <div className="banner-container">
            <img src={imgUrl} alt={title} className="banner-img" />
            <p className="banner-content">{title}</p>
        </div>
    );
}