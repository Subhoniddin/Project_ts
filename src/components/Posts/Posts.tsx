import React, { useState, useEffect } from "react";
import { useAppDispatch } from "../../hooks";
import { fetchPosts } from "../../store/todoSlice";
import PostItem from "./PostItem";
const Posts: React.FC = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchPosts);
  }, [dispatch]);
  return (
    <div>
      <PostItem />
    </div>
  );
};

export default Posts;
