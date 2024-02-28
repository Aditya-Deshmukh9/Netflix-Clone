import React from "react";
import { IoIosArrowDropdown } from "react-icons/io";
import { useSelector } from "react-redux";

function Header() {
  const user = useSelector((state) => state.app);

  console.log(user);

  return (
    <div className="h-[100px] absolute z-[999] w-full flex justify-between items-center bg-gradient-to-b from-black">
      <img
        className=" w-56 ml-4"
        color="Red"
        src="https://img01.products.bt.co.uk/content/dam/bt/portal/images/logos/tv/Netflix_Logo_Final.png"
        alt="logo"
      />
      <div className="flex items-center">
        <IoIosArrowDropdown size={24} color="white" />
        <h1 className="text-white">Aditya Dev</h1>
        <div className="ml-4">
          <button
            // onClick={handlelogout}
            className="bg-red-700 text-white px-4 py-2 "
          >
            Logout
          </button>
          <button className="bg-red-700 text-white px-4 py-2 mx-2">
            Search Movie
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;
