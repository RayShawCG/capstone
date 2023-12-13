import Header from "./Header";
import Footer from "./Footer";
import { useEffect } from "react";

const Confirmation = ({
  bookingData
}) => {
  useEffect(() => {
    const itemString = JSON.stringify(bookingData);
    localStorage.setItem("bookings", itemString);
  }, [bookingData]);

  return (
    <>
      <Header />
      <h1 className="text-5xl font-bold text-[#f4ce14]">Booking Confirmed - {bookingData?.time} {bookingData?.date} for {bookingData?.guests} guests for {bookingData?.occasion}</h1>
      <Footer />
    </>
  );
};

export default Confirmation;
