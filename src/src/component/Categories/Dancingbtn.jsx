import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Dancingbtn() {
  const [danceEvent, setDanceEvent] = useState([]);
  const [danceId, setDanceId] = useState("");
  console.log(danceId);

  const SectionNavigate = useNavigate();

  // get
  useEffect(() => {
    const FetchDanceEvents = async () => {
      try {
        const response = await axios.get(
          "http://localhost:4050/api/dance/getDance"
        );
        setDanceEvent(response.data);
      } catch (Error) {
        console.error(Error);
      }
    };
    FetchDanceEvents();
  }, []);

  // post
  const addDanceEvent = async () => {
    try {
      const newEvents = { title, description, image, location, date, time };
      const response = await axios.post(
        "http://localhost:4050/api/dance/addDance",
        newEvents
      );
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  //   navigate ticket section
  useEffect(() => {
    if (danceId) {
      SectionNavigate(`danceticketsection/${danceId}`);
    }
  }, [danceId]);

  return (
    <>
      <section className="p-6">
        <h1 className="text-white bg-[#ee526f] text-center py-2 text-2xl font-bold uppercase">
          Dance Events
        </h1>

        <div className="flex flex-col items-center gap-6 mt-6">
          {danceEvent.map((events) => (
            <div
              key={events._id}
              className="flex flex-col md:flex-row items-center bg-white shadow-lg rounded-lg w-[90%] md:w-[80%] p-6"
            >
              <div className="w-full md:w-1/3 flex justify-center">
                <img
                  src={events.image}
                  alt={events.title}
                  className="w-[30%] md:w-[100%] h-40 md:h-56 object-cover rounded-md"
                />
              </div>

              <div className="w-full md:w-2/3 flex flex-col gap-2 mt-4 md:mt-0 md:pl-6">
                <h3 className="text-xl font-semibold text-gray-900">
                  {events.title}
                </h3>
                <p className="text-gray-700">{events.description}</p>
                <p className="text-gray-600">
                  <strong>Location:</strong> {events.location}
                </p>
                <p className="text-gray-600">
                  <strong>Date:</strong> {events.date}
                </p>
                <p className="text-gray-600">
                  <strong>Time:</strong> {events.time}
                </p>
                <button
                  className="mt-4 bg-[#ee526f] hover:bg-[#d9432a] text-white font-bold py-2 px-4 rounded-md w-full md:w-auto transition duration-300"
                  onClick={() =>
                    SectionNavigate(`/danceticketsection/${events._id}`)
                  }
                >
                  Book Ticket
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
