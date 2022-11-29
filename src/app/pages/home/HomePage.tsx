import React, { useEffect, useState } from 'react';
import { LocationService, Location } from '../../../database/location.service';
import { Banner } from '../../components/banner/Banner';
import { Box } from '../../components/box/Box';

import './home.scss';

export const HomePage = () => {

    const [locations, setLocations] = useState<Location[] | null>(null);

    useEffect(() => {
        if (locations === null) {
            setLocations(LocationService.getLocations());
        }
    }, [locations]);

    return (
        <div className="home-container">
            <Banner title="Chez vous, partout et ailleurs" imgUrl="https://picsum.photos/800/200"/>

            <section className="cards-container">
                {locations && locations.map((location, index) => (
                    <Box key={location.id} location={location} />
                ))}                
                {/* { [...Array(6)].map((_, i) => <Box title="Titre de la location" key={i} />) } */}
            </section>
        </div>
    );
};