import React from "react";
import "./styles.css";
import HomePages from "./pages/HomePages";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Cart from "./pages/Cart";
import SingleProduct from "./pages/SingleProducts";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePages />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/singleproduct/:id" element={<SingleProduct />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
