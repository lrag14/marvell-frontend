import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/">Personnages</Link>
          </li>
          <li>
            <Link to="/comics">Comics</Link>
          </li>

          <li>
            <Link to="/favoris">Favoris</Link>
          </li>
        </ul>
      </nav>
      <img src={logo} alt="Marvel Logo" />
    </header>
  );
};

export default Header;
