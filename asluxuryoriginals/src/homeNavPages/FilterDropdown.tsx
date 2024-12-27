import { MdKeyboardArrowDown } from 'react-icons/md';
import { useState } from 'react';
import { Link } from 'react-router-dom';

interface FilterDropdownProps {
  onSelect: (index: number) => void;
  selected: number;
}

const FilterDropdown: React.FC<FilterDropdownProps> = ({ onSelect, selected }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleSelect = (index: number) => {
    onSelect(index);  // Call the passed `onSelect` handler

    // Close the dropdown after 0.5 seconds (500ms)
    setTimeout(() => {
      setIsOpen(false);
    }, 500);
  };

  return (
    <div className="flex flex-col items-end absolute right-0 z-10">
      <button onClick={toggleDropdown} className="flex py-2 px-4 mb-5 rounded-md hover:bg-gray-200">
        <span className="font-bold mr-2 hover:text-gray-500">Sort by</span>
        <MdKeyboardArrowDown size={30} />
      </button>
      {isOpen && (
        <ul className="bg-white border border-gray-400 rounded-lg flex flex-col">
          {['Our pick', 'Newest', 'Price: High to low', 'Price: Low to high'].map((item, index) => (
            <li
              key={index}
              onClick={() => handleSelect(index)}
              className="py-2.5 px-5 w-48 hover:bg-gray-300"
            >
              <Link to="" className="flex justify-between items-center">
                {item} {selected === index && <span className="font-bold">&#10003;</span>}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default FilterDropdown;