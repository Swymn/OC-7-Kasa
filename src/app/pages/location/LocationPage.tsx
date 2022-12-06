import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { LocationService, Location } from '../../../database/location.service';
import { Carousel } from "../../components/carousel/Carousel";

import "./location.scss";

export const LocationPage = () => {

    const { id } = useParams<{ id: string }>();
    const [location, setLocation] = useState<Location | null>(null);

    useEffect(() => {
        if (location === null && id !== undefined) {
            setLocation(LocationService.getLocation(id));
        }
    }, [location, id]);

    return (
        <div className="location-container">
            <h1>Location: {location?.title}</h1>
            { location?.pictures && <Carousel pictures={location.pictures}/> }
        </div>
    )
}