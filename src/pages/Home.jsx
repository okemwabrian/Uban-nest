import { Link } from 'react-router-dom';
import { Truck, Leaf, ShieldCheck, ArrowRight } from 'lucide-react';

const Home = () => {
  return (
    <div className="bg-urban-cream transition-colors duration-500">
      
      {/* 1. HERO SECTION */}
      <section className="min-h-[calc(100vh-80px)] flex flex-col items-center justify-center p-6">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-urban-dark mb-6 tracking-tight">
            Elevate Your Space
          </h1>
          <p className="text-lg md:text-xl text-urban-wood mb-10 leading-relaxed font-medium max-w-2xl mx-auto">
            Discover curated, premium furniture for the modern home. 
            Pieces designed not just to fill a room, but to define it.
          </p>
          <Link 
            to="/shop" 
            className="inline-flex items-center gap-2 bg-urban-dark text-white px-8 py-4 rounded-none font-medium tracking-wide hover:bg-urban-sage transition-all duration-300 shadow-xl hover:-translate-y-1"
          >
            Shop The Collection <ArrowRight size={20} />
          </Link>
        </div>
      </section>

      {/* 2. VALUE PROPOSITION SECTION */}
      <section className="py-20 bg-urban-surface border-y border-urban-border">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          <div className="flex flex-col items-center">
            <Truck size={40} strokeWidth={1} className="text-urban-sage mb-4" />
            <h3 className="text-xl font-bold text-urban-dark mb-2">Complimentary Delivery</h3>
            <p className="text-urban-wood">White-glove delivery and assembly on all orders over $999.</p>
          </div>
          <div className="flex flex-col items-center">
            <Leaf size={40} strokeWidth={1} className="text-urban-sage mb-4" />
            <h3 className="text-xl font-bold text-urban-dark mb-2">Sustainable Materials</h3>
            <p className="text-urban-wood">Crafted from ethically sourced wood and organic fabrics.</p>
          </div>
          <div className="flex flex-col items-center">
            <ShieldCheck size={40} strokeWidth={1} className="text-urban-sage mb-4" />
            <h3 className="text-xl font-bold text-urban-dark mb-2">Lifetime Warranty</h3>
            <p className="text-urban-wood">Built to last generations. Backed by our lifetime structural guarantee.</p>
          </div>
        </div>
      </section>

      {/* 3. CATEGORY HIGHLIGHTS */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-urban-dark mb-2">Curated Categories</h2>
            <p className="text-urban-wood font-medium">Explore our most popular collections.</p>
          </div>
          <Link to="/shop" className="hidden md:flex items-center gap-1 text-urban-dark font-bold hover:text-urban-sage transition-colors pb-1 border-b-2 border-urban-dark hover:border-urban-sage">
            View All <ArrowRight size={16} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Category Card 1 */}
          <Link to="/shop" className="group relative h-[400px] overflow-hidden bg-urban-surface shadow-lg rounded-[32px]">
            <img 
              src="https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?q=80&w=800&auto=format&fit=crop" 
              alt="Living Room" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-500"></div>
            <div className="absolute bottom-8 left-8 bg-urban-cream px-6 py-3 shadow-md rounded-xl">
              <h3 className="text-xl font-bold text-urban-dark">Living Room</h3>
            </div>
          </Link>

          {/* Category Card 2 */}
          <Link to="/shop" className="group relative h-[400px] overflow-hidden bg-urban-surface shadow-lg rounded-[32px]">
            <img 
              src="https://images.unsplash.com/photo-1505693314120-0d443867891c?q=80&w=800&auto=format&fit=crop" 
              alt="Bedroom" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-500"></div>
            <div className="absolute bottom-8 left-8 bg-urban-cream px-6 py-3 shadow-md rounded-xl">
              <h3 className="text-xl font-bold text-urban-dark">Bedroom</h3>
            </div>
          </Link>
        </div>
      </section>

    </div>
  );
};

export default Home;