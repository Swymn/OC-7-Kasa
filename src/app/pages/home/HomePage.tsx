import React from 'react';
import { Banner } from '../../components/banner/Banner';
import { Box } from '../../components/box/Box';

import './home.scss';

export const HomePage = () => {
    return (
        <div className="home-container">
            <Banner title="Chez vous, partout et ailleurs" imgUrl="https://picsum.photos/800/200"/>

            <section className="cards-container">
                { [...Array(6)].map((_, i) => <Box title="Titre de la location" key={i} />) }
            </section>
        </div>
    );
};