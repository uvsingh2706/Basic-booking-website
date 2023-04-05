import React, { useState, useEffect } from 'react';
import './HomePage.css';

function HomePage(props) {
  const [shows, setShows] = useState([]);

  useEffect(() => {
    fetch('https://api.tvmaze.com/search/shows?q=all')
      .then(response => response.json())
      .then(data => setShows(data));
  }, []);

  return (
    <div className="home-page">
      <h1 className="title">TV Shows</h1>
      <ul className="show-list">
        {shows.map(show => (
          <li key={show.show.id} className="show-item">
            <div className="show-info">
              <h2 className="show-name">{show.show.name}</h2>
              <p className="show-premiered">Premiered: {show.show.premiered?.substring(0, 4)}</p>
            </div>
            <button className="details-button" onClick={() => props.history.push(`/details/${show.show.id}`)}>Details</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default HomePage;
