import mongoose from "mongoose";

const DEPARTMENTS = [
  "Sanitation",
  "Roads",
  "Water Supply",
  "Electricity",
  "Public Safety",
  "Health",
  "Education",
  "Transport",
  "Parks & Recreation",
  "Others"
];

const adminSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },

  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true
  },

  password: {
    type: String,
    required: true,
    minlength: 6
  },

  role: {
    type: String,
    enum: ["superadmin", "department_admin"],
    default: "department_admin"
  },

  // Posts created / managed by admin
  posts: [
    { type: mongoose.Schema.Types.ObjectId, ref: "Post" }
  ],

  // Bookmarked posts
  bookmarks: [
    { type: mongoose.Schema.Types.ObjectId, ref: "Post" }
  ],

  // Each department stores related posts
  departmentPosts: {
    Sanitation: [{ type: mongoose.Schema.Types.ObjectId, ref: "Post" }],
    Roads: [{ type: mongoose.Schema.Types.ObjectId, ref: "Post" }],
    WaterSupply: [{ type: mongoose.Schema.Types.ObjectId, ref: "Post" }],
    Electricity: [{ type: mongoose.Schema.Types.ObjectId, ref: "Post" }],
    PublicSafety: [{ type: mongoose.Schema.Types.ObjectId, ref: "Post" }],
    Health: [{ type: mongoose.Schema.Types.ObjectId, ref: "Post" }],
    Education: [{ type: mongoose.Schema.Types.ObjectId, ref: "Post" }],
    Transport: [{ type: mongoose.Schema.Types.ObjectId, ref: "Post" }],
    ParksRecreation: [{ type: mongoose.Schema.Types.ObjectId, ref: "Post" }],
    Others: [{ type: mongoose.Schema.Types.ObjectId, ref: "Post" }]
  },

  createdAt: {
    type: Date,
    default: Date.now
  }
});

export const Departments = DEPARTMENTS;
<<<<<<< HEAD:Backend/models/admin.models.js
export default mongoose.model("Admin", adminSchema);
=======
export default mongoose.model("Admin", adminSchema);
>>>>>>> 135682bb5ce1afc9712f6ba95d561db1778daa48:Backend/src/models/admin.models.js
