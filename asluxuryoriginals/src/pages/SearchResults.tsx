
import { useLocation } from "react-router-dom";
import { Product } from "../types/data-types";



export default function SearchResults (){

    const location = useLocation();
    const product: Product = location.state?.product;

    if (!product) {
        return <div>Product not found.</div>;
      }
    return (
<div className="p-4">
      <h1 className="text-2xl font-bold">{product.name}</h1>
      <img src={product.image} alt={product.name} className="w-64 h-64 object-cover my-4" />
      <p className="text-lg font-semibold mt-2">${product.price}</p>
    </div>
    )
}