// import foodModel from "../models/foodModel.js";
// import fs from "fs";

// //add food item

// const addFood = async (req, res) => {
//   // Log incoming request data for debugging
// //   console.log(req.body); // Should contain name, description, price, category
// //   console.log(req.file); // Should contain file information

// //   // Check if a file was uploaded
// //   if (!req.file) {
// //     return res
// //       .status(400)
// //       .json({ success: false, message: "Image file is required" });
// //   }

//     let image_filename = `${req.file.filename}`;

//   const food = new foodModel({
//     name:req.body.name,
//     description:req.body.description,
//     price:req.body.price,
//     category:req.body.category,
//     image:req.file.filename,
//   });

//   try {
//     await food.save();
//     res.json({ success: true, message: "Food Added" });
//   } catch (error) {
//     console.log(error);
//     res.json({ success: false, message: "error" });
//   }
// };

// //all food list

// const listFood = async (req, res) => {
//     try {
//         const foods = await foodModel.find({});
//         res.json({success:true,data:foods})
//     } catch (error) {
//         console.log(error);
//         res.json({success:false,message:"Error"})
//     }
// }

// //remove food item

// const removeFood = async (req,res) =>{
//     try {
//         const food = await foodModel.findById(req.body.id);
//         fs.unlink(`uploads/${food.image}`,()=>{})

//         await foodModel.findByIdAndDelete(req.body.id);
//         res.json({success:true,message:"Food removed"})
//     } catch (error) {
//         console.log(error);
//         res.json({success:false,message:"error"});
//     }
// }

// export { addFood, listFood, removeFood };

import foodModel from "../models/foodModel.js";
import fs from "fs";

// Add food item
const addFood = async (req, res) => {
  // Log incoming request data for debugging
  console.log("Request Body:", req.body); // Check for sizes, name, description, etc.
  console.log("Uploaded File:", req.file); // Check file information

  // Check if a file was uploaded
  if (!req.file) {
    return res
      .status(400)
      .json({ success: false, message: "Image file is required" });
  }

  // Parse sizes from the request body (ensure it's in JSON format)
  let sizes;
  try {
    sizes = JSON.parse(req.body.sizes || '{}'); // Default to an empty object if sizes is not provided
  } catch (error) {
    return res
      .status(400)
      .json({ success: false, message: "Invalid sizes format" });
  }

  // Create the food item
  const food = new foodModel({
    name: req.body.name,
    description: req.body.description,
    price: req.body.price,
    category: req.body.category,
    image: req.file.filename,
    sizes: sizes, // Save sizes to the database
  });

  try {
    await food.save();
    res.json({ success: true, message: "Food Added" });
  } catch (error) {
    console.log("Error saving food item:", error);
    res.json({ success: false, message: "Error adding food item" });
  }
};

// All food list
const listFood = async (req, res) => {
  try {
    const foods = await foodModel.find({});
    res.json({ success: true, data: foods });
  } catch (error) {
    console.log("Error fetching food list:", error);
    res.json({ success: false, message: "Error fetching food list" });
  }
};

// Remove food item
const removeFood = async (req, res) => {
  try {
    const food = await foodModel.findById(req.body.id);
    if (!food) {
      return res
        .status(404)
        .json({ success: false, message: "Food item not found" });
    }

    // Delete the image file associated with the food item
    fs.unlink(`uploads/${food.image}`, () => {
      console.log(`Deleted file: uploads/${food.image}`);
    });

    await foodModel.findByIdAndDelete(req.body.id);
    res.json({ success: true, message: "Food removed" });
  } catch (error) {
    console.log("Error removing food item:", error);
    res.json({ success: false, message: "Error removing food item" });
  }
};

export { addFood, listFood, removeFood };
