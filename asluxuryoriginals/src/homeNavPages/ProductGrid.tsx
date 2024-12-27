import { Link } from 'react-router-dom';
import HoverHeart from './Heart';

interface Product {
  img: string;
  title: string;
  description: string;
  price: number;
}

interface ProductGridProps {
  products: Product[];
}

const ProductGrid: React.FC<ProductGridProps> = ({ products }) => (
  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:gap-x-20 gap-x-8 gap-y-10 mb-20">
    {products.map((product, index) => (
      <article key={index} className="relative">
        <Link to={`#`}>
            <img src={product.img} alt={product.title} className='h-[400px]' />
            <h4 className='mb-2 font-bold'>{product.title}</h4>
            <p className='description mb-2'>{product.description}</p>
            <p className='mb-2'>${product.price}</p>
          <HoverHeart />
        </Link>
      </article>
    ))}
  </div>
);

export default ProductGrid;