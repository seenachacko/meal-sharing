
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import postData from "./postData";

function AddingMeal() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [price, setPrice] = useState("");
  const [when, setWhen] = useState(new Date());
  const [maxReservations, setMaxReservations] = useState("");
  const date = new Date().toISOString().substring(0, 10);

  function handleAddmeal() {
    const newMeal = {
      title: title,
      description: description,
      location: location,
      when: when.toISOString().substring(0, 10),
      max_reservations: maxReservations,
      price: price,
      created_date: date,
    };
    const response = postData("api/meals", newMeal);
    if (response) {
      alert(`Thank You, Your Meal : ${newMeal.title} Added`);
    } else {
      throw new Error(response.status);
    }
  }

  return (
    <div className="add-meal">
      <h2>Add a meal</h2>
      <div className="form">
        <label>
          title :
          <input
            type="text"
            placeholder="enter title"
            name="tile"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </label>
        <br />
        <label>
          description :
          <input
            type="text"
            placeholder="enter description"
            name="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </label>
        <br />
        <label>
          location :
          <input
            type="text"
            placeholder="enter location"
            name="location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </label>
        <br />
        <label>
          When :
          <DatePicker
            selected={when}
            onChange={(date) => setWhen(date)}
            dateFormat="yyyy/MM/dd"
          />
        </label>
        <br />
        <label>
          price :
          <input
            type="number"
            placeholder="enter price"
            name="price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </label>
        <br />
        <label>
          max reservations :
          <input
            type="number"
            placeholder="enter max reservation"
            name="name"
            value={maxReservations}
            onChange={(e) => setMaxReservations(e.target.value)}
          />
        </label>
        <br />

        <button onClick={handleAddmeal}>Submit</button>
        
      </div>
    </div>
  );
}

export default AddingMeal;