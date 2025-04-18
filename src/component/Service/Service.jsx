import { useEffect, useState } from "react";
import "./Services.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Service() {
  const [service, setservice] = useState([]);
  const navigate = useNavigate();

  // Fetch service (GET)
  useEffect(() => {
    const fetchService = async () => {
      try {
        const response = await axios.get(
          "http://localhost:4050/user/get/Services"
        );
        setservice(response.data);
      } catch (error) {
        console.error("Error fetching Service:", error);
      }
    };

    fetchService();
  }, []);

  // Add Category (POST)
  const addService = async (servicesName) => {
    try {
      const response = await axios.post(
        " http://localhost:4050/user/add/services",
        { name: servicesName },

        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      setservice((prevServices) => [...prevServices, response.data]);
    } catch (error) {
      console.error("Error adding Service:", error);
    }
  };

  return (
    <section className="main">
      <article className="background-color">
        <div className="events-intro">
          <h3>WHAT WE SERVE</h3>
          <p>
            We serve a wide variety of events — dance, music, birthdays,
            weddings, corporate meets, cultural shows, baby showers, and more —
            all tailored to make your celebration truly special.
          </p>
        </div>
        <div className="Services">
          <h2 className="Service-heading">CATEGORIES</h2>
          <hr className="service-line" />
          <ul className="service-list select-none ...">
            {service.map((data) => (
              <li
                key={data._id}
                className="service-btn"
                onClick={() =>
                  navigate(`/category/${data.servicesName.toLowerCase()}`)
                }
              >
                {data.servicesName}
              </li>
            ))}
          </ul>
        </div>
      </article>
    </section>
  );
}
