import React, { useContext, useEffect } from 'react'
import { useState } from 'react';
import './PlaceOrder.css'
import { Link, useNavigate } from 'react-router-dom';
import { StoreContext } from '../../Context/StoreContext'
import axios from 'axios';

const PlaceOrder = () => {
  const { getTotalCartAmount, token, food_list, cartItems, url} = useContext(StoreContext)
  const [data,setData] = useState({
    firstName:"",
    lastName:"",
    email:"",
    street:"",
    city:"",
    state:"",
    zipcode:"",
    country:"",
    phone:""
  })
  const [deliveryAmount,setDeliveryAmount] = useState(0);

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData(data=>({...data,[name]:value}))
  }

  const navigate = useNavigate();

  const placeOrder = async (event) => {
    event.preventDefault();
    
    let orderItems = [];
    const paymentMode = event.nativeEvent.submitter.id;
    food_list.map((item)=>{
      if(cartItems[item._id]?.[0]>0){
        let iteminfo = item;
        iteminfo["quantity"] = cartItems[item._id]?.[0];
        iteminfo["selectedPrice"] = cartItems[item._id]?.[1];
        orderItems.push(iteminfo)
      }
    })
    let orderData = {
      address:data,
      items:orderItems,
      amount:getTotalCartAmount(),
      paymentMode
    }
    console.log(orderData);

    //only call delivery fee calculation
    if(event.nativeEvent.submitter.id==="DelCal"){
      let response = await axios.post(url+"/api/order/deliverfeecalculator",orderData,{headers: { Authorization: `Bearer ${token}` } })
      if(response.data.status===200){
        console.log(response.data.deliveryCharge)
        // alert(`Delivery Fee is $ ${response.data.deliveryCharge}`)
        setDeliveryAmount(response.data.deliveryCharge);
      }
      else{
        alert("Error");
      }
      return;
    }


    let response = await axios.post(url+"/api/order/place",orderData,{headers: { Authorization: `Bearer ${token}` } })
    if(response.data.success){
      //cashondelivery
      if(paymentMode==="cashondelivery"){
        console.log("cashondelivery")
        alert("Order Placed Successfully via Cash on Delivery")
        navigate('/myorders')
      }
      else{
        //stripe payment
        const {session_url} = response.data;
        window.location.replace(session_url);
      }
    }
    else{
      alert("Error");
    }
  }

  useEffect(()=>{
    if (!token) {
      navigate('/cart')
    }
    else if(getTotalCartAmount()===0){
      navigate('/cart')
    }
  },[token])

  return (
    <form onSubmit={placeOrder}className='place-order' action="">
        <div className="place-order-left">
          <p className="title">Delivery Information</p>
          <div className="multifeilds">
            <input required name='firstName' onChange={onChangeHandler} value={data.firstName} type="text" placeholder='First Name' />
            <input required name='lastName' onChange={onChangeHandler} value={data.lastName} type="text" placeholder='Last Name' />
          </div>
          <input required name='email' onChange={onChangeHandler} value={data.email} type="Email" placeholder='Email Address'/>
          <input required name='street' onChange={onChangeHandler} value={data.street} type="text" placeholder='Street' />
          <div className="multifeilds">
            <input required name='city' onChange={onChangeHandler} value={data.city} type="text" placeholder='City' />
            <input required name='state' onChange={onChangeHandler} value={data.state} type="text" placeholder='State' />
          </div>
          <div className="multifeilds">
            <input required name='zipcode' onChange={onChangeHandler} value={data.zipcode} type="text" placeholder='Zip Code' />
            <input required name='country' onChange={onChangeHandler} value={data.country} type="text" placeholder='Country' />
          </div>
          <input required name='phone' onChange={onChangeHandler} value={data.phone} type="text" placeholder='Phone' />
        </div>
        <div className="place-order-right">
        <div className="cart-total">
          <h2>Cart Total</h2>
          <div>
          <div className="cart-total-details">
              <p>Subtotal</p>
              <p>$ {getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <button id="DelCal" className='DelCal'>Calculate Delivery Fee</button>
              <p>$ {getTotalCartAmount() === 0?0:deliveryAmount}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <b>Total</b>
              <b>$ {getTotalCartAmount() === 0?0:getTotalCartAmount()}</b>
            </div>
          </div>
            <button id="payment" type='submit'>PROCEED TO PAYMENT</button>
            <button id="cashondelivery" type='submit'>CASH ON DELIVERY</button>
        </div>
        </div>
    </form>
  )
}

export default PlaceOrder
