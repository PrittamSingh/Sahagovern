import jwt from "jsonwebtoken";
import User from "../models/authUser.models.js";

const isAdmin = async (req, res, next) => {
  try {
    // Check if user is already authenticated (assuming isAuthenticated runs first)
    const userId = req.id;
    
    if (!userId) {
      return res.status(401).json({
        message: "User not authenticated",
        success: false,
      });
    }

    // Get user from database
    const user = await User.findById(userId).select("role");
    
    if (!user) {
      return res.status(404).json({
        message: "User not found",
        success: false,
      });
    }

    // Check if user has admin role
    if (user.role !== "admin" && user.role !== "ADMIN") {
      return res.status(403).json({
        message: "Access denied. Admin privileges required.",
        success: false,
      });
    }

    // User is admin, proceed to next middleware
    next();
  } catch (error) {
    console.log("Admin middleware error:", error);
    return res.status(500).json({
      message: "Internal server error",
      success: false,
    });
  }
};

export default isAdmin;