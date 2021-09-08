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
  console.log(review);
useEffect(() => {
  fetchReviewsData();
}, [])

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
