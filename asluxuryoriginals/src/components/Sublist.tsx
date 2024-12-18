import React from "react";


interface SublistProps {
  items: string[];
}

const Sublist: React.FC<SublistProps> = ({ items }) => {
  return (
    <div className="fixed top-[150px] left-0 w-full h-[300px] bg-white z-10 p-6">
      <div className="grid grid-cols-3 gap-4 text-left">
        {items.map((item, index) => (
          <p key={index} className="lg:text-lg text-sm font-semibold cursor-pointer hover:text-gray-400">
            {item}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Sublist;