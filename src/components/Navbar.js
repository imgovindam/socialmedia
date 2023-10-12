import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from "@mui/icons-material/PermIdentity";
import MessageSharpIcon from "@mui/icons-material/MessageSharp";
import NotificationsActiveSharpIcon from "@mui/icons-material/NotificationsActiveSharp";
import AccountCircleSharpIcon from "@mui/icons-material/AccountCircleSharp";

const Navbar = () => {
  return (
    <div className="bg-[#1877F2] fixed w-full flex justify-between h-12 text-center  items-center px-2 mx-1">
      <div className="text-white w-1/6  font-mono  text-[30px] font-extrabold cursor-pointer">
        socialMedia
      </div>
      <div className="flex w-1/3 m-2 text-center items-center relative">
        <span className="absolute left-3 top-3">
          <SearchIcon />
        </span>
        <input
          className="w-full  h-8 border-none  rounded-full outline-none p-2 m-2 text-center "
          type="text"
          placeholder="search for friends ,posts & videos"
        />
      </div>
      <div className="flex justify-around  w-[200px] text-white text-[15px] items-center font-sans font-medium">
        <button>Homepage</button>
        <button>Timeline</button>
      </div>

      <div className="text-white fon flex justify-between w-1/6">
        <button>
          <PersonIcon fontSize="large" />
        </button>
        <button>
          <MessageSharpIcon />
        </button>
        <button>
          <NotificationsActiveSharpIcon />
        </button>
        <button>
          <AccountCircleSharpIcon fontSize="large" />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
