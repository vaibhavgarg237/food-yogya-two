// import React, { useContext } from "react";
// import "./Cart.css";
// import { StoreContext } from "../../Context/StoreContext";
// import { useNavigate } from "react-router-dom";
// const Cart = () => {
//   const { cartItems, food_list, removeFromCart , getTotalCartAmount,url} = useContext(StoreContext);
//   const navigate  = useNavigate();
//   return (
//     <div className="cart">
//       <div className="cart-items">
//         <div className="cart-items-title">
//           <p className="Items-heading">Items</p>
//           <p className="Title-heading">Title</p>
//           <p className="Price-heading">Price</p>
//           <p className="Quantity-heading">Quantity</p>
//           <p className="Total-heading">Total</p>
//           <p className="Remove-heading">Remove</p>
//         </div>
//         <br />
//         <hr />
//         {food_list.map((item, index) => {
//           // console.log("YA",cartItems,item)
//           if ((cartItems[item._id]?.[0]) > 0) {
//             return (
//               <>
//                 <div className="cart-items-title cart-items-item">
//                   <img src={url +"/images/"+item.image} alt="" />
//                   <p className="item-name">{item.name}</p>
//                   <p>$ {cartItems[item._id][1]}</p>
//                   <p className="quantity">{cartItems[item._id][0]}</p>
//                   <p>$ {cartItems[item._id][1] * cartItems[item._id][0]}</p>
//                   <p onClick={()=>removeFromCart(item._id)} className="cross">x</p>
//                 </div>
//                 <hr />
//               </>
//             );
//           }
//         })}
//       </div>
//       <div className="cart-bottom">
//         <div className="cart-total">
//           <h2>Cart Total</h2>
//           <div>
//             <div className="cart-total-details">
//               <p>Subtotal</p>
//               <p>$ {getTotalCartAmount()}</p>
//             </div>
//             <hr />
//             <div className="cart-total-details">
//               <p>Delivery Fee</p> 
//               <p>$ {getTotalCartAmount() === 0?0:0}</p>
//             </div>
//             <hr />
//             <div className="cart-total-details">
//               <b>Total</b>
//               <b>$ {getTotalCartAmount() === 0?0:getTotalCartAmount()}</b>
//             </div>
//           </div>
//             <button onClick={() => navigate('/Order')}>PROCEED TO CHECKOUT</button>
//         </div>
//         <div className="cart-promocode">
//           <div>
//             <p>If you have a promocode, enter here </p>
//             <div className="card-promocode-input">
//               <input type="text" placeholder="promocode" name="" id="" />
//               <button>Submit</button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Cart;


import React, { useContext } from "react";
import "./Cart.css";
import { StoreContext } from "../../Context/StoreContext";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { cartItems, food_list, removeFromCart, getTotalCartAmount, url } = useContext(StoreContext);
  const navigate = useNavigate();

  return (
    <div className="cart">
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <hr />
        {food_list.map((item) => {
          if (cartItems[item._id]?.[0] > 0) {
            return (
              <div key={item._id} className="cart-items-title cart-items-item">
                <img src={`${url}/images/${item.image}`} alt={item.name} />
                <p>{item.name}</p>
                <p>$ {cartItems[item._id][1]}</p>
                <p>{cartItems[item._id][0]}</p>
                <p>$ {cartItems[item._id][1] * cartItems[item._id][0]}</p>
                <p onClick={() => removeFromCart(item._id)} className="cross">x</p>
              </div>
            );
          }
          return null;
        })}
      </div>
      <div className="cart-bottom">
        <div className="cart-total">
          <h2>Cart Total</h2>
          <div className="cart-total-details">
            <p>Subtotal</p>
            <p>$ {getTotalCartAmount()}</p>
          </div>
          <hr />
          <div className="cart-total-details">
            <p>Delivery Fee</p>
            <p>$ {getTotalCartAmount() === 0 ? 0 : 5}</p>
          </div>
          <hr />
          <div className="cart-total-details">
            <b>Total</b>
            <b>$ {getTotalCartAmount() === 0 ? 0 : getTotalCartAmount()}</b>
          </div>
          <button onClick={() => navigate('/Order')}>PROCEED TO CHECKOUT</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
