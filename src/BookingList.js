import React, { useState } from "react";

function BookingList({ bookings, deleteBooking, updateBooking }) {
  const [editingId, setEditingId] = useState(null);
  const [editedBooking, setEditedBooking] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const handleEdit = (booking) => {
    setEditingId(booking.id);
    setEditedBooking({
      name: booking.name,
      email: booking.email,
      phone: booking.phone,
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedBooking((prevBooking) => ({
      ...prevBooking,
      [name]: value,
    }));
  };

  const handleSave = (id) => {
    updateBooking(id, { ...editedBooking, id });
    setEditingId(null);
  };

  const handleCancel = () => {
    setEditingId(null);
  };

  return (
    <ul>
      <strong>ALL BOOKINGS</strong>
      {bookings.map((booking) => (
        <li key={booking.id}>
          {editingId === booking.id ? (
            <>
              <input
                type="text"
                name="name"
                value={editedBooking.name}
                onChange={handleChange}
              />
              <input
                type="email"
                name="email"
                value={editedBooking.email}
                onChange={handleChange}
              />
              <input
                type="tel"
                name="phone"
                value={editedBooking.phone}
                onChange={handleChange}
              />
              <button onClick={() => handleSave(booking.id)}>Save</button>
              <button onClick={handleCancel}>Cancel</button>
            </>
          ) : (
            <>
              {booking.name} - {booking.email} - {booking.phone} -{" "}
              {booking.busNumber}
              <button onClick={() => deleteBooking(booking.id)}>Delete</button>
              <button onClick={() => handleEdit(booking)}>Edit</button>
            </>
          )}
        </li>
      ))}
    </ul>
  );
}

export default BookingList;
