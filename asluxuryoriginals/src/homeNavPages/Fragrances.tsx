import { useState } from 'react';
import { Link } from 'react-router-dom';
import { items } from './items-json';
import { sublistContent } from "../utils/data-json";
// import { MdFilterList } from 'react-icons/md';
import FilterDropdown from './FilterDropdown';
import ProductGrid from './ProductGrid';
import UpdateSection from './UpdateSection';

const Fragrances = () => {
  const [selected, setSelected] = useState(0);
  const [products, setProducts] = useState(items);

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

  const FragrancesFilters = sublistContent.Fragrances || [];

  return (
    <div className="pt-[100px] md:pt-[200px] mx-5 md:mx-16 text-sm sm:text-base leading-[1.5]">
      <div className="mb-10">
        <h3 className="uppercase text-[35px] font-medium mb-2.5 text-[#774998]">Fresh scents for you</h3>
        <p>
        Uncover our latest fragrance collection, designed to elevate your style and leave a lasting impression this season.
        </p>
      </div>

      <div className="flex items-start justify-between relative">
        <div className="relative mb-12 flex-[0.75]">
          <ul className="flex items-center flex-wrap gap-y-2">
            {FragrancesFilters.map((filter:string, index:number) => (
                <li
                  key={index}
                  className="border-2 border-[#5a5a5a60] rounded-lg px-5 py-2 mr-2.5"
                >
                  <Link to={`/${filter}`}>{filter}</Link>
                </li>
              ))}
          </ul>
        </div>

        <FilterDropdown onSelect={handleSelect} selected={selected} />
      </div>

      <ProductGrid products={products} />

      <UpdateSection />
    </div>
  );
};

export default Fragrances;
