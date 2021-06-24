import React from "react";
import background from "../assets/images/cover.png";
function Home() {
  return (
    <div className="bgimage" style={{ backgroundImage: `url(${background})` }}>
      <div className="heading">
        <h1>Find your taste . . . .</h1>
      </div>
    </div>
  );
}

export default Home;
