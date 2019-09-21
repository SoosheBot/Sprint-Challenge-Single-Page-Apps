import React from "react";
import styled from 'styled-components';

const Home = styled.div`
  color:#fd8eeb;
  text-align:center;
  }
`;


export default function HomePage(props) {

  return (
    <div className="home-page">
      <Home>
        <h1>Welcome to the ultimate fan site!</h1>
        <img
          className="main-img"
          src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Rick_and_Morty.svg"
          alt="Rick and Morty text logo. Image courtesy Wikipedia."
        />
      </Home>
      
    </div>
  );
}
