import React, { useState } from "react";

/* ---------- UI Components ---------- */
import Header from "../../Components/UI/Header.jsx";
import NewPostModal from "../../Components/UI/NewPostModal.jsx";

/* ---------- Feed ---------- */
import Feed from "../../Components/Feed/Feed.jsx";

/* ---------- Sidebars ---------- */
import LeftSidebar from "../../Components/Sidebar/LeftSidebar.jsx";
import RightSidebar from "../../Components/Sidebar/RightSidebar.jsx";

/* ---------- Icons ---------- */
import { Plus } from "lucide-react";

/* ---------- Constants ---------- */
const CATEGORIES = [
  { id: 1, name: "Infrastructure" },
  { id: 2, name: "Utilities" },
  { id: 3, name: "Environment" },
];

const Home = () => {
  /* -------------------- State -------------------- */
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [posts, setPosts] = useState([]);
  const [likedPosts, setLikedPosts] = useState([]);
  const [bookmarkedPosts, setBookmarkedPosts] = useState([]);
  const [showNewPostModal, setShowNewPostModal] = useState(false);

  /* -------------------- Handlers -------------------- */
  const handleLike = (postId) => {
    setLikedPosts((prev) =>
      prev.includes(postId)
        ? prev.filter((id) => id !== postId)
        : [...prev, postId]
    );
  };

  const handleBookmark = (postId) => {
    setBookmarkedPosts((prev) =>
      prev.includes(postId)
        ? prev.filter((id) => id !== postId)
        : [...prev, postId]
    );
  };

  const handleComment = (postId, comment) => {
    console.log(`Comment on post ${postId}:`, comment);
  };

  const handleShare = (postId) => {
    console.log(`Shared post ${postId}`);
  };

  const handleAddPost = (newPost) => {
    setPosts((prev) => [newPost, ...prev]);
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50 text-gray-900">
      {/* Header */}
      <Header onNewPost={() => setShowNewPostModal(true)} />

      {/* Main Content */}
      <main className="container mx-auto px-4 py-6 grid grid-cols-1 lg:grid-cols-12 gap-6 relative z-10">
        {/* Left Sidebar */}
        <aside className="hidden lg:block lg:col-span-3 space-y-6">
          <LeftSidebar
            categories={CATEGORIES}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />
        </aside>

        {/* Feed */}
        <section className="col-span-1 lg:col-span-6 space-y-6">
          <Feed
            posts={posts}
            selectedCategory={selectedCategory}
            currentUser={{ id: 1, name: "Current User" }}
            onToggleLike={handleLike}
          />

          {/* <Outlet /> */}

          {/* No posts fallback */}
          {posts.length === 0 && (
            <div className="text-center text-gray-500">No posts available.</div>
          )}
        </section>

        {/* Right Sidebar */}
        <aside className="hidden lg:block lg:col-span-3 space-y-6">
          <RightSidebar />
        </aside>
      </main>

      {/* New Post Modal */}
      <NewPostModal
        isOpen={showNewPostModal}
        onClose={() => setShowNewPostModal(false)}
        onSubmit={handleAddPost}
      />

      {/* Floating Action Button (mobile only) */}
      <button
        onClick={() => setShowNewPostModal(true)}
        className="fixed bottom-6 right-6 bg-gradient-to-r from-blue-600 via-purple-600 to-green-600 text-white p-4 rounded-full shadow-lg lg:hidden hover:scale-110 transition-all"
      >
        <Plus size={28} />
      </button>
    </div>
  );
};

export default Home;




// import React, { useState, useEffect } from "react";
// import AnimatedBackground from "../../Components/Background/AnimatedBackground.jsx";
// import Header from "../../Components/Header/Header.jsx";
// import CategoryCard from "../../Components/CategoryCard/CategoryCard.jsx";
// import PostCard from "../../Components/PostCard/PostCard.jsx";
// import Sidebar from "../../Components/Sidebar/Sidebar.jsx";
// import NewPostModal from "../../Components/NewPostModal/NewPostModal.jsx";
// import Feed from "../../Components/Feed/Feed.jsx";
// import LeftSidebar from "../../Components/Sidebar/LeftSidebar.jsx";
// import RightSidebar from "../../Components/Sidebar/RightSidebar.jsx";

// import {
//   Plus,
//   AlertTriangle,
//   Clock,
//   CheckCircle,
//   User,
//   Trophy,
// } from "lucide-react";

// const Home = () => {
//   const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
//   const [selectedCategory, setSelectedCategory] = useState(null);
//   const [posts, setPosts] = useState([]);
//   const [likedPosts, setLikedPosts] = useState([]);
//   const [bookmarkedPosts, setBookmarkedPosts] = useState([]);
//   const [showNewPostModal, setShowNewPostModal] = useState(false);

//   /* -------------------- Effects -------------------- */
//   useEffect(() => {
//     const handleMouseMove = (e) => {
//       setMousePosition({
//         x: (e.clientX / window.innerWidth - 0.5) * 2,
//         y: (e.clientY / window.innerHeight - 0.5) * 2,
//       });
//     };
//     window.addEventListener("mousemove", handleMouseMove);
//     return () => window.removeEventListener("mousemove", handleMouseMove);
//   }, []);

//   /* -------------------- Handlers -------------------- */
//   const handleLike = (postId) => {
//     setLikedPosts((prev) =>
//       prev.includes(postId)
//         ? prev.filter((id) => id !== postId)
//         : [...prev, postId]
//     );
//   };

//   const handleBookmark = (postId) => {
//     setBookmarkedPosts((prev) =>
//       prev.includes(postId)
//         ? prev.filter((id) => id !== postId)
//         : [...prev, postId]
//     );
//   };

//   const handleComment = (postId, comment) => {
//     console.log(`Comment on post ${postId}:`, comment);
//   };

//   const handleShare = (postId) => {
//     console.log(`Shared post ${postId}`);
//   };

//   return (
//     <div className="relative min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50 text-gray-900">
//       {/* Background */}
//       <AnimatedBackground mousePosition={mousePosition} />

//       {/* Header */}
//       <Header
//         onNewPost={() => setShowNewPostModal(true)}
//         mousePosition={mousePosition}
//       />

//       {/* Main Content */}
//       <main className="container mx-auto px-4 py-6 grid grid-cols-1 lg:grid-cols-12 gap-6 relative z-10">
//         {/* Left Sidebar */}
//         <div className="hidden lg:block lg:col-span-3 space-y-6">
//             {/* Left Sidebar */}
// <LeftSidebar
//   categories={categories}
//   selectedCategory={selectedCategory}
//   setSelectedCategory={setSelectedCategory}
// />

// {/* Right Sidebar */}
// <RightSidebar />

//           <Sidebar title="Categories">
//             {/* Example categories */}
//             <div className="space-y-3">
//               <CategoryCard
//                 category={{
//                   id: 1,
//                   name: "Infrastructure",
//                   icon: AlertTriangle,
//                   color: "#ff0000, #ff7f7f",
//                   bgColor: "bg-red-100",
//                   textColor: "text-red-600",
//                 }}
//                 isSelected={selectedCategory === 1}
//                 onClick={setSelectedCategory}
//                 mousePosition={mousePosition}
//               />
//               <CategoryCard
//                 category={{
//                   id: 2,
//                   name: "Utilities",
//                   icon: Clock,
//                   color: "#ffa500, #ffd580",
//                   bgColor: "bg-yellow-100",
//                   textColor: "text-yellow-600",
//                 }}
//                 isSelected={selectedCategory === 2}
//                 onClick={setSelectedCategory}
//                 mousePosition={mousePosition}
//               />
//               <CategoryCard
//                 category={{
//                   id: 3,
//                   name: "Environment",
//                   icon: CheckCircle,
//                   color: "#00ff00, #a6f4a6",
//                   bgColor: "bg-green-100",
//                   textColor: "text-green-600",
//                 }}
//                 isSelected={selectedCategory === 3}
//                 onClick={setSelectedCategory}
//                 mousePosition={mousePosition}
//               />
//             </div>
//           </Sidebar>
//         </div>

//         {/* Feed */}
//         <Feed
//           posts={posts}
//           selectedCategory={selectedCategory}
//           currentUser={currentUser}
//           onToggleLike={toggleLike}
//         />

//         {/* Feed */}
//         <div className="col-span-1 lg:col-span-6 space-y-6">
//           {posts.length > 0 ? (
//             posts.map((post) => (
//               <PostCard
//                 key={post.id}
//                 post={post}
//                 onLike={handleLike}
//                 onComment={handleComment}
//                 onShare={handleShare}
//                 onBookmark={handleBookmark}
//                 isLiked={likedPosts.includes(post.id)}
//                 isBookmarked={bookmarkedPosts.includes(post.id)}
//               />
//             ))
//           ) : (
//             <div className="text-center text-gray-500">No posts available.</div>
//           )}
//         </div>

//         {/* Right Sidebar */}
//         <div className="hidden lg:block lg:col-span-3 space-y-6">
//           <Sidebar title="Leaderboard" icon={Trophy}>
//             <ul className="space-y-3">
//               <li className="flex items-center gap-3">
//                 <User className="text-blue-500" /> <span>Amit (245 pts)</span>
//               </li>
//               <li className="flex items-center gap-3">
//                 <User className="text-green-500" /> <span>Priya (198 pts)</span>
//               </li>
//               <li className="flex items-center gap-3">
//                 <User className="text-purple-500" />{" "}
//                 <span>Rahul (156 pts)</span>
//               </li>
//             </ul>
//           </Sidebar>
//         </div>
//       </main>

//       {/* New Post Modal */}
//       <NewPostModal
//         isOpen={showNewPostModal}
//         onClose={() => setShowNewPostModal(false)}
//         onSubmit={(newPost) => setPosts([newPost, ...posts])}
//       />

//       {/* Floating Action Button (mobile only) */}
//       <button
//         onClick={() => setShowNewPostModal(true)}
//         className="fixed bottom-6 right-6 bg-gradient-to-r from-blue-600 via-purple-600 to-green-600 text-white p-4 rounded-full shadow-lg lg:hidden hover:scale-110 transition-all"
//       >
//         <Plus size={28} />
//       </button>
//     </div>
//   );
// };

// export default Home;
