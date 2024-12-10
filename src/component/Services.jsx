import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import BMI from "./BMI";

const Services = () => {
  useEffect(() => {
    const cards = document.querySelectorAll(".card");

    const handleScroll = () => {
      cards.forEach((card) => {
        const rect = card.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
          card.classList.add("show");
        } else {
          card.classList.remove("show");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
<div className="section section-two" id="section-two">
  <div className="container2">
    <div className="row d-flex justify-content-between align-items-center">
     
      <div className="col-lg-6 d-flex justify-content-end">
        <div className="card large-card">
          <div className="pic"></div>
          <Link to='/shop'>
          <h2>Shop</h2>
          <span>Explore More in the store ! </span>
          <button></button></Link>
        </div>
      </div>

      
      <div className="col-lg-6 d-flex justify-content-start">
        <div className="wrapper">
          <input className="radio pic1" type="radio" id="cardUno" defaultChecked  />
          <label className="content card" htmlFor="cardUno" style={{backgroundImage: "url('./card1.png')"}}>
          <Link to = "/Food">
            <h1 className="title-card">Healthy Meals</h1></Link>
            <h3 className="card-title subsubtitle text-center">
            Healthy recipes to fuel your body <br/> and elevate your lifestyle
            </h3>
          </label>

          <input className="radio card pic2" type="radio" name="card" id="cardDos" />
          <label className="content card" htmlFor="cardDos" style={{backgroundImage: "url('./pic2.png')"}}>
           <Link to="/BMI"> <h1 className="title-card">
           BMI calculator
              
            </h1></Link>
            <h3 className="card-title subsubtitle text-center">Simple health tips to boost your wellness, <br/>from hydration to stress management</h3>
          </label>

          <input className="radio card pic3" type="radio" name="card" id="cardTres" />
          <label className="content card " htmlFor="cardTres"style={{backgroundImage: "url('./pic.3.png')"}} >
           <Link to="/Workout"><h1 className="title-card" >
            Workout
              
            </h1></Link> 
            <h3 className="card-title subsubtitle text-center">
            Effective workouts to enhance strength, <br/>flexibility, and endurance for a healthier body
            </h3>
          </label>
        </div>
      </div>
    </div>
  </div>
</div>
  );
};

export default Services;