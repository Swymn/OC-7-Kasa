import React from 'react';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../router/AppRouter';
import { Location } from '../../../database/location.service';

import './box.scss';

interface BoxProps {
    location: Location;
}

export const Box = ({ location }: BoxProps) => {
    return (
        <Link to={AppRoute.Location + location.id} className="box-container">
            <div className='box-overlay'></div>
            {location.cover ? <img src={location.cover} alt={location.title} className="box-image" /> : <div className='box-background'></div>}
            <p className="box-title">{location.title}</p>
        </Link>
    );
}