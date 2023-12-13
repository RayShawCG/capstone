import * as React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <>
      <ul className="flex gap-5">
        <li className="flex items-center">
          <Link to="/" className="a">Home</Link>
        </li>
        <li className="flex items-center">
          <Link to="/About" className="a">About</Link>
        </li>
        <li className="flex items-center">
          <Link to="/Menu" className="a">Menu</Link>
        </li>
        <li className="flex items-center">
          <Link to="/reservations" className="a">Reservations</Link>
        </li>
        <li className="flex items-center">
          <Link to="/BookingPage" className="a">BookingPage</Link>
        </li>
        {/* <li className="flex items-center">
          <Link to="/" className="a">Login</Link>
        </li> */}
      </ul>
    </>
  );
}

export default Nav;
