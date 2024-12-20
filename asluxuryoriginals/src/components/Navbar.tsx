import React, { useState } from "react";
import { IoPersonOutline, IoBagOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";
import { links, sublistContent } from "../utils/data-json";
import { Link } from "react-router-dom";
import Sublist from "./Sublist";
import { HiOutlineMenu, HiX } from "react-icons/hi";
import LoginModal from "./signUp/authmodal";
// import SignInPage from "../pages/login/SignIn";
import UserMenu from "../pages/userProfile/profileDropDown";

const Navbar = () => {
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // const handleLogin = (username, password, isSignUp) => {
  //   if (isSignUp) {
  //     // Implement signup logic (e.g., API call to create account)
  //     console.log("Signing up:", { username, password });
  //   } else {
  //     // Implement login logic (e.g., API call to authenticate)
  //     console.log("Logging in:", { username, password });
  //   }
  // };

  const handleLogin1 = (formData, isSignUp, e) => {
    e.preventDefault();

    if (isSignUp) {
      if (!formData.agreedToTerms) {
        console.error("Terms not agreed");
        return;
      }

      // Signup logic with name, username, password
      console.log("Signing up:", {
        name: formData.name,
        username: formData.username,
        password: formData.password,
      });
    } else {
      // Login logic with username and password
      console.log("Logging in:", {
        username: formData.username,
        password: formData.password,
      });
    }
  };

  return (
    <div className="w-full h-auto fixed font-montserrat border-b border-gray-200 bg-white z-50">
      <div className="flex justify-between items-center p-4 md:px-16">
        <Link to="/">
          <p className="text-xl md:text-4xl font-bold text-black">
            AS LUXURY ORIGINALS
          </p>
        </Link>

        <div className="hidden md:flex space-x-4 text-gray-700 text-md hover:text-black">
          <span>Womenswear</span>
          <span>Menswear</span>
          <span>Kidswear</span>
        </div>
        <div className="hidden md:flex space-x-4 text-2xl">
          <span>
            <button
              onClick={() => setIsModalOpen(true)}
              className=" hover:bg-gray-100 rounded-full"
            >
              <IoPersonOutline />
            </button>
          </span>

          <span>
            <FaRegHeart />
          </span>
          <span>
            <IoBagOutline />
          </span>
          {/* <span>{<UserMenu />}</span> */}
        </div>

        <div className="md:hidden gap-1 flex  items-center text-2xl">
          <div>
            <Link to="/sign">
              <IoPersonOutline size={19} />
            </Link>
          </div>
          <div className="hidden">{<UserMenu />}</div>
          <div onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <HiX /> : <HiOutlineMenu />}
          </div>
        </div>
      </div>

      <div
        className={`${
          menuOpen ? "block" : "hidden"
        } md:flex justify-between items-center py-4 md:px-16 bg-white px-8`}
      >
        <div className="flex flex-col md:flex-row md:space-x-4 text-md relative">
          {links.map((link, index) => (
            <div
              key={index}
              className="relative group"
              onMouseEnter={() => setHoveredLink(link)}
            >
              <span
                className={`cursor-pointer hover:text-gray-600 ${
                  link === "New Arrivals" || link === "Fragrances"
                    ? "cursor-default"
                    : ""
                }`}
              >
                <Link to={`/${link.toLowerCase().replace(/\s+/g, "-")}`}>
                  {link}
                </Link>
              </span>

              <div
                onMouseEnter={() => setHoveredLink(link)}
                onMouseLeave={() => setHoveredLink(null)}
                className="absolute left-0 top-full w-full bg-white shadow-lg z-20"
              >
                {hoveredLink === link && sublistContent[link] && (
                  <Sublist items={sublistContent[link]!} />
                )}
              </div>
            </div>
          ))}
        </div>
        <div className=" items-center hidden ">{<UserMenu />}</div>
        <div className="flex items-center border rounded border-black p-2 mt-4 md:mt-0">
          <CiSearch size={20} className="mr-2" />
          <input
            type="text"
            placeholder="Search"
            className="w-[200px] flex-grow outline-none"
          />
        </div>
      </div>
      {
        <LoginModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onLogin={handleLogin1}
        />
      }
    </div>
  );
};

export default Navbar;
