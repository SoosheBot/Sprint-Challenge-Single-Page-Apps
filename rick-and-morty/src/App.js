import React, { useState } from "react";
import { BrowserRouter as Route, Link } from 'react-router-dom';
import WelcomePage from './components/WelcomePage';
import Header from "./components/Header.js";
import CharacterList from './components/CharacterList';
import Characters from './components/Characters';

export default function App() {
  const [header] = useState([]);
  return (
    <main>
      <Header> <Route exact path="/" component={WelcomePage}
        />
        <Route exact path="/characters-list" render={props => (
          <CharacterList {...props} chars={header}
          />
          )}
          />
        <Route path="/characters-list/:id" render={props => <Characters {...props} chars={header}/>}
        />
        </Header>
      <WelcomePage />
    </main>

  );
}
