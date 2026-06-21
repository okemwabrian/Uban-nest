import ProductCard from '../components/ProductCard';

const Shop = () => {
  // Mock furniture data (In the future, you can pull this from an API or database)
  const products = [
    { id: 1, name: "Velvet Lounge Chair", category: "Living Room", price: 899, image: "https://images.unsplash.com/photo-1598300042247-06399081e285?q=80&w=800&auto=format&fit=crop" },
    { id: 2, name: "Midnight Oak Table", category: "Dining", price: 1250, image: "https://images.unsplash.com/photo-1615873968403-89e068629265?q=80&w=800&auto=format&fit=crop" },
    { id: 3, name: "Minimalist Bed Frame", category: "Bedroom", price: 1450, image: "https://images.unsplash.com/photo-1505693314120-0d443867891c?q=80&w=800&auto=format&fit=crop" },
    { id: 4, name: "Sculptural Floor Lamp", category: "Lighting", price: 349, image: "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?q=80&w=800&auto=format&fit=crop" },
    { id: 5, name: "Artisan Coffee Table", category: "Living Room", price: 699, image: "https://images.unsplash.com/photo-15330904817ecd-14736113b285?q=80&w=800&auto=format&fit=crop" },
    { id: 6, name: "Leather Armchair", category: "Living Room", price: 1100, image: "https://images.unsplash.com/photo-1503602642458-232111445657?q=80&w=800&auto=format&fit=crop" },
  ];

  return (
    <div className="min-h-[calc(100vh-80px)] bg-urban-cream py-12 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-urban-dark mb-4 tracking-tight">All Furniture</h1>
          <p className="text-urban-wood text-lg font-medium">Explore our curated collection of premium home essentials.</p>
        </div>

        {/* Dynamic Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Shop;