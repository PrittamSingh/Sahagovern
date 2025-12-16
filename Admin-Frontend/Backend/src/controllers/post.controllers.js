import sharp from "sharp";
import cloudinary from "../utils/cloudinary.js";
import Post from "../models/post.models.js";
import User from "../models/authUser.models.js";
import Comment from "../models/comment.models.js";
// import { getReceiverSocketId, io } from "../socket/socket.js";

// Helper function to process multiple images
const processImages = async (files) => {
  const processedImages = [];
  
  for (const file of files) {
    const optimizedImageBuffer = await sharp(file.buffer)
      .resize({ width: 800, height: 800, fit: "inside" })
      .toFormat("jpeg", { quality: 90 })
      .toBuffer();

    const fileUri = `data:image/jpeg;base64,${optimizedImageBuffer.toString("base64")}`;
    const cloudResponse = await cloudinary.uploader.upload(fileUri);
    processedImages.push(cloudResponse.secure_url);
  }
  
  return processedImages;
};

// ✅ Create new post with enhanced features
export const addNewPost = async (req, res) => {
  try {
    const {
      caption,
      types,
      priority,
      contactNumber,
      email,
      anonymous,
      wardNumber,
      city,
      state,
      country,
      longitude,
      latitude,
      department,
      deadline
    } = req.body;

    const images = req.files; // Multiple files
    const authorId = req.id;

    // Validation
    if (!images || images.length === 0) {
      return res.status(400).json({ message: "At least one image is required", success: false });
    }

    if (!types) {
      return res.status(400).json({ message: "Issue type is required", success: false });
    }

    if (!contactNumber || !email) {
      return res.status(400).json({ message: "Contact number and email are required", success: false });
    }

    // Process multiple images
  // Upload all images
const processedImages = await Promise.all(
  images.map(
    (file) =>
      new Promise((resolve, reject) => {
        cloudinary.uploader.upload_stream(
          { resource_type: "image" },
          (error, result) => {
            if (error) reject(error);
            else resolve(result.secure_url);
          }
        ).end(file.buffer);
      })
  )
);

// Create post
const post = await Post.create({
  caption,
  author: authorId,
  images: processedImages, // ✅ Now it's defined
  types,
  priority: priority || "MEDIUM",
  contactNumber,
  email,
  state: state || "Jharkhand",
  anonymous: anonymous || false,
  wardNumber,
  city,
  country: country || "India",
  location: { longitude, latitude },
  department,
  deadline: deadline ? new Date(deadline) : null,
});


    // Add post to user's posts
    const user = await User.findById(authorId);
    if (user) {
      user.posts.push(post._id);
      await user.save();
    }

    await post.populate({ path: "author", select: "-password" });

    return res.status(201).json({
      message: "New post created successfully",
      post,
      success: true,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal server error", success: false });
  }
};

// ✅ Get all posts with filtering options
export const getAllPost = async (req, res) => {
  try {
    const {
      types,
      status,
      priority,
      city,
      department,
      sortBy = "createdAt",
      sortOrder = "desc",
      page = 1,
      limit = 10
    } = req.query;

    // Build filter object
    const filter = {};
    if (types) filter.types = types;
    if (status) filter.status = status;
    if (priority) filter.priority = priority;
    if (city) filter.city = new RegExp(city, 'i');
    if (department) filter.department = department;

    const skip = (page - 1) * limit;
    const sortOptions = {};
    sortOptions[sortBy] = sortOrder === "asc" ? 1 : -1;

    const posts = await Post.find(filter)
      .sort(sortOptions)
      .skip(skip)
      .limit(parseInt(limit))
      .populate({ path: "author", select: "username profilePicture" })
      .populate({
        path: "comments",
        populate: {
          path: "author",
          select: "username profilePicture",
        },
      })
      .populate({
        path: "progress.updatedBy",
        select: "username profilePicture",
      });

    const total = await Post.countDocuments(filter);

    return res.status(200).json({
      posts,
      pagination: {
        current: parseInt(page),
        total: Math.ceil(total / limit),
        count: posts.length,
        totalPosts: total
      },
      success: true,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal server error", success: false });
  }
};

// ✅ Get user's posts
export const getUserPost = async (req, res) => {
  try {
    const authorId = req.id;
    const posts = await Post.find({ author: authorId })
      .sort({ createdAt: -1 })
      .populate({
        path: "author",
        select: "username profilePicture",
      })
      .populate({
        path: "comments",
        populate: {
          path: "author",
          select: "username profilePicture",
        },
      });

    return res.status(200).json({
      posts,
      success: true,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal server error", success: false });
  }
};

// ✅ Upvote post
export const upvotePost = async (req, res) => {
  try {
    const userId = req.id;
    const postId = req.params.id;

    const post = await Post.findById(postId);
    if (!post) {
      return res.status(404).json({ message: "Post not found", success: false });
    }

    // Remove from downvotes if exists
    await post.updateOne({ $pull: { downvotes: userId } });
    
    // Add to upvotes
    await post.updateOne({ $addToSet: { upvotes: userId } });
    await post.save();

    return res.status(200).json({ message: "Post upvoted", success: true });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal server error", success: false });
  }
};

// ✅ Downvote post
export const downvotePost = async (req, res) => {
  try {
    const userId = req.id;
    const postId = req.params.id;

    const post = await Post.findById(postId);
    if (!post) {
      return res.status(404).json({ message: "Post not found", success: false });
    }

    // Remove from upvotes if exists
    await post.updateOne({ $pull: { upvotes: userId } });
    
    // Add to downvotes
    await post.updateOne({ $addToSet: { downvotes: userId } });
    await post.save();

    return res.status(200).json({ message: "Post downvoted", success: true });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal server error", success: false });
  }
};

// ✅ Remove vote from post
export const removeVote = async (req, res) => {
  try {
    const userId = req.id;
    const postId = req.params.id;

    const post = await Post.findById(postId);
    if (!post) {
      return res.status(404).json({ message: "Post not found", success: false });
    }

    // Remove from both upvotes and downvotes
    await post.updateOne({ 
      $pull: { 
        upvotes: userId,
        downvotes: userId 
      } 
    });
    await post.save();

    return res.status(200).json({ message: "Vote removed", success: true });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal server error", success: false });
  }
};

// ✅ Bookmark/Unbookmark post
export const bookmarkPost = async (req, res) => {
  try {
    const postId = req.params.id;
    const userId = req.id;

    const post = await Post.findById(postId);
    if (!post) {
      return res.status(404).json({ message: "Post not found", success: false });
    }

    const user = await User.findById(userId);
    const isBookmarked = user.bookmarks?.includes(post._id);

    if (isBookmarked) {
      // Remove bookmark
      await user.updateOne({ $pull: { bookmarks: post._id } });
      await post.updateOne({ $pull: { bookmarks: userId } });
      
      return res.status(200).json({
        type: "removed",
        message: "Post removed from bookmarks",
        success: true,
      });
    } else {
      // Add bookmark
      await user.updateOne({ $addToSet: { bookmarks: post._id } });
      await post.updateOne({ $addToSet: { bookmarks: userId } });
      
      return res.status(200).json({
        type: "added",
        message: "Post bookmarked successfully",
        success: true,
      });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal server error", success: false });
  }
};


export const updatePostStatus = async (req, res) => {
  try {
    const postId = req.params.id;
    const { status, step } = req.body;
    const userId = req.id;

    // Check if user is admin
    const admin = await Admin.findById(userId);
    if (!admin) {
      return res.status(403).json({ 
        message: "Only admins can update post status", 
        success: false 
      });
    }

    const updateData = {};
    if (status) updateData.status = status;

    // If there is a progress step
    if (step) {
      updateData.$push = {
        progress: {
          step,
          updatedBy: userId,
          updatedAt: new Date(),
        },
      };
    }

    const post = await Post.findByIdAndUpdate(
      postId,
      updateData,
      { new: true } // return updated document
    ).populate({
      path: "progress.updatedBy",
      select: "username profilePicture",
    });

    if (!post) {
      return res.status(404).json({ message: "Post not found", success: false });
    }

    return res.status(200).json({
      message: "Post status updated successfully",
      post,
      success: true,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal server error", success: false });
  }
};



// ✅ Add comment to post
export const addComment = async (req, res) => {
  try {
    const postId = req.params.id;
    const userId = req.id;
    const { text } = req.body;

    if (!text) {
      return res.status(400).json({ message: "Comment text is required", success: false });
    }

    const post = await Post.findById(postId);
    if (!post) {
      return res.status(404).json({ message: "Post not found", success: false });
    }

    const comment = await Comment.create({
      text,
      author: userId,
      post: postId,
    });

    await comment.populate({
      path: "author",
      select: "username profilePicture",
    });

    post.comments.push(comment._id);
    await post.save();

    return res.status(201).json({
      message: "Comment added successfully",
      comment,
      success: true,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal server error", success: false });
  }
};

// ✅ Get comments of a post
export const getCommentsOfPost = async (req, res) => {
  try {
    const postId = req.params.id;

    const comments = await Comment.find({ post: postId })
      .sort({ createdAt: -1 })
      .populate("author", "username profilePicture");

    return res.status(200).json({ 
      success: true, 
      comments,
      count: comments.length 
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal server error", success: false });
  }
};

// ✅ Delete post
export const deletePost = async (req, res) => {
  try {
    const postId = req.params.id;
    const userId = req.id;

    // Check if ID belongs to admin
    const admin = await Admin.findById(userId);

    // Check if ID belongs to user
    const user = await User.findById(userId);

    if (!admin && !user) {
      return res.status(403).json({ message: "Unauthorized", success: false });
    }

    const post = await Post.findById(postId);
    if (!post) {
      return res.status(404).json({ message: "Post not found", success: false });
    }

    // If it's a user, allow deletion only if they own the post
    if (user && post.author.toString() !== userId) {
      return res.status(403).json({ message: "You can delete only your own post", success: false });
    }

    // Delete images from Cloudinary
    for (const imageUrl of post.images) {
      const publicId = imageUrl.split('/').pop().split('.')[0];
      await cloudinary.uploader.destroy(publicId);
    }

    // Delete post
    await Post.findByIdAndDelete(postId);

    // Remove post reference from user if deleter is the user
    if (user) {
      user.posts = user.posts.filter((id) => id.toString() !== postId);
      await user.save();
    }

    // Delete associated comments
    await Comment.deleteMany({ post: postId });

    return res.status(200).json({
      success: true,
      message: "Post deleted successfully",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal server error", success: false });
  }
};

// ✅ Get posts by location (nearby posts)
export const getNearbyPosts = async (req, res) => {
  try {
    const { longitude, latitude, radius = 5000 } = req.query; // radius in meters

    if (!longitude || !latitude) {
      return res.status(400).json({ 
        message: "Longitude and latitude are required", 
        success: false 
      });
    }

    const posts = await Post.find({
      location: {
        $near: {
          $geometry: {
            type: "Point",
            coordinates: [parseFloat(longitude), parseFloat(latitude)]
          },
          $maxDistance: parseInt(radius)
        }
      }
    })
    .populate({ path: "author", select: "username profilePicture" })
    .populate({
      path: "comments",
      populate: {
        path: "author",
        select: "username profilePicture",
      },
    });

    return res.status(200).json({
      posts,
      count: posts.length,
      success: true,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal server error", success: false });
  }
};

// ✅ Get post statistics
export const getPostStats = async (req, res) => {
  try {
    const stats = await Post.aggregate([
      {
        $group: {
          _id: "$status",
          count: { $sum: 1 }
        }
      }
    ]);

    const typeStats = await Post.aggregate([
      {
        $group: {
          _id: "$types",
          count: { $sum: 1 }
        }
      }
    ]);

    const priorityStats = await Post.aggregate([
      {
        $group: {
          _id: "$priority",
          count: { $sum: 1 }
        }
      }
    ]);

    return res.status(200).json({
      statusStats: stats,
      typeStats,
      priorityStats,
      success: true,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal server error", success: false });
  }
};

// ✅ Update post priority (admin function)
export const updatePostPriority = async (req, res) => {
  try {
    const postId = req.params.id;
    const { priority } = req.body;

    const post = await Post.findByIdAndUpdate(
      postId,
      { priority },
      { new: true }
    );

    if (!post) {
      return res.status(404).json({ message: "Post not found", success: false });
    }

    return res.status(200).json({
      message: "Post priority updated successfully",
      post,
      success: true,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal server error", success: false });
  }
};

// ✅ Assign department to post (admin function)


export const assignDepartment = async (req, res) => {
  try {
    const postId = req.params.id;
    const { department, deadline, adminId } = req.body; // ✅ include adminId

    const updateData = { department };
    if (deadline) {
      updateData.deadline = new Date(deadline);
    }

    // ✅ Update Post
    const post = await Post.findByIdAndUpdate(postId, updateData, { new: true });

    if (!post) {
      return res.status(404).json({ message: "Post not found", success: false });
    }

    // ✅ Push into related department list in Admin
    const admin = await Admin.findById(adminId);
    if (admin) {
      if (!admin.departments[department]) {
        admin.departments[department] = []; // create if not exists
      }

      if (!admin.departments[department].includes(postId)) {
        admin.departments[department].push(postId);
        await admin.save();
      }
    }

    return res.status(200).json({
      message: "Department assigned successfully",
      post,
      success: true,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal server error", success: false });
  }
};