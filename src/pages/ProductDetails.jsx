import { useParams, Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { ArrowLeft, ShoppingBag } from 'lucide-react';

const ProductDetails = () => {
  const { id } = useParams();
  const { addToCart } = useCart();

  // Mock product data - in a real app, you'd fetch this from an API using the ID
  const product = {
    id: parseInt(id),
    name: "Velvet Lounge Chair",
    category: "Living Room",
    price: 899,
    description: "A masterclass in comfort and design. The Velvet Lounge Chair features premium stain-resistant fabric, a solid oak frame, and ergonomic support designed for modern relaxation.",
    image: "https://images.unsplash.com/photo-1598300042247-06399081e285?q=80&w=800&auto=format&fit=crop"
  };

  return (
    <div className="min-h-[calc(100vh-80px)] bg-urban-cream py-12 px-6">
      <div className="max-w-5xl mx-auto">
        <Link to="/shop" className="inline-flex items-center gap-2 text-urban-wood hover:text-urban-dark mb-8 transition-colors">
          <ArrowLeft size={16} /> Back to Shop
        </Link>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 bg-urban-surface p-8 border border-urban-border shadow-sm rounded-[32px]">
          {/* Image */}
          <div className="h-[400px] bg-urban-cream overflow-hidden rounded-[24px]">
            <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
          </div>

          {/* Details */}
          <div className="flex flex-col justify-center">
            <p className="text-urban-sage font-bold uppercase tracking-widest text-sm mb-2">{product.category}</p>
            <h1 className="text-4xl font-bold text-urban-dark mb-4">{product.name}</h1>
            <p className="text-2xl font-bold text-urban-dark mb-6">${product.price.toLocaleString()}</p>
            <p className="text-urban-wood leading-relaxed mb-8">{product.description}</p>
            
            <button 
              onClick={() => addToCart(product)}
              className="w-full flex items-center justify-center gap-2 bg-urban-dark text-white px-8 py-4 font-bold tracking-wide hover:bg-urban-sage transition-all duration-300 rounded-lg"
            >
              <ShoppingBag size={20} /> Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;