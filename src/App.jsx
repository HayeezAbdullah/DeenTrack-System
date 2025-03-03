import { useState } from "react";
import FloatingCartButton from "./FLoatingcartbutton";
import Navbar from "./Navbar";
import Productcard from "./Productcard";
import SearchBar from "./Searchbar";
import SingleCard from "./Singlecard";
import CartPopup from "./CartPopup";

const App = () => {
  const [cartItems, setCartItems] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);

  const addToCart = (product, price) => {
    setCartItems([...cartItems, { product, price }]);
  };
  return (
    <div className="min-h-screen bg-[#F7F7F7]">
      <Navbar />
      <SearchBar />

      <div className="hidden md:grid md:grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 p-4">
        <SingleCard type={"Vegetables"} imglink={"./veg.png"} />
        <SingleCard type={"Cooking Essentials"} imglink={"./cooking.png"} />
        <SingleCard type={"Bakery & Dairy"} imglink={"./dairy.png"} />
        <SingleCard type={"Grain Items"} imglink={"./grains.png"} />
        <SingleCard type={"Household Items"} imglink={"./household.png"} />
      </div>
      <div className="container mt-5 mx-auto">
        <h2 className="text-xl  text-center mb-6 text-gray-700">
          Deal of the Day
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 ">
          <Productcard
            product="Carrot (250g)"
            price="150"
            image="./carrot.png"
            onClick={() => console.log("Added to cart")}
          />
          <Productcard
            product="Kottumee"
            price="130"
            image="./kottumee.png"
            onClick={() => console.log("Added to cart")}
          />
          <Productcard
            product={"Kotmale Fresh Milk"}
            price="550"
            image="./kotmale_fresh_milk.png"
            onClick={() => console.log("Added to cart")}
          />
          <Productcard
            product={"Ratthi 200g"}
            price="555"
            image="./ratthi.png"
            onClick={() => console.log("Added to cart")}
          />
        </div>
      </div>
      <FloatingCartButton
        onClick={() => setCartOpen(true)}
        itemCount={cartItems.length}
      />
      <CartPopup
        isOpen={cartOpen}
        onClose={() => setCartOpen(false)}
        cartItems={cartItems}
      />
    </div>
  );
};

export default App;
