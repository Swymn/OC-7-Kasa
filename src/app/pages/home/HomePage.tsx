import React from 'react';
import { Banner } from '../../components/banner/Banner';

import './home.scss';

export const HomePage = () => {
    return (
        <div className="home-container">
            <h1>Home Page</h1>
            <Banner title="Chez vous, partout et ailleurs" imgUrl="https://picsum.photos/800/200"/>
        </div>
    );
};