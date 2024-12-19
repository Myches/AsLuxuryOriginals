
import { footerSections } from '../utils/data-json';
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaTiktok } from 'react-icons/fa';




export default function Footer (){

    return (
        <div className=" text-black py-8 font-montserrat bg-gray-300">
           <div className="flex container px-4 lg:grid lg:grid-cols-2 p-12 grid grid-cols-1 lg:space-y-0 space-y-6 sm:items-center sm:justify-center">
  <p className="text-2xl font-bold text-center">AS LUXURY ORIGINALS</p>
  <div className="flex items-center justify-center space-x-6">
    <a href="#">
      <FaFacebookF size={20} />
    </a>
    <a href="#">
      <FaTwitter size={20} />
    </a>
    <a href="#">
      <FaInstagram size={20} />
    </a>
    <a href="#">
      <FaYoutube size={20} />
    </a>
    <a href="#">
      <FaTiktok size={20} />
    </a>
  </div>
</div>

      <div className=" container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
        {footerSections.map((section, index) => (
          <div key={index}>
            
            <h3 className="text-lg font-semibold mb-4">{section.header}</h3>
           
            <ul className="space-y-2">
              {section.links.map((link, idx) => (
                <li key={idx} className="hover:underline">
                  <a href="#">{link}</a>
                </li>
              ))}
            </ul>
            
          </div>
        ))}
        
      </div>
      
         <div className="flex justify-between items-center text-center mt-8 text-sm text-black px-12">
        <p className="mt-4">© {new Date().getFullYear()} AS luxury Originals. All rights reserved.</p>
         </div>
    </div>
    )
}