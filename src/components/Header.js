import Nav from "./Nav";
import logo from "../assets/icons/Logo.png";

import React from "react";

function Header() {
  return (
    <>
      <header className="flex gap-3">
        <div className="w-96">
          <img className="w-full" src={logo} alt="Little Lemon" />
        </div>
        <nav className="flex flex-grow justify-end">
          <Nav />
        </nav>
      </header>
    </>
  );
}

export default Header;
