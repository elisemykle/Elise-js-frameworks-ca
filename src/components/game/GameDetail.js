import React, { useState, useEffect } from 'react';

const API_URL = "https://api.rawg.io/api/games/${id}";

export default function GameDetail() {

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
            <h1>Game details</h1>
            <ul>
                {
                    games.map((game, index) =>
                        <li key={index}><img src={game.background_image} className="gamedetail--image" />
                            <p className="gamedetail--name">{game.name}</p>
                            <p className="gamedetail--description">{game.description}</p>
                            <p className="gamedetail--websitelink">{game.website_link}</p>
                        </li>
                    )
                }
            </ul>
        </div>
    );
}
