import React from "react";
import {Link} from "react-router-dom";
import { Grid, Row, Col } from "react-bootstrap";

export default function (props) {
    return (
        <ul className="GameList-row">
            {props.items.map(item => {
                return (
                    <li className="GameItem-col">
                        <img className="game--image" src={item.background_image} alt="backgroundimage" alt={`image of ${item.name}`}/>
                        <h2 className="game--name">{item.name}</h2>
                        <div className="Game-Detail">
                            <span className="game--rating">{item.rating}</span>
                            <span className="game--release">{item.released}</span>
                        </div>
                        <Link className="GameLink btn btn-primary" to={"/game/" + item.id}>Read More</Link>
                    </li>
                )
            })}
        </ul>
    )
}
