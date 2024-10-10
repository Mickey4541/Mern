import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="bg-emerald-800 flex py-5 px-10 items-center justify-between">
        <h2 className="text-2xl cursor-pointer">LOGO</h2>
        <div className="flex gap-9 items-center">
          <h4 className="text-xl cursor-pointer">Privacy Policy</h4>
          <h4 className="text-xl cursor-pointer">Terms of Service</h4>
          <h4 className="text-xl cursor-pointer">Support</h4>
          <h4 className="text-xl cursor-pointer">FAQs</h4>
          <h4 className="text-xl cursor-pointer">Contact Us</h4>
        </div>
      </footer>
    </>
  );
};

export default Footer;
