// src/App.js
import React, { useState, useEffect } from "react";
import BookingForm from "./BookingForm";
import BookingList from "./BookingList";
import "./styles.css";

function App() {
  const [bookings, setBookings] = useState([]);
  const [currentCount, setCurrentCount] = useState(0);
  const [filterBus, setFilterBus] = useState("All");

  useEffect(() => {
    const storedBookings = JSON.parse(localStorage.getItem("bookings")) || [];
    setBookings(storedBookings);
    setCurrentCount(storedBookings.length);
  }, []);

  const addBooking = (bookingDetails) => {
    const updatedBookings = [...bookings, bookingDetails];
    setBookings(updatedBookings);
    setCurrentCount(currentCount + 1);
    localStorage.setItem("bookings", JSON.stringify(updatedBookings));
  };

  const deleteBooking = (id) => {
    const updatedBookings = bookings.filter((booking) => booking.id !== id);
    setBookings(updatedBookings);
    setCurrentCount(currentCount - 1);
    localStorage.setItem("bookings", JSON.stringify(updatedBookings));
  };

  const updateBooking = (id, updatedBookingDetails) => {
    const updatedBookings = bookings.map((booking) =>
      booking.id === id ? updatedBookingDetails : booking
    );
    setBookings(updatedBookings);
    localStorage.setItem("bookings", JSON.stringify(updatedBookings));
  };

  const handleFilterChange = (event) => {
    setFilterBus(event.target.value);
  };

  const filteredBookings = bookings.filter(
    (booking) => filterBus === "All" || booking.busNumber === filterBus
  );

  return (
    <div className="App">
      <h1>Bus Booking</h1>
      <p>
        Total Bookings: <span>{currentCount}</span>
      </p>
      <div>
        <label htmlFor="filter">Filter by Bus Number:</label>
        <select id="filter" onChange={handleFilterChange}>
          <option value="All">All</option>
          <option value="Bus1">Bus1</option>
          <option value="Bus2">Bus2</option>
          <option value="Bus3">Bus3</option>
        </select>
      </div>
      <BookingForm addBooking={addBooking} />
      <BookingList
        bookings={filteredBookings}
        deleteBooking={deleteBooking}
        updateBooking={updateBooking}
      />
    </div>
  );
}

export default App;
