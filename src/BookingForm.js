// src/BookingForm.js
import React, { useState } from "react";

function BookingForm({ addBooking }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [busNumber, setBusNumber] = useState("Bus1");

  const handleSubmit = (event) => {
    event.preventDefault();
    const bookingDetails = {
      id: Date.now(),
      name,
      email,
      phone,
      busNumber,
    };
    addBooking(bookingDetails);
    setName("");
    setEmail("");
    setPhone("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          name="name"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          name="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="phone">Phone:</label>
        <input
          type="text"
          name="phone"
          id="phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="busNumber">Bus Number:</label>
        <select
          id="busNumber"
          name="busNumber"
          value={busNumber}
          onChange={(e) => setBusNumber(e.target.value)}
        >
          <option value="Bus1">Bus1</option>
          <option value="Bus2">Bus2</option>
          <option value="Bus3">Bus3</option>
        </select>
      </div>
      <button type="submit">Book</button>
    </form>
  );
}

export default BookingForm;
