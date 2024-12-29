// // // import React from 'react'
// // // import './Orders.css'
// // // import { useState } from 'react';
// // // import { toast } from 'react-toastify';
// // // import { useEffect } from 'react';
// // // import axios from "axios"
// // // import { assets } from '../../assets/assets';
// // // const Orders = ({url}) => {
// // //   // const url = "http://localhost:4000";
// // //   const [orders,setOrders] = useState([]);

// // //   const fetchAllOrders = async () => {
// // //     const response = await axios.get(url+"/api/order/list");
// // //     if (response.data.success) {
// // //       setOrders(response.data.data);
// // //       console.log(response.data.data);
// // //     }
// // //     else{
// // //       toast.error("Error")
// // //     }
// // //   }

// // //   useEffect(()=>{
// // //     fetchAllOrders();
// // //   },[])
// // //   return (
// // //     <div className='order add'>
// // //       <h3>Order Page</h3>
// // //       <div className="order-list">
// // //         {orders.map((order,index)=>{
// // //           <div key={index} className="order-item">
// // //             <img src={assets.parcel_icon} alt="" />
// // //             <div>
// // //             <p className="order-food-item">
// // //               {order.items.map((item,index)=>{
// // //                 if(index === order.items.length-1){
// // //                   return item.name+" x "+ item.quantity+", "
// // //                 }
// // //               })}
// // //             </p>
// // //             </div>
// // //           </div>

// // //         })}
// // //       </div>
// // //     </div>
// // //   )
// // // }

// // // export default Orders


// // import React, { useState, useEffect } from 'react';
// // import './Orders.css';
// // import { toast } from 'react-toastify';
// // import axios from "axios";
// // import { assets } from '../../assets/assets';

// // const Orders = ({ url }) => {
// //   const [orders, setOrders] = useState([]);

// //   const fetchAllOrders = async () => {
// //     try {
// //       const response = await axios.get(url + "/api/order/list");
// //       if (response.data.success) {
// //         setOrders(response.data.data);
// //         console.log(response.data.data);
// //       } else {
// //         toast.error("Error fetching orders");
// //       }
// //     } catch (error) {
// //       toast.error("Error fetching orders: " + error.message);
// //     }
// //   }

// //   useEffect(() => {
// //     fetchAllOrders();
// //   }, [url]);

// //   return (
// //     <div className='order add'>
// //       <h3>Order Page</h3>
// //       <div className="order-list">
// //         {orders.map((order, index) => (
// //           <div key={index} className="order-item">
// //             <img src={assets.parcel_icon} alt="" />
// //             <div>
// //               <p className="order-food-item">
// //                 {order.items.map((item, index) => (
// //                   <span key={index}>
// //                     {item.name} x {item.quantity}{index < order.items.length - 1 ? ", " : ""}
// //                   </span>
// //                 ))}
// //               </p>
// //               <p className="order-item-name">{order.address.firstName+" "+order.address.lastName}</p>
// //               <div className="order-item-address">
// //                 <p>{order.address.street+" , "}</p>
// //                 <p>{order.address.city+", "+order.address.state+", "+order.address.country+', '+order.address.zipcode}</p>
// //               </div>
// //               <p className="order-item-phone">{order.address.phone}</p>
// //             </div>
// //             <p className='order.item.count'>Items: {order.items.length}</p>
// //             <p>${order.amount}</p>
// //             <select>
// //               <option value="Food Processing">Food Processing</option>
// //               <option value="Out for Delivery">Out for Delivery</option>
// //               <option value="Delivered">Delivered</option>
// //             </select>
// //           </div>
// //         ))}
// //       </div>
// //     </div>
// //   );
// // }

// // export default Orders;


// import React, { useState, useEffect } from 'react';
// import './Orders.css';
// import { toast } from 'react-toastify';
// import axios from "axios";
// import { assets } from '../../assets/assets';

// const Orders = ({ url }) => {
//   const [orders, setOrders] = useState([]);

//   const fetchAllOrders = async () => {
//     try {
//       const response = await axios.get(url + "/api/order/list");
//       if (response.data.success) {
//         setOrders(response.data.data);
//         console.log(response.data.data);
//       } else {
//         toast.error("Error fetching orders");
//       }
//     } catch (error) {
//       toast.error("Error fetching orders: " + error.message);
//     }
//   }

//   const statusHandler = async (event,orderId)=>{
//     console.log(event.orderId)
//   }

//   useEffect(() => {
//     fetchAllOrders();
//   }, [url]);

//   return (
//     <div className='order add'>
//       <h3>Order Page</h3>
//       <div className="order-list">
//         {orders.map((order, index) => (
//           <div key={index} className="order-item">
//             <div className="order-item-image">
//               <img src={assets.parcel_icon} alt="" />
//             </div>
//             <div className="order-item-details">
//               <p className="order-food-item">
//                 {order.items.map((item, index) => (
//                   <span key={index}>
//                     {item.name} x {item.quantity}{index < order.items.length - 1 ? ", " : ""}
//                   </span>
//                 ))}
//               </p>
//               <p className="order-item-name">{order.address.firstName + " " + order.address.lastName}</p>
//               <div className="order-item-address">
//                 <p>{order.address.street + ", "}</p>
//                 <p>{order.address.city + ", " + order.address.state + ", " + order.address.country + ', ' + order.address.zipcode}</p>
//               </div>
//               <p className="order-item-phone">{order.address.phone}</p>
//               <p className='order-item-count'>Items: {order.items.length}</p>
//               <p>${order.amount}</p>
//             </div>
//             <div className="order-item-action">
//               <select onChange={(event)=>statusHandler(event,order._id)} value={order.status}>
//                 <option value="Food Processing">Food Processing</option>
//                 <option value="Out for Delivery">Out for Delivery</option>
//                 <option value="Delivered">Delivered</option>
//               </select>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Orders;


import React, { useState, useEffect } from 'react';
import './Orders.css';
import { toast } from 'react-toastify';
import axios from "axios";
import { assets } from '../../assets/assets';

const Orders = ({ url }) => {
  const [orders, setOrders] = useState([]);
  
  const fetchAllOrders = async () => {
    try {
      const response = await axios.get(url + "/api/order/list");
      if (response.data.success) {
        setOrders(response.data.data);
        // console.log(response.data.data);
      } else {
        toast.error("Error fetching orders");
      }
    } catch (error) {
      toast.error("Error fetching orders: " + error.message);
    }
  }

  const statusHandler = async (event, orderId) => {
    const newStatus = event.target.value; // Get the selected status
    console.log(`Order ID: ${orderId}, New Status: ${newStatus}`);

    // Optionally, send the new status to your backend
    try {
      const response = await axios.post(url + "/api/order/status", { orderId, status: newStatus });
      if (response.data.success) {
        toast.success("Order status updated successfully");
        // Optionally, update the local state here if needed
        fetchAllOrders(); // Refetch orders to see the updated status
      } else {
        toast.error("Error updating order status");
      }
    } catch (error) {
      toast.error("Error updating order status: " + error.message);
    }
  }

  useEffect(() => {
    fetchAllOrders();
  }, [url]);

  return (
    <div className='order add'>
      <h3>Order Page</h3>
      <div className="order-list">
        {orders.map((order, index) => (
          <div key={index} className="order-item">
            <div className="order-item-image">
              <img src={assets.parcel_icon} alt="" />
            </div>
            <div className="order-item-details">
              <p className="order-food-item">
                {order.items.map((item, index) => (
                  <span key={index}>
                    {item.name} x {item.quantity}{index < order.items.length - 1 ? ", " : ""}
                  </span>
                ))}
              </p>
              <p className="order-item-name">{order.address.firstName + " " + order.address.lastName}</p>
              <div className="order-item-address">
                <p>{order.address.street + ", "}</p>
                <p>{order.address.city + ", " + order.address.state + ", " + order.address.country + ', ' + order.address.zipcode}</p>
              </div>
              <p className="order-item-phone">{order.address.phone}</p>
              <p className='order-item-count'>Items: {order.items.length}</p>
              <p>{"Payment Mode: " +(order.paymentMode==="cashondelivery" ? "Cash On Delivery" : (order.paymentMode==="payment"? "Prepaid":"Not Selected") )}</p>
              <p>${order.amount}</p>
            </div>
            <div className="order-item-action">
              <select onChange={(event) => statusHandler(event, order._id)} value={order.status}>
                <option value="Food Processing">Food Processing</option>
                <option value="Out for Delivery">Out for Delivery</option>
                <option value="Delivered">Delivered</option>
              </select>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Orders;