import React from 'react';
import Mainlayout from './Mainlayout';
import '../App.css'
import Services from './Services'
import Aboutus from './Aboutus'
import { Link } from 'react-router-dom';

const Landing = () => {
  return (
    <div>
      <Mainlayout>
        <div className="section section-one" id="home">
          <div className='contanier '>
            <div className='row '>
              <div className='col m-3'>
                <ul className="list-unstyled">
                  <li className='small-text'>Every small step leads to a big change</li>
                  <li className='big-text'><strong>Because you deserve a life</strong></li>
                  <li className='big-text'><strong>full of energy and health</strong></li>
                </ul>
              </div>
              <div className='row '>
                <div className='col m-3'>
                  <Link to="/Shop">
                    <button className='btn shop-button'>Shop Now!</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Services />
        <Aboutus />
      </Mainlayout>
    </div>
  );
};

export default Landing;