import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { items } from './items-json';
import { sublistContent } from '../utils/data-json';
import FilterDropdown from './FilterDropdown';
import ProductGrid from './ProductGrid';
import UpdateSection from './UpdateSection';

interface Product {
  img: string;
  title: string;
  description: string;
  price: number;
  category?: string;
}

const Accessories = () => {
  const { category } = useParams();
  const [selected, setSelected] = useState(0);
  const [products] = useState<Product[]>(items.results);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(items.results);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState("All Accessories");

  useEffect(() => {
    if (category) {
      const filtered = items.results.filter(
        (item) => item.category?.toLowerCase().replace(/\s+/g, "-") === category.toLowerCase()
      );
      setFilteredProducts(filtered);
    } else {
      setFilteredProducts(products);
    }
    console.log(category);
  }, [category, products]);

  const handleSelect = (index: number) => {
    setSelected(index);
  
    const sortedProducts = [...filteredProducts]; 
  
    if (index === 2) {
      sortedProducts.sort((a, b) => b.price - a.price);
    } else if (index === 3) {
      sortedProducts.sort((a, b) => a.price - b.price);
    }
  
    setFilteredProducts(sortedProducts);
  };

  const handleFilterClick = (filter: string) => {
    setSelectedFilter(filter);
    setIsDropdownOpen(false);
  };

  const AccessoriesFilter = sublistContent.Accessories || []


  return (
    <div className="mx-5 md:mx-16 text-sm sm:text-base leading-[1.5]">
      <div className="mb-10">
        <h3 className="uppercase text-[35px] font-medium mb-2.5 leading-[1.5] text-[#FFD700]">{category ? `${category} Collection` : 'Elevate Your Style with New Accessories'}</h3>
        <p>
        Enhance your style this season with the latest additions from Asluxury’s exclusive collection of men’s designer accessories. Discover premium sunglasses, watches, scarves, and more to elevate your wardrobe and make a statement.
        </p>
      </div>

      <div className="flex items-start justify-between relative">
        <div className="relative mb-12 flex-[0.5] md:flex-[0.75] z-20">
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="flex justify-between md:hidden bg-[#00000081] text-white rounded-lg px-5 py-2 w-full text-left"
          >
            <span>{selectedFilter}</span> <span>{isDropdownOpen ? "▲" : "▼"}</span>
          </button>
          <ul
            className={`${
              isDropdownOpen ? "block" : "hidden"
            } absolute top-full left-0 w-full bg-white shadow-lg border-t-2 border-gray-300 md:relative md:top-auto md:w-auto md:bg-transparent md:shadow-none md:block md:flex md:items-center md:flex-wrap md:gap-y-2 md:mt-0 md:border-t-0 z-0`}
          >
            {AccessoriesFilter.map((filter:string, index:number) => (
              <li 
                key={index} 
                className={`border-b-2 md:border-2 md:rounded-lg mr-0 md:mr-2.5 ${
                  category?.toLowerCase().replace(/-/g, " ") === filter.toLowerCase()
                    ? 'border-[#FFD700] bg-[#FFD700] text-white' 
                    : 'border-[#5a5a5a60]'
                } rounded-lg mr-2.5`}
                onClick={() => handleFilterClick(filter)}
              >
                <Link 
                to={`/accessories/${filter.toLowerCase().replace(/\s+/g, "-")}`}
                className="block px-5 py-2.5">{filter}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Set the FilterDropdown to take 25% of the width */}
        <div className="flex-[0.25]">
          <FilterDropdown onSelect={handleSelect} selected={selected} />
        </div>
      </div>

      <ProductGrid products={filteredProducts} />

      <UpdateSection />
    </div>
  );
};

export default Accessories;
