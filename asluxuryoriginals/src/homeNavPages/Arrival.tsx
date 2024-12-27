import { useState } from 'react';
import { Link } from 'react-router-dom'
import { MdKeyboardArrowDown  } from 'react-icons/md';
import { items } from './items-json'
import HoverHeart from './Heart'
import UpdateSection from './UpdateSection';

const NewArrivals = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(0);
  const [products, setProducts] = useState(items.results)

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleSelect = (index: number) => {
    setSelected(index);
    setTimeout(() => {
      setIsOpen(false);
    }, 500);

    if (index === 2) {
      const sortedItems = [...items.results].sort((a, b) => b.price - a.price);
      setProducts(sortedItems);
    } else if (index === 3) {
      const sortedItems = [...items.results].sort((a, b) => a.price - b.price);
      setProducts(sortedItems);
    } else {
      setProducts(items.results);
    }
  };

  
  return (
    <div className=" mx-5 md:mx-16 text-sm sm:text-base leading-[1.5]">
      <div className='mb-10'>
        <h3 className="uppercase text-[35px] font-medium mb-2.5">New Arrivals for you</h3>
        <p>Elevate your wardrobe this Yuletide season and New Year with the stunning new arrivals from Asluxury’s exclusive collection of men’s designer fashion.</p>
      </div>

      <div className='flex items-start justify-between relative'>
        <ul className="flex items-center mb-12">
            {/* <li className='border-2 border-[#5a5a5a60] rounded-lg px-5 py-2.5 mr-2.5'><Link to='' className="flex justify-between items-center font-medium"><span className='mr-2.5'>All Filters</span><MdFilterList size={25} /></Link></li> */}
            <li className='border-2 border-[#5a5a5a60] rounded-lg px-5 py-2.5 mr-2.5'><Link to='/fragrances' className='text-gray-500 bg-transparent px-4 py-2 rounded hover:text-gray-700 active:text-black active:bg-white'>Fragrances</Link></li>
            <li className='border-2 border-[#5a5a5a60] rounded-lg px-5 py-2.5 mr-2.5'><Link to='/clothing' className='text-gray-500 bg-transparent px-4 py-2 rounded hover:text-gray-700 active:text-black active:bg-white'>Clothings</Link></li>
            <li className='border-2 border-[#5a5a5a60] rounded-lg px-5 py-2.5 mr-2.5'><Link to='/footwear' className='text-gray-500 bg-transparent px-4 py-2 rounded hover:text-gray-700 active:text-black active:bg-white'>Footwears</Link></li>
            <li className='border-2 border-[#5a5a5a60] rounded-lg px-5 py-2.5 mr-2.5'><Link to='/accessories' className='text-gray-500 bg-transparent px-4 py-2 rounded hover:text-gray-700 active:text-black active:bg-white'>Accessories</Link></li>
        </ul>
        <div className='flex flex-col items-end absolute right-0 z-10'>
          <button onClick={toggleDropdown} className='flex py-2 px-4 mb-5 rounded-md hover:bg-gray-200'>
                <span className='font-bold mr-2 hover:text-gray-500' >Sort by</span><MdKeyboardArrowDown size={30} />
          </button>

          {isOpen && (
            <ul className='bg-white border border-gray-400 rounded-lg flex flex-col'>
              {['Our pick', 'Newest', 'Price: High to low', 'Price: Low to high'].map((item, index) => (
                <li key={index} onClick={() => handleSelect(index)} className='py-2.5 px-5 w-48 hover:bg-gray-300'>
                  <Link to="" className='flex justify-between items-center'>
                    {item} {selected === index && <span className='font-bold'>&#10003;</span>}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-20 gap-y-10 mb-10">
        {products.map((product) => {
            return (
                <article className='relative'>
                    <Link to=''>
                        <img src={product.img} />
                        <h4 className='mb-2 font-bold'>{product.title}</h4>
                        <p className='description mb-2'>{product.description}</p>
                        <p className='mb-2'>${product.price}</p>
                        <HoverHeart />
                    </Link>
                </article>
            )
        })}
      </div>
      <UpdateSection />
    </div>
  )
}

export default NewArrivals
