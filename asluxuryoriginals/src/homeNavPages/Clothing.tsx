import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { items } from "./items-json";
import { sublistContent } from "../utils/data-json";
import FilterDropdown from "./FilterDropdown";
import ProductGrid from "./ProductGrid";
import UpdateSection from "./UpdateSection";

interface Product {
  img: string;
  title: string;
  description: string;
  price: number;
  category?: string;
}

const Clothing = () => {
  const { category } = useParams();
  const [selected, setSelected] = useState(0);
  const [products, setProducts] = useState<Product[]>(items.results);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(items.results);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    if (category) {
      const filtered = items.results.filter(
        (item) => item.category?.toLowerCase() === category.toLowerCase()
      );
      setFilteredProducts(filtered);
    } else {
      setFilteredProducts(products);
    }
    console.log(category);
  }, [category, products]);

  const handleSelect = (index: number) => {
    setSelected(index);

    if (index === 2) {
      const sortedItems = [...items.results].sort((a, b) => b.price - a.price);
      setProducts(sortedItems);
    } else if (index === 3) {
      const sortedItems = [...items.results].sort((a, b) => a.price - b.price);
      setProducts(sortedItems);
    } else {
      setProducts(items.results);
    }
  };

  const clothingFilters = sublistContent.Clothing || [];

  return (
    <div className="pt-[100px] md:pt-[200px] mx-5 md:mx-16 text-sm sm:text-base leading-[1.5]">
      <div className="mb-10">
        <h3 className="uppercase text-[35px] font-medium mb-2.5 text-[#FF7F50]">
        {category ? `${category} Collection` : 'Discover the Latest in Clothing'}
        </h3>
        <p>
          Revamp your wardrobe this season with the fashionable new additions
          from Asluxury’s exclusive men’s designer collection..
        </p>
      </div>

      <div className="flex items-start justify-between relative">
        <div className="relative mb-12 flex-[0.5] md:flex-[0.75] z-20">
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="flex justify-between md:hidden bg-[#00000081] text-white rounded-lg px-5 py-2 w-full text-left"
          >
            <span>All Clothings</span> <span>{isDropdownOpen ? "▲" : "▼"}</span>
          </button>

          <ul
            className={`${
              isDropdownOpen ? "block" : "hidden"
            } absolute top-full left-0 w-full bg-white shadow-lg border-t-2 border-gray-300 md:relative md:top-auto md:w-auto md:bg-transparent md:shadow-none md:block md:flex md:items-center md:flex-wrap md:gap-y-2 md:mt-0 md:border-t-0 z-0`}
          >
            {clothingFilters.map((filter: string, index: number) => (
              <li 
              key={index} 
              className={`border-b-2 md:border-2 md:rounded-lg mr-0 md:mr-2.5 ${
                category?.toLowerCase().replace(/-/g, " ") === filter.toLowerCase()
                  ? 'border-[#FF7F50] bg-[#FF7F50] text-white' 
                  : 'border-[#5a5a5a60]'
              } rounded-lg mr-2.5`}
            >
              <Link 
                to={`/clothing/${filter.toLowerCase().replace(/\s+/g, "-")}`} 
                className="block px-5 py-2.5"
              >
                {filter}
              </Link>
            </li>
            
            ))}
          </ul>
        </div>

        <FilterDropdown onSelect={handleSelect} selected={selected} />
      </div>

      <ProductGrid products={filteredProducts} />

      <UpdateSection />
    </div>
  );
};

export default Clothing;





// import { useState } from "react";
// import { Link } from "react-router-dom";
// import { products } from "../utils/data-json";
// import { sublistContent } from "../utils/data-json";
// import FilterDropdown from "./FilterDropdown";
// import ProductGrid from "./ProductGrid";
// import UpdateSection from "./UpdateSection";

// const Clothing = () => {
//   const clothingProducts = products.filter((product) => product.category === "Clothing");

//   const [selected, setSelected] = useState(0);
//   const [items, setItems] = useState(clothingProducts);
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);
//   const [selectedFilter, setSelectedFilter] = useState<number | null>(null);

//   const handleSelect = (index: number) => {
//     setSelected(index);

//     if (index === 2) {
//       const sortedProducts = [...clothingProducts].sort((a, b) => b.price - a.price);
//       setItems(sortedProducts);
//     } else if (index === 3) {
//       const sortedProducts = [...clothingProducts].sort((a, b) => a.price - b.price);
//       setItems(sortedProducts);
//     } else {
//       setItems(clothingProducts);
//     }
//   };

//   const clothingFilters = sublistContent.Clothing || [];

//   const handleFilterClick = (index: number) => {
//     setSelectedFilter(index);
//   };

//   return (
//     <div className="pt-[100px] md:pt-[200px] mx-5 md:mx-16 text-sm sm:text-base leading-[1.5]">
//       <div className="mb-10">
//         <h3 className="uppercase text-[35px] font-medium mb-2.5 text-[#FF7F50]">
//           Discover the Latest in Clothing
//         </h3>
//         <p>
//           Revamp your wardrobe this season with the fashionable new additions
//           from Asluxury’s exclusive men’s designer collection...
//         </p>
//       </div>

//       <div className="flex items-start justify-between relative">
//         <div className="relative mb-12 flex-[0.5] md:flex-[0.75] z-20">
//           <button
//             onClick={() => setIsDropdownOpen(!isDropdownOpen)}
//             className="flex justify-between md:hidden bg-[#00000081] text-white rounded-lg px-5 py-2 w-full text-left"
//           >
//             <span>All Clothings</span> <span>{isDropdownOpen ? "▲" : "▼"}</span>
//           </button>

//           <ul
//             className={`${
//               isDropdownOpen ? "block" : "hidden"
//             } absolute top-full left-0 w-full bg-white shadow-lg border-t-2 border-gray-300 md:relative md:top-auto md:w-auto md:bg-transparent md:shadow-none md:block md:flex md:items-center md:flex-wrap md:gap-y-2 md:mt-0 md:border-t-0 z-0`}
//           >
//             {clothingFilters.map((filter: string, index: number) => (
//               <li
//                 key={index}
//                 className={`border-b-2 md:border-2 md:rounded-lg mr-0 md:mr-2.5 ${
//                   selectedFilter === index ? "bg-[#FF7F50] text-white" : "bg-white text-black"
//                 }`}
//                 onClick={() => handleFilterClick(index)}
//               >
//                 <Link to="" className="block px-5 py-2">{filter}</Link>
//               </li>
//             ))}
//           </ul>
//         </div>

//         <FilterDropdown onSelect={handleSelect} selected={selected} />
//       </div>

//       <ProductGrid products={items} />
//       <UpdateSection />
//     </div>
//   );
// };

// export default Clothing;



{/* <ul
  className={`${
    isDropdownOpen ? "block" : "hidden"
  } absolute top-full left-0 w-full bg-white z-50 shadow-lg border-t-2 border-gray-300 md:relative md:top-auto md:w-auto md:bg-transparent md:shadow-none md:block md:flex md:items-center md:flex-wrap md:gap-y-2 md:mt-0 md:border-t-0`}
>
  {clothingFilters.map((filter: string, index: number) => (
    <li
      key={index}
      onClick={() => handleFilterClick(index)} // Handle click to set active state
      className={`border-b-2 md:border-2 md:rounded-lg px-5 py-2 mr-0 md:mr-2.5 cursor-pointer ${
        activeFilterIndex === index
          ? "text-blue-500 font-bold border-blue-500"
          : "text-gray-700"
      }`}
    >
      {filter}
    </li>
  ))}
</ul> */}



{/* <ul
  className={`${
    isDropdownOpen ? "block" : "hidden"
  } absolute top-full left-0 w-full bg-white z-50 shadow-lg border-t-2 border-gray-300 md:relative md:top-auto md:w-auto md:bg-transparent md:shadow-none md:block md:flex md:items-center md:flex-wrap md:gap-y-2 md:mt-0 md:border-t-0`}
>
  {clothingFilters.map((filter: string, index: number) => (
    <li
      key={index}
      onClick={() => handleFilterClick(index)} // Handle click to set active state
      className={`border-b-2 md:border-2 md:rounded-lg px-5 py-2 mr-0 md:mr-2.5 cursor-pointer ${
        activeFilterIndex === index
          ? "text-blue-500 font-bold border-blue-500"
          : "text-gray-700"
      }`}
    >
      {filter}
    </li>
  ))}
</ul> */}