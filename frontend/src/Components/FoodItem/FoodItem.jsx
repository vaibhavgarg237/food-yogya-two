import React, { useContext, useState } from 'react'
import './FoodItem.css'
import { assets } from '../../assets/assets'
import { StoreContext } from '../../Context/StoreContext'
const FoodItem = ({id,name,price,description,image,sizes}) => {

  // const[itemCount,setItemCount] = useState(0)

  const {cartItems,addToCart,removeFromCart,url} = useContext(StoreContext)

  const [selectedButton,setSelectedButton] = useState("M");
  const [ foodPrice, setFoodPrice] = useState(sizes["medium"]);
  const foodWeightHandler = (e)=>{
    setSelectedButton(e.target.outerText);
    switch(e.target.outerText){
        case "XS":
            setFoodPrice(sizes["extraSmall"]);
            break;
        case "S":
            setFoodPrice(sizes["small"]);
            break;
        case "M":
            setFoodPrice(sizes["medium"]);
            break;
        case "L":
            setFoodPrice(sizes["large"]);
            break;
        case "XL":
            setFoodPrice(sizes["extraLarge"]);
            break;
    }
  };

  return (
    <div className='food-item'>
        <div className="food-item-img-container">
            <img src={url + "/images/" + image} alt="" className="food-item-image" />
            {!cartItems[id]
                ?<img className='add' onClick={()=>addToCart(id,foodPrice)} src={assets.add_icon_white} alt="" />
                :<div className='food-item-counter'> 
                    <img onClick={()=>removeFromCart(id)} src={assets.remove_icon_red} alt="" />
                    <p>{cartItems[id][0]}</p>
                    <img onClick={()=>addToCart(id,foodPrice)} src={assets.add_icon_green} alt="" />
                </div>
            }
        </div>
        <div className="food-item-info">
            <div className="food-item-name-rating">
                <p>{name}</p>
                <img src={assets.rating_starts} alt="" />
            </div>
            <p className="food-item-desc">{description}</p>


            <div className="food-item-name-rating">
            
                <p className="food-item-price">${foodPrice}</p>
                <div className='food-item-weight-parent' >
                    { (sizes?.["extraSmall"])? <div className={`food-weight-buttons ${selectedButton==="XS"? "highlighButton":""}`}  onClick={foodWeightHandler}>XS</div> : ""}
                    { (sizes?.["small"])? <div className={`food-weight-buttons ${selectedButton==="S"? "highlighButton":""}`}  onClick={foodWeightHandler}>S</div> : ""}
                    { (sizes?.["medium"])? <div className={`food-weight-buttons ${selectedButton==="M"? "highlighButton":""}`}  onClick={foodWeightHandler}>M</div> : ""}
                    { (sizes?.["large"])? <div className={`food-weight-buttons ${selectedButton==="L"? "highlighButton":""}`}  onClick={foodWeightHandler}>L</div> : ""}
                    { (sizes?.["extraLarge"])? <div className={`food-weight-buttons ${selectedButton==="XL"? "highlighButton":""}`}  onClick={foodWeightHandler}>XL</div> : ""}

                </div>
            </div>

            
        </div>
    </div>
  )
}

export default FoodItem
