import React from "react";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home";
import Purchase from "./pages/Purchase/Purchase";
import Footer from "./pages/Shared/Footer/Footer";
import Navbar from "./pages/Shared/Header/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path='/product/:productId' element={<Purchase/>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
