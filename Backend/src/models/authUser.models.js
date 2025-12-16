// authUser.models.js

import mongoose, { Schema } from "mongoose";

const userSchema = new Schema(
  {
    fullname: {
      type: String,
      required: true,
      trim: true,
      default: "Anonymous User"
    },

    email: {
      type: String,
      trim: true,
      lowercase: true,
      unique: true, 
      sparse: true, 
    },
    
    password: {
      type: String,
    },

    phonenumber: {
      type: String,
      unique: true,
      sparse: true,
    },

    googleId: {
      type: String,
      unique: true,
      sparse: true,
    },

    loginMethod: {
      type: String,
      enum: ["default", "phone", "google"],
      required: true,
    },
    posts: [
      {
        type: mongoose.Types.ObjectId,
        ref: "Post",
      },
    ],
    bookmarks: [
      {
        type: mongoose.Types.ObjectId,
        ref: "Post",
      },
    ],
     profilePicture: {
      type: String,
      default: "",
    },
    role: {
      type: String,
      default: "user",
    },
    bio: {
      type: String,
      default: "",
    },
    gender: {
      type: String, 
      enum: ["male", "female"],
    },

    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);
export default User;