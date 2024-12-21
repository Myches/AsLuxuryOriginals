import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { IoPersonOutline, IoBagOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa6";
import { HiOutlineMenu, HiX } from "react-icons/hi";
import SearchInput from "./SearchInput";
import SearchFilter from "./SearchFilter";
import { links, sublistContent } from "../utils/data-json";
import LoginModal from "./signUp/authmodal";




export default function Navbar() {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const timeoutRef = useRef<NodeJS.Timeout>();

  const handleMouseEnter = (link: string): void => {
    setActiveMenu(link);
  };

  const handleMouseLeave = (): void => {
    timeoutRef.current = setTimeout(() => {
      setActiveMenu(null);
    }, 200);
  };

  const handleDropdownMouseEnter = (): void => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  const handleDropdownMouseLeave = (): void => {
    setActiveMenu(null);
  };

  const handleSearchItemSelect = (): void => {
    setMenuOpen(false);
  };

  return (
    <nav className="w-full h-auto fixed font-montserrat border-b border-gray-200 bg-white z-50 pt-3">
      <div className="flex flex-col space-y-5">
        <div className="relative flex items-center p-4 md:px-16">
          <div
            className="md:hidden text-2xl"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <HiX /> : <HiOutlineMenu />}
          </div>

          <Link
            to="/"
            className="absolute left-1/2 transform -translate-x-1/2 whitespace-nowrap"
          >
            <p className="text-xl md:text-4xl font-bold text-black inline-block">
              AS LUXURY ORIGINALS
            </p>
          </Link>

          <div className="hidden md:flex lg:space-x-4 lg:text-2xl space-x-2 text-md ml-auto">
            <button
              onClick={() => setIsModalOpen(true)}
              className="hover:text-gray-400 "
            >
              <IoPersonOutline />
             
            </button>
          
            <button>
              <FaRegHeart />
            </button>
            <button>
              <IoBagOutline />
            </button>
          </div>
        </div>

        <div className="flex justify-around items-center w-full">
          <div
            className="hidden md:flex justify-center space-x-6 py-4 relative"
            onMouseLeave={handleMouseLeave}
          >
            {links.map((link) => (
              <div
                key={link}
                className="relative group"
                onMouseEnter={() => handleMouseEnter(link)}
              >
                <Link
                  to={`/${link.toLowerCase().replace(/\s+/g, "-")}`}
                  className="cursor-pointer text-gray-600 hover:text-black"
                >
                  {link}
                </Link>
                {activeMenu === link && sublistContent[link] && (
                  <div
                    className="fixed left-0 right-0 bg-white border-t shadow-lg z-20 mt-4 "
                    onMouseEnter={handleDropdownMouseEnter}
                    onMouseLeave={handleDropdownMouseLeave}
                  >
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 ">
                      <div className="grid grid-cols-1 gap-4 ">
                        <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-4">
                          {link} Categories
                        </h3>
                        <div className="grid grid-cols-2 gap-4">
                          {sublistContent[link]?.map((subcategory, index) => (
                            <Link
                              key={index}
                              to={`/${link
                                .toLowerCase()
                                .replace(/\s+/g, "-")}/${subcategory
                                .toLowerCase()
                                .replace(/\s+/g, "-")}`}
                              className="text-base text-gray-500 hover:text-black rounded-md p-2 block"
                            >
                              {subcategory}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="hidden md:flex">
            <SearchInput onItemSelect={handleSearchItemSelect} />
          </div>
          <div className="hidden md:flex p-3 text-md border rounded-lg">
            <SearchFilter onItemSelect={handleSearchItemSelect} />
          </div>
        </div>

        <div className={`${menuOpen ? "block" : "hidden"} md:hidden px-8 p-6`}>
          <div className="flex flex-col space-y-4">
            {links.map((link) => (
              <div key={link} className="border-b pb-2">
                <Link
                  to={`/${link.toLowerCase().replace(/\s+/g, "-")}`}
                  className="block"
                  onClick={() => setMenuOpen(false)}
                >
                  {link}
                </Link>
              </div>
            ))}
            <div className="flex justify-center space-x-6 mt-6 text-2xl">
            <button
              onClick={() => setIsModalOpen(true)}
              className="hover:text-gray-400 "
            > <IoPersonOutline /></button>
            <button>
              <FaRegHeart />
            </button>
            <button>
              <IoBagOutline />
            </button>
          </div>

          
          <div className="block md:hidden my-3">
            <SearchInput onItemSelect={handleSearchItemSelect} />
          </div>
          <div className="block md:hidden p-3 text-md border rounded-lg">
            <SearchFilter  onItemSelect={handleSearchItemSelect}/>
          </div>
          </div>
        </div>
      </div>

      {/* Modal Component */}
      <LoginModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onLogin={(formData, isSignUp, e) => {
          e.preventDefault();
          if (isSignUp) {
            console.log("Signing up with data:", formData);
          } else {
            console.log("Logging in with data:", formData);
          }
        }}
      />
    </nav>
  );
}
