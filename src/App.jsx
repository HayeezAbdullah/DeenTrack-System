import Navbar from "./Navbar";
import Productcard from "./Productcard";
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
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 p-4">
        <Productcard
          product="Carrot (250g)"
          price="150"
          image="https://th.bing.com/th/id/OIP.wlej91eS1mnUwFVeDW25ggHaHa?rs=1&pid=ImgDetMain"
          onClick={() => console.log("Added to cart")}
        />
        <Productcard
          product="Kottumee"
          price="130"
          image="https://lmd.lk/wp-content/uploads/2021/12/KM-Seasonal-Pack.jpg"
          onClick={() => console.log("Added to cart")}
        />
        <Productcard
          product={"Kotmale Fresh Milk"}
          price="550"
          image="https://lankaface.com/wp-content/uploads/2022/06/kotmale-full-cream-fresh-milk.png"
          onClick={() => console.log("Added to cart")}
        />
      </div>
    </div>
  );
};

export default App;
