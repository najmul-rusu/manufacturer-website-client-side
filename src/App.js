import React from "react";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import "./App.css";
import Blog from "./pages/Blog/Blog";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Register from "./pages/Login/Register/Register";
import RequireAuth from "./pages/Login/RequireAuth/RequireAuth";
import MyPortfolio from "./pages/MyPortfolio/MyPortfolio";
import Payment from "./pages/Payment/Payment";
import Purchase from "./pages/Purchase/Purchase";
import Footer from "./pages/Shared/Footer/Footer";
import Navbar from "./pages/Shared/Header/Navbar";
import NotFound from "./pages/Shared/NotFound/NotFound";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/my-portfolio" element={<MyPortfolio />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/product/:productId"
          element={
            <RequireAuth>
              <Purchase />
            </RequireAuth>
          }
        />
        <Route path="/payment" element={<Payment/>} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
