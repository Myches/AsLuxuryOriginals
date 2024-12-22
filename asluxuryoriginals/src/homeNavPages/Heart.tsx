import React, { useState } from "react";
import { FiHeart } from "react-icons/fi";
import { FaHeart } from "react-icons/fa";

const HoverHeart: React.FC = () => {
  const [isClick, setIsClick] = useState(false);

  return (
    <div className="absolute top-2.5 right-0"
      onClick={() => setIsClick(!isClick)} // Trigger hover
      style={{ cursor: "pointer", fontSize: "20px" }} // Optional styling
    >
      {isClick ? (
        <FaHeart style={{ color: "orangered" }} /> // Solid black heart on hover
      ) : (
        <FiHeart style={{ color: "orangered" }} /> // Outline heart by default
      )}
    </div>
  );
};

export default HoverHeart;
