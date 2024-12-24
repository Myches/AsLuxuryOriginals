import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { items } from "./items-json";
import { sublistContent } from "../utils/data-json";
import FilterDropdown from "./FilterDropdown";
import ProductGrid from "./ProductGrid";
import UpdateSection from "./UpdateSection";
// import { MdFilterList } from 'react-icons/md';


interface Product {
  img: string;
  title: string;
  description: string;
  price: number;
  category?: string;
}

const Fragrances = () => {
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

  const fragrancesFilters = sublistContent.Fragrances || [];

  return (
    <div className="pt-[100px] md:pt-[200px] mx-5 md:mx-16 text-sm sm:text-base leading-[1.5]">
      <div className="mb-10">
        <h3 className="uppercase text-[35px] font-medium mb-2.5 text-[#774998]">
        {category ? `${category} Collection` : 'Fresh scents for you'}
        </h3>
        <p>Uncover our latest fragrance collection, designed to elevate your style and leave a lasting impression this season.</p>
      </div>

      <div className="flex items-start justify-between relative">
        <div className="relative mb-12 flex-[0.5] md:flex-[0.75] z-20">
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="flex justify-between md:hidden bg-[#00000081] text-white rounded-lg px-5 py-2 w-full text-left"
          >
            <span>All Fragrancess</span> <span>{isDropdownOpen ? "▲" : "▼"}</span>
          </button>

          <ul
            className={`${
              isDropdownOpen ? "block" : "hidden"
            } absolute top-full left-0 w-full bg-white shadow-lg border-t-2 border-gray-300 md:relative md:top-auto md:w-auto md:bg-transparent md:shadow-none md:block md:flex md:items-center md:flex-wrap md:gap-y-2 md:mt-0 md:border-t-0 z-0`}
          >
            {fragrancesFilters.map((filter: string, index: number) => (
              <li 
              key={index} 
              className={`border-b-2 md:border-2 md:rounded-lg mr-0 md:mr-2.5 ${
                category && category.replace(/-/g, " ").toLowerCase() === filter.toLowerCase()
                  ? 'border-[#774998] bg-[#774998] text-white'
                  : 'border-[#5a5a5a60]'
              } rounded-lg mr-2.5`}
            >
              <Link 
                to={`/fragrances/${filter.toLowerCase().replace(/\s+/g, "-")}`}
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

export default Fragrances;



// const Fragrances = () => {
//   const [selected, setSelected] = useState(0);
//   const [products, setProducts] = useState(items);

//   const handleSelect = (index: number) => {
//     setSelected(index);

//     if (index === 2) {
//       const sortedItems = [...items].sort((a, b) => b.price - a.price);
//       setProducts(sortedItems);
//     } else if (index === 3) {
//       const sortedItems = [...items].sort((a, b) => a.price - b.price);
//       setProducts(sortedItems);
//     } else {
//       setProducts(items);
//     }
//   };

//   const FragrancesFilters = sublistContent.Fragrances || [];

//   return (
//     <div className="pt-[100px] md:pt-[200px] mx-5 md:mx-16 text-sm sm:text-base leading-[1.5]">
//       <div className="mb-10">
//         <h3 className="uppercase text-[35px] font-medium mb-2.5 text-[#774998]">Fresh scents for you</h3>
//         <p>
//         Uncover our latest fragrance collection, designed to elevate your style and leave a lasting impression this season.
//         </p>
//       </div>

//       <div className="flex items-start justify-between relative">
//         <div className="relative mb-12 flex-[0.75]">
//           <ul className="flex items-center flex-wrap gap-y-2">
//             {FragrancesFilters.map((filter:string, index:number) => (
//                 <li
//                   key={index}
//                   className="border-2 border-[#5a5a5a60] rounded-lg px-5 py-2 mr-2.5"
//                 >
//                   <Link to={`/${filter}`}>{filter}</Link>
//                 </li>
//               ))}
//           </ul>
//         </div>

//         <FilterDropdown onSelect={handleSelect} selected={selected} />
//       </div>

//       <ProductGrid products={products} />

//       <UpdateSection />
//     </div>
//   );
// };

// export default Fragrances;
