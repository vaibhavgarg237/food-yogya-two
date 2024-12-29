import userModel from "../models/userModel.js";

//add items to user cart
const addToCart = async (req, res) => {
  try {
    let userData = await userModel.findById(req.body.userId);
    let cartData = await userData.cartData;
    if (!cartData[req.body.itemId]) {
      cartData[req.body.itemId] = [1, req.body.foodPrice];
    } else {
      cartData[req.body.itemId] = [
        cartData[req.body.itemId][0] + 1,
        req.body.foodPrice,
      ];
    }
    await userModel.findByIdAndUpdate(req.body.userId, { cartData });
    res.json({ suceess: true, message: "Added to cart" });
  } catch (error) {
    console.log(error);
    res.json({ suceess: false, message: "Error" });
  }
};

//remove items to user cart
const removeFromCart = async (req, res) => {
  try {
    let userData = await userModel.findById(req.body.userId);
    let cartData = await userData.cartData;
    if (cartData[req.body.itemId] > 0) {
      cartData[req.body.itemId] -= 1;
    }
    // console.log(,cartData);
    await userModel.findByIdAndUpdate(req.body.userId, { cartData });
    res.json({ suceess: true, message: "Remove from cart" });
  } catch (error) {
    console.log(error);
    res.json({ suceess: false, message: "Error" });
  }
};
// setTimeout(async ()=> {
//     console.log("hello");
//     const b=    await userModel.findByIdAndUpdate("675e0e479485c334a099c1ef", {});
//     console.log("hello",b);
// },5000);


//fetch user cart data
const getCart = async (req, res) => {
  try {
    let userData = await userModel.findById(req.body.userId);
    let cartData = await userData.cartData;
    res.json({ success: true, cartData });
  } catch (error) {
    console.log(error);
    res.json({ suceess: false, message: "Error" });
  }
};

export { addToCart, removeFromCart, getCart };
