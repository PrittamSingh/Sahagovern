import React, { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from "react-redux";
// import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import {
  Heart,
  MessageCircle,
  Share2,
  Bookmark,
  MoreVertical,
  CheckCircle,
  Edit,
  Trash2,
  Flag,
  Copy,
  BellOff,
  X,
} from "lucide-react";
import { store } from "../../redux/store";

const PostCard = ({
  post,
  onLike,
  onComment,
  onShare,
  onBookmark,
  onDelete,
  onEdit,
  onReport,
  isLiked,
  isBookmarked,
}) => {
  const [commentText, setCommentText] = useState("");
  const [showComments, setShowComments] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href + `?post=${post.id}`);
    alert("Post link copied!");
    setShowMenu(false);
  };

  const navigate = useNavigate();
  const { user } = useSelector(store=>store.auth);
  return (
    <div className="relative rounded-2xl bg-white/70 backdrop-blur-sm border border-gray-200 shadow-md p-6 transition-all hover:shadow-lg">
      {/* Post Header */}
      <div className="flex items-center justify-between mb-4 relative">
        <div className="flex items-center space-x-3">
          {/* avatar can be emoji or image */}
          <div className="h-10 w-10 flex items-center justify-center rounded-full border border-gray-200 bg-gray-100 text-xl">
            {post.user.avatar}
            {/* <Avatar className='w-6 h-6'>
              <AvatarImage src="" alt="" />
              <AvatarFallback></AvatarFallback>
            </Avatar> */}
          </div>
          <div>
            <div className="flex items-center gap-1">
              <p className="font-semibold text-gray-800">{post.user.name}</p>
              {post.user.verified && (
                <CheckCircle className="h-4 w-4 text-blue-500" />
              )}
            </div>
            <p className="text-xs text-gray-400">
              {post.timestamp} · {post.location}
            </p>
          </div>
        </div>

        {/* More Options Menu */}
        <div className="relative">
          <button
            onClick={() => setShowMenu(!showMenu)}
            className="text-gray-400 hover:text-gray-600"
          >
            <MoreVertical className="h-5 w-5" />
          </button>

          {showMenu && (
            <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-xl shadow-lg z-20 animate-fadeIn">
              <ul className="py-1 text-sm text-gray-700">
                <li>
                  <button
                    onClick={() => {
                      onEdit?.(post.id);
                      setShowMenu(false);
                    }}
                    className="flex items-center gap-2 w-full px-4 py-2 hover:bg-gray-100"
                  >
                    <Edit className="h-4 w-4 text-blue-500" /> Edit Post
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => {
                      onDelete?.(post.id);
                      setShowMenu(false);
                    }}
                    className="flex items-center gap-2 w-full px-4 py-2 hover:bg-gray-100 text-red-600"
                  >
                    <Trash2 className="h-4 w-4" /> Delete
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => {
                      onReport?.(post.id);
                      setShowMenu(false);
                    }}
                    className="flex items-center gap-2 w-full px-4 py-2 hover:bg-gray-100 text-yellow-600"
                  >
                    <Flag className="h-4 w-4" /> Report
                  </button>
                </li>
                <li>
                  <button
                    onClick={handleCopyLink}
                    className="flex items-center gap-2 w-full px-4 py-2 hover:bg-gray-100"
                  >
                    <Copy className="h-4 w-4 text-gray-600" /> Copy Link
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => {
                      alert("User muted!");
                      setShowMenu(false);
                    }}
                    className="flex items-center gap-2 w-full px-4 py-2 hover:bg-gray-100"
                  >
                    <BellOff className="h-4 w-4 text-gray-600" /> Mute User
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setShowMenu(false)}
                    className="flex items-center gap-2 w-full px-4 py-2 hover:bg-gray-100"
                  >
                    <X className="h-4 w-4 text-gray-600" /> Cancel
                  </button>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>

      {/* Post Content */}
      <div className="mb-4">
        <p className="text-gray-700">{post.content}</p>
        {post.images?.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-3">
            {post.images.map((img) => (
              <div key={img.id} className="relative">
                <img
                  src={img.url}
                  alt={img.caption || "Post image"}
                  className="rounded-xl w-full object-cover"
                />
                {img.caption && (
                  <p className="text-xs text-gray-500 mt-1">{img.caption}</p>
                )}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Metadata */}
      <div className="flex flex-wrap gap-2 mb-3">
        {post.status && (
          <span
            className={`px-2 py-1 text-xs rounded-full font-medium ${
              post.status === "resolved"
                ? "bg-green-100 text-green-700"
                : post.status === "in-progress"
                ? "bg-yellow-100 text-yellow-700"
                : "bg-red-100 text-red-700"
            }`}
          >
            {post.status}
          </span>
        )}
        {post.priority && (
          <span className="px-2 py-1 text-xs rounded-full bg-red-100 text-red-700 font-medium">
            Priority: {post.priority}
          </span>
        )}
        {post.ticketId && (
          <span className="px-2 py-1 text-xs rounded-full bg-blue-100 text-blue-700 font-medium">
            Ticket: {post.ticketId}
          </span>
        )}
      </div>

      {/* Tags */}
      {post.tags?.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-3">
          {post.tags.map((tag, i) => (
            <span
              key={i}
              className="px-2 py-1 text-xs rounded-lg bg-gray-100 text-gray-600"
            >
              {tag}
            </span>
          ))}
        </div>
      )}

      {/* Actions */}
      <div className="flex items-center justify-between mt-4 border-t border-gray-200 pt-3">
        <button
          onClick={() => onLike(post.id)}
          className={`flex items-center space-x-2 transition ${
            isLiked ? "text-red-500" : "text-gray-500 hover:text-red-500"
          }`}
        >
          <Heart className={`h-5 w-5 ${isLiked && "fill-current"}`} />
          <span className="text-sm">
            {isLiked ? "Liked" : "Like"} ({post.likes})
          </span>
        </button>

        <button
          onClick={() => setShowComments(!showComments)}
          className="flex items-center space-x-2 text-gray-500 hover:text-blue-500 transition"
        >
          <MessageCircle className="h-5 w-5" />
          <span className="text-sm">
            {showComments ? "Hide" : "Comment"} ({post.comments})
          </span>
        </button>

        <button
          onClick={() => onShare(post.id)}
          className="flex items-center space-x-2 text-gray-500 hover:text-green-500 transition"
        >
          <Share2 className="h-5 w-5" />
          <span className="text-sm">Share ({post.shares})</span>
        </button>

        <button
          onClick={() => onBookmark(post.id)}
          className={`flex items-center space-x-2 transition ${
            isBookmarked
              ? "text-blue-600"
              : "text-gray-500 hover:text-blue-500"
          }`}
        >
          <Bookmark className={`h-5 w-5 ${isBookmarked && "fill-current"}`} />
          <span className="text-sm">
            {isBookmarked ? "Saved" : "Save"} ({post.bookmarks})
          </span>
        </button>
      </div>

      {/* Comments Section */}
      {showComments && (
        <div className="mt-4 border-t border-gray-200 pt-3">
          <p className="text-sm text-gray-500 mb-2">
            {post.comments} comments (mocked for now)
          </p>
          <div className="flex items-center space-x-2">
            <input
              type="text"
              value={commentText}
              onChange={(e) => setCommentText(e.target.value)}
              placeholder="Write a comment..."
              className="flex-1 border rounded-lg px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              onClick={() => {
                onComment(post.id, commentText);
                setCommentText("");
              }}
              className="px-3 py-1 bg-blue-500 text-white text-sm rounded-lg hover:bg-blue-600 transition"
            >
              Post
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PostCard;


// // PostCard.jsx

// import React, { useState } from "react";
// import {
//   Heart,
//   MessageCircle,
//   Share2,
//   Bookmark,
//   MoreVertical,
//   ThumbsUp,
//   AlertCircle,
// } from "lucide-react";

// const PostCard = ({ post }) => {
//   const [liked, setLiked] = useState(false);
//   const [bookmarked, setBookmarked] = useState(false);
//   const [showComments, setShowComments] = useState(false);
//   const [comments, setComments] = useState(post.comments || []);
//   const [newComment, setNewComment] = useState("");

//   const toggleLike = () => setLiked(!liked);
//   const toggleBookmark = () => setBookmarked(!bookmarked);
//   const toggleComments = () => setShowComments(!showComments);

//   const addComment = () => {
//     if (!newComment.trim()) return;
//     setComments([
//       ...comments,
//       { id: Date.now(), user: "You", text: newComment },
//     ]);
//     setNewComment("");
//   };

//   return (
//     <div className="relative rounded-2xl bg-white/70 backdrop-blur-sm border border-gray-200 shadow-md p-6 transition-all hover:shadow-lg">
//       {/* Post Header */}
//       <div className="flex items-center justify-between mb-4">
//         <div className="flex items-center space-x-3">
//           <img
//             src={post.user.avatar}
//             alt={post.user.name}
//             className="h-10 w-10 rounded-full border border-gray-200"
//           />
//           <div>
//             <p className="font-semibold text-gray-800">{post.user.name}</p>
//             <p className="text-xs text-gray-400">
//               {post.timestamp} · {post.location}
//             </p>
//           </div>
//         </div>
//         <button className="text-gray-400 hover:text-gray-600">
//           <MoreVertical className="h-5 w-5" />
//         </button>
//       </div>

//       {/* Post Content */}
//       <div className="mb-4">
//         <p className="text-gray-700">{post.content}</p>
//         {post.image && (
//           <img
//             src={post.image}
//             alt="Issue"
//             className="mt-3 rounded-xl w-full object-cover"
//           />
//         )}
//       </div>

//       {/* Metadata */}
//       {post.status && (
//         <div className="flex flex-wrap gap-2 mb-3">
//           <span
//             className={`px-2 py-1 text-xs rounded-full font-medium ${
//               post.status === "Resolved"
//                 ? "bg-green-100 text-green-700"
//                 : "bg-yellow-100 text-yellow-700"
//             }`}
//           >
//             {post.status}
//           </span>
//           {post.priority && (
//             <span className="px-2 py-1 text-xs rounded-full bg-red-100 text-red-700 font-medium">
//               Priority: {post.priority}
//             </span>
//           )}
//           {post.ticket && (
//             <span className="px-2 py-1 text-xs rounded-full bg-blue-100 text-blue-700 font-medium">
//               Ticket: {post.ticket}
//             </span>
//           )}
//         </div>
//       )}

//       {/* Tags */}
//       {post.tags?.length > 0 && (
//         <div className="flex flex-wrap gap-2 mb-3">
//           {post.tags.map((tag, i) => (
//             <span
//               key={i}
//               className="px-2 py-1 text-xs rounded-lg bg-gray-100 text-gray-600"
//             >
//               #{tag}
//             </span>
//           ))}
//         </div>
//       )}

//       {/* Post Actions */}
//       <div className="flex items-center justify-between mt-4 border-t border-gray-200 pt-3">
//         <button
//           onClick={toggleLike}
//           className={`flex items-center space-x-2 transition ${
//             liked ? "text-red-500" : "text-gray-500 hover:text-red-500"
//           }`}
//         >
//           <Heart className={`h-5 w-5 ${liked && "fill-current"}`} />
//           <span className="text-sm">{liked ? "Liked" : "Like"}</span>
//         </button>

//         <button
//           onClick={toggleComments}
//           className="flex items-center space-x-2 text-gray-500 hover:text-blue-500 transition"
//         >
//           <MessageCircle className="h-5 w-5" />
//           <span className="text-sm">
//             {showComments ? "Hide" : "Comment"}
//           </span>
//         </button>

//         <button className="flex items-center space-x-2 text-gray-500 hover:text-green-500 transition">
//           <Share2 className="h-5 w-5" />
//           <span className="text-sm">Share</span>
//         </button>

//         <button
//           onClick={toggleBookmark}
//           className={`flex items-center space-x-2 transition ${
//             bookmarked
//               ? "text-blue-600"
//               : "text-gray-500 hover:text-blue-500"
//           }`}
//         >
//           <Bookmark
//             className={`h-5 w-5 ${bookmarked && "fill-current"}`}
//           />
//           <span className="text-sm">
//             {bookmarked ? "Saved" : "Save"}
//           </span>
//         </button>
//       </div>

//       {/* Comments Section */}
//       {showComments && (
//         <div className="mt-4 border-t border-gray-200 pt-3">
//           <div className="space-y-3 mb-3">
//             {comments.length > 0 ? (
//               comments.map((c) => (
//                 <div
//                   key={c.id}
//                   className="flex items-start space-x-2 text-sm"
//                 >
//                   <span className="font-semibold text-gray-800">
//                     {c.user}:
//                   </span>
//                   <span className="text-gray-600">{c.text}</span>
//                 </div>
//               ))
//             ) : (
//               <p className="text-gray-400 text-sm">No comments yet.</p>
//             )}
//           </div>

//           {/* Add Comment */}
//           <div className="flex items-center space-x-2">
//             <input
//               type="text"
//               value={newComment}
//               onChange={(e) => setNewComment(e.target.value)}
//               placeholder="Write a comment..."
//               className="flex-1 border rounded-lg px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//             <button
//               onClick={addComment}
//               className="px-3 py-1 bg-blue-500 text-white text-sm rounded-lg hover:bg-blue-600 transition"
//             >
//               Post
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default PostCard;
