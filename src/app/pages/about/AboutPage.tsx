import React from "react";
import { Banner } from "../../components/banner/Banner";
import { Dropdown } from "../../components/dropdown/Dropdown";

import './about.scss';

export const AboutPage = () => {
    return (
        <div className="about">
            <div className="banner-container">
                <Banner title="" imgUrl="https://picsum.photos/800/200" />
            </div>
            <div className="about-container">
                <Dropdown label="Fiabilité">
                    <p>
                        Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.
                    </p>
                </Dropdown>
                <Dropdown label="Respect">
                    <p>
                        La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.
                    </p>
                </Dropdown>
                <Dropdown label="Service">
                    <p>
                        Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.
                    </p>
                </Dropdown>
                <Dropdown label="Responsabilité">
                    <p>
                        La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.
                    </p>
                </Dropdown>
            </div>
            
        </div>
    );
}