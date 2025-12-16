import express from "express";
import upload from "../middlewares/multer.js";
import {
  // Core post operations
  addNewPost,
  getAllPost,
  getUserPost,
  deletePost,

  // Voting system
  upvotePost,
  downvotePost,
  removeVote,

  // Bookmark system
  bookmarkPost,

  // Status and progress
  updatePostStatus,

  // Comments
  addComment,
  getCommentsOfPost,

  // Location-based
  getNearbyPosts,

  // Statistics
  getPostStats,

  // Admin functions
  updatePostPriority,
  assignDepartment,
} from "../controllers/post.controllers.js";
import isAuthenticated from "../middlewares/isAuthenticated.js";
import isAdmin from "../middlewares/isAdmin.js"; // Assuming you have admin middleware

const router = express.Router();

// ✅ Core Post Operations
router.route("/addpost")
  .post(isAuthenticated, upload.array("images", 7), addNewPost);
 // Support multiple images (max 5)

router.route("/all").get(isAuthenticated, getAllPost);

  router.route("/user").get(isAuthenticated, getUserPost);

router.route("/:id").delete(isAuthenticated, deletePost);

// ✅ Voting System Routes
router.route("/:id/upvote").post(isAuthenticated, upvotePost);

router.route("/:id/downvote").post(isAuthenticated, downvotePost);

router.route("/:id/vote").delete(isAuthenticated, removeVote);

// ✅ Bookmark Routes
router.route("/:id/bookmark").post(isAuthenticated, bookmarkPost);

// ✅ Status and Progress Routes
router.route("/:id/status").put(isAuthenticated, updatePostStatus); // please change for admin

// ✅ Comment Routes
router.route("/:id/comment").post(isAuthenticated, addComment);

router.route("/:id/comments").get(isAuthenticated, getCommentsOfPost);

// ✅ Location-based Routes
router.route("/nearby").get(isAuthenticated, getNearbyPosts);

// ✅ Statistics Routes
router.route("/stats").get(isAuthenticated, getPostStats);

// ✅ Admin Routes (Protected with admin middleware)
router.route("/:id/priority").put(isAuthenticated, isAdmin, updatePostPriority);

router.route("/:id/department").put(isAuthenticated, isAdmin, assignDepartment);

// ✅ Additional filtering routes for better organization
router.route("/filter/status/:status").get(isAuthenticated, getAllPost);

router.route("/filter/type/:type").get(isAuthenticated, getAllPost);

router.route("/filter/priority/:priority").get(isAuthenticated, getAllPost);

router.route("/filter/city/:city").get(isAuthenticated, getAllPost);

router.route("/filter/department/:department").get(isAuthenticated, getAllPost);

export default router;