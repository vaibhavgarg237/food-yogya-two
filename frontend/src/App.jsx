import React, { useState } from "react";
import Navbar from "./Components/navbar/navbar";
// import { Route, Routes } from "react-router-dom";
import BuildYourPizza from "./Components/ExploreMenu/BuildYourPizza";
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./Pages/Home/Home";
import Cart from "./Pages/Cart/Cart";
import PlaceOrder from "./Pages/PlaceOrder/PlaceOrder";
import Footer from "./Components/Footer/footer";
import LoginPopup from "./Components/LoginPopup/LoginPopup";
import Verify from "./Pages/verify/verify";
import MyOrders from "./Pages/MyOrders/MyOrders";
import Search from "./Pages/Search/Search";
const App = () => {
  const [showLogin,setShowLogin] = useState(false)
  return (
    // <Router>
    <>
    {showLogin?<LoginPopup setShowLogin = {setShowLogin}/>:<></>}
      <div className="app">
        <Navbar setShowLogin = {setShowLogin}/>
        <Routes>
          
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search/>} /> 
          <Route path="/BuildYourPizza" element={<BuildYourPizza/>} /> 
          <Route path="/Cart" element={<Cart />} />
          <Route path="/Order" element={<PlaceOrder />} />
          <Route path="/verify" element={<Verify />} />
          <Route path="/myorders" element={<MyOrders />} />
        </Routes>
      </div>
      <Footer />
    </>
    // </Router>
  );
};

export default App;
