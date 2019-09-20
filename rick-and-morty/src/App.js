import React, { useState } from "react";
import { BrowserRouter as Route, Link } from 'react-router-dom';
import Header from "./components/Header.js";
import CharacterList from './components/CharacterList';
import WelcomePage from './components/WelcomePage';
import Characters from './Characters';
export default function App() {
 const [data] = useState();

  return (
    <main>
      <Header>
        <nav>
          <div className="nav-links">
            <Link to='/'>Home</Link>
            <Link to='/characters-list'>Characters</Link>
          </div>
        </nav>

        <Route exact path="/" component={WelcomePage}
        />
        <Route exact path="/characters-list" render={props => (
          <CharacterList {...props} chars={data}
          />
          )}
          />
        <Route path="/characters-list/:id" render={props => <Characters {...props} chars={data}/>}
        />
      </Header>
      <WelcomePage />
    </main>

  );
}
