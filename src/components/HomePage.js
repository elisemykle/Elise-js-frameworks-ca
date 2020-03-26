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
            <h1>Games</h1>
            <ul>
                {
                    games.map((game, index) =>
                        <li key={index}><img src={game.background_image} className="gameimage" />
                            <p className="gamename">{game.name}</p>
                            <p className="gamereleasedtitle">Released</p>
                            <p className="gamereleased">{game.released}</p>
                            <p className="gameratingtitle">Rating</p>
                            <p className="gamerating">{game.rating}</p>
                            <button>Read More</button>
                        </li>
                    )
                }
            </ul>
        </div>
    );
}
