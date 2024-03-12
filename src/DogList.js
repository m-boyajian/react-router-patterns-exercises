import React from "react";
import "./DogList.css";

function DogList({ dogs }) {
  return (
    <div className="dogs-list-container">
      <h1 className="dogs-list-heading">List of Dogs:</h1>
      <ul>
        {dogs.map((dog, index) => (
          <ul key={index}>
            <p>Name: {dog.name}</p>
            <p>Age: {dog.age}</p>
            <img src={dog.src} alt={dog.name} className="dogs-image" />
            <p>Facts:</p>
            <ul>
              {dog.facts.map((fact, index) => {
                return <li key={index}>{fact}</li>;
              })}
            </ul>
          </ul>
        ))}
      </ul>
    </div>
  );
}

export default DogList;