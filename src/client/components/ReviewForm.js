import React, { useState, useEffect } from "react";
import postData from "./postData";

function ReviewForm({ idOfMeal }) {
  const date = new Date().toISOString().substring(0, 10);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [rating, setRating] = useState("");

  const newReview = {
    title: title,
    description: description,
    meal_id: idOfMeal,
    stars: rating,
    created_date: date,
  };
  const handleAddReview = () => {
    const response = postData("api/reviews", newReview);
    if (response) {
      alert(`Thank You, Successfully Added your review`);
    } else {
      throw new Error(response.status);
    }
  };

  return (
    <div className="review-form">
      <h2>Review Form</h2>
      <label>
        title :
        <input
          type="text"
          id="title"
          placeholder="enter title"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </label>
      <br />
      <label>
        description:
        <input
          type="text"
          id="description"
          placeholder="enter description"
          name="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </label>
      <br />
      <label>
        Give a rating(*1-5) :
        <input
          type="number"
          id="rating"
          min="1"
          max="5"
          name="rating"
          value={rating}
          onChange={(e) => setRating(e.target.value)}
        />
      </label>
      <br />
      <button onClick={handleAddReview}>Submit</button>
    </div>
  );
}

export default ReviewForm;
