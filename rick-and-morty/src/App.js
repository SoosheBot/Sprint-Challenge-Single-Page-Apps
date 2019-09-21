import React, { useState } from "react";
import { BrowserRouter as Route } from 'react-router-dom';
import WelcomePage from './components/WelcomePage';
import Header from "./components/Header.js";
import CharacterList from './components/CharacterList';


export default function App() {
  const [header] = useState([]);
  return (
    <main>
      <Header>
          <Route exact path="/" component={WelcomePage}/>
          <Route exact path="/characters-list" component={CharacterList}/>
          <CharacterList
          route exact path='/' component={WelcomePage}/>
        </Header>
      <WelcomePage />
    </main>

  );
}
