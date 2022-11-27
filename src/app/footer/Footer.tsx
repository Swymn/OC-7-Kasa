import React from "react";

import './footer.scss';

export const Footer = () => {

    const year = new Date().getFullYear();

    return (
        <footer className="footer-container">
            <div className="footer-sub-container">
                <img src="/img/logo-bw.svg" alt="Logo black and white"/>
                <p>&copy; { year } Kasa. All rights reserved</p>
            </div>
        </footer>
    )
}