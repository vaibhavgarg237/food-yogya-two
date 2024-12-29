import orderModel from "../models/orderModel.js";
import userModel from "../models/userModel.js";
import axios from "axios"; // changed line
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

// placing user order from frontend


// Define the store's zip code
const storeZipCode = "121006"; // Example zip code for store

const placeOrder = async (req, res) => {
  const frontend_url = "http://localhost:5173";

  const { userId, items, amount, address, paymentMode } = req.body;
  const userZipCode = address.zipcode;

  try {
    // Get the distance between the store and the user's address using the Google Distance Matrix API
    const googleApiKey = process.env.GOOGLE_API_KEY; // Make sure to store your API key securely
    const distanceMatrixUrl = `https://maps.googleapis.com/maps/api/distancematrix/json?origins=${storeZipCode}&destinations=${userZipCode}&key=${googleApiKey}`;

    const distanceResponse = await axios.get(distanceMatrixUrl);

    // Log the response to check its structure
    console.log(distanceResponse.data);

    // Check if the response contains the expected structure
    if (distanceResponse.data.status === "OK" && distanceResponse.data.rows[0].elements[0].status === "OK") {
      const distanceInKm = distanceResponse.data.rows[0].elements[0].distance.value / 1000; // Distance in km

      // Apply logic to calculate delivery charges based on the distance
      let deliveryCharge = 0; // Default delivery charge

      if (distanceInKm <= 3) {
        deliveryCharge = 0; // Free delivery for distance within 3 km
      } else if (distanceInKm > 3 && distanceInKm <= 5) {
        deliveryCharge = 3; // $3 delivery charge for 3 to 5 km
      } else if (distanceInKm > 5 && distanceInKm <= 8) {
        deliveryCharge = 5; // $5 delivery charge for 5 to 8 km
      } else if (distanceInKm > 8 && distanceInKm <= 10) {
        deliveryCharge = 6; // $6 delivery charge for 8 to 10 km
      } else {
        // For distances greater than 10 km, add $1 per km
        deliveryCharge = 6 + (distanceInKm - 10); // $6 base charge + $1 for each additional km
      }
      console.log(deliveryCharge);
      // Create new order
      const newOrder = new orderModel({
        userId,
        items,
        amount,
        address,
        paymentMode,
      });

      const neworder = await newOrder.save();
      await userModel.findByIdAndUpdate(userId, { cartData: {} });

      // Prepare Stripe line items
      const line_items = items.map((item) => ({
        price_data: {
          currency: "inr",
          product_data: {
            name: item.name,
          },
          unit_amount: item.selectedPrice * 100 * 84, // Price in paise
        },
        quantity: item.quantity,
      }));

      // Add delivery charge to line items
      line_items.push({
        price_data: {
          currency: "inr",
          product_data: {
            name: "Delivery Charges",
          },
          unit_amount: deliveryCharge * 100 * 84, // Delivery charge in paise
        },
        quantity: 1,
      });
      console.log("line_items",JSON.stringify(line_items))
      if(paymentMode==="cashondelivery"){
        return res.json({ success: true, message: "Order Placed" });
      }

      // Create a Stripe checkout session
      const session = await stripe.checkout.sessions.create({
        line_items,
        mode: "payment",
        success_url: `${frontend_url}/verify?success=true&orderId=${newOrder._id}`,
        cancel_url: `${frontend_url}/verify?success=false&orderId=${newOrder._id}`,
      });

      res.json({ success: true, session_url: session.url });
    } else {
      // Handle the case where the distance response is not valid
      console.error("Error in Distance Matrix API response:", distanceResponse.data);
      res.json({ success: false, message: "Unable to calculate distance" });
    }
  } catch (error) {
    console.error("Error placing order:", error);
    res.json({ success: false, message: "Error" });
  }
};
// --------------------------------- Place order old code --------------------------------


// const placeOrder = async (req, res) => {

//     const frontend_url = "http://localhost:5173"
//   try {
//     const newOrder = new orderModel({
//       userId: req.body.userId,
//       items: req.body.items,
//       amount: req.body.amount,
//       address: req.body.address,
//     });

//     await newOrder.save();
//     await userModel.findByIdAndUpdate(req.body.userId, { cartData: {} });

//     const line_items = req.body.items.map((item) => ({
//       price_data: {
//         currency: "inr",
//         product_data: {
//           name: item.name,
//         },
//         unit_amount: item.price * 100 * 84,
//       },
//       quantity: item.quantity,
//     }));

//     line_items.push({
//       price_data: {
//         currency: "inr",
//         product_data: {
//           name: "Delivery Charges"
//         },
//         unit_amount: 2*100*84
//       },
//       quantity:1
//     });

//     const session = await stripe.checkout.sessions.create({
//         line_items:line_items,
//         mode:'payment',
//         success_url:`${frontend_url}/verify?success=true&orderId=${newOrder._id}`,
//         cancel_url:`${frontend_url}/verify?success=false&orderId=${newOrder._id}`
//     })

//     res.json({success:true,session_url:session.url})
//   } catch (error) {
//     console.log(error)
//     res.json({success:false, message:"Error"})
//   }
// };

// --------------------------------- Place order old code ---------------------------------


const verifyOrder = async (req, res) => {
  const { orderId, success } = req.body;
  try {
    if (success == "true") {
      await orderModel.findByIdAndUpdate(orderId, { payment: true });
      res.json({ success: true, message: "Paid" });
    } else {
      await orderModel.findByIdAndDelete(orderId);
      res.json({ success: false, message: "Not Paid" });
    }
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error" });
  }
};
//user order for frontend
const usersOrder = async (req, res) => {
  try {
    const orders = await orderModel.find({ userId: req.body.userId });
    res.json({ success: true, data: orders });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error" });
  }
};

//listing orders for admin panel
const listOrders = async (req, res) => {
  try {
    const orders = await orderModel.find({});
    // console.log(orders);
    res.json({ success: true, data: orders });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error" });
  }
};

//api for updating order status
const updateStatus = async (req, res) => {
  try {
    await orderModel.findByIdAndUpdate(req.body.orderId, {
      status: req.body.status,
    });
    res.json({ success: true, message: "Status Updated" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error" });
  }
};

export { placeOrder, verifyOrder, usersOrder, listOrders, updateStatus };

