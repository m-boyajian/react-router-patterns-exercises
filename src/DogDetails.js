import React from "react";
import { Link } from "react-router-dom";
import "./DogDetails.css";

function DogDetails({ dogs, match }) {
  const { name } = match.params;
  console.log("dogs prop in DogDetails:", dogs);
  // Find the dog with the matching name
  const dog = dogs.find(dog => dog.name.toLowerCase() === name.toLowerCase());

  if (!dog) {
    return <div>Dog not found</div>;
  }

  return (
    <div className="dog-list-container">
      <h2 className="dog-list-heading">{dog.name}</h2>
      <p>Age: {dog.age}</p>
      <img src={dog.src} alt={dog.name} className="dog-image" />
      <h3>Facts:</h3>
      <ul>
        {dog.facts.map((fact, index) => (
          <li key={index}>{fact}</li>
        ))}
      </ul>
      <Link to="/dogs" className="go-back-link">
        Go Back
      </Link>
    </div>
  );
}

export default DogDetails;