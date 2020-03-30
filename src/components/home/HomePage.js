import React, { useState, useEffect } from 'react';
import GameList from "./GameList";
import Container from 'react-bootstrap/Container'
import {Row, Col} from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";


export default function HomePage(props) {
    const [game, setGame] = useState({
        original: [],
        filtered: []
    });

    function SearchName(event) {
        event.preventDefault();
        setGame({
            ...game,
            filtered: game.original.filter(game => new RegExp(event.target.value, "gi").test(game.name))
        })
    }

    useEffect(() => {
        fetch("https://api.rawg.io/api/games")
            .then(response => response.json())
            .then(json => setGame({
                original: json.results,
                filtered: json.results
            }))
            .catch(error => console.log(error));
    }, []);


    return (
        <div>
            <Form className={"SearchBar row"}>
                <Form.Control className={"Search--Box"} type="text" name={"search"} onChange={event => SearchName(event)} placeholder={"Search by game names..."}/>
                <Button className={"Search--Button"} type="submit">Search</Button>
            </Form>
            <GameList items={game.filtered}/>
        </div>
    )
}
