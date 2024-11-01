import Rating from "@mui/material/Rating";
import { useState } from "react";

export default function RatingDemo() {
  const [score, setScore] = useState(5);
  return (
    <div>
      <h1>Rating Demo. Current Rating: {score}</h1>
      <Rating
        name="simple-controlled"
        value={score}
        onChange={(event, newValue) => {
          setScore(newValue);
        }}
      />
    </div>
  );
}
