import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://yogyaarora1:Official17@cluster0.o3dkp.mongodb.net/food-del').then(()=>console.log("DB connected"));
}

// import mongoose from "mongoose";

// export const connectDB = async () => {
//   try {
//     await mongoose.connect('mongodb+srv://yogya:Official17@cluster0.tstfe.mongodb.net/food-del', {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     });
//     console.log("DB connected");
//   } catch (error) {
//     console.error("Error connecting to the database:", error);
//     process.exit(1); // Exit the process with failure if DB connection fails
//   }
// };

