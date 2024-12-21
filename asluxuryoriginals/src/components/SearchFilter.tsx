
import { useState } from "react";
import { useNavigate } from 'react-router-dom';




type SearchFilterProps = {
  onItemSelect: () => void; 
};

export default function SearchFilter({ onItemSelect }: SearchFilterProps)  {
    const [selectedCategory, setSelectedCategory] = useState<string>('');
    const navigate = useNavigate();

    const handleFilter = () => {
        navigate(`/filter-results?category=${selectedCategory}`);
        onItemSelect();
      };
    
    return (
        <div>
      
      <select
        value={selectedCategory}
        onChange={(e) => setSelectedCategory(e.target.value)}
        className="border border-gray-700 p-2 rounded-md  mx-2 text-sm"
      >
        <option value="">Select a Category</option>
<option value="Clothing">Clothing</option>
<option value="Footwear">Footwear</option>
<option value="Accessories">Accessories</option>
<option value="Fragrances">Fragrances</option>

      </select>
      <button
        onClick={handleFilter}
        disabled={!selectedCategory}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:opacity-50"
      >
        Filter
      </button>
        </div>
    )
}