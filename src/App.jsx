import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import ProductDetails from "./Productdetails";
import Navbar from "./Navbar";

function App() {
  return (
    <Router>
      <Navbar
        triggerUsericon={() => {
          setLoginPopup(true);
        }}
      />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProductDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
