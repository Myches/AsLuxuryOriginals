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

const Footwear = () => {
  const { category } = useParams();
  const [selected, setSelected] = useState(0);
  const [products, setProducts] = useState<Product[]>(items);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(items);

  const FootwearFilters = sublistContent.Footwear || [];

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

    let sortedItems = [...filteredProducts];
    switch(index) {
      case 2:
        sortedItems.sort((a, b) => b.price - a.price);
        break;
      case 3:
        sortedItems.sort((a, b) => a.price - b.price);
        break;
      default:
        sortedItems = category ? 
          items.filter(item => item.category?.toLowerCase() === category.toLowerCase()) :
          items;
    }
    setProducts(sortedItems);
  };

  return (
    <div className="pt-[100px] md:pt-[200px] mx-5 md:mx-16 text-sm sm:text-base leading-[1.5]">
      <div className="mb-10">
        <h3 className="uppercase text-[35px] font-medium mb-2.5 text-[#708090]">
          {category ? `${category} Collection` : 'New Footwears for You'}
        </h3>
        <p>
          Step up your style this season with Asluxury's exclusive collection of men's footwear. 
          Discover sneakers, trainers, flip-flops, and sliders that redefine comfort and elegance.
        </p>
      </div>

      <div className="flex items-start justify-between relative">
        <div className="relative mb-12 flex-[0.75]">
          <ul className="flex items-center flex-wrap gap-y-2">
            {FootwearFilters.map((filter: string, index: number) => (
              <li 
                key={index} 
                className={`border-2 ${
                  category?.toLowerCase() === filter.toLowerCase() 
                    ? 'border-black bg-black text-white' 
                    : 'border-[#5a5a5a60]'
                } rounded-lg px-5 py-2.5 mr-2.5`}
              >
                <Link to={`/footwear/${filter.toLowerCase().replace(/\s+/g, "-")}`}>
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

export default Footwear;