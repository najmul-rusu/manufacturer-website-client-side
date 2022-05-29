import React from "react";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import "./App.css";
import Navbar from "./pages/Shared/Header/Navbar";
import Home from "./pages/Home/Home";
import Blog from "./pages/Blog/Blog"
import MyPortfolio from "./pages/MyPortfolio/MyPortfolio"
import AllProduct from "./pages/AllProduct/AllProduct"
import AddProduct from "./pages/Dashboard/AddProduct/AddProduct"
import Login from "./pages/Login/Login"
import Register from "./pages/Login/Register/Register"
import RequireAuth from "./pages/Login/RequireAuth/RequireAuth"
import Dashboard from "./pages/Dashboard/Dashboard"
import MyProfile from "./pages/Dashboard/MyProfile/MyProfile"
import RequireAdmin from "./pages/Login/RequireAdmin"
import Users from "./pages/Dashboard/Users/Users"
import AllOrder from "./pages/Dashboard/AllOrders/AllOrders"
import ManageProduct from "./pages/Dashboard/ManageProducts/ManageProducts"
import AddNewReview from "./pages/Dashboard/AddNewReview/AddNewReview"
import Purchase from "./pages/Purchase/Purchase"
import Payment from "./pages/Payment/Payment"
import NotFound from "./pages/Shared/NotFound/NotFound"
import Footer from "./pages/Shared/Footer/Footer"

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/blogs" element={<Blog />} />
        <Route path="/my-portfolio" element={<MyPortfolio />} />
        <Route path="/all-products" element={<AllProduct />} />
        <Route path="/add-product" element={<AddProduct />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        
        <Route path="dashboard" element={
          <RequireAuth>
            <Dashboard></Dashboard>
          </RequireAuth>

        } >


          <Route index element={<MyProfile></MyProfile>}></Route>

          <Route path="users" element={<RequireAdmin><Users></Users></RequireAdmin>}></Route>
          <Route path="users" element={<RequireAdmin><Users></Users></RequireAdmin>}></Route>


          <Route path="allorders" element={<RequireAdmin><AllOrder /></RequireAdmin>}></Route>

          <Route path="manageproducts" element={<RequireAdmin><ManageProduct></ManageProduct></RequireAdmin>}></Route>
          <Route path="myorders" element={<></>}></Route>
          {/* {/ <Route path="addreview" element={<AddAReview></AddAReview>}></Route> /} */}
          <Route path="addreview" element={<AddNewReview></AddNewReview>}></Route>
          <Route path="addproduct" element={<RequireAdmin><AddProduct></AddProduct></RequireAdmin>}></Route>


        </Route>


        <Route
          path="/product/:productId"
          element={
            <RequireAuth>
              <Purchase />
            </RequireAuth>
          }
        />
        <Route path="/payment/:paymentId" element={<Payment/>} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
