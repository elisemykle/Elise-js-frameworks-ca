import React from 'react';
import { Link } from "react-router-dom";


export default function GameItem(props) {
    return (
        <div>
            <img src={props.game.background_image} alt={props.name}/>
            <h1>{props.name}</h1>
            <Link className="gameLink btn btn-primary" to={"/game/" + props.item.id}>Read More</Link>
        </div>
    );
}
