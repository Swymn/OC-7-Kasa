import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { LocationService, Location } from '../../../database/location.service';
import { Carousel } from "../../components/carousel/Carousel";

import "./location.scss";
import { Dropdown } from '../../components/dropdown/Dropdown';
import { Tag } from "../../components/tag/Tag";

export const LocationPage = () => {

    const { id } = useParams<{ id: string }>();
    const [location, setLocation] = useState<Location | null>(null);

    useEffect(() => {
        if (location === null && id !== undefined) {
            setLocation(LocationService.getLocation(id));
        }
    }, [location, id]);

    const getColoredStars = (rating: number) => {
        if (!location?.rating) return "icon-star";
        return Number.parseInt(location?.rating) > rating ? " icon-checked" : "icon-star";
    }

    return (
        <div className="location-container">
            {location?.pictures && <Carousel pictures={location.pictures} />}
            <div className="location-container__description">
                <div className="location-container__profile-title">
                    <div className="profile">
                        <h1 className="title">{location?.title}</h1>
                        <h2 className="subtitle">{location?.location}</h2>
                    </div>

                    <div className="tags">
                        {location?.tags.map((tag) => <Tag text={tag} />)}
                    </div>
                </div>

                <div className="location-container__profile__rating">
                    <div className="location-container__profile">
                        <div className="location-container__profile-description">
                            <p>{location?.host.name.split(" ")[0]}</p>
                            <p>{location?.host.name.split(" ").slice(1).join('')}</p>
                        </div>

                        <img className="location-container__profile-piture" src={location?.host.picture} alt={`${location?.host.name}`} />
                    </div>

                    <div className="location-container__profile-rating">
                        {location?.rating && [...Array(5)].map((_, i) =>
                            <svg className={getColoredStars(i)} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                                <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
                            </svg>
                        )}
                    </div>
                </div>
            </div>

            <div className="location-container__dropdowns">
                <Dropdown label="Description">
                    <p>{location?.description}</p>
                </Dropdown>

                <Dropdown label="Équipements">
                    <ul>
                        {location?.equipments.map((equipment, index) => (
                            <li key={index}>{equipment}</li>
                        ))}
                    </ul>
                </Dropdown>
            </div>
        </div>
    )
}