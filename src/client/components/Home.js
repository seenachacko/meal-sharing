import React from "react";
import background from "../assets/images/cover.png";
function Home() {
  return (
    <div className="bgimage" style={{ backgroundImage: `url(${background})` }}>
      <div className="heading">
        <h1>Find your taste & Enjoy delicious cuisine</h1>
        <br />
        <h3>" Laughter is brightest in the palce where food ♨ is good "</h3>
      </div>
    </div>
  );
}

export default Home;
