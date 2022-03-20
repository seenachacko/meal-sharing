import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ReactStars from "react-rating-stars-component";
import image1 from "../assets/images/splah.png";
import reviews from "./helper";
import LoadImage from "../LoadImage";

function DisplayMeal({ meal }) {
  const [review, setReviews] = useState([]);
  const [error, setError] = useState(null);
  // const fetchReviewsData = () => {
  //   fetch("/api/reviews/")
  //     .then((response) => response.json())
  //     .then((data) => setReviews(data));
  // };
  useEffect(() => {
    reviews()
      .then((data) => setReviews(data))
      .catch(() => setError(true));
  }, []);
  let avgRating = 0;
  const mealReviews = review.filter((item) => item.meal_id === meal.id);
  const stars = mealReviews.map((item) => item.stars);
  if (stars.length > 0) {
    const average = stars.reduce((total, star) => {
      total += star;
      return Math.floor(total / stars.length);
    }, 0);
    avgRating = average;
  }

  return (
    <div className="meal">
      <LoadImage title={meal.title} />
      <br />
      <Link to={`/meals/${meal.id}`} style={{ color: "#190552 " }}>
        <br />
        <b>{meal.title}</b>
        <br />
        {meal.location}
        <br />
        <ReactStars
          classNames="stars"
          count={5}
          size={34}
          edit={false}
          value={avgRating}
          activeColor="#8f5909"
        />
        <br />
      </Link>
    </div>
  );
}

export default DisplayMeal;
