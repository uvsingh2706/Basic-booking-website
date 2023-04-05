import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./HomePage";
import ShowDetailsPage from "./ShowDetailsPage";
import MovieDetailsPage from "./MovieDetailsPage";
import BookingFormPage from "./BookingFormPage";

function App() {
  const [bookingData, setBookingData] = useState({});

  const handleBooking = (data) => {
    setBookingData(data);
  };

  useEffect(() => {
    localStorage.setItem("bookingData", JSON.stringify(bookingData));
  }, [bookingData]);

  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/details/:id" component={ShowDetailsPage} />
        <Route
          path="/movie/:id"
          render={(props) => (
            <MovieDetailsPage {...props} handleBooking={handleBooking} />
          )}
        />
        <Route path="/booking/:id">
          <BookingFormPage bookingData={bookingData} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;





