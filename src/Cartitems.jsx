import React from "react";
import { Trash2 } from "lucide-react";

const Cartitems = ({ type, quantity, price, onDelete }) => {
  const totalAmount = quantity * price;

  return (
    <div className="flex items-center justify-between p-4 border-b border-gray-200 bg-white rounded-lg shadow-sm">
      {/* Product Name */}
      <div className="text-gray-700 w-1/4">{type}</div>

      {/* Quantity */}
      <div className="text-gray-700 w-1/6 text-center">{quantity}</div>

      {/* Price per item */}
      {/* <div className="text-gray-700 w-1/6 text-center">
        {price.toFixed(2)}
      </div> */}

      {/* Total Amount */}
      <div className="text-gray-800 font-semibold w-1/6 text-center">
        {totalAmount}/=
      </div>

      {/* Delete Button */}
      <button
        onClick={onDelete}
        className="w-10 h-10 flex items-center justify-center bg-red-500 text-white rounded-full hover:bg-red-600 transition"
      >
        <Trash2 size={20} />
      </button>
    </div>
  );
};

export default Cartitems;
