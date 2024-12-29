import express from "express";
import { addFood, listFood, removeFood } from "../controllers/foodController.js";
import multer from "multer";
import fs from "fs"; // Import fs to check for the directory
import path from "path"; // Import path to create directory path

const foodRouter = express.Router();

// Define the uploads directory
const uploadDir = path.join(process.cwd(), "uploads"); // Use process.cwd() for the base directory

// Check if the uploads directory exists, if not, create it
if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir); // Create the directory if it does not exist
}

// Image storage Engine
const storage = multer.diskStorage({
    destination:"uploads",
    filename:(req,file,cb)=>{
        return cb(null,`${Date.now()}${file.originalname}`)
    }
})

const upload = multer({storage:storage})


foodRouter.post("/add",upload.single("image"),addFood)

foodRouter.get("/list",listFood)

foodRouter.post("/remove",removeFood)

export default foodRouter;
