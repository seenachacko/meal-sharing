import React from "react";
import { Link } from "react-router-dom";
import image1 from "../assets/images/splah.png";

function DisplayMeal({ meal }) {
  return (
    <div className="meal">
      <Link to={`/meals/${meal.id}`}>
        <img src={image1} alt="mealpic" className="meal-image"/><br/><b>{meal.title}</b></Link>
      <br />
      {meal.location}
      <br />
    </div>
  );
}

export default DisplayMeal;
