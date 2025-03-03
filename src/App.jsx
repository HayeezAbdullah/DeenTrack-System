import Navbar from "./Navbar";
import SearchBar from "./Searchbar";
import SingleCard from "./Singlecard";

const App = () => {
  return (
    <div className="min-h-screen bg-[#F8F5E9]">
      <Navbar />
      <SearchBar />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 p-4">
        <SingleCard type={"Vegetables"} imglink={"./veg.png"} />
        <SingleCard type={"Cooking Essentials"} imglink={"./cooking.png"} />
        <SingleCard type={"Bakery & Dairy"} imglink={"./dairy.png"} />
        <SingleCard type={"Grain Items"} imglink={"./grains.png"} />
        <SingleCard type={"Household Items"} imglink={"./household.png"} />
      </div>
    </div>
  );
};

export default App;
