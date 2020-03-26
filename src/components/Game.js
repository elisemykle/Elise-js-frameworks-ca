import React from 'react';
import Heading from './Heading.js';

export default function Game(props) {
    return (
        <div className="Game">
            <Heading content="News"/>
            <ul>
                <li>Example 1</li>
                <li>Example 2</li>
                <li>Example 3</li>
            </ul>
        </div>
    );
}
