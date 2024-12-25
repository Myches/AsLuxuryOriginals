import TheDetails from "./TheDetails";
import AccordionComp from "./AccordionComp";

const ProductDescription = () => {
  return (
    <div className="w-full">
      <AccordionComp title="The Details" key="1">
        {<TheDetails />}
      </AccordionComp>
    </div>
  );
};

export default ProductDescription;
