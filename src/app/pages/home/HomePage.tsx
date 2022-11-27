import React from 'react';
import { Box } from '../../components/box/Box';

import './home.scss';

export const HomePage = () => {
    return (
        <div className="home-container">
            <h1>Home Page</h1>
            <Box title="Titre de la location"/>
        </div>
    );
};