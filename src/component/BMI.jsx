import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Mainlayout from './Mainlayout'; 

const Bmi = () => {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, setBmi] = useState(null);
  const [error, setError] = useState('');

 
  const handleCalculateBmi = async () => {
    if (!weight || !height) {
      setError('Please fill in both weight and height.');
      return;
    }
    
    try {
      setError('');
      const response = await fetch(`https://body-mass-index-bmi-calculator.p.rapidapi.com/metric?weight=${weight}&height=${height}`, {
        method: 'GET',
        headers: {
          'x-rapidapi-host': 'body-mass-index-bmi-calculator.p.rapidapi.com',
          'x-rapidapi-key': '11d540ae64mshb5bb6070215ce0fp1a4ce6jsn0756463368df',
        },
      });

      const data = await response.json();
      
      if (data.bmi) {
        setBmi(data.bmi);
      } else {
        setError('There was an error calculating your BMI. Please try again.');
      }
    } catch (err) {
      setError('An error occurred while calculating your BMI.');
    }
  };

  return (
    <Mainlayout>
      <div className="bmi-container">
        <div className="bmi-box">
          <h2>BMI Calculator</h2>
          <div className="input-container">
            <label>Weight (kg):</label>
            <input
              type="number"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              placeholder="Enter your weight"
              className="input-field"
            />
          </div>
          <div className="input-container">
            <label>Height (m):</label>
            <input
              type="number"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              placeholder="Enter your height"
              className="input-field"
            />
          </div>
          <button className="calculate-btn" onClick={handleCalculateBmi}>
            Calculate BMI
          </button>

          {bmi && (
            <div className="result-box">
              <h3>Your BMI: {bmi}</h3>
              <p>{bmi < 18.5 ? 'Underweight' : bmi >= 18.5 && bmi < 24.9 ? 'Normal weight' : bmi >= 25 && bmi < 29.9 ? 'Overweight' : 'Obesity'}</p>
            </div>
          )}

          {error && <p className="error">{error}</p>}
        </div>
      </div>
    </Mainlayout>
  );
};

export default Bmi;