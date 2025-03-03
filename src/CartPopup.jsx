import { X } from "lucide-react";
import { motion } from "framer-motion";

const CartPopup = ({ isOpen, onClose }) => {
  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0  bg-opacity-30 backdrop-blur-sm flex justify-center items-center"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            className="bg-white p-6 rounded-lg shadow-lg w-[400px] relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-gray-800"
            >
              <X />
            </button>
            <h2 className="text-2xl font-semibold mb-4">Your Cart 🛒</h2>
            <p>No items in cart yet...</p>
          </motion.div>
        </div>
      )}
    </>
  );
};

export default CartPopup;
