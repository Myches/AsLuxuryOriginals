import { useState, useEffect, useRef } from 'react';
import { CiSearch } from "react-icons/ci";
import { products } from '../utils/data-json';
import { Product } from '../types/data-types';
import { useNavigate } from "react-router-dom";



type SearchInputProps = {
  onItemSelect: () => void;
};


export default function SearchInput({ onItemSelect }: SearchInputProps)  {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [data, setData] = useState<Product[]>([]); 
  const [filteredData, setFilteredData] = useState<{
    nameMatches: Product[];
    categoryMatches: Record<string, Product[]>;
  }>({
    nameMatches: [],
    categoryMatches: {},
  }); 
  const [loading, setLoading] = useState<boolean>(true);
  const [isFocused, setIsFocused] = useState<boolean>(false); 
  const navigate = useNavigate(); 
  
  const searchRef = useRef<HTMLDivElement | null>(null); 
  const inputRef = useRef<HTMLInputElement | null>(null);

  
  useEffect(() => {
    setTimeout(() => {
      setData(products); 
      setLoading(false);
    }, 2000);
  }, []);

  
  useEffect(() => {
    if (searchQuery) {
      const query = searchQuery.toLowerCase();

      const nameMatches = data.filter((product) =>
        product.name.toLowerCase().includes(query)
      );
      const categoryMatches = data.filter((product) =>
        product.category.toLowerCase().includes(query)
      );

      const groupedCategoryMatches = categoryMatches.reduce<
        Record<string, Product[]>
      >((acc, product) => {
        if (!acc[product.category]) acc[product.category] = [];
        acc[product.category].push(product);
        return acc;
      }, {});
   setFilteredData({ nameMatches, categoryMatches: groupedCategoryMatches });
    } else {
      setFilteredData({ nameMatches: [], categoryMatches: {} });
    }
  }, [searchQuery, data]);


  const handleClickOutside = (event: MouseEvent) => {
    if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
      setSearchQuery("");
      setFilteredData({ nameMatches: [], categoryMatches: {} });
      if (inputRef.current) {
        inputRef.current.blur();
      }
    }
  };

  
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);


  const handleResultClick = (product: Product) => {
    setSearchQuery(""); 
    setFilteredData({ nameMatches: [], categoryMatches: {} }); 
    onItemSelect();
    navigate(`/product/${product.id}`, { state: { product } });
  };

  return (
    <div className="relative w-full md:w-[300px]" ref={searchRef}>
      <div className="flex items-center border rounded border-black p-2">
        <CiSearch size={20} className="mr-2" />
        <input
          ref={inputRef}
          type="text"
          placeholder="Search by product "
          className="w-full flex-grow outline-none"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onFocus={() => setIsFocused(true)} 
          disabled={loading}
        />
      </div>


      {searchQuery && isFocused && (
        <div className="absolute top-full left-0 right-0 bg-white border rounded shadow-lg z-50 mt-1 overflow-auto max-h-[300px]">
          {loading ? (
            <p className="p-2 text-gray-500">Loading...</p>
          ) : filteredData.nameMatches.length > 0 ||
            Object.keys(filteredData.categoryMatches).length > 0 ? (
            <>
              {filteredData.nameMatches.length > 0 && (
                <div className="p-2">
                  <p className="font-bold text-gray-700 mb-2">Matching Products</p>
                  {filteredData.nameMatches.map((product) => (
                    <div
                      key={product.id}
                      className="p-2 hover:bg-gray-100 cursor-pointer flex items-center"
                      onClick={() => handleResultClick(product)} 
                    >
                      <div>
                        <p className="font-medium">
                          {highlightMatch(product.name, searchQuery)}
                        </p>
                        <p className="text-sm text-gray-500">${product.price}</p>
                      </div>
                    </div>
                  ))}
                </div>
              )}

             
              {Object.keys(filteredData.categoryMatches).map((category) => (
                <div key={category} className="p-2">
                  <p className="font-bold text-gray-700 mb-2">{category}</p>
                  {filteredData.categoryMatches[category].map((product) => (
                    <div
                      key={product.id}
                      className="p-2 hover:bg-gray-100 cursor-pointer flex items-center"
                      onClick={() => handleResultClick(product)}
                    >
                      <div>
                        <p className="font-medium">
                          {highlightMatch(product.name, searchQuery)}
                        </p>
                        <p className="text-sm text-gray-500">${product.price}</p>
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </>
          ) : (
            <p className="p-2 text-gray-500">No results found</p>
          )}
        </div>
      )}
    </div>
  );
}


function highlightMatch(text: string, query: string) {
  const parts = text.split(new RegExp(`(${query})`, "gi"));
  return (
    <>
      {parts.map((part, index) =>
        part.toLowerCase() === query.toLowerCase() ? (
          <span key={index} className="bg-yellow-200 font-bold">
            {part}
          </span>
        ) : (
          part
        )
      )}
    </>
  );
}