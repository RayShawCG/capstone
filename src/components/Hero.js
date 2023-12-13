import littleLemonFood from "../assets/images/littleLemonFood.jpg";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <>
      <div className="flex gap-5 bg-[#495e57]">
        <div className="flex flex-col flex-grow gap-5 justify-center text-white mx-5">
          <h1 className="text-5xl font-bold text-[#f4ce14]">Little Lemon</h1>
          <h2 className="text-2xl font-bold">Chicago</h2>
          <p>
            We are a family owned Mediterranean restaurant, focused on
            traditional recipes served with a modern twist.
          </p>

          <Link to="/BookingPage">
            <button className="bg-[#f4ce14] rounded-lg text-[#495e57] p-4 font-bold" id="button" to="/BookingPage">
              Reserve a Table
            </button>
          </Link>
        </div>

        <div className="w-1/3">
          <img src={littleLemonFood} alt="Little Lemon Food" />
        </div>
      </div>
    </>
  );
};

export default Hero;
