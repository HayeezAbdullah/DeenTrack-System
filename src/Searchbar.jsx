import { FaSearch } from "react-icons/fa";

const SearchBar = () => {
  return (
    <div className="relative w-full max-w-md mx-auto">
      <input
        type="text"
        placeholder="Search..."
        className="w-full pl-5 pr-12 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-grey-500 text-gray-700  transition-all duration-300"
      />
      <button className="absolute inset-y-0 right-3 flex items-center text-grey-700 hover:text-grey-900">
        <FaSearch size={18} />
      </button>
    </div>
  );
};

export default SearchBar;
