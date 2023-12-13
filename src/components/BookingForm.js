import { useEffect, useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "../css/booking.css";
const BookingForm = ({
  bookingData,
  setBookingData,
  availableTimes,
  setAvailableTimes,
  submitForm,
}) => {
  const [dateError, setDateError] = useState(null);
  const [timeError, setTimeError] = useState(null);
  const [guestsError, setGuestsError] = useState(null);
  const [occasionError, setOccasionError] = useState(null);
  const [isTouched, setIsTouched] = useState(false);
  const [validated, setValidated] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const validateForm = useCallback(() => {
    if (isTouched && bookingData) {
      setDateError(bookingData?.date === "" ? "Must select a date" : null);
      setDateError(!isValidDate(bookingData?.date) ? "Sorry, reservations not available for this date" : null);
      setTimeError(bookingData?.time === "" ? "Must select a time" : null);
      setGuestsError(bookingData?.guests < 1 ? "Has to be at least 1 guest" : bookingData.guests > 10 ? "Cannot seat more then 10" : null);
      setOccasionError(bookingData?.occasion === "" ? "Must select an occasion" : null);
      setValidated(dateError === null && timeError === null && guestsError === null && occasionError === null && isTouched );
    }
  }, [dateError, timeError, guestsError, occasionError, isTouched, bookingData]);

  useEffect(() => {
    validateForm();
  }, [
    dateError,
    timeError,
    guestsError,
    occasionError,
    isTouched,
    validateForm,
  ]);

  const handleBlur = () => {
    validateForm();
  };

  const handleChange = (e) => {
    switch (e.target.id) {
      case "reservationdate":
        setAvailableTimes({ type: "updatetimes" });
        setBookingData((prevState) => { return { ...prevState, date: e.target.value }; });
        break;
      case "reservationtime":
        setBookingData((prevState) => { return { ...prevState, time: e.target.value }; });
        break;
      case "guests":
        setBookingData((prevState) => { return { ...prevState, guests: e.target.value }; });
        break;
      case "occasion":
        setBookingData((prevState) => { return { ...prevState, occasion: e.target.value }; });
        break;
      default:
        break;
    }
    setIsTouched(true);
    validateForm();
  };

  function isValidDate(dateString) {
    const yyyymmdd = dateString.split("-");
    const dateObj = new Date(
      parseInt(yyyymmdd[0]),
      parseInt(yyyymmdd[1]) - 1,
      parseInt(yyyymmdd[2]) + 1
    );

    if (dateObj < new Date()) return false;
    return true;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    if (submitForm() === true) {
      navigate("/confirmation");
    } else {
      alert("Error");
    }
  };

  const [items, setItems] = useState({
    date: " ",
    time: " ",
    guests: " ",
    occasion: " ",
  });

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("bookings"));
    if (items) { setItems(items); }
  }, []);

  const AvailableTimes = () => {
    const items = JSON.parse(localStorage.getItem("bookings"));
    if (bookingData && bookingData?.date && items?.date !== bookingData?.date) {
      return availableTimes?.times.map((time) => {
        return <option key={time}>{time}</option>;
      });
    } else {
      return availableTimes?.times.map((time) => {
        if (items && items.time !== time) {
          return <option key={time}>{time}</option>;
        }
        return null;
      });
    }
  };

  return (
    <div className="flex flex-col items-center gap-5 m-5">
      <h1 className="text-5xl font-bold text-[#f4ce14]">Book Table Now</h1>
      <form data-testid="booking-form" className="flex flex-col gap-3 w-1/3" onSubmit={handleSubmit}>
        <div className="flex flex-col">
          <label className="font-bold" htmlFor="reservationdate">Choose date</label>
          <input className="border rounded w-full p-3" data-testid="date" id="reservationdate" required value={bookingData?.date} onBlur={handleBlur} onChange={handleChange} type="date" />
          <span className="text-red-500">{dateError}</span>
        </div>
        <div className="flex flex-col">
          <label className="font-bold" htmlFor="reservationtime">Choose time</label>
          <div data-testid="reservationtime">
            <select className="border rounded w-full p-3" data-testid="time" id="reservationtime" required value={bookingData?.time} onBlur={handleBlur} onChange={handleChange}>
              <option></option>
              <AvailableTimes />
            </select>
          </div>
          <span className="text-red-500">{timeError}</span>
        </div>
        <div className="flex flex-col">
          <label className="font-bold" htmlFor="guests">Guests</label>
          <input className="border rounded w-full p-3" data-testid="guests" required type="number" placeholder="1" min="1" max="10" id="guests" value={bookingData?.guests} onBlur={handleBlur} onChange={handleChange} />
          <span className="text-red-500">{guestsError}</span>
        </div>
        <div className="flex flex-col">
          <label className="font-bold" htmlFor="occasion">Occasion</label>
          <div className="w-full" data-testid="res-occasion">
            <select className="border rounded w-full p-3" value={bookingData?.occasion} data-testid="occasion" id="occasion" required onBlur={handleBlur} onChange={handleChange}>
              <option></option>
              <option>Dinner</option>
              <option>Birthday</option>
              <option>Anniversary</option>
            </select>
          </div>
          <span className="text-red-500">{occasionError}</span>
        </div>
        <div className="flex flex-col">
          <button className="bg-[#f4ce14] disabled:bg-[#495e57] rounded-lg text-[#495e57] disabled:text-[#3f7459] p-4 font-bold cursor-pointer disabled:cursor-not-allowed" data-testid="submit" id="submitButton" required disabled={!validated} type="submit">
            {isLoading ? "Loading..." : "Make Your Reservation"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default BookingForm;
