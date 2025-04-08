import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function BirthdayTicketSection() {
  const { birthdayId } = useParams();
  console.log(birthdayId, "birthdayid");

  const navigate = useNavigate();

  const [birthdayEvent, setbirthdayEvent] = useState({});
  console.log(birthdayEvent, "birthdayEvent");

  useEffect(() => {
    if (birthdayId) {
      const FetchBirthdaayEventById = async () => {
        try {
          const birthdayEvents = await axios.get(
            `http://localhost:4050/api/birthday/getById/${birthdayId}`
          );
          setbirthdayEvent(birthdayEvents.data);
        } catch (Error) {
          console.error(Error);
        }
      };
      FetchBirthdaayEventById();
    }
  }, [birthdayId]);

  const BirthdayTicketSection = () => {
    navigate("/paymentmethods");
  };

  return (
    <>
      <section className="w-full min-h-screen p-6 flex flex-col items-center bg-gray-100">
        <h1 className="bg-[#ee526f] text-white text-center text-xl md:text-2xl font-bold py-3 w-full">
          TICKETS BOOKING
        </h1>

        <div className="bg-black shadow-md p-6 mt-6 max-w-[800px] w-full rounded-lg">
          <h2 className=" text-3xl font-bold text-center text-[#ee5672] up">
            {birthdayEvent?.title}
          </h2>
          <p className="text-white text-center mt-2">
            {birthdayEvent?.description}
          </p>
          <div className="mt-4 text-white text-center">
            <p>
              <strong> Location:</strong> {birthdayEvent?.location}
            </p>
            <p>
              <strong> Date:</strong> {birthdayEvent?.date}
            </p>
            <p>
              <strong> Time:</strong> {birthdayEvent?.time}
            </p>
          </div>
        </div>

        <div>
          <div className="text-center w-full max-w-[900px] mt-6 mx-auto ">
            {birthdayEvent?.images?.map((items, index) => (
              <img
                key={index}
                src={items}
                alt={birthdayEvent?.title}
                className="w-full h-[250px] object-cover rounded-lg shadow-md "
              />
            ))}
            <p className="mt-2 text-lg font-semibold text-gray-800"></p>
            {birthdayEvent?.name}
          </div>
        </div>

        <div className="p-6 w-full flex justify-center">
          <button
            type="button"
            className="text-white text-center p-4 bg-[#ee526f] hover:bg-[#d4425b] transition-all duration-300 text-xl font-bold mt-6 w-full max-w-[750px] rounded-lg shadow-lg cursor-pointer"
            onClick={BirthdayTicketSection}
          >
            BUY TICKETS NOW
          </button>
        </div>
      </section>
    </>
  );
}
