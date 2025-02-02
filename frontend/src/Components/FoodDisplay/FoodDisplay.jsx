// // import React, { useContext } from "react";
// import React, { useContext, useState, useEffect } from "react";
// import "./FoodDisplay.css";
// import { StoreContext } from "../../Context/StoreContext";
// import FoodItem from "../FoodItem/FoodItem";
// // import { food_list } from "../../assets/assets";

// const FoodDisplay = ({ category, search = false }) => {
//   const { food_list, searchedList } = useContext(StoreContext);
//   const itemsList = search ? searchedList : food_list;

//   // New state to track food_list
//   const [trackedFoodList, setTrackedFoodList] = useState([]);

//     // Effect to update trackedFoodList when food_list changes
//     useEffect(() => {
//       setTrackedFoodList(food_list);
//     }, [food_list]);

//   return (
//     <div className="food-display" id="food-display">
//       <h1>{search ? "" : "Top dishes near you"}</h1>
//       <div className="food-display-list">
//         {itemsList.map((item, index) => {
//           if (category === "All" || category === item.category) {
//             return (
//               <div key={index} className="food-item-container">
//                 <FoodItem
//                   id={item._id}
//                   name={item.name}
//                   description={item.description}
//                   price={item.price}
//                   sizes={item.sizes}
//                   image={item.image}
//                 />
//                 {/* <div className="size-options">
//                   <p>Available Sizes:</p>
//                   {item.sizes && Object.entries(item.sizes).length > 0 ? (
//                     Object.entries(item.sizes).map(([size, price]) => (
//                       price > 0 && (
//                         <div key={size}>
//                           <span>{size.charAt(0).toUpperCase() + size.slice(1)}: ${price}</span>
//                         </div>
//                       )
//                     ))
//                   ) : (
//                     <span>No sizes available</span>
//                   )}
//                 </div> */}
//               </div>
              
//             );
//           }
//           return null;
//         })}
//       </div>
//     </div>
//   );
// };

// export default FoodDisplay;

// Import React and other dependencies
import React, { useContext, useState, useEffect } from "react";
import "./FoodDisplay.css";
import { StoreContext } from "../../Context/StoreContext";
import FoodItem from "../FoodItem/FoodItem";
import { food_list as importedFoodList } from "../../assets/assets"; // Import the food_list array

const FoodDisplay = ({ category, search = false }) => {
  const { food_list, searchedList } = useContext(StoreContext);
  const itemsList = search ? searchedList : food_list;

  // New state to track food_list (from context)
  const [trackedFoodList, setTrackedFoodList] = useState([]);

  // Effect to update trackedFoodList when food_list changes
  useEffect(() => {
    setTrackedFoodList(food_list);
  }, [food_list]);

  return (
    <div className="food-display" id="food-display">
      <h1>{search ? "" : "Top dishes near you"}</h1>
      <div className="food-display-list">
        {/* Render items from the imported food_list */}
        {importedFoodList.map((item, index) => (
          <div key={`imported-${index}`} className="food-item-container">
            <FoodItem
              id={item._id}
              name={item.name}
              description={item.description}
              price={item.price}
              sizes={item.sizes}
              image={item.image}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default FoodDisplay;
