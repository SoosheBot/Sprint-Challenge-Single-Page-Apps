import React from "react";
import styled from 'styled-components';
import { BrowserRouter as Route,Link} from 'react-router-dom';


const Head = styled.div`
  text-align:center;
  h1{
    color:#89A203;
  }

  a{
    text-decoration:none;
    color:#8e1438;
    font-weight:bold;
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
