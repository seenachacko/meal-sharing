import React,{useState,useEffect}from 'react'
import ReactStars from "react-rating-stars-component";
function CheckReviews({idOfMeal}) {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [reviews,SetReviews]=useState([]);
    useEffect(() => {  
          fetch("/api/reviews")
            .then((response) => {
              if (response.ok) {
                return response.json();
              } else {
                throw new Error("Something went wrong ...");
              }
            })
            .then((data) => {
              setIsLoading(false);
              SetReviews(data);
            })
            .catch((error) => {
              setError(error);
              setIsLoading(false);
            });
        
      }, []);
      const mealReviews=reviews.filter(item=>item.meal_id===idOfMeal);
      
      
      

    return (
        <div className="reviews">
            <h1>Reviews</h1>
            {error && <div>{error.message}</div>}
             {error === null && isLoading && <div> Loading...</div>}
             {mealReviews.length===0 &&<div> sorry, this meal has no reviews yet.</div>}
            
               {mealReviews.map((item, index)=>{
                   return(<p key={item.id}>{index+1}: {item.title}<br/>{item.description}<br/>
                   <ReactStars
            classNames="stars"
          count={5}
          size={34}
          edit={false}
          value={item.stars}
          activeColor="#8f5909"
        />
                    Date: {item.created_date.substring(0, 10)}</p>)
                   
               })}
              
            
            
        </div>
    )
}

export default CheckReviews
