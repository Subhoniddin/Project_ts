import React from "react";
import { useAppSelector } from "../../hooks";
import CustomPaginationActionsTable from "./TableItem";

const PostItem = () => {
  const posts = useAppSelector((state) => state.todos.posts);
  console.log(posts);

  return (
    <div>
      <CustomPaginationActionsTable />
    </div>
  );
};

export default PostItem;
