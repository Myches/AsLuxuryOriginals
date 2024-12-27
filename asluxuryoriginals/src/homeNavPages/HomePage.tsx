import { useState } from 'react'
import ProductGrid from './ProductGrid'
import { Link } from 'react-router-dom'
import { items } from './items-json'
import arrival from './img/arrival.jpg'
import { AiOutlineQuestionCircle, AiOutlineMail } from "react-icons/ai";
import { FaTshirt } from "react-icons/fa";
import UpdateSection from './UpdateSection'

interface Product {
    img: string;
    title: string;
    description: string;
    price: number;
    category?: string;
    
  }


const Home = () => {
    
    const [products] = useState<Product[]>(items.results);
    const topProducts = products.slice(0, 8)
    const arrivalProducts = products.slice(8, 16)


    return (
        <div className=" mx-5 md:mx-16 text-sm sm:text-base leading-[1.5]">
            <div className='mb-20'>
                <div className="flex items-center justify-between gap-4 mb-10">
                    <p className='flex-[0_0_65%]'>Selected Yuletide and New Year season pieces. T&Cs apply, discount applied at checkout.</p>
                    <Link to={'/'} className="border border-black rounded-lg px-4 py-2 text-base font-bold transition-all duration-200 hover:text-white hover:bg-black hover:-translate-y-1 hover:shadow-md">Shop Now</Link>
                </div>
                <div>
                    <ProductGrid products={topProducts} />
                    <Link to='' className="inline-block mt-5 rounded-lg bg-gray-300/20 px-5 py-2 transition-all duration-200 hover:text-white hover:bg-black hover:translate-y-[-5px] hover:shadow-lg">See More &gt;&gt;&gt;</Link>
                </div>
            </div>
            
            <div className='mb-20'>
                <div className="flex flex-col lg:flex-row gap-4 items-center justify-around mb-24">
                    <h2 className='mb-10 text-5xl font-medium text-center tracking-[20px] transition-all duration-300 hover:text-[#A0522D] hover:skew-x-12'>NEW ARRIVALS</h2>
                    <img src={arrival} className="w-[300px] h-[400px] md:w-[400px] md:h-[500px] lg:w-[500px] lg:h-[600px]" alt='' />
                </div>
                
                <div className="flex items-center justify-between gap-4 mb-10">
                    <p className='flex-[0_0_65%]'>Shop the latest trends and stylish arrivals! Elevate your look and stay ahead in fashion with pieces everyone loves. Shop now!</p>
                    <Link to={'/'} className="border border-black rounded-lg px-4 py-2 text-base font-bold transition-all duration-200 hover:text-white hover:bg-black hover:-translate-y-1 hover:shadow-md">Shop Now</Link>
                </div>
                <div>
                    <ProductGrid products={arrivalProducts} />
                    <Link to='./new-arrivals' className="inline-block mt-5 rounded-lg bg-gray-300/20 px-5 py-2 transition-all duration-200 hover:text-white hover:bg-black hover:translate-y-[-5px] hover:shadow-lg">See More &gt;&gt;&gt;</Link>
                </div>
            </div>

            <div className='mb-20'>
                <h2 className='text-center uppercase text-4xl font-medium tracking-[10px] mb-5'>Trending items</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-20 gap-y-10">
                    {products.slice(16,20).map((item) => {
                        return (
                            <article>
                                <img src={item.img} className='h-[400px]' />
                                <h4 className='font-[500] uppercase'>{item.title}</h4>
                            </article>
                        )
                    })}
                </div>
            </div>

            {/* FAQS */}
            
            <ul className="flex justify-between flex-col sm:flex-row gap-4 mb-20">
                <li className="border border-black/10 rounded-lg bg-gray-200/10 flex flex-col gap-2 w-full sm:w-[30%] p-6 shadow-md shadow-gray-300 transition-all duration-300 hover:shadow-lg hover:shadow-gray-400 hover:translate-y-[-5px]">
                    <FaTshirt size={30} />
                    <p>HOW TO SHOP</p>
                    <p>Your guide to placing orders</p>
                </li>
                <li className="border border-black/10 rounded-lg bg-gray-200/10 flex flex-col gap-2 w-full sm:w-[30%] p-6 shadow-md shadow-gray-300 transition-all duration-300 hover:shadow-lg hover:shadow-gray-400 hover:translate-y-[-5px]">
                    <AiOutlineQuestionCircle size={30} />
                    <p>FAQS</p>
                    <p>Your question answered</p>
                </li>
                <li className="border border-black/10 rounded-lg bg-gray-200/10 flex flex-col gap-2 w-full sm:w-[30%] p-6 shadow-md shadow-gray-300 transition-all duration-300 hover:shadow-lg hover:shadow-gray-400 hover:translate-y-[-5px]">
                    <AiOutlineMail size={30} />
                    <p>NEED HELP ?</p>
                    <p>Contact our service team</p>
                </li>
            </ul>
            
            <UpdateSection />
        </div>
    )
}

export default Home