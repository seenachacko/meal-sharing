import React,{useState,useEffect}from 'react'

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
    console.log(reviews);
      const mealReviews=reviews.filter(item=>item.meal_id===idOfMeal);
      console.log(mealReviews);
      
      
      

    return (
        <div className="reviews">
            <h1>Reviews</h1>
            {error && <div>{error.message}</div>}
             {error === null && isLoading && <div> Loading...</div>}
             {mealReviews.length===0 &&<div> sorry, this meal has no reviews yet.</div>}
            
               {mealReviews.map((item, index)=>{
                   return(<p key={item.id}>{index+1}: {item.title}<br/>{item.description}<br/>Rating: {item.stars}<br/> Date: {item.created_date.substring(0, 10)}</p>)
                   
               })}
              
            
            
        </div>
    )
}

export default CheckReviews
