import React from "react";

const Aboutus = () => {

  return (
    <section className="about-us" id="aboutus">
      <div className="about-us-container">
        <div className="image-container">
          <img className="highlighted-image" src={'/pic sec3.PNG'} alt="About Us" width={520} height={520} />
        </div>
        <div className="text-container">
            <h1><span style={{color:'#DE4D66'}}>✦︎</span><strong>About us</strong><span style={{color:'#DE4D66'}}>✦︎</span></h1>
          <h4>
          <br/><br/>we're passionate about fitness and dedicated to helping you reach your goals. We provide creative solutions for fitness lovers everywhere.
          </h4>
          <p>
           <br/><span style={{color:'#DE4D66'}} >✦︎</span>Join us as we pave the way to a healthier you, one meal and workout at a time!<span style={{color:'#DE4D66'}}>✦︎</span>
          </p>
          <div className="features mt-5">
            <div className="feature">
              <h3>Food </h3>
              <p class="material-symbols-outlined">fork_spoon</p>
            </div>
            <div className="feature ">
              <h3>Tips</h3>
              <p>
              <i class="bi bi-lightbulb"></i>
              </p>
            </div>
            <div className="feature ">
              <h3>Workouts</h3>
              <p>
              <i class="bi bi-scooter"></i>
              </p>
            </div>
            <div className="feature">
              <h3>Shopping</h3>
              <p>
              <i class="bi bi-cart3"></i>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Aboutus;