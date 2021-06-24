import React, { useState } from "react";
import postData from "./postData";
function ReservationForm({ idOfMeal, array }) {
  const [name, setName] = useState();
  const [phoneNumber, setPhoneNumber] = useState();
  const [email, setEmail] = useState();
  const [numberOfGuest, setNumberOfGuest] = useState();
  const initialState = () => {
    setName("");
    setPhoneNumber("");
    setEmail("");
    setNumberOfGuest("");
  };

  const date = new Date().toISOString().substring(0, 10);
  function handleAddReservation() {
    const newReservation = {
      number_of_guests: numberOfGuest,
      meal_id: idOfMeal,
      created_date: date,
      contact_phonenumber: phoneNumber,
      contact_name: name,
      contact_email: email,
    };

    const response = postData("api/reservations", newReservation);
    if (response) {
      alert(
        `Thank You, Successfully reserved for: ${newReservation.number_of_guests} seats`
      );
    } else {
      throw new Error(response.status);
    }
    initialState();
  }
  let avilableSeats =
    Number(array.max_reservations) - Number(array.total_reservations);

  return (
    <div className="reservation-form">
      <h2>Reservation Form</h2>
      <h3>*remember only :{avilableSeats} seats left</h3>
      <label>
        Name :
        <input
          type="text"
          id="myname"
          placeholder="enter Name"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <br />
      <label>
        Phone number :
        <input
          type="tel"
          placeholder="phone number"
          name="phoneNumber"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
      </label>
      <br />
      <label>
        Email :
        <input
          type="email"
          placeholder="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      <br />
      <label>
        number of guests :
        <input
          type="number"
          placeholder="number of guests"
          name="numberOfGuest"
          value={numberOfGuest}
          onChange={(e) => setNumberOfGuest(e.target.value)}
        />
      </label>
      <br />
      <button onClick={handleAddReservation}>Submit</button>
    </div>
  );
}

export default ReservationForm;
