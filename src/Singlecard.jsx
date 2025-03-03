import React from "react";

const SingleCard = ({ type, imglink, onClick }) => {
  return (
    <div
      className=" rounded-lg shadow-md p-6 hover:scale-101 transform transition duration-300 hover:bg-green-50 cursor-pointer flex flex-col items-center justify-center text-center"
      onClick={onClick}
    >
      <div className="flex items-center">
        {/* Icon Section */}
        <div className="w-12 h-12 flex-shrink-0 mr-4">
          <img
            src={imglink}
            alt="Type Icon"
            className="w-full h-full rounded-full object-cover"
          />
        </div>
        {/* Text Content */}
        <div>
          <h2 className="text-xl font-semibold text-gray-800 mb-2 ">{type}</h2>
          {/* <p className="text-gray-600">
            Reliable gas outlets in {type} provide quick and efficient service.
          </p> */}
        </div>
      </div>
    </div>
  );
};

export default SingleCard;
