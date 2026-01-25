import { MapPin } from "lucide-react";
import React from "react";
import { FaCaretDown } from "react-icons/fa";
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

        <nav>
          <ul className="flex flex-row gap-7 items-center text-lx font-semibold">
            <NavLink to={'/'} className={({isActive}) => `${isActive ? "border-b-3 transition-all duration-200 ease-in-out border-green-700" : "text-black"} cursor-pointer` } ><li>Home</li></NavLink> 
            <NavLink to={'/product'} className={({isActive}) => `${isActive ? "border-b-3 transition-all duration-200 ease-in-out border-green-700" : "text-black"} cursor-pointer` }  ><li>Products</li></NavLink> 
            <NavLink to={'/about'} className={({isActive}) => `${isActive ? "border-b-3 transition-all duration-200 ease-in-out border-green-700" : "text-black"} cursor-pointer` }  > <li>About</li></NavLink>
            <NavLink to={'/contact'} className={({isActive}) => `${isActive ? "border-b-3 transition-all duration-200 ease-in-out border-green-700" : "text-black"} cursor-pointer` }  ><li>Contact Us</li></NavLink> 
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
