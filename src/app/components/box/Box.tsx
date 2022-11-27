import React from 'react';

import './box.scss';

interface BoxProps {
    title: string;
    imageUrl?: string;
}

export const Box = ({ title, imageUrl }: BoxProps) => {
    return (
        <div className="box-container">
            {imageUrl ? <img src={imageUrl} alt={title} /> : <div className='box-overlay'></div>}
            <p className="box-title">{title}</p>
        </div>
    );
}