import React from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Post from "./Post";
import Status from "./Status";

const Master = () => {
  return (
    <div className=" h-[100vh] p-0 m-0 box-border flex flex-col">
      <div>
        <Navbar />
      </div>
      <div className="flex flex-row">
        <div>
          <Sidebar />
        </div>
        <div className="p-2 m-2">
          <Post />
        </div>
        <div className="w-[500px]  m-2">
          <Status />
        </div>
      </div>
    </div>
  );
};

export default Master;
