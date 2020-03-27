import React from 'react';

export default function GameItem(props) {
    return (
        <div>
            <img src={props.game.background_image} alt={props.name}/>
            <h1>{props.name}</h1>
        </div>
    );
}
