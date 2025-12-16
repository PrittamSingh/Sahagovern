// admin.controllers.js

import Admin from "../models/admin.models.js";
import Post from "../models/post.models.js";
import bcrypt from "bcrypt";
import jsonwebtoken from "jsonwebtoken";
import getDataUri from "../utils/datauri.js";
import cloudinary from "../utils/cloudinary.js";

/* -------------------- EMAIL LOGIN -------------------- */
export const emailLogin = async (req, res) => {
  try {
    const { email, password } = req.body;

    let admin = await Admin.findOne({ email });
    if (!admin) {
      return res.status(400).json({
        success: false,
        message: "Admin not found. Please signup first.",
      });
    }

    const isPasswordCorrect = await bcrypt.compare(password, admin.password);
    if (!isPasswordCorrect) {
      return res.status(400).json({
        success: false,
        message: "Incorrect credentials entered.",
      });
    }

    const token = jsonwebtoken.sign(
      { id: admin._id, role: admin.role },
      process.env.JWT_SECRET_KEY,
      { expiresIn: "7d" }
    );

    const populatedPosts = await Promise.all(
      (admin.posts || []).map(async (postId) => {
        const post = await Post.findById(postId);
        return post ? post : null;
      })
    );

    admin = {
      _id: admin._id,
      name: admin.name,
      email: admin.email,
      city: admin.city,
      state: admin.state,
      role: admin.role,
      posts: populatedPosts.filter(Boolean),
    };

    res
      .cookie("token", token, {
        httpOnly: true,
        sameSite: "strict",
        maxAge: 1 * 24 * 60 * 60 * 1000,
      })
      .status(200)
      .json({ success: true, message: "Login successful", token, admin });
  } catch (error) {
    console.error("Admin login error:", error);
    res
      .status(500)
      .json({ success: false, message: "Server error during login" });
  }
}; 

/* -------------------- EMAIL SIGNUP -------------------- */
export const emailSignup = async (req, res) => {
  try {
    const { name, email, password, confirmPassword, city, state, role } =
      req.body;

    if (!password || password !== confirmPassword) {
      return res
        .status(400)
        .json({ success: false, message: "Passwords do not match" });
    }

    if (password.length < 6) {
      return res.status(400).json({
        success: false,
        message: "Password must be at least 6 characters long",
      });
    }

    const existingAdmin = await Admin.findOne({ email });
    if (existingAdmin) {
      return res
        .status(400)
        .json({ success: false, message: "Email already registered" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newAdmin = new Admin({
      name,
      email,
      password: hashedPassword,
      city,
      state,
      role: role || "department_admin",
    });

    await newAdmin.save();

    const token = jsonwebtoken.sign(
      { id: newAdmin._id, role: newAdmin.role },
      process.env.JWT_SECRET_KEY,
      { expiresIn: "7d" }
    );

    res.status(201).json({
      success: true,
      message: "Admin registered successfully",
      token,
      admin: newAdmin,
    });
  } catch (err) {
    console.error("Admin signup error:", err);
    res
      .status(500)
      .json({ success: false, message: "Server error", error: err.message });
  }
};

/* -------------------- LOGOUT -------------------- */
export const logout = async (_, res) => {
  try {
    return res
      .cookie("token", "", { maxAge: 0 })
      .json({ success: true, message: "Logged out successfully." });
  } catch (error) {
    console.error("Logout error:", error);
    res.status(500).json({
      success: false,
      message: "Server error during logout",
      error: error.message,
    });
  }
};

/* -------------------- GET PROFILE -------------------- */
export const getProfile = async (req, res) => {
  try {
    const adminId = req.params.id;
    const admin = await Admin.findById(adminId)
      .populate({
        path: "posts",
        options: { sort: { createdAt: -1 } },
      })
      .populate("bookmarks")
      .select("-password");

    if (!admin) {
      return res.status(404).json({ success: false, message: "Admin not found." });
    }

    return res.status(200).json({ success: true, admin });
  } catch (error) {
    console.error("Get admin profile error:", error);
    res.status(500).json({
      success: false,
      message: "Server error while fetching profile",
      error: error.message,
    });
  }
};

/* -------------------- EDIT PROFILE -------------------- */
export const editProfile = async (req, res) => {
  try {
    const adminId = req.id || req.user?.id || req.user?._id;
    if (!adminId) {
      return res
        .status(401)
        .json({ success: false, message: "Unauthorized: admin id missing" });
    }

    const { name, city, state } = req.body;
    const profilePicture = req.file;
    let cloudResponse;

    if (profilePicture) {
      const fileUri = getDataUri(profilePicture);
      const uploadArg =
        typeof fileUri === "string"
          ? fileUri
          : fileUri.content || fileUri.base64 || fileUri;
      cloudResponse = await cloudinary.uploader.upload(uploadArg);
    }

    const admin = await Admin.findById(adminId).select("-password");
    if (!admin) {
      return res
        .status(404)
        .json({ success: false, message: "Admin not found." });
    }

    if (name) admin.name = name;
    if (city) admin.city = city;
    if (state) admin.state = state;
    if (profilePicture && cloudResponse?.secure_url) {
      admin.profilePicture = cloudResponse.secure_url;
    }

    await admin.save();

    return res
      .status(200)
      .json({ success: true, message: "Profile updated.", admin });
  } catch (error) {
    console.error("Edit profile error:", error);
    res.status(500).json({
      success: false,
      message: "Server error while updating profile",
      error: error.message,
    });
  }
};