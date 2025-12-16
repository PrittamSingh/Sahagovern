// import { createSlice } from "@reduxjs/toolkit";

// const authSlice = createSlice({
//     name:"auth",
//     initialState:{
//         user:null
//     },
//     reducers:{
//         setAuthUser:(state, action) => {
//             state.user = action.payload;
//         }
//     }
// });
// export const { setAuthUser } = authSlice.actions;
// export default authSlice.reducer;
// redux/authSlice.js
import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    isAuthenticated: false,
    suggestedUsers: [],
    userProfile: null,
    selectedUser: null,
    showAuth: false, // ✅ add this for controlling AuthPage visibility
  },
  reducers: {
    setAuthUser: (state, action) => {
      state.user = action.payload;
      state.isAuthenticated = !!action.payload;
    },
    setSuggestedUsers: (state, action) => {
      state.suggestedUsers = action.payload;
    },
    setUserProfile: (state, action) => {
      state.userProfile = action.payload;
    },
    setSelectedUser: (state, action) => {
      state.selectedUser = action.payload;
    },
    setShowAuth: (state, action) => {
      state.showAuth = action.payload; // ✅ toggle auth page
    },
    logout: (state) => {
      state.user = null;
      state.isAuthenticated = false;
      state.suggestedUsers = [];
      state.userProfile = null;
      state.selectedUser = null;
      state.showAuth = false; // ✅ reset when logout
    },
  },
});

export const {
  setAuthUser,
  setSuggestedUsers,
  setUserProfile,
  setSelectedUser,
  setShowAuth, // ✅ export this
  logout,
} = authSlice.actions;

export default authSlice.reducer;
