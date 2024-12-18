import { useLocation } from 'react-router-dom';
import { products } from '../utils/data-json';

const SearchResults = () => {
  const { search } = useLocation();
  const query = new URLSearchParams(search);
  const category = query.get('category');

  // Filter items based on the selected category
  const filteredItems = category
    ? products.filter((item) => item.category === category)
    : products;

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Filtered Results</h1>
      <ul className="list-disc pl-5">
        {filteredItems.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default SearchResults;

