import React from "react";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import "./App.css";
import Blog from "./pages/Blog/Blog";
import Home from "./pages/Home/Home";
import MyOrder from "./pages/MyOrder/MyOrder";
import MyPortfolio from "./pages/MyPortfolio/MyPortfolio";
import MyProfile from "./pages/MyProfile/MyProfile";
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
        <Route path="/blog" element={<Blog />} />
        <Route path="/my-portfolio" element={<MyPortfolio />} />
        <Route path='/product/:productId' element={<Purchase/>} />
        <Route path="/my-profile" element={<MyProfile/>} />
        <Route path="/my-order" element={<MyOrder/>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
