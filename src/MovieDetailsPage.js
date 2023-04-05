import React, { useState } from 'react';
import BookingFormPage from './BookingFormPage.js';
import './MovieDetailsPage.css';

function MovieDetailsPage(props) {
  const [showForm, setShowForm] = useState(false);
  const { id } = props.match.params;
  const movie = {
    title: 'Example Movie',
    image: 'https://via.placeholder.com/150',
    summary: 'This is an example movie summary.',
    duration: 120,
    director: 'John Doe',
    genre: 'Action',
    releaseDate: '01/01/2022'
  };

  const handleBooking = (data) => {
    console.log(data);
    setShowForm(false);
  };

  return (
    <div>
      <h1>{movie.title}</h1>
      <img src={movie.image} alt={movie.title} />
      <p>{movie.summary}</p>
      <ul>
        <li>Duration: {movie.duration} min</li>
        <li>Director: {movie.director}</li>
        <li>Genre: {movie.genre}</li>
        <li>Release Date: {movie.releaseDate}</li>
      </ul>
      {showForm ? (
        <BookingFormPage
          movieName={movie.title}
          handleBooking={handleBooking}
        />
      ) : (
        <button onClick={() => setShowForm(true)}>Book Now</button>
      )}
    </div>
  );
}

export default MovieDetailsPage;


