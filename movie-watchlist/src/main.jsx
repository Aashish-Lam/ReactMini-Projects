import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import StarRating from "./Components/StarRating.jsx";

function Test() {
  const [movieRating, SetMovieRating] = useState(0);
  return (
    <>
      <StarRating
        maxRating={10}
        color="blue"
        onSetMovieRating={SetMovieRating}
      />
      <p>This is a the rating {movieRating}</p>
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <App /> */}
    <StarRating
      maxRating={5}
      message={["Terrible", "Bad", "Good", "Amazing", "Great"]}
    />
    <StarRating
      maxRating={10}
      defaultRatings={9}
    />
    <Test></Test>
  </React.StrictMode>
);
