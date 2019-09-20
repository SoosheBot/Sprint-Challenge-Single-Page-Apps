import React, { useState, useEffect } from 'react';
import CharacterCard from './CharacterCard';

import axios from 'axios';

const Characters = (props) => {
    const [characters, setCharacters] = useState({});

    useEffect(() => {
        axios
        .get("https://rickandmortyapi.com/api/character/")
        .then(response => {
            setCharacters(response.data);
        })
        .catch(error => {
            console.log("An error in your Characters.js file", error)
        });
    },[]);

    const { name, status, species } = characters;
    return (
        <div className='save-wrapper'>
            <CharacterCard
            name={name}
            status={status}
            species={species}
            />
        </div>
    );
}

export default Characters;