import { useState } from "react";
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa6";
import SelectInput, { Option } from "./SelectInput";
const options = [
  { value: "40 IT", label: "40 IT - 1" },
  { value: "40 IT", label: "40 IT - 2" },
  { value: "40 IT", label: "40 IT - 4" },
];

const ProductBag = () => {
  const [isMouseEnter, setIsMouseEnter] = useState<boolean>(false);
  const [selectedOption, setSelectedOption] = useState<Option | null>(null);

  const handleChange = (selectedOption: Option | null, name: string) => {
    setSelectedOption(selectedOption);
    console.log(selectedOption, name);
  };
  return (
    <div className="text-[#222] w-full md:w-[40%] space-y-8 ">
      {/* TITLE */}
      <div className="">
        <h2 className=" font-bold text-xl hover:underline duration-500">
          KHAITE
        </h2>
        <p className="text-base">The Marfa ankle leather boots</p>
      </div>

      {/* PRICE */}
      <div className="">
        <p className="text-sm">
          <span className="line-through">$1,400</span> -40%
        </p>

        <h2 className="text-[#e71d34] text-xl font-normal">$840</h2>
      </div>

      {/* Sizes */}
      <div className="w-full space-y-4">
        <SelectInput
          name="size"
          placeholder="Select size"
          options={options}
          handleChange={handleChange}
          value={selectedOption}
        />
        {/* <input
          type="text"
          name="size"
          id="size"
          placeholder="Enter size..."
          className="w-full h-[50px] outline-none focus:outline-none border border-solid border-[#222] px-4 rounded-lg"
        /> */}

        {/* Add to bag */}
        <div className="w-full flex flex-col lg:flex-row  items-center gap-3 ">
          <button
            type="button"
            className="w-full bg-[#222] text-white font-bold hover:bg-opacity-85 duration-500 capitalize text-base h-[50px] rounded-lg"
          >
            add to bag
          </button>
          <button
            onMouseEnter={() => setIsMouseEnter(true)}
            onMouseLeave={() => setIsMouseEnter(false)}
            type="button"
            className="lg:w-[40%] w-full text-[#222] hover:bg-gray-100 border-1.5 border-solid border-[#222] bg-white font-bold hover:bg-opacity-85 duration-500 capitalize text-base h-[50px] flex items-center gap-2 justify-center rounded-lg"
          >
            <p className="">Wishlist</p>
            {isMouseEnter ? (
              <FaHeart className="text-lg" />
            ) : (
              <FaRegHeart className="text-lg" />
            )}
          </button>
        </div>
      </div>

      {/* DELIVERY*/}
      <div className="">
        <p className="text-base">ESTIMATED DELIVERY</p>
        <div className="">Dec 27 - Jan 3</div>
      </div>
    </div>
  );
};

export default ProductBag;
