import mongoose from "mongoose";

const postSchema = new mongoose.Schema(
  {
    caption: {
      type: String,
      default: "",
    },
    author: {
      type: mongoose.Types.ObjectId,
      ref: "User",
      required: true,
    },

    // ✅ Multiple images
    images: [
      {
        type: String,
        required: true,
      },
    ],

    types: {
      type: String,
      enum: [
        "POTHOLE",
        "ROAD_CRACK",
        "WATER_LEAK",
        "SEWER_OVERFLOW",
        "FLOODING",
        "STREET_LIGHT_OUT",
        "TRAFFIC_SIGNAL_MALFUNCTION",
        "BROKEN_SIDEWALK",
        "ILLEGAL_PARKING",
        "GARBAGE_DUMPING",
        "WASTE_OVERFLOW",
        "NOISE_POLLUTION",
        "VANDALISM",
        "TREE_BLOCKAGE",
        "FALLEN_TREE",
        "DANGEROUS_STRUCTURE",
        "ROAD_SIGN_MISSING",
        "STREET_SIGN_DAMAGED",
        "PUBLIC_TOILET_ISSUE",
        "ANIMAL_CARCASS",
        "HAZARDOUS_WASTE",
        "BUILDING_FIRE_HAZARD",
        "WATER_LOGGING",
        "SLIPPERY_SURFACE",
        "OTHER",
      ],
      required: true,
    },

    status: {
      type: String,
      enum: ["pending", "working", "completed"],
      default: "pending",
    },

    priority: {
      type: String,
      enum: ["LOW", "MEDIUM", "HIGH", "URGENT"],
      default: "MEDIUM",
    },

    contactNumber: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    anonymous: {
      type: Boolean,
      default: false,
    },

    // ✅ Location fields
    wardNumber: { type: String },
    city: { type: String, required: true },
    state: { type: String, required: true },
    country: { type: String, required: true, default: "India" },
    location: {
      longitude: { type: Number, required: true },
      latitude: { type: Number, required: true },
    },

    // ✅ Voting
    upvotes: [{ type: mongoose.Types.ObjectId, ref: "User" }],
    downvotes: [{ type: mongoose.Types.ObjectId, ref: "User" }],

    // ✅ Bookmarks
    bookmarks: [{ type: mongoose.Types.ObjectId, ref: "User" }],

    // ✅ Progress tracking
    progress: [
      {
        step: { type: String },
        updatedAt: { type: Date, default: Date.now },
        updatedBy: { type: mongoose.Types.ObjectId, ref: "User" },
      },
    ],

    // ✅ Responsible department
    department: {
      type: String,
      enum: [
        "Municipal Corporation",
        "Water Department",
        "Electricity Department",
        "Road Authority",
        "Sanitation",
        "Fire Department",
        "Other",
      ],
    },

    // ✅ Deadline
    deadline: { type: Date },

    // ✅ Attachments
    attachments: [
      {
        filename: String,
        url: String,
      },
    ],

    // ✅ Comments
    comments: [{ type: mongoose.Types.ObjectId, ref: "Comment" }],
  },
  { timestamps: true }
);

export default mongoose.model("Post", postSchema);
