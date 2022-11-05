import React from "react";
import { useAppSelector } from "../../hooks";

const PostItem = () => {
  const posts = useAppSelector((state) => state.todos.posts);
  console.log(posts);

  return (
    <div>
      
    </div>
  );
};

export default PostItem;
