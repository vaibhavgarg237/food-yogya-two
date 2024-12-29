import express from "express";
import authMiddleware from "../middleware/auth.js"
import { placeOrder, verifyOrder, usersOrder, listOrders, updateStatus } from "../controllers/orderController.js"


const orderRouter = express.Router();

orderRouter.post("/place",authMiddleware,placeOrder);
orderRouter.post("/verify",verifyOrder);
orderRouter.post("/userorders",authMiddleware,usersOrder);
orderRouter.get('/list',listOrders)
orderRouter.post("/status",updateStatus);

// extra code here 

orderRouter.post("/calculateDeliveryFee", async (req, res) => {
    const { deliveryZipcode, storeZipcode } = req.body;
  
    try {
      // Call the calculateDistance function to get the distance
      const distance = await calculateDistance(storeZipcode, deliveryZipcode);
  
      // Calculate delivery fee based on distance
      let deliveryFee = 0;
      if (distance <= 5) {
        deliveryFee = 50;
      } else if (distance <= 20) {
        deliveryFee = 100;
      } else if (distance <= 50) {
        deliveryFee = 150;
      } else {
        deliveryFee = 200;  // Adjust as needed
      }
  
      // Send response with distance and delivery fee
      res.status(200).json({ success: true, distance, deliveryFee });
    } catch (error) {
      console.error('Error calculating delivery fee:', error);
      res.status(500).json({ success: false, message: 'Error calculating delivery fee' });
    }
  });




// extra code here 
export default orderRouter;