import React from "react";
import RssFeedIcon from "@mui/icons-material/RssFeed";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import EventIcon from "@mui/icons-material/Event";
import SchoolIcon from "@mui/icons-material/School";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import GroupIcon from "@mui/icons-material/Group";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import { VscAccount } from "react-icons/vsc";
import dummyData from "./dummyData";

const Sidebar = () => {
  return (
    <div className="flex flex-col w-[350px]">
      <div className="flex fixed flex-col  mt-20 p-6 m-1 h-[100vh] justify-evenly cursor-pointer  bg-gray-100 font-semibold overflow-scroll">
        <div className=" flex m-2 p-1">
          <span>
            <RssFeedIcon />
          </span>
          <span className="flex mx-4 px-1">Feed</span>
        </div>
        <div className="flex m-2 p-2">
          <span>
            <HelpOutlineIcon />
          </span>
          <span className="flex mx-4 px-1">Questions</span>
        </div>
        <div className="flex m-2 p-2">
          <span>
            <WorkOutlineIcon />
          </span>
          <span className="flex mx-4 px-1">Jobs</span>
        </div>
        <div className="flex m-2 p-2">
          <span>
            <EventIcon />
          </span>
          <span className="flex mx-4 px-1">Event</span>
        </div>
        <div className="flex m-2 p-2">
          <span>
            <SchoolIcon />
          </span>{" "}
          <span className="flex mx-4 px-1">Course</span>
        </div>
        <div className="flex m-2 p-2">
          <span>
            <PlayCircleIcon />
          </span>
          <span className="flex mx-4 px-1"> videos</span>
        </div>
        <div className="flex m-2 p-2">
          <span>
            <GroupIcon />
          </span>
          <span className="flex mx-4 px-1">Group</span>
        </div>
        <div className="flex m-2 p-2">
          <span>
            <BookmarkIcon />
          </span>
          <span className="flex mx-4 px-1">Bookmark</span>
        </div>
        <div className=" border-b-2 border-black p-2 m-2">See more</div>
        <div className=" flex mb-2  flex-col">
          {dummyData.map((item, index) => {
            return (
              <div>
                <div className="flex m-2 p-2  py-2">
                  <span>
                    <VscAccount className="text-[30px]" />
                  </span>
                  <span className="flex mx-4 px-1">{item.name}</span>
                </div>
              </div>
            );
          })}

          {/* <div className="flex m-2 p-2">
            <span>
              <VscAccount className="text-[30px]" />
            </span>
            <span className="flex mx-4 px-1">Helicopter Singh</span>
          </div>
          <div className="flex m-2 p-2">
            <span>
              <VscAccount className="text-[30px]" />
            </span>
            <span className="flex mx-4 px-1">Bheem Singh</span>
          </div>
          <div className="flex m-2 p-2">
            <span>
              <VscAccount className="text-[30px]" />
            </span>
            <span className="flex mx-4 px-1">Gillu </span>
          </div>
          <div className="flex m-2 p-2">
            <span>
              <VscAccount className="text-[30px]" />
            </span>
            <span className="flex mx-4 px-1">Abhimanyu Singh</span>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
