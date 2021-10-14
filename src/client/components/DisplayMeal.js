import React,{useEffect,useState} from "react";
import { Link } from "react-router-dom";
import image1 from "../assets/images/splah.png";

function DisplayMeal({ meal }) {
  const [review,setReviews]=useState();
  const fetchReviewsData = () => {
    fetch("/api/reviews/")
      .then((response) => response.json())
      .then((data) => setReviews(data));
  };
useEffect(() => {
  fetchReviewsData();
}, [])

  return (
    <div className="meal">
      <Link to={`/meals/${meal.id}`} style={{ color: '#190552 ' }}>
        <img src={image1} alt="mealpic" className="meal-image"/><br/><b>{meal.title}</b>
      <br />
      {meal.location}
      <br />
      </Link>
    </div>
  );
}

export default DisplayMeal;
