// NewPostForm.jsx

// import React, { useState } from "react";
// import { Plus, X, Upload, User, MapPin, Calendar } from "lucide-react";
// import addpost from '../../utils/api.js';

// const NewPostForm = ({ onSubmit }) => {
//   const [showForm, setShowForm] = useState(false);
//   const [formData, setFormData] = useState({
//     caption: "",
//     types: "",
//     priority: "MEDIUM",
//     contactNumber: "",
//     email: "",
//     anonymous: false,
//     wardNumber: "",
//     city: "",
//     state: "",
//     country: "India",
//     longitude: "",
//     latitude: "",
//     department: "",
//     deadline: "",
//     images: []
//   });

//   const handleChange = (e) => {
//     const { name, value, type, checked, files } = e.target;
//     if (type === "checkbox") {
//       setFormData({ ...formData, [name]: checked });
//     } else if (type === "file") {
//       setFormData({ ...formData, images: files });
//     } else {
//       setFormData({ ...formData, [name]: value });
//     }
//   };

//   const handleSubmit = async (e) => {
//   e.preventDefault();

//   try {
//     const formDataObj = new FormData();
//     Object.keys(formData).forEach((key) => {
//       if (key === "images") {
//         Array.from(formData.images).forEach((file) => {
//           formDataObj.append("images", file);
//         });
//       } else {
//         formDataObj.append(key, formData[key]);
//       }
//     });

//     // Call backend
//     const response = await addpost(formDataObj);

//     console.log("✅ Post submitted successfully:", response);
//     if (onSubmit) onSubmit(response);

//     setShowForm(false);
//   } catch (err) {
//     console.error("❌ Error submitting post:", err);
//     alert("Failed to submit the issue. Please try again.");
//   }
// };


//   return (
//     <div className="relative">
//       {/* Enhanced Gradient Button */}
//       <button
//         onClick={() => setShowForm(true)}
//         className="group relative overflow-hidden bg-gradient-to-r from-blue-600 via-purple-600 to-green-600 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-2xl"
//       >
//         <div className="absolute inset-0 bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
//         <div className="relative flex items-center gap-2">
//           <Plus size={20} className="animate-spin group-hover:animate-none transition-all duration-300" />
//           <span className="hidden md:inline">Report Issue</span>
//         </div>
//         <div className="absolute inset-0 bg-white/20 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300 opacity-30"></div>
//       </button>

//       {/* Enhanced Modal Form */}
//       {showForm && (
//         <div className="fixed inset-0 flex items-center justify-center bg-black/60 backdrop-blur-sm z-50 p-4">
//           <div className="bg-white w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl shadow-2xl relative border border-gray-100">
//             {/* Header */}
//             <div className="sticky top-0 bg-gradient-to-r from-blue-600 via-purple-600 to-green-600 text-white p-6 rounded-t-3xl">
//               <div className="flex items-center justify-between">
//                 <h2 className="text-2xl font-bold flex items-center gap-3">
//                   <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
//                     <Plus size={20} />
//                   </div>
//                   Report New Issue
//                 </h2>
//                 <button
//                   onClick={() => setShowForm(false)}
//                   className="w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
//                 >
//                   <X size={20} />
//                 </button>
//               </div>
//             </div>

//             {/* Form Content */}
//             <div className="p-8">
//               <div className="space-y-8">
//                 {/* Issue Details Section */}
//                 <div className="space-y-6">
//                   <h3 className="text-lg font-semibold text-gray-800 flex items-center gap-2 border-b border-gray-200 pb-2">
//                     <div className="w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
//                       <span className="text-white text-xs">1</span>
//                     </div>
//                     Issue Details
//                   </h3>
                  
//                   <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                     <div className="md:col-span-2">
//                       <label className="block text-sm font-medium text-gray-700 mb-2">Caption</label>
//                       <input 
//                         type="text" 
//                         name="caption" 
//                         placeholder="Describe the issue briefly" 
//                         onChange={handleChange} 
//                         className="w-full border-2 border-gray-200 rounded-xl p-4 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all duration-300 hover:border-gray-300"
//                       />
//                     </div>
                    
//                     <div>
//                       <label className="block text-sm font-medium text-gray-700 mb-2">Issue Type</label>
//                       <input 
//                         type="text" 
//                         name="types" 
//                         placeholder="e.g., Road, Water, Electricity" 
//                         onChange={handleChange} 
//                         className="w-full border-2 border-gray-200 rounded-xl p-4 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all duration-300 hover:border-gray-300"
//                       />
//                     </div>

//                     <div>
//                       <label className="block text-sm font-medium text-gray-700 mb-2">Priority</label>
//                       <select 
//                         name="priority" 
//                         onChange={handleChange} 
//                         value={formData.priority}
//                         className="w-full border-2 border-gray-200 rounded-xl p-4 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all duration-300 hover:border-gray-300 bg-white"
//                       >
//                         <option value="LOW">🟢 Low Priority</option>
//                         <option value="MEDIUM">🟡 Medium Priority</option>
//                         <option value="HIGH">🔴 High Priority</option>
//                       </select>
//                     </div>

//                     <div>
//                       <label className="block text-sm font-medium text-gray-700 mb-2">Department</label>
//                       <input 
//                         type="text" 
//                         name="department" 
//                         placeholder="Responsible department" 
//                         onChange={handleChange} 
//                         className="w-full border-2 border-gray-200 rounded-xl p-4 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all duration-300 hover:border-gray-300"
//                       />
//                     </div>

//                     <div>
//                       <label className="block text-sm font-medium text-gray-700 mb-2">Deadline</label>
//                       <div className="relative">
//                         <input 
//                           type="date" 
//                           name="deadline" 
//                           onChange={handleChange} 
//                           className="w-full border-2 border-gray-200 rounded-xl p-4 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all duration-300 hover:border-gray-300"
//                         />
//                         <Calendar size={20} className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" />
//                       </div>
//                     </div>
//                   </div>
//                 </div>

//                 {/* Contact Information Section */}
//                 <div className="space-y-6">
//                   <h3 className="text-lg font-semibold text-gray-800 flex items-center gap-2 border-b border-gray-200 pb-2">
//                     <div className="w-6 h-6 bg-gradient-to-r from-purple-500 to-green-500 rounded-full flex items-center justify-center">
//                       <span className="text-white text-xs">2</span>
//                     </div>
//                     Contact Information
//                   </h3>
                  
//                   <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                     <div>
//                       <label className="block text-sm font-medium text-gray-700 mb-2">Contact Number</label>
//                       <input 
//                         type="text" 
//                         name="contactNumber" 
//                         placeholder="+91 XXXXXXXXXX" 
//                         onChange={handleChange} 
//                         className="w-full border-2 border-gray-200 rounded-xl p-4 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all duration-300 hover:border-gray-300"
//                       />
//                     </div>
                    
//                     <div>
//                       <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
//                       <input 
//                         type="email" 
//                         name="email" 
//                         placeholder="your.email@example.com" 
//                         onChange={handleChange} 
//                         className="w-full border-2 border-gray-200 rounded-xl p-4 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all duration-300 hover:border-gray-300"
//                       />
//                     </div>
//                   </div>

//                   <div className="flex items-center gap-3 p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl border border-blue-100">
//                     <input 
//                       type="checkbox" 
//                       name="anonymous" 
//                       onChange={handleChange} 
//                       className="w-5 h-5 text-purple-600 bg-gray-100 border-gray-300 rounded focus:ring-purple-500 focus:ring-2"
//                     />
//                     <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
//                       <User size={16} className="text-purple-600" />
//                       Post as Anonymous
//                     </label>
//                   </div>
//                 </div>

//                 {/* Location Information Section */}
//                 <div className="space-y-6">
//                   <h3 className="text-lg font-semibold text-gray-800 flex items-center gap-2 border-b border-gray-200 pb-2">
//                     <div className="w-6 h-6 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center">
//                       <span className="text-white text-xs">3</span>
//                     </div>
//                     Location Information
//                   </h3>
                  
//                   <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                     <div>
//                       <label className="block text-sm font-medium text-gray-700 mb-2">Ward Number</label>
//                       <input 
//                         type="text" 
//                         name="wardNumber" 
//                         placeholder="Ward/Zone number" 
//                         onChange={handleChange} 
//                         className="w-full border-2 border-gray-200 rounded-xl p-4 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all duration-300 hover:border-gray-300"
//                       />
//                     </div>
                    
//                     <div>
//                       <label className="block text-sm font-medium text-gray-700 mb-2">City</label>
//                       <input 
//                         type="text" 
//                         name="city" 
//                         placeholder="City name" 
//                         onChange={handleChange} 
//                         className="w-full border-2 border-gray-200 rounded-xl p-4 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all duration-300 hover:border-gray-300"
//                       />
//                     </div>
                    
//                     <div>
//                       <label className="block text-sm font-medium text-gray-700 mb-2">State</label>
//                       <input 
//                         type="text" 
//                         name="state" 
//                         placeholder="State name" 
//                         onChange={handleChange} 
//                         className="w-full border-2 border-gray-200 rounded-xl p-4 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all duration-300 hover:border-gray-300"
//                       />
//                     </div>
                    
//                     <div>
//                       <label className="block text-sm font-medium text-gray-700 mb-2">Country</label>
//                       <input 
//                         type="text" 
//                         name="country" 
//                         defaultValue="India" 
//                         onChange={handleChange} 
//                         className="w-full border-2 border-gray-200 rounded-xl p-4 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all duration-300 hover:border-gray-300 bg-gray-50"
//                       />
//                     </div>

//                     <div>
//                       <label className="block text-sm font-medium text-gray-700 mb-2">Longitude</label>
//                       <div className="relative">
//                         <input 
//                           type="text" 
//                           name="longitude" 
//                           placeholder="77.2090" 
//                           onChange={handleChange} 
//                           className="w-full border-2 border-gray-200 rounded-xl p-4 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all duration-300 hover:border-gray-300"
//                         />
//                         <MapPin size={20} className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" />
//                       </div>
//                     </div>

//                     <div>
//                       <label className="block text-sm font-medium text-gray-700 mb-2">Latitude</label>
//                       <div className="relative">
//                         <input 
//                           type="text" 
//                           name="latitude" 
//                           placeholder="28.6139" 
//                           onChange={handleChange} 
//                           className="w-full border-2 border-gray-200 rounded-xl p-4 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all duration-300 hover:border-gray-300"
//                         />
//                         <MapPin size={20} className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" />
//                       </div>
//                     </div>
//                   </div>
//                 </div>

//                 {/* Image Upload Section */}
//                 <div className="space-y-6">
//                   <h3 className="text-lg font-semibold text-gray-800 flex items-center gap-2 border-b border-gray-200 pb-2">
//                     <div className="w-6 h-6 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full flex items-center justify-center">
//                       <span className="text-white text-xs">4</span>
//                     </div>
//                     Supporting Images
//                   </h3>
                  
//                   <div className="relative">
//                     <input 
//                       type="file" 
//                       name="images" 
//                       multiple 
//                       accept="image/*" 
//                       onChange={handleChange} 
//                       className="hidden" 
//                       id="image-upload"
//                     />
//                     <label 
//                       htmlFor="image-upload"
//                       className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-gray-300 rounded-xl cursor-pointer bg-gradient-to-br from-blue-50 to-purple-50 hover:from-blue-100 hover:to-purple-100 transition-all duration-300 hover:border-purple-400 group"
//                     >
//                       <Upload size={32} className="text-gray-400 group-hover:text-purple-500 transition-colors duration-300 mb-2" />
//                       <p className="text-sm text-gray-500 group-hover:text-purple-600 transition-colors duration-300">
//                         Click to upload images or drag and drop
//                       </p>
//                       <p className="text-xs text-gray-400 mt-1">PNG, JPG, JPEG up to 10MB each</p>
//                     </label>
//                   </div>
//                 </div>

//                 {/* Action Buttons */}
//                 <div className="flex justify-end gap-4 pt-6 border-t border-gray-200">
//                   <button
//                     type="button"
//                     onClick={() => setShowForm(false)}
//                     className="group px-8 py-3 rounded-full border-2 border-gray-300 text-gray-700 font-semibold hover:bg-gray-100 hover:border-gray-400 transition-all duration-300 hover:scale-105"
//                   >
//                     Cancel
//                   </button>
//                   <button
//                     type="submit"
//                     onClick={handleSubmit}
//                     className="group relative overflow-hidden bg-gradient-to-r from-blue-600 via-purple-600 to-green-600 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-2xl"
//                   >
//                     <div className="absolute inset-0 bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
//                     <div className="relative flex items-center gap-2">
//                       <span>Submit Report</span>
//                       <Plus size={16} className="group-hover:rotate-90 transition-transform duration-300" />
//                     </div>
//                     <div className="absolute inset-0 bg-white/20 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300 opacity-30"></div>
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default NewPostForm;
import React, { useState } from "react";
import { addPost } from "../../utils/api.js";

const NewPostForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    caption: "",
    types: "",
    priority: "MEDIUM",
    contactNumber: "",
    email: "",
    anonymous: false,
    wardNumber: "",
    city: "",
    state: "",
    country: "",
    longitude: "",
    latitude: "",
    department: "",
    deadline: "",
    images: [],
  });

  // Handle text, checkbox and file changes
  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;

    if (type === "file") {
      setFormData({ ...formData, images: Array.from(files) });
    } else if (type === "checkbox") {
      setFormData({ ...formData, [name]: checked });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const fd = new FormData();

      // append all fields
      Object.keys(formData).forEach((key) => {
        if (key === "images" && formData.images.length > 0) {
          formData.images.forEach((file) => {
            fd.append("images", file);
          });
        } else {
          fd.append(key, formData[key]);
        }
      });

      const response = await addPost(fd);

      console.log("✅ Post created:", response);
      if (onSubmit) onSubmit(response.post);
      alert("✅ Post submitted successfully!");
    } catch (err) {
      console.error("❌ Error submitting:", err);
      alert("Failed to submit issue.");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 bg-white shadow-xl rounded-2xl p-6"
    >
      <input
        type="text"
        name="caption"
        placeholder="Enter caption"
        value={formData.caption}
        onChange={handleChange}
        className="w-full border rounded p-2"
      />
      <input
        type="text"
        name="types"
        placeholder="Issue Type"
        value={formData.types}
        onChange={handleChange}
        className="w-full border rounded p-2"
      />
      <input
        type="text"
        name="priority"
        value={formData.priority}
        onChange={handleChange}
        className="w-full border rounded p-2"
      />
      <input
        type="text"
        name="contactNumber"
        placeholder="Contact Number"
        value={formData.contactNumber}
        onChange={handleChange}
        className="w-full border rounded p-2"
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
        className="w-full border rounded p-2"
      />
      <label className="flex items-center gap-2">
        <input
          type="checkbox"
          name="anonymous"
          checked={formData.anonymous}
          onChange={handleChange}
        />{" "}
        Post as Anonymous
      </label>
      <input
        type="text"
        name="wardNumber"
        placeholder="Ward Number"
        value={formData.wardNumber}
        onChange={handleChange}
        className="w-full border rounded p-2"
      />
      <input
        type="text"
        name="city"
        placeholder="City"
        value={formData.city}
        onChange={handleChange}
        className="w-full border rounded p-2"
      />
      <input
        type="text"
        name="state"
        placeholder="State"
        value={formData.state}
        onChange={handleChange}
        className="w-full border rounded p-2"
      />
      <input
        type="text"
        name="country"
        placeholder="Country"
        value={formData.country}
        onChange={handleChange}
        className="w-full border rounded p-2"
      />
      <input
        type="number"
        name="longitude"
        placeholder="Longitude"
        value={formData.longitude}
        onChange={handleChange}
        className="w-full border rounded p-2"
      />
      <input
        type="number"
        name="latitude"
        placeholder="Latitude"
        value={formData.latitude}
        onChange={handleChange}
        className="w-full border rounded p-2"
      />
      <input
        type="text"
        name="department"
        placeholder="Department"
        value={formData.department}
        onChange={handleChange}
        className="w-full border rounded p-2"
      />
      <input
        type="date"
        name="deadline"
        value={formData.deadline}
        onChange={handleChange}
        className="w-full border rounded p-2"
      />
      <input
        type="file"
        name="images"
        accept="image/*"
        multiple
        onChange={handleChange}
        className="w-full border rounded p-2"
      />

      <button
        type="submit"
        className="w-full bg-gradient-to-r from-blue-600 via-purple-600 to-green-600 text-white font-bold py-2 rounded-full hover:scale-105 transition"
      >
        Submit Issue
      </button>
    </form>
  );
};

export default NewPostForm;
  