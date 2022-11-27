import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { Header } from '../components/header/Header';
import { Footer } from '../components/footer/Footer';

import { HomePage } from '../pages/home/HomePage';
import { AboutPage } from '../pages/about/AboutPage';
import { NotFoundPage } from '../pages/not-found/NotFoundPage';

import './app-router.scss';

export enum AppRoute {
    Home = '/',
    About = '/about',
    NotFound = '/not-found',
}

export const AppRouter = () => {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path={AppRoute.Home} element={<HomePage />} />
                <Route path={AppRoute.About} element={<AboutPage />} />
                <Route path={AppRoute.NotFound} element={<NotFoundPage />} />
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
            <Footer />
        </Router>
    );
}