// import React, { useContext } from "react";
// import "./FoodDisplay.css";
// import { StoreContext } from "../../Context/StoreContext";
// import FoodItem from "../FoodItem/FoodItem";

// const FoodDisplay = ({ category, search = false }) => {
//   const { food_list, searchedList } = useContext(StoreContext);
//   const itemsList = search ? searchedList : food_list;

//   return (
//     <div className="food-display" id="food-display">
//       <h1>{search?"":"Top dishes near you"}</h1>
//       <div className="food-display-list">
//         {itemsList.map((item, index) => {
//           if (category === "All" || category === item.category) {
//             return (
              
//               <FoodItem
//                 key={index}
//                 id={item._id}
//                 name={item.name}
//                 description={item.description}
//                 price={item.price}
//                 image={item.image}
//               />
//             );
//           }
//           return null;
//         })}
//       </div>
//     </div>
//   );
// };

// export default FoodDisplay;


// import React, { useContext } from "react";
// import "./FoodDisplay.css";
// import { StoreContext } from "../../Context/StoreContext";
// import FoodItem from "../FoodItem/FoodItem";

// const FoodDisplay = ({ category, search = false }) => {
//   const { food_list, searchedList } = useContext(StoreContext);
//   const itemsList = search ? searchedList : food_list;

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
//                   image={item.image}
//                 />
//                 <div className="size-options">
//                   <p>Available Sizes:</p>
//                   {item.sizes && Object.entries(item.sizes).map(([size, price]) => (
//                     price > 0 && (
//                       <div key={size}>
//                         <span>{size.charAt(0).toUpperCase() + size.slice(1)}: ${price}</span>
//                       </div>
//                     )
//                   ))}
//                 </div>
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

import React, { useContext } from "react";
import "./FoodDisplay.css";
import { StoreContext } from "../../Context/StoreContext";
import FoodItem from "../FoodItem/FoodItem";

const FoodDisplay = ({ category, search = false }) => {
  const { food_list, searchedList } = useContext(StoreContext);
  const itemsList = search ? searchedList : food_list;

  return (
    <div className="food-display" id="food-display">
      <h1>{search ? "" : "Top dishes near you"}</h1>
      <div className="food-display-list">
        {itemsList.map((item, index) => {
          if (category === "All" || category === item.category) {
            return (
              <div key={index} className="food-item-container">
                <FoodItem
                  id={item._id}
                  name={item.name}
                  description={item.description}
                  price={item.price}
                  image={item.image}
                />
                <div className="size-options">
                  <p>Available Sizes:</p>
                  {item.sizes && Object.entries(item.sizes).length > 0 ? (
                    Object.entries(item.sizes).map(([size, price]) => (
                      price > 0 && (
                        <div key={size}>
                          <span>{size.charAt(0).toUpperCase() + size.slice(1)}: ${price}</span>
                        </div>
                      )
                    ))
                  ) : (
                    <span>No sizes available</span>
                  )}
                </div>
              </div>
            );
          }
          return null;
        })}
      </div>
    </div>
  );
};

export default FoodDisplay;
