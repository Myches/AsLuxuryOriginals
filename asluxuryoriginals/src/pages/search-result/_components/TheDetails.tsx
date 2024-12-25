const composition = [
  {
    title: "compostion",
    subArr: [
      "Outer: CALFSKIN 100%",
      "Sole: Calf Leather 100%",
      "Lining: Calf Leather 100%",
    ],
  },
];
const TheDetails = () => {
  return (
    <div className="w-full flex md:w-[60%] items-center justify-between">
      {/* Title */}
      <div className="space-y-8">
        <div className="text-[#222]">
          <h1 className="text-xl  font-bold">KHAITE</h1>
          <p className="text-base">The Marfa ankle leather boots</p>
        </div>
        <p className="text-base">Made in Italy</p>
      </div>
      <div className="">
        {composition.map((item, index) => {
          const { title, subArr } = item;
          return (
            <div key={index} className="space-y-2 text-base  text-[#222]  ">
              <h1 className="capitalize font-bold">{title}</h1>
              {subArr.map((item) => (
                <p key={item} className="text-base">
                  {item}
                </p>
              ))}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TheDetails;
