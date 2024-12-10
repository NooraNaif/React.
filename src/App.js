import 'bootstrap/dist/css/bootstrap.min.css'; 
import './App.css';  
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from 'react-redux';
import Landing from "./component/Landing"; 
import Shop from "./component/Shop";     
import Deatils from "./component/Deatils";
import store from './store';
import Checkout from './component/Checkout';
import Invoice from './component/Invoice';
import BMI from './component/BMI';
import Workout from './component/Workout';
import Food from './component/Food';

const App = () => {
  return (
    <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/deatils" element={<Deatils />}/>
        <Route path="/checkout" element={<Checkout />}/>
        <Route path="/invoice" element={<Invoice />}/>
        <Route path="/bmi" element={<BMI/>}/>
        <Route path="/workout" element={<Workout/>}/>
        <Route path="/food" element={<Food/>}/>
      </Routes>
    </BrowserRouter>    
    </Provider>
  );
};

export default App;