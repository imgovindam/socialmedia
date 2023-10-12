import React, { useState } from "react";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";

const Likes = ({ item }) => {
  const [count, setCount] = useState(item);
  const incremment = () => {
    setCount(count + 1);
    console.log(count);
  };
  return (
    <div>
      <button onClick={() => incremment()}>
        <ThumbUpIcon
          fontSize="medium"
          className="bg-blue-500 border text-white rounded-full"
        />
        {count}
      </button>
    </div>
  );
};

export default Likes;
