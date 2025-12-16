// src/hooks/useGetAllPost.js

import { useEffect } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import { setPosts } from "@/redux/postSlice";

const useGetAllPost = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchAllPost = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/posts/all", {
          withCredentials: true, // 👈 include cookies if your backend uses JWT/cookie auth
        });

        if (res.data.success) {
          dispatch(setPosts(res.data.posts));
        } else {
          console.error("Failed to fetch posts:", res.data.message);
        }
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };

    fetchAllPost();
  }, [dispatch]);
};

export default useGetAllPost;
