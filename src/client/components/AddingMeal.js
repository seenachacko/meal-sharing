import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import postData from "./postData";
import background from "../assets/images/bg.png";

function AddingMeal() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [price, setPrice] = useState("");
  const [when, setWhen] = useState(new Date());
  const [maxReservations, setMaxReservations] = useState("");
  const date = new Date().toISOString().substring(0, 10);

  function handleAddmeal(event) {
    event.preventDefault();
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
    setTitle("");
    setDescription("");
    setLocation("");
    setPrice("");
    setWhen(new Date());
    setMaxReservations("");
  }

  return (
    <div
      className="bgimage add-meal"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="form adding-meal-form">
        <h3>You can add your meals here .....</h3>

        <input
          type="text"
          placeholder="enter title"
          name="tile"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <br />

        <input
          type="text"
          placeholder="enter description"
          name="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <br />

        <input
          type="text"
          placeholder="enter location"
          name="location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />

        <br />
        <DatePicker
          placeholder="Choose a date"
          selected={when}
          onChange={(date) => setWhen(date)}
          minDate={new Date()}
          dateFormat="yyyy/MM/dd"
        />
        <br />

        <input
          type="number"
          placeholder="enter price"
          name="price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />

        <br />

        <input
          type="number"
          placeholder="max reservation"
          name="name"
          value={maxReservations}
          onChange={(e) => setMaxReservations(e.target.value)}
        />

        <br />

        <button onClick={handleAddmeal}>Submit</button>
      </div>
    </div>
  );
}

export default AddingMeal;
