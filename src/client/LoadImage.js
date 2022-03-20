import React from "react";
import biriyani from "./assets/images/chickenbiriyani.png";
import pasta from "./assets/images/pasta.png";
import pizza from "./assets/images/pizza.png";
import fish from "./assets/images/fish.png"
import chickenbbq from "./assets/images/chickengrill.png"
import beafsteak from "./assets/images/beafsteak.png";
import rødgrød from "./assets/images/rødgrød.png";

const lookup = [
  {
    path: chickenbbq,
    categories:"chicken bbq",
  },
  {
    path: beafsteak,
    categories:"beaf steak",
  },
  {
    path: biriyani,
    categories:"chicken biriyani",
  },
  {
    path: fish,
    categories:"fish fry",
  },
  {
    path: pasta,
    categories:"rød pasta",
  },
  {
    path: pizza,
    categories:"pizza",
  },
  {
    path: rødgrød,
    categories:"rødgrød med fløde",
  },
];
function LoadImage({ title }) {
  console.log(title)
    const mealTtile=title.toLowerCase();
    let category = lookup.find((item) => item.categories.includes(mealTtile.trim()));
   
    if (!category) category = lookup[0];
    return (
      <div>
         <img src={category.path} alt="mealpic" className="meal-image"/><br/>
      </div>
    );
  }
  
  export default LoadImage;