import React, { useEffect, useState } from "react";
import ReservationForm from "./ReservationForm";
import ReviewForm from "./ReviewForm";
import image1 from "../assets/images/splah.png";
import LoadImage from "../LoadImage";
import { useParams, Link } from "react-router-dom";
import CheckReviews from "./CheckReviews";
function MealWithId() {
  const [mealWithId, setMealWithId] = useState([]);
  const [availableRes, setAvailableRes] = useState([]);
  const [reserveStatus, setReserveStatus] = useState(true);
  const [form, setForm] = useState(false);
  const [reviewForm, setReviewForm] = useState(false);
  const [reviews, setReviews] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const mealId = useParams();
  useEffect(() => {
    fetch(`/api/meals?availableReservations=true`)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("oops Someting went wrong");
        }
      })
      .then((data) => {
        setIsLoading(false);
        setAvailableRes(data);
      })
      .catch((error) => {
        setError(error);
        setIsLoading(false);
      });
  }, []);

  useEffect(() => {
    fetch(`/api/meals/${mealId.id}`)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("oops Someting went wrong");
        }
      })
      .then((data) => {
        setIsLoading(false);
        setMealWithId(data[0]);
      })
      .catch((error) => {
        setError(error);
        setIsLoading(false);
      });
  }, []);

  let present = availableRes.filter((item) => item.meal_id === mealWithId.id);
  const x = present[0];
  const handleReservation = () => {
    setReviewForm(false);
    setForm(true);
    setReviews(false);
    if (present.length === 0) {
      setReserveStatus(false);
    }
  };
  const handleReview = () => {
    setForm(false);
    setReviewForm(true);
    setReviews(false);
  };
  const handleViewReviews = () => {
    setForm(false);
    setReviewForm(false);
    setReviews(true);
  };
  return (
    <div className="meal-withid-container">
      <div className="meal-detail">
        <span className="meal-title">{mealWithId.title}</span>
       
        <br /> <br />
        {error && <div>{error.message}</div>}
        {error === null && isLoading && <div> Loading...</div>}
        <div>
        {mealWithId.title ? (
        <LoadImage title={mealWithId.title} />
      ) : (
        ""
      )}
          
          <br />
          <div className="details">
            {mealWithId.description}
            <br />
            Place :{mealWithId.location}
            <br />
            price :{mealWithId.price} kr
            <br />
          </div>
          <button onClick={handleReservation}>Make Reservation</button>
          <button onClick={handleReview}>Add Review</button>
          <button onClick={handleViewReviews}>Check Reviews</button>
          <Link to="/meals">
            <button className="back-button">Back</button>
          </Link>
          <br />
        </div>
      </div>
      {form ? (
        reserveStatus ? (
          <ReservationForm idOfMeal={mealWithId.id} array={x} />
        ) : (
          "no seats available"
        )
      ) : (
        ""
      )}

      {reviewForm ? <ReviewForm idOfMeal={mealWithId.id}></ReviewForm> : ""}
      {reviews ? <CheckReviews idOfMeal={mealWithId.id}></CheckReviews> : ""}
    </div>
  );
}

export default MealWithId;
