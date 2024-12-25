// import { useLocation } from "react-router-dom";
// import { Product } from "../types/data-types";
import { back, front } from "../../assets";
import AddToBag from "./_components/AddToBag";
import ProductDescription from "./_components/ProductDescription";

export default function SearchResults() {
  // const location = useLocation();
  // const product: Product = location.state?.product;

  // if (!product) {
  //   return <div>Product not found.</div>;
  // }
  return (
    <section className="h-full w-full px-8">
      <div className="w-full flex flex-col md:flex-row md:items-center gap-4">
        <div className="h-full flex w-full md:w-[60%]">
          <img
            src={front}
            alt="front_image"
            className="h-full w-1/2 object-cover"
          />
          <img
            src={back}
            alt="back_image"
            className="h-full w-1/2 object-cover"
          />
        </div>
        <AddToBag />
      </div>
      <ProductDescription />
    </section>
  );
}
