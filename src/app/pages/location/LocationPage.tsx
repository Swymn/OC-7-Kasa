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
            { location?.pictures && <Carousel pictures={location.pictures}/> }
            <div className="location-container__description">
                <div className="location-container__profile-title">
                    <h1 className="title">{location?.title}</h1>

                    <h2 className="subtitle">{location?.location}</h2>
                </div>

                <div className="location-container__profile">
                    <div className="location-container__profile-description">
                        <p>{location?.host.name.split(" ")[0]}</p>
                        <p>{location?.host.name.split(" ").slice(1).join('')}</p>
                    </div>

                    <img className="location-container__profile-piture" src={location?.host.picture} alt={`${location?.host.name}`} />
                </div>
            </div>

            
        </div>
    )
}