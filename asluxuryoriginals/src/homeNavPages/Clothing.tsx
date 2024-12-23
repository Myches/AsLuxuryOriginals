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
  const [products, setProducts] = useState<Product[]>(items);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(items);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    if (category) {
      const filtered = items.filter(item => 
        item.category?.toLowerCase() === category.toLowerCase()
      );
      setFilteredProducts(filtered);
    } else {
      setFilteredProducts(products);
    }
  }, [category, products]);

  const handleSelect = (index: number) => {
    setSelected(index);

    if (index === 2) {
      const sortedItems = [...items].sort((a, b) => b.price - a.price);
      setProducts(sortedItems);
    } else if (index === 3) {
      const sortedItems = [...items].sort((a, b) => a.price - b.price);
      setProducts(sortedItems);
    } else {
      setProducts(items);
    }
  };

  const clothingFilters = sublistContent.Clothing || [];

  return (
    <div className="pt-[100px] md:pt-[200px] mx-5 md:mx-16 text-sm sm:text-base leading-[1.5]">
      <div className="mb-10">
        <h3 className="uppercase text-[35px] font-medium mb-2.5 text-[#FF7F50]">
          Discover the Latest in Clothing
        </h3>
        <p>
          Revamp your wardrobe this season with the fashionable new additions
          from Asluxury’s exclusive men’s designer collection..
        </p>
      </div>

      <div className="flex items-start justify-between relative">
        <div className="relative mb-12 flex-[0.5] md:flex-[0.75]">
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="flex justify-between md:hidden bg-[#00000081] text-white rounded-lg px-5 py-2 w-full text-left"
          >
            <span>All Clothings</span> <span>{isDropdownOpen ? "▲" : "▼"}</span>
          </button>

          <ul className="flex items-center flex-wrap gap-y-2">
            {clothingFilters.map((filter: string, index: number) => (
              <li 
                key={index} 
                className={`border-2 ${
                  category?.toLowerCase() === filter.toLowerCase() 
                    ? 'border-black bg-black text-white' 
                    : 'border-[#5a5a5a60]'
                } rounded-lg px-5 py-2.5 mr-2.5`}
              >
                <Link to={`/clothing/${filter.toLowerCase().replace(/\s+/g, "-")}`}>
                  {filter}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <FilterDropdown onSelect={handleSelect} selected={selected} />
      </div>

      <ProductGrid products={filteredProducts}  />

      <UpdateSection />
    </div>
  );
};

export default Clothing;


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