import React, { useEffect, useState } from "react";
import DisplayMeal from "./DisplayMeal";
function Meals() {
  const [input, setInput] = useState([]);
  const [mealItems, setMealItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (input === "") {
      fetch("/api/meals")
        .then((response) => response.json())
        .then((data) => {
          setIsLoading(false);
          setMealItems(data);
        })
    } else {
      fetch(`/api/meals?title=${input}`)
        .then((response) =>response.json())
        .then((data) => {
          setIsLoading(false);
          setMealItems(data);
        })
    }
  }, [input]);

  return (
    <div className="meals-container">
      {isLoading ? <div> Loading </div> : <>
        <div className="search-field">
        <input
          type="text"
          placeholder="search"
          name="search Meal"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      </div>
      <div>
        <h1>Meals</h1>
        <ul className="display-container-ul">
        {error && <div>{error.message}</div>}
        {error === null && isLoading && <div> Loading...</div>}
        {mealItems.length === 0 && <div>No meals found</div>}
          {mealItems.map((meal) => {
            return (
              <li key={meal.id}>
                <DisplayMeal meal={meal}></DisplayMeal>
              </li>
            );
          })}
          <br />
        </ul>
      </div>
    
      </>}
      </div>
  );
}
export default Meals;
