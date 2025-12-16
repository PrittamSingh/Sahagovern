// NewPostModal.jsx

import React, { useState } from "react";
import { X, Upload } from "lucide-react";

const NewPostModal = ({ isOpen, onClose, onSubmit }) => {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [media, setMedia] = useState(null);

  if (!isOpen) return null;

  const handleFileChange = (e) => {
    setMedia(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !category || !description) {
      alert("Please fill all required fields.");
      return;
    }

    const newPost = {
      id: Date.now(),
      title,
      category,
      description,
      media,
      likes: 0,
      comments: [],
      shares: 0,
    };

    onSubmit(newPost);
    setTitle("");
    setCategory("");
    setDescription("");
    setMedia(null);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl shadow-lg w-full max-w-lg p-6 relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-400 hover:text-gray-600"
        >
          <X size={22} />
        </button>

        {/* Title */}
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          Report New Issue
        </h2>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Enter issue title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-blue-300 outline-none"
          />

          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-blue-300 outline-none"
          >
            <option value="">Select Category</option>
            <option value="Infrastructure">Infrastructure</option>
            <option value="Utilities">Utilities</option>
            <option value="Environment">Environment</option>
          </select>

          <textarea
            placeholder="Describe the issue..."
            rows="4"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-blue-300 outline-none"
          />

          {/* File Upload */}
          <label className="flex items-center gap-3 px-4 py-2 border border-dashed rounded-lg cursor-pointer hover:bg-gray-50">
            <Upload className="text-gray-500" size={20} />
            <span className="text-gray-600">
              {media ? media.name : "Upload image/video (optional)"}
            </span>
            <input
              type="file"
              onChange={handleFileChange}
              className="hidden"
              accept="image/*,video/*"
            />
          </label>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-600 via-purple-600 to-green-600 text-white py-2 rounded-lg hover:opacity-90 transition"
          >
            Submit Issue
          </button>
        </form>
      </div>
    </div>
  );
};

export default NewPostModal;
