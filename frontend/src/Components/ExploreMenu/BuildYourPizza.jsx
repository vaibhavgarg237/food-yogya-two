import React, { useState } from "react";
import "./BuildYourPizza.css";

const BuildYourPizza = () => {
  // State to manage selected options
  const [crust, setCrust] = useState("");
  const [sauce, setSauce] = useState("");
  const [cheese, setCheese] = useState("");
  const [toppings, setToppings] = useState([]);
  const [price, setPrice] = useState(0);

  // Available options with prices
  const crustOptions = [
    { name: "Thin Crust", price: 2 },
    { name: "Thick Crust", price: 3 },
    { name: "Stuffed Crust", price: 4 },
  ];
  const sauceOptions = [
    { name: "Tomato Sauce", price: 1 },
    { name: "Pesto Sauce", price: 1.5 },
    { name: "BBQ Sauce", price: 1.5 },
    { name: "Alfredo Sauce", price: 2 },
  ];
  const cheeseOptions = [
    { name: "Mozzarella", price: 2 },
    { name: "Cheddar", price: 2.5 },
    { name: "Parmesan", price: 3 },
    { name: "Vegan Cheese", price: 3.5 },
  ];
  const toppingOptions = [
    { name: "Pepperoni", price: 1.5 },
    { name: "Mushrooms", price: 1 },
    { name: "Onions", price: 1 },
    { name: "Bell Peppers", price: 1 },
    { name: "Olives", price: 1 },
    { name: "Pineapple", price: 1.5 },
    { name: "Sausage", price: 2 },
    { name: "Bacon", price: 2.5 },
  ];

  // Handle crust selection
  const handleCrustSelect = (option) => {
    setCrust(option);
    updatePrice(option.price, "crust");
  };

  // Handle sauce selection
  const handleSauceSelect = (option) => {
    setSauce(option);
    updatePrice(option.price, "sauce");
  };

  // Handle cheese selection
  const handleCheeseSelect = (option) => {
    setCheese(option);
    updatePrice(option.price, "cheese");
  };

  // Handle topping selection
  const handleToppingSelect = (option) => {
    if (toppings.includes(option)) {
      setToppings(toppings.filter((item) => item !== option));
      updatePrice(-option.price, "topping");
    } else {
      setToppings([...toppings, option]);
      updatePrice(option.price, "topping");
    }
  };

  // Update total price
  const updatePrice = (amount, type) => {
    setPrice((prevPrice) => prevPrice + amount);
  };

  return (
    <div className="build-your-pizza">
      <h1>Build Your Own Pizza</h1>
      <p>Select your preferences below to customize your pizza.</p>

      <div className="pizza-customization">
        {/* Crust Selection */}
        <div className="customization-section">
          <h2>1. Choose Your Crust</h2>
          <div className="options">
            {crustOptions.map((option, index) => (
              <div
                key={index}
                className={`option ${crust.name === option.name ? "selected" : ""}`}
                onClick={() => handleCrustSelect(option)}
              >
                <span>{option.name}</span>
                <span>${option.price}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Sauce Selection */}
        <div className="customization-section">
          <h2>2. Choose Your Sauce</h2>
          <div className="options">
            {sauceOptions.map((option, index) => (
              <div
                key={index}
                className={`option ${sauce.name === option.name ? "selected" : ""}`}
                onClick={() => handleSauceSelect(option)}
              >
                <span>{option.name}</span>
                <span>${option.price}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Cheese Selection */}
        <div className="customization-section">
          <h2>3. Choose Your Cheese</h2>
          <div className="options">
            {cheeseOptions.map((option, index) => (
              <div
                key={index}
                className={`option ${cheese.name === option.name ? "selected" : ""}`}
                onClick={() => handleCheeseSelect(option)}
              >
                <span>{option.name}</span>
                <span>${option.price}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Toppings Selection */}
        <div className="customization-section">
          <h2>4. Choose Your Toppings</h2>
          <div className="options">
            {toppingOptions.map((option, index) => (
              <div
                key={index}
                className={`option ${toppings.includes(option) ? "selected" : ""}`}
                onClick={() => handleToppingSelect(option)}
              >
                <span>{option.name}</span>
                <span>${option.price}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Display Selected Options and Price */}
      <div className="selected-options">
        <h2>Your Custom Pizza</h2>
        <p>
          <strong>Crust:</strong> {crust ? crust.name : "Not selected"}
        </p>
        <p>
          <strong>Sauce:</strong> {sauce ? sauce.name : "Not selected"}
        </p>
        <p>
          <strong>Cheese:</strong> {cheese ? cheese.name : "Not selected"}
        </p>
        <p>
          <strong>Toppings:</strong>{" "}
          {toppings.length > 0 ? toppings.map((t) => t.name).join(", ") : "No toppings selected"}
        </p>
        <p>
          <strong>Total Price:</strong> ${price.toFixed(2)}
        </p>
      </div>

      {/* Add to Cart Button */}
      <button className="add-to-cart-button">Add to Cart</button>
    </div>
  );
};

export default BuildYourPizza;