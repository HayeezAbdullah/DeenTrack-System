import { useParams } from "react-router-dom";

function ProductDetails() {
  const { id } = useParams();

  // Hardcoded product list (could be replaced with an API call)
  const products = [
    {
      id: 101,
      name: "Deen's Ceylon Tea",
      image: "/deenceylontea.png", // Example path
      packaging: "200g Loose Leaf",
      expiry: "Best before: Dec 2025",
      description:
        "Experience the pure essence of Ceylon with Deen’s Ceylon Tea, a carefully selected blend of the finest tea leaves, handpicked from the lush green hills of Sri Lanka. Our tea is 100% natural, free from artificial additives, and crafted to deliver an unmatched aroma and rich, full-bodied flavor in every sip. Sold exclusively through Deen Stores, located in Negombo, we take pride in offering only the highest quality tea, ensuring freshness and authenticity in every pack. Whether you enjoy it as a refreshing morning cup or a soothing evening brew, this premium tea is a testament to tradition, purity, and excellence. With every sip, you’re experiencing the true taste of Ceylon—crafted with care, packaged with trust, and delivered with a promise of quality.",
    },
  ];

  // Find the product that matches the ID
  const product = products.find((p) => p.id.toString() === id);

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      {product ? (
        <div className="bg-white shadow-lg rounded-lg p-8 max-w-4xl w-full flex flex-col md:flex-row items-center md:items-start gap-6">
          {/* Left Side: Image */}
          <div className="w-full md:w-1/3">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-auto rounded-lg shadow-md"
            />
          </div>

          {/* Right Side: Product Info */}
          <div className="w-full md:w-2/3 text-center md:text-left">
            <h2 className="text-3xl font-bold text-gray-800">{product.name}</h2>
            <p className="text-gray-600 text-lg mt-2">{product.packaging}</p>
            <p className="text-gray-600 text-lg">{product.expiry}</p>
            <p className="text-gray-700 mt-4">{product.description}</p>
          </div>
        </div>
      ) : (
        <div className="text-center text-red-600 font-bold text-lg">
          Product not found!
        </div>
      )}
    </div>
  );
}

export default ProductDetails;
