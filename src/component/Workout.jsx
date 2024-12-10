import React, { useEffect, useState } from "react";
import Mainlayout from "./Mainlayout";


const Workout = () => {
  const [exercises, setExercises] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    
    fetch(`https://exercises-by-api-ninjas.p.rapidapi.com/v1/exercises`, {
      method: "GET",
      headers: {
        "x-rapidapi-host": "exercises-by-api-ninjas.p.rapidapi.com",
        "x-rapidapi-key": "11d540ae64mshb5bb6070215ce0fp1a4ce6jsn0756463368df",
      },
    })
      .then((response) => response.json())
      .then((data) => setExercises(data))
      .catch((error) => setError("There was an error fetching the exercises."));
  }, []);

  return (
    <Mainlayout>
    <div className="workout-container">
      <h2>Workout Exercises </h2>
      {error && <p className="error-message">{error}</p>}

      <div className="exercise-cards">
        {exercises.map((exercise, index) => (
          <div key={index} className="exercise-card">
            <h3>{exercise.name}</h3>
            <h5><strong>Type:</strong> {exercise.type}</h5>
            <h5><strong>Equipment:</strong> {exercise.equipment}</h5>
            <p><strong>Difficulty:</strong> {exercise.difficulty}</p>
            <p><strong>Instructions:</strong> {exercise.instructions}</p>
          </div>
        ))}
      </div>
    </div>
    </Mainlayout>
  );
};

export default Workout;