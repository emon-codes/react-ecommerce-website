import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";
import { MapPin } from "lucide-react";
import React from "react";
import { FaCaretDown } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { Link, NavLink } from "react-router";

const Navbar = () => {
  const location = false;

  return (
    <div className="bg-white shadow-xl py-3">
      <div className="max-w-7xl mx-auto flex flex-row justify-between items-center">
        {/* {logo section} */}
        <div className="flex flex-row items-center gap-5">
          <Link to={"/"}>
            <h2 className="font-bold text-3xl text-black">
              <span className="text-red-500">Specila</span> Offer
            </h2>
          </Link>
          <div className="flex gap-1 cursor-pointer text-gray-800 items-center">
            <MapPin className="text-green-600"></MapPin>
            <span className="font-samibold">
              {" "}
              {location ? <div></div> : "Add Address"}{" "}
            </span>
            <FaCaretDown />
          </div>
        </div>

        {/* {menu section} */}

        <nav className="flex flex-row gap-7 items-center">
          <ul className="flex flex-row gap-7 items-center text-lx font-semibold">
            <NavLink
              to={"/"}
              className={({ isActive }) =>
                `${isActive ? "border-b-3 transition-all duration-200 ease-in-out border-green-700" : "text-black"} cursor-pointer`
              }
            >
              <li>Home</li>
            </NavLink>
            <NavLink
              to={"/product"}
              className={({ isActive }) =>
                `${isActive ? "border-b-3 transition-all duration-200 ease-in-out border-green-700" : "text-black"} cursor-pointer`
              }
            >
              <li>Products</li>
            </NavLink>
            <NavLink
              to={"/about"}
              className={({ isActive }) =>
                `${isActive ? "border-b-3 transition-all duration-200 ease-in-out border-green-700" : "text-black"} cursor-pointer`
              }
            >
              {" "}
              <li>About</li>
            </NavLink>
            <NavLink
              to={"/contact"}
              className={({ isActive }) =>
                `${isActive ? "border-b-3 transition-all duration-200 ease-in-out border-green-700" : "text-black"} cursor-pointer`
              }
            >
              <li>Contact Us</li>
            </NavLink>
          </ul>
          <Link to={"/cart"} className="relative">
            <IoCartOutline className="h-7 w-7" />
            <span className="bg-green-600 px-2 rounded-full absolute -top-3 -right-3 text-white">
              0
            </span>
          </Link>
          <div>
            <SignedOut>
              <SignInButton className="bg-red-600 text-white px-3 py-1 cursor-pointer rounded" />
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
