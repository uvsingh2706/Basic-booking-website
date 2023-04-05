import React, { useState } from 'react';
import './BookingFormPage.css';

function BookingForm(props) {
  const [formData, setFormData] = useState({
    movieName: props.movieName,
    date: '',
    time: '',
    seats: ''
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.handleBooking(formData);
  };

  return (
    <div className="booking-form-container">
      <h2 className="booking-form-title">Booking Form</h2>
      <form onSubmit={handleSubmit} className="booking-form">
        <label htmlFor="movieName" className="booking-form-label">Movie Name:</label>
        <input
          type="text"
          id="movieName"
          name="movieName"
          value={formData.movieName}
          onChange={handleInputChange}
          required
          className="booking-form-input"
        />

        <label htmlFor="date" className="booking-form-label">Date:</label>
        <input
          type="date"
          id="date"
          name="date"
          value={formData.date}
          onChange={handleInputChange}
          required
          className="booking-form-input"
        />

        <label htmlFor="time" className="booking-form-label">Time:</label>
        <input
          type="time"
          id="time"
          name="time"
          value={formData.time}
          onChange={handleInputChange}
          required
          className="booking-form-input"
        />

        <label htmlFor="seats" className="booking-form-label">Number of Seats:</label>
        <input
          type="number"
          id="seats"
          name="seats"
          value={formData.seats}
          onChange={handleInputChange}
          min="1"
          max="10"
          required
          className="booking-form-input"
        />
        <div className="separte">
        <button type="submit" className="booking-form-button">Book Now</button>
        </div>
        
      </form>
    </div>
  );
}

export default BookingForm;




