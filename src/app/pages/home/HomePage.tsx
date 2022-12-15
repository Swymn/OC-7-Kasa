import React, { useEffect, useState } from 'react';
import { LocationService, Location } from '../../../service/location.service';
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
            <Banner title="Chez vous, partout et ailleurs" imgUrl="https://picsum.photos/800/200" />

            <section className="cards-container">
                {!!locations && locations?.length > 0
                    ? locations.map((location, index) => (
                        <Box key={location.id} title={location.title} cover={location.cover} id={location.id} />
                    ))
                    : [...Array(6)].map((_, i) => <Box title="Titre de la location" id={i.toString()} key={i} />)
                }
            </section>
        </div>
    );
};