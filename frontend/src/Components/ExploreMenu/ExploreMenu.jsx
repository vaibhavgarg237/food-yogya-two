// import React from 'react'
// import './ExploreMenu.css'
// import { menu_list } from '../../assets/assets'

// const ExploreMenu = ({ category, setCategory }) => {
//   const allMenuOptions = [
//     {
//       menu_name: "All Items",
//       menu_image: "path_to_all_items_image.jpg", // Add an appropriate image
//     },
//     ...menu_list
//   ];
//   return (
//     <div className='explore-menu' id='explore-menu'>
//       <h1>Explore our Menu</h1>
//       <p className='explore-menu-text'> 
//       Indulge in a delicious variety of handcrafted Pizzas, savory sides, and refreshing beverages. From classic flavors to bold innovations, there’s something to satisfy every craving. Order your favorites now and experience taste like never before!
//       </p>
//       <div className="explore-menu-list">
        
//         {menu_list.map((item, index) => {
//           return (
//             <div
//               onClick={() => setCategory(prev => prev === item.menu_name ? "All" : item.menu_name)}
//               key={index}
//               className="explore-menu-list-item"
//             >
//               <img
//                 className={category === item.menu_name ? "active" : ""}
//                 src={item.menu_image}
//                 alt={item.menu_name}
//               />
//               <p>{item.menu_name}</p>
//             </div>
//           );
//         })}
//       </div>
//       <hr />
//     </div>
//   );
// }

// export default ExploreMenu;







// import React from 'react';
// import './ExploreMenu.css';
// import { menu_list } from '../../assets/assets';
// import food_21 from './food_20.png';
// import BuildYourPizza from './CustomisePizza';
// import { useNavigate } from 'react-router-dom';

// const ExploreMenu = ({ category, setCategory }) => {
//   const navigate = useNavigate();

//   const allMenuOptions = [
//     ...menu_list,
//     {
//       menu_name: "Build Your Pizza",
//       menu_image: food_21,
//       redirectTo: "/BuildYourPizza",
//     },
//   ];

//   const handleMenuClick = (item) => {
//     if (item.redirectTo) {
//       navigate(item.redirectTo); // Use navigate to go to the route
//     } else {
//       setCategory((prev) => (prev === item.menu_name ? "All" : item.menu_name));
//     }
//   };

//   return (
//     <div className="explore-menu" id="explore-menu">
//       <h1>Explore our Menu</h1>
//       <p className="explore-menu-text">
//         Indulge in a delicious variety of handcrafted pizzas, savory sides, and refreshing beverages. From classic flavors to bold innovations, there’s something to satisfy every craving. Order your favorites now and experience taste like never before!
//       </p>
//       <div className="explore-menu-list">
//         {allMenuOptions.map((item, index) => (
//           <div
//             onClick={() => handleMenuClick(item)}
//             key={index}
//             className="explore-menu-list-item"
//           >
//             <img
//               className={category === item.menu_name ? "active" : ""}
//               src={item.menu_image}
//               alt={item.menu_name}
//             />
//             <p>{item.menu_name}</p>
//           </div>
//         ))}
//       </div>
//       <hr />
//     </div>
//   );
// };

// export default ExploreMenu;



import React from 'react';
import './ExploreMenu.css';
import { menu_list } from '../../assets/assets';
import food_21 from './food_20.png';
import { useNavigate } from 'react-router-dom';

const ExploreMenu = ({ category, setCategory }) => {
  const navigate = useNavigate();

  const allMenuOptions = [
    ...menu_list,
    {
      menu_name: "Build Your Pizza",
      menu_image: food_21,
      redirectTo: "/BuildYourPizza",
    },
  ];

  const handleMenuClick = (item) => {
    if (item.redirectTo) {
      navigate(item.redirectTo); // Use navigate to go to the route
    } else {
      setCategory((prev) => (prev === item.menu_name ? "All" : item.menu_name));
    }
  };

  return (
    <div className="explore-menu" id="explore-menu">
      <h1>Explore our Menu</h1>
      <p className="explore-menu-text">
        Indulge in a delicious variety of handcrafted pizzas, savory sides, and refreshing beverages. From classic flavors to bold innovations, there’s something to satisfy every craving. Order your favorites now and experience taste like never before!
      </p>
      <div className="explore-menu-list">
        {allMenuOptions.map((item, index) => (
          <div
            onClick={() => handleMenuClick(item)}
            key={index}
            className="explore-menu-list-item"
          >
            <img
              className={category === item.menu_name ? "active" : ""}
              src={item.menu_image}
              alt={item.menu_name}
            />
            <p>{item.menu_name}</p>
          </div>
        ))}
      </div>
      <hr />
    </div>
  );
};

export default ExploreMenu;