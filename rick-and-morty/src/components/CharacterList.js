import React, { useEffect, useState } from "react";
import CharacterCard from './CharacterCard';

import axios from 'axios';

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [chars, setChars] = useState([]);
 

  useEffect(() => {
    
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    axios
        .get(`https://rickandmortyapi.com/api/character/`)
        .then(response => {
          console.log("Testing if this works", response);
          setChars(response.data.results);
        })
        .catch(error => {
          console.error('Where are the characters?', error);
        });
  }, []);
  
  if (!chars) {
    return <div>Loading character information...</div>;
  }
  return (
    <div className="character-list">
      {/* <h2>TODO: `array.map()` over your state here!</h2> */}
        {chars.map(charList => {
          return (
            <CharacterCard key={charList.id}
            name={charList.name}
            status={charList.status}
            species={charList.species}/>
            );
        })} 
    </div>
  );
}



