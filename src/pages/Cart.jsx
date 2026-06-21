const Cart = () => {
  return (
    <div className="min-h-[calc(100vh-80px)] bg-urban-cream">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold text-urban-dark mb-8">Your Cart</h1>
        <div className="bg-urban-surface p-8 rounded-lg text-center border border-urban-border shadow-sm">
          <p className="text-urban-muted">Your cart is currently empty.</p>
        </div>
      </div>
    </div>
  );
};

export default Cart;