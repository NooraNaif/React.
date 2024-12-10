import React, { useState } from "react";
import Mainlayout from "./Mainlayout";

const Food = [
  { id: 1, name: "Grilled Chicken and Quinoa Salad", img: "/Food1.PNG" },
  { id: 2, name: "Avocado and Egg Toast", img: "/Food2.PNG" },
  { id: 3, name: "Mediterranean Chickpea Salad", img: "/Food3.PNG" },
  { id: 4, name: "Baked Salmon with Steamed Vegetables", img: "/Food4.PNG" },
  { id: 5, name: "Greek Yogurt Parfait with Berries", img: "/Food5.PNG" },
  { id: 6, name: "Vegetable Stir-Fry with Tofu", img: "/food6.PNG" },
  { id: 7, name: "Spinach and Feta Stuffed Sweet Potatoes", img: "/Food7.PNG" },
  { id: 8, name: "Whole Wheat Pasta with Pesto and Cherry Tomatoes", img: "/Food8.PNG" },
  { id: 9, name: "Zucchini Noodles with Garlic Shrimp", img: "/Food9.PNG" },
  { id: 10, name: "Lentil Soup with Carrots and Celery", img:"/food10.PNG" },
];

function FoodCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNextFood = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % Food.length); 
  };

  return (
    <Mainlayout>
    <div className="food-container">
      <div className="food-item-wrapper">
        {Food.map((food, index) => {
          const isCurrent = index === currentIndex;
          const isNext = index === (currentIndex + 1) % Food.length;
          const isPrev = index === (currentIndex - 1 + Food.length) % Food.length;

          return (
           
            <div
              key={food.id}
              className={`food-item ${isCurrent ? 'active' : ''} ${isNext ? 'next' : ''} ${isPrev ? 'prev' : ''}`}
              onClick={handleNextFood}
            >
              <img src={food.img} alt={food.name} className="food-image" />
              <h3 className="food-name">{food.name}</h3>
              
            </div>
          );
        })}
      </div>
    </div>
    </Mainlayout>
    );
}

export default FoodCarousel;