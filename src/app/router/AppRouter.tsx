import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { Header } from '../header/Header';

import './app-router.scss';

export const AppRouter = () => {

    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<div></div>} />
                <Route path="*" element={<div>Not Found</div>} />
            </Routes>
        </Router>
    );
}