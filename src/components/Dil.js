import React, { useState } from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
const Dil = ({ item }) => {
  const [count, setCount] = useState(item);
  const incremment = () => {
    setCount(count + 1);
    console.log(count);
  };
  return (
    <div>
      <button onClick={() => incremment()}>
        <FavoriteIcon
          fontSize="medium"
          className="bg-red-500 border text-white rounded-full"
        />
        {count}
      </button>
    </div>
  );
};

export default Dil;
