import "./Upcome.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import {
  clearAuthMessage,
  emailRegistration,
  fetchupcomingEvents,
  loginRegistration,
} from "../Slice/Upcome";

export default function UpcomingEvents() {
  const [showTicket, setShowTicket] = useState(false);
  const [inputs, setInputs] = useState({ email: "", password: "" });

  const dispatch = useDispatch();
  const {
    upcomingEvents = [],
    status,
    error,
    authMessage,
  } = useSelector((state) => state.upcoming || {});

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchupcomingEvents());
    }
  }, [dispatch, status]);

  useEffect(() => {
    if (authMessage) {
      alert(authMessage);
      dispatch(clearAuthMessage());
    }
  }, [authMessage, dispatch]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setInputs((prev) => ({ ...prev, [name]: value }));
  };

  const handleRegister = (e) => {
    e.preventDefault();
    dispatch(emailRegistration(inputs));
    setInputs({ email: "", password: "" });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(loginRegistration(inputs));
  };

  const addComingEvent = async () => {
    try {
      const UpcomeEvent = { title, description, image, location, date, time };
      const response = await axios.post(
        "http://localhost:4050/upcomingEvent/api/add/upcomingevents",
        UpcomeEvent,
        {
          headers: { "Content-Type": "application/json" },
        }
      );

      console.log(response.data);
    } catch (error) {
      console.error("Error adding event:", error);
    }
  };

  return (
    <section className="event-main-container">
      <div className="upcoming-border">
        <h1 className="coming-event-head">UPCOMING EVENTS</h1>
      </div>

      {upcomingEvents.map((event, index) => (
        <article key={event._id || index} className="event-card">
          <div className="event-content">
            <h1>{event.title}</h1>
            <p>{event.description}</p>
            <a href="#" className="book-table">
              Read More →
            </a>
            <div className="ticket-btn">
              <button
                type="button"
                className="btn"
                onClick={() => setShowTicket(true)}
              >
                Tickets Booking
              </button>
            </div>
          </div>

          <div className="event-image">
            <img className="event-img" src={event.image} alt={event.title} />
            <div className="event-details">
              <h1 className="event-date">{event.date}</h1>
              <p className="event-location">
                <i className="fa fa-map-marker"></i> {event.location}
              </p>
            </div>
          </div>
        </article>
      ))}

      {/* Ticket Booking Modal */}
      {showTicket && (
        <div className="ticket-modal">
          <div className="ticket-content">
            <i
              className="fa fa-close close-icon"
              onClick={() => setShowTicket(false)}
            ></i>
            <h2 className="tickets-form-heading">Book Your Tickets</h2>
            <form
              className="registration-form"
              onSubmit={(e) => e.preventDefault()}
            >
              <h3 className="event-headings">Event Registration:</h3>
              <input
                type="email"
                name="email"
                placeholder="Enter Your Email"
                value={inputs.email}
                onChange={handleChange}
              />
              <input
                type="password"
                name="password"
                placeholder="Enter Your Password"
                value={inputs.password}
                onChange={handleChange}
              />
              <button
                type="submit"
                className="login-btn"
                onClick={handleRegister}
              >
                Register
              </button>
              <button type="submit" className="login-btn" onClick={handleLogin}>
                Login
              </button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
}
