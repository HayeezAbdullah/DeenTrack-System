const Productcard = ({ product, price, image, onClick }) => {
  return (
    <div
      className="rounded-lg shadow-md hover:scale-101 hover:bg-green-50 transform transition duration-300 cursor-pointer overflow-hidden"
      onClick={onClick}
    >
      {/* Image Section */}
      <div className="w-full h-40">
        <img src={image} alt={product} className="w-full h-full object-cover" />
      </div>

      {/* Product Name + Price */}
      <div className="p-4 flex flex-col justify-between h-40">
        <div className="mb-2">
          <h2 className="text-xl font-bold text-gray-700">{product}</h2>
          <h2 className="text-3xl font-bold text-gray-900">{price}/=</h2>
        </div>

        {/* Button Section */}
        <button className="bg-gray-800 text-white py-2 px-4 rounded-full hover:bg-green-800 transition">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Productcard;
