import React from "react";
import { Link } from "react-router-dom";
import cart from "../assets/cart.svg";
const Navbar = () => {
  return (
    <>
      {/* <div className="flex items-center justify-between px-4 py-2 text-black bg-white rounded-xl">
        <div>
          <Link className="text-4xl" to="/">
            HRX
          </Link>
        </div>
        <div className="flex items-center gap-4">
          <Link to="/products">Products </Link>
          <Link to="/cart">My Cart </Link>

          <Link className="flex items-center gap-1" to="/admin-dashboard">
            Dashboard
            <img
              className="w-4 h-4 cursor-pointer "
              src="https://cdn-icons-png.flaticon.com/512/747/747376.png"
              alt=""
            />{" "}
          </Link>
        </div>
      </div> */}

      <div className="px-44   py-2  bg-[#2874F0] gap-10 text-white text-xl  flex  items-center justi">
        <div className="flex items-center w-7/12 gap-4">
          <Link to="/">
            {" "}
            <img
              className="w-24"
              src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/flipkart-plus_8d85f4.png"
              alt="logo"
            />
          </Link>
          <input
            type="text"
            className=  "w-full h-10 p-4 text-black border-none rounded-none shadow-sm outline-none placeholder:text-sm "
            placeholder="Search for products, brands and more"
          />
        </div>
        <Link
          className="text-sm text-[#2874F0] font-medium px-10 py-2 bg-white"
          to="/products"
        >
          Login{" "}
        </Link>
        <Link className="text-base font-medium" to="/cart">
          Become a Seller
        </Link>
        <Link className="text-base font-medium" to="/cart">
          More
        </Link>
        <Link
          className="flex items-center gap-1 text-base font-medium"
          to="/cart"
        >
          <img src={cart} alt="cart_icon" />
          Cart
        </Link>
      </div>
    </>
  );
};

export default Navbar;
