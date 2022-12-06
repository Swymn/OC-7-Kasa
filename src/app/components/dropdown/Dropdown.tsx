import React, { useState } from "react";

import './dropdown.scss';

export interface DropdownProps {
    label: string;
    children: JSX.Element | JSX.Element[];
}

export const Dropdown = ({ label, children }: DropdownProps) => {

    const [isOpen, setIsOpen] = useState<boolean>(false);
    const labelId = "dropdown__content__" + label.toLowerCase().replace(" ", "-");

    const getSize = () => {
        const dropdownContent = document.getElementById(labelId);
        if (!dropdownContent) return "18vh";
        // 54 = 38px (height of button) + 16px (padding)
        return (dropdownContent.offsetHeight + 54) + "px";
    }

    return (
        <div style={{ height: isOpen ? getSize() : "38px" }} className="dropdown">
            <button className="dropdown__button" onClick={() => setIsOpen((prevState) => !(prevState))}>
                <p>{label}</p>
                <span className={`icon ${isOpen ? "icon-rotate" : ""}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                        <path d="M201.4 137.4c12.5-12.5 32.8-12.5 45.3 0l160 160c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L224 205.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l160-160z" />
                    </svg>
                </span>
            </button>
            <div className="dropdown__content" id={labelId}>
                {children}
            </div>
        </div>
    );
};