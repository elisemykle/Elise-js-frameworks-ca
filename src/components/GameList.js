import React, { useState, useEffect } from 'react';
import SearchGames from './SearchGames.js';
import GameItem from './GameItem.js';

const API_URL = "https://api.rawg.io/api/games";

export default function GameList() {
    const [state, setState] = useState([]);
    const [filterState, setFilterState] = useState([]);

    useEffect(() => {
        fetch(API)
        .then(response => response.json())
        .then(data => {
            setState(data.results);
            setFilterState(data.results);
        })
        .catch(error => console.log(error))
    }, []);

    const filterArray = state.filter(game => {
                const gameName = game.title.toLowerCase();
                if(gameName.includes(searchText)){
                    return true;
                }
                return false;
            });

            setFilterState(filterArray);
        }

    return (
        <div>
            <SearchGames handleSearch={filterRecipes} />
            <ul>
                {
                    filterState.map (
                        (game, index) => <li key={index}><GameItem title={game.name}
                        background_image={game.background_image} /></li>
                    )
                }
            </ul>
        </div>
    );
}
