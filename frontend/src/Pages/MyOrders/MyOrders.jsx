import React, { useContext, useEffect, useState } from 'react'
import './MyOrder.css'
import { StoreContext } from '../../Context/StoreContext';
import axios from 'axios';
import { assets } from '../../assets/assets';

const MyOrders = () => {
    const {url,token} = useContext(StoreContext)
    const [data,setData] = useState([]);

    const fetchOrders = async () => {
        const response = await axios.post(url+'/api/order/userorders',{},{headers: { Authorization: `Bearer ${token}`}});
        setData(response.data.data);
        console.log(response.data.data);
    }

    useEffect(()=>{
        if(token){
            fetchOrders();
            // console.log("data",data)
        }
    },[token])
  return (
    <div className='my-orders'>
      <h2>My Orders</h2>
      <div className="container">
        {data.map((order,index)=>{
          // console.log(order)
            return (
                <div key={index} className='my-order-orders'>
                    <img src={assets.parcel_icon} alt=""/>
                    <p>{order.items.map((item,index)=>{
                      if (index === order.items.length-1) {
                          return item.name+" x "+item.quantity
                      }
                      else{
                        return item.name+" x "+item.quantity+", "
                      }
                    })}</p>
                    <p>${order.amount}.00</p>
                    <p>Items: {order.items.length}</p>
                    <p><span>&#x25cf;</span><b>{order.status}</b></p>
                    <button onClick={fetchOrders}>Track Order</button>
                </div>
            )
        })}
      </div>
    </div>
  )
}

export default MyOrders



// import React, { useContext, useEffect, useState } from 'react';
// import './MyOrder.css';
// import { StoreContext } from '../../Context/StoreContext';
// import axios from 'axios';
// import { assets } from '../../assets/assets';

// const MyOrders = () => {
//   const { url, token } = useContext(StoreContext);
//   const [data, setData] = useState([]);

//   const fetchOrders = async () => {
//     try {
//       const response = await axios.post(url + '/api/order/userorders', {}, {
//         headers: { Authorization: `Bearer ${token}` }
//       });
//       setData(response.data.data);
//     } catch (error) {
//       console.error("Error fetching orders:", error);
//     }
//   };

//   useEffect(() => {
//     if (token) {
//       fetchOrders();
//     }
//   }, [token]);

//   return (
//     <div className='my-orders'>
//       <h2>My Orders</h2>
//       <div className="container">
//         {data.map((order, index) => (
//           <div key={order._id || index} className='my-order-orders'>
//             <img src={assets.parcel_icon} alt="Parcel Icon" className="parcel-icon" />
//             <div className="order-details">
//               <p><strong>Order ID:</strong> {order._id}</p>
//               <p><strong>Total Amount:</strong> ${order.amount}</p>
//               <p><strong>Items:</strong></p>
//               <ul>
//                 {order.items.map((item, idx) => (
//                   <li key={idx}>
//                     {item.name} x {item.quantity}
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default MyOrders;
