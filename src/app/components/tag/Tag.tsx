import React from 'react';

import './tag.scss';

interface TagProps {
    text: string;
}

export const Tag = ({ text }: TagProps) => {
    return (
        <div className="tag-container">
            <p>{ text }</p>
        </div>
    );
};