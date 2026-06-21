import { Link } from 'react-router-dom';
import { ShoppingCart, Menu, Search, User } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="w-full bg-urban-surface border-b border-urban-border sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="text-2xl font-bold text-urban-dark tracking-tighter">
              URBAN NEST
            </Link>
          </div>

          <div className="hidden md:flex space-x-8">
            <Link to="/" className="text-urban-muted hover:text-urban-dark font-medium transition-colors">
              Home
            </Link>
            <Link to="/shop" className="text-urban-muted hover:text-urban-dark font-medium transition-colors">
              Shop Collection
            </Link>
            <Link to="#" className="text-urban-muted hover:text-urban-dark font-medium transition-colors">
              Journal
            </Link>
          </div>

          <div className="flex items-center space-x-6">
            <button className="text-urban-muted hover:text-urban-dark transition-colors">
              <Search size={20} strokeWidth={1.5} />
            </button>
            
            <button className="hidden sm:block text-urban-muted hover:text-urban-dark transition-colors">
              <User size={20} strokeWidth={1.5} />
            </button>

            <Link to="/cart" className="text-urban-muted hover:text-urban-dark relative transition-colors">
              <ShoppingCart size={20} strokeWidth={1.5} />
              <span className="absolute -top-1.5 -right-2 bg-urban-dark text-white text-[10px] font-bold rounded-full h-4 w-4 flex items-center justify-center">
                0
              </span>
            </Link>

            <button className="md:hidden text-urban-muted hover:text-urban-dark transition-colors">
              <Menu size={20} strokeWidth={1.5} />
            </button>
          </div>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;