import React from 'react';

import './box.scss';

interface BoxProps {
    title: string;
    imageUrl?: string;
}

export const Box = ({ title, imageUrl }: BoxProps) => {
    return (
        <div className="box-container">
            <div className='box-overlay'></div>
            {imageUrl ? <img src={imageUrl} alt={title} className="box-image" /> : <div className='box-background'></div>}
            <p className="box-title">{title}</p>
        </div>
    );
}