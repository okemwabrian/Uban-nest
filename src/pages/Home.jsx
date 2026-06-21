import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-[calc(100vh-80px)] bg-urban-cream flex flex-col items-center justify-center p-6 transition-colors duration-500">
      <div className="text-center max-w-2xl">
        <h1 className="text-5xl md:text-6xl font-bold text-urban-dark mb-6 tracking-tight">
          Elevate Your Space
        </h1>
        <p className="text-lg text-urban-wood mb-8 leading-relaxed font-medium">
          Discover curated, premium furniture for the modern home. 
          Pieces designed not just to fill a room, but to define it.
        </p>
        <Link 
          to="/shop" 
          className="inline-block bg-urban-dark text-white px-8 py-4 rounded-none font-medium tracking-wide hover:bg-urban-sage transition-colors duration-300 shadow-lg"
        >
          Shop The Collection
        </Link>
      </div>
    </div>
  );
};

export default Home;