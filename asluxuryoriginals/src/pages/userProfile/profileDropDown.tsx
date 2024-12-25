import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const UserMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);
  const navigate = useNavigate();

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const menuItems = [
    { label: "Membership", path: "/account/membership" },
    { label: "Orders and Returns", path: "/orders" },
    { label: "Credits and Refunds", path: "/credits" },
    { label: "Details and Security", path: "/security" },
    { label: "Preferences", path: "/account/preferences" },
    { label: "Refer a Friend", path: "/account/refer" },
  ];

  return (
    <div className="relative" ref={menuRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex hiddeni items-center justify-center  rounded-lg  text-center hover:bg-gray-100 focus:outline-none"
      >
        {" "}
        <p className="pr-1 text-sm blur-sm"> Profile</p>
        <svg
          className="w-6 h-auto mb-1 text-gray-700"
          fill="none"
          strokeWidth="2"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </button>

      <div
        className={`absolute left-24 top-5 mt-2 w-56 bg-white rounded-md shadow-lg py-2 px-4 text-4xl border border-gray-200 transform transition-all duration-200 ease-in-out ${
          isOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-2 pointer-events-none"
        }`}
      >
        {menuItems.map((item, index) => (
          <button
            key={item.path}
            onClick={() => {
              navigate(item.path);
              setIsOpen(false);
            }}
            className={`w-full text-left px-5 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 ${
              index !== menuItems.length - 1 ? "border-b border-gray-100" : ""
            }`}
          >
            {item.label}
          </button>
        ))}

        <button
          onClick={() => {
            // Handle logout
            navigate("/login");
            setIsOpen(false);
          }}
          className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50 hover:text-red-700 border-t border-gray-100"
        >
          Sign Out.
        </button>
      </div>
    </div>
  );
};

export default UserMenu;
