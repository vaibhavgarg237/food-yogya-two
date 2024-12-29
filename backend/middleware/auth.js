// import jwt from "jsonwebtoken"

// const authMiddleware = async (req,res,next) => {
//     const {token} = req.headers;
//     if (!token) {
//         return res.json({success:false,message:"Not authorised login again"})
//     }
//     try {
//         const token_decode = jwt.verify(token,process.env.JWT_SECRET);
//         req.body.userId = token_decode.id;
//         next();
//     } catch (error) {
//         console.log(error)
//         res.json({success:false,message:"Error"})
//     }
// }

// export default authMiddleware;

import jwt from "jsonwebtoken";

const authMiddleware = async (req, res, next) => {
  // Extract token from the Authorization header (Bearer <token>)
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.json({ success: false, message: "Not authorised login again" });
  }

  const token = authHeader.split(' ')[1]; // Get the token part after 'Bearer'

  try {
    // Verify the token
    const token_decode = jwt.verify(token, process.env.JWT_SECRET);
    
    // Attach the userId to the request body
    req.body.userId = token_decode.id;
    
    next(); // Proceed to the next middleware or route handler
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error" });
  }
};

export default authMiddleware;
