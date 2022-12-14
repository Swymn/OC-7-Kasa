import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { Header } from '../components/header/Header';
import { Footer } from '../components/footer/Footer';

import { HomePage } from '../pages/home/HomePage';
import { AboutPage } from '../pages/about/AboutPage';
import { LocationPage } from '../pages/location/LocationPage';
import { NotFoundPage } from '../pages/not-found/NotFoundPage';

import './app-router.scss';

export enum AppRoute {
    Home = '/',
    About = '/about',
    NotFound = '/not-found',
    Location = '/location/',
}

export const AppRouter = () => {
    return (
        <Router>
            <main>
                <Header />
                <Routes>
                    <Route path={AppRoute.Home} element={<HomePage />} />
                    <Route path={AppRoute.About} element={<AboutPage />} />
                    <Route path={AppRoute.NotFound} element={<NotFoundPage />} />
                    <Route path={AppRoute.Location + ':id'} element={<LocationPage />} />
                    <Route path="*" element={<NotFoundPage />} />
                </Routes>
            </main>
            <Footer />
        </Router>
    );
}