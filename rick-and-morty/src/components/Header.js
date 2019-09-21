import React, { useState } from "react";
import styled from 'styled-components';
import { BrowserRouter as Route,Link} from 'react-router-dom';


const Head = styled.div`

h1{
  color:#89A203;
}
`;
export default function Header() {
    return (
      <Head className="ui centered">
        <h1 className="ui center">Rick &amp; Morty Fan Page</h1>
        <nav>
            <div className="nav-links">
              <Link to='/'>Home </Link>
              <Link to='/characters-list'>Characters </Link>
            </div>
        </nav>
      </Head>
  );
}
