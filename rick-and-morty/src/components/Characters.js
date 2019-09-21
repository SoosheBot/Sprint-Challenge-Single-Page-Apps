import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import CharacterCard from './CharacterCard';
import axios from 'axios';


export default function Characters(props) {
    const [characters, setCharacters] = useState({});

    useEffect(() => {
    
        const id = props.match.params.id;
        // change ^^^ that line and grab the id from the URL
        // You will NEED to add a dependency array to this effect hook
        console.log(props);
    
           axios
            .get(`https://rickandmortyapi.com/api/character/${id}`)
            .then(response => {
              setCharacters(response.data);
            })
            .catch(error => {
              console.error(error);
            });
    
      },[props.match.params.id]);
      
      const { name, status, species } = characters;
      return (
        <div className="char-wrapper">
          <CharacterCard 
          name={name}
          status={status}
          species={species}
          />
          <Link to='/'><div className="home-button">Home</div></Link>
        </div>
    );
}
    