import { BsTelephone } from "react-icons/bs";
import { MdOutlineMail } from "react-icons/md";
const Help = () => {
  return (
    <div className="w-full bg-gray-200 flex-col gap-8 md:flex-row  flex md:justify-center md:items-center py-6 px-8 ">
      <div className="text-[#222] w-full ">
        <h5 className="text-base font-bold">Need help?</h5>
        <p className="text-sm ">
          Contact us by phone or e-mail to discuss with our customer service
          advisors.
        </p>
      </div>

      {/* contact */}
      <div className="flex items-center flex-wrap gap-8 w-full justify-between">
        {/* Telephone */}
        <div className="">
          <div className="flex item-center gap-3">
            <BsTelephone className="text-lg" />
            <h2 className="">Telephone</h2>
          </div>
          <a
            href="tel:+1234567890"
            className="text-sm font-bold underline hover:text-[#707070] duration-400"
          >
            +33 9 74 59 45 88
          </a>
        </div>

        {/* email */}
        <div className="">
          <div className="flex item-center gap-3">
            <MdOutlineMail className="text-lg" />
            <h2 className="">Email</h2>
          </div>
          <p className="text-sm">
            <a
              href="mailto:example@example.com"
              className=" underline hover:text-[#707070] duration-400"
            >
              Click here
            </a>{" "}
            <span className="">to write to us</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Help;
