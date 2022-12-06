import React from 'react';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../router/AppRouter';

import './box.scss';

export const Box = ({ title, cover, id }: {title: string, cover?: string, id: string}) => {
    return (
        <Link to={AppRoute.Location + id} className="box-container">
            <div className='box-overlay'></div>
            {cover ? <img src={cover} alt={title} className="box-image" /> : <div className='box-background'></div>}
            <p className="box-title">{title}</p>
        </Link>
    );
}