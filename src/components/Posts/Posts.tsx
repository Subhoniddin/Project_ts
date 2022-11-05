import React, { useState, useEffect } from "react";
import { useAppDispatch } from "../../hooks";
import { fetchPosts } from "../../store/todoSlice";
import PostItem from "./PostItem";
import TableItem from "./TableItem";

const Posts: React.FC = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);
  return (
    <div>
      <TableItem />
    </div>
  );
};

export default Posts;
