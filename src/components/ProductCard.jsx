import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <div className="group bg-urban-surface rounded-[32px] overflow-hidden shadow-lg border border-urban-border transition-transform duration-300 hover:-translate-y-1">
      <Link to={`/product/${product.id}`} className="block overflow-hidden h-[280px]">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </Link>

      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <span className="text-xs uppercase tracking-[0.3em] font-semibold text-urban-sage">{product.category}</span>
          <span className="text-lg font-bold text-urban-dark">${product.price.toLocaleString()}</span>
        </div>

        <h2 className="text-2xl font-semibold text-urban-dark mb-4">{product.name}</h2>
        <div className="flex items-center justify-between gap-4">
          <Link
            to={`/product/${product.id}`}
            className="text-urban-dark font-medium hover:text-urban-sage transition-colors"
          >
            View details
          </Link>
          <button
            onClick={() => addToCart(product)}
            className="bg-urban-dark text-white px-4 py-2 rounded-lg font-semibold tracking-wide hover:bg-urban-sage transition-colors"
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
