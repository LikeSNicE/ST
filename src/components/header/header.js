import React from "react";
import styled from "styled-components";
import './header.scss';
import { Link } from 'react-router-dom';

const HeaderLinks = styled.ul`
    display: flex;
    margin: 0;
    align-items: center;
    color: #fff;
    list-style-type: none;
    li {
        margin-right: 20px;
        font-size: 18px;
    }
`;

const Header = () => {
  return (
    <div className="header-inner">
      <h3 className="header-inner-title">
        <Link to='/'>
          Stranger Things DB
        </Link>
      </h3>
      <HeaderLinks>
        <li>
          <Link to='/characters'>Characters</Link>
        </li>
        <li>
          <Link to='/seasons/'>Seasons</Link>
        </li>
        <li>
          <Link to='/charpage/'>Full Characters</Link>
        </li>
        <li>
          <Link to='/randomchar'>Random Char</Link>
        </li>
        <li>
          <Link to='/about'>About App</Link>
        </li>
      </HeaderLinks>
    </div>
  )
}

export default Header;