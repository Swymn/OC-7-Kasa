import React from 'react';

import './header.scss';

export const Header = () => {

    const isUnderline = (url: string) => {
        return window.location.pathname === url ? 'underline' : 'none';
    }

    return (
        <header className='header-container'>
            <img src="/img/logo.svg" alt="Kasa logo" className='header-logo'/>
            <li className='nav-menu'>
                <ul><a href="/" style={{ textDecoration: isUnderline('/') }}>Accueil</a></ul>
                <ul><a href="/about" style={{ textDecoration: isUnderline('/about') }}>A Propos</a></ul>
            </li>
        </header>
    );
};