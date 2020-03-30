import React, {useState} from 'react';

export default function SearchGames({handleSearch}) {
    const [state, setState] = useState({ text: "" });

    function handleChange(event){
        setState({ text: event.target.value});
    }

    return (
        <div>
            <form onSubmit={event => handleSearch(event, state)}>
                    <input type="text" placeholder="Search for game title.." onChange={event => {
                        handleChange(event);
                        handleSearch(event, state);
                    }
                } />
            <input type="submit" value="search" />
            </form>
        </div>
    );
}
