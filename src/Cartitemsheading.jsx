import React from "react";

const Cartitemsheading = () => {
  return (
    <div className="flex items-center justify-between p-4 border-b border-gray-200 bg-white rounded-lg shadow-sm">
      {/* Product Name */}
      <div className="text-gray-700 w-2/6">Product</div>

      {/* Quantity */}
      <div className="text-gray-700 w-1/6 text-center">Quantity</div>

      {/* Price per item */}
      {/* <div className="text-gray-700 w-1/6 text-center">
        {price.toFixed(2)}
      </div> */}

      {/* Total Amount */}
      <div className="text-gray-800 font-semibold w-3/6 text-center">Total</div>

      {/* Delete Button */}
    </div>
  );
};

export default Cartitemsheading;
