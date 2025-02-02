// import React, { useContext, useState } from 'react'
// import './FoodItem.css'
// import { assets } from '../../assets/assets'
// import { StoreContext } from '../../Context/StoreContext'
// const FoodItem = ({id,name,price,description,image,sizes}) => {

//   // const[itemCount,setItemCount] = useState(0)

//   const {cartItems,addToCart,removeFromCart,url} = useContext(StoreContext)

//   const [selectedButton,setSelectedButton] = useState("M");
//   const [ foodPrice, setFoodPrice] = useState(sizes["medium"]);
//   const foodWeightHandler = (e)=>{
//     setSelectedButton(e.target.outerText);
//     switch(e.target.outerText){
//         case "S":
//             setFoodPrice(sizes["extraSmall"]);
//             break;
//         case "M":
//             setFoodPrice(sizes["small"]);
//             break;
//         case "L":
//             setFoodPrice(sizes["medium"]);
//             break;
//         case "XL":
//             setFoodPrice(sizes["large"]);
//             break;
//         case "SLAB":
//             setFoodPrice(sizes["extraLarge"]);
//             break;
//     }
//   };

//   return (
//     <div className='food-item'>
//         <div className="food-item-img-container">
//             <img src={url + "/images/" + image} alt="" className="food-item-image" />
//             {!cartItems[id]
//                 ?<img className='add' onClick={()=>addToCart(id,foodPrice)} src={assets.add_icon_white} alt="" />
//                 :<div className='food-item-counter'> 
//                     <img onClick={()=>removeFromCart(id)} src={assets.remove_icon_red} alt="" />
//                     <p>{cartItems[id][0]}</p>
//                     <img onClick={()=>addToCart(id,foodPrice)} src={assets.add_icon_green} alt="" />
//                 </div>
//             }
//         </div>
//         <div className="food-item-info">
//             <div className="food-item-name-rating">
//                 <p>{name}</p>
//                 <img src={assets.rating_starts} alt="" />
//             </div>
//             <p className="food-item-desc">{description}</p>


//             <div className="food-item-name-rating">
            
//                 <p className="food-item-price">${foodPrice}</p>
//                 <div className='food-item-weight-parent' >
//                     { (sizes?.["extraSmall"])? <div className={`food-weight-buttons ${selectedButton==="XS"? "highlightButton":""}`}  onClick={foodWeightHandler}>XS</div> : ""}
//                     { (sizes?.["small"])? <div className={`food-weight-buttons ${selectedButton==="S"? "highlightButton":""}`}  onClick={foodWeightHandler}>S</div> : ""}
//                     { (sizes?.["medium"])? <div className={`food-weight-buttons ${selectedButton==="M"? "highlightButton":""}`}  onClick={foodWeightHandler}>M</div> : ""}
//                     { (sizes?.["large"])? <div className={`food-weight-buttons ${selectedButton==="L"? "highlightButton":""}`}  onClick={foodWeightHandler}>L</div> : ""}
//                     { (sizes?.["extraLarge"])? <div className={`food-weight-buttons ${selectedButton==="XL"? "highlightButton":""}`}  onClick={foodWeightHandler}>XL</div> : ""}

//                 </div>
//             </div>

            
//         </div>
//     </div>
//   )
// }

// export default FoodItem


// // import React, { useContext, useState } from 'react'
// // import './FoodItem.css'
// // import { assets } from '../../assets/assets'
// // import { StoreContext } from '../../Context/StoreContext'

// // const FoodItem = ({id, name, price, description, image, sizes}) => {
// //   const { cartItems, addToCart, removeFromCart, url } = useContext(StoreContext)

// //   const [selectedButton, setSelectedButton] = useState("M");
// //   const [foodPrice, setFoodPrice] = useState(sizes["medium"]);

// //   const foodWeightHandler = (e) => {
// //     setSelectedButton(e.target.outerText);
// //     switch (e.target.outerText) {
// //       case "XS":
// //         setFoodPrice(sizes["extraSmall"]);
// //         break;
// //       case "S":
// //         setFoodPrice(sizes["small"]);
// //         break;
// //       case "M":
// //         setFoodPrice(sizes["medium"]);
// //         break;
// //       case "L":
// //         setFoodPrice(sizes["large"]);
// //         break;
// //       case "XL":
// //         setFoodPrice(sizes["extraLarge"]);
// //         break;
// //       default:
// //         setFoodPrice(sizes["medium"]);
// //     }
// //   };

// //   return (
// //     <div className="food-item">
// //       <div className="food-item-img-container">
// //         <img src={`${url}/images/${image}`} alt={name} className="food-item-image" />
// //         {!cartItems[id]
// //           ? <img className='add' onClick={() => addToCart(id, foodPrice)} src={assets.add_icon_white} alt="Add" />
// //           : <div className='food-item-counter'>
// //               <img onClick={() => removeFromCart(id)} src={assets.remove_icon_red} alt="Remove" />
// //               <p>{cartItems[id][0]}</p>
// //               <img onClick={() => addToCart(id, foodPrice)} src={assets.add_icon_green} alt="Add" />
// //             </div>
// //         }
// //       </div>

// //       <div className="food-item-info">
// //         <div className="food-item-name-rating">
// //           <p>{name}</p>
// //           <img src={assets.rating_starts} alt="Rating" />
// //         </div>
        
// //         <p className="food-item-desc">{description}</p>

// //         <div className="food-item-price-and-weight">
// //           <p className="food-item-price">${foodPrice}</p>
// //           <div className="food-item-weight-parent">
// //             {sizes?.["extraSmall"] && <div className={`food-weight-buttons ${selectedButton === "XS" ? "highlightButton" : ""}`} onClick={foodWeightHandler}>XS</div>}
// //             {sizes?.["small"] && <div className={`food-weight-buttons ${selectedButton === "S" ? "highlightButton" : ""}`} onClick={foodWeightHandler}>S</div>}
// //             {sizes?.["medium"] && <div className={`food-weight-buttons ${selectedButton === "M" ? "highlightButton" : ""}`} onClick={foodWeightHandler}>M</div>}
// //             {sizes?.["large"] && <div className={`food-weight-buttons ${selectedButton === "L" ? "highlightButton" : ""}`} onClick={foodWeightHandler}>L</div>}
// //             {sizes?.["extraLarge"] && <div className={`food-weight-buttons ${selectedButton === "XL" ? "highlightButton" : ""}`} onClick={foodWeightHandler}>XL</div>}
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   )
// // }

// // export default FoodItem;


// import React, { useContext, useState } from 'react';
// import './FoodItem.css';
// import { assets } from '../../assets/assets';
// import { StoreContext } from '../../Context/StoreContext';

// const FoodItem = ({ id, name, price, description, image, sizes = {} }) => {
//   const { cartItems, addToCart, removeFromCart, url } = useContext(StoreContext);

//   // Safely initialize with default size or fallback values
//   const initialSize = sizes["medium"] !== undefined ? "M" : Object.keys(sizes)[0] || null;
//   const initialPrice = sizes[initialSize?.toLowerCase()] || price || 0;

//   const [selectedButton, setSelectedButton] = useState(initialSize);
//   const [foodPrice, setFoodPrice] = useState(initialPrice);

//   const foodWeightHandler = (e) => {
//     const selectedSize = e.target.outerText;
//     setSelectedButton(selectedSize);

//     // Safely update price based on selected size
//     const sizeKeyMap = {
//       XS: "extraSmall",
//       S: "small",
//       M: "medium",
//       L: "large",
//       XL: "extraLarge",
//     };

//     const selectedSizeKey = sizeKeyMap[selectedSize];
//     if (selectedSizeKey && sizes[selectedSizeKey] !== undefined) {
//       setFoodPrice(sizes[selectedSizeKey]);
//     } else {
//       setFoodPrice(price); // Fallback to the default price
//     }
//   };

//   console.log("Image source URL:", url + "/images/" + image);


//   return (
//     <div className="food-item">
//       <div className="food-item-img-container">
//         {/* <img src={`${url}/images/${image}`} alt={name} className="food-item-image" /> */}
//         <img src={url + "/images/" + image} alt="" className="food-item-image" />
//         {!cartItems[id] ? (
//           <img
//             className="add"
//             onClick={() => addToCart(id, foodPrice)}
//             src={assets.add_icon_white}
//             alt="Add"
//           />
//         ) : (
//           <div className="food-item-counter">
//             <img
//               onClick={() => removeFromCart(id)}
//               src={assets.remove_icon_red}
//               alt="Remove"
//             />
//             <p>{cartItems[id][0]}</p>
//             <img
//               onClick={() => addToCart(id, foodPrice)}
//               src={assets.add_icon_green}
//               alt="Add"
//             />
//           </div>
//         )}
//       </div>
//       <div className="food-item-info">
//         <div className="food-item-name-rating">
//           <p>{name}</p>
//           <img src={assets.rating_starts} alt="Rating" />
//         </div>
//         <p className="food-item-desc">{description}</p>

//         <div className="food-item-price-and-weight">
//           <p className="food-item-price">${foodPrice}</p>
//           <div className="food-item-weight-parent">
//             {sizes?.["extraSmall"] && (
//               <div
//                 className={`food-weight-buttons ${selectedButton === "XS" ? "highlightButton" : ""}`}
//                 onClick={foodWeightHandler}
//               >
//                 XS
//               </div>
//             )}
//             {sizes?.["small"] && (
//               <div
//                 className={`food-weight-buttons ${selectedButton === "S" ? "highlightButton" : ""}`}
//                 onClick={foodWeightHandler}
//               >
//                 S
//               </div>
//             )}
//             {sizes?.["medium"] && (
//               <div
//                 className={`food-weight-buttons ${selectedButton === "M" ? "highlightButton" : ""}`}
//                 onClick={foodWeightHandler}
//               >
//                 M
//               </div>
//             )}
//             {sizes?.["large"] && (
//               <div
//                 className={`food-weight-buttons ${selectedButton === "L" ? "highlightButton" : ""}`}
//                 onClick={foodWeightHandler}
//               >
//                 L
//               </div>
//             )}
//             {sizes?.["extraLarge"] && (
//               <div
//                 className={`food-weight-buttons ${selectedButton === "XL" ? "highlightButton" : ""}`}
//                 onClick={foodWeightHandler}
//               >
//                 XL
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FoodItem;



import React, { useContext, useState } from 'react';
import './FoodItem.css';
import { assets } from '../../assets/assets';
import { StoreContext } from '../../Context/StoreContext';

const FoodItem = ({ id, name, price, description, image, sizes = {} }) => {
  const { cartItems, addToCart, removeFromCart, url } = useContext(StoreContext);

  // Safely initialize with default size or fallback values
  const initialSize = sizes["medium"] !== undefined ? "M" : Object.keys(sizes)[0] || null;
  const initialPrice = sizes[initialSize?.toLowerCase()] || price || 0;

  const [selectedButton, setSelectedButton] = useState(initialSize);
  const [foodPrice, setFoodPrice] = useState(initialPrice);

  const foodWeightHandler = (e) => {
    const selectedSize = e.target.outerText;
    setSelectedButton(selectedSize);

    // Safely update price based on selected size
    const sizeKeyMap = {
      XS: "extraSmall",
      S: "small",
      M: "medium",
      L: "large",
      XL: "extraLarge",
    };

    const selectedSizeKey = sizeKeyMap[selectedSize];
    if (selectedSizeKey && sizes[selectedSizeKey] !== undefined) {
      setFoodPrice(sizes[selectedSizeKey]);
    } else {
      setFoodPrice(price); // Fallback to the default price
    }
  };

  // Ensure the image URL is constructed correctly
  const imageUrl = image
    // ? `https://food-yogya-two.onrender.com/images/food_${image}.png`
    // : `https://food-yogya-two.onrender.com/images/food_default.png`;

  // Log the image URL for debugging
  console.log("Image URL:", imageUrl);

  // Handle image loading errors
  const handleImageError = (e) => {
    e.target.src = 'https://food-yogya-two.onrender.com/images/food_default.png'; // Fallback image
    console.error("Image not found, fallback to default image");
  };

  return (
    <div className="food-item">
      <div className="food-item-img-container">
        {/* Render image using image URL */}
        <img 
          src={imageUrl} 
          alt={name} 
          className="food-item-image" 
          onError={handleImageError} // Add error handler to fall back to default image
        />
        
        {!cartItems[id] ? (
          <img
            className="add"
            onClick={() => addToCart(id, foodPrice)}
            src={assets.add_icon_white}
            alt="Add"
          />
        ) : (
          <div className="food-item-counter">
            <img
              onClick={() => removeFromCart(id)}
              src={assets.remove_icon_red}
              alt="Remove"
            />
            <p>{cartItems[id][0]}</p>
            <img
              onClick={() => addToCart(id, foodPrice)}
              src={assets.add_icon_green}
              alt="Add"
            />
          </div>
        )}
      </div>
      <div className="food-item-info">
        <div className="food-item-name-rating">
          <p>{name}</p>
          <img src={assets.rating_starts} alt="Rating" />
        </div>
        <p className="food-item-desc">{description}</p>

        <div className="food-item-price-and-weight">
          <p className="food-item-price">${foodPrice}</p>
          <div className="food-item-weight-parent">
            {sizes?.["extraSmall"] && (
              <div
                className={`food-weight-buttons ${selectedButton === "XS" ? "highlightButton" : ""}`}
                onClick={foodWeightHandler}
              >
                XS
              </div>
            )}
            {sizes?.["small"] && (
              <div
                className={`food-weight-buttons ${selectedButton === "S" ? "highlightButton" : ""}`}
                onClick={foodWeightHandler}
              >
                S
              </div>
            )}
            {sizes?.["medium"] && (
              <div
                className={`food-weight-buttons ${selectedButton === "M" ? "highlightButton" : ""}`}
                onClick={foodWeightHandler}
              >
                M
              </div>
            )}
            {sizes?.["large"] && (
              <div
                className={`food-weight-buttons ${selectedButton === "L" ? "highlightButton" : ""}`}
                onClick={foodWeightHandler}
              >
                L
              </div>
            )}
            {sizes?.["extraLarge"] && (
              <div
                className={`food-weight-buttons ${selectedButton === "XL" ? "highlightButton" : ""}`}
                onClick={foodWeightHandler}
              >
                XL
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodItem;
