import axios from "axios";
import { createContext, useEffect, useState } from "react";
// import { food_list } from "../assets/assets";
export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
  const [cartItems, setCartItems] = useState({});
  const url = "http://localhost:4000"
  const [token,setToken] = useState("");

  const [food_list,setFoodList] = useState([])
  const [searchedList, setSearchedList] = useState([])

  const addToCart = async (itemId) => {
    if (!cartItems[itemId]) {
      setCartItems((prev) => ({ ...prev, [itemId]: 1 }));
    } else {
      setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    }
    if(token){
      // await axios.post(url+"/api/cart/add",{itemId},{headers:token})
      await axios.post(url+"/api/cart/add",{itemId},{ headers: { Authorization: `Bearer ${token}` } }
      )
    }
  };

  const removeFromCart = async (itemId) => {
    setCartItems((prev) => {
      if (prev[itemId] === 1) {
        const { [itemId]: _, ...newCart } = prev; // Remove the item completely if count is 1
        return newCart;
      } else if (prev[itemId] > 1) {
        return { ...prev, [itemId]: prev[itemId] - 1 };
      }
      return prev; // No change if the item count is 0 or invalid
    });
    if (token) {
      await axios.post(url+"/api/cart/remove",{itemId},{ headers: { Authorization: `Bearer ${token}` } })
    }
  };

const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let iteminfo = food_list.find((product) => product._id === item); // Add return to find the item
        if (iteminfo) {
          totalAmount += iteminfo.price * cartItems[item];
        }
      }
    }
    return totalAmount;
  };

  const fetchFoodList = async () => {
    const response = await axios.get(url+"/api/food/list");
    setFoodList(response.data.data)
  }

  const loadCartData = async(token) => {
    const response = await axios.post(url+"/api/cart/get",{},{ headers: { Authorization: `Bearer ${token}` } })
    setCartItems(response.data.cartData)
  }
  
  useEffect(()=>{

    async function loadData() {
      await fetchFoodList();
      if (localStorage.getItem("token")) {
        setToken(localStorage.getItem("token"))
        await loadCartData(localStorage.getItem("token"));
      }  
    }
    loadData();
  },[])

  const contextValue = {
    food_list,
    cartItems,
    setCartItems,
    addToCart,
    removeFromCart,
    getTotalCartAmount,
    url,
    token,
    setToken,
    searchedList,
    setSearchedList
  };
  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;


//   const getTotalCartAmount = () => {
//     let totalAmount = 0;
//     for (const item in cartItems) {
//       if (cartItems[item] > 0) {
//         let iteminfo = food_list.find((product) => {
//           product._id === item;
//         });
//         totalAmount += iteminfo.price * cartItems[item];
//       }
//     }
//     return totalAmount;
//   };