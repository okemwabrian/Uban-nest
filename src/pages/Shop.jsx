const Shop = () => {
  return (
    <div className="min-h-[calc(100vh-80px)] bg-urban-cream">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-urban-dark mb-8">All Furniture</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="h-64 bg-urban-surface rounded-lg flex items-center justify-center border border-urban-border text-urban-muted shadow-sm">
            Product Grid Goes Here
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;