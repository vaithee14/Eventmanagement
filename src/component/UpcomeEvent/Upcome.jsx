import "./Upcome.css";
import { useEffect, useState } from "react";
import axios from "axios";

export default function UpcomingEvents() {
  const [Upcomingevents, setUpcomingEvents] = useState([]);
  const [showTicket, setShowTicket] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const { name, value } = event.target;
    setInputs((prev) => ({ ...prev, [name]: value }));
  };

  // Fetch upcoming events
  useEffect(() => {
    const FetchUpcomingEvents = async () => {
      try {
        const Upcomingevent = await axios.get(
          "http://localhost:4050/upcomingEvent/api/get/upcomingevents"
        );
        setUpcomingEvents(Upcomingevent.data);
      } catch (error) {
        console.error("Error fetching events:", error);
      }
    };
    FetchUpcomingEvents();
  }, []);

  const addComingEvent = async () => {
    try {
      const UpcomeEvent = { title, description, image, location, date };
      const response = await axios.post(
        "http://localhost:4050/upcomingEvent/api/add/upcomingevents",
        UpcomeEvent
      );
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <section className="event-main-container">
      <div className="upcoming-border">
        <h1 className="coming-event-head">UPCOMING EVENTS</h1>
      </div>

      {Upcomingevents.map((event, index) => (
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
                onClick={() => {
                  setShowTicket(true);
                  setSelectedEvent(event);
                }}
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
      {showTicket && selectedEvent && (
        <div className="ticket-modal">
          <div className="ticket-content">
            <i
              className="fa fa-close close-icon"
              onClick={() => {
                setShowTicket(false);
                setSelectedEvent(null);
              }}
            ></i>
            {/* input field */}
            <h2 className="tickets-form-heading">Book Your Tickets</h2>
            <form className="registration-form">
              <h3 className="event-headings">
                {selectedEvent.title} Registration:
              </h3>
              <input
                type="email"
                name="email"
                placeholder="Enter Your Email"
                value={inputs.email || ""}
                onChange={handleChange}
              />
              <input
                type="password"
                name="password"
                placeholder="Enter Your Password"
                value={inputs.password || ""}
                onChange={handleChange}
              />
              <button type="submit" className="login-btn">
                Register
              </button>
              <button type="submit" className="login-btn">
                Login
              </button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
}
