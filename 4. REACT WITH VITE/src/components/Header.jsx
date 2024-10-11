import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { DataContext } from "../context/UserContext";

const Header = () => {
  const data = useContext(DataContext)
  return (
    <>
      <nav className=" bg-emerald-800 flex py-5 px-10 items-center justify-between ">
        <h2 className="text-2xl cursor-pointer">LOGO{data}</h2>
        <div className="flex gap-9 items-center">
          <Link to = "/home" className="text-xl cursor-pointer">Home</Link>
          <Link to = "/product" className="text-xl cursor-pointer">Products</Link>
          <Link to = "/contact" className="text-xl cursor-pointer">Contact</Link>
          <Link to = "/about" className="text-xl cursor-pointer">About</Link>
        </div>
      </nav>
    </>
  );
};

export default Header;
