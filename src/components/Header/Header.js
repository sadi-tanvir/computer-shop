import React from "react";
import CustomLink from "../custom/CustomLink";

const Header = () => {
  return (
    <div>
      <header className="w-full h-16 flex justify-center items-center my-4">
        <nav className="flex text-white font-bold">
          <CustomLink to="/">HOME</CustomLink>
          <CustomLink to="/reviews">REVIEWS</CustomLink>
          <CustomLink to="/dashboard">DASHBOARD</CustomLink>
          <CustomLink to="/blogs">BLOGS</CustomLink>
          <CustomLink to="/about">ABOUT</CustomLink>
        </nav>
      </header>
    </div>
  );
};

export default Header;
