import React from "react";
import "./App.css";
import Posts from "./components/Posts/Posts";
import { useAppSelector } from "./hooks";

const App: React.FC = ({}) => {

  return (
    <div>
      <Posts />
    </div>
  );
};

export default App;
