import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function DanceTicketSection() {
  const { danceId } = useParams();
  const navigate = useNavigate();

  const [danceEvent, setdanceEvent] = useState({});
  console.log(danceEvent, "danceEvent");

  useEffect(() => {
    if (danceId) {
      const FetchDanceEventById = async () => {
        try {
          const danceEvents = await axios.get(
            `http://localhost:4050/api/dance/getbyId/${danceId}`
          );
          setdanceEvent(danceEvents.data);
        } catch (error) {
          console.error(error);
        }
      };
      FetchDanceEventById();
    }
  }, [danceId]);

  const danceTicketsbuynow = () => {
    navigate("/paymentmethods");
  };
  return (
    <>
      <section className="w-full min-h-screen p-6 flex flex-col items-center bg-gray-100">
        <h1 className="bg-[#ee526f] text-white text-center text-xl md:text-2xl font-bold py-3 w-full">
          TICKETS BOOKING
        </h1>

        <div className="bg-black shadow-md p-6 mt-6 max-w-[800px] w-full rounded-lg">
          <h2 className=" text-3xl font-bold text-center text-[#ee5672]">
            {danceEvent?.title}
          </h2>
          <p className="text-white text-center mt-2">
            {danceEvent?.description}
          </p>
          <div className="mt-4 text-white text-center">
            <p>
              <strong> Location:</strong> {danceEvent?.location}
            </p>
            <p>
              <strong> Date:</strong> {danceEvent?.date}
            </p>
            <p>
              <strong> Time:</strong> {danceEvent?.time}
            </p>
          </div>
        </div>

        <div className="text-center mt-8">
          <h2 className="text-black text-3xl font-bold">
            OUR FEATURED ARTISTS
          </h2>
          <hr className="w-[200px] h-[3px] bg-[#ee526f] mx-auto mt-2" />
        </div>

        <div>
          <div className="text-center grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-full max-w-[900px] mt-6 mx-auto ">
            {danceEvent?.images?.map((items, index) => (
              <img
                key={index}
                src={items}
                alt={danceEvent?.title}
                className="w-full h-[250px] object-cover rounded-lg shadow-md "
              />
            ))}
            <p className="mt-2 text-lg font-semibold text-gray-800"></p>
            {danceEvent?.name}
          </div>
        </div>

        <div className="p-6 w-full flex justify-center">
          <button
            type="button"
            className="text-white text-center p-4 bg-[#ee526f] hover:bg-[#d4425b] transition-all duration-300 text-xl font-bold mt-6 w-full max-w-[750px] rounded-lg shadow-lg cursor-pointer"
            onClick={danceTicketsbuynow}
          >
            BUY TICKETS NOW
          </button>
        </div>
      </section>
    </>
  );
}
