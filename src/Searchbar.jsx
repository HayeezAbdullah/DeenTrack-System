import { FaSearch } from "react-icons/fa";

const SearchBar = () => {
  return (
    <div className="flex justify-center">
      <div className="relative w-80 md:w-150 mx-auto">
        <input
          type="text"
          placeholder="Search..."
          className="w-full pl-5 pr-12 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-grey-500 text-gray-700 transition-all duration-300"
        />
        <button className="absolute inset-y-0 right-3 flex items-center text-gray-500 hover:text-gray-900">
          <FaSearch size={18} />
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
