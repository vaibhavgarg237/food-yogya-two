import React, { useEffect } from "react";
import "./List.css";
import axios from "axios";
import { useState } from "react"; // Add useState here
import { toast } from "react-toastify";

const List = ({url}) => {
  // const url = "http://localhost:4000";


  
  // const url = "https://food-yogya-two.onrender.com";
  const [list, setList] = useState([]);
  const fetchList = async () => {
    const response = await axios.get(`${url}/api/food/list`);
    console.log(response.data);
    if (response.data.success) {
      setList(response.data.data);
    } else {
      toast.error("Error");
    }
  };

  const removeFood = async(foodId) => {
    console.log(foodId);
    const response = await axios.post(`${url}/api/food/remove`,{id:foodId})
    await fetchList();
    if (response.data.success) {
     toast.success(response.data.message) 
    }
    else{
      toast.error("Error");
    }
  }
  useEffect(() => {
    fetchList();
  }, []);
  return (
    <div className="list">
      <p>All Foods List</p>
      <div className="list-table">
        <div className="list-table-format title">
          <b>Image</b>
          <b>Name</b>
          <b>Category</b>
          <b>Price</b>
          <b>Action</b>
        </div>
        {list.map((item,index)=>{
          const priceOfDiffereneSizes = Object.entries(item?.sizes);
          
          return (
                <div key={index} className="list-table-format">
                  <img src={`${url}/images/`+item.image} alt="" />
                  <p>{item.name}</p>
                  <p>{item.category}</p>
                  <div>
                    {priceOfDiffereneSizes.map((size,index)=>{
                      return(
                        <p key={index}>{size[0]} : {size[1]}</p>
                      )
                    })}
                    </div>
                  
                  <p onClick={()=>removeFood(item._id)} className="cursor">X</p>
                </div>
              );  
        })}
      </div>
    </div>
  );
};

const handleAction = (id) => {
  // Handle the action for the item (e.g., delete, edit, etc.)
  console.log("Action for item ID:", id);
};

export default List;