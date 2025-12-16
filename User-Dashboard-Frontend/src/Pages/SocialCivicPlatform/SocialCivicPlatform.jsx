// SocialCivicPlatform.jsx

import React, { useState, useEffect } from 'react';
  import { 
    Plus, MapPin, Eye, ThumbsUp, Clock, CheckCircle, AlertTriangle, 
    Zap, Users, TrendingUp, Award, Bell, Search, Filter, Camera,
    MessageSquare, Share2, Home, User, Settings, LogOut, Menu,
    Lightbulb, Droplets, Trash2, Construction, Wifi, TreePine,
    ArrowRight, Star, Target, Activity, BarChart3, Globe, Send,
    Heart, Bookmark, MoreHorizontal, Play, Image as ImageIcon,
    Video, Mic, Hash, AtSign, Shield, BadgeCheck, ThumbsDown,
    Flag, Edit3, Trash, Reply, ChevronDown, ChevronUp, X, Trophy,
    Sparkles, Flame, Waves
  } from 'lucide-react';
import NewPostForm from '../../Components/AddPost/NewPostForm';

  // Enhanced Background Component
  const AnimatedBackground = ({ mousePosition }) => (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {/* Dynamic gradient orbs */}
      <div 
        className="absolute top-1/4 left-1/4 w-96 h-96 opacity-30 rounded-full blur-3xl animate-pulse"
        style={{ 
          background: 'radial-gradient(circle, rgba(59, 130, 246, 0.4) 0%, rgba(147, 51, 234, 0.2) 70%, transparent 100%)',
          transform: `translate(${mousePosition.x * 15}px, ${mousePosition.y * 15}px)`,
          animation: 'float 6s ease-in-out infinite'
        }}
      />
      <div 
        className="absolute top-3/4 right-1/4 w-96 h-96 opacity-30 rounded-full blur-3xl animate-pulse"
        style={{ 
          background: 'radial-gradient(circle, rgba(34, 197, 94, 0.4) 0%, rgba(59, 130, 246, 0.2) 70%, transparent 100%)',
          transform: `translate(${-mousePosition.x * 12}px, ${-mousePosition.y * 12}px)`,
          animation: 'float 8s ease-in-out infinite reverse'
        }}
      />
      <div 
        className="absolute top-1/2 left-1/2 w-64 h-64 opacity-20 rounded-full blur-2xl"
        style={{ 
          background: 'conic-gradient(from 0deg, rgba(236, 72, 153, 0.3), rgba(59, 130, 246, 0.3), rgba(34, 197, 94, 0.3), rgba(236, 72, 153, 0.3))',
          transform: `translate(-50%, -50%) rotate(${Date.now() * 0.01 % 360}deg)`,
          animation: 'spin 20s linear infinite'
        }}
      />
      
      {/* Floating particles */}
      {[...Array(20)].map((_, i) => (
        <div
          key={i}
          className="absolute w-2 h-2 bg-blue-400/20 rounded-full animate-bounce"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${3 + Math.random() * 4}s`
          }}
        />
      ))}
    </div>
  );

  // Enhanced Header Component
  const Header = ({ onNewPost, mousePosition }) => (
    <header className="sticky top-0 z-50 backdrop-blur-2xl border-b border-white/20 shadow-lg">
      <div 
        className="absolute inset-0 bg-gradient-to-r from-white/80 via-blue-50/60 to-green-50/60"
        style={{
          transform: `translateX(${mousePosition.x * 2}px)`
        }}
      />
      <div className="relative container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo with enhanced animation */}
          <div className="flex items-center space-x-4">
            <div className="relative group cursor-pointer">
              <div className="absolute -inset-2 bg-gradient-to-r from-blue-600 to-green-600 rounded-xl opacity-20 group-hover:opacity-30 transition-opacity blur-sm"></div>
              <div className="relative flex items-center">
                <span className="text-3xl font-black bg-gradient-to-r from-blue-700 via-purple-600 to-green-700 bg-clip-text text-transparent animate-pulse">
                  सह
                </span>
                <span className="text-3xl font-black bg-gradient-to-r from-green-700 via-blue-600 to-purple-700 bg-clip-text text-transparent animate-pulse">
                  govern
                </span>
                <div className="absolute -top-2 -right-2 w-3 h-3 bg-gradient-to-r from-pink-500 to-red-500 rounded-full animate-ping" />
                <div className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full" />
              </div>
            </div>
          </div>

          {/* Enhanced Search Bar */}
          <div className="flex-1 max-w-2xl mx-8">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-green-500 rounded-full opacity-20 group-hover:opacity-30 transition-opacity blur-sm"></div>
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 group-hover:text-blue-600 transition-colors" size={20} />
                <input
                  type="text"
                  placeholder="Search issues, solutions, heroes..."
                  className="w-full pl-12 pr-6 py-4 bg-white/80 backdrop-blur-xl rounded-full border-0 shadow-lg focus:shadow-2xl focus:ring-4 focus:ring-blue-500/30 transition-all duration-500 placeholder-gray-500"
                />
                <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                  <kbd className="px-2 py-1 bg-gray-100 rounded text-xs font-mono">⌘K</kbd>
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced Action Buttons */}
          <div className="flex items-center space-x-4 ">
            <NewPostForm />
            {/* <button 
              onClick={onNewPost}
              className="group relative overflow-hidden bg-gradient-to-r from-blue-600 via-purple-600 to-green-600 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative flex items-center gap-2">
                <Plus size={20} className="animate-spin group-hover:animate-none" />
                <span className="hidden md:inline">Report Issue</span>
              </div>
              <div className="absolute inset-0 bg-white/20 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300 opacity-30"></div>
            </button>
            
            <div className="relative group">
              <button className="relative p-3 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-full transition-all duration-300 hover:scale-110">
                <Bell size={22} />
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-r from-pink-500 to-red-500 rounded-full animate-bounce">
                  <span className="absolute inset-0 flex items-center justify-center text-white text-xs font-bold">3</span>
                </div>
              </button>
            </div>

            <div className="relative group">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 via-purple-500 to-green-500 rounded-full flex items-center justify-center cursor-pointer transition-all duration-300 hover:scale-110 hover:shadow-lg">
                <User className="text-white" size={20} />
                <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white animate-pulse"></div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </header>
  );

  // Enhanced Category Card Component
  const CategoryCard = ({ category, isSelected, onClick, mousePosition }) => (
    <button
      onClick={() => onClick(category.id)}
      className={`group relative w-full overflow-hidden transition-all duration-500 hover:scale-105 ${
        isSelected 
          ? 'bg-gradient-to-br from-white to-gray-50 shadow-2xl ring-2 ring-blue-500 ring-opacity-50' 
          : 'bg-white/60 hover:bg-white/80 shadow-lg hover:shadow-2xl'
      } backdrop-blur-xl rounded-2xl p-4`}
    >
      <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-10 transition-opacity duration-300" 
          style={{ background: `linear-gradient(135deg, ${category.color})` }} />
      
      <div className="relative flex items-center gap-4">
        <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 ${
          isSelected ? category.bgColor : 'bg-gray-100 group-hover:bg-gray-200'
        }`}>
          <category.icon 
            size={24} 
            className={`transition-all duration-300 ${
              isSelected ? category.textColor : 'text-gray-600 group-hover:text-gray-800'
            } group-hover:scale-110`}
          />
        </div>
        <div className="flex-1 text-left">
          <span className={`font-bold transition-colors ${
            isSelected ? category.textColor : 'text-gray-800'
          }`}>
            {category.name}
          </span>
          <div className="text-xs text-gray-500 mt-1">
            {Math.floor(Math.random() * 50 + 10)} active issues
          </div>
        </div>
        <div className={`w-2 h-8 rounded-full transition-all duration-300 ${
          isSelected ? 'bg-blue-500' : 'bg-transparent group-hover:bg-blue-200'
        }`} />
      </div>
    </button>
  );

  // Enhanced Post Card Component
  const PostCard = ({ post, onLike, onComment, onShare, onBookmark, isLiked, isBookmarked }) => {
    const [showComments, setShowComments] = useState(false);
    const [newComment, setNewComment] = useState('');

    return (
      <div className="group bg-white/70 backdrop-blur-2xl rounded-3xl border border-white/30 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] overflow-hidden">
        {/* Gradient Border Effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-green-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl blur-sm"></div>
        
        <div className="relative">
          {/* Post Header */}
          <div className="p-6 pb-4">
            <div className="flex items-start justify-between mb-6">
              <div className="flex items-center gap-4">
                <div className="relative">
                  <div className="text-3xl relative">
                    {post.user.avatar}
                    {post.user.verified && (
                      <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-gradient-to-br from-blue-500 to-green-500 rounded-full flex items-center justify-center animate-pulse">
                        <BadgeCheck className="text-white" size={12} />
                      </div>
                    )}
                  </div>
                </div>
                
                <div className="space-y-1">
                  <div className="flex items-center gap-3">
                    <h4 className="font-bold text-gray-900 text-lg">{post.user.name}</h4>
                    {post.user.type === 'government' && (
                      <div className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
                        <Shield size={12} />
                        Official
                      </div>
                    )}
                    {post.user.type === 'expert' && (
                      <div className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
                        <Star size={12} />
                        Expert
                      </div>
                    )}
                  </div>
                  
                  <div className="flex items-center gap-3 text-sm text-gray-500">
                    <span className="font-medium">{post.user.username}</span>
                    <span>•</span>
                    <span>{post.timestamp}</span>
                    {post.location && (
                      <>
                        <span>•</span>
                        <div className="flex items-center gap-1">
                          <MapPin size={12} />
                          <span>{post.location}</span>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="bg-gray-100 px-3 py-1 rounded-full flex items-center gap-2">
                  <Eye size={12} className="text-gray-500" />
                  <span className="text-xs font-medium text-gray-600">{post.views}</span>
                </div>
                <button className="text-gray-400 hover:text-gray-600 p-2 hover:bg-gray-100 rounded-full transition-all">
                  <MoreHorizontal size={20} />
                </button>
              </div>
            </div>

            {/* Post Content */}
            <div className="space-y-4">
              <p className="text-gray-800 leading-relaxed text-lg">{post.content}</p>
              
              {/* Enhanced Images Grid */}
              {post.images && post.images.length > 0 && (
                <div className={`grid gap-3 rounded-2xl overflow-hidden ${
                  post.images.length === 1 ? 'grid-cols-1' : 
                  post.images.length === 2 ? 'grid-cols-2' : 
                  'grid-cols-2'
                }`}>
                  {post.images.slice(0, 4).map((image, index) => (
                    <div 
                      key={index} 
                      className="relative aspect-square bg-gradient-to-br from-gray-200 to-gray-300 rounded-xl overflow-hidden cursor-pointer group/image"
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-400/30 via-purple-400/30 to-green-400/30 flex items-center justify-center group-hover/image:bg-black/20 transition-all duration-300">
                        <ImageIcon className="text-white drop-shadow-lg group-hover/image:scale-110 transition-transform duration-300" size={48} />
                      </div>
                      
                      {image.caption && (
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                          <span className="text-white text-sm font-medium drop-shadow">{image.caption}</span>
                        </div>
                      )}
                      
                      <div className="absolute top-3 right-3 opacity-0 group-hover/image:opacity-100 transition-opacity duration-300">
                        <div className="bg-black/50 backdrop-blur-sm rounded-full p-2">
                          <Eye className="text-white" size={16} />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Enhanced Post Metadata */}
              <div className="flex flex-wrap items-center gap-3">
                <div className={`px-4 py-2 rounded-full text-sm font-bold border-2 ${
                  post.status === 'reported' ? 'bg-yellow-50 text-yellow-800 border-yellow-200' :
                  post.status === 'in-progress' ? 'bg-blue-50 text-blue-800 border-blue-200' :
                  post.status === 'resolved' ? 'bg-green-50 text-green-800 border-green-200' :
                  'bg-gray-50 text-gray-800 border-gray-200'
                }`}>
                  <div className="flex items-center gap-2">
                    {post.status === 'in-progress' && <Zap size={14} className="animate-pulse" />}
                    {post.status === 'resolved' && <CheckCircle size={14} />}
                    {post.status.replace('-', ' ').toUpperCase()}
                  </div>
                </div>
                
                <div className="flex items-center gap-2 px-3 py-2 bg-gray-100 rounded-full">
                  {post.priority === 'high' && <AlertTriangle className="text-red-600" size={16} />}
                  {post.priority === 'medium' && <Clock className="text-orange-600" size={16} />}
                  {post.priority === 'low' && <CheckCircle className="text-green-600" size={16} />}
                  <span className="text-sm font-semibold text-gray-700">
                    {post.priority.toUpperCase()} PRIORITY
                  </span>
                </div>

                {post.ticketId && (
                  <div className="px-3 py-2 bg-blue-100 text-blue-800 rounded-full">
                    <span className="text-sm font-mono font-bold">{post.ticketId}</span>
                  </div>
                )}
              </div>

              {/* Tags */}
              {post.tags && (
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag, index) => (
                    <button key={index} className="text-blue-600 hover:text-blue-800 hover:bg-blue-50 px-3 py-1 rounded-full text-sm font-semibold transition-all">
                      {tag}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Enhanced Post Actions */}
          <div className="px-6 py-4 border-t border-gray-200/50 bg-gradient-to-r from-gray-50/50 to-white/50 backdrop-blur-sm">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-8">
                <button
                  onClick={() => onLike(post.id)}
                  className={`group flex items-center gap-3 transition-all duration-300 hover:scale-110 ${
                    isLiked ? 'text-red-600' : 'text-gray-600 hover:text-red-600'
                  }`}
                >
                  <div className="relative">
                    <Heart className={`transition-all duration-300 ${isLiked ? 'fill-current scale-110' : 'group-hover:scale-110'}`} size={24} />
                    {isLiked && (
                      <div className="absolute inset-0 animate-ping">
                        <Heart className="fill-current text-red-400" size={24} />
                      </div>
                    )}
                  </div>
                  <span className="font-bold text-lg">{post.likes}</span>
                </button>

                <button
                  onClick={() => setShowComments(!showComments)}
                  className="group flex items-center gap-3 text-gray-600 hover:text-blue-600 transition-all duration-300 hover:scale-110"
                >
                  <MessageSquare className="group-hover:scale-110 transition-transform duration-300" size={24} />
                  <span className="font-bold text-lg">{post.comments}</span>
                </button>

                <button
                  onClick={() => onShare(post.id)}
                  className="group flex items-center gap-3 text-gray-600 hover:text-green-600 transition-all duration-300 hover:scale-110"
                >
                  <Share2 className="group-hover:scale-110 transition-transform duration-300" size={24} />
                  <span className="font-bold text-lg">{post.shares}</span>
                </button>
              </div>

              <div className="flex items-center gap-4">
                <button
                  onClick={() => onBookmark(post.id)}
                  className={`transition-all duration-300 hover:scale-110 ${
                    isBookmarked ? 'text-blue-600' : 'text-gray-600 hover:text-blue-600'
                  }`}
                >
                  <Bookmark className={`${isBookmarked ? 'fill-current' : ''} hover:scale-110 transition-transform duration-300`} size={24} />
                </button>
                
                <button className="text-gray-600 hover:text-red-600 transition-all duration-300 hover:scale-110">
                  <Flag className="hover:scale-110 transition-transform duration-300" size={24} />
                </button>
              </div>
            </div>

            {/* Comments Section */}
            {showComments && (
              <div className="mt-6 pt-6 border-t border-gray-200/50 space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <User className="text-white" size={16} />
                  </div>
                  <div className="flex-1 flex gap-3">
                    <input
                      type="text"
                      value={newComment}
                      onChange={(e) => setNewComment(e.target.value)}
                      placeholder="Share your thoughts..."
                      className="flex-1 px-4 py-3 bg-gray-100 rounded-2xl border-0 focus:ring-2 focus:ring-blue-500/50 focus:bg-white transition-all duration-300"
                    />
                    <button
                      onClick={() => {
                        onComment(post.id, newComment);
                        setNewComment('');
                      }}
                      className="p-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl hover:shadow-lg transition-all duration-300 disabled:opacity-50 hover:scale-105"
                      disabled={!newComment.trim()}
                    >
                      <Send size={18} />
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  };

  // Enhanced Sidebar Component
  const Sidebar = ({ title, children, icon: Icon }) => (
    <div className="group bg-white/60 backdrop-blur-2xl rounded-3xl border border-white/30 shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-green-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      <div className="relative p-6">
        <h3 className="font-bold text-gray-900 mb-6 flex items-center gap-3 text-lg">
          {Icon && <Icon size={24} className="text-blue-600" />}
          {title}
        </h3>
        {children}
      </div>
    </div>
  );

  // Main Component
  const SocialCivicPlatform = () => {
    const [activeTab, setActiveTab] = useState('feed');
    const [showNewPost, setShowNewPost] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState('');
    const [likedPosts, setLikedPosts] = useState(new Set());
    const [bookmarkedPosts, setBookmarkedPosts] = useState(new Set());
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    const categories = [
      { id: 'lighting', name: 'Street Lights', icon: Lightbulb, color: 'from-yellow-500 to-orange-500', bgColor: 'bg-yellow-50', textColor: 'text-yellow-700' },
      { id: 'water', name: 'Water Supply', icon: Droplets, color: 'from-blue-500 to-cyan-500', bgColor: 'bg-blue-50', textColor: 'text-blue-700' },
      { id: 'waste', name: 'Waste Management', icon: Trash2, color: 'from-green-500 to-emerald-500', bgColor: 'bg-green-50', textColor: 'text-green-700' },
      { id: 'roads', name: 'Road Repairs', icon: Construction, color: 'from-orange-500 to-red-500', bgColor: 'bg-orange-50', textColor: 'text-orange-700' },
      { id: 'internet', name: 'Internet/WiFi', icon: Wifi, color: 'from-purple-500 to-indigo-500', bgColor: 'bg-purple-50', textColor: 'text-purple-700' },
      { id: 'environment', name: 'Environment', icon: TreePine, color: 'from-green-600 to-teal-600', bgColor: 'bg-teal-50', textColor: 'text-teal-700' }
    ];

    const [posts] = useState([
      {
        id: 1,
        user: {
          name: "Rajesh Kumar",
          username: "@rajesh_mp",
          avatar: "👨‍💼",
          verified: false,
          type: "citizen",
          location: "MP Nagar, Bhopal",
          followers: 234
        },
        timestamp: "2 hours ago",
        content: "Street light has been broken for over a week now. This area becomes completely dark after sunset, making it unsafe for pedestrians and commuters. @gov_bhopal please take immediate action! #StreetLight #PublicSafety #Bhopal",
        images: [
          { id: 1, url: "streetlight1.jpg", caption: "Broken street light pole" },
          { id: 2, url: "streetlight2.jpg", caption: "Dark street at night" }
        ],
        category: "lighting",
        priority: "high",
        status: "reported",
        location: "MP Nagar Zone 2, Bhopal",
        likes: 34,
        comments: 12,
        shares: 8,
        bookmarks: 5,
        views: 156,
        tags: ["#StreetLight", "#PublicSafety", "#Bhopal"],
        mentions: ["@gov_bhopal"]
      },
      {
        id: 2,
        user: {
          name: "Bhopal Municipal Corp",
          username: "@gov_bhopal",
          avatar: "🏛️",
          verified: true,
          type: "government",
          department: "Municipal Corporation",
          followers: 15678
        },
        timestamp: "1 hour ago",
        content: "Thank you @rajesh_mp for reporting this issue. Our technical team has been dispatched to MP Nagar Zone 2. Expected resolution time: 24-48 hours. We'll keep you updated on the progress. Ticket ID: #BPL2024001234",
        images: [
          { id: 3, url: "team_dispatch.jpg", caption: "Technical team heading to location" }
        ],
        category: "lighting",
        priority: "high",
        status: "in-progress",
        location: "MP Nagar Zone 2, Bhopal",
        likes: 89,
        comments: 23,
        shares: 15,
        bookmarks: 12,
        views: 445,
        isResponse: true,
        parentPost: 1,
        ticketId: "#BPL2024001234",
        tags: ["#StatusUpdate", "#InProgress"],
        mentions: ["@rajesh_mp"]
      }
    ]);

    // Mouse tracking effect
    useEffect(() => {
      const handleMouseMove = (e) => {
        setMousePosition({
          x: (e.clientX / window.innerWidth - 0.5) * 2,
          y: (e.clientY / window.innerHeight - 0.5) * 2
        });
      };

      window.addEventListener('mousemove', handleMouseMove);
      return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    const handleLike = (postId) => {
      setLikedPosts(prev => {
        const newSet = new Set(prev);
        if (newSet.has(postId)) {
          newSet.delete(postId);
        } else {
          newSet.add(postId);
        }
        return newSet;
      });
    };

    const handleBookmark = (postId) => {
      setBookmarkedPosts(prev => {
        const newSet = new Set(prev);
        if (newSet.has(postId)) {
          newSet.delete(postId);
        } else {
          newSet.add(postId);
        }
        return newSet;
      });
    };

    const handleComment = (postId, comment) => {
      console.log('Comment added:', comment);
    };

    const handleShare = (postId) => {
      if (navigator.share) {
        navigator.share({
          title: 'Civic Issue Report',
          text: 'Check out this civic issue report',
          url: `${window.location.origin}/post/${postId}`
        });
      } else {
        navigator.clipboard.writeText(`${window.location.origin}/post/${postId}`);
        alert('Link copied to clipboard!');
      }
    };

    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-green-50 relative overflow-hidden">
        {/* CSS Keyframes */}
        <style jsx>{`
          @keyframes float {
            0%, 100% { transform: translateY(0px) rotate(0deg); }
            50% { transform: translateY(-20px) rotate(5deg); }
          }
          
          @keyframes glow {
            0%, 100% { box-shadow: 0 0 20px rgba(59, 130, 246, 0.5); }
            50% { box-shadow: 0 0 40px rgba(34, 197, 94, 0.5); }
          }
          
          @keyframes shimmer {
            0% { background-position: -200% 0; }
            100% { background-position: 200% 0; }
          }
          
          .shimmer {
            background: linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent);
            background-size: 200% 100%;
            animation: shimmer 2s infinite;
          }
        `}</style>

        {/* Enhanced Animated Background */}
        <AnimatedBackground mousePosition={mousePosition} />

        {/* Enhanced Header */}
        <Header onNewPost={() => setShowNewPost(true)} mousePosition={mousePosition} />

        {/* New Post Modal */}
        {showNewPost && (
          <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
            <div className="bg-white/90 backdrop-blur-2xl rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-white/30">
              <div className="p-8">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-700 to-green-700 bg-clip-text text-transparent">
                    Report New Issue
                  </h3>
                  <button
                    onClick={() => setShowNewPost(false)}
                    className="p-3 hover:bg-gray-100 rounded-full transition-all duration-300 hover:scale-110"
                  >
                    <X size={24} />
                  </button>
                </div>

                <div className="space-y-6">
                  <textarea
                    placeholder="Describe the civic issue you want to report..."
                    className="w-full p-6 border-2 border-gray-200 rounded-2xl focus:ring-4 focus:ring-blue-500/30 focus:border-blue-500 transition-all resize-none text-lg"
                    rows="5"
                  />

                  <div className="grid grid-cols-2 gap-4">
                    <select className="p-4 border-2 border-gray-200 rounded-2xl focus:ring-4 focus:ring-blue-500/30 focus:border-blue-500 text-lg">
                      <option value="">Select Category</option>
                      {categories.map(cat => (
                        <option key={cat.id} value={cat.id}>{cat.name}</option>
                      ))}
                    </select>

                    <select className="p-4 border-2 border-gray-200 rounded-2xl focus:ring-4 focus:ring-blue-500/30 focus:border-blue-500 text-lg">
                      <option value="low">Low Priority</option>
                      <option value="medium">Medium Priority</option>
                      <option value="high">High Priority</option>
                    </select>
                  </div>

                  <input
                    type="text"
                    placeholder="Location (e.g., MP Nagar, Bhopal)"
                    className="w-full p-4 border-2 border-gray-200 rounded-2xl focus:ring-4 focus:ring-blue-500/30 focus:border-blue-500 text-lg"
                  />

                  <div className="flex items-center gap-4">
                    <button className="flex items-center gap-3 text-blue-600 hover:bg-blue-50 px-6 py-3 rounded-2xl transition-all duration-300 hover:scale-105 font-semibold">
                      <Camera size={20} />
                      Add Photos
                    </button>
                    <button className="flex items-center gap-3 text-green-600 hover:bg-green-50 px-6 py-3 rounded-2xl transition-all duration-300 hover:scale-105 font-semibold">
                      <MapPin size={20} />
                      Add Location
                    </button>
                  </div>

                  <div className="flex gap-4 pt-6">
                    <button
                      onClick={() => setShowNewPost(false)}
                      className="flex-1 px-8 py-4 border-2 border-gray-300 text-gray-700 rounded-2xl hover:bg-gray-50 transition-all duration-300 hover:scale-105 font-semibold text-lg"
                    >
                      Cancel
                    </button>
                    <button className="flex-1 px-8 py-4 bg-gradient-to-r from-blue-600 via-purple-600 to-green-600 text-white rounded-2xl hover:shadow-2xl transition-all duration-300 hover:scale-105 font-semibold text-lg">
                      Post Issue
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Main Container */}
        <div className="container mx-auto px-4 py-8 max-w-7xl">
          <div className="grid lg:grid-cols-4 gap-8">
            
            {/* Left Sidebar */}
            <div className="lg:col-span-1 space-y-6">
              
              {/* Categories Filter */}
              <Sidebar title="Categories" icon={Filter}>
                <div className="space-y-3">
                  {categories.map((category) => (
                    <CategoryCard
                      key={category.id}
                      category={category}
                      isSelected={selectedCategory === category.id}
                      onClick={setSelectedCategory}
                      mousePosition={mousePosition}
                    />
                  ))}
                </div>
              </Sidebar>

              {/* Trending Topics */}
              {/* <Sidebar title="Trending Now" icon={TrendingUp}>
                <div className="space-y-4">
                  {[
                    { tag: '#StreetLight', count: 142, color: 'text-yellow-600' },
                    { tag: '#WaterCrisis', count: 89, color: 'text-blue-600' },
                    { tag: '#RoadRepair', count: 67, color: 'text-orange-600' }
                  ].map((trend, index) => (
                    <div key={index} className="group cursor-pointer hover:bg-gradient-to-r hover:from-gray-50 hover:to-white p-3 rounded-xl transition-all duration-300 hover:scale-105">
                      <div className="flex items-center gap-3 text-lg">
                        <Hash size={16} className={trend.color} />
                        <span className="font-bold">{trend.tag}</span>
                      </div>
                      <div className="text-sm text-gray-500 ml-7">{trend.count} posts • Trending</div>
                    </div>
                  ))}
                </div>
              </Sidebar> */}

              {/* Your Impact */}
              <Sidebar title="Your Impact" icon={Target}>
                <div className="space-y-6">
                  {[
                    { label: 'Issues Reported', value: 12, color: 'text-blue-700', icon: AlertTriangle },
                    { label: 'Issues Resolved', value: 8, color: 'text-green-700', icon: CheckCircle },
                    { label: 'Community Score', value: 850, color: 'text-purple-700', icon: Star }
                  ].map((stat, index) => (
                    <div key={index} className="flex justify-between items-center p-4 bg-gradient-to-r from-gray-50 to-white rounded-xl hover:shadow-lg transition-all duration-300">
                      <div className="flex items-center gap-3">
                        <stat.icon size={20} className={stat.color} />
                        <span className="font-medium text-gray-700">{stat.label}</span>
                      </div>
                      <span className={`font-bold text-xl ${stat.color}`}>{stat.value}</span>
                    </div>
                  ))}
                </div>
              </Sidebar>

              {/* Active Users */}
              <Sidebar title="Active Heroes" icon={Users}>
                <div className="space-y-4">
                  {[
                    { name: "Bhopal Municipal", avatar: "🏛️", status: "Responding to issues", online: true },
                    { name: "Dr. Priya Sharma", avatar: "👩‍⚕️", status: "Sharing solutions", online: true },
                    { name: "Local Electrician", avatar: "⚡", status: "Offering help", online: true }
                  ].map((user, index) => (
                    <div key={index} className="flex items-center gap-4 p-3 hover:bg-gradient-to-r hover:from-gray-50 hover:to-white rounded-xl transition-all duration-300 hover:scale-105 cursor-pointer">
                      <div className="relative text-2xl">
                        <span>{user.avatar}</span>
                        {user.online && (
                          <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white animate-pulse"></div>
                        )}
                      </div>
                      <div className="flex-1">
                        <div className="font-semibold text-gray-900">{user.name}</div>
                        <div className="text-sm text-gray-500">{user.status}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </Sidebar>

            </div>

            {/* Main Feed */}
            <div className="lg:col-span-2 space-y-8">
              
              {/* Create Post Prompt */}
              <div className="group bg-white/60 backdrop-blur-2xl rounded-3xl border border-white/30 shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-green-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative p-8">
                  <div className="flex items-center gap-6 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 via-purple-500 to-green-500 rounded-full flex items-center justify-center shadow-lg">
                      <User className="text-white" size={24} />
                    </div>
                    <button
                      onClick={() => setShowNewPost(true)}
                      className="flex-1 text-left p-6 bg-gradient-to-r from-gray-100 to-gray-50 hover:from-gray-200 hover:to-gray-100 rounded-3xl transition-all duration-300 text-gray-600 text-lg font-medium hover:scale-[1.02] hover:shadow-lg"
                    >
                      What civic issue would you like to report today?
                    </button>
                  </div>
                  
                  <div className="flex items-center gap-6">
                    <button className="flex items-center gap-3 text-blue-600 hover:bg-blue-50 px-6 py-3 rounded-2xl transition-all duration-300 hover:scale-105 font-semibold">
                      <Camera size={20} />
                      Photo
                    </button>
                    <button className="flex items-center gap-3 text-green-600 hover:bg-green-50 px-6 py-3 rounded-2xl transition-all duration-300 hover:scale-105 font-semibold">
                      <MapPin size={20} />
                      Location
                    </button>
                    <button className="flex items-center gap-3 text-purple-600 hover:bg-purple-50 px-6 py-3 rounded-2xl transition-all duration-300 hover:scale-105 font-semibold">
                      <Hash size={20} />
                      Category
                    </button>
                  </div>
                </div>
              </div>

              {/* Posts Feed */}
              <div className="space-y-8">
                {posts
                  .filter(post => !selectedCategory || post.category === selectedCategory)
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

              {/* Load More */}
              <div className="text-center py-12">
                <button className="group bg-white/60 backdrop-blur-2xl border-2 border-white/30 text-gray-700 px-12 py-4 rounded-3xl hover:bg-white/80 hover:shadow-2xl transition-all duration-500 hover:scale-105 font-bold text-lg">
                  <div className="flex items-center gap-3">
                    <Sparkles className="group-hover:animate-spin" size={20} />
                    Load More Amazing Posts
                  </div>
                </button>
              </div>
              
            </div>

            {/* Right Sidebar */}
            <div className="lg:col-span-1 space-y-6">
              
              {/* Suggested Connections */}
              <Sidebar title="Suggested Heroes" icon={Users}>
                <div className="space-y-5">
                  {[
                    { name: "Local Plumber", avatar: "🔧", desc: "Fixes water issues", verified: false },
                    { name: "Green Initiative", avatar: "🌱", desc: "Environmental solutions", verified: true },
                    { name: "Traffic Police", avatar: "👮‍♀️", desc: "Road safety updates", verified: true }
                  ].map((user, index) => (
                    <div key={index} className="flex items-center justify-between p-4 hover:bg-gradient-to-r hover:from-gray-50 hover:to-white rounded-xl transition-all duration-300 hover:scale-105">
                      <div className="flex items-center gap-4">
                        <div className="text-2xl relative">
                          <span>{user.avatar}</span>
                          {user.verified && (
                            <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-blue-500 rounded-full flex items-center justify-center">
                              <BadgeCheck className="text-white" size={10} />
                            </div>
                          )}
                        </div>
                        <div>
                          <div className="font-semibold text-gray-900">{user.name}</div>
                          <div className="text-sm text-gray-500">{user.desc}</div>
                        </div>
                      </div>
                      <button className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full hover:bg-blue-200 transition-all duration-300 hover:scale-105 font-semibold text-sm">
                        Follow
                      </button>
                    </div>
                  ))}
                </div>
              </Sidebar>

              {/* Recent Solutions */}
              <Sidebar title="Success Stories" icon={CheckCircle}>
                <div className="space-y-4">
                  {[
                    { title: "Pothole Fixed", location: "Shahpura Road", time: "2 days ago", type: "success", color: "green" },
                    { title: "Water Restored", location: "Arera Colony", time: "3 days ago", type: "resolved", color: "blue" },
                    { title: "WiFi Hotspot", location: "MP Nagar", time: "5 days ago", type: "new", color: "purple" }
                  ].map((solution, index) => (
                    <div key={index} className={`p-4 rounded-xl bg-${solution.color}-50 border-l-4 border-${solution.color}-500 hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer`}>
                      <div className={`font-semibold text-${solution.color}-800 text-lg`}>{solution.title}</div>
                      <div className={`text-${solution.color}-600 text-sm`}>{solution.location} • {solution.time}</div>
                      <div className="text-gray-600 text-xs mt-2">Community effort + Government response</div>
                    </div>
                  ))}
                </div>
              </Sidebar>

              {/* Quick Actions */}
              <Sidebar title="Quick Actions" icon={Zap}>
                <div className="space-y-4">
                  {[
                    { label: "Report Issue", icon: Plus, gradient: "from-blue-500 to-green-500", action: () => setShowNewPost(true) },
                    { label: "Upload Photo", icon: Camera, gradient: "from-orange-400 to-pink-500" },
                    { label: "Find Nearby", icon: MapPin, gradient: "from-purple-500 to-indigo-500" },
                    { label: "Rate Service", icon: Star, gradient: "from-yellow-400 to-orange-500" }
                  ].map((action, index) => (
                    <button
                      key={index}
                      onClick={action.action}
                      className={`w-full flex items-center gap-4 p-4 bg-gradient-to-r ${action.gradient} text-white rounded-2xl hover:shadow-2xl transition-all duration-300 hover:scale-105 font-semibold`}
                    >
                      <action.icon size={20} />
                      <span>{action.label}</span>
                    </button>
                  ))}
                </div>
              </Sidebar>

              {/* Emergency Contacts */}
              <Sidebar title="Emergency Contacts" icon={AlertTriangle}>
                <div className="space-y-3">
                  {[
                    { service: "Police", number: "100", emoji: "🚨", color: "red" },
                    { service: "Fire Dept", number: "101", emoji: "🚒", color: "orange" },
                    { service: "Ambulance", number: "108", emoji: "🚑", color: "red" },
                    { service: "BMC Helpline", number: "1916", emoji: "🏛️", color: "blue" }
                  ].map((contact, index) => (
                    <div key={index} className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-xl transition-all duration-300 hover:scale-105">
                      <div className="flex items-center gap-3">
                        <span className="text-xl">{contact.emoji}</span>
                        <span className="font-medium text-gray-700">{contact.service}</span>
                      </div>
                      <a 
                        href={`tel:${contact.number}`} 
                        className={`font-bold text-${contact.color}-600 hover:text-${contact.color}-800 transition-colors text-lg`}
                      >
                        {contact.number}
                      </a>
                    </div>
                  ))}
                </div>
              </Sidebar>

              {/* Leaderboard */}
              <Sidebar title="Top Contributors" icon={Award}>
                <div className="space-y-4">
                  {[
                    { name: "Dr. Priya Sharma", points: 1250, rank: 1, gradient: "from-yellow-400 to-orange-500" },
                    { name: "Rajesh Kumar", points: 890, rank: 2, gradient: "from-gray-400 to-gray-600" },
                    { name: "Local Electrician", points: 675, rank: 3, gradient: "from-orange-400 to-red-500" }
                  ].map((user, index) => (
                    <div key={index} className="flex items-center gap-4 p-4 hover:bg-gradient-to-r hover:from-gray-50 hover:to-white rounded-xl transition-all duration-300 hover:scale-105 cursor-pointer">
                      <div className={`w-10 h-10 bg-gradient-to-br ${user.gradient} rounded-full flex items-center justify-center shadow-lg`}>
                        <span className="text-white font-bold">{user.rank}</span>
                      </div>
                      <div className="flex-1">
                        <div className="font-semibold text-gray-900">{user.name}</div>
                        <div className="text-sm text-gray-500">{user.points} points</div>
                      </div>
                      {index === 0 && <Trophy className="text-yellow-500" size={20} />}
                    </div>
                  ))}
                  
                  <div className="pt-4 border-t border-gray-200">
                    <div className="flex items-center justify-between p-3 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl">
                      <span className="font-medium text-gray-700">Your Rank:</span>
                      <span className="font-bold text-blue-700 text-lg">#12 (450 points)</span>
                    </div>
                  </div>
                </div>
              </Sidebar>

            </div>
          </div>
        </div>

      {/* Floating Action Button */}
      <button
        onClick={() => setShowNewPost(true)}
        className="fixed bottom-8 right-8 lg:hidden w-16 h-16 bg-gradient-to-r from-blue-600 via-purple-600 to-green-600 text-white rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 flex items-center justify-center z-40 hover:scale-110"
        style={{ animation: 'glow 2s ease-in-out infinite alternate' }}
      >
        <Plus size={28} />
      </button>

      {/* Mobile Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-white/90 backdrop-blur-2xl border-t border-gray-200/50 lg:hidden z-30 shadow-2xl">
        <div className="flex items-center justify-around py-3">
          {[
            { id: 'feed', icon: Home, label: 'Feed' },
            { id: 'explore', icon: Search, label: 'Explore' },
            { id: 'notifications', icon: Bell, label: 'Alerts', badge: true },
            { id: 'profile', icon: User, label: 'Profile' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex flex-col items-center gap-1 p-3 transition-all duration-300 hover:scale-110 ${
                activeTab === tab.id ? 'text-blue-600' : 'text-gray-600'
              }`}
            >
              <div className="relative">
                <tab.icon size={24} />
                {tab.badge && (
                  <div className="absolute -top-2 -right-2 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs font-bold">3</span>
                  </div>
                )}
              </div>
              <span className="text-xs font-medium">{tab.label}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SocialCivicPlatform;