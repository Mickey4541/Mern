import React from "react";

const Header = () => {
  return (
    <>
      <nav className=" bg-emerald-800 flex py-5 px-10 items-center justify-between ">
        <h2 className="text-2xl cursor-pointer">LOGO</h2>
        <div className="flex gap-9 items-center">
          <h4 className="text-xl cursor-pointer">Home</h4>
          <h4 className="text-xl cursor-pointer">About</h4>
          <h4 className="text-xl cursor-pointer">Services</h4>
          <h4 className="text-xl cursor-pointer">Contact</h4>
          <h4 className="text-xl cursor-pointer">About us</h4>
        </div>
      </nav>
    </>
  );
};

export default Header;
