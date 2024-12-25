import { useState } from "react";
import { front } from "../../../assets";
import SelectInput, {
  Option,
} from "../../search-result/_components/SelectInput";
const options = [
  { value: "1", label: "1" },
  { value: "2", label: "2" },
  { value: "3", label: "3" },
  { value: "4", label: "4" },
  { value: "5", label: "5" },
];

const ProductAdded = () => {
  const [showSelect, setShowSelect] = useState<boolean>(false);
  const [numberOfProduct, setNumberOfProduct] = useState<number>(1);
  const [selectedOption, setSelectedOption] = useState<Option | null>(null);

  const handleChange = (selectedOption: Option | null, name: string) => {
    setSelectedOption(selectedOption);
    setNumberOfProduct(Number(selectedOption?.value));
    console.log(name);
  };
  return (
    <div className="w-full lg:w-[70%]">
      <hr />
      <div className="flex items-start flex-wrap gap-8">
        <img src={front} alt="front" className="object-contain size-[200px]" />

        {/* title */}
        <div className="text-[#222]">
          <h4 className="text-base font-bold ">KHAITE</h4>
          <p className="text-base">The Marfa ankle leather boots</p>
          <p className="text-sm">FARFETCH ID: 22206427</p>
        </div>

        {/* price */}
        <div className="text-sm">
          <p className="line-through text-sm">1.332 €</p>
          <p className="">-533 € (40% Sale)</p>
          <p className="text-[#e71d34] text-base text-bold">799 €</p>
          <p className="text-[#222]">Import duties included</p>
        </div>

        {/* size */}
        <div className="text-[#222] space-y-4">
          <div className="">
            <p className="text-base ">Size</p>
            <p className="text-base font-bold">36.5 IT</p>
          </div>

          {/* Quantity */}
          <div className="">
            <p className="capitalize text-base text-[#222]">Quantity</p>
            <div className="flex items-center gap-2 text-[#222] text-sm">
              {showSelect ? (
                <SelectInput
                  name="size"
                  containerWidth="100px"
                  placeholder="1"
                  options={options}
                  handleChange={handleChange}
                  value={selectedOption}
                  containerHeight="20px"
                />
              ) : (
                <p className="font-bold">{numberOfProduct}</p>
              )}

              {/* buttons */}
              {showSelect ? (
                <button
                  type="button"
                  onClick={() => setShowSelect(false)}
                  className=" capitalize underline opacity-90"
                >
                  cancel
                </button>
              ) : (
                <button
                  type="button"
                  onClick={() => setShowSelect(true)}
                  className="text-sm capitalize underline opacity-90"
                >
                  change
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductAdded;
