import React from 'react';
import { Link } from "react-router-dom";
import "./Nav.css";

function Nav({ dogs }) {
  return(
    <nav className="dog-nav">
      <ul>
        {dogs.map((dog, index) => (
          <ul key={index}>
            <Link to={`/dogs/${dog.name}`}>{dog.name}</Link>
          </ul>
        ))}
      </ul>
    </nav>
  )
}

export default Nav;