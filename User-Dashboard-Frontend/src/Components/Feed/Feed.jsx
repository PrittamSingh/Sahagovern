import React from "react";
import PostCard from "../UI/PostCard.jsx";

const Feed = ({ posts = [], selectedCategory = null, currentUser, onToggleLike }) => {
  const filteredPosts = selectedCategory
    ? posts.filter((post) => post.categoryId === selectedCategory)
    : posts;

  if (!filteredPosts.length) {
    return <div className="text-center text-gray-500">No posts available.</div>;
  }

  return (
    <div className="space-y-8">
  {posts
    .filter(
      (post) => !selectedCategory || post.category === selectedCategory
    )
    .map((post) => (
      <PostCard
        key={post.id}
        post={post}
        onLike={handleLike}
        onComment={handleComment}
        onShare={handleShare}
        onBookmark={handleBookmark}
        isLiked={likedPosts.has(post.id)}
        isBookmarked={bookmarkedPosts.has(post.id)}
      />
    ))}
</div>

  );
};

export default Feed;
