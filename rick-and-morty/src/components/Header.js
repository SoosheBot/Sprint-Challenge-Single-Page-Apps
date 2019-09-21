import React from "react";
import { Link } from 'react-router-dom';
import styled from 'styled-components';



const Head = styled.div`
  text-align:center;
  h1{
    color:#89A203;
  }

  a{
    margin:25px;
    text-decoration:none;
    color:#8e1438 
    font-weight:bold;

  }
`;
export default function Header() {
    return (
      <Head className="ui centered">
         <nav>
              <div className="nav-links">
                <Link to='/'>Home </Link>
                <Link to='/characters-list'>Characters </Link>
              </div>
          </nav>
        <h1 className="ui center">Rick &amp; Morty Fan Page</h1>
      </Head>
  );
}
