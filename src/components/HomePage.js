import React, { useState, useEffect } from 'react';

const API_URL = "https://api.rawg.io/api/games";

export default function HomePage() {

    const [games, updateGames] = useState([]);

    useEffect(() => {

        // Fetch the data at API
        fetch(API_URL)

        // Parse data as json
        .then(response => response.json())

        // Update the state
        .then(json => {
        // Update our list
        updateGames(json.results);
        })

        // Log any errors to the console
        .catch(error => console.log(error))
    }, []);

    return (
        <div>
            <h1>Home</h1>
            <ul>
                {
                    games.map((game, index) =>
                        <li key={index}><img src={game.background_image} className="game--image" />
                            <p className="game--name">{game.name}</p>
                            <p className="game--releasedtitle">Released</p>
                            <p className="game--released">{game.released}</p>
                            <p className="game--ratingtitle">Rating</p>
                            <p className="game--rating">{game.rating}</p>
                            <button className="game--button">Read More</button>
                        </li>
                    )
                }
            </ul>
        </div>
    );
}
