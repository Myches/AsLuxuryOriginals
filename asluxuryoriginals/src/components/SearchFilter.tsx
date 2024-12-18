
import { useState } from "react";
import { useNavigate } from 'react-router-dom';

export default function SearchFilter(){

    const [selectedCategory, setSelectedCategory] = useState<string>('');
    const navigate = useNavigate();

    const handleFilter = () => {
        navigate(`/results?category=${selectedCategory}`);
      };
    
    return (
        <div>
         <h1 className="text-xl font-bold mb-4">Filter by Category</h1>
      <select
        value={selectedCategory}
        onChange={(e) => setSelectedCategory(e.target.value)}
        className="border border-gray-700 p-2 rounded-md mb-4 mx-2 text-sm"
      >
        <option value="">Select a Category</option>
<option value="clothing">Clothing</option>
<option value="footwear">Footwear</option>
<option value="accessories">Accessories</option>
<option value="fragrances">Fragrances</option>

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