import React, { useEffect, useState } from "react";
import DisplayMeal from "./DisplayMeal";
import background from "../assets/images/mealsbg.png";
function Meals() {
  const [input, setInput] = useState([]);
  const [mealItems, setMealItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchMeals = (api) => {
    fetch(api)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Something went wrong ...");
        }
      })
      .then((data) => {
        setIsLoading(false);
        setMealItems(data);
      })
      .catch((error) => {
        setError(error);
        setIsLoading(false);
      });
  };

  useEffect(() => {
    if (input === "") {
      fetchMeals("/api/meals");
    } else {
      fetchMeals(`/api/meals?title=${input}`);
    }
  }, [input]);

  return (
    // <div className="bgimage" style={{ backgroundImage: `url(${background})` }}>
    <div className="meals-container">
      <input
        className="search-field"
        type="text"
        placeholder="search"
        name="search Meal"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      <div>
        <h1>Meals</h1>
        <ul className="display-container-ul">
          {error && <div>{error.message}</div>}
          {isLoading ? (
            <div> Loading...</div>
          ) : mealItems.length === 0 ? (
            <div>No meals found</div>
          ) : (
            mealItems.map((meal) => {
              return (
                <li key={meal.id}>
                  <DisplayMeal meal={meal}></DisplayMeal>
                </li>
              );
            })
          )}
          <br />
        </ul>
      </div>
    </div>
  );
}
export default Meals;
