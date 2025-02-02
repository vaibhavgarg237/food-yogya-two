// import React from "react";
// import "./Header.css";
// const Header = () => {
//   return (
//     <div className="header">
//       <div className="header-contents">
//         <h2>Order your favourite food here</h2>
//         <p>
//           Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
//           cum exercitationem accusantium laboriosam, vel cupiditate consequuntur
//           ipsum voluptates suscipit voluptatibus accusamus assumenda architecto
//           eum voluptatem sequi placeat et, vero porro.
//         </p>
//         {/* <button>View Menu</button> */}
//         <button
//           onClick={() => {
//             document.querySelector('a[href="#explore-menu"]').click();
//           }}
//         >
//           View Menu
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Header;

import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="header-contents">
        <h2>Order your favourite food here</h2>
        <p> 
        Welcome to STONYZ PIZZA, your go-to destination for delicious pizzas and a variety of mouthwatering dishes delivered right to your doorstep. We pride ourselves on using fresh ingredients and crafting flavors that delight every taste bud. With quick delivery and an easy-to-use platform, enjoying your favorite meals has never been simpler. Experience the perfect blend of quality, convenience, and taste with every order!
        </p>
        <button className="view-menu"
          onClick={() => {
            document.querySelector('a[href="#explore-menu"]').click();
          }}
        >
          <div>View Menu</div>
        </button>
      </div>
    </div>
  );
};

export default Header;
