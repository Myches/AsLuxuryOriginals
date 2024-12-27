import { Link } from "react-router-dom";

const CheckoutHeader = () => {
  return (
    <div className="flex w-full justify-between items-center">
      <h1 className="uppercase text-[30px] leading-[30px] font-[1000] text-[#222]">
        Shopping Bag
      </h1>
      <Link
        to={"/"}
        className="text-sm text-[#727272] hover:opacity-90 duration-300 font-semibold capitalize underline"
      >
        continue shopping
      </Link>
    </div>
  );
};

export default CheckoutHeader;
