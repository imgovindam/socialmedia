import React from "react";
import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";
import { VscAccount } from "react-icons/vsc";
import dummyData from "./dummyData";
const Status = () => {
  return (
    <div className="flex flex-col  mt-12 w-full">
      <div className="  flex ">
        <div className="flex mt-4 mb-2 flex-wrap  w-full">
          <CardGiftcardIcon fontSize="large" style={{ color: "red" }} />
          <span className="font-bold p-2">Gillu</span>
          <p className="p-2"> and</p>{" "}
          <span className="font-bold p-2"> 3 others friends</span>{" "}
          <p className="p-2">have thier Birthday Today.</p>
        </div>
        {/* <div>
          <h4>Birthdays</h4>
          <p>imgovindam's birthday is today</p>
          <hr />
          <br />
        </div> */}
      </div>
      <div className="p-1 m-2 ">
        <img
          className="flex bg-cover bg-no-repeat bg-center w-full items-center border rounded-lg aspect-video h-56"
          src="https://pixabay.com/get/gee2d7a49a557659f9f0ec0d07f9bd96023eb086ac2e32e0a34740559f0b1e80732dc92b426c8287eab85f2c9b93309b4cdb50c842d18a760a6f61cb04be9ebfd_1280.jpg"
          alt="ads"
        />
      </div>
      <div className="p-1 m-1 font-medium">
        <div className="font-bold">Online Friends</div>
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

export default Status;
