import { MdOutlineAssignmentReturn } from "react-icons/md";
import { LiaGiftSolid } from "react-icons/lia";
import { TbTruckDelivery } from "react-icons/tb";
const returns = [
  {
    title: "30-day free returns",
    desc: "Make the most of our free returns service with more time to decide.",
    icon: <MdOutlineAssignmentReturn className="text-xl" />,
  },
  {
    title: "Upgrade your Access rewards",
    desc: "Every new order takes you one step closer to unlocking exclusive rewards",
    icon: <LiaGiftSolid className="text-xl" />,
  },
  {
    title: "Fast delivery",
    desc: "To your door in no time. Explore F90, Same Day delivery and Express delivery.",
    icon: <TbTruckDelivery className="text-xl" />,
  },
];

const Returns = () => {
  return (
    <div className="w-full bg-gray-200 flex justify-center items-center py-6 px-8 md:px-0">
      <div className="w-full flex flex-col md:flex-row md:items-center space-y-4 gap-x-10 lg:w-[80%]">
        {returns.map((item, index) => (
          <div
            key={index}
            className="flex flex-col justify-center md:items-center space-y-2 md:text-center text-[#222]"
          >
            {item.icon}
            <h5 className="text-base font-bold">{item.title}</h5>
            <h5 className=" text-sm">{item.desc}</h5>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Returns;
