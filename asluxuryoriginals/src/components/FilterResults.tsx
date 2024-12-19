import { useLocation } from 'react-router-dom';
import { products } from '../utils/data-json';



export default function SearchResults () {
  const { search } = useLocation();
  const query = new URLSearchParams(search);
  const category = query.get('category');


  const filteredItems = category
    ? products.filter((item) => item.category === category)
    : products;

  return (
    <div className="p-4 ">
      <div className='flex flex-col items-center justify-center min-h-screen'>
      <h1 className="text-xl font-bold mb-4">Filtered Results</h1>
      <ul className="list-disc pl-5">
        {filteredItems.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
    </div>
  );
};



