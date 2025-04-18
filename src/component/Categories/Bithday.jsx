import { useEffect, useState } from "react";
import axios from "axios";

export default function Birthdaybtn() {
  const [birthdayEvent, setbirthdayEvent] = useState([]);

  //   get
  useEffect(() => {
    const fetchBirthdayEvents = async () => {
      try {
        const response = await axios.get(
          "http://localhost:4050/api/birthday/get/birthday"
        );
        setbirthdayEvent(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchBirthdayEvents();
  }, []);

  // post
  const addBirthdayEvent = async () => {
    try {
      const newEvent = { title, description, image };
      const response = await axios.post(
        "http://localhost:4050/api/birthday/add/birthday",
        newEvent
      );
      console.log("Event added", response.data);
    } catch (error) {
      console.log("error event adding", error);
    }
  };

  return (
    <>
      <section className="p-6">
        <h1 className="text-white bg-[#ee526f] text-center py-2 text-2xl font-bold uppercase">
          Birthday Party
        </h1>

        <div className="flex flex-col items-center gap-6 mt-6">
          {birthdayEvent.map((events) => (
            <div
              key={events._id}
              className="flex flex-col md:flex-row items-center bg-white shadow-lg rounded-lg w-[90%] md:w-[80%] p-6"
            >
              <div className="w-full md:w-1/3 flex justify-center">
                <img
                  src={events.image}
                  alt={events.title}
                  className="w-[30%] md:w-[100%] h-40 md:h-56 object-cover rounded-md "
                />
              </div>
              {/* title */}
              <div className="w-full md:w-2/3 flex flex-col gap-2 mt-4 md:mt-0 md:pl-6">
                <h3 className="text-xl font-semibold text-gray-900 uppercase">
                  {events.title}
                </h3>
                {/* discription */}
                <p className="text-gray-700">{events.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
