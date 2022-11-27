import React from 'react';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../router/AppRouter';

import './not-found.scss';

export const NotFoundPage = () => {
    return (
        <div className="not-found-container">
            <h1 className="not-found-title">404</h1>
            <h3 className="not-found-subtitle">Oups! La page que vous demandez n'existe pas.</h3>
            <Link to={AppRoute.Home} className="not-found-link">Retour à l'accueil</Link>
        </div>
    );
};