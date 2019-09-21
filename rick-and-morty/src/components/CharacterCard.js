import React from "react";
import styled from 'styled-components';

const Card = styled.div`
  text-align:center;
  h1,h2{
    color:#DA9004;
  }

  p{
    color:#DA04B9;
  }
`;
export default function CharacterCard(props) {
  // console.log('Characters', props);
  
  return (
    <Card key={props.id}>
        <div className="char-card">
          <h2>Name: {props.name}</h2>
          <p>Status: {props.status}</p>
          <p>Species: {props.species}</p>
        </div>
    </Card>
  )
};
