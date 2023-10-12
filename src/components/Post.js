// import RssFeedIcon from "@mui/icons-material";
import React from "react";

import { VscAccount } from "react-icons/vsc";
import { IoMdPhotos } from "react-icons/io";
import { LocationOnOutlined } from "@mui/icons-material";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import MoreVertIcon from "@mui/icons-material/MoreVert";

import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
// import ModeCommentIcon from "@mui/icons-material/ModeComment";
import dummyData from "./dummyData";
import Likes from "./Likes";
import Dil from "./Dil";

const Post = () => {
  return (
    <div className="flex flex-col  mt-12 w-[full]">
      <div className="border-black rounded-lg shadow-lg p-1 m-1 w-[650px] h-[160px] bg-slate-100">
        <div className="flex m-1 border-b-2 border-black">
          <span>
            <VscAccount className="text-[40px]" />
          </span>
          <span className="flex m-2 p-2 font-light">
            What's on your mind Govind?
          </span>
        </div>
        <div className="flex mt-2">
          <div className="flex m-2">
            <span>
              <IoMdPhotos
                className="text-[30px]"
                style={{ color: "#00a400" }}
              />
            </span>
            <span className="flex text-[15px]">Phtos & videos</span>
          </div>
          <div className="flex m-2">
            <span>
              <BookmarkIcon className="text-[30px]" style={{ color: "blue" }} />
            </span>
            <span className="flex">Tags</span>
          </div>
          <div className="flex m-2">
            <span>
              <LocationOnOutlined
                fontSize="medium"
                style={{ color: "#fa383e" }}
              />
            </span>
            <span className="flex  px-1">Location</span>
          </div>
          <div className="flex m-2">
            <span>
              <EmojiEmotionsIcon
                fontSize="medium"
                style={{ color: "#ffb100" }}
              />
            </span>
            <span className="flex  px-1">Feeling</span>
          </div>
          <div className=" rounded-sm border w-[30%]  text-white">
            <button className="flex float-right p-1 m-2 border rounded-lg bg-green-700 justify-end">
              Share
            </button>
          </div>
        </div>
      </div>
      <div className="border  shadow-md p-2 m-1 mt-6 h-[650px]">
        {dummyData.map((item, index) => {
          return (
            <div>
              <div className="flex py-2  justify-between">
                <div className="flex py-2">
                  <span>
                    <VscAccount className="text-[30px]" />
                  </span>
                  <span className="flex mx-1 px-1 font-sans font-bold">
                    {item.name}
                  </span>
                  <span className="text-[12px] p-1">{item.time}</span>
                </div>

                <div>
                  <span className="flex py-2">
                    <MoreVertIcon />
                  </span>
                </div>
              </div>
              <div>
                <div>
                  <p>{item.post}</p>
                </div>
                <div>
                  <img className="mt-4" src={item.post_img} alt="posts" />
                </div>
                <div className="flex justify-between p-2 m-2">
                  <Likes item={item.like} />
                  <Dil item={item.heart} />
                  <button>
                    <ChatBubbleOutlineIcon
                      fontSize="medium"
                      className="  rounded-full"
                    />
                    {item.comments}
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Post;
