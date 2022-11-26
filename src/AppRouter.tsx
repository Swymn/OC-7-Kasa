import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export const AppRouter = () => {
    
    return (
        <Router>
            <Routes>
                <Route path="/" element={<div>Home</div>} />
                <Route path="*" element={<div>404</div>} />
            </Routes>
        </Router>
    );
}