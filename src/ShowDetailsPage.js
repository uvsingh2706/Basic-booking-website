import React, { useState, useEffect } from 'react';
import './ShowDetailsPage.css';
import BookingFormPage from './BookingFormPage.js';
function handleBooking(formData) {
  console.log("Form Data: ", formData);
  // Add code here to handle the form submission
}

function ShowDetailsPage(props) {
  const [show, setShow] = useState(null);

  useEffect(() => {
    fetch(`https://api.tvmaze.com/shows/${props.match.params.id}?embed=episodes`)
      .then(response => response.json())
      .then(data => setShow(data));
  }, [props.match.params.id]);

  const handleBookingClick = () => {
    // handle booking click here
  };
 

  return (
    <div className="show-details-page">
      {show ? (
        <div>
          <h1 className="show-title">{show.name}</h1>
          {show.image && <img src={show.image.medium} alt={show.name} className="show-image" />}
          <p className="show-summary" dangerouslySetInnerHTML={{__html: show.summary}}></p>
          <h2 className="episode-title">Episodes</h2>
          <ul className="episode-list">
            {show._embedded.episodes.map(episode => (
              <li key={episode.id} className="episode-item">
                <span className="episode-number">{episode.season}x{episode.number}</span> - <span className="episode-name">{episode.name}</span>
              </li>
            ))}
          </ul>
          {/* <button onClick={handleBookingClick}>Book Now</button> */}
        </div>
      ) : (
        <p>Loading...</p>
      )}
      {/* <BookingFormPage show={show} /> */}
      <BookingFormPage show={show} handleBooking={handleBooking} />
    </div>
  );
}

export default ShowDetailsPage;


