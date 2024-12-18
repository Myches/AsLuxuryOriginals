import { useState, useEffect, useRef } from 'react';
import { CiSearch } from "react-icons/ci";
import { products } from '../utils/data-json';
import { Product } from '../types/data-types';
import { useNavigate } from "react-router-dom";

export default function SearchInput() {
  const [searchQuery, setSearchQuery] = useState<string>(""); // Search input state
  const [data, setData] = useState<Product[]>([]); // Products data
  const [filteredData, setFilteredData] = useState<{
    nameMatches: Product[];
    categoryMatches: Record<string, Product[]>;
  }>({
    nameMatches: [],
    categoryMatches: {},
  }); // Filtered and grouped results
  const [loading, setLoading] = useState<boolean>(true); // Loading state
  const [isFocused, setIsFocused] = useState<boolean>(false); // Track if the input is focused
  const navigate = useNavigate(); // For navigation
  
  const searchRef = useRef<HTMLDivElement | null>(null); // Ref to track the search component
  const inputRef = useRef<HTMLInputElement | null>(null); // Ref to track the input field

  // Simulate data fetching
  useEffect(() => {
    setTimeout(() => {
      setData(products); // Load the data from imported products
      setLoading(false);
    }, 2000);
  }, []);

  // Filter and group data based on search query
  useEffect(() => {
    if (searchQuery) {
      const query = searchQuery.toLowerCase();

      // Filter products matching name
      const nameMatches = data.filter((product) =>
        product.name.toLowerCase().includes(query)
      );

      // Filter products matching category
      const categoryMatches = data.filter((product) =>
        product.category.toLowerCase().includes(query)
      );

      // Group category matches
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

  // Handle click outside to blur input and hide results
  const handleClickOutside = (event: MouseEvent) => {
    if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
      setSearchQuery(""); // Clear the search query
      setFilteredData({ nameMatches: [], categoryMatches: {} }); // Clear the filtered data
      if (inputRef.current) {
        inputRef.current.blur(); // Move focus out of input
      }
    }
  };

  // Add the event listener to detect clicks outside
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Handle navigation to product or category page
  const handleResultClick = (product: Product) => {
    setSearchQuery(""); // Clear the search query
    setFilteredData({ nameMatches: [], categoryMatches: {} }); // Clear the filtered data

    // Navigate to the product page
    navigate(`/product/${product.id}`, { state: { product } });
  };

  return (
    <div className="relative w-full md:w-[300px]" ref={searchRef}>
      {/* Search Bar */}
      <div className="flex items-center border rounded border-black p-2">
        <CiSearch size={20} className="mr-2" />
        <input
          ref={inputRef}
          type="text"
          placeholder="Search by product or category..."
          className="w-full flex-grow outline-none"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onFocus={() => setIsFocused(true)} // Set focus state to true
          disabled={loading}
        />
      </div>

      {/* Search Results */}
      {searchQuery && isFocused && (
        <div className="absolute top-full left-0 right-0 bg-white border rounded shadow-lg z-50 mt-1 overflow-auto max-h-[300px]">
          {loading ? (
            <p className="p-2 text-gray-500">Loading...</p>
          ) : filteredData.nameMatches.length > 0 ||
            Object.keys(filteredData.categoryMatches).length > 0 ? (
            <>
              {/* Display name matches first */}
              {filteredData.nameMatches.length > 0 && (
                <div className="p-2">
                  <p className="font-bold text-gray-700 mb-2">Matching Products</p>
                  {filteredData.nameMatches.map((product) => (
                    <div
                      key={product.id}
                      className="p-2 hover:bg-gray-100 cursor-pointer flex items-center"
                      onClick={() => handleResultClick(product)} // Handle click
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

              {/* Display category matches grouped */}
              {Object.keys(filteredData.categoryMatches).map((category) => (
                <div key={category} className="p-2">
                  <p className="font-bold text-gray-700 mb-2">{category}</p>
                  {filteredData.categoryMatches[category].map((product) => (
                    <div
                      key={product.id}
                      className="p-2 hover:bg-gray-100 cursor-pointer flex items-center"
                      onClick={() => handleResultClick(product)} // Handle click
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

// Highlight matching text
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
