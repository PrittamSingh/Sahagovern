// TestFeed.jsx

import React, { useState } from "react";
import PostCard from "./PostCard";

const TestFeed = () => {
  const [posts, setPosts] = useState([
    {
      id: 1,
      user: { name: "Amish Jain", verified: true },
      content: "The road near my house has huge potholes. Needs urgent repair 🚧",
      timestamp: "2h ago",
      location: "Indore, India",
      likes: 5,
      comments: 2,
      shares: 1,
      bookmarks: 0,
      status: "in-progress",
      priority: "High",
      ticketId: "TCK-001",
      tags: ["road", "potholes", "safety"],
      images: [
        {
          id: 1,
          url: "https://via.placeholder.com/300",
          caption: "Damaged road",
        },
      ],
    },
    {
      id: 2,
      user: { name: "Riya Sharma", verified: false },
      content: "Street lights are not working for the last 3 days 🌃",
      timestamp: "5h ago",
      location: "Bhopal, India",
      likes: 10,
      comments: 5,
      shares: 3,
      bookmarks: 2,
      status: "open",
      priority: "Medium",
      ticketId: "TCK-002",
      tags: ["lights", "electricity"],
      images: [],
    },
  ]);

  // --- Handlers ---
  const handleLike = (id) => {
    setPosts((prev) =>
      prev.map((post) =>
        post.id === id ? { ...post, likes: post.likes + 1 } : post
      )
    );
  };

  const handleComment = (id, comment) => {
    console.log("New comment on post", id, ":", comment);
  };

  const handleShare = (id) => {
    console.log("Shared post", id);
  };

  const handleBookmark = (id) => {
    setPosts((prev) =>
      prev.map((post) =>
        post.id === id
          ? { ...post, bookmarks: post.bookmarks + 1 }
          : post
      )
    );
  };

  const handleDelete = (id) => {
    setPosts((prev) => prev.filter((post) => post.id !== id));
  };

  const handleEdit = (id) => {
    alert(`Edit functionality for post ${id} coming soon!`);
  };

  const handleReport = (id) => {
    alert(`Reported post ${id}`);
  };

  return (
    <div className="space-y-6 p-6 bg-gray-50 min-h-screen">
      {posts.map((post) => (
        <PostCard
          key={post.id}
          post={post}
          onLike={handleLike}
          onComment={handleComment}
          onShare={handleShare}
          onBookmark={handleBookmark}
          onDelete={handleDelete}
          onEdit={handleEdit}
          onReport={handleReport}
          isLiked={false}
          isBookmarked={false}
        />
      ))}
    </div>
  );
};

export default TestFeed;
