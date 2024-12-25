const calc = [
  {
    title: "subtotal",
    price: "2.852,85 €",
  },
  {
    title: "delivery",
    price: "0,00 €",
  },
  {
    title: "sale",
    price: "-760,85 €",
  },
];

const Summary = () => {
  return (
    <div className="text-[#222] space-y-4 w-full lg:w-[30%]">
      <h1 className=" text-[22px] leading-7 capitalize">summary</h1>
      <div className="">
        {calc.map((item, index) => (
          <div
            key={index}
            className="text-[#222] text-base space-y-4 flex items-center justify-between"
          >
            <h4 className="capitalize">{item.title}</h4>
            <h4 className="">{item.price}</h4>
          </div>
        ))}
      </div>
      <hr />

      <div className="text-base flex items-start justify-between">
        <h2 className=" font-bold capitalize">total</h2>
        <div className="">
          <h2 className="">
            EUR <span className="text-base font-bold">2.852,85</span>{" "}
          </h2>
          <p className="text-sm">Import duties included</p>
        </div>
      </div>
      <button
        type="button"
        className="w-full bg-[#222] text-white font-bold hover:bg-opacity-85 duration-500 capitalize text-base h-[50px] rounded-lg"
      >
        Go To Checkout
      </button>
    </div>
  );
};

export default Summary;
