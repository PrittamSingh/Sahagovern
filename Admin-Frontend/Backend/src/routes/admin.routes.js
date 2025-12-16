// routes/admin.routes.js

import express from "express";
import {
  emailLogin,
  emailSignup,
  logout,
  getProfile,
  editProfile,
} from "../controllers/admin.controllers.js";

import isAdmin from "../middlewares/isAdmin.js";
import upload from "../middlewares/multer.js"; // if you support profile picture upload

const router = express.Router();

/* -------------------- AUTH -------------------- */
router.post("/signup", emailSignup);
router.post("/login", emailLogin);
router.post("/logout", logout);

/* -------------------- PROFILE -------------------- */
router.get("/profile/:id", isAdmin, getProfile);
router.put(
  "/profile/edit",
  isAdmin,
  upload.single("profilePicture"), // optional if editing avatar
  editProfile
);

export default router;