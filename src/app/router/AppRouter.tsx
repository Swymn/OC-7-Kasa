import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { Header } from '../components/header/Header';
import { Footer } from '../components/footer/Footer';

import { HomePage } from '../pages/home/HomePage';

import './app-router.scss';

export const AppRouter = () => {

    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="*" element={<div>Not Found</div>} />
            </Routes>
            <Footer />
        </Router>
    );
}