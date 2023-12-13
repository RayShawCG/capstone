import "./App.css";
import Home from "./components/Home";
import BookingPage from "./components/BookingPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useReducer, useState } from "react";
import { fetchAPI, submitAPI } from "./API/Api";
import Confirmation from "./components/Confirmation";

function App() {
  const [bookingData, setBookingData] = useState({
    date: " ",
    time: " ",
    guests: " ",
    occasion: " ",
  });

  const today = new Date();
  const init = { times: fetchAPI(today) };
  const [availableTimes, setAvailableTimes] = useReducer(updateTimes, init);

  const submitForm = () => {
    return submitAPI(bookingData) === true;
  };

  function updateTimes(state, action) {
    if (action.type === "init") {
      return { times: fetchAPI(today) };
    }
    if (action.type === "updatetimes") {
      let selectedDate = new Date(bookingData?.date);
      let newTimes = fetchAPI(selectedDate).filter((time) => time !== "17:00");
      return { times: newTimes };
    }
    throw Error("error updating Times");
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route
          index
          element={
            <Home bookingData={bookingData} />
          }
        />
        <Route
          path="reservations"
          element={
            <BookingPage
              bookingData={bookingData}
              setBookingData={setBookingData}
              availableTimes={availableTimes}
              setAvailableTimes={setAvailableTimes}
              submitForm={submitForm}
            />
          }
        />
        <Route
          path="confirmation"
          element={
            <Confirmation bookingData={bookingData} />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
