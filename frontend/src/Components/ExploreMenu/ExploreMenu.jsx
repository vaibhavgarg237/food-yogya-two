// import React from 'react'
// import './ExploreMenu.css'
// import { menu_list } from '../../assets/assets'
// const ExploreMenu = (category,setCategory) => {
//   return (
//     <div className='explore-menu' id='explore-menu'>
//       <h1>Explore our Menu</h1>
//       <p className='explore-menu-text'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium sapiente placeat maxime soluta nostrum minus, debitis nesciunt odio officiis voluptates laudantium? Consequuntur assumenda delectus neque repudiandae facere dignissimos libero qui.</p>
//     <div className="explore-menu-list">
//         {menu_list.map((item,index)=>{
//             return(
//                 <div onClick={()=>setCategory(prev=>prev===item.menu_name?"All":item.menu_name)} key={index} className="explore-menu-list-item">
//                     <img className={category===item.menu_name?"active":""} src={item.menu_image} alt="" />
//                     <p>{item.menu_name}</p>
//                 </div>
//             )
//         })}
//     </div>
//     <hr/>
//     </div>
//   )
// }

// export default ExploreMenu

import React from 'react'
import './ExploreMenu.css'
import { menu_list } from '../../assets/assets'

const ExploreMenu = ({ category, setCategory }) => {
  const allMenuOptions = [
    {
      menu_name: "All Items",
      menu_image: "path_to_all_items_image.jpg", // Add an appropriate image
    },
    ...menu_list
  ];
  return (
    <div className='explore-menu' id='explore-menu'>
      <h1>Explore our Menu</h1>
      <p className='explore-menu-text'>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium sapiente placeat maxime soluta nostrum minus, debitis nesciunt odio officiis voluptates laudantium? Consequuntur assumenda delectus neque repudiandae facere dignissimos libero qui.
      </p>
      <div className="explore-menu-list">
        
        {menu_list.map((item, index) => {
          return (
            <div
              onClick={() => setCategory(prev => prev === item.menu_name ? "All" : item.menu_name)}
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
          );
        })}
      </div>
      <hr />
    </div>
  );
}

export default ExploreMenu;
