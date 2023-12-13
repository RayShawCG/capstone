import logo from "../assets/icons/Logo.svg";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <footer className="flex flex-row items-start justify-between gap-5 p-5 bg-[#f4ce14]">
        <div className="flex">
          <img src={logo} alt="Secondary Logo" />
        </div>
        <ul className="flex flex-col">
          <li><h5>Navigation</h5></li>
          <li><Link to="/" className="a">Home</Link></li>
          <li><Link to="/about" className="a">About</Link></li>
          <li><Link to="/menu" className="a">Menu</Link></li>
          <li><Link to="/reservations" className="a">Reservations</Link></li>
          <li><Link to="/order" className="a">Order Online</Link></li>
          <li><Link to="/login" className="a">Login</Link></li>
        </ul>
        <ul className="flex flex-col">
          <li><h5>Contact</h5></li>
          <li><a href="#">Phone Number</a></li>
          <li><a href="#">Email</a></li>
          <li><a href="#">Address</a></li>
        </ul>
        <ul className="flex flex-col">
          <li><h5>Social Media</h5></li>
          <li><a href="#">Instagram</a></li>
          <li><a href="#">LinkedIn</a></li>
          <li><a href="#">Pinterest</a></li>
        </ul>
      </footer>
    </>
  );
}

export default Footer;
