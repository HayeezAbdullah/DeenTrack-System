import { X } from "lucide-react";
import { motion } from "framer-motion";
import Cartitems from "./Cartitems";
import Cartitemsheading from "./Cartitemsheading";

const CartPopup = ({ isOpen, onClose }) => {
  const handleDelete = () => {
    alert("Item Deleted");
  };
  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0  bg-opacity-100 backdrop-blur-sm flex justify-center items-center"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            className="bg-[#F7F7F7] p-6 rounded-lg shadow-xl w-[400px] relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-gray-800"
            >
              <X />
            </button>
            <h2 className="text-2xl font-semibold mb-4">Your Cart 🛒</h2>
            <Cartitemsheading />
            <Cartitems
              type="Kotmale Fresh Milk"
              quantity={2}
              price={550}
              onDelete={handleDelete}
            />
            <Cartitems
              type="Kottumee"
              quantity={5}
              price={130}
              onDelete={handleDelete}
            />
            <Cartitems
              type="Ratthi"
              quantity={2}
              price={555}
              onDelete={handleDelete}
            />
          </motion.div>
        </div>
      )}
    </>
  );
};

export default CartPopup;
