import { Link } from "react-router-dom";

function Home() {
  const products = [
    { id: 101, name: "Deen's Ceylon Tea" },
    { id: 102, name: "Black Tea" },
    { id: 103, name: "Herbal Tea" },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center mb-6">
        Welcome to Our Tea Store
      </h1>
      <p className="text-center mb-8 text-gray-700">
        Select a product to view details:
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
        {products.map((product) => (
          <Link
            to={`/product/${product.id}`}
            key={product.id}
            className="block"
          >
            <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition">
              <h2 className="text-xl font-semibold text-gray-800">
                {product.name}
              </h2>
              <p className="text-sm text-gray-500 mt-2">
                Click to view details
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Home;
