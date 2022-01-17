import React,{useEffect,useState} from "react";
import { Link } from "react-router-dom";
import ReactStars from "react-rating-stars-component";
import image1 from "../assets/images/splah.png";
import reviews from "./helper";

function DisplayMeal({ meal }) {
  const [review,setReviews]=useState([]);
  const [error, setError] = useState(null);
  // const fetchReviewsData = () => {
  //   fetch("/api/reviews/")
  //     .then((response) => response.json())
  //     .then((data) => setReviews(data));
  // };
useEffect(() => {
  reviews()
  .then ((data)=>setReviews(data))
  .catch(()=>setError(true));
}, [])
let avgRating =0;
const mealReviews=review.filter(item=>item.meal_id===meal.id);
const stars = mealReviews.map((item)=>item.stars);
if (stars.length >0){
  const average =stars.reduce((total, star) => {
        total += star;
       return Math.round(total/stars.length);
  }, 0);
 avgRating = average;
 console.log(avgRating);
}

  return (
    <div className="meal">
      <Link to={`/meals/${meal.id}`} style={{ color: '#190552 ' }}>
        <img src={image1} alt="mealpic" className="meal-image"/><br/><b>{meal.title}</b>
      <br />
      {meal.location}
      <br />
      <ReactStars
            classNames="stars"
          count={5}
          size={34}
          edit={false}
          value={avgRating }
          activeColor="#F7C709"
        /> 
      <br />
      </Link>
    </div>
  );
}

export default DisplayMeal;
