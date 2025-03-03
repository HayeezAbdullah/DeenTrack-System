import { ShoppingCart } from "lucide-react";

const Productcard = ({ product, price, image, onClick }) => {
  return (
    <div
      className="rounded-lg shadow-md transform transition duration-300 overflow-hidden  hover:bg-green-50  flex items-center"
      onClick={onClick}
    >
      {/* Image on the Left */}
      <div className="w-2/5">
        <img src={image} alt={product} className="w-full h-40 object-cover" />
      </div>

      {/* Details on the Right */}
      <div className="w-3/5 p-4 flex flex-col justify-between h-full">
        <div>
          <h2 className=" font-bold text-gray-800">{product}</h2>
          <h2 className=" font-semibold text-green-700 my-2">
            Price: {price}/=
          </h2>
        </div>

        <button className="bg-gray-800 text-white flex items-center gap-2 justify-center py-2 px-4 rounded-full hover:bg-green-800 transition text-sm cursor-pointer">
          <ShoppingCart size={18} />
          Purchase
        </button>
      </div>
    </div>
  );
};

export default Productcard;
