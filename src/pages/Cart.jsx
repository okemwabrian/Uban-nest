import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { ShoppingBag, ArrowRight, Trash2 } from 'lucide-react';

const Cart = () => {
  // 1. Pull in the real cart data from your global memory bank
  const { cartItems } = useCart();

  // 2. Automatically calculate the total price
  const subtotal = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);

  return (
    <div className="min-h-[calc(100vh-80px)] bg-urban-cream py-12 px-6 transition-colors duration-500">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-urban-dark mb-10 tracking-tight">Your Cart</h1>
        
        {/* CONDITIONAL RENDERING: Check if cart is empty */}
        {cartItems.length === 0 ? (
          
          /* --- THE EMPTY STATE --- */
          <div className="bg-urban-surface p-16 text-center border border-urban-border shadow-sm flex flex-col items-center justify-center min-h-[500px] rounded-[32px]">
            <div className="h-24 w-24 bg-urban-cream rounded-full flex items-center justify-center mb-6">
              <ShoppingBag size={40} strokeWidth={1.5} className="text-urban-sage" />
            </div>
            <h2 className="text-2xl font-bold text-urban-dark mb-3">Your cart is empty</h2>
            <p className="text-urban-wood mb-8 text-lg">Looks like you haven't added any premium pieces yet.</p>
            <Link 
              to="/shop" 
              className="inline-flex items-center gap-2 bg-urban-dark text-white px-8 py-4 rounded-none font-medium tracking-wide hover:bg-urban-sage transition-all duration-300 shadow-xl hover:-translate-y-1"
            >
              Continue Shopping <ArrowRight size={20} />
            </Link>
          </div>

        ) : (

          /* --- THE FILLED STATE --- */
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            {/* Left Column: The Items List */}
            <div className="lg:col-span-2 space-y-6">
              {cartItems.map((item, index) => (
                <div key={index} className="flex flex-col sm:flex-row gap-6 bg-urban-surface p-6 border border-urban-border shadow-sm items-center relative pr-12 sm:pr-6 rounded-[24px]">
                  
                  {/* Item Image */}
                  <div className="w-32 h-32 bg-urban-cream flex-shrink-0 relative overflow-hidden">
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                  </div>
                  
                  {/* Item Details */}
                  <div className="flex-grow text-center sm:text-left w-full">
                    <p className="text-urban-sage text-xs uppercase font-bold tracking-wider mb-1">{item.category}</p>
                    <h3 className="text-xl font-bold text-urban-dark mb-2">{item.name}</h3>
                    <p className="text-urban-wood font-medium">Quantity: {item.quantity}</p>
                  </div>
                  
                  {/* Item Price & Remove Action */}
                  <div className="text-center sm:text-right">
                    <p className="text-2xl font-bold text-urban-dark mb-2">
                      ${(item.price * item.quantity).toLocaleString()}
                    </p>
                    <button className="text-urban-muted hover:text-red-500 transition-colors flex items-center gap-1 justify-center sm:justify-end w-full uppercase text-xs font-bold tracking-wider">
                      <Trash2 size={16} /> Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Right Column: Order Summary */}
            <div className="bg-urban-surface p-8 border border-urban-border shadow-sm h-fit sticky top-28 rounded-[32px]">
              <h2 className="text-2xl font-bold text-urban-dark mb-6">Order Summary</h2>
              
              <div className="space-y-4 mb-6 border-b border-urban-border pb-6">
                <div className="flex justify-between text-urban-wood font-medium">
                  <span>Subtotal</span>
                  <span>${subtotal.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-urban-wood font-medium">
                  <span>Shipping</span>
                  <span>Complimentary</span>
                </div>
              </div>
              
              <div className="flex justify-between text-2xl font-bold text-urban-dark mb-8">
                <span>Total</span>
                <span>${subtotal.toLocaleString()}</span>
              </div>
              
              <button className="w-full bg-urban-dark text-white px-6 py-4 rounded-none font-medium tracking-wide hover:bg-urban-sage transition-all duration-300 shadow-xl flex items-center justify-center gap-2 hover:-translate-y-1">
                Secure Checkout <ArrowRight size={20} />
              </button>
            </div>

          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;