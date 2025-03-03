import { ShoppingCart } from "lucide-react";

const FloatingCartButton = ({ onClick, itemCount }) => {
  return (
    <button
      className="fixed bottom-6 right-6 bg-green-600 text-white p-4 rounded-full shadow-lg flex items-center gap-2 hover:bg-green-700 transition"
      onClick={onClick}
    >
      <ShoppingCart size={24} />
      {itemCount > 0 && (
        <span className="bg-red-500 px-2 py-1 rounded-full text-xs">
          {itemCount}
        </span>
      )}
    </button>
  );
};

export default FloatingCartButton;
